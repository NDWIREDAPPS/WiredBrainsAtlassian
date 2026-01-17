import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
  title: string
  description: string
  image: string
  href: string
  date: string
}

export const BlogCard = ({
  title,
  description,
  image,
  href,
  date,
}: BlogCardProps) => {
  return (
    <Link
      to={href}
      className="group block bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-card/90 backdrop-blur-sm text-muted-foreground text-xs font-medium rounded-full border border-border">
            {date}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all cursor-pointer">
          Read Full Story
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
