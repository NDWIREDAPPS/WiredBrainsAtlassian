import { Users, CheckCircle } from 'lucide-react'

const whyChooseUs = [
  'Proven experience with Forge and Marketplace apps',
  'Strong understanding of ITSM, Agile and enterprise delivery',
  'Secure, scalable and future-ready solutions',
  'Practical consulting backed by hands-on engineering',
  'Deep, Atlassian-focused expertise',
]

export function WhyChooseUs() {
  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-2xl mb-6 shadow-xs">
            <Users className="h-10 w-10 text-purple-600" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4 font-display">
            Why Organizations Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We combine technical depth with strategic insight to deliver
            outcomes that matter.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChooseUs.map((reason, index) => (
            <li
              key={index}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl border border-purple-100 shadow-xs hover:border-purple-300 hover:shadow-md transition-all"
            >
              <div className="p-1 rounded-full mt-1 shrink-0">
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-slate-800 font-medium text-lg leading-snug">
                {reason}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-center text-purple-600 font-semibold mt-12 text-xl italic">
          "We don't just implement Atlassian tools-we help organizations build
          long-term capability on the platform."
        </p>
      </div>
    </section>
  )
}
