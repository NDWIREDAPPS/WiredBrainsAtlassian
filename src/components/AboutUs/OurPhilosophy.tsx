import { Lightbulb, CheckCircle } from 'lucide-react'

const philosophyPrinciples = [
    "Simplicity over over-engineering",
    "Usability over unnecessary customization",
    "Automation where it adds real value",
    "Clear ownership and maintainability"
]

export function OurPhilosophy() {
    return (
        <section className="container mx-auto px-4 md:px-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-2xl mb-6 shadow-xs">
                        <Lightbulb className="h-10 w-10 text-purple-600" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                        Our Philosophy
                    </h2>
                    <p className="text-xl font-semibold text-purple-600 mb-6 font-display">
                        Build What Teams Actually Use
                    </p>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We believe Atlassian tools should enable teams—not slow them down. Every solution we design is guided by these principles:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {philosophyPrinciples.map((principle, index) => (
                        <div key={index} className="flex items-center gap-4 border border-purple-200 bg-white rounded-2xl p-6 hover:border-purple-400 hover:shadow-md transition-all">
                            <CheckCircle className="h-6 w-6 text-purple-600 shrink-0" />
                            <span className="text-slate-700 text-lg font-medium">{principle}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 bg-purple-50 rounded-2xl p-6 border border-purple-100">
                    <p className="text-purple-700 font-bold text-xl">
                        The result is Atlassian environments that teams adopt naturally and leadership can trust.
                    </p>
                </div>
            </div>
        </section>
    )
}
