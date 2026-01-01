import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Quote, Sparkles } from 'lucide-react'

export function BlogsInsightsSection() {
    return (
        <section className="scroll-mt-24 container mx-auto px-4 md:px-10">
            <div className="bg-purple-50/50 rounded-3xl p-8 md:p-12 border border-purple-100 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center justify-center p-3 bg-white rounded-xl shadow-xs border border-purple-100">
                            <BookOpen className="h-6 w-6 text-purple-600" />
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-2">
                                Blogs & Insights
                            </h2>
                            <p className="text-lg font-semibold text-purple-600 font-display">
                                Expert knowledge, shared freely.
                            </p>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            Stay ahead with our latest deep dives into Atlassian best practices, Forge development tutorials, and enterprise agile strategies.
                        </p>

                        <div className="pt-2">
                            <Link
                                to="/blogs"
                                className="inline-flex items-center text-lg font-bold text-slate-900 hover:text-purple-600 transition-colors group"
                            >
                                Read Our Blog
                                <span className="ml-2 bg-purple-100 p-1 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-all">
                                    <ArrowRight className="h-4 w-4" />
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Visual Side - Abstract Blog Cards */}
                    <div className="relative h-64 md:h-80 w-full hidden lg:block">
                        {/* Decorative floating cards */}
                        <div className="absolute right-10 top-10 w-72 p-6 bg-white rounded-2xl shadow-lg border border-slate-100 transform rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-500 z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xs font-bold">QA</div>
                                <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
                            </div>
                            <div className="h-3 w-full bg-slate-100 rounded-full mb-2"></div>
                            <div className="h-3 w-3/4 bg-slate-100 rounded-full"></div>
                        </div>

                        <div className="absolute right-24 top-24 w-72 p-6 bg-white rounded-2xl shadow-xl border border-purple-100 transform -rotate-2 transition-transform hover:rotate-0 hover:scale-105 duration-500 z-20">
                            <Sparkles className="h-5 w-5 text-purple-500 mb-3" />
                            <h4 className="font-bold text-slate-900 mb-2">The Future of Forge Apps</h4>
                            <p className="text-sm text-slate-500">How cloud-native architecture is changing the Atlassian Marketplace...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
