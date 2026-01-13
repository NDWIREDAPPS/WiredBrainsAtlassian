import { createServerFn } from '@tanstack/react-start'
import { getRequestHeader } from '@tanstack/react-start/server'
import { db } from '@/db'
import { contactLeads } from '@/db/schema'
import { contactLeadSchema } from '@/lib/validations/contact'
import { checkRateLimit, CONTACT_FORM_RATE_LIMIT } from '@/lib/rate-limit'

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

// Server function to submit a contact lead
export const submitContactLead = createServerFn({ method: 'POST' })
    .inputValidator(contactLeadSchema)
    .handler(async ({ data }) => {
        // Rate limiting check
        const clientIP = getClientIP()
        const rateLimitResult = checkRateLimit(clientIP, CONTACT_FORM_RATE_LIMIT)

        if (!rateLimitResult.allowed) {
            throw new Error(
                `Too many submissions. Please try again in ${rateLimitResult.resetInSeconds} seconds.`
            )
        }

        try {
            // Insert the contact lead into the database
            const [newLead] = await db
                .insert(contactLeads)
                .values({
                    name: data.name,
                    email: data.email,
                    createdBy: 'website_form',
                })
                .returning()

            return {
                success: true,
                message: 'Thank you for reaching out! We will contact you soon.',
                id: newLead.id,
            }
        } catch (error) {
            console.error('Failed to submit contact lead:', error)
            throw new Error('Failed to submit your request. Please try again later.')
        }
    })
