import { CheckListItem } from '@/components/ui/CheckListItem'

const reasons = [
    "Deep Atlassian platform expertise",
    "Proven experience building Forge-based apps",
    "Cloud-native and security-first architecture",
    "Enterprise-ready solutions and integrations",
    "Practical consulting backed by real implementations"
]

export function WhyAchlysSolutionsSection() {
    return (
        <section className="scroll-mt-24 container mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-4">
                    <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                        Why Achlys Solutions
                    </h2>
                    <p className="text-lg sm:text-xl font-semibold text-purple-600 font-display">
                        Why Teams Choose Achlys
                    </p>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                        We don't just configure Atlassian tools—we engineer solutions around how teams actually work, ensuring long-term scalability and security.
                    </p>
                </div>

                <ul className="grid grid-cols-1 gap-4">
                    {reasons.map((reason, index) => (
                        <CheckListItem key={index}>{reason}</CheckListItem>
                    ))}
                </ul>
            </div>
        </section>
    )
}
