"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { ossEase } from "./motion"
import { useIsLg } from "./use-is-lg"
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion"

type ImageRevealProps = {
  src: string
  alt: string
  sizes: string
  className?: string
  parallax?: boolean
}

export default function ImageReveal({ src, alt, sizes, className, parallax = false }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const isLg = useIsLg()
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const enableParallax = Boolean(parallax && isLg && !reduced)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], enableParallax ? ["-10%", "10%"] : ["0%", "0%"])
  const open = Boolean(reduced || inView)

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ y: open ? "0%" : "100%" }}
        transition={{ duration: reduced ? 0 : 0.9, ease: ossEase }}
      >
        <motion.div
          className="absolute -top-[10%] left-0 h-[120%] w-full origin-center"
          style={{ y }}
          whileHover={reduced ? undefined : { scale: 1.02 }}
          transition={{ duration: 0.7, ease: ossEase }}
        >
          <Image quality={95} src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  )
}
