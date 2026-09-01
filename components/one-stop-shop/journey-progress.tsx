"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion"

const stages = [
  { id: "oss-design", label: "Design" },
  { id: "oss-renovate", label: "Renovate" },
  { id: "oss-furnish", label: "Furnish" },
  { id: "oss-deliver", label: "Deliver" },
] as const

export default function JourneyProgress() {
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const update = () => {
      const marker = 160
      let current = 0
      for (const [index, stage] of stages.entries()) {
        const element = document.getElementById(stage.id)
        if (!element) continue
        if (element.getBoundingClientRect().top <= marker) current = index
      }
      setActive(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed top-20 z-40 w-full border-b border-black/10 bg-[#f4f1eb]/88 backdrop-blur-sm">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="relative h-px bg-black/12">
          <motion.div
            className="absolute inset-y-0 left-0 w-full origin-left bg-[#151515]"
            style={{ scaleX: reduced ? 1 : scaleX }}
          />
        </div>
        <div className="flex items-center justify-between py-2.5">
          {stages.map((stage, index) => (
            <span
              key={stage.id}
              className={`text-[8px] uppercase tracking-[0.16em] transition-opacity duration-500 sm:text-[10px] sm:tracking-[0.3em] ${
                index === active ? "text-[#151515]" : "text-[#151515]/38"
              }`}
            >
              {stage.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
