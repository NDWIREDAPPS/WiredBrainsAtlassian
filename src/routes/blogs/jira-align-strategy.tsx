import { createFileRoute, Link } from '@tanstack/react-router'
import { BlogLayout } from '../../components/Blogs/BlogLayout'
import { blogPosts } from '../../lib/data'
import { Target, BarChart3, Compass, Gem, Lightbulb, TrendingUp, CheckCircle, ArrowRight, Coins } from 'lucide-react'

export const Route = createFileRoute('/blogs/jira-align-strategy')({
    component: JiraAlignBlog,
})

function JiraAlignBlog() {
    const post = blogPosts.find(p => p.slug === 'jira-align-strategy')!

    return (
        <BlogLayout
            title={post.title}
            description={post.description}
            image={post.heroImage}
            date={post.date}
        >
            <div className="space-y-16">
                <section>
                    <div className="max-w-3xl border-l-4 border-purple-600 pl-8 py-2">
                        <p className="text-2xl font-medium text-slate-900 leading-tight">
                            "For executives and senior leaders, the challenge isn’t deciding what to do. It’s ensuring the organization actually delivers on strategy."
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-8">What Jira Align Solves</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Strategic Connection", desc: "Link high-level business goals directly to team execution.", icon: Target },
                            { title: "Investment Visibility", desc: "See exactly where your R&D budget is flowing in real-time.", icon: Coins },
                            { title: "Risk Identification", desc: "Spot dependencies and bottlenecks across the enterprise portfolio.", icon: Compass },
                            { title: "Data-Driven Decisions", icon: BarChart3, desc: "Move from manual status reports to real-time delivery data." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="bg-white p-3 rounded-xl shadow-sm h-fit">
                                    <item.icon className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
                        <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-100 rounded-full blur-3xl" />
                    </div>
                    <h2 className="text-3xl font-semibold mb-10 text-slate-900 relative z-10 text-center">Implementation That Succeeds</h2>
                    <div className="grid md:grid-cols-4 gap-6 relative z-10">
                        {[
                            { step: "01", title: "Executive Alignment", icon: Lightbulb },
                            { step: "02", title: "Value Stream Design", icon: TrendingUp },
                            { step: "03", title: "Execution Sync", icon: CheckCircle },
                            { step: "04", title: "Leadership Enablement", icon: Gem }
                        ].map((s, i) => (
                            <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl text-center group hover:shadow-md transition-all">
                                <span className="block text-purple-600 font-mono text-sm mb-4">{s.step}</span>
                                <s.icon className="w-8 h-8 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
                                <h4 className="text-sm font-semibold leading-snug text-slate-900">{s.title}</h4>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-8 underline decoration-purple-600 decoration-4 underline-offset-8">A Operating Model, Not a Tool</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Jira Align fails when treated as a simple tool rollout. It succeeds when treated as a <span className="text-slate-900 font-semibold">leadership operating model.</span> We focus on the outcomes that matter to CIOs, PMOs, and transformation leaders.
                    </p>
                    <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 italic text-purple-900 font-medium">
                        "Which initiatives support our strategic goals? Are we over-invested or under-invested? What risks threaten delivery timelines? We help you answer these with confidence."
                    </div>
                </section>

                <div className="bg-linear-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 border border-purple-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl text-center md:text-left">
                        <h3 className="text-3xl font-semibold mb-4 text-slate-900">Master Enterprise Agility</h3>
                        <p className="text-slate-600 font-medium">
                            Connect your strategy to execution with a partner who understands both executive vision and team reality.
                        </p>
                    </div>
                    <Link to="/about-us" hash="contact-section">
                        <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 flex items-center gap-2 cursor-pointer text-sm">
                            Talk to Experts <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </BlogLayout>
    )
}
