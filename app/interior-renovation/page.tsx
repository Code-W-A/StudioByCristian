"use client"

import HeroSectionTurnKeyManagement from "@/components/turn-key-management/hero-section-turn-key-management"
import IntroSectionTurnKeyManagement from "@/components/turn-key-management/intro-section-turn-key-management"
import ProjectsGridSectionTurnKeyManagement from "@/components/turn-key-management/projects-grid-section-turn-key-management"
import ContactSectionTurnKeyManagement from "@/components/turn-key-management/contact-section-turn-key-management"

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
