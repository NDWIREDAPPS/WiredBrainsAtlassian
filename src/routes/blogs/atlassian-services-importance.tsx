import { createFileRoute, Link } from '@tanstack/react-router'
import { BlogLayout } from '../../components/Blogs/BlogLayout'
import { blogPosts } from '../../lib/data'
import { Users, Settings, TrendingUp, ShieldCheck, Zap, ArrowRight, Check } from 'lucide-react'

export const Route = createFileRoute('/blogs/atlassian-services-importance')({
    component: AtlassianServicesBlog,
})

function AtlassianServicesBlog() {
    const post = blogPosts.find(p => p.slug === 'atlassian-services-importance')!

    return (
        <BlogLayout
            title={post.title}
            description={post.description}
            image={post.heroImage}
            date={post.date}
        >
            <div className="space-y-16">
                <section>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        When organizations adopt Atlassian tools like Jira Software, Jira Service Management, or Confluence, the expectation is clear: <span className="text-slate-900 font-semibold underline decoration-purple-300">better visibility, faster delivery, and smoother collaboration.</span> But many teams discover something quickly — tools alone don’t guarantee results.
                    </p>
                </section>

                <section className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                        <Users className="text-purple-600" />
                        The Gap Between Buying and Succeeding
                    </h2>
                    <p className="text-slate-600 mb-8 italic">It’s common to see organizations struggling with:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            "Using only a fraction of Jira’s capabilities",
                            "Messy workflows and permissions",
                            "Manual processes that should be automated",
                            "Low adoption from teams"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-8 underline decoration-purple-600 underline-offset-8">What Atlassian Services Really Do</h2>
                    <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                        Atlassian services focus on making the platform work for people, not the other way around. Good tools need a reliable operating system for work.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Design", desc: "Workflows that match real-world processes", icon: Settings },
                            { title: "Standardize", desc: "Consistent usage patterns across all teams", icon: ShieldCheck },
                            { title: "Improve", desc: "Visibility for leadership and stakeholders", icon: TrendingUp },
                        ].map((benefit, i) => (
                            <div key={i} className="group hover:bg-purple-600 p-8 rounded-3xl transition-all duration-300 border border-slate-100 hover:border-purple-600">
                                <benefit.icon className="w-10 h-10 text-purple-600 group-hover:text-white mb-6 transition-colors" />
                                <h4 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-3 transition-colors">{benefit.title}</h4>
                                <p className="text-slate-600 group-hover:text-purple-100 transition-colors uppercase tracking-wider text-xs font-semibold">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="relative overflow-hidden bg-purple-50 rounded-[2.5rem] p-12 border border-purple-100">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/50 blur-[100px] -mr-32 -mt-32" />
                    <h2 className="text-3xl font-semibold mb-8 relative z-10 text-slate-900">Strategy, Adoption, and Growth</h2>
                    <div className="space-y-4 relative z-10">
                        {[
                            { title: "Advisory & Planning", text: "Choosing the right tools and architecture" },
                            { title: "Implementation", text: "Building clean, scalable configurations" },
                            { title: "Training", text: "Helping teams actually use the platform" },
                            { title: "Managed Services", text: "Keeping systems healthy as needs evolve" }
                        ].map((service, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border-b border-purple-100 group hover:bg-white transition-colors">
                                <div>
                                    <span className="text-purple-600 font-mono text-sm mr-4">0{i + 1}</span>
                                    <span className="text-lg font-semibold text-slate-900">{service.title}</span>
                                </div>
                                <span className="text-slate-500 text-sm italic group-hover:text-slate-700">{service.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-semibold text-slate-900 mb-6 leading-tight">Why a Focused Partner Matters</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Not all service providers work the same way. Teams benefit most from providers who specialize exclusively in Atlassian, understanding both configuration and extension.
                        </p>
                        <div className="space-y-3">
                            {["Real-world experience", "Modern Forge-based apps", "Clean, scalable design"].map((t, i) => (
                                <div key={i} className="flex items-center gap-2 text-slate-900 font-medium">
                                    <Check className="w-5 h-5 text-purple-600" />
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-80 bg-purple-50 rounded-3xl p-8 border border-purple-100">
                        <Zap className="w-12 h-12 text-purple-600 mb-6" />
                        <h4 className="text-xl font-semibold text-slate-900 mb-4">Unlock Your Potential</h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-8">
                            Ready to turn your Atlassian tools into a high-performance engine?
                        </p>
                        <Link to="/about-us" hash="contact-section">
                            <button className="w-full py-3 bg-purple-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 text-sm cursor-pointer">
                                Book Consultation <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </BlogLayout>
    )
}

