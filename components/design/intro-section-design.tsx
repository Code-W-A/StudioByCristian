import Image from "next/image"
import AnimatedElement from "@/components/animated-element"

export default function IntroSectionDesign() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <AnimatedElement animationType="fadeInLeft">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">DESIGN</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
                We have this magical opportunity to mold our surroundings into spaces and objects that enrich human experience, contributing to our thriving and wellness.
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Together, let's tap into the possibilities provided by how our environment is continually interacting with our bodies and perception. When the Design tool is put to good use, the surroundings are sending signals in the form of visually satisfying compositions and functional spaces that invite us to relax, be productive or simply explore.
              </p>
            </AnimatedElement>
          </div>
          <div className="hidden lg:block">
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
              <div className="mx-auto lg:mx-0 overflow-hidden rounded-md shadow-lg" style={{ width: 440, height: 252 }}>
                <Image
                  src="/design-page/By-Cristian-2-768x440.jpg.jpeg"
                  alt="Studio by Cristian Brand Detail"
                  width={440}
                  height={252}
                  className="object-contain w-full h-full bg-white"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
} 