import type { Metadata } from "next"
import HeroSectionDesign from "@/components/design/hero-section-design"
import IntroSectionDesign from "@/components/design/intro-section-design"
import ProjectsGridSection from "@/components/design/projects-grid-section"

export const metadata: Metadata = {
  title: "Studio byCristian - Design Services",
  description: "Professional interior design services combining science and art. Explore our innovative design concepts and creative solutions for residential and commercial spaces.",
  keywords: "interior design, design services, residential design, commercial design, Studio byCristian",
  openGraph: {
    title: "Design Services - Studio byCristian",
    description: "Professional interior design services combining science and art. Explore our innovative design concepts and creative solutions.",
    type: "website",
  },
}

export default function DesignPage() {
  return (
    <div className="bg-white text-black">
      <HeroSectionDesign />
      <IntroSectionDesign />
      <ProjectsGridSection />
    </div>
  )
}
