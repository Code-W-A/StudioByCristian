"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { useIsLg } from "./use-is-lg"
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion"

export default function HeroParallax({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const isLg = useIsLg()
  const enable = Boolean(isLg && !reduced)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], enable ? ["0%", "12%"] : ["0%", "0%"])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute -top-[10%] left-0 h-[120%] w-full" style={{ y }}>
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover object-center" />
      </motion.div>
    </div>
  )
}
