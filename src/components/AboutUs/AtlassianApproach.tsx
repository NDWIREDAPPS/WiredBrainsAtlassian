import { CheckCircle } from 'lucide-react'

const atlassianProducts = [
    "Jira Software for agile planning and delivery",
    "Jira Service Management for ITSM and enterprise service management",
    "Confluence for knowledge and collaboration",
    "Jira Align for enterprise agility",
    "Rovo for AI-powered insights and productivity"
]

export function AtlassianApproach() {
    return (
        <section className="container mx-auto px-4 md:px-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Our Atlassian-First Approach
                    </h2>
                    <p className="text-xl font-semibold text-purple-600">
                        Purpose-Built for the Atlassian Ecosystem
                    </p>
                </div>

                <p className="text-lg text-slate-600 text-center mb-10 leading-relaxed max-w-3xl mx-auto">
                    Unlike general IT consulting firms, Achlys Solutions is deeply focused on the Atlassian platform. We work exclusively with Atlassian products and frameworks, enabling us to deliver solutions that align with platform best practices, security standards, and long-term scalability.
                </p>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-purple-200 lg:p-10">
                    <p className="text-lg font-semibold text-slate-900 mb-6 font-display">We specialize in:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {atlassianProducts.map((product, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-lg leading-snug">{product}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
