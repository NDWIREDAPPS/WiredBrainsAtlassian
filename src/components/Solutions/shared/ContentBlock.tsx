import { CheckListItem } from '@/components/ui/CheckListItem'

interface ContentBlockProps {
  heading?: string
  subheading?: string
  content?: string
  items: string[]
  layout?: 'centered' | 'left'
}

export function ContentBlock({
  heading,
  subheading,
  content,
  items,
  layout = 'centered',
}: ContentBlockProps) {
  const isLeft = layout === 'left'

  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className={`max-w-4xl mx-auto ${isLeft ? '' : 'text-center'}`}>
        <div className={`mb-12 ${isLeft ? '' : 'space-y-4'}`}>
          {heading && (
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-lg sm:text-xl font-semibold text-primary mb-4">
              {subheading}
            </p>
          )}
          {content && (
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {content}
            </p>
          )}
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <CheckListItem key={index}>{item}</CheckListItem>
          ))}
        </ul>
      </div>
    </section>
  )
}
