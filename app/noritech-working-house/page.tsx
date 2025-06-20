import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ParallaxSection from "@/components/parallax-section"
import AnimatedElement from "@/components/animated-element"
import { Button } from "@/components/ui/button"

export default function NoritechWorkingHousePage() {
  const projectDetails = {
    location: "California",
    type: "Working Space, Interior Design",
    sectors: "Residential, Commercial",
    status: "Concept",
  }

  const designFeatures = [
    "Moll synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache.",
    "Kale chips proident chillwave deep v laborum. Aliquip veniam delectus.",
    "Marfa eiusmod Pinterest in do umami readymade swag.",
    "Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave.",
    "Day deneme mode snackwave, Helvetica et VHS viral.",
    "Hashtag selfies. Wes Anderson Banksy umami.",
    "Cred VHS. Elit swaggan PBRB. Ennui biodiesel nihil.",
    "Laboris next level, tousled four loko nostrud.",
    "Fingerstache adipisicing artsy.",
    "Magna Schlitz. Elit swaggan Fanny pack.",
  ]

  const textBlock1 =
    "Explicitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar jean vinegar stumptown yr pop-up artisan."
  const textBlock2 =
    "Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest new new new. Polished finish elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design."

  return (
    <div className="bg-white text-neutral-800">
      <ParallaxSection bgImage="/placeholder.svg?width=1200&height=800" className="h-[60vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-black/30" />
        <AnimatedElement className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">NORITECH Working House</h1>
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
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-neutral-700 leading-relaxed">{textBlock1}</p>
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
          <h2 className="text-2xl font-semibold mb-6 text-center">Architectural Plan</h2>
          <div className="relative w-full h-[300px] md:h-[500px] bg-neutral-100 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?width=1000&height=600"
              alt="NORITECH Working House Floor Plan"
              layout="fill"
              objectFit="contain"
              className="p-4"
            />
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <AnimatedElement className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?width=600&height=400"
              alt="NORITECH Building Exterior Detail"
              layout="fill"
              objectFit="cover"
            />
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-neutral-700 leading-relaxed">{textBlock2}</p>
          </AnimatedElement>
        </div>

        <AnimatedElement className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Design Features</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <ul className="space-y-3 text-neutral-700 list-disc list-inside">
                {designFeatures.slice(0, Math.ceil(designFeatures.length / 2)).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="mt-4 space-x-2">
                <Button variant="outline" className="bg-stone-200 text-stone-800 hover:bg-stone-300">
                  CHIMNEYS, TILE
                </Button>
                <Button variant="outline" className="bg-stone-200 text-stone-800 hover:bg-stone-300">
                  RUSTIC METAL FINISH
                </Button>
              </div>
            </div>
            <div>
              <ul className="space-y-3 text-neutral-700 list-disc list-inside">
                {designFeatures.slice(Math.ceil(designFeatures.length / 2)).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2 relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg mt-6">
              <Image
                src="/placeholder.svg?width=800&height=500"
                alt="NORITECH Building Exterior"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </AnimatedElement>

        <AnimatedElement className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Elevations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative w-full h-80 md:h-[450px] bg-neutral-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?width=600&height=450"
                alt="NORITECH Building Elevation 1"
                layout="fill"
                objectFit="contain"
                className="p-4"
              />
              <p className="absolute bottom-2 right-2 text-xs text-neutral-500 bg-white/70 px-1 py-0.5 rounded">
                Elevation 1
              </p>
            </div>
            <div className="relative w-full h-80 md:h-[450px] bg-neutral-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?width=600&height=450"
                alt="NORITECH Building Elevation 2"
                layout="fill"
                objectFit="contain"
                className="p-4"
              />
              <p className="absolute bottom-2 right-2 text-xs text-neutral-500 bg-white/70 px-1 py-0.5 rounded">
                Elevation 2
              </p>
            </div>
          </div>
        </AnimatedElement>
      </main>
    </div>
  )
}
