import { ChevronLeft, ChevronRight } from 'lucide-react'
import { atlassianSolutions } from '@/lib/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useCarousel } from '@/components/ui/carousel'
import { FeatureCard } from '@/components/ui/FeatureCard'

function CarouselArrows() {
  const { scrollPrev, scrollNext } = useCarousel()
  return (
    <>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -left-6 md:-left-20 -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 -right-6 md:-right-20 -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
      </button>
    </>
  )
}

export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="scroll-mt-24 space-y-12 container mx-auto px-4 md:px-10"
    >
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
          Atlassian Solutions We Offer
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-primary">
          Comprehensive Atlassian Consulting Services
        </p>
        <p className="text-base sm:text-lg text-muted-foreground">
          We design, implement and optimize Atlassian platforms for
          organizations of all sizes. From IT service management to enterprise
          agility and AI-driven collaboration, our solutions are built to evolve
          with your business.
        </p>
      </div>

      <div className="px-10 md:px-16">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              playOnInit: true,
              delay: 2000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 items-stretch py-4">
            {atlassianSolutions.map((solution) => (
              <CarouselItem
                key={solution.title}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 h-auto"
              >
                <FeatureCard
                  title={solution.title}
                  description={solution.description}
                  icon={solution.icon}
                  linkText="Learn more"
                  linkHref={solution.href}
                  className="h-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselArrows />
        </Carousel>
      </div>
    </section>
  )
}
