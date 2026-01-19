import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import { contactLeadSchema } from '@/lib/validations/contact'
import { checkRateLimit, CONTACT_FORM_RATE_LIMIT } from '@/lib/rate-limit'

const GHL_BASE_URL = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = '2021-07-28'
const CONTACT_TAGS = ['atlassian lead']

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

async function addContactNote({
  apiKey,
  contactId,
  note,
}: {
  apiKey: string
  contactId: string
  note: string
}) {
  const response = await fetch(`${GHL_BASE_URL}/contacts/${contactId}/notes`, {
    method: 'POST',
    headers: buildHeaders(apiKey),
    body: JSON.stringify({ body: note }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(`Failed to add GoHighLevel note: ${errorBody}`)
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
    // Rate limiting check
    const clientIP = getClientIP()
    const rateLimitResult = checkRateLimit(clientIP, CONTACT_FORM_RATE_LIMIT)

    if (!rateLimitResult.allowed) {
      throw new Error(
        `Too many submissions. Please try again in ${rateLimitResult.resetInSeconds} seconds.`,
      )
    }

    try {
      const { apiKey, locationId } = getGhlConfig()

      const existingContactId = await fetchContactByEmail({
        apiKey,
        locationId,
        email: data.email,
      })

      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone ?? undefined,
        companyName: data.organization ?? undefined,
        tags: CONTACT_TAGS,
      }

      const upsertResponse = await upsertContact({
        apiKey,
        locationId,
        contactId: existingContactId,
        body: payload,
      })

      const resolvedContactId = resolveContactId({
        existingId: existingContactId,
        response: upsertResponse,
      })

      if (!resolvedContactId) {
        throw new Error('Failed to resolve GoHighLevel contact ID.')
      }

      await addContactNote({
        apiKey,
        contactId: resolvedContactId,
        note: data.message,
      })

      return {
        success: true,
        message: 'Thank you for reaching out! We will contact you soon.',
      }
    } catch (error) {
      console.error('Failed to submit contact lead:', error)
      throw new Error('Failed to submit your request. Please try again later.')
    }
  })
