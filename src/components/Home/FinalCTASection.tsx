import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

export function FinalCTASection() {
    return (
        <section className="scroll-mt-24 container mx-auto px-4 md:px-10 pb-24">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                    Ready to get started?
                </h2>

                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                    Let's talk about how Achlys Solutions can help you build, scale, and optimize your Atlassian ecosystem.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button
                        asChild
                        size="lg"
                        className="h-12 bg-white text-purple-600 border border-purple-200 rounded-xl px-8 text-base font-medium shadow-lg shadow-purple-100/50 hover:bg-purple-50 hover:border-purple-300 hover:scale-105 active:scale-95 transition-all"
                    >
                        <Link to="/contact">
                            Contact Us
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        size="lg"
                        className="h-12 bg-white text-purple-600 border border-purple-200 rounded-xl px-8 text-base font-medium shadow-lg shadow-purple-100/50 hover:bg-purple-50 hover:border-purple-300 hover:scale-105 active:scale-95 transition-all"
                    >
                        <a href="#marketplace-apps">
                            Explore Our Apps
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
