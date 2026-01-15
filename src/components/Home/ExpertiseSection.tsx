import { CheckListItem } from '@/components/ui/CheckListItem'

const expertiseItems = [
    "Jira Software for agile planning and delivery",
    "Jira Service Management for ITSM and enterprise service management",
    "Confluence for knowledge management and collaboration",
    "Jira Align for enterprise-level agile transformation",
    "Rovo to unlock AI-powered insights and productivity"
]

export function ExpertiseSection() {
    return (
        <section className="scroll-mt-24 container mx-auto px-4 md:px-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                        Our Atlassian Expertise
                    </h2>
                    <p className="text-lg sm:text-xl font-semibold text-purple-600 font-display">
                        End-to-End Atlassian Solutions, Built for Scale
                    </p>
                </div>

                <p className="text-base sm:text-lg text-slate-600 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
                    We specialize in implementing and extending the core Atlassian platform to help teams work smarter.
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {expertiseItems.map((item, index) => (
                        <CheckListItem key={index}>{item}</CheckListItem>
                    ))}
                </ul>
            </div>
        </section>
    )
}
