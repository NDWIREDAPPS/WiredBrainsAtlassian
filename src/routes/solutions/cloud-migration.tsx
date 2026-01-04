import { createFileRoute } from '@tanstack/react-router'
import {
  SolutionHero,
  SolutionCTA,
  ContentBlock,
  TwoColumnSection,
  ProcessSection,
  type ProcessStep
} from '@/components/Solutions/shared'

export const Route = createFileRoute('/solutions/cloud-migration')({
  component: CloudMigrationPage,
})

function CloudMigrationPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 relative overflow-hidden w-full">
      <HeroSection />
      <BenefitsSection />
      <WhatWeMigrateSection />
      <ApproachSection />
      <PostMigrationSection />
      <SecuritySection />
      <WhyAchlysSection />
      <TargetOrganizationsSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <SolutionHero
      title="Cloud"
      highlightedTitle="Migration"
      tagline="Seamless Migration to Atlassian Cloud"
      description="Achlys Solutions helps organizations migrate from Server or Data Center to Atlassian Cloud with minimal disruption and maximum confidence."
      secondaryDescription="Our cloud migration approach ensures data integrity, performance optimization, security alignment, and post-migration readiness, enabling teams to fully leverage the benefits of Atlassian's cloud-first platform."
    />
  )
}

function BenefitsSection() {
  return (
    <ContentBlock
      heading="The Benefits of Cloud-First Atlassian"
      subheading="Why Move to Atlassian Cloud"
      content="Atlassian Cloud provides organizations with continuous innovation, enhanced security, and reduced infrastructure overhead. Moving to the cloud enables:"
      items={[
        "Automatic feature updates and enhancements",
        "Improved reliability and scalability",
        "Reduced infrastructure and maintenance costs",
        "Built-in security and compliance capabilities"
      ]}
    />
  )
}

function WhatWeMigrateSection() {
  return (
    <ContentBlock
      heading="Comprehensive Platform Migration"
      subheading="What We Migrate"
      content="We support cloud migrations across the Atlassian ecosystem. Each migration is tailored to your environment, scale, and business needs."
      items={[
        "Jira Software",
        "Jira Service Management",
        "Confluence",
        "Marketplace apps and custom integrations"
      ]}
    />
  )
}

function ApproachSection() {
  const steps: ProcessStep[] = [
    {
      title: "Assessment & Planning",
      description: "We begin with a detailed assessment of your current environment, including projects, users, workflows, apps, and integrations. This helps define scope, risks, timelines, and migration strategy."
    },
    {
      title: "Data & Configuration Migration",
      description: "We migrate issues, projects, spaces, users, permissions, and configurations while preserving historical data and ensuring accuracy and consistency."
    },
    {
      title: "App & Integration Strategy",
      description: "We evaluate existing apps and integrations, identify cloud-compatible alternatives, and recommend Forge-based or cloud-native solutions where required."
    },
    {
      title: "Performance Optimization",
      description: "Post-migration, we optimize configurations, workflows, and automation to align with cloud best practices and improve system performance."
    },
    {
      title: "Validation & Go-Live",
      description: "We perform thorough validation, user acceptance testing, and production readiness checks to ensure a smooth go-live experience."
    }
  ]

  return (
    <ProcessSection
      heading="Structured, Secure, and Proven"
      subheading="Our Cloud Migration Approach"
      steps={steps}
    />
  )
}

function PostMigrationSection() {
  return (
    <ContentBlock
      heading="Beyond Migration — Long-Term Success"
      subheading="Post-Migration Readiness"
      content="Our work doesn't stop at go-live. We ensure your teams are fully prepared to operate in Atlassian Cloud by providing:"
      items={[
        "Administrator and end-user enablement",
        "Cloud governance and best practices",
        "Security and access reviews",
        "Ongoing support and optimization"
      ]}
    />
  )
}

function SecuritySection() {
  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
          Cloud Migration with Security in Mind
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-purple-600 mb-6">
          Security & Compliance Focus
        </p>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          We design cloud migrations with a strong focus on security, data protection, and compliance. Our approach aligns with Atlassian Cloud security standards and supports organizations operating in regulated and enterprise environments.
        </p>
      </div>
    </section>
  )
}

function WhyAchlysSection() {
  return (
    <TwoColumnSection
      heading="Our Cloud Migration Advantage"
      subheading="Why Achlys Solutions for Cloud Migration"
      content="We don't just move data—we help organizations transition confidently to a cloud-first operating model."
      items={[
        "Deep Atlassian platform expertise",
        "Experience with complex Server & Data Center environments",
        "Cloud-native and Forge-first mindset",
        "Proven migration frameworks",
        "Focus on stability, performance, and adoption"
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
        "Teams planning Server or Data Center end-of-life transitions",
        "Enterprises modernizing Atlassian platforms",
        "Organizations seeking scalability and reduced infrastructure overhead",
        "Compliance-driven and security-focused environments"
      ]}
      reversed
    />
  )
}

function CTASection() {
  return (
    <SolutionCTA
      heading="Start Your Atlassian Cloud Journey"
      content="Whether you are preparing for end-of-support or proactively modernizing your Atlassian environment, Achlys Solutions ensures a smooth, secure, and future-ready transition to Atlassian Cloud."
    />
  )
}
