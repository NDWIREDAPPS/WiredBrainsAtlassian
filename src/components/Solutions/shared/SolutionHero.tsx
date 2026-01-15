interface SolutionHeroProps {
    title: string
    highlightedTitle?: string
    tagline: string
    description: string
    secondaryDescription?: string
    image?: string
}

export function SolutionHero({
    title,
    highlightedTitle,
    tagline,
    description,
    secondaryDescription,
    image
}: SolutionHeroProps) {
    return (
        <section className="container mx-auto px-4 md:px-10 pt-8">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    {title}
                    {highlightedTitle && (
                        <>
                            {' '}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600">
                                {highlightedTitle}
                            </span>
                        </>
                    )}
                </h1>
                <p className="text-lg sm:text-xl font-semibold text-purple-600 mb-6">
                    {tagline}
                </p>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-4">
                    {description}
                </p>
                {secondaryDescription && (
                    <p className="text-base sm:text-lg text-slate-500 leading-relaxed">
                        {secondaryDescription}
                    </p>
                )}
            </div>
            {image && (
                <div className="mt-12 flex justify-center">
                    <img
                        src={image}
                        alt=""
                        className="w-full max-w-5xl rounded-xl shadow-2xl border border-slate-200/50"
                    />
                </div>
            )}
        </section>
    )
}
