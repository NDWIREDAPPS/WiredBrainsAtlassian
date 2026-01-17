import { Lightbulb, CheckCircle } from 'lucide-react'

const philosophyPrinciples = [
  'Simplicity over over-engineering',
  'Usability over unnecessary customization',
  'Automation where it adds real value',
  'Clear ownership and maintainability',
]

export function OurPhilosophy() {
  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-[#f14a15]/10 rounded-2xl mb-6 shadow-xs">
            <Lightbulb className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-primary mb-6 font-display">
            Build What Teams Actually Use
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe Atlassian tools should enable teams-not slow them down.
            Every solution we design is guided by these principles:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophyPrinciples.map((principle, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border border-[#f14a15]/20 bg-card rounded-2xl p-6 hover:border-[#f14a15]/50 hover:shadow-md transition-all"
            >
              <CheckCircle className="h-6 w-6 text-primary shrink-0" />
              <span className="text-muted-foreground text-lg font-medium">
                {principle}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-[#f14a15]/10 rounded-2xl p-6 border border-[#f14a15]/20">
          <p className="text-primary font-semibold text-xl">
            The result is Atlassian environments that teams adopt naturally and
            leadership can trust.
          </p>
        </div>
      </div>
    </section>
  )
}
