import { z } from 'zod'

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  '10minutemail.com',
  '10minutemail.net',
  '20minutemail.com',
  '33mail.com',
  'dispostable.com',
  'dropmail.me',
  'emailondeck.com',
  'fakeinbox.com',
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'maildrop.cc',
  'mailinator.com',
  'mailnesia.com',
  'mohmal.com',
  'mytemp.email',
  'temp-mail.org',
  'tempail.com',
  'tempinbox.com',
  'tempmail.com',
  'tempmail.io',
  'tempmail.net',
  'throwawaymail.com',
  'trashmail.com',
  'trashmail.de',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
])

const spamMessage =
  'Spam detected. Please use a real email address and try again.'

const urlPattern = /(https?:\/\/|www\.)/gi
const repeatedCharPattern = /(.)\1{5,}/

function isDisposableEmail(email: string) {
  const domain = email.split('@')[1]?.toLowerCase() ?? ''
  return DISPOSABLE_EMAIL_DOMAINS.has(domain)
}

function hasTooManyLinks(message: string) {
  const matches = message.match(urlPattern)
  return (matches?.length ?? 0) > 2
}

function hasRepeatedCharacters(message: string) {
  return repeatedCharPattern.test(message)
}

// Zod schema for contact form validation
export const contactLeadSchema = z
  .object({
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
      .trim()
      .refine((value) => !hasTooManyLinks(value), {
        message: spamMessage,
      })
      .refine((value) => !hasRepeatedCharacters(value), {
        message: spamMessage,
      }),
    consent: z.boolean().refine((value) => value, {
      message: 'Please confirm consent to be contacted',
    }),
    formStartedAt: z.number(),
    // Honeypot field - should always be empty (bots fill this, humans don't see it)
    website: z.string().max(0, 'Invalid submission').optional(),
  })
  .refine((data) => !isDisposableEmail(data.email), {
    message: spamMessage,
    path: ['email'],
  })

export type ContactLeadInput = z.infer<typeof contactLeadSchema>
