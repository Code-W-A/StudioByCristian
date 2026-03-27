import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import AboutIntroText from "@/components/about-intro-text"

export default function AboutUsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedElement animationType="fadeInLeft" className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">About Us</p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Studio byCristian</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              <AboutIntroText />
            </p>
            <Button asChild variant="link" className="mt-4 px-0 text-lg text-gray-900 hover:text-gray-700 group">
              <Link href="/about">
                Explore{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedElement>
          <AnimatedElement
            animationType="fadeInRight"
                            className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src="/WassenaarPlan2000/Round 2/_EWP5710.jpg"
              alt="Studio by Cristian team or office"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
} 
