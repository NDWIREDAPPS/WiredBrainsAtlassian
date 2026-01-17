import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '../ui/button'

export function AboutFinalCTA() {
  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className="text-center relative max-w-4xl mx-auto">
        <div className="relative z-10 py-12">
          <div className="inline-flex items-center justify-center p-4 bg-[#f14a15]/10 rounded-2xl mb-8 shadow-xs">
            <MessageCircle className="h-10 w-10 text-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 leading-tight font-display">
            Let's Build Smarter Atlassian Solutions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Whether you need expert consulting, a custom Atlassian app, or a
            scalable enterprise solution, Wired Brains brings the experience and
            focus to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="h-12 bg-card text-primary rounded-xl px-6 text-base font-medium shadow-lg shadow-[#f14a15]/20 hover:bg-[#f14a15]/10 hover:scale-105 active:scale-95"
            >
              <a href="#contact-section">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-12 bg-card text-primary rounded-xl px-6 text-base font-medium shadow-lg shadow-[#f14a15]/20 hover:bg-[#f14a15]/10 hover:scale-105 active:scale-95"
            >
              <a href="#marketplace-apps">Explore Our Apps</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
