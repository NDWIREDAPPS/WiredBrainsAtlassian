import { createFileRoute } from '@tanstack/react-router'
import { AboutHero } from '@/components/AboutUs/AboutHero'
import { ContactSection } from '@/components/AboutUs/ContactSection'
import { AtlassianApproach } from '@/components/AboutUs/AtlassianApproach'
import { WhatMakesUsDifferent } from '@/components/AboutUs/WhatMakesUsDifferent'
import { MarketplaceExpertise } from '@/components/AboutUs/MarketplaceExpertise'
import { EnterpriseReady } from '@/components/AboutUs/EnterpriseReady'
import { OurPhilosophy } from '@/components/AboutUs/OurPhilosophy'
import { WhyChooseUs } from '@/components/AboutUs/WhyChooseUs'
import { LookingAhead } from '@/components/AboutUs/LookingAhead'
import { AboutFinalCTA } from '@/components/AboutUs/AboutFinalCTA'

export const Route = createFileRoute('/about-us/')({
  head: () => ({
    meta: [
      { title: 'About Us | Achlys Solutions' },
      {
        name: 'description',
        content:
          'Learn about Achlys Solutions - an Atlassian consulting partner specializing in enterprise solutions, cloud migration and Marketplace app development.',
      },
      { property: 'og:title', content: 'About Us | Achlys Solutions' },
      {
        property: 'og:description',
        content:
          'Atlassian consulting partner specializing in enterprise solutions, cloud migration and Marketplace app development.',
      },
      {
        property: 'og:url',
        content: 'https://achlyssolutions.netlify.app/about-us/',
      },
    ],
  }),
  component: AboutUsPage,
})

function AboutUsPage() {
  return (
    <div className="flex flex-col gap-24 pb-24 relative overflow-hidden w-full">
      <AboutHero />
      <ContactSection />
      <AtlassianApproach />
      <WhatMakesUsDifferent />
      <MarketplaceExpertise />
      <EnterpriseReady />
      <OurPhilosophy />
      <WhyChooseUs />
      <LookingAhead />
      <AboutFinalCTA />
    </div>
  )
}
