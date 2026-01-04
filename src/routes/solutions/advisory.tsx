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
  Target,
  Layout,
  CreditCard,
  Package,
  Map,
  Shield
} from 'lucide-react'

export const Route = createFileRoute('/solutions/advisory')({
  component: AdvisoryPage,
})

function AdvisoryPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 relative overflow-hidden w-full">
      <HeroSection />
      <AdvisoryServicesSection />
      <RoadmapSection />
      <EnterpriseGovernanceSection />
      <WhyAchlysSection />
      <TargetOrganizationsSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <SolutionHero
      title="Advisory &"
      highlightedTitle="Licensing"
      tagline="Strategic Guidance for Smarter Atlassian Decisions"
      description="Achlys Solutions provides strategic advisory and licensing guidance to help organizations make informed decisions across the Atlassian ecosystem."
      secondaryDescription="From selecting the right tools and designing scalable architecture to optimizing licenses and planning long-term roadmaps, we help teams align Atlassian investments with business outcomes. Our advisory services are independent, practical, and grounded in real implementation and app-development experience."
    />
  )
}

function AdvisoryServicesSection() {
  const services: FeatureItem[] = [
    {
      title: "Tool Selection & Platform Strategy",
      description: "We help organizations identify the right Atlassian products based on use cases, scale, and maturity—including Jira Software, Jira Service Management, Confluence, and Jira Align. Our recommendations focus on long-term value—not over-tooling.",
      icon: Target
    },
    {
      title: "Architecture & Design Advisory",
      description: "We provide guidance on designing scalable, secure, and maintainable Atlassian architectures, covering project and space structures, permission and access models, workflow and automation patterns, and cloud-native designs.",
      icon: Layout
    },
    {
      title: "Licensing Optimization",
      description: "We help organizations understand and optimize Atlassian licensing by reviewing current usage, identifying under- or over-utilization, aligning editions to actual needs, and supporting co-terming and future planning.",
      icon: CreditCard
    },
    {
      title: "Marketplace App Advisory",
      description: "As Atlassian Marketplace app developers, we advise on app selection and consolidation, cloud-compatible and Forge-based alternatives, and risk, security, and performance considerations.",
      icon: Package
    }
  ]

  return (
    <FeatureGrid
      heading="End-to-End Atlassian Strategy"
      subheading="What We Advise On"
      features={services}
      columns={2}
      useCarousel={true}
    />
  )
}

function RoadmapSection() {
  return (
    <ContentBlock
      heading="Planning for Long-Term Success"
      subheading="Roadmap & Growth Planning"
      content="We work with leadership and platform owners to define Atlassian roadmaps that evolve with organizational needs. Roadmaps are practical, achievable, and aligned with business priorities."
      items={[
        "Phased platform adoption",
        "Feature and capability rollouts",
        "Integration planning",
        "Readiness for enterprise scale, AI, and automation"
      ]}
    />
  )
}

function EnterpriseGovernanceSection() {
  const governanceItems: FeatureItem[] = [
    {
      title: "Governance & Standardization",
      description: "Establishing clear governance frameworks and standardization practices across your Atlassian platform.",
      icon: Shield
    },
    {
      title: "Security & Compliance",
      description: "Security and compliance considerations tailored to your industry and regulatory requirements.",
      icon: Shield
    },
    {
      title: "Platform Sustainability",
      description: "Platform sustainability and maintainability to ensure long-term operational success.",
      icon: Map
    },
    {
      title: "Operating Models",
      description: "Clear ownership and operating models for effective platform management.",
      icon: Layout
    }
  ]

  return (
    <FeatureGrid
      heading="Advisory for Complex Environments"
      subheading="Enterprise & Governance Focus"
      description="Our advisory services are designed for organizations operating in complex, regulated, or enterprise environments. This ensures Atlassian platforms remain strategic assets—not operational risks."
      features={governanceItems}
      columns={2}
    />
  )
}

function WhyAchlysSection() {
  return (
    <TwoColumnSection
      heading="Our Advisory Advantage"
      subheading="Why Achlys Solutions for Advisory & Licensing"
      content="We advise with a builder's mindset—not just theory."
      items={[
        "Deep Atlassian platform expertise",
        "Hands-on experience from consulting and app development",
        "Independent, vendor-neutral recommendations",
        "Practical guidance backed by real implementations",
        "Strong understanding of Cloud, Data Center, and Marketplace ecosystems"
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
        "Teams planning Atlassian adoption or expansion",
        "Enterprises optimizing platform usage and cost",
        "Organizations preparing for cloud or enterprise scale",
        "Leaders seeking a clear Atlassian roadmap"
      ]}
      reversed
    />
  )
}

function CTASection() {
  return (
    <SolutionCTA
      heading="Make Confident Atlassian Decisions"
      content="Whether you're selecting tools, optimizing licenses, or planning the future of your Atlassian platform, Achlys Solutions provides the clarity and expertise to move forward with confidence."
    />
  )
}
