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
  organization: z
    .string()
    .max(120, 'Organization must be less than 120 characters')
    .optional(),
  phone: z
    .string()
    .max(30, 'Phone number must be less than 30 characters')
    .optional(),
  message: z
    .string()
    .min(5, 'Message must be at least 5 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .trim(),
  consent: z.boolean().refine((value) => value, {
    message: 'Please confirm consent to be contacted',
  }),
  // Honeypot field - should always be empty (bots fill this, humans don't see it)
  website: z.string().max(0, 'Invalid submission').optional(),
})

export type ContactLeadInput = z.infer<typeof contactLeadSchema>
