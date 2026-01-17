import { Target, CheckCircle } from 'lucide-react'

const enterpriseFeatures = [
  'Security-first architecture',
  'Compliance-aware design',
  'Performance optimization for large user bases',
  'Long-term platform sustainability',
]

export function EnterpriseReady() {
  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#f14a15]/10 blur-3xl -z-10 opacity-50" />

        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div className="p-4 bg-[#f14a15]/10 rounded-2xl shadow-xs">
            <Target className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-3">
              Enterprise, Government & Scale-Ready
            </h2>
            <p className="text-primary font-semibold text-lg sm:text-xl">
              Designed for Complex Environments
            </p>
          </div>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto leading-relaxed">
          We work with organizations operating at scale, including enterprise
          and public-sector environments. Our solutions are designed with
          robustness in mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enterpriseFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-card border border-[#f14a15]/20 rounded-2xl p-6 transition-all hover:border-[#f14a15]/50 hover:shadow-md"
            >
              <CheckCircle className="h-6 w-6 text-primary shrink-0" />
              <span className="text-foreground font-medium text-lg leading-snug">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground mt-10 text-center italic text-lg leading-relaxed">
          This makes Wired Brains a trusted choice for organizations with
          complex workflows and high governance requirements.
        </p>
      </div>
    </section>
  )
}
