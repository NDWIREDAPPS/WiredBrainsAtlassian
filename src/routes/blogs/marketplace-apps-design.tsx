import { Link } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { BlogLayout } from '../../components/Blogs/BlogLayout'
import { blogPosts } from '../../lib/data'
import {
  Clock,
  CheckSquare,
  Timer,
  FileText,
  Puzzle,
  Sparkles,
  ArrowRight,
  Layers,
} from 'lucide-react'

export const Route = createFileRoute('/blogs/marketplace-apps-design')({
  component: MarketplaceAppsBlog,
})

function MarketplaceAppsBlog() {
  const post = blogPosts.find((p) => p.slug === 'marketplace-apps-design')!

  return (
    <BlogLayout
      title={post.title}
      description={post.description}
      image={post.heroImage}
      date={post.date}
    >
      <div className="space-y-16">
        <section>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Jira is powerful, but most teams quickly discover the same thing:{' '}
            <span className="text-foreground font-bold italic">
              they need more structure, better visibility and simpler ways to
              work
            </span>
            -without turning Jira into something complex or hard to maintain.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-foreground mb-10 flex items-center gap-2">
            <Puzzle className="text-primary" />
            Our Focused App Ecosystem
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Timesheet App',
                desc: 'Advanced Time Tracking & Reporting. Visualize time across daily, weekly and monthly timelines without leaving Jira.',
                icon: Clock,
              },
              {
                title: 'Checklist App',
                desc: 'Structured Work Inside Issues. Embed clear, repeatable steps directly into your Jira workflows for maximum consistency.',
                icon: CheckSquare,
              },
              {
                title: 'Timer App',
                icon: Timer,
                desc: 'Lightweight, built-in time tracking designed to build better habits and accurate logs with zero friction.',
              },
              {
                title: 'Issue Template App',
                icon: FileText,
                desc: 'Standardize your data from day one. Pre-fill fields automatically for bug reports, tasks and service requests.',
              },
            ].map((app, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-3xl border border-border bg-card hover:bg-[#f14a15]/10 transition-colors"
              >
                <div className="bg-[#f14a15]/15 p-4 rounded-2xl">
                  <app.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-foreground mb-2">
                    {app.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed italic mb-4">
                    {app.desc}
                  </p>
                  <button className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f14a15]/10 rounded-[2.5rem] p-12 border border-border overflow-hidden relative text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#f14a15]/20 via-transparent to-transparent opacity-50" />
          <Layers className="w-16 h-16 text-primary mx-auto mb-8 relative z-10" />
          <h2 className="text-4xl font-semibold text-foreground relative z-10">
            Built to Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed text-lg">
            Each app solves a specific problem-but together, they create a
            powerful, unified environment that improves reporting, reduces
            overhead and increases Jira adoption.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            {['Consistency', 'Efficiency', 'Visibility', 'Scalability'].map(
              (tag, i) => (
                <span
                  key={i}
                  className="px-6 py-2 bg-card rounded-full border border-[#f14a15]/20 text-sm font-semibold text-muted-foreground shadow-sm"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </section>

        <div className="flex items-center justify-between p-10 bg-[#f14a15]/10 rounded-3xl border border-[#f14a15]/20">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <Sparkles className="text-primary w-6 h-6" />
              Ready to work smarter?
            </h3>
            <p className="text-muted-foreground font-medium">
              Explore the full Wired Brains marketplace today.
            </p>
          </div>
          <Link to="/" hash="marketplace-apps">
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-[#f14a15]/20 cursor-pointer text-sm">
              View Marketplace
            </button>
          </Link>
        </div>
      </div>
    </BlogLayout>
  )
}
