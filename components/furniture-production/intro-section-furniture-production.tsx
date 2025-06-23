import Image from "next/image"
import AnimatedElement from "@/components/animated-element"

export default function IntroSectionFurnitureProduction() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2">
          <AnimatedElement animationType="fadeInLeft">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">Our Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Furniture Production              </h2>
              <p className="text-gray-700 leading-relaxed">
              Our master carpenters undertake projects accommodating requests ranging from the most common to the most modern and extravagant. We are very focused on planning the projects and the details, thus we can guarantee a high quality standard for all our customers, whether they are private, corporate or architects.              </p>
            </AnimatedElement>
          </div>
          <div className="hidden lg:block">
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
              <div className="mx-auto lg:mx-0 overflow-hidden rounded-md shadow-lg" style={{ width: 400, height: 300 }}>
                <Image
                  src="/furniture-production-page/www.studiobycristian.com-1750525148492/Furniture-Production-Right-Image-768x300.jpg.jpeg"
                  alt="Furniture detail"
                  width={400}
                  height={300}
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