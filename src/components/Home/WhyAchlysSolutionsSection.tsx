import { CheckCircle } from 'lucide-react'

const reasons = [
    "Deep Atlassian platform expertise",
    "Proven experience building Forge-based apps",
    "Cloud-native and security-first architecture",
    "Enterprise-ready solutions and integrations",
    "Practical consulting backed by real implementations"
]

export function WhyAchlysSolutionsSection() {
    return (
        <section className="scroll-mt-24 container mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Why Achlys Solutions
                    </h2>
                    <p className="text-xl font-semibold text-purple-600 font-display">
                        Why Teams Choose Achlys
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                        We don't just configure Atlassian tools—we engineer solutions around how teams actually work, ensuring long-term scalability and security.
                    </p>
                </div>

                <ul className="grid grid-cols-1 gap-4">
                    {reasons.map((reason, index) => (
                        <li key={index} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-purple-100 shadow-xs hover:border-purple-300 hover:shadow-md transition-all group">
                            <CheckCircle className="h-6 w-6 text-purple-600 shrink-0 group-hover:scale-110 transition-transform" />
                            <span className="text-slate-800 text-lg font-medium leading-snug">{reason}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
