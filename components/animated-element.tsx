"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer" // framer-motion also has useInView, but this is a common alternative

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  animationType?: "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn"
  delay?: number
  duration?: number
  once?: boolean // Whether the animation should only run once
  amount?: number // How much of the element needs to be in view to trigger (0 to 1)
  staggerChildren?: number // If this element has children, stagger their animation
}

const animationVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function AnimatedElement({
  children,
  className,
  animationType = "fadeInUp",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.2, // Trigger when 20% of the element is in view
  staggerChildren,
}: AnimatedElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: amount,
  })

  const selectedVariant = animationVariants[animationType] || animationVariants.fadeInUp

  const variantsWithDelay: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        duration,
        delay,
        ...(staggerChildren && { staggerChildren }),
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variantsWithDelay}
      className={className}
    >
      {children}
    </motion.div>
  )
}
