import { createFileRoute, Link } from '@tanstack/react-router'
import { BlogLayout } from '../../components/Blogs/BlogLayout'
import { blogPosts } from '../../lib/data'
import {
  Users,
  Settings,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  Check,
} from 'lucide-react'

export const Route = createFileRoute('/blogs/atlassian-services-importance')({
  component: AtlassianServicesBlog,
})

function AtlassianServicesBlog() {
  const post = blogPosts.find(
    (p) => p.slug === 'atlassian-services-importance',
  )!

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
            When organizations adopt Atlassian tools like Jira Software, Jira
            Service Management, or Confluence, the expectation is clear:{' '}
            <span className="text-foreground font-semibold underline decoration-[#f14a15]/30">
              better visibility, faster delivery and smoother collaboration.
            </span>{' '}
            But many teams discover something quickly - tools alone don’t
            guarantee results.
          </p>
        </section>

        <section className="bg-[#f14a15]/10 rounded-3xl p-8 border border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Users className="text-primary" />
            The Gap Between Buying and Succeeding
          </h2>
          <p className="text-muted-foreground mb-8 italic">
            It’s common to see organizations struggling with:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Using only a fraction of Jira’s capabilities',
              'Messy workflows and permissions',
              'Manual processes that should be automated',
              'Low adoption from teams',
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-sm border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-[#f14a15]/60" />
                <span className="text-muted-foreground font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-foreground mb-8 underline decoration-primary underline-offset-8">
            What Atlassian Services Really Do
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
            Atlassian services focus on making the platform work for people, not
            the other way around. Good tools need a reliable operating system
            for work.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Design',
                desc: 'Workflows that match real-world processes',
                icon: Settings,
              },
              {
                title: 'Standardize',
                desc: 'Consistent usage patterns across all teams',
                icon: ShieldCheck,
              },
              {
                title: 'Improve',
                desc: 'Visibility for leadership and stakeholders',
                icon: TrendingUp,
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="group hover:bg-primary p-8 rounded-3xl transition-all duration-300 border border-border hover:border-primary"
              >
                <benefit.icon className="w-10 h-10 text-primary group-hover:text-background mb-6 transition-colors" />
                <h4 className="text-xl font-semibold text-foreground group-hover:text-background mb-3 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground group-hover:text-[#f14a15]/20 transition-colors uppercase tracking-wider text-xs font-semibold">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f14a15]/10 rounded-[2.5rem] p-12 border border-[#f14a15]/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f14a15]/20 blur-[100px] -mr-32 -mt-32" />
          <h2 className="text-3xl font-semibold mb-8 relative z-10 text-foreground">
            Strategy, Adoption and Growth
          </h2>
          <div className="space-y-4 relative z-10">
            {[
              {
                title: 'Advisory & Planning',
                text: 'Choosing the right tools and architecture',
              },
              {
                title: 'Implementation',
                text: 'Building clean, scalable configurations',
              },
              {
                title: 'Training',
                text: 'Helping teams actually use the platform',
              },
              {
                title: 'Managed Services',
                text: 'Keeping systems healthy as needs evolve',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 border-b border-[#f14a15]/20 group hover:bg-card transition-colors"
              >
                <div>
                  <span className="text-primary font-mono text-sm mr-4">
                    0{i + 1}
                  </span>
                  <span className="text-lg font-semibold text-foreground">
                    {service.title}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm italic group-hover:text-muted-foreground">
                  {service.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-foreground mb-6 leading-tight">
              Why a Focused Partner Matters
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Not all service providers work the same way. Teams benefit most
              from providers who specialize exclusively in Atlassian,
              understanding both configuration and extension.
            </p>
            <div className="space-y-3">
              {[
                'Real-world experience',
                'Modern Forge-based apps',
                'Clean, scalable design',
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-foreground font-medium"
                >
                  <Check className="w-5 h-5 text-primary" />
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-80 bg-[#f14a15]/10 rounded-3xl p-8 border border-[#f14a15]/20">
            <Zap className="w-12 h-12 text-primary mb-6" />
            <h4 className="text-xl font-semibold text-foreground mb-4">
              Unlock Your Potential
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Ready to turn your Atlassian tools into a high-performance engine?
            </p>
            <Link to="/about-us" hash="contact-section">
              <button className="w-full py-3 bg-primary text-background rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-[#f14a15]/20 text-sm cursor-pointer">
                Book Consultation <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </BlogLayout>
  )
}
