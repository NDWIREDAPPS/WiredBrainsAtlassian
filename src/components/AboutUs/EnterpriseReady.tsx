import { Target, CheckCircle } from 'lucide-react'

const enterpriseFeatures = [
    "Security-first architecture",
    "Compliance-aware design",
    "Performance optimization for large user bases",
    "Long-term platform sustainability"
]

export function EnterpriseReady() {
    return (
        <section className="container mx-auto px-4 md:px-10">
            <div className="max-w-4xl mx-auto relative">
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl -z-10 opacity-50" />

                <div className="flex flex-col items-center text-center gap-6 mb-12">
                    <div className="p-4 bg-purple-100 rounded-2xl shadow-xs">
                        <Target className="h-10 w-10 text-purple-600" />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                            Enterprise, Government & Scale-Ready
                        </h2>
                        <p className="text-purple-600 font-semibold text-xl">
                            Designed for Complex Environments
                        </p>
                    </div>
                </div>

                <p className="text-slate-600 text-lg text-center mb-10 max-w-2xl mx-auto leading-relaxed">
                    We work with organizations operating at scale, including enterprise and public-sector environments. Our solutions are designed with robustness in mind.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {enterpriseFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 bg-white border border-purple-100 rounded-2xl p-6 transition-all hover:border-purple-300 hover:shadow-md">
                            <CheckCircle className="h-6 w-6 text-purple-600 shrink-0" />
                            <span className="text-slate-800 font-medium text-lg leading-snug">{feature}</span>
                        </div>
                    ))}
                </div>

                <p className="text-slate-500 mt-10 text-center italic text-lg leading-relaxed">
                    This makes Achlys Solutions a trusted choice for organizations with complex workflows and high governance requirements.
                </p>
            </div>
        </section>
    )
}
