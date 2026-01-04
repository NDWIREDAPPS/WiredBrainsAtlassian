import { marketplaceApps } from '@/lib/data'
import { FeatureCard } from '@/components/ui/FeatureCard'

export function MarketplaceAppsSection() {
    return (
        <section id="marketplace-apps" className="scroll-mt-24 space-y-12 pb-24 container mx-auto px-4 md:px-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900">Marketplace Apps by Achlys Solutions</h2>
                <p className="text-lg sm:text-xl font-semibold text-purple-600">Atlassian Marketplace Apps, Built on Forge</p>
                <p className="text-base sm:text-lg text-slate-600">
                    Achlys Solutions is an Atlassian Marketplace app vendor building secure, cloud-native apps using Atlassian Forge. Our apps run entirely on Atlassian infrastructure, meeting modern security and compliance expectations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {marketplaceApps.map((app) => (
                    <FeatureCard
                        key={app.title}
                        title={app.title}
                        description={app.description}
                        icon={app.icon}
                        linkText="View on Marketplace"
                        linkHref={app.href}
                    />
                ))}
            </div>
        </section>
    )
}
