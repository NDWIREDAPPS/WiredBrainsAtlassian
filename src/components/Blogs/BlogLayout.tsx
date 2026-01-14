import { ReactNode } from 'react'

interface BlogLayoutProps {
    title: string
    description: string
    image: string
    date: string
    children: ReactNode
}

export const BlogLayout = ({ title, description, image, date, children }: BlogLayoutProps) => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[65vh] min-h-[450px] w-full overflow-hidden bg-slate-50">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent" />

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-4xl mx-auto px-6 pb-16 w-full relative z-10">
                        <div className="mb-6 inline-flex items-center gap-3">
                            <span className="px-4 py-1.5 bg-purple-600 text-white text-xs font-semibold rounded-full shadow-lg shadow-purple-200 uppercase tracking-wider">
                                Insights
                            </span>
                            <span className="text-slate-500 font-medium text-sm">
                                {date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            {title}
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-medium">
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <article className="prose prose-lg prose-slate max-w-none 
                    prose-headings:text-slate-900 prose-headings:font-semibold prose-headings:mb-6 prose-headings:mt-12
                    prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                    prose-li:text-slate-600 prose-li:mb-2
                    prose-strong:text-slate-900 prose-strong:font-semibold
                    prose-img:rounded-2xl prose-img:shadow-lg
                    prose-a:text-purple-600 prose-a:font-semibold hover:prose-a:text-purple-700">
                    {children}
                </article>

                <div className="mt-20 pt-10 border-t border-slate-100 italic text-slate-500 text-sm">
                    Achlys Solutions helps teams get more value from Atlassian through modern Forge-based apps and practical consulting.
                </div>
            </div>
        </div>
    )
}
