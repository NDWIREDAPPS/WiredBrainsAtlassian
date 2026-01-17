import { CheckCircle } from 'lucide-react'

interface CheckListItemProps {
  children: string
  className?: string
}

export function CheckListItem({
  children,
  className = '',
}: CheckListItemProps) {
  return (
    <li
      className={`flex items-center gap-4 bg-card rounded-2xl p-5 border border-[#f14a15]/20 shadow-xs hover:border-[#f14a15]/50 hover:shadow-md transition-all group ${className}`}
    >
      <CheckCircle className="h-6 w-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
      <span className="text-foreground font-medium leading-snug">
        {children}
      </span>
    </li>
  )
}
