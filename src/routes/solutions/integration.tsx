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
  Link2,
  Code,
  Workflow,
  Gauge,
  Shield,
  Cloud
} from 'lucide-react'

export const Route = createFileRoute('/solutions/integration')({
  head: () => ({
    meta: [
      { title: 'Integration & Performance Optimization | Achlys Solutions' },
      { name: 'description', content: 'Build seamlessly integrated and high-performance Atlassian environments. Third-party integrations, API extensions, and performance optimization.' },
      { property: 'og:title', content: 'Integration & Performance Optimization | Achlys Solutions' },
      { property: 'og:description', content: 'Build seamlessly integrated and high-performance Atlassian environments with expert consulting.' },
      { property: 'og:url', content: 'https://achlyssolutions.netlify.app/solutions/integration' },
    ],
  }),
  component: IntegrationPage,
})

function IntegrationPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 relative overflow-hidden w-full">
      <HeroSection />
      <WhatWeIntegrateSection />
      <IntegrationCapabilitiesSection />
      <PerformanceSection />
      <CloudNativeSection />
      <WhyAchlysSection />
      <TargetOrganizationsSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <SolutionHero
      title="Integration &"
      highlightedTitle="Performance"
      tagline="Connected Atlassian Platforms. Optimized for Scale."
      description="Achlys Solutions helps organizations build seamlessly integrated and high-performance Atlassian environments."
      secondaryDescription="We design and implement integrations with third-party systems, create custom automation and API-based extensions, and optimize platform performance to support enterprise-scale usage. Our focus is on reliability, scalability, and long-term maintainability—ensuring Atlassian tools work as a connected ecosystem, not isolated applications."
      image="/integration_and_performance.jpg"
    />
  )
}

function WhatWeIntegrateSection() {
  return (
    <ContentBlock
      heading="End-to-End Atlassian Integrations"
      subheading="What We Integrate"
      content="We design integrations across core Atlassian tools. Integrations are tailored to business workflows, data models, and security requirements."
      items={[
        "Jira Software",
        "Jira Service Management",
        "Confluence",
        "Atlassian Marketplace apps and custom solutions"
      ]}
    />
  )
}

function IntegrationCapabilitiesSection() {
  const capabilities: FeatureItem[] = [
    {
      title: "Third-Party Integrations",
      description: "We connect Atlassian tools with external systems such as identity providers, monitoring tools, collaboration platforms, asset systems, and reporting tools—enabling consistent data flow and visibility.",
      icon: Link2
    },
    {
      title: "API-Based Extensions",
      description: "We build custom extensions using Atlassian APIs and Forge-based development, allowing organizations to extend Jira and Confluence capabilities without compromising platform stability or security.",
      icon: Code
    },
    {
      title: "Workflow & Process Automation",
      description: "We design automation rules that eliminate manual steps, reduce errors, and accelerate service delivery—while keeping workflows transparent and maintainable.",
      icon: Workflow
    }
  ]

  return (
    <FeatureGrid
      heading="Seamless System Connectivity"
      subheading="Integration Capabilities"
      features={capabilities}
      columns={3}
    />
  )
}

function PerformanceSection() {
  return (
    <ContentBlock
      heading="Built to Perform at Enterprise Scale"
      subheading="Performance Optimization"
      content="As Atlassian usage grows, performance and usability become critical. We help organizations optimize their Atlassian environments. Performance optimization ensures teams can work efficiently—even in large, complex environments."
      items={[
        "Reviewing workflows, automations, and configurations",
        "Reducing unnecessary complexity and redundancy",
        "Improving response times and system stability",
        "Aligning configurations with cloud-native best practices"
      ]}
    />
  )
}

function CloudNativeSection() {
  const architectureItems: FeatureItem[] = [
    {
      title: "Secure Authentication",
      description: "Secure authentication and access controls for all integrations.",
      icon: Shield
    },
    {
      title: "Minimal Custom Code",
      description: "Minimal custom code where configuration is sufficient, reducing maintenance overhead.",
      icon: Code
    },
    {
      title: "Forge-Aligned Architecture",
      description: "Forge-aligned architecture for extensibility and future-proofing.",
      icon: Cloud
    },
    {
      title: "Reduced Overhead",
      description: "Reduced operational and maintenance overhead through smart design.",
      icon: Gauge
    }
  ]

  return (
    <FeatureGrid
      heading="Modern Integration Architecture"
      subheading="Cloud-Native & Secure by Design"
      description="Our integration and performance strategies follow cloud-native principles and Atlassian-recommended patterns. This approach supports scalability while maintaining security and compliance."
      features={architectureItems}
      columns={2}
    />
  )
}

function WhyAchlysSection() {
  return (
    <TwoColumnSection
      heading="Our Integration Advantage"
      subheading="Why Achlys Solutions for Integration & Performance"
      content="We ensure integrations enhance your Atlassian platform—without introducing risk or complexity."
      items={[
        "Deep understanding of Atlassian APIs and platform internals",
        "Experience building Forge-based Marketplace apps",
        "Proven performance tuning for enterprise environments",
        "Focus on maintainability and long-term stability",
        "Practical solutions driven by real-world usage"
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
        "Enterprises with complex system landscapes",
        "Teams requiring custom workflows and integrations",
        "Organizations scaling Atlassian usage across departments",
        "Platforms experiencing performance or reliability challenges"
      ]}
      reversed
    />
  )
}

function CTASection() {
  return (
    <SolutionCTA
      heading="Build a Connected, High-Performance Atlassian Platform"
      content="Whether you need to integrate Atlassian with enterprise systems, automate critical workflows, or optimize platform performance, Achlys Solutions delivers solutions designed for scale and sustainability."
    />
  )
}
