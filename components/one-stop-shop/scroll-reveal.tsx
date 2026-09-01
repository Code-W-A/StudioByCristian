"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { ossDuration, ossEase, ossRevealY } from "./motion"
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
}

export default function ScrollReveal({ children, className, delay = 0, amount = 0.2 }: ScrollRevealProps) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: ossRevealY }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduced ? 0 : ossDuration, ease: ossEase, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

type ScrollRevealGroupProps = {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  amount?: number
  as?: "div" | "h2" | "p"
}

export function ScrollRevealGroup({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.2,
  as = "div",
}: ScrollRevealGroupProps) {
  const reduced = usePrefersReducedMotion()
  const Component = as === "h2" ? motion.h2 : as === "p" ? motion.p : motion.div

  return (
    <Component
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduced ? 0 : stagger, delayChildren: reduced ? 0 : delay },
        },
      }}
    >
      {children}
    </Component>
  )
}

export function ScrollRevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "span"
}) {
  const Component = as === "span" ? motion.span : motion.div

  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y: ossRevealY },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: ossDuration, ease: ossEase },
        },
      }}
    >
      {children}
    </Component>
  )
}
