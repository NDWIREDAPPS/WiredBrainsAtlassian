import { Check } from 'lucide-react'

const differentiators = [
    "We understand Atlassian internals, not just configurations",
    "We build Forge-based apps that pass Atlassian security and compliance reviews",
    "We design solutions with performance, scalability, and maintainability in mind"
]

export function WhatMakesUsDifferent() {
    return (
        <section className="container mx-auto px-4 md:px-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        What Makes Us Different
                    </h2>
                    <p className="text-xl font-semibold text-purple-600">
                        Consultants Who Also Build Products
                    </p>
                </div>

                <p className="text-lg text-slate-600 text-center mb-8">
                    Achlys Solutions is not just a consulting provider—we are also Atlassian Marketplace app developers. This gives us a unique advantage:
                </p>

                <div className="bg-white rounded-3xl p-8 md:p-12 border border-purple-200 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-50 blur-3xl" />

                    <ul className="space-y-6 relative z-10">
                        {differentiators.map((item, index) => (
                            <li key={index} className="flex items-start gap-4">
                                <div className="p-1 rounded-full bg-purple-100 mt-1">
                                    <Check className="h-5 w-5 text-purple-600" />
                                </div>
                                <span className="text-slate-700 text-xl font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-slate-500 mt-8 italic text-center relative z-10 text-lg">
                        "Our consulting recommendations are shaped by real product engineering experience—not theory."
                    </p>
                </div>
            </div>
        </section>
    )
}
