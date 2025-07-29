import type { Metadata } from "next"
import HeroSectionTurnKeyManagement from "@/components/turn-key-management/hero-section-turn-key-management"
import IntroSectionTurnKeyManagement from "@/components/turn-key-management/intro-section-turn-key-management"
import ProjectsGridSectionTurnKeyManagement from "@/components/turn-key-management/projects-grid-section-turn-key-management"
import ContactSectionTurnKeyManagement from "@/components/turn-key-management/contact-section-turn-key-management"

export const metadata: Metadata = {
  title: "Studio byCristian - Interior Renovation & Turn-Key Management",
  description: "Complete interior renovation and turn-key management services. From concept to completion, we handle every aspect of your interior transformation project.",
  keywords: "interior renovation, turn-key management, renovation services, interior transformation, Studio byCristian",
  openGraph: {
    title: "Interior Renovation & Turn-Key Management - Studio byCristian",
    description: "Complete interior renovation and turn-key management services. From concept to completion, we handle every aspect of your project.",
    type: "website",
  },
}

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
