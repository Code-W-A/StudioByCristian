"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HeroSectionSuriname() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/suriname-apartments-residential-1-furniture/Suriname-Apartments-1.jpg.jpeg"
          alt="Suriname Apartments Residential 1 - Luxurious Scandinavian Kitchen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-white/30 rotate-12" />
        <div className="absolute top-1/3 right-20 w-1 h-40 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="mb-8 text-white/80 hover:text-white hover:bg-white/10 border border-white/20"
          >
            <Link href="/furniture-production" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Furniture Production
            </Link>
          </Button>
        </AnimatedElement>

        <AnimatedElement animationType="fadeInUp" delay={0.4}>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-light uppercase tracking-[0.2em] text-white/70 mb-4">
              Furniture Production
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight">
              Suriname Apartments
              <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 text-white/90">
                Residential 1
              </span>
            </h1>
          </div>
        </AnimatedElement>

        <AnimatedElement animationType="fadeInUp" delay={0.6}>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
            <div className="w-2 h-2 bg-white/60 rounded-full mx-auto mt-2 animate-pulse" />
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
} 