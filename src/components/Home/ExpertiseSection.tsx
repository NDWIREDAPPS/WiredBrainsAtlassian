import { CheckCircle } from 'lucide-react'

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
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Our Atlassian Expertise
                    </h2>
                    <p className="text-xl font-semibold text-purple-600 font-display">
                        End-to-End Atlassian Solutions, Built for Scale
                    </p>
                </div>

                <p className="text-lg text-slate-600 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
                    We specialize in implementing and extending the core Atlassian platform to help teams work smarter.
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {expertiseItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-4 bg-white rounded-2xl p-6 border border-purple-100 shadow-xs hover:border-purple-300 hover:shadow-md transition-all">
                            <CheckCircle className="h-6 w-6 text-purple-600 shrink-0" />
                            <span className="text-slate-800 text-lg font-medium leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
