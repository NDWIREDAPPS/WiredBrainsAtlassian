import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { marketplaceApps } from '@/lib/data'

export function MarketplaceAppsSection() {
    return (
        <section id="marketplace-apps" className="scroll-mt-24 space-y-12 pb-24 container mx-auto px-4 md:px-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Marketplace Apps by Achlys Solutions</h2>
                <p className="text-xl font-semibold text-purple-600">Atlassian Marketplace Apps, Built on Forge</p>
                <p className="text-lg text-slate-600">
                    Achlys Solutions is an Atlassian Marketplace app vendor building secure, cloud-native apps using Atlassian Forge. Our apps run entirely on Atlassian infrastructure, meeting modern security and compliance expectations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {marketplaceApps.map((app) => {
                    const Icon = app.icon
                    return (
                        <div
                            key={app.title}
                            className="group h-full py-8 px-6 rounded-3xl bg-white/40 border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">{app.title}</h3>
                                <p className="text-base text-slate-600 mb-4 grow">
                                    {app.description}
                                </p>
                                <Link
                                    to={app.href}
                                    className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 group-hover:underline decoration-2 underline-offset-4"
                                >
                                    View on Marketplace <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
