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

const projects = [
  {
    name: "Mauritskade Apartments",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Mauritskade-Appartments-Category-1-768x511.jpg.jpeg",
    link: "/mauritskade-apartments",
  },
  {
    name: "Suriname Apartments Residential 1",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Suriname-Apartments-Residential-1.jpg.jpeg",
    link: "/suriname-apartments-residential-1-furniture",
  },
  {
    name: "Suriname Apartments Residential 2",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Suriname-Apartments-Residential-2.jpg.jpeg",
    link: "/suriname-apartments-residential-2-furniture",
  },
  {
    name: "Susan and Cyril Apartment",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Susan-and-Cyril-Apartment-Category-768x511.jpg.jpeg",
    link: "/susan-and-cyril-apartment",
  },
  {
    name: "DERODELOPER Luxury Store",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/DERODELOPER-Luxury-Store-Category-768x512.jpg.jpeg",
    link: "/derodeloper-luxury-store-furniture",
  },
  {
    name: "Private Home for Kristian & Claudia",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Furniture-Production-Category-Image-scaled.jpg.jpeg",
    link: "/private-home-for-kristian-and-claudia",
  },
  {
    name: "Walden BizStay Kitchens",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Walden-BizStay-Kitchens-Category-768x512.jpg.jpeg",
    link: "/walden-bizstay-kitchens",
  },
  {
    name: "Private Home for Dennis & Mabel",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Private-Home-for-Dennis-Mabel-Category-1-768x511.jpg.jpeg",
    link: "/private-home-for-dennis-mabel",
  },
  {
    name: "Amsterdam Amsteldijk Double Apartments",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Amsteldijk-Duplex-Appartments-Category-768x511.jpg.jpeg",
    link: "/amsterdam-amsteldijk-double-apartments",
  },
  {
    name: "Private House Wassenaar",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Private-House-Wassenaar-Category-1-768x512.jpg.jpeg",
    link: "/private-house-wassenaar",
  },
  {
    name: "Chi Cafe",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Chi-Cafe-Category-768x513.jpg.jpeg",
    link: "/chi-cafe",
  },
  {
    name: "OBA Amsterdam Library",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/OBA-Amsterdam-Library-Category-1-768x511.jpg.jpeg",
    link: "/oba-amsterdam-library",
  },
  {
    name: "Shapes",
    image: "/furniture-production-page/www.studiobycristian.com-1750525148492/Shapes-Category-2-768x511.jpg.jpeg",
    link: "/shapes",
  },
]

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
