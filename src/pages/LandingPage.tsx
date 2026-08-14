import { BenefitsSection } from '../components/sections/existing/BenefitsSection'
import { CapabilitiesSection } from '../components/sections/existing/CapabilitiesSection'
import { FaqSection } from '../components/sections/existing/FaqSection'
import { FinalCtaSection } from '../components/sections/existing/FinalCtaSection'
import { HeroSection } from '../components/sections/existing/HeroSection'
import { PlatformSection } from '../components/sections/existing/PlatformSection'
import { RoadmapSection } from '../components/sections/existing/RoadmapSection'
import { SecuritySection } from '../components/sections/existing/SecuritySection'
import { DesignToMaterialSection } from '../components/sections/new'

export function LandingPage() {
  return (
    <>
      <HeroSection />
      <PlatformSection />
      <DesignToMaterialSection />
      <CapabilitiesSection />
      <BenefitsSection />
      <SecuritySection />
      <RoadmapSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  )
}
