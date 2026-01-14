import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { ClusteredBackGroundShapes } from '../ui/ClusteredBackGroundShapes'
import { FloatingIcons } from '../ui/FloatingIcons'
import { Button } from '../ui/button'

export function HeroSection() {
    return (
        <div className="relative overflow-hidden w-full pb-20 pt-10 md:pt-20 px-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="flex flex-col items-center sm:items-start space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 drop-shadow-sm text-center sm:text-left">
                            Atlassian Consulting &{' '}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600">
                                App Development
                            </span>
                            {' '}Experts
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed text-center sm:text-left">
                            We help organizations plan, build, scale and innovate using Atlassian tools — from enterprise Jira implementations to secure Forge-based Atlassian Marketplace apps.
                        </p>

                        <p className="text-base text-slate-500 max-w-xl leading-relaxed text-center sm:text-left">
                            Achlys Solutions is a specialized Atlassian consulting and app development company focused on delivering scalable, secure and high-performance solutions across Jira, Jira Service Management, Confluence and the Atlassian Cloud ecosystem.
                        </p>

                        <div className="flex flex-row flex-wrap gap-4 pt-4 justify-center sm:justify-start">
                            <Button
                                asChild
                                size="lg"
                                className="h-12 bg-white text-purple-600 rounded-xl px-6 text-base font-medium shadow-lg shadow-purple-200/50 hover:bg-purple-50 hover:scale-105 active:scale-95"
                            >
                                <a href="#solutions">Explore Atlassian Solutions</a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                className="h-12 bg-white text-purple-600 rounded-xl px-6 text-base font-medium shadow-lg shadow-purple-200/50 hover:bg-purple-50 hover:scale-105 active:scale-95"
                            >
                                <a href="#marketplace-apps">View Marketplace Apps</a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="h-12 bg-white text-purple-600 rounded-xl px-6 text-base font-medium shadow-lg shadow-purple-200/50 hover:bg-purple-50 hover:scale-105 active:scale-95"
                            >
                                <Link to="/about-us" hash="contact-section">
                                    Contact Us
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block h-[500px] w-full">
                        <ClusteredBackGroundShapes className="absolute inset-0 w-full h-full" />
                        <FloatingIcons className="absolute inset-0 w-full h-full z-10" speed={0.5} />
                    </div>

                </div>
            </div>
        </div>
    )
}
