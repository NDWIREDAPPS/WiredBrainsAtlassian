import { CheckListItem } from '@/components/ui/CheckListItem'

interface TwoColumnSectionProps {
    heading: string
    subheading?: string
    content?: string
    items: string[]
    reversed?: boolean
}

export function TwoColumnSection({
    heading,
    subheading,
    content,
    items,
    reversed = false
}: TwoColumnSectionProps) {
    const contentColumn = (
        <div className="text-left space-y-4">
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                {heading}
            </h2>
            {subheading && (
                <p className="text-lg sm:text-xl font-semibold text-purple-600">
                    {subheading}
                </p>
            )}
            {content && (
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                    {content}
                </p>
            )}
        </div>
    )

    const listColumn = (
        <ul className="grid grid-cols-1 gap-4">
            {items.map((item, index) => (
                <CheckListItem key={index}>{item}</CheckListItem>
            ))}
        </ul>
    )

    return (
        <section className="container mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {reversed ? (
                    <>
                        {listColumn}
                        {contentColumn}
                    </>
                ) : (
                    <>
                        {contentColumn}
                        {listColumn}
                    </>
                )}
            </div>
        </section>
    )
}
