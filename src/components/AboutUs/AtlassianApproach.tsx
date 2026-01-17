import { ContentBlock } from '@/components/Solutions/shared'

const atlassianProducts = [
  'Jira Software for agile planning and delivery',
  'Jira Service Management for ITSM and enterprise service management',
  'Confluence for knowledge and collaboration',
  'Jira Align for enterprise agility',
  'Rovo for AI-powered insights and productivity',
]

export function AtlassianApproach() {
  return (
    <ContentBlock
      heading="Our Atlassian-First Approach"
      subheading="Purpose-Built for the Atlassian Ecosystem"
      content="Unlike general IT consulting firms, Wired Brains is deeply focused on the Atlassian platform. We work exclusively with Atlassian products and frameworks, enabling us to deliver solutions that align with platform best practices, security standards and long-term scalability."
      items={atlassianProducts}
    />
  )
}
