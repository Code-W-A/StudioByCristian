"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const capabilities = ["Design", "Renovation", "Furniture", "Delivery"]
const ease = [0.22, 1, 0.36, 1] as const

export default function OneStopShopCta() {
  const reduced = useReducedMotion()

  return (
    <section className="relative isolate h-[100svh] overflow-hidden bg-black text-white">
      <motion.div
        className="absolute inset-0 -z-30"
        initial={reduced ? false : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduced ? 0 : 1.6, ease }}
      >
        <Image
          src="/STUDIO BY CRISTIAN/private-penthouse/Private-Penthouse-Banner-scaled.jpg.jpeg"
          alt="Studio ByCristian private penthouse interior"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 -z-20 bg-black/28" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.88)_0%,rgba(0,0,0,.7)_38%,rgba(0,0,0,.28)_72%,rgba(0,0,0,.12)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,.2)_0%,rgba(0,0,0,.08)_38%,rgba(0,0,0,.78)_100%)]" />

      <div className="mx-auto flex h-full max-w-[1600px] items-center px-5 pb-5 pt-24 sm:px-8 sm:pb-8 lg:px-12 xl:px-20">
        <motion.div
          className="max-w-[70rem]"
          initial={reduced ? false : { opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: reduced ? 0 : 0.85, ease, delay: reduced ? 0 : 0.08 }}
        >
          <div className="flex items-center gap-5">
            <p className="text-[10px] uppercase tracking-[0.32em] text-white/62">One Stop Shop</p>
            <motion.span
              aria-hidden="true"
              className="h-px w-20 origin-left bg-white/45 sm:w-32"
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: reduced ? 0 : 0.9, ease, delay: reduced ? 0 : 0.12 }}
            />
          </div>

          <h2 className="mt-8 max-w-[62rem] text-[clamp(2.85rem,6.1vw,6.5rem)] leading-[0.92] tracking-[-0.05em]">
            One partner for design, renovation, furniture and delivery.
          </h2>

          <div className="mt-6 grid gap-5 border-t border-white/32 pt-5 sm:mt-8 sm:gap-8 sm:pt-6 lg:mt-[clamp(2rem,4vh,3.5rem)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-14 lg:pt-[clamp(1.5rem,3vh,2.5rem)]">
            <div>
              <p className="max-w-[41rem] text-[clamp(1rem,1.2vw,1.25rem)] leading-[1.55] text-white/72 sm:leading-[1.65]">
                From a single room upgrade to a complete turn-key interior, every part of your project can be coordinated through one studio.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[8px] uppercase tracking-[0.2em] text-white/48 sm:mt-5" aria-label="One Stop Shop services">
                {capabilities.map((capability, index) => (
                  <li key={capability} className="flex items-center gap-4">
                    {index > 0 && <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/40" />}
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link
                href="/one-stop-shop"
                className="group inline-flex min-h-14 items-center justify-between gap-8 bg-white px-6 py-4 text-[10px] uppercase tracking-[0.19em] text-black outline-none transition-colors duration-500 hover:bg-[#d8d3ca] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Explore the service
                <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
              <Link
                href="/one-stop-shop#book"
                className="group inline-flex min-h-14 items-center justify-between gap-7 border border-white/40 bg-black/15 px-6 py-4 text-[10px] uppercase tracking-[0.19em] text-white outline-none backdrop-blur-sm transition-colors duration-500 hover:border-white/75 hover:bg-black/30 focus-visible:ring-2 focus-visible:ring-white"
              >
                Book a consultation
                <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
