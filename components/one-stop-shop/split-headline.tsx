"use client"

import { motion } from "framer-motion"
import { ossEase, ossRevealY } from "./motion"
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion"

const lines = ["One partner.", "Your entire space."]

export default function SplitHeadline({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion()

  return (
    <h1 className={className}>
      <span className="sr-only">One partner. Your entire space.</span>
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden" aria-hidden="true">
          <motion.span
            className="block"
            initial={reduced ? false : { y: ossRevealY, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: ossEase, delay: reduced ? 0 : index * 0.28 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}
