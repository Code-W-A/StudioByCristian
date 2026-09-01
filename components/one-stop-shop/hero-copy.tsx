"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { ossEase, ossRevealY } from "./motion"
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion"

export default function HeroCopy({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: ossRevealY }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: ossEase, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}
