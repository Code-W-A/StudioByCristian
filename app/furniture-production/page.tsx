"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import { motion, type Variants } from "framer-motion"
import ParallaxSection from "@/components/parallax-section"
import HeroSectionFurnitureProduction from "@/components/furniture-production/hero-section-furniture-production"
import IntroSectionFurnitureProduction from "@/components/furniture-production/intro-section-furniture-production"
import ProjectsGridSectionFurnitureProduction from "@/components/furniture-production/projects-grid-section-furniture-production"


export default function FurnitureProductionPage() {
  return (
    <div className="bg-white text-black">
      <HeroSectionFurnitureProduction />
      <IntroSectionFurnitureProduction />
      <ProjectsGridSectionFurnitureProduction />
    </div>
  )
}
