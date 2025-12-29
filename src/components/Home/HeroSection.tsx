import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { ClusteredBackGroundShapes } from '../ui/ClusteredBackGroundShapes'

export function HeroSection() {
    return (
        <div className="relative overflow-hidden w-full pb-20 pt-10 md:pt-20 px-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="flex flex-col items-center sm:items-start space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm text-center sm:text-left">
                            Bringing the vision of <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600">
                                digital transformation
                            </span>
                            <br /> to life
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed text-center sm:text-left">
                            We help organizations unlock their full potential through expert Atlassian solutions and powerful marketplace apps.
                        </p>

                        <div className="flex flex-row gap-4 pt-4 justify-center sm:justify-start">
                            <Link
                                to="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-xl bg-purple-600 px-8 text-base font-medium text-white shadow-lg shadow-purple-200/50 transition-all hover:bg-purple-700 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
                            >
                                Explore Services
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <ClusteredBackGroundShapes className="relative hidden lg:block h-[500px] w-full" />

                </div>
            </div>
        </div>
    )
}
