import type { Metadata } from "next"
import HeroSectionFurnitureProduction from "@/components/furniture-production/hero-section-furniture-production"
import IntroSectionFurnitureProduction from "@/components/furniture-production/intro-section-furniture-production"
import ProjectsGridSectionFurnitureProduction from "@/components/furniture-production/projects-grid-section-furniture-production"
import { getPageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = getPageMetadata("/furniture-production")

export default function FurnitureProductionPage() {
  return (
    <div className="bg-white text-black">
      <HeroSectionFurnitureProduction />
      <IntroSectionFurnitureProduction />
      <ProjectsGridSectionFurnitureProduction />
    </div>
  )
}
