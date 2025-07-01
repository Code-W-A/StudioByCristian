import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ParallaxSection from "@/components/parallax-section"
import AnimatedElement from "@/components/animated-element"

export default function HubModularOfficePage() {
  const projectDetails = {
    location: "California",
    type: "Office Design, Interior Concept",
    sectors: "Commercial, Workplace",
    status: "Concept",
  }

  const descriptionText =
    "Explicitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest new new new. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design."

  const galleryImages = [
    { src: "/placeholder.svg?width=800&height=600", alt: "HUB Modular Office Overview" },
    { src: "/placeholder.svg?width=800&height=600", alt: "HUB Modular Office Workstations" },
    { src: "/placeholder.svg?width=800&height=600", alt: "HUB Modular Office Meeting Pods" },
    { src: "/placeholder.svg?width=800&height=600", alt: "HUB Modular Office Collaborative Space" },
    { src: "/placeholder.svg?width=800&height=600", alt: "HUB Modular Office Lounge Area" },
    { src: "/placeholder.svg?width=800&height=600", alt: "Bright Office Interior with Plants HUB" },
  ]

  return (
    <div className="bg-white text-neutral-800">
      <ParallaxSection bgImage="/placeholder.svg?width=1200&height=800" className="h-[60vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-black/30" />
        <AnimatedElement className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">HUB Modular Office Concept</h1>
          <p className="text-xl md:text-2xl text-white mt-4">Design Projects</p>
        </AnimatedElement>
      </ParallaxSection>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <AnimatedElement>
          <Link href="/design" className="inline-flex items-center text-neutral-600 hover:text-black mb-8 group">
            <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back To Design Projects
          </Link>
        </AnimatedElement>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <AnimatedElement className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Concept Overview</h2>
            <p className="text-neutral-700 leading-relaxed">{descriptionText}</p>
          </AnimatedElement>
          <AnimatedElement>
            <div className="bg-neutral-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <ul className="space-y-2 text-neutral-600">
                <li>
                  <strong>Location:</strong> {projectDetails.location}
                </li>
                <li>
                  <strong>Type:</strong> {projectDetails.type}
                </li>
                <li>
                  <strong>Sectors:</strong> {projectDetails.sectors}
                </li>
                <li>
                  <strong>Status:</strong> {projectDetails.status}
                </li>
              </ul>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-64 md:h-80 bg-neutral-100 rounded-lg overflow-hidden shadow-lg group"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </AnimatedElement>
      </main>
    </div>
  )
}
