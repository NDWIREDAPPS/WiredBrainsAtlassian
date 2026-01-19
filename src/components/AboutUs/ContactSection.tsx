import { Award, Sparkles } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact-section" className="container mx-auto px-4 md:px-10">
      <div className="relative overflow-hidden rounded-3xl bg-card border border-[#f14a15]/20 p-8 md:p-12 lg:p-16 shadow-xl">
        <div className="absolute -top-20 -right-24 h-56 w-56 rounded-full bg-[#f14a15]/20 blur-3xl" />
        <div className="absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-[#f14a15]/15 blur-3xl" />

        <div className="relative flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f14a15]/15 border border-[#f14a15]/30">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Atlassian Solutions Partner
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Trusted Atlassian Solutions Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wired Brains is recognized for delivering secure, scalable
              Atlassian solutions. Our partnership reflects deep platform
              expertise and a commitment to building outcomes teams can rely on.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                'Certified delivery experts',
                'Marketplace-first engineering',
                'Enterprise-ready rollouts',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#f14a15]/20 bg-[#f14a15]/10 p-4 text-sm font-medium text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Atlassian Partner
              </p>
              <div className="mt-4 flex items-center justify-center">
                <img
                  src="/Partners.png"
                  alt="Atlassian Partners"
                  className="h-16 md:h-20 w-auto dark:hidden"
                />
                <img
                  src="/PartnersW.png"
                  alt="Atlassian Partners"
                  className="h-16 md:h-20 w-auto hidden dark:block"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-[#f14a15]/30 bg-[#f14a15]/15 px-5 py-2 text-sm text-foreground">
              <Award className="h-4 w-4 text-primary" />
              Atlassian-first delivery, guided by best practices.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
