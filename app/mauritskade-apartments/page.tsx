"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectDetails = {
  title: "Mauritskade Apartments",
  category: "Furniture Production",
  heroImageQuery: "modern kitchen sink with marble backsplash in Mauritskade apartment",
  description:
    "The custom made pieces our team designed for this project consist of the kitchen, wardrobes, TV stands, bathroom furniture, bookshelves, desks and coffee corners with matte finishes in a neutral tone. 10 mm thick ceramic is used for the kitchen worktops and the same material is used for the bathroom countertops. The design is balanced and harmonised with the use of proportional accents and volumes. The custom-made wardrobes in the dressing rooms and the modern wall-mounted desks are also part of the project.",
  gallery: [
    { srcQuery: "Mauritskade apartment bedroom with blue bedspread", alt: "Bedroom with blue bedspread" },
    { srcQuery: "Mauritskade apartment living room with sofa and lamp", alt: "Living room with sofa and floor lamp" },
    { srcQuery: "Mauritskade apartment kitchen and dining area", alt: "Kitchen and dining area" },
    { srcQuery: "Mauritskade apartment living room detail", alt: "Living room detail with decor" },
    { srcQuery: "Mauritskade apartment kitchen appliances", alt: "Kitchen appliances detail" },
    { srcQuery: "Mauritskade apartment dining table setup", alt: "Dining table setup" },
    { srcQuery: "Mauritskade apartment bedroom wardrobe", alt: "Bedroom wardrobe and desk area" },
    { srcQuery: "Mauritskade apartment bathroom detail", alt: "Bathroom detail with sink" },
    { srcQuery: "Mauritskade apartment bedroom full view", alt: "Full view of bedroom" },
  ],
}

export default function MauritskadeApartmentsPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl={`/placeholder.svg?width=1600&height=900&query=${encodeURIComponent(projectDetails.heroImageQuery)}`}
        imageAlt={projectDetails.title + " Hero Image"}
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{projectDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <p className="text-lg text-gray-700 leading-relaxed">{projectDetails.description}</p>
              <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(projectDetails.gallery[0].srcQuery)}`}
                  alt={projectDetails.gallery[0].alt}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projectDetails.gallery.slice(1).map((image, index) => (
              <AnimatedElement
                key={index}
                animationType="scaleIn"
                delay={index * 0.05}
                className={index === projectDetails.gallery.length - 2 ? "sm:col-span-2" : ""} // Make last image full width on sm if odd number
              >
                <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(image.srcQuery)}`}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="link" className="px-0 text-black hover:text-gray-700">
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back To Furniture Production
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
