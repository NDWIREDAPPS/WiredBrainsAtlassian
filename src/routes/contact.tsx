import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
    head: () => ({
        meta: [
            { title: 'Contact Us | Achlys Solutions' },
            { name: 'description', content: 'Get in touch with Achlys Solutions for Atlassian consulting, cloud migration, ITSM implementation, or Marketplace app inquiries.' },
            { property: 'og:title', content: 'Contact Us | Achlys Solutions' },
            { property: 'og:description', content: 'Get in touch with Achlys Solutions for Atlassian consulting and Marketplace app inquiries.' },
            { property: 'og:url', content: 'https://achlyssolutions.netlify.app/contact' },
        ],
    }),
    component: RouteComponent,
})

function RouteComponent() {
    return <div>Hello "/contact"!</div>
}
