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
          <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-purple-600 to-transparent opacity-50" />
          <p className="text-xl text-slate-600 leading-relaxed pl-8">
            Teams today don’t struggle because they lack tools. They struggle
            because{' '}
            <span className="text-slate-900 font-semibold">
              information is scattered.
            </span>{' '}
            Project updates live in Jira, documentation in Confluence, service
            data in JSM-and finding the right answer often takes longer than
            doing the work itself.
            <br />
            <br />
            <span className="text-purple-600 font-semibold italic">
              This is exactly the problem Rovo is designed to solve.
            </span>
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
            <Sparkles className="text-purple-600" />
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
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <item.icon className="w-8 h-8 text-purple-600 mb-4" />
                <h4 className="font-semibold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-50 blur-[120px] rounded-full -mb-48 -mr-48" />
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 flex items-center gap-2 relative z-10">
            <Database className="text-purple-600" />
            Rovo Is Only as Good as Your Setup
          </h2>
          <p className="text-slate-600 mb-8 relative z-10 leading-relaxed">
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
                className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="text-slate-700 text-sm font-medium">
                  {issue}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-slate-900 mb-8">
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
                <span className="text-4xl font-semibold text-slate-100 group-hover:text-purple-100 transition-colors uppercase font-mono">
                  {step.step}
                </span>
                <div className="pt-1">
                  <h4 className="text-xl font-semibold text-slate-900 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-purple-50 rounded-3xl p-10 border border-purple-100 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-4 text-slate-900">
              The Future is Intelligent
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Rovo is a foundational part of the AI-powered future of Atlassian.
              Let us help you prepare your platform today.
            </p>
          </div>
          <a
            href="https://www.atlassian.com/software/jira/ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whitespace-nowrap px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all flex items-center gap-2 shadow-lg shadow-purple-200 text-sm cursor-pointer">
              Start Your AI Journey <ArrowRight className="w-5 h-5" />
            </button>
          </a>
        </div>
      </div>
    </BlogLayout>
  )
}
