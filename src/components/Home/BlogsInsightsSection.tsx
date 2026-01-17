import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'

export function BlogsInsightsSection() {
  return (
    <section className="scroll-mt-24 container mx-auto px-4 md:px-10">
      <div className="bg-[#f14a15]/10 rounded-3xl p-8 md:p-12 border border-[#f14a15]/20 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f14a15]/15 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#010101]/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center p-3 bg-card rounded-xl shadow-xs border border-[#f14a15]/20">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>

            <div>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-2">
                Blogs & Insights
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-primary font-display">
                Expert knowledge, shared freely.
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Stay ahead with our latest deep dives into Atlassian best
              practices, Forge development tutorials and enterprise agile
              strategies.
            </p>

            <div className="pt-2">
              <Link
                to="/blogs"
                className="inline-flex items-center text-lg font-semibold text-foreground hover:text-primary transition-colors group"
              >
                Read Our Blog
                <span className="ml-2 bg-[#f14a15]/15 p-1 rounded-full group-hover:bg-primary group-hover:text-background transition-all">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>

          {/* Visual Side - Abstract Blog Cards */}
          <div className="relative h-64 md:h-80 w-full hidden lg:block">
            {/* Decorative floating cards */}
            <div className="absolute right-10 top-10 w-72 p-6 bg-card rounded-2xl shadow-lg border border-border transform rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-500 z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 bg-[#f14a15]/10 rounded-lg flex items-center justify-center text-primary text-xs font-semibold">
                  QA
                </div>
                <div className="h-2 w-24 bg-border rounded-full"></div>
              </div>
              <div className="h-3 w-full bg-border rounded-full mb-2"></div>
              <div className="h-3 w-3/4 bg-border rounded-full"></div>
            </div>

            <div className="absolute right-24 top-24 w-72 p-6 bg-card rounded-2xl shadow-xl border border-[#f14a15]/20 transform -rotate-2 transition-transform hover:rotate-0 hover:scale-105 duration-500 z-20">
              <Sparkles className="h-5 w-5 text-primary mb-3" />
              <h4 className="font-semibold text-foreground mb-2">
                The Future of Forge Apps
              </h4>
              <p className="text-sm text-muted-foreground">
                How cloud-native architecture is changing the Atlassian
                Marketplace...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
