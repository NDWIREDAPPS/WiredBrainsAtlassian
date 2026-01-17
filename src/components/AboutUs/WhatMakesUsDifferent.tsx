import { Check } from 'lucide-react'

const differentiators = [
  'We understand Atlassian internals, not just configurations',
  'We build Forge-based apps that pass Atlassian security and compliance reviews',
  'We design solutions with performance, scalability and maintainability in mind',
]

export function WhatMakesUsDifferent() {
  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg sm:text-xl font-semibold text-primary">
            Consultants Who Also Build Products
          </p>
        </div>

        <p className="text-base sm:text-lg text-muted-foreground text-center mb-8">
          Wired Brains is not just a consulting provider-we are also Atlassian
          Marketplace app developers. This gives us a unique advantage:
        </p>

        <div className="bg-card rounded-3xl p-8 md:p-12 border border-[#f14a15]/30 shadow-sm relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f14a15]/10 blur-3xl" />

          <ul className="space-y-6 relative z-10">
            {differentiators.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="p-1 rounded-full bg-[#f14a15]/15 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-8 italic text-center relative z-10 text-lg">
            "Our consulting recommendations are shaped by real product
            engineering experience-not theory."
          </p>
        </div>
      </div>
    </section>
  )
}
