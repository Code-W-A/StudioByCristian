"use client"

import AnimatedElement from "@/components/animated-element"
import Image from "next/image"

export default function HeroSectionTurnKeyManagement() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/turn-key-management-page/Turn-Key-Management-Header-scaled.jpg.jpeg"
          alt="Interior Renovation Hero"
          fill={true}
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedElement animationType="fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Interior Renovation</h1>
          </AnimatedElement>
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
              The complete service of our "shaping ideas" philosophy. We create your space in our minds and we tend to its implementation into reality.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
} 