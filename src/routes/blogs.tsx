import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs')({
  head: () => ({
    meta: [
      { title: 'Blog & Insights | Achlys Solutions' },
      { name: 'description', content: 'Insights, guides, and best practices for Atlassian tools including Jira, Confluence, and Jira Service Management from Achlys Solutions.' },
      { property: 'og:title', content: 'Blog & Insights | Achlys Solutions' },
      { property: 'og:description', content: 'Insights, guides, and best practices for Atlassian tools from Achlys Solutions.' },
      { property: 'og:url', content: 'https://achlyssolutions.netlify.app/blogs' },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blogs"!</div>
}
