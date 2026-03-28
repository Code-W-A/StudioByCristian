"use client"

import AnimatedElement from "@/components/animated-element"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function FooterCTASection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedElement animationType="fadeInUp">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-16 h-px bg-white/40 mx-auto"></div>
              <h2 className="text-3xl md:text-4xl font-extralight text-white leading-tight">
                Explore More Projects
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Discover our complete portfolio of furniture production projects and architectural designs.
              </p>
            </div>
            
            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-light"
              >
                <Link href="/furniture-production" className="flex items-center gap-3">
                  <ArrowLeft className="w-5 h-5" />
                  Back To Furniture Production
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedElement>
        
        {/* Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rotate-12"></div>
          <div className="absolute top-1/2 left-10 w-1 h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <div className="absolute top-1/3 right-10 w-1 h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>
    </section>
  )
} 