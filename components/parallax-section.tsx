"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import type React from "react"
import { useRef } from "react"

interface ParallaxSectionProps {
  imageUrl: string
  imageAlt: string
  children?: React.ReactNode // For overlay content
  minHeight?: string // e.g., '50vh', '400px'
  strength?: number // Controls parallax intensity, e.g., 0.1 (subtle) to 0.5 (stronger)
  overlayClassName?: string // e.g., 'bg-black/30' for a dark scrim
  className?: string // Additional classes for the section
  id?: string
  objectPosition?: string // e.g., 'center', 'top', 'bottom', '50% 30%'
}

export default function ParallaxSection({
  imageUrl,
  imageAlt,
  children,
  minHeight = "60vh",
  strength = 0.2, // Default to a subtle effect
  overlayClassName,
  className = "",
  id,
  objectPosition = "center",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  
  // Check if user prefers reduced motion or is on mobile
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  const isMobile = typeof window !== 'undefined' && 
    (window.innerWidth <= 768 || 'ontouchstart' in window)
  
  // Reduce or disable parallax on mobile for better performance
  const effectiveStrength = (prefersReducedMotion || isMobile) ? 0 : strength
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Animate when section is from start of viewport to end
  })

  // Adjust the output range based on strength.
  // A positive strength means image moves up as user scrolls down (appears slower).
  // A negative strength means image moves down as user scrolls down (appears faster).
  const yRangeStart = `${-effectiveStrength * 100}%`
  const yRangeEnd = `${effectiveStrength * 100}%`
  const y = useTransform(scrollYProgress, [0, 1], [yRangeStart, yRangeEnd])

  return (
    <section ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`} style={{ minHeight }}>
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[140%] top-[-20%]">
        {" "}
        {/* Increased height and negative top to ensure coverage during parallax */}
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="pointer-events-none object-cover"
          style={{ objectPosition }}
          priority // Consider priority for LCP images like heroes
          quality={95}
        />
      </motion.div>
      {overlayClassName && <div className={`absolute inset-0 z-10 ${overlayClassName}`} />}
      {children && (
        <div
          className="relative z-20 flex h-full flex-col items-center justify-center p-4 text-center" // Default text-center for overlay
          style={{ minHeight }}
        >
          {children}
        </div>
      )}
    </section>
  )
}
