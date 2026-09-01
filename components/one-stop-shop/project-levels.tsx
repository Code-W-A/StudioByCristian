"use client"

import { motion } from "framer-motion"
import { ossDuration, ossEase } from "./motion"
import { usePrefersReducedMotion } from "./use-prefers-reduced-motion"

type ProjectLevel = [string, string, string]

const eyebrow = "text-[10px] uppercase tracking-[0.32em]"
const container = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"
const sectionHeading = "text-[clamp(2.6rem,10vw,3rem)] uppercase leading-[0.92] tracking-[-0.045em] md:text-[clamp(3rem,5.1vw,4.5rem)] lg:text-[clamp(3.25rem,4.6vw,4.5rem)]"
const bodyCopy = "text-[clamp(1.0625rem,1.15vw,1.1875rem)] leading-[1.75]"

function LevelCard({ level: [title, subtitle, description], index }: { level: ProjectLevel; index: number }) {
  const reduced = usePrefersReducedMotion()
  const featured = index === 2

  return (
    <motion.article
      className={`group relative flex min-h-[23rem] flex-col overflow-hidden border border-black/18 p-7 transition-[transform,background-color] duration-700 ease-out hover:-translate-y-2 sm:min-h-[25rem] sm:p-9 lg:min-h-[32rem] xl:p-11 motion-reduce:transition-none ${
        featured ? "bg-[#151515] text-white" : "bg-[#e5e0d7] text-[#151515] hover:bg-[#ebe7df]"
      }`}
      initial={reduced ? false : { opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduced ? 0 : ossDuration, ease: ossEase, delay: reduced ? 0 : index * 0.11 }}
    >
      <div className="flex items-center justify-between gap-6">
        <span className={`text-[10px] tracking-[0.24em] ${featured ? "text-white/48" : "text-black/42"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((segment) => (
            <span
              key={segment}
              className={`h-px w-8 transition-colors duration-500 ${
                segment <= index
                  ? featured ? "bg-white/80" : "bg-black/70"
                  : featured ? "bg-white/20" : "bg-black/18"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto pt-14 lg:pt-20">
        <h3 className="max-w-full text-[clamp(2.65rem,3.3vw,4rem)] uppercase leading-[0.9] tracking-[-0.045em]">{title}</h3>
        <p className={`mt-7 text-[10px] uppercase leading-[1.5] tracking-[0.2em] ${featured ? "text-white/68" : "text-black/58"}`}>
          {subtitle}
        </p>
        <div className={`my-7 h-px origin-left transition-transform duration-700 group-hover:scale-x-90 ${featured ? "bg-white/24" : "bg-black/22"}`} />
        <p className={`text-[1.0625rem] leading-[1.7] ${featured ? "text-white/64" : "text-black/62"}`}>{description}</p>
      </div>
    </motion.article>
  )
}

export default function ProjectLevels({ levels, suitableFor }: { levels: ProjectLevel[]; suitableFor: string[] }) {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="overflow-hidden bg-[#d8d3ca]">
      <div className={`${container} py-[clamp(6.5rem,10vw,10rem)]`}>
        <div className="grid gap-9 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end lg:gap-20">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduced ? 0 : ossDuration, ease: ossEase }}
          >
            <p className={`${eyebrow} text-black/45`}>Built Around Your Project</p>
            <h2 className={`mt-6 max-w-[38rem] ${sectionHeading}`}>Built around your project.</h2>
          </motion.div>
          <motion.p
            className={`max-w-[43rem] text-black/64 ${bodyCopy}`}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: reduced ? 0 : ossDuration, ease: ossEase, delay: reduced ? 0 : 0.1 }}
          >
            The One-Stop Shop is not a fixed renovation package. It is a flexible service model designed around the scale and complexity of your project.
          </motion.p>
        </div>

        <motion.div
          aria-hidden="true"
          className="mt-14 h-px origin-left bg-black/35 lg:mt-20"
          initial={reduced ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: reduced ? 0 : 1.1, ease: ossEase }}
        />

        <div className="mt-5 grid gap-4 lg:grid-cols-3 lg:gap-5">
          {levels.map((level, index) => (
            <LevelCard key={level[0]} level={level} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-14 border-t border-black/25 pt-8 lg:mt-20"
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: reduced ? 0 : ossDuration, ease: ossEase }}
        >
          <p className={`${eyebrow} text-black/45`}>Suitable for</p>
          <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-3">
            {suitableFor.map((item) => (
              <li key={item} className="border border-black/20 px-4 py-2.5 text-[10px] uppercase tracking-[0.13em] text-black/62">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
