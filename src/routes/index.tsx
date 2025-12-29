import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '@/components/Home/HeroSection'
import { SolutionsSection } from '@/components/Home/SolutionsSection'
import { MarketplaceAppsSection } from '@/components/Home/MarketplaceAppsSection'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col gap-24 relative overflow-hidden w-full">
      <HeroSection />
      <SolutionsSection />
      <MarketplaceAppsSection />
    </div>
  )
}
