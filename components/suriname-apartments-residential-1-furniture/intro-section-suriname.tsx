"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"

export default function IntroSectionSuriname() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <AnimatedElement animationType="fadeInUp">
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="w-16 h-px bg-black mb-4"></div>
                  <p className="text-sm font-light uppercase tracking-[0.2em] text-gray-600">
                    Project Description
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extralight text-black leading-tight">
                  Luxurious Scandinavian Design
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The two apartments are the definition of luxurious Scandinavian design and character due to their simplicity combined with a refined, high end quality. Though similar in appearance, they differ through colour accents and details.
                  </p>
                  
                  <p>
                    The apartments' highlights are the ample kitchen areas that feature large kitchen islands realised by a delicate and elegant combination of marble and wood – accents that are to be found throughout the entire kitchen space.
                  </p>
                  
                  <p>
                    The same simplicity characterises the dressing rooms, working spaces, storage racks and TV furniture. The Scandinavian design is also visible in all the other quality details distinguishing the apartments: the unique wooden doors with black doorknobs are custom made by our carpenters to match the floor – to – ceiling glass doors and very high ceilings, while the wooden walls are designed to act as both doors to secret rooms and true pieces of artistry.
                  </p>
                  
                  <p>
                    Together, the clean, minimal spaces are a luxurious, yet comfortable oasis that you can call home.
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Image */}
          <div className="relative">
            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/suriname-apartments-residential-1-furniture/Suriname-Apartments-2-1-scaled.jpg.jpeg"
                  alt="Suriname Apartments - Interior Detail"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Geometric Overlay */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-white/40 rotate-45"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/30 rotate-12"></div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
} 