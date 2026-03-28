"use client"

import AnimatedElement from "@/components/animated-element"

export default function ProjectInfoSection() {
  const projectDetails = [
    { label: "Location", value: "The Hague | The Netherlands" },
    { label: "Status", value: "Finished" },
    { label: "Service", value: "Interior Architectura & Furniture Production" },
    { label: "Sectors", value: "Residential" },
    { label: "Area", value: "680m²" },
    { label: "Client", value: "Philippe Citroen | Lemons BV" }
  ]

  const materials = [
    "OAK Veneer MDF with OAK Vanish",
    "OAK Professional MDF with RAL paint code",
    "Masive OAK Wood",
    "Carrara Marble",
    "BLUM accessories",
    "HAFELE accessories",
    "NEF Appliances",
    "Quooker"
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Project Details */}
          <div className="space-y-8">
            <AnimatedElement animationType="fadeInUp">
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="w-16 h-px bg-black mb-4"></div>
                  <p className="text-sm font-light uppercase tracking-[0.2em] text-gray-600">
                    Project Information
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extralight text-black leading-tight">
                  Project Details
                </h2>
                
                <div className="space-y-4">
                  {projectDetails.map((detail, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between border-b border-gray-100 pb-3">
                      <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                        {detail.label}
                      </span>
                      <span className="text-gray-900 font-light">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Materials */}
          <div className="space-y-8">
            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="w-16 h-px bg-black mb-4"></div>
                  <p className="text-sm font-light uppercase tracking-[0.2em] text-gray-600">
                    Main Used Materials
                  </p>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extralight text-black leading-tight">
                  Materials & Finishes
                </h2>
                
                <div className="grid grid-cols-1 gap-3">
                  {materials.map((material, index) => (
                    <AnimatedElement key={index} animationType="fadeInUp" delay={0.1 * index}>
                      <div className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className="w-2 h-2 bg-black rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-light">{material}</span>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
} 