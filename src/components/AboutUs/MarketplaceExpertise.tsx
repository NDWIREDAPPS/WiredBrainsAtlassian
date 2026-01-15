import { Shield, CheckCircle } from 'lucide-react'

const forgeFeatures = [
    "No external data storage",
    "Cloud-native architecture",
    "Secure execution within Atlassian infrastructure"
]

export function MarketplaceExpertise() {
    return (
        <section className="container mx-auto px-4 md:px-10">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-2xl mb-2">
                            <Shield className="h-10 w-10 text-purple-600" />
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                            Marketplace App Expertise
                        </h2>
                        <p className="text-lg sm:text-xl font-semibold text-purple-600 italic">
                            Building Secure, Cloud-Native Atlassian Apps
                        </p>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                            We design and maintain Atlassian Marketplace apps built on Atlassian Forge, ensuring the highest standards of security and performance.
                        </p>
                    </div>

                    <div className="flex-1">
                        <div className="bg-linear-to-br from-white to-purple-50/50 rounded-3xl p-8 border border-purple-200 shadow-lg">
                            <p className="text-lg font-semibold text-slate-900 mb-6">Our security-first approach includes:</p>
                            <ul className="space-y-4">
                                {forgeFeatures.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-purple-100 shadow-xs">
                                        <CheckCircle className="h-6 w-6 text-purple-600 shrink-0" />
                                        <span className="text-slate-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 mt-6 text-sm text-center">
                                Our apps enhance Jira usability while meeting modern security and compliance expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
