"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { ossDuration, ossEase } from "./motion"
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion"

type ProcessStep = [string, string]

const eyebrow = "text-[10px] uppercase tracking-[0.32em]"
const container = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"
const sectionHeading = "text-[clamp(2.6rem,10vw,3rem)] uppercase leading-[0.92] tracking-[-0.045em] md:text-[clamp(3rem,5.1vw,4.5rem)] lg:text-[clamp(3.25rem,4.6vw,4.5rem)]"
const bodyCopy = "text-[clamp(1.0625rem,1.15vw,1.1875rem)] leading-[1.75]"

function TimelineStep({ step: [title, description], index }: { step: ProcessStep; index: number }) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.li
      className="group relative pb-14 pl-[4.5rem] last:pb-0 sm:pb-16 sm:pl-[5.5rem] lg:pb-20"
      initial={reduced ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.38 }}
      transition={{ duration: reduced ? 0 : ossDuration, ease: ossEase }}
    >
      <motion.span
        className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-black/35 bg-[#151515] text-[9px] tracking-[0.16em] text-white shadow-[0_0_0_7px_#f4f1eb] sm:h-14 sm:w-14"
        initial={reduced ? false : { scale: 0.72, backgroundColor: "#f4f1eb", color: "rgba(21,21,21,.45)" }}
        whileInView={{ scale: 1, backgroundColor: "#151515", color: "#ffffff" }}
        viewport={{ once: true, amount: 0.75 }}
        transition={{ duration: reduced ? 0 : 0.55, ease: ossEase }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      <article className="border-t border-black/22 pt-7 transition-transform duration-700 ease-out group-hover:translate-x-2 sm:pt-8 motion-reduce:transition-none">
        <div className="grid gap-5 xl:grid-cols-[minmax(13rem,0.82fr)_minmax(18rem,1.18fr)] xl:gap-10">
          <h3 className="max-w-[24rem] text-[clamp(1.8rem,2.7vw,3rem)] uppercase leading-[0.98] tracking-[-0.03em]">
            {title}
          </h3>
          <p className={`max-w-[36rem] text-black/62 ${bodyCopy}`}>{description}</p>
        </div>
      </article>
    </motion.li>
  )
}

export default function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const timelineRef = useRef<HTMLOListElement>(null)
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 78%", "end 42%"],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 105, damping: 24, mass: 0.35 })
  const scaleY = useTransform(progress, [0, 1], [0, 1])

  return (
    <section className="bg-[#f4f1eb] py-[clamp(6.5rem,10vw,10rem)]">
      <div className={`${container} grid gap-16 lg:grid-cols-[minmax(21rem,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16 xl:gap-24`}>
        <motion.header
          className="lg:sticky lg:top-44"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduced ? 0 : ossDuration, ease: ossEase }}
        >
          <p className={`${eyebrow} text-black/45`}>How It Works</p>
          <h2 className={`mt-6 max-w-[34rem] ${sectionHeading}`}>
            <span className="lg:block">A clear</span>{" "}
            <span className="lg:block">route</span>{" "}
            <span className="lg:block">from idea</span>{" "}
            <span className="lg:block">to handover.</span>
          </h2>
          <div aria-hidden="true" className="mt-10 flex items-center gap-4">
            <span className="h-2 w-2 rounded-full bg-black" />
            <span className="h-px w-24 bg-black/30" />
          </div>
        </motion.header>

        <div className="relative">
          <div aria-hidden="true" className="absolute bottom-6 left-[23px] top-6 w-px bg-black/16 sm:left-[27px]">
            <motion.div
              className="absolute inset-0 origin-top bg-[#151515]"
              style={{ scaleY: reduced ? 1 : scaleY }}
            />
          </div>
          <ol ref={timelineRef} className="relative">
            {steps.map((step, index) => (
              <TimelineStep key={step[0]} step={step} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
