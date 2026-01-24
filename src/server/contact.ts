import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import { contactLeadSchema } from '@/lib/validations/contact'
import {
  CONTACT_FORM_EMAIL_RATE_LIMIT,
  CONTACT_FORM_RATE_LIMIT,
  checkRateLimit,
} from '@/lib/rate-limit'

const GHL_BASE_URL = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = '2021-07-28'
const CONTACT_TAGS = ['atlassian lead']
const SPAM_MESSAGE =
  'Spam detected. Please use a real email address and try again.'
const MIN_FORM_FILL_TIME_MS = 3000

/**
 * Get client IP from request headers
 * Checks common proxy headers used by Netlify, Cloudflare, etc.
 */
function getClientIP(): string {
  // Try common proxy headers (in order of preference)
  const forwardedFor = getRequestHeader('x-forwarded-for')
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, first one is the client
    return forwardedFor.split(',')[0].trim()
  }

  const realIP = getRequestHeader('x-real-ip')
  if (realIP) return realIP

  const cfConnectingIP = getRequestHeader('cf-connecting-ip')
  if (cfConnectingIP) return cfConnectingIP

  // Fallback for local development
  return 'unknown'
}

function getGhlConfig() {
  const apiKey = process.env.GHL_API_KEY
  const locationId = process.env.GHL_LOCATION_ID

  console.warn('[GHL CONFIG]', {
    hasApiKey: Boolean(apiKey),
    apiKeyLength: apiKey?.length ?? 0,
    hasLocationId: Boolean(locationId),
    locationId,
  })

  if (!apiKey || !locationId) {
    throw new Error(
      'Missing GoHighLevel configuration. Please set GHL_API_KEY and GHL_LOCATION_ID.',
    )
  }

  return { apiKey, locationId }
}

function buildHeaders(apiKey: string) {
  return {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    Version: GHL_API_VERSION,
  }
}

async function fetchContactByEmail({
  apiKey,
  locationId,
  email,
}: {
  apiKey: string
  locationId: string
  email: string
}) {
  const url = new URL(`${GHL_BASE_URL}/contacts/`)
  url.searchParams.set('locationId', locationId)
  url.searchParams.set('query', email)

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: buildHeaders(apiKey),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Failed to search GoHighLevel contacts: ${errorBody}`)
  }

  const payload = (await response.json()) as {
    contacts?: Array<{ id: string; email?: string }>
  }

  const contacts = payload.contacts ?? []
  const match = contacts.find(
    (contact) => contact.email?.toLowerCase() === email.toLowerCase(),
  )
  return match?.id ?? null
}

async function fetchContactByPhone({
  apiKey,
  locationId,
  phone,
}: {
  apiKey: string
  locationId: string
  phone: string
}) {
  const url = new URL(`${GHL_BASE_URL}/contacts/`)
  url.searchParams.set('locationId', locationId)
  url.searchParams.set('query', phone)

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: buildHeaders(apiKey),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Failed to search GoHighLevel contacts: ${errorBody}`)
  }

  const payload = (await response.json()) as {
    contacts?: Array<{ id: string; phone?: string }>
  }

  const contacts = payload.contacts ?? []
  const match = contacts.find((contact) => contact.phone === phone)
  return match?.id ?? null
}

async function upsertContact({
  apiKey,
  locationId,
  contactId,
  body,
}: {
  apiKey: string
  locationId: string
  contactId?: string | null
  body: Record<string, unknown>
}) {
  const url = contactId
    ? `${GHL_BASE_URL}/contacts/${contactId}`
    : `${GHL_BASE_URL}/contacts/`

  const response = await fetch(url, {
    method: contactId ? 'PUT' : 'POST',
    headers: buildHeaders(apiKey),
    body: JSON.stringify({
      locationId,
      ...body,
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Failed to submit to GoHighLevel: ${errorBody}`)
  }

  return response.json()
}

function resolveContactId({
  existingId,
  response,
}: {
  existingId?: string | null
  response: any
}) {
  if (existingId) return existingId

  return (
    response?.contact?.id ||
    response?.contactId ||
    response?.id ||
    response?.data?.id ||
    null
  )
}

// Server function to submit a contact lead
export const submitContactLead = createServerFn({ method: 'POST' })
  .inputValidator(contactLeadSchema)
  .handler(async ({ data }) => {
    console.log(
      '[SUBMIT_CONTACT_LEAD] Starting submission for email:',
      data.email,
    )

    // Rate limiting check
    const clientIP = getClientIP()
    console.log('[SUBMIT_CONTACT_LEAD] Client IP:', clientIP)
    const rateLimitResult = checkRateLimit(clientIP, CONTACT_FORM_RATE_LIMIT)

    if (!rateLimitResult.allowed) {
      console.log('[SUBMIT_CONTACT_LEAD] Rate limit exceeded for IP:', clientIP)
      throw new Error(
        `Too many submissions. Please try again in ${rateLimitResult.resetInSeconds} seconds.`,
      )
    }

    const emailRateLimitResult = checkRateLimit(
      `email:${data.email}`,
      CONTACT_FORM_EMAIL_RATE_LIMIT,
    )
    if (!emailRateLimitResult.allowed) {
      console.log(
        '[SUBMIT_CONTACT_LEAD] Rate limit exceeded for email:',
        data.email,
      )
      throw new Error(SPAM_MESSAGE)
    }

    const formFillTime = Date.now() - data.formStartedAt
    if (Number.isFinite(formFillTime) && formFillTime < MIN_FORM_FILL_TIME_MS) {
      console.log(
        '[SUBMIT_CONTACT_LEAD] Submission too fast (ms):',
        formFillTime,
      )
      throw new Error(SPAM_MESSAGE)
    }

    try {
      const { apiKey, locationId } = getGhlConfig()
      console.log(
        '[SUBMIT_CONTACT_LEAD] Config loaded, locationId:',
        locationId,
      )

      const existingContactId = await fetchContactByEmail({
        apiKey,
        locationId,
        email: data.email,
      })
      console.log(
        '[SUBMIT_CONTACT_LEAD] Existing contact ID by email:',
        existingContactId,
      )

      const phoneContactId =
        !existingContactId && data.phone
          ? await fetchContactByPhone({
              apiKey,
              locationId,
              phone: data.phone,
            })
          : null
      console.log('[SUBMIT_CONTACT_LEAD] Contact ID by phone:', phoneContactId)

      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone ?? undefined,
        companyName: data.organization ?? undefined,
        source: 'Atlassian Page',
        tags: CONTACT_TAGS,
        customFields: [
          {
            id: 'lVjSpLMAxZmeoeA9RbMo',
            value: data.message,
          },
        ],
      }
      console.log('[SUBMIT_CONTACT_LEAD] Payload prepared:', {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
      })

      const upsertResponse = await upsertContact({
        apiKey,
        locationId,
        contactId: existingContactId ?? phoneContactId,
        body: payload,
      })
      console.log('[SUBMIT_CONTACT_LEAD] Upsert response:', upsertResponse)

      const resolvedContactId = resolveContactId({
        existingId: existingContactId ?? phoneContactId,
        response: upsertResponse,
      })
      console.log(
        '[SUBMIT_CONTACT_LEAD] Resolved contact ID:',
        resolvedContactId,
      )

      if (!resolvedContactId) {
        console.log('[SUBMIT_CONTACT_LEAD] Failed to resolve contact ID')
        throw new Error('Failed to resolve GoHighLevel contact ID.')
      }

      console.log('[SUBMIT_CONTACT_LEAD] Submission successful')
      return {
        success: true,
        message: 'Thank you for reaching out! We will contact you soon.',
      }
    } catch (error) {
      console.error('[SUBMIT_CONTACT_LEAD] Error:', error)
      throw new Error('Failed to submit your request. Please try again later.')
    }
  })
