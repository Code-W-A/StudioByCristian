"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import HeroSectionHomepage from "@/components/homepage/hero-section-homepage"
import AboutUsSection from "@/components/homepage/about-us-section"
import OurWorkSection from "@/components/homepage/our-work-section"
import FeaturedProjectsSection from "@/components/homepage/featured-projects-section"
import VideosSection from "@/components/homepage/videos-section"
import TestimonialsSection from "@/components/homepage/testimonials-section"
import ShapesCollectionSection from "@/components/homepage/shapes-collection-section"
import ContactSection from "@/components/homepage/contact-section"

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 selection:bg-black selection:text-white">
      <HeroSectionHomepage />
      <AboutUsSection />
      <OurWorkSection />
      <FeaturedProjectsSection />
      <VideosSection />
      <TestimonialsSection />
      <ShapesCollectionSection />
      <section className="bg-black px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div><p className="text-xs uppercase tracking-[0.3em] text-white/45">One Stop Shop</p><h2 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">One partner for design, renovation, furniture and delivery.</h2></div>
          <Link href="/one-stop-shop#book" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm text-black">Book a consultation <ArrowRight size={16} /></Link>
        </div>
      </section>
      <ContactSection />
    </div>
  )
}
