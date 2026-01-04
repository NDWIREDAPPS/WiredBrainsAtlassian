import { createFileRoute } from '@tanstack/react-router'
import {
  SolutionHero,
  SolutionCTA,
  FeatureGrid,
  ContentBlock,
  TwoColumnSection,
  type FeatureItem
} from '@/components/Solutions/shared'
import {
  Settings,
  TrendingUp,
  Gauge,
  LifeBuoy,
  RefreshCw
} from 'lucide-react'

export const Route = createFileRoute('/solutions/support')({
  component: SupportPage,
})

function SupportPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 relative overflow-hidden w-full">
      <HeroSection />
      <PlatformsSection />
      <ManagedServicesSection />
      <ProactiveMonitoringSection />
      <EngagementModelsSection />
      <WhyAchlysSection />
      <TargetOrganizationsSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <SolutionHero
      title="Support &"
      highlightedTitle="Managed Services"
      tagline="Reliable Atlassian Support That Grows with You"
      description="Achlys Solutions provides end-to-end support and managed services to ensure your Atlassian platform continues to deliver value long after implementation."
      secondaryDescription="From day-to-day administration to performance optimization and continuous enhancements, we help organizations keep their Atlassian tools stable, secure, and aligned with evolving business needs."
    />
  )
}

function PlatformsSection() {
  return (
    <ContentBlock
      heading="Atlassian Platforms We Manage"
      subheading="What We Support"
      content="Our managed services cover the full Atlassian ecosystem. Support is tailored to your environment, usage scale, and operational priorities."
      items={[
        "Jira Software",
        "Jira Service Management",
        "Confluence",
        "Jira Align",
        "Atlassian Marketplace apps and custom integrations"
      ]}
    />
  )
}

function ManagedServicesSection() {
  const services: FeatureItem[] = [
    {
      title: "Platform Administration",
      description: "Ongoing administration of projects, workflows, permissions, schemes, automation rules, and configurations to keep your Atlassian instance clean and well-governed.",
      icon: Settings
    },
    {
      title: "Enhancements & Continuous Improvement",
      description: "We help evolve your Atlassian setup by introducing new workflows, automations, dashboards, and features as your processes mature.",
      icon: TrendingUp
    },
    {
      title: "Performance Tuning",
      description: "Regular reviews to identify performance bottlenecks, configuration issues, and optimization opportunities—especially important for large or complex environments.",
      icon: Gauge
    },
    {
      title: "Issue Resolution & Support",
      description: "Responsive support for platform issues, configuration challenges, and user-reported problems to minimize disruption and downtime.",
      icon: LifeBuoy
    },
    {
      title: "Release & Change Support",
      description: "Assistance with Atlassian Cloud updates, feature rollouts, and controlled changes to ensure stability and user readiness.",
      icon: RefreshCw
    }
  ]

  return (
    <FeatureGrid
      heading="Comprehensive Platform Management"
      subheading="Our Managed Services Offering"
      features={services}
      columns={3}
      useCarousel={true}
    />
  )
}

function ProactiveMonitoringSection() {
  return (
    <ContentBlock
      heading="Prevent Issues Before They Impact Teams"
      subheading="Proactive Monitoring & Governance"
      content="Our managed services emphasize proactive platform health rather than reactive fixes. This approach helps organizations maintain a stable and scalable Atlassian environment."
      items={[
        "Regular configuration and health reviews",
        "Governance and best-practice alignment",
        "Usage and adoption monitoring",
        "Risk identification and mitigation"
      ]}
    />
  )
}

function EngagementModelsSection() {
  return (
    <ContentBlock
      heading="Support That Fits Your Needs"
      subheading="Flexible Engagement Models"
      content="We offer flexible support models based on your requirements. Our services scale as your Atlassian usage grows."
      items={[
        "Dedicated admin support",
        "Shared managed services",
        "On-demand expert assistance",
        "Monthly or quarterly optimization cycles"
      ]}
    />
  )
}

function WhyAchlysSection() {
  return (
    <TwoColumnSection
      heading="Our Support Advantage"
      subheading="Why Achlys Solutions for Managed Services"
      content="We act as an extension of your team—not just a ticket-based support provider."
      items={[
        "Atlassian-focused expertise",
        "Hands-on experience with enterprise environments",
        "Strong understanding of Cloud, Data Center, and Marketplace apps",
        "Practical, adoption-driven approach",
        "Reliable long-term partnership mindset"
      ]}
    />
  )
}

function TargetOrganizationsSection() {
  return (
    <TwoColumnSection
      heading="Organizations We Support"
      subheading="Who This Is For"
      items={[
        "Teams without dedicated Atlassian administrators",
        "Enterprises managing complex Atlassian environments",
        "Organizations seeking proactive platform governance",
        "Teams focused on long-term value and stability"
      ]}
      reversed
    />
  )
}

function CTASection() {
  return (
    <SolutionCTA
      heading="Keep Your Atlassian Platform Performing at Its Best"
      content="Whether you need ongoing administration, expert support, or continuous platform optimization, Achlys Solutions ensures your Atlassian tools remain reliable, scalable, and aligned with your business goals."
    />
  )
}
