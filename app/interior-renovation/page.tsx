import type { Metadata } from "next"
import HeroSectionTurnKeyManagement from "@/components/turn-key-management/hero-section-turn-key-management"
import IntroSectionTurnKeyManagement from "@/components/turn-key-management/intro-section-turn-key-management"
import ProjectsGridSectionTurnKeyManagement from "@/components/turn-key-management/projects-grid-section-turn-key-management"
import ContactSectionTurnKeyManagement from "@/components/turn-key-management/contact-section-turn-key-management"
import { getPageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = getPageMetadata("/interior-renovation")

export default function TurnKeyManagementPage() {
  return (
    <div className="bg-white text-black">
      <HeroSectionTurnKeyManagement />
      <IntroSectionTurnKeyManagement />
      <ProjectsGridSectionTurnKeyManagement />
      <ContactSectionTurnKeyManagement />
    </div>
  )
}
