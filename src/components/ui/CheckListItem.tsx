import { CheckCircle } from 'lucide-react'

interface CheckListItemProps {
    children: string
    className?: string
}

export function CheckListItem({ children, className = "" }: CheckListItemProps) {
    return (
        <li className={`flex items-center gap-4 bg-white rounded-2xl p-5 border border-purple-100 shadow-xs hover:border-purple-300 hover:shadow-md transition-all group ${className}`}>
            <CheckCircle className="h-6 w-6 text-purple-600 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-800 text-lg font-medium leading-snug">{children}</span>
        </li>
    )
}
