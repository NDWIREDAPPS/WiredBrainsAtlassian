import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SolutionCTAProps {
  heading: string
  content: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export function SolutionCTA({
  heading,
  content,
  primaryButtonText = 'Contact Us',
  primaryButtonHref = '/contact-us',
  secondaryButtonText = 'Explore Atlassian Solutions',
  secondaryButtonHref = '/#solutions',
}: SolutionCTAProps) {
  return (
    <section className="container mx-auto px-4 md:px-10 pb-24">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
          {heading}
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {content}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            asChild
            size="lg"
            className="h-12 bg-primary text-white rounded-xl px-8 text-base font-medium shadow-lg shadow-[#f14a15]/30 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          >
            <Link to={primaryButtonHref}>
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="h-12 bg-primary text-white rounded-xl px-8 text-base font-medium shadow-lg shadow-[#f14a15]/30 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          >
            <a href={secondaryButtonHref}>{secondaryButtonText}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
