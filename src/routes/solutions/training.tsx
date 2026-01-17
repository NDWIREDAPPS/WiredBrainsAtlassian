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
  Settings,
  Code,
  Headphones,
  Users,
  BookOpen,
  Target,
  Layers,
  Heart,
} from 'lucide-react'

export const Route = createFileRoute('/solutions/training')({
  head: () => ({
    meta: [
      { title: 'Atlassian Training | Wired Brains' },
      {
        name: 'description',
        content:
          'Role-based Atlassian training for administrators, developers, agents and end users. Practical training on Jira, Confluence, JSM and Jira Align.',
      },
      {
        property: 'og:title',
        content: 'Atlassian Training | Wired Brains',
      },
      {
        property: 'og:description',
        content:
          'Role-based Atlassian training for administrators, developers, agents and end users.',
      },
      {
        property: 'og:url',
        content: 'https://achlyssolutions.netlify.app/solutions/training',
      },
    ],
  }),
  component: TrainingPage,
})

function TrainingPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 relative overflow-hidden w-full">
      <HeroSection />
      <TrainingAudiencesSection />
      <ToolsCoveredSection />
      <TrainingApproachSection />
      <DeliveryFormatsSection />
      <WhyAchlysSection />
      <TargetOrganizationsSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <SolutionHero
      title="Atlassian"
      highlightedTitle="Training"
      tagline="Practical Atlassian Training for Real-World Teams"
      description="Wired Brains delivers role-based Atlassian training programs designed for administrators, developers, agents and end users."
      secondaryDescription="Our training focuses on real-world usage, platform best practices and long-term adoption, ensuring teams don't just learn Atlassian tools-but use them effectively. We combine platform expertise with hands-on experience to help teams build confidence and capability across the Atlassian ecosystem."
      image="/training.jpg"
    />
  )
}

function TrainingAudiencesSection() {
  const audiences: FeatureItem[] = [
    {
      title: 'Administrators',
      description:
        'Training for Jira and Confluence administrators focused on configuration, workflows, permissions, automation, governance and platform maintenance.',
      icon: Settings,
    },
    {
      title: 'Developers',
      description:
        'Technical training for developers covering Jira APIs, Atlassian Forge, Custom UI, integrations, automation and app development best practices.',
      icon: Code,
    },
    {
      title: 'Agents',
      description:
        'Practical training for Jira Service Management agents on ticket handling, SLAs, queues, automations, collaboration and service excellence.',
      icon: Headphones,
    },
    {
      title: 'End Users',
      description:
        'User-friendly training to help teams navigate Jira, Confluence and service portals confidently, improving adoption and productivity.',
      icon: Users,
    },
  ]

  return (
    <FeatureGrid
      heading="Training Tailored to Every Role"
      subheading="Who Our Training Is For"
      features={audiences}
      columns={2}
    />
  )
}

function ToolsCoveredSection() {
  return (
    <ContentBlock
      heading="Atlassian Platforms Covered"
      subheading="Tools We Train On"
      content="Our training programs cover core Atlassian products. Training content is tailored to match your organization's setup, workflows and maturity level."
      items={[
        'Jira Software',
        'Jira Service Management',
        'Confluence',
        'Jira Align',
        'Rovo',
      ]}
    />
  )
}

function TrainingApproachSection() {
  const approaches: FeatureItem[] = [
    {
      title: 'Hands-On & Practical',
      description:
        'We focus on real use cases, live demonstrations and guided exercises-ensuring participants can apply what they learn immediately.',
      icon: BookOpen,
    },
    {
      title: 'Best Practices Aligned',
      description:
        'Training is aligned with Atlassian-recommended patterns and industry best practices, helping teams avoid common pitfalls and over-customization.',
      icon: Target,
    },
    {
      title: 'Customized to Your Environment',
      description:
        'Sessions are customized to your Jira projects, workflows and service processes-not generic examples.',
      icon: Layers,
    },
    {
      title: 'Adoption-Focused',
      description:
        'We emphasize usability, consistency and clarity so teams feel confident using Atlassian tools long after training ends.',
      icon: Heart,
    },
  ]

  return (
    <FeatureGrid
      heading="Learning That Drives Adoption"
      subheading="Our Training Approach"
      features={approaches}
      columns={2}
    />
  )
}

function DeliveryFormatsSection() {
  return (
    <ContentBlock
      heading="Flexible Training Options"
      subheading="Delivery Formats"
      items={[
        'Live virtual training sessions',
        'On-site workshops',
        'Role-based group sessions',
        'Administrator and advanced technical deep dives',
        'Post-training Q&A and knowledge transfer',
      ]}
    />
  )
}

function WhyAchlysSection() {
  return (
    <TwoColumnSection
      heading="Training Led by Atlassian Practitioners"
      subheading="Why Wired Brains for Training"
      content="We train teams the way Atlassian tools are actually used in production environments."
      items={[
        'Delivered by experienced Atlassian consultants and app developers',
        'Grounded in real implementations and Marketplace app development',
        'Focused on long-term platform sustainability',
        'Designed to increase adoption and reduce support dependency',
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
        'Teams onboarding Atlassian tools for the first time',
        'Organizations scaling Jira or JSM usage',
        'Enterprises standardizing Atlassian practices',
        'Teams adopting Jira Align or Rovo',
      ]}
      reversed
    />
  )
}

function CTASection() {
  return (
    <SolutionCTA
      heading="Empower Your Teams with Atlassian Training"
      content="Whether you are onboarding new users, upskilling administrators, or enabling advanced platform usage, Wired Brains delivers training that drives confidence and adoption."
    />
  )
}
