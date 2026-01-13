import { createServerFn } from '@tanstack/react-start'
import { db } from '@/db'
import { contactLeads } from '@/db/schema'
import { contactLeadSchema } from '@/lib/validations/contact'

// Server function to submit a contact lead
export const submitContactLead = createServerFn({ method: 'POST' })
    .inputValidator(contactLeadSchema)
    .handler(async ({ data }) => {
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
