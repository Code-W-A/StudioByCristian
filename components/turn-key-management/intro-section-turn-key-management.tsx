import Image from "next/image"
import AnimatedElement from "@/components/animated-element"

export default function IntroSectionTurnKeyManagement() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2">
            <AnimatedElement animationType="fadeInLeft">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">Turn Key Management</h2>
              <p className="text-gray-700 leading-relaxed">
                Pouring the visual images and solutions of our minds into the mold of reality is the final, most challenging and also best rewarding stage of design.
              </p>
            </AnimatedElement>
          </div>
          <div className="hidden lg:block">
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
              <div className="mx-auto lg:mx-0 overflow-hidden rounded-md shadow-lg" style={{ width: 440, height: 172 }}>
                <Image
                  src="/turn-key-management-page/Turn-Key-Header-Right-Image-440x172.jpg.jpeg"
                  alt="Turn Key Management detail"
                  width={440}
                  height={172}
                  className="object-cover w-full h-full bg-white"
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
} 