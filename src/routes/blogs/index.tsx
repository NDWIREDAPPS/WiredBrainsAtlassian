import { createFileRoute } from '@tanstack/react-router'
import { blogPosts } from '../../lib/data'
import { BlogCard } from '../../components/Blogs/BlogCard'

export const Route = createFileRoute('/blogs/')({
  head: () => ({
    meta: [
      { title: 'Blog & Insights | Achlys Solutions' },
      {
        name: 'description',
        content:
          'Insights, guides and best practices for Atlassian tools including Jira, Confluence and Jira Service Management from Achlys Solutions.',
      },
      { property: 'og:title', content: 'Blog & Insights | Achlys Solutions' },
      {
        property: 'og:description',
        content:
          'Insights, guides and best practices for Atlassian tools from Achlys Solutions.',
      },
      {
        property: 'og:url',
        content: 'https://achlyssolutions.netlify.app/blogs',
      },
    ],
  }),
  component: BlogIndex,
})

function BlogIndex() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              Blog & <span className="text-purple-600">Insights</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Expert perspectives on Atlassian ecosystems, agile transformations
              and the future of work. Stay updated with the latest trends and
              best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                description={post.description}
                image={post.image}
                href={post.href}
                date={post.date}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
