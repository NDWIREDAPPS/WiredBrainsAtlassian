import { Link } from '@tanstack/react-router'
import { ArrowRight, type LucideIcon } from 'lucide-react'

export interface FeatureCardProps {
    title: string
    description: string
    icon: LucideIcon
    linkText?: string
    linkHref?: string
    className?: string
}

export function FeatureCard({
    title,
    description,
    icon: Icon,
    linkText,
    linkHref,
    className = ""
}: FeatureCardProps) {
    return (
        <div className={`group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-200 ${className}`}>
            <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                        <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                        {title}
                    </h3>
                </div>
                <p className="text-slate-600 text-base leading-relaxed grow">
                    {description}
                </p>
                {linkText && linkHref && (
                    <Link
                        to={linkHref}
                        className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 group-hover:underline decoration-2 underline-offset-4 mt-4"
                    >
                        {linkText}
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                )}
            </div>
        </div>
    )
}
