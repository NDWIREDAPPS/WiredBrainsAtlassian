import { type LucideIcon } from 'lucide-react'

export interface ProcessStep {
  title: string
  description: string
  icon?: LucideIcon
}

interface ProcessSectionProps {
  heading: string
  subheading?: string
  steps: ProcessStep[]
}

export function ProcessSection({
  heading,
  subheading,
  steps,
}: ProcessSectionProps) {
  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
          {heading}
        </h2>
        {subheading && (
          <p className="text-lg sm:text-xl font-semibold text-primary">
            {subheading}
          </p>
        )}
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className="group bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#f14a15]/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-[#f14a15]/10 text-primary font-semibold text-lg shrink-0">
                    {Icon ? <Icon className="h-5 w-5" /> : index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
