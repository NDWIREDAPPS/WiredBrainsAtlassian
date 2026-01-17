import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

export function FinalCTASection() {
  return (
    <section className="scroll-mt-24 container mx-auto px-4 md:px-10 pb-24">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
          Ready to get started?
        </h2>

        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Let's talk about how Wired Brains can help you build, scale and
          optimize your Atlassian ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            asChild
            size="lg"
            className="h-12 bg-card text-primary border border-[#f14a15]/30 rounded-xl px-8 text-base font-medium shadow-lg shadow-[#f14a15]/20 hover:bg-[#f14a15]/10 hover:border-[#f14a15]/50 hover:scale-105 active:scale-95 transition-all"
          >
            <Link to="/about-us" hash="contact-section">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
