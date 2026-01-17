import { createFileRoute, Link } from '@tanstack/react-router'
import { BlogLayout } from '../../components/Blogs/BlogLayout'
import { blogPosts } from '../../lib/data'
import {
  Shield,
  Zap,
  Layout,
  ArrowRight,
  CheckCircle2,
  Cloud,
} from 'lucide-react'

export const Route = createFileRoute('/blogs/atlassian-forge-future')({
  component: AtlassianForgeBlog,
})

function AtlassianForgeBlog() {
  const post = blogPosts.find((p) => p.slug === 'atlassian-forge-future')!

  return (
    <BlogLayout
      title={post.title}
      description={post.description}
      image={post.heroImage}
      date={post.date}
    >
      <div className="space-y-12">
        <section>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            If you use Jira or Confluence, chances are you already rely on apps
            from the Atlassian Marketplace to extend functionality. From time
            tracking to checklists and reporting, Marketplace apps play a big
            role in how teams work every day.
          </p>
          <div className="bg-[#f14a15]/10 border-l-4 border-primary p-8 rounded-r-2xl">
            <p className="text-primary font-medium text-lg leading-relaxed">
              "But not all apps are built the same. Over the last few years,
              Atlassian has introduced a new way to build apps called Forge-and
              it’s quietly changing what customers should expect from
              Marketplace apps."
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-foreground mb-6">
            What Is Atlassian Forge?
          </h2>
          <p className="mb-8">
            Forge is Atlassian’s cloud-native app platform. Instead of apps
            running on external servers owned by vendors, Forge apps:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                text: 'Run directly on Atlassian’s infrastructure',
                title: 'Cloud-Native',
              },
              {
                icon: Shield,
                text: 'Follow Atlassian’s security and compliance standards',
                title: 'Secure',
              },
              {
                icon: Layout,
                text: 'Designed specifically for Jira and Confluence Cloud',
                title: 'Integrated',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-foreground mb-6">
            Why Forge Matters to You
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-[#f14a15]/15 p-3 rounded-xl mt-1">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Better Security by Default
                </h3>
                <p className="text-muted-foreground">
                  Forge apps don’t store your data on third-party servers by
                  default. Everything runs within Atlassian’s trusted
                  environment, reducing security concerns and simplifying
                  compliance reviews.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#f14a15]/15 p-3 rounded-xl mt-1">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Faster, More Reliable Performance
                </h3>
                <p className="text-muted-foreground">
                  Because Forge apps are built for Atlassian Cloud, they’re
                  optimized to work smoothly inside Jira and Confluence-without
                  complex external dependencies.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#f14a15]/15 p-3 rounded-xl mt-1">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Easier Compliance & Governance
                </h3>
                <p className="text-muted-foreground">
                  For enterprises and public-sector organizations, Forge apps
                  make security reviews and approvals easier since they align
                  with Atlassian’s own cloud standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f14a15]/10 rounded-3xl p-10 border border-[#f14a15]/20">
          <h2 className="text-3xl font-semibold mb-6 text-foreground">
            Our Approach at Wired Brains
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed italic text-lg">
            We don’t treat Marketplace apps as side projects. We build apps
            because we see the same challenges repeatedly across teams. Our
            Forge-based apps focus on:
          </p>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              'Time tracking visualization',
              'Consistent issue creation',
              'Process automation',
              'Structured daily work',
            ].map((point, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-muted-foreground font-medium bg-card p-4 rounded-xl border border-[#f14a15]/20 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-primary" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        <div className="bg-[#f14a15]/10 rounded-2xl p-8 border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold text-foreground">
              Ready to explore Forge apps?
            </h4>
            <p className="text-muted-foreground font-medium">
              See how our marketplace apps can transform your Atlassian
              experience.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/" hash="marketplace-apps">
              <button className="px-5 py-2.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-[#f14a15]/20 flex items-center gap-2 cursor-pointer text-sm">
                Explore Apps <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </BlogLayout>
  )
}
