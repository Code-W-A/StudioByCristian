"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"

export default function ProductionDetailsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src="/suriname-apartments-residential-1-furniture/Suriname-Apartments-3-scaled.jpg.jpeg"
                  alt="Suriname Apartments - Production Details"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Geometric Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10"></div>
                <div className="absolute top-6 left-6 w-20 h-20 border-2 border-white/30 rotate-45"></div>
              </div>
            </AnimatedElement>
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <AnimatedElement animationType="fadeInUp">
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="w-16 h-px bg-black mb-4"></div>
                  <p className="text-sm font-light uppercase tracking-[0.2em] text-gray-600">
                    Production Challenge
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extralight text-black leading-tight">
                  Craftsmanship Excellence
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The challenge in this production process was to choose and deliver OAK Wood quality class AA and keep the wood fiber continuously on the doors. The Carrara Marble was carefully chosen, hence the sink is made out of Marble as well.
                  </p>
                  
                  <p>
                    We chose a light black vanish that was hand painted, therefore we have a discontinuous accent on some of the cupboards. Accessories are from BLUM Motion, fully electric.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
} 