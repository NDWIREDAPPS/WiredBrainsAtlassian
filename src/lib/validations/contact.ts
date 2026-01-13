import { z } from 'zod'

// Zod schema for contact form validation
export const contactLeadSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be less than 100 characters')
        .trim(),
    email: z
        .string()
        .email('Please enter a valid email address')
        .max(255, 'Email must be less than 255 characters')
        .trim()
        .toLowerCase(),
    // Honeypot field - should always be empty (bots fill this, humans don't see it)
    website: z.string().max(0, 'Invalid submission').optional(),
})

export type ContactLeadInput = z.infer<typeof contactLeadSchema>
