"use client"

import HeroSectionHomepage from "@/components/homepage/hero-section-homepage"
import AboutUsSection from "@/components/homepage/about-us-section"
import OurWorkSection from "@/components/homepage/our-work-section"
import FeaturedProjectsSection from "@/components/homepage/featured-projects-section"
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
      <TestimonialsSection />
      <ShapesCollectionSection />
      <ContactSection />
    </div>
  )
}
