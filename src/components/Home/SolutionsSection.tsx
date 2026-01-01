import { Link } from '@tanstack/react-router'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { atlassianSolutions } from '@/lib/data'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useCarousel } from '@/components/ui/carousel'

function CarouselArrows() {
    const { scrollPrev, scrollNext } = useCarousel()
    return (
        <>
            <button
                onClick={scrollPrev}
                className="absolute top-1/2 -left-6 md:-left-20 -translate-y-1/2 p-2 text-slate-400 hover:text-purple-600 transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
            </button>
            <button
                onClick={scrollNext}
                className="absolute top-1/2 -right-6 md:-right-20 -translate-y-1/2 p-2 text-slate-400 hover:text-purple-600 transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1.5} />
            </button>
        </>
    )
}

export function SolutionsSection() {
    return (
        <section id="solutions" className="scroll-mt-24 space-y-12 container mx-auto px-4 md:px-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Atlassian Solutions We Offer</h2>
                <p className="text-xl font-semibold text-purple-600">Comprehensive Atlassian Consulting Services</p>
                <p className="text-lg text-slate-600">
                    We design, implement and optimize Atlassian platforms for organizations of all sizes. From IT service management to enterprise agility and AI-driven collaboration, our solutions are built to evolve with your business.
                </p>
            </div>

            <div className="px-10 md:px-16">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            playOnInit: true,
                            delay: 2000,
                            stopOnInteraction: true,
                            stopOnMouseEnter: true,
                        })
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {atlassianSolutions.map((solution) => {
                            const Icon = solution.icon;
                            return (
                                <CarouselItem key={solution.title} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                    <div className="group h-full py-8 px-6 rounded-3xl bg-white/40 border border-purple-200">
                                        <div className="flex flex-col h-full">
                                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-slate-900 mb-2">{solution.title}</h3>
                                            <p className="text-base text-slate-600 mb-4 grow">
                                                {solution.description}
                                            </p>
                                            <Link
                                                to={solution.href}
                                                className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 group-hover:underline decoration-2 underline-offset-4"
                                            >
                                                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                    <CarouselArrows />
                </Carousel>
            </div>
        </section>
    )
}
