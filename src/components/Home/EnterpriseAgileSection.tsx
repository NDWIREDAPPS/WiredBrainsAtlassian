import { Target, Sparkles } from 'lucide-react'
import { FeatureCard } from '@/components/ui/FeatureCard'

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
                <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                    Enterprise Agile & AI Innovation
                </h2>
                <p className="text-lg sm:text-xl font-semibold text-purple-600">
                    Enterprise Agility and AI-Powered Collaboration
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.title}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                        className="p-8"
                    />
                ))}
            </div>
        </section>
    )
}
