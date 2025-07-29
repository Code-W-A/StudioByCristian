"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function HeroSectionDesign() {
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Smooth parallax scroll - same as home page
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section ref={heroRef} className="relative h-[calc(100vh-5rem)] min-h-[500px] flex flex-col overflow-hidden">
      {/* Background Image - exactly like home page */}
      <div className="absolute inset-0 z-0 bg-black">
        <motion.div
          style={{ y: imageY }}
          className="w-full h-full relative"
        >
          <Image
            src="/ravy-roy-new-pics/Lounge/Lounge _ 03.jpg"
            alt="Interior Design - Lounge"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/25" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col justify-center items-center h-full">
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Design</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We design out of love. We are living optimization enthusiasts and our mission is bringing our client's desires out to light in literally the best shapes possible.
          </p>
        </AnimatedElement>
      </div>
    </section>
  )
} 