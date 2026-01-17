import { createFileRoute } from '@tanstack/react-router'
import { Calendar, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

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
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Full Name <span className="text-primary">*</span>
                </label>
                <Input
                  placeholder="John Smith"
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
                  className="h-12 bg-transparent text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Practice/Organization
                </label>
                <Input
                  placeholder="Your Practice Name"
                  className="h-12 bg-transparent text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">
                  Phone Number
                </label>
                <Input
                  placeholder="(555) 123-4567"
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
                  className="bg-transparent text-foreground"
                />
              </div>
              <Button
                type="button"
                className="w-full h-12 bg-primary text-white rounded-xl text-base font-semibold shadow-lg shadow-[#f14a15]/30 hover:bg-primary/90"
              >
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
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
