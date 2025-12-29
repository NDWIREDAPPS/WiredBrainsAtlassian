import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { marketplaceApps } from '@/lib/data'

export function MarketplaceAppsSection() {
    return (
        <section id="marketplace-apps" className="scroll-mt-24 space-y-12 pb-24 container mx-auto px-4 md:px-10">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Marketplace Apps</h2>
                <p className="text-lg text-slate-600">
                    Powerful plugins and add-ons to supercharge your Jira and Confluence instances.
                </p>
            </div>

            {/* Bento Grid Layout Idea */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {marketplaceApps.map((app) => {
                    const Icon = app.icon;
                    return (
                        <Card key={app.title} className="group relative overflow-hidden border-none bg-slate-900 text-slate-50 shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 hover:scale-[1.02]">
                            {/* Decorative blob */}
                            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl group-hover:bg-purple-600/30 transition-colors" />

                            <CardHeader className="relative z-10 flex flex-row items-center gap-4 space-y-0 pb-2">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 group-hover:border-purple-500/50 transition-colors">
                                    <Icon className="h-6 w-6 text-purple-400" />
                                </div>
                                <CardTitle className="text-xl font-bold">{app.title}</CardTitle>
                            </CardHeader>

                            <CardContent className="relative z-10 pt-4">
                                <CardDescription className="text-slate-300 text-base leading-relaxed mb-6">
                                    {app.description}
                                </CardDescription>
                                <Link
                                    to={app.href}
                                    className="inline-flex h-10 items-center justify-center rounded-lg bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                                >
                                    View on Marketplace
                                </Link>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
