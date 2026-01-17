import { type LucideIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { FeatureCard } from '@/components/ui/FeatureCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

export interface FeatureItem {
  title: string
  description: string
  icon: LucideIcon
}

interface FeatureGridProps {
  heading: string
  subheading?: string
  description?: string
  features: FeatureItem[]
  columns?: 2 | 3 | 4 | 5
  useCarousel?: boolean
}

function CarouselArrows() {
  const { scrollPrev, scrollNext } = useCarousel()
  return (
    <>
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2 p-2 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
      </button>
    </>
  )
}

export function FeatureGrid({
  heading,
  subheading,
  description,
  features,
  columns = 3,
  useCarousel: enableCarousel = false,
}: FeatureGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
    5: 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  }

  const carouselBasis = {
    2: 'basis-full md:basis-1/2',
    3: 'basis-full md:basis-1/2 lg:basis-1/3',
    4: 'basis-full md:basis-1/2 lg:basis-1/4',
    5: 'basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5',
  }

  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
          {heading}
        </h2>
        {subheading && (
          <p className="text-lg sm:text-xl font-semibold text-primary">
            {subheading}
          </p>
        )}
        {description && (
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {enableCarousel ? (
        <div className="px-8 md:px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                playOnInit: true,
                delay: 3000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4 items-stretch py-4">
              {features.map((feature) => (
                <CarouselItem
                  key={feature.title}
                  className={`pl-4 ${carouselBasis[columns]} h-auto`}
                >
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    className="h-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselArrows />
          </Carousel>
        </div>
      ) : (
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      )}
    </section>
  )
}
