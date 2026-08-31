"use client"

import Image from "next/image"
import { useState } from "react"
import { Plus } from "lucide-react"

export type OneStopShopService = {
  title: string
  description: string
  image: string
  imageAlt: string
  objectPosition?: string
}

export default function ServiceNavigator({ services }: { services: OneStopShopService[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="mt-12 lg:mt-16">
      <div className="hidden min-h-[620px] grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] gap-14 lg:grid xl:gap-20">
        <div className="border-t border-black/20">
          {services.map((service, index) => {
            const active = activeIndex === index
            return (
              <button
                key={service.title}
                type="button"
                aria-pressed={active}
                aria-controls="service-visual"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className="group flex w-full items-center gap-5 border-b border-black/20 py-6 text-left outline-none focus-visible:bg-black focus-visible:px-4 focus-visible:text-white"
              >
                <span className={`text-[11px] tracking-[0.2em] transition-colors ${active ? "text-black" : "text-black/35 group-focus-visible:text-white/60"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`text-[clamp(1.45rem,2.1vw,2.25rem)] leading-none transition-colors ${active ? "text-black" : "text-black/40 group-hover:text-black/70 group-focus-visible:text-white"}`}>
                  {service.title}
                </span>
              </button>
            )
          })}
        </div>

        <div id="service-visual" className="relative min-h-[620px] overflow-hidden bg-[#d8d3c9]" aria-live="polite">
          <Image
            key={services[activeIndex].image}
            src={services[activeIndex].image}
            alt={services[activeIndex].imageAlt}
            fill
            loading="eager"
            sizes="(min-width: 1280px) 48vw, 52vw"
            className="object-cover transition-transform duration-700 motion-reduce:transition-none"
            style={{ objectPosition: services[activeIndex].objectPosition ?? "center" }}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-8 pb-9 pt-28 text-white xl:px-10 xl:pb-10">
            <p className="max-w-xl text-[1.0625rem] leading-7 text-white/80">{services[activeIndex].description}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-black/20 lg:hidden">
        {services.map((service, index) => {
          const active = activeIndex === index
          const panelId = `mobile-service-${index}`
          return (
            <div key={service.title} className="border-b border-black/20">
              <button
                type="button"
                aria-expanded={active}
                aria-controls={panelId}
                onClick={() => setActiveIndex(index)}
                className="flex w-full items-center gap-4 py-5 text-left outline-none focus-visible:bg-black focus-visible:px-3 focus-visible:text-white"
              >
                <span className="text-[10px] tracking-[0.2em] opacity-45">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-xl leading-tight sm:text-2xl">{service.title}</span>
                <Plus size={18} aria-hidden="true" className={`shrink-0 transition-transform motion-reduce:transition-none ${active ? "rotate-45" : ""}`} />
              </button>
              <div id={panelId} hidden={!active}>
                {active && <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d3c9]">
                  <Image src={service.image} alt={service.imageAlt} fill sizes="100vw" className="object-cover" style={{ objectPosition: service.objectPosition ?? "center" }} />
                </div>}
                <p className="max-w-2xl py-6 text-[1.0625rem] leading-7 text-black/65">{service.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
