import { Link } from '@tanstack/react-router'
import { ArrowRight, FileText } from 'lucide-react'

const apps = [
    {
        title: "Timesheet App",
        description: "Advanced time tracking with timelines, reporting and project insights. Track work across projects and generate comprehensive reports.",
        image: "/timesheets.png",
        href: "/marketplace-apps/time-sheet",
    },
    {
        title: "Checklist App",
        description: "Powerful checklist management for Jira issues and workflows. Create reusable templates and ensure nothing falls through the cracks.",
        image: "/checklist.png",
        href: "/marketplace-apps/checklist",
    },
    {
        title: "Timer App",
        description: "Built-in time tracking to improve productivity and accuracy. Start, pause and log time directly from your Jira issues.",
        image: "/timer.png",
        href: "/marketplace-apps/timer",
    },
    {
        title: "Issue Template App",
        description: "Standardize issue creation with reusable templates. Ensure consistency across your team with pre-configured fields and descriptions.",
        image: "/issue-template.png",
        href: "/marketplace-apps/issue-template",
    },
]

export function MarketplaceAppsSection() {
    return (
        <section id="marketplace-apps" className="relative scroll-mt-24 py-20">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-slate-50 via-white to-slate-50 -z-10" />

            <div className="container mx-auto px-4 md:px-10">
                {/* Header */}
                <div className="text-center space-y-6 max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-sm font-medium text-blue-700">Built on Atlassian Forge</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
                        Marketplace Apps
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Secure, cloud-native apps running entirely on Atlassian infrastructure. Built to meet modern security and compliance expectations.
                    </p>
                </div>

                {/* Apps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {apps.map((app) => (
                        <Link
                            key={app.title}
                            to={app.href}
                            className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                {/* App Icon/Image */}
                                <div className="shrink-0 w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                                    {app.image ? (
                                        <img
                                            src={app.image}
                                            alt={app.title}
                                            className="w-16 h-16 object-contain"
                                        />
                                    ) : (
                                        <FileText className="w-10 h-10 text-slate-400" />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-3">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {app.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {app.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-purple-500 font-medium text-sm pt-2 group-hover:gap-3 transition-all duration-300">
                                        <span>Show More</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
