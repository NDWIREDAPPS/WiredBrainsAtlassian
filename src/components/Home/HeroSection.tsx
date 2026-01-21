import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { ClusteredBackGroundShapes } from '../ui/ClusteredBackGroundShapes'
import { FloatingIcons } from '../ui/FloatingIcons'
import { Button } from '../ui/button'

export function HeroSection() {
  return (
    <div className="relative overflow-hidden w-full pb-12 pt-10 md:pt-16 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:min-h-[calc(100vh-140px)]">
          <div className="flex flex-col items-center sm:items-start space-y-8 animate-in fade-in slide-in-from-left-10 duration-700 lg:-translate-y-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground drop-shadow-sm text-center sm:text-left">
              Atlassian Consulting &{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f14a15] to-foreground">
                App Development
              </span>{' '}
              Experts
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-center sm:text-left">
              We help organizations plan, build, scale and innovate using
              Atlassian tools - from enterprise Jira implementations to secure
              Forge-based Atlassian Marketplace apps.
            </p>

            <p className="text-base text-muted-foreground max-w-xl leading-relaxed text-center sm:text-left">
              Wired Brains is a specialized Atlassian consulting and app
              development company focused on delivering scalable, secure and
              high-performance solutions across Jira, Jira Service Management,
              Confluence and the Atlassian Cloud ecosystem.
            </p>

            <div className="flex flex-row flex-wrap gap-4 pt-4 justify-center sm:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 bg-primary text-white rounded-xl px-6 text-base font-medium shadow-lg shadow-[#f14a15]/30 hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                <a href="#solutions">Explore Atlassian Solutions</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 bg-primary text-white rounded-xl px-6 text-base font-medium shadow-lg shadow-[#f14a15]/30 hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                <a href="#marketplace-apps">View Marketplace Apps</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 bg-primary text-white rounded-xl px-6 text-base font-medium shadow-lg shadow-[#f14a15]/40 hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                <Link to="/contact-us">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="pt-3 flex flex-col items-center sm:items-start gap-3">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                Atlassian Partner
              </span>
              <div className="flex items-center gap-4">
                <img
                  src="/Partners.png"
                  alt="Atlassian Partners"
                  className="h-8 w-auto dark:hidden"
                />
                <img
                  src="/PartnersW.png"
                  alt="Atlassian Partners"
                  className="h-8 w-auto hidden dark:block"
                />
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block h-[500px] w-full">
            <ClusteredBackGroundShapes className="absolute inset-0 w-full h-full" />
            <FloatingIcons
              className="absolute inset-0 w-full h-full z-10"
              speed={0.5}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
