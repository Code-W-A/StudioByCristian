"use client"

import HeroSectionDesign from "@/components/design/hero-section-design"
import IntroSectionDesign from "@/components/design/intro-section-design"
import ProjectsGridSection from "@/components/design/projects-grid-section"

export default function DesignPage() {
  return (
    <div className="bg-white text-black">
      <HeroSectionDesign />
      <IntroSectionDesign />
      <ProjectsGridSection />
    </div>
  )
}
