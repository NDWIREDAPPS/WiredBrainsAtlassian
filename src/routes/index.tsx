import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/Home/HeroSection'
import { ExpertiseSection } from '@/components/Home/ExpertiseSection'
import { SolutionsSection } from '@/components/Home/SolutionsSection'
import { EnterpriseAgileSection } from '@/components/Home/EnterpriseAgileSection'
import { MarketplaceAppsSection } from '@/components/Home/MarketplaceAppsSection'
import { WhyAchlysSolutionsSection } from '@/components/Home/WhyAchlysSolutionsSection'
import { BlogsInsightsSection } from '@/components/Home/BlogsInsightsSection'
import { FinalCTASection } from '@/components/Home/FinalCTASection'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col gap-24 relative overflow-hidden w-full">
      <HeroSection />
      <ExpertiseSection />
      <SolutionsSection />
      <EnterpriseAgileSection />
      <MarketplaceAppsSection />
      <WhyAchlysSolutionsSection />
      <BlogsInsightsSection />
      <FinalCTASection />
    </div>
  )
}
