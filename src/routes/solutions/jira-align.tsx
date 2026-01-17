import { createFileRoute } from '@tanstack/react-router'
import {
  SolutionHero,
  SolutionCTA,
  FeatureGrid,
  ContentBlock,
  TwoColumnSection,
  ProcessSection,
  type FeatureItem,
  type ProcessStep,
} from '@/components/Solutions/shared'
import { Target, GitBranch, Eye, AlertTriangle, Layers } from 'lucide-react'

export const Route = createFileRoute('/solutions/jira-align')({
  head: () => ({
    meta: [
      { title: 'Jira Align Enterprise Agility | Wired Brains' },
      {
        name: 'description',
        content:
          'Connect strategy to execution with Jira Align. Enterprise agility solutions for portfolio management, program execution and strategic visibility.',
      },
      {
        property: 'og:title',
        content: 'Jira Align Enterprise Agility | Wired Brains',
      },
      {
        property: 'og:description',
        content:
          'Connect strategy to execution with Jira Align for enterprise agility and portfolio management.',
      },
      {
        property: 'og:url',
        content: 'https://achlyssolutions.netlify.app/solutions/jira-align',
      },
    ],
  }),
  component: JiraAlignPage,
})

function JiraAlignPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 relative overflow-hidden w-full">
      <HeroSection />
      <WhyJiraAlignSection />
      <DeliverablesSection />
      <ApproachSection />
      <EcosystemSection />
      <TargetOrganizationsSection />
      <WhyAchlysSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <SolutionHero
      title="Jira Align"
      highlightedTitle="(Enterprise Agility)"
      tagline="Connect Strategy to Execution with Enterprise Agility"
      description="Wired Brains helps organizations implement Jira Align to bridge the gap between business strategy and team-level execution."
      secondaryDescription="Jira Align enables leadership, portfolio managers and delivery teams to operate on a single source of truth-providing visibility from strategic objectives and investments down to programs, teams and work items. Our approach ensures Jira Align is not just deployed, but adopted as a strategic operating model."
    />
  )
}

function WhyJiraAlignSection() {
  return (
    <ContentBlock
      heading="From Strategy to Outcomes"
      subheading="Why Jira Align"
      content="As organizations scale agile practices, visibility and alignment become critical. Jira Align is a key part of Atlassian's enterprise strategy and planning ecosystem, designed to help leaders manage complexity at scale."
      items={[
        'Align business strategy with delivery execution',
        'Visualize portfolios, programs and dependencies',
        'Track progress against strategic objectives',
        'Improve predictability, transparency and decision-making',
      ]}
    />
  )
}

function DeliverablesSection() {
  const deliverables: FeatureItem[] = [
    {
      title: 'Strategy & Portfolio Alignment',
      description:
        'We help organizations define and structure strategic themes, objectives and investment horizons-ensuring leadership has clear visibility into where time, effort and funding are being spent.',
      icon: Target,
    },
    {
      title: 'Program & Value Stream Design',
      description:
        'We design value streams, programs and team structures that reflect how work actually flows across the organization-reducing silos and improving flow.',
      icon: GitBranch,
    },
    {
      title: 'Execution Visibility',
      description:
        'We connect Jira Align with execution tools like Jira Software, enabling real-time visibility from strategy down to epics, stories and delivery progress.',
      icon: Eye,
    },
    {
      title: 'Dependency & Risk Management',
      description:
        'We configure Jira Align to identify dependencies, risks and bottlenecks early-helping organizations proactively manage delivery challenges.',
      icon: AlertTriangle,
    },
  ]

  return (
    <FeatureGrid
      heading="End-to-End Enterprise Agility Enablement"
      subheading="What We Deliver with Jira Align"
      features={deliverables}
      columns={2}
    />
  )
}

function ApproachSection() {
  const steps: ProcessStep[] = [
    {
      title: 'Assessment & Readiness',
      description:
        'We assess organizational maturity, operating models and existing agile practices to ensure Jira Align is implemented in a way that fits your organization-not forced onto it.',
    },
    {
      title: 'Configuration & Integration',
      description:
        'We configure Jira Align structures, hierarchies and integrations to reflect your enterprise model, while maintaining clarity and simplicity.',
    },
    {
      title: 'Enablement & Training',
      description:
        'We enable leaders, portfolio managers and delivery teams with role-based training focused on real-world usage-not theory.',
    },
    {
      title: 'Adoption & Continuous Improvement',
      description:
        'Post-implementation, we support adoption, refinement and optimization to ensure Jira Align becomes part of daily decision-making.',
    },
  ]

  return (
    <ProcessSection
      heading="Structured, Practical and Adoption-Focused"
      subheading="Our Jira Align Implementation Approach"
      steps={steps}
    />
  )
}

function EcosystemSection() {
  const ecosystemItems: FeatureItem[] = [
    {
      title: 'Business Strategy & Objectives',
      description:
        'Connect high-level business goals and strategic initiatives to measurable outcomes.',
      icon: Target,
    },
    {
      title: 'Portfolio Investment Decisions',
      description:
        'Make informed investment decisions based on real-time portfolio visibility.',
      icon: Layers,
    },
    {
      title: 'Program Execution & Delivery',
      description:
        'Track program execution and delivery progress across teams and value streams.',
      icon: GitBranch,
    },
    {
      title: 'Team-Level Work in Jira',
      description:
        'Connect strategy to the actual work being done by teams in Jira Software.',
      icon: Eye,
    },
  ]

  return (
    <FeatureGrid
      heading="Enterprise Strategy, Connected"
      subheading="Jira Align as Part of the Atlassian Strategy Ecosystem"
      description="Jira Align plays a critical role in Atlassian's broader strategy and planning ecosystem. We help organizations design this end-to-end flow so strategy is measurable, visible and actionable."
      features={ecosystemItems}
      columns={2}
    />
  )
}

function TargetOrganizationsSection() {
  return (
    <TwoColumnSection
      heading="Who Jira Align Is For"
      subheading="Organizations We Support"
      items={[
        'Large enterprises scaling agile across teams',
        'Organizations adopting SAFe or similar frameworks',
        'Leadership teams seeking execution transparency',
        'PMOs and transformation teams managing portfolios',
      ]}
    />
  )
}

function WhyAchlysSection() {
  return (
    <TwoColumnSection
      heading="Our Enterprise Agility Advantage"
      subheading="Why Wired Brains for Jira Align"
      content="We help organizations move beyond tools-toward true enterprise agility."
      items={[
        "Deep understanding of Atlassian's strategy-to-execution model",
        'Experience integrating Jira Align with Jira ecosystems',
        'Practical, adoption-driven implementations',
        'Focus on clarity, governance and measurable outcomes',
        'Consulting grounded in real enterprise delivery',
      ]}
      reversed
    />
  )
}

function CTASection() {
  return (
    <SolutionCTA
      heading="Bring Strategy and Execution Together"
      content="Whether you're starting your enterprise agility journey or scaling Jira Align across portfolios, Wired Brains helps you connect strategy to execution with confidence and clarity."
    />
  )
}
