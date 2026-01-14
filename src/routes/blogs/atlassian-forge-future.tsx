import { createFileRoute, Link } from '@tanstack/react-router'
import { BlogLayout } from '../../components/Blogs/BlogLayout'
import { blogPosts } from '../../lib/data'
import { Shield, Zap, Layout, ArrowRight, CheckCircle2, Cloud } from 'lucide-react'

export const Route = createFileRoute('/blogs/atlassian-forge-future')({
    component: AtlassianForgeBlog,
})

function AtlassianForgeBlog() {
    const post = blogPosts.find(p => p.slug === 'atlassian-forge-future')!

    return (
        <BlogLayout
            title={post.title}
            description={post.description}
            image={post.heroImage}
            date={post.date}
        >
            <div className="space-y-12">
                <section>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        If you use Jira or Confluence, chances are you already rely on apps from the Atlassian Marketplace to extend functionality. From time tracking to checklists and reporting, Marketplace apps play a big role in how teams work every day.
                    </p>
                    <div className="bg-purple-50 border-l-4 border-purple-600 p-8 rounded-r-2xl">
                        <p className="text-purple-900 font-medium text-lg leading-relaxed">
                            "But not all apps are built the same. Over the last few years, Atlassian has introduced a new way to build apps called Forge—and it’s quietly changing what customers should expect from Marketplace apps."
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-6">What Is Atlassian Forge?</h2>
                    <p className="mb-8">
                        Forge is Atlassian’s cloud-native app platform. Instead of apps running on external servers owned by vendors, Forge apps:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Cloud, text: "Run directly on Atlassian’s infrastructure", title: "Cloud-Native" },
                            { icon: Shield, text: "Follow Atlassian’s security and compliance standards", title: "Secure" },
                            { icon: Layout, text: "Designed specifically for Jira and Confluence Cloud", title: "Integrated" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                                <item.icon className="w-8 h-8 text-purple-600 mb-4" />
                                <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-slate-900 mb-6">Why Forge Matters to You</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-xl mt-1">
                                <Shield className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Better Security by Default</h3>
                                <p className="text-slate-600">Forge apps don’t store your data on third-party servers by default. Everything runs within Atlassian’s trusted environment, reducing security concerns and simplifying compliance reviews.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-xl mt-1">
                                <Zap className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Faster, More Reliable Performance</h3>
                                <p className="text-slate-600">Because Forge apps are built for Atlassian Cloud, they’re optimized to work smoothly inside Jira and Confluence—without complex external dependencies.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-xl mt-1">
                                <CheckCircle2 className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">Easier Compliance & Governance</h3>
                                <p className="text-slate-600">For enterprises and public-sector organizations, Forge apps make security reviews and approvals easier since they align with Atlassian’s own cloud standards.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-purple-50 rounded-3xl p-10 border border-purple-100">
                    <h2 className="text-3xl font-semibold mb-6 text-slate-900">Our Approach at Achlys Solutions</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed italic text-lg">
                        We don’t treat Marketplace apps as side projects. We build apps because we see the same challenges repeatedly across teams. Our Forge-based apps focus on:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {[
                            "Time tracking visualization",
                            "Consistent issue creation",
                            "Process automation",
                            "Structured daily work"
                        ].map((point, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                                <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="text-xl font-semibold text-slate-900">Ready to explore Forge apps?</h4>
                        <p className="text-slate-600 font-medium">See how our marketplace apps can transform your Atlassian experience.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link to="/" hash="marketplace-apps">
                            <button className="px-5 py-2.5 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200 flex items-center gap-2 cursor-pointer text-sm">
                                Explore Apps <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </BlogLayout>
    )
}
