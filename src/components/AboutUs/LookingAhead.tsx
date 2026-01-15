import { TrendingUp, Target, Sparkles, Rocket } from 'lucide-react'

const futureGoals = [
    {
        text: "Expanding Jira Align adoption for strategy-to-execution alignment",
        icon: Target
    },
    {
        text: "Leveraging Rovo to unlock AI-driven productivity",
        icon: Sparkles
    },
    {
        text: "Building next-generation Forge apps for the Atlassian Marketplace",
        icon: Rocket
    }
]

export function LookingAhead() {
    return (
        <section className="container mx-auto px-4 md:px-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-2xl mb-6">
                        <TrendingUp className="h-10 w-10 text-purple-600" />
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4 leading-tight">
                        Looking Ahead
                    </h2>
                    <p className="text-lg sm:text-xl font-semibold text-purple-600 mb-6 font-display">
                        Focused on the Future of Atlassian
                    </p>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        As Atlassian continues to evolve with enterprise agility and AI, Achlys Solutions is focused on pioneering the next wave of productivity:
                    </p>
                </div>

                <div className="grid gap-6">
                    {futureGoals.map((goal, index) => {
                        const Icon = goal.icon
                        return (
                            <div key={index} className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-purple-100 shadow-xs hover:border-purple-300 transition-all group">
                                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <span className="text-slate-800 text-xl font-medium leading-snug">{goal.text}</span>
                            </div>
                        )
                    })}
                </div>

                <p className="text-center text-slate-500 mt-12 text-lg">
                    We are committed to growing alongside the Atlassian ecosystem—and helping our customers do the same.
                </p>
            </div>
        </section>
    )
}
