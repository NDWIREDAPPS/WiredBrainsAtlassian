import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { submitContactLead } from '@/server/contact'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('') // Honeypot field
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const res = await submitContactLead({ data: { name, email, website } })
      setSuccess(res.message)
      setIsSubmitted(true)
      setName('')
      setEmail('')
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
    <section id="contact-section" className="container mx-auto px-4 md:px-10">
      <div className="rounded-3xl bg-[#f14a15]/10 border border-[#f14a15]/20 p-8 md:p-12 lg:p-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-[#f14a15]/30 mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Stay Connected
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Drop your details and we'll reach out to discuss how we can help
              transform your business.
            </p>
          </div>

          {/* Right Side - Email Input */}
          <div className="flex-1 w-full max-w-md">
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-[#f14a15]/10 border border-[#f14a15]/20">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <span className="text-lg font-medium text-primary">
                  {success}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-[#f14a15]/10 border border-[#f14a15]/30">
                    <AlertCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-primary">
                      {error}
                    </span>
                  </div>
                )}
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isLoading}
                    className="h-14 pl-5 pr-4 text-base bg-card border border-input text-foreground placeholder:text-muted-foreground rounded-xl focus-visible:border-primary focus-visible:ring-primary/30 disabled:opacity-50"
                  />
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                    className="h-14 pl-5 pr-4 text-base bg-card border border-input text-foreground placeholder:text-muted-foreground rounded-xl focus-visible:border-primary focus-visible:ring-primary/30 disabled:opacity-50"
                  />
                </div>
                {/* Honeypot field - hidden from humans, bots will fill it */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <Input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full h-14 bg-foreground hover:bg-foreground/90 text-background rounded-xl text-lg font-medium group disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Connect
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
