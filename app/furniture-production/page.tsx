import type { Metadata } from "next"
import HeroSectionFurnitureProduction from "@/components/furniture-production/hero-section-furniture-production"
import IntroSectionFurnitureProduction from "@/components/furniture-production/intro-section-furniture-production"
import ProjectsGridSectionFurnitureProduction from "@/components/furniture-production/projects-grid-section-furniture-production"

export const metadata: Metadata = {
  title: "Studio byCristian - Furniture Production",
  description: "Custom furniture production and manufacturing services. High-quality craftsmanship and innovative design solutions for residential and commercial projects.",
  keywords: "furniture production, custom furniture, furniture manufacturing, bespoke furniture, Studio byCristian",
  openGraph: {
    title: "Furniture Production - Studio byCristian",
    description: "Custom furniture production and manufacturing services. High-quality craftsmanship and innovative design solutions.",
    type: "website",
  },
}

export default function FurnitureProductionPage() {
  return (
    <div className="bg-white text-black">
      <HeroSectionFurnitureProduction />
      <IntroSectionFurnitureProduction />
      <ProjectsGridSectionFurnitureProduction />
    </div>
  )
}
