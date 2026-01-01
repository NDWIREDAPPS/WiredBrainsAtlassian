import { Target, Sparkles } from 'lucide-react'

const features = [
    {
        title: "Jira Align",
        description: "We help organizations implement Jira Align to connect strategy, portfolios, programs and teams. Our approach ensures visibility from executive goals to team-level execution, enabling true enterprise agility.",
        icon: Target
    },
    {
        title: "Rovo",
        description: "We support organizations adopting Atlassian Rovo to enhance search, insights and productivity using AI. From knowledge discovery to contextual assistance, Rovo helps teams work smarter with their Atlassian data.",
        icon: Sparkles
    }
]

export function EnterpriseAgileSection() {
    return (
        <section className="scroll-mt-24 container mx-auto px-4 md:px-10">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Enterprise Agile & AI Innovation
                </h2>
                <p className="text-xl font-semibold text-purple-600">
                    Enterprise Agility and AI-Powered Collaboration
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature) => {
                    const Icon = feature.icon
                    return (
                        <div key={feature.title} className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-200">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
