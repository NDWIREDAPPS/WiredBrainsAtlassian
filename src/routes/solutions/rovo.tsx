import { createFileRoute } from '@tanstack/react-router'
import {
  SolutionHero,
  SolutionCTA,
  FeatureGrid,
  ContentBlock,
  TwoColumnSection,
  type FeatureItem,
} from '@/components/Solutions/shared'
import {
  Search,
  Database,
  Target,
  Users,
  Sparkles,
  Shield,
  Lightbulb,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/solutions/rovo')({
  head: () => ({
    meta: [
      { title: 'Rovo AI Solutions | Wired Brains' },
      {
        name: 'description',
        content:
          'Adopt and operationalize Atlassian Rovo AI. Transform how teams find information, gain insights and take action across Jira and Confluence.',
      },
      { property: 'og:title', content: 'Rovo AI Solutions | Wired Brains' },
      {
        property: 'og:description',
        content:
          'Adopt Atlassian Rovo AI to transform how teams find information and take action across Jira and Confluence.',
      },
      {
        property: 'og:url',
        content: 'https://achlyssolutions.netlify.app/solutions/rovo',
      },
    ],
  }),
  component: RovoPage,
})

function RovoPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 relative overflow-hidden w-full">
      <HeroSection />
      <WhatIsRovoSection />
      <HowWeHelpSection />
      <RovoAcrossToolsSection />
      <GovernanceSection />
      <WhyRovoMattersSection />
      <WhyAchlysSection />
      <TargetOrganizationsSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <SolutionHero
      title="Rovo"
      highlightedTitle="(Atlassian AI)"
      tagline="AI-Powered Work, Built into Atlassian"
      description="Wired Brains helps organizations adopt and operationalize Rovo, Atlassian's AI-powered experience designed to transform how teams find information, gain insights and take action across the Atlassian ecosystem."
      secondaryDescription="Rovo brings intelligence directly into Jira, Confluence and connected tools-helping teams work faster, make better decisions and reduce friction across knowledge and delivery workflows."
    />
  )
}

function WhatIsRovoSection() {
  return (
    <ContentBlock
      heading="AI That Understands Your Atlassian Data"
      subheading="What is Rovo"
      content="Rovo is Atlassian's AI layer that connects work, knowledge and context across your Atlassian tools. Rovo works where teams already work-inside Atlassian products."
      items={[
        'Discover information instantly',
        'Ask natural-language questions',
        'Get contextual insights across projects and spaces',
        'Reduce time spent searching for answers',
      ]}
    />
  )
}

function HowWeHelpSection() {
  const helpItems: FeatureItem[] = [
    {
      title: 'Rovo Readiness & Enablement',
      description:
        'We help organizations assess readiness for Rovo adoption by reviewing data quality, Confluence structure, Jira configurations and governance practices-ensuring AI insights are accurate and meaningful.',
      icon: Search,
    },
    {
      title: 'Knowledge & Data Optimization',
      description:
        'AI is only as good as the data behind it. We help structure Jira and Confluence content so Rovo can surface relevant, trusted and actionable information.',
      icon: Database,
    },
    {
      title: 'Use-Case-Driven Adoption',
      description:
        'We enable Rovo around real business use cases such as faster incident resolution, improved knowledge discovery, executive visibility and reduced dependency on tribal knowledge.',
      icon: Target,
    },
    {
      title: 'Change Management & Training',
      description:
        'We provide role-based enablement to help teams understand how to use Rovo effectively-driving confidence, trust and adoption of AI-driven workflows.',
      icon: Users,
    },
  ]

  return (
    <FeatureGrid
      heading="Making Atlassian AI Practical and Valuable"
      subheading="How We Help with Rovo"
      features={helpItems}
      columns={2}
      useCarousel={true}
    />
  )
}

function RovoAcrossToolsSection() {
  const toolItems: FeatureItem[] = [
    {
      title: 'Jira Software',
      description:
        'Smarter insights into work, priorities and progress for development and project teams.',
      icon: Zap,
    },
    {
      title: 'Jira Service Management',
      description:
        'Faster resolution through contextual information and intelligent suggestions for service teams.',
      icon: Lightbulb,
    },
    {
      title: 'Confluence',
      description:
        'Intelligent knowledge discovery and answers for documentation and collaboration.',
      icon: Search,
    },
  ]

  return (
    <FeatureGrid
      heading="AI Embedded Across the Atlassian Ecosystem"
      subheading="Rovo Across Atlassian Tools"
      description="Rovo enhances intelligence across your Atlassian stack. We help ensure Rovo is integrated into daily workflows-not treated as a standalone feature."
      features={toolItems}
      columns={3}
    />
  )
}

function GovernanceSection() {
  const governanceItems: FeatureItem[] = [
    {
      title: 'Data Clarity & Ownership',
      description:
        'Ensuring clear data ownership and quality standards for AI-driven insights.',
      icon: Database,
    },
    {
      title: 'Permission-Aware Access',
      description:
        'AI insights that respect your existing permission structures and access controls.',
      icon: Shield,
    },
    {
      title: 'Governance-Aligned Configurations',
      description:
        "Configurations that align with your organization's governance policies.",
      icon: Target,
    },
    {
      title: 'Transparency & User Trust',
      description:
        'Building user trust through transparent AI operations and explainable insights.',
      icon: Users,
    },
  ]

  return (
    <FeatureGrid
      heading="Responsible AI Adoption"
      subheading="AI with Governance & Trust"
      description="Our approach to Rovo adoption emphasizes security, accuracy and compliance-ensuring AI enhances decision-making without compromising your organization's standards."
      features={governanceItems}
      columns={2}
    />
  )
}

function WhyRovoMattersSection() {
  return (
    <section className="container mx-auto px-4 md:px-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-4 bg-[#f14a15]/10 rounded-2xl mb-8 shadow-xs">
          <Sparkles className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
          From Information Overload to Intelligent Action
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-primary mb-6">
          Why Rovo Matters
        </p>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          As organizations scale, information becomes fragmented across tools
          and teams. Rovo helps reduce noise and surface what matters-turning
          Atlassian into an intelligent work system rather than just a
          collection of tools.
        </p>
      </div>
    </section>
  )
}

function WhyAchlysSection() {
  return (
    <TwoColumnSection
      heading="AI Adoption Led by Atlassian Practitioners"
      subheading="Why Wired Brains for Rovo"
      content="We help organizations adopt AI with purpose-not hype."
      items={[
        'Deep understanding of Atlassian data models',
        'Experience structuring Jira and Confluence for scale',
        'Practical, use-case-driven AI adoption',
        'Strong focus on governance and adoption',
        'Consulting grounded in real platform usage',
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
        'Enterprises adopting Atlassian AI capabilities',
        'Teams struggling with information discovery',
        'Leadership seeking AI-driven insights',
        'Organizations modernizing knowledge and delivery workflows',
      ]}
      reversed
    />
  )
}

function CTASection() {
  return (
    <SolutionCTA
      heading="Bring Intelligence to Your Atlassian Platform"
      content="Whether you are exploring Atlassian AI or preparing your platform for intelligent workflows, Wired Brains helps you adopt Rovo in a way that is practical, secure and impactful."
    />
  )
}
