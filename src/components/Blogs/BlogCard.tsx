import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
    title: string
    description: string
    image: string
    href: string
    date: string
}

export const BlogCard = ({ title, description, image, href, date }: BlogCardProps) => {
    return (
        <Link
            to={href}
            className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-600 text-xs font-medium rounded-full border border-slate-100">
                        {date}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-purple-600 transition-colors duration-300 mb-3 line-clamp-2">
                    {title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:gap-2 transition-all cursor-pointer">
                    Read Full Story
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    )
}
