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
  AlertTriangle,
  FileQuestion,
  Search,
  RefreshCw,
  Database,
  Zap,
  BarChart3
} from 'lucide-react'

export const Route = createFileRoute('/solutions/itsm')({
  head: () => ({
    meta: [
      { title: 'IT Service Management (ITSM) Solutions | Achlys Solutions' },
      { name: 'description', content: 'Modern ITSM and ESM solutions built on Jira Service Management. Incident, request, problem, and change management aligned with ITIL best practices.' },
      { property: 'og:title', content: 'IT Service Management (ITSM) Solutions | Achlys Solutions' },
      { property: 'og:description', content: 'Modern ITSM and ESM solutions built on Jira Service Management aligned with ITIL best practices.' },
      { property: 'og:url', content: 'https://achlyssolutions.netlify.app/solutions/itsm' },
    ],
  }),
  component: ITSMPage,
})

function ITSMPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 relative overflow-hidden w-full">
      <HeroSection />
      <CoreCapabilitiesSection />
      <ESMSection />
      <AutomationSection />
      <ReportingSection />
      <WhyAchlysSection />
      <TargetOrganizationsSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <SolutionHero
      title="IT Service Management"
      highlightedTitle="(ITSM)"
      tagline="Modern ITSM & ESM Solutions Built on Atlassian"
      description="Achlys Solutions helps organizations design and implement robust IT Service Management (ITSM) and Enterprise Service Management (ESM) solutions using Jira Service Management."
      secondaryDescription="We enable IT teams to efficiently manage incidents, service requests, problems, changes, and assets—while providing business teams with fast, reliable, and transparent service experiences. Our implementations are aligned with ITIL best practices and built to scale with organizational growth."
    />
  )
}

function CoreCapabilitiesSection() {
  const capabilities: FeatureItem[] = [
    {
      title: "Incident Management",
      description: "Rapid detection, triage, and resolution of incidents to minimize business impact. We configure workflows, SLAs, escalations, and automation to ensure faster response times and improved service reliability.",
      icon: AlertTriangle
    },
    {
      title: "Request Management",
      description: "Streamlined service request portals for IT and business teams, enabling employees to easily request services such as access, hardware, software, and support—without unnecessary complexity.",
      icon: FileQuestion
    },
    {
      title: "Problem Management",
      description: "Structured root cause analysis and problem resolution to reduce recurring incidents. We design problem workflows that focus on long-term stability and continuous improvement.",
      icon: Search
    },
    {
      title: "Change Management",
      description: "Controlled and auditable change processes to reduce risk while maintaining agility. Our change management solutions support approvals, risk assessments, and deployment visibility.",
      icon: RefreshCw
    },
    {
      title: "Asset & Configuration Management",
      description: "Integrated asset and configuration tracking to maintain visibility into infrastructure, applications, and dependencies—supporting informed decision-making and operational governance.",
      icon: Database
    }
  ]

  return (
    <FeatureGrid
      heading="Core ITSM Capabilities"
      subheading="What We Deliver"
      features={capabilities}
      columns={3}
      useCarousel={true}
    />
  )
}

function ESMSection() {
  return (
    <ContentBlock
      heading="Extending ITSM Beyond IT"
      subheading="Enterprise Service Management (ESM)"
      content="We help organizations expand ITSM principles across the enterprise using Jira Service Management. This enables teams such as HR, Finance, Facilities, Legal, and Operations to deliver services through a unified platform with consistent workflows and reporting."
      items={[
        "A single service portal for all internal teams",
        "Standardized request handling across departments",
        "Improved visibility and accountability"
      ]}
    />
  )
}

function AutomationSection() {
  const automationFeatures: FeatureItem[] = [
    {
      title: "Automated Workflows",
      description: "Automated ticket routing and approvals to eliminate manual work and speed up service delivery.",
      icon: Zap
    },
    {
      title: "SLA Management",
      description: "SLA tracking and breach prevention to ensure service level commitments are met consistently.",
      icon: BarChart3
    },
    {
      title: "Tool Integrations",
      description: "Integrations with monitoring, identity, and collaboration tools for seamless operations.",
      icon: Database
    },
    {
      title: "Custom Workflows",
      description: "Custom workflows aligned with organizational processes for maximum efficiency.",
      icon: RefreshCw
    }
  ]

  return (
    <FeatureGrid
      heading="Smarter ITSM Through Automation"
      subheading="Automation & Integrations"
      description="We leverage Jira Service Management automation and integrations to eliminate manual work and improve operational efficiency."
      features={automationFeatures}
      columns={2}
      useCarousel={true}
    />
  )
}

function ReportingSection() {
  return (
    <ContentBlock
      heading="Actionable ITSM Reporting"
      subheading="Reporting & Insights"
      content="Our ITSM implementations provide clear visibility into service performance using dashboards and reports. Leadership gains insights into:"
      items={[
        "Incident trends and resolution times",
        "SLA performance",
        "Service request volumes",
        "Team workload and efficiency"
      ]}
    />
  )
}

function WhyAchlysSection() {
  return (
    <TwoColumnSection
      heading="Our ITSM Advantage"
      subheading="Why Achlys Solutions for ITSM"
      content="We don't just implement ITSM tools—we design service management systems that teams actually use and trust."
      items={[
        "Deep expertise in Jira Service Management",
        "ITIL-aligned service design",
        "Scalable solutions for enterprise environments",
        "Strong focus on usability and adoption",
        "Secure, cloud-native architecture"
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
        "IT teams modernizing service delivery",
        "Enterprises adopting ESM practices",
        "Organizations migrating from legacy ITSM tools",
        "Public-sector and compliance-driven environments"
      ]}
      reversed
    />
  )
}

function CTASection() {
  return (
    <SolutionCTA
      heading="Transform Your IT Service Management"
      content="Whether you are implementing ITSM for the first time or modernizing an existing service desk, Achlys Solutions helps you build a scalable, efficient, and future-ready service management platform on Atlassian."
    />
  )
}
