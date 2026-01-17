import { createFileRoute } from '@tanstack/react-router'
import { BlogLayout } from '../../components/Blogs/BlogLayout'
import { blogPosts } from '../../lib/data'
import {
  Brain,
  Search,
  Cpu,
  Database,
  Sparkles,
  Network,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/blogs/rovo-intelligent-work')({
  component: RovoBlog,
})

function RovoBlog() {
  const post = blogPosts.find((p) => p.slug === 'rovo-intelligent-work')!

  return (
    <BlogLayout
      title={post.title}
      description={post.description}
      image={post.heroImage}
      date={post.date}
    >
      <div className="space-y-16">
        <section className="relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-[#f14a15] to-transparent opacity-50" />
          <p className="text-xl text-muted-foreground leading-relaxed pl-8">
            Teams today don’t struggle because they lack tools. They struggle
            because{' '}
            <span className="text-foreground font-semibold">
              information is scattered.
            </span>{' '}
            Project updates live in Jira, documentation in Confluence, service
            data in JSM-and finding the right answer often takes longer than
            doing the work itself.
            <br />
            <br />
            <span className="text-primary font-semibold italic">
              This is exactly the problem Rovo is designed to solve.
            </span>
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Sparkles className="text-primary" />
            What Rovo Brings to Atlassian
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Find Answers Faster',
                icon: Search,
                desc: 'Instant answers across all Atlassian tools.',
              },
              {
                title: 'Work in Context',
                icon: Network,
                desc: 'See related documentation while viewing Jira issues.',
              },
              {
                title: 'Reduce Search Time',
                icon: Brain,
                desc: 'AI-powered discovery instead of keyword matching.',
              },
              {
                title: 'Better Decisions',
                icon: Cpu,
                desc: 'Context-aware insights from your existing data.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-card rounded-[2.5rem] p-10 border border-border shadow-sm relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f14a15]/10 blur-[120px] rounded-full -mb-48 -mr-48" />
          <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2 relative z-10">
            <Database className="text-primary" />
            Rovo Is Only as Good as Your Setup
          </h2>
          <p className="text-muted-foreground mb-8 relative z-10 leading-relaxed">
            AI doesn’t fix broken structure. It amplifies it. To truly unlock
            Rovo’s potential, your Atlassian platform needs high-quality,
            structured data.
          </p>
          <div className="grid md:grid-cols-2 gap-4 relative z-10">
            {[
              'Inconsistent Jira fields',
              'Duplicate documentation',
              'Poorly structured spaces',
              'Unclear ownership',
            ].map((issue, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#f14a15]/10 p-4 rounded-xl border border-border"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-muted-foreground text-sm font-medium">
                  {issue}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-foreground mb-8">
            How We Implement Rovo
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Readiness Assessment',
                desc: 'We identify content gaps and structure issues before AI hits your data.',
              },
              {
                step: '02',
                title: 'Structure Optimization',
                desc: 'Cleaning up projects and docs to ensure Rovo surfaces meaningful insights.',
              },
              {
                step: '03',
                title: 'Use-Case Enablement',
                desc: 'Implementing AI around real workflows like faster incident resolution.',
              },
              {
                step: '04',
                title: 'Governance & Trust',
                desc: 'Ensuring Rovo respects your strict data boundaries and permissions.',
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <span className="text-4xl font-semibold text-[#f14a15]/20 group-hover:text-[#f14a15]/30 transition-colors uppercase font-mono">
                  {step.step}
                </span>
                <div className="pt-1">
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#f14a15]/10 rounded-3xl p-10 border border-[#f14a15]/20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-4 text-foreground">
              The Future is Intelligent
            </h3>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Rovo is a foundational part of the AI-powered future of Atlassian.
              Let us help you prepare your platform today.
            </p>
          </div>
          <a
            href="https://www.atlassian.com/software/jira/ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whitespace-nowrap px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-[#f14a15]/20 text-sm cursor-pointer">
              Start Your AI Journey <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </BlogLayout>
  )
}
