import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Calendar, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitContactLead } from '@/server/contact'

export const Route = createFileRoute('/contact-us/')({
  head: () => ({
    meta: [
      { title: 'Contact Us | Wired Brains' },
      {
        name: 'description',
        content:
          'Get in touch with Wired Brains. Send us a message or book a consultation to discuss your Atlassian needs.',
      },
      { property: 'og:title', content: 'Contact Us | Wired Brains' },
      {
        property: 'og:description',
        content:
          'Connect with Wired Brains for Atlassian consulting and solutions.',
      },
    ],
  }),
  component: ContactUsPage,
})

function ContactUsPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState('')
  const [formStartedAt] = useState(() => Date.now())
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await submitContactLead({
        data: {
          name: fullName,
          email,
          organization: organization || undefined,
          phone: phone || undefined,
          message,
          consent,
          website,
          formStartedAt,
        },
      })
      setSuccessMessage(response.message)
      setIsSubmitted(true)
      setFullName('')
      setEmail('')
      setOrganization('')
      setPhone('')
      setMessage('')
      setConsent(false)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="container mx-auto px-4 md:px-10 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out to Wired Brains for Atlassian consulting, apps, and
            platform guidance. We will add the rest of the details here soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
          <div className="bg-card border border-border rounded-3xl p-8 shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              Send Us a Message
            </h2>
            {isSubmitted ? (
              <div className="rounded-2xl border border-[#f14a15]/30 bg-[#f14a15]/10 p-6 text-center text-primary font-medium">
                {successMessage}
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {error && (
                  <div className="rounded-2xl border border-[#f14a15]/30 bg-[#f14a15]/10 p-4 text-sm font-medium text-primary">
                    {error}
                  </div>
                )}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    placeholder="John Smith"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    required
                    disabled={isLoading}
                    className="h-12 bg-transparent text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    disabled={isLoading}
                    className="h-12 bg-transparent text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Company
                  </label>
                  <Input
                    placeholder="Your Company Name"
                    value={organization}
                    onChange={(event) => setOrganization(event.target.value)}
                    disabled={isLoading}
                    className="h-12 bg-transparent text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Phone Number
                  </label>
                  <Input
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    disabled={isLoading}
                    className="h-12 bg-transparent text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    rows={5}
                    placeholder="Tell us about your Atlassian needs..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    disabled={isLoading}
                    className="bg-transparent text-foreground"
                  />
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-[#f14a15]/10 p-4">
                  <input
                    id="contact-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(event) => setConsent(event.target.checked)}
                    required
                    disabled={isLoading}
                    className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="contact-consent"
                    className="text-sm text-muted-foreground"
                  >
                    I agree to be contacted by Wired Brains regarding my
                    request.
                  </label>
                </div>
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <Input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary text-white rounded-xl text-base font-semibold shadow-lg shadow-[#f14a15]/30 hover:bg-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Send Message'}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-primary text-white p-8 shadow-lg">
              <div className="flex items-center gap-3 text-2xl font-semibold">
                <Calendar className="h-6 w-6" />
                Schedule a Consultation
              </div>
              <p className="mt-4 text-white/90 leading-relaxed">
                Prefer to talk? Book a time directly on our calendar for a
                personalized consultation about your Atlassian needs.
              </p>
              <Button
                asChild
                className="mt-6 h-11 px-6 bg-white text-primary font-semibold rounded-xl hover:bg-white/90"
              >
                <a
                  href="https://scheduler.zoom.us/nippun-dhiman/30mins-with-wiredbrains"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="h-4 w-4" />
                  Book a Time
                </a>
              </Button>
            </div>

            <div className="rounded-3xl bg-card border border-border p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground">
                Get in Touch
              </h3>
              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Phone
                    </p>
                    <p className="text-lg text-foreground">(908) 493-6720</p>
                    <p className="text-sm text-muted-foreground">
                      Mon–Fri 8am–6pm EST
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Email
                    </p>
                    <p className="text-lg text-foreground">
                      hello@wiredbrains.io
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We'll respond within 2 hours
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Office
                    </p>
                    <p className="text-lg text-foreground">
                      33 S Wood Ave #600
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Iselin, NJ 08830
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
