"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

const projectDetails = {
  title: "Private Villa Wassenaar",
  category: "Turn Key Management",
  heroImage: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-Banner-After-scaled.jpg.jpeg",
  location: "Wassenaar, The Netherlands",
  status: "Finished",
  service: "Turn Key Management, Design, Before & After",
  sectors: "Private Residential",
  area: "Villa - Multiple Levels",
  client: "Private",
  
  sections: [
    {
      title: "Before",
      text: "We found the house picturing the melancholic nuances of her younger times. The patina of the classical approach was not fit anymore for a residence in the flourishing Wassenaar | The Netherlands.",
      image: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-Before-1-1-scaled.jpg.jpeg",
      imageAlt: "Private Villa Wassenaar - Before renovation"
    },
    {
      title: "Design",
      text: "Envisioning the highest potential for this home, we studied every aspect, every functional and aesthetical detail. We've put up a mood to inspire the future residents to see the potential their home can reach. Designing the interior had a focus on elegance and the visual symphony of neutral tones, black accents and the warmth of natural wood, all resting on the background of the invigorating outdoor greenery.",
      image: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-Design-01.jpg.jpeg",
      imageAlt: "Private Villa Wassenaar - Design concept"
    },
    {
      title: "Ground Floor Transformation",
      text: "The main intervention at the ground floor was opening up the passage from the living room to the dining area and kitchen by mounting a large glass door, which created a light filled open space surrounded by nature and benefiting from the warm sunlight at all times. The living room was fitted with warm lights, minimal built-in furniture and a cozy, elegant feel through the suggested finishes.",
      image: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-1-1-scaled.jpg.jpeg",
      imageAlt: "Private Villa Wassenaar - Ground floor after renovation"
    },
    {
      title: "First Floor Bedrooms",
      text: "The first floor contains 1 spacious master bedroom and 1 guest bedroom, both equipped with en suite bathrooms. The bathrooms' design maintains the elegant key, playing with large marble slabs alongside dark accents of mosaics, minimal furniture volumes and accessories.",
      image: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-15-1-scaled.jpg.jpeg",
      imageAlt: "Private Villa Wassenaar - First floor bedrooms"
    },
    {
      title: "Second Floor & Attic",
      text: "The second floor, which initially only hosted 2 rooms, now provides 2 bedrooms, 1 shared bathroom and 1 toilet. The attic can turn into a playroom, hobby room or an extra bedroom depending on the family needs and there is also a laundry room set up.",
      image: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-25-1-scaled.jpg.jpeg",
      imageAlt: "Private Villa Wassenaar - Second floor renovation"
    },
    {
      title: "Outdoor Intervention",
      text: "Intervention on the outdoors aimed at inviting the owner to make use of the available space and so we created different setups so spending as much time outside can be at hand. Dining in the garden, reading, relaxing on the bench or lounging with friends around a pit fire is all accessible.",
      image: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-17-1-scaled.jpg.jpeg",
      imageAlt: "Private Villa Wassenaar - Outdoor spaces"
    },
    {
      title: "After",
      text: "All the actions were set in motion to create the perfect scenery for the future owners. The interventions were restorations, repairments and optimizations of the unseen aspects of the home, all which were covered by the modern light grey paint and warm natural wood floor. Outdoor landscaping, the kitchen, the bathrooms and built-in wardrobes were all provided for the comfort of the new owners, but the canvas of the home had enough space for them to also place their own unique signature.",
      image: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-29-1-scaled.jpg.jpeg",
      imageAlt: "Private Villa Wassenaar - Final result"
    }
  ],
  
  additionalImages: [
    { src: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-2-1-scaled.jpg.jpeg", alt: "Private Villa Wassenaar - Additional view 1" },
    { src: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-3-1-scaled.jpg.jpeg", alt: "Private Villa Wassenaar - Additional view 2" },
    { src: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-4-1-scaled.jpg.jpeg", alt: "Private Villa Wassenaar - Additional view 3" },
    { src: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-5-1-scaled.jpg.jpeg", alt: "Private Villa Wassenaar - Additional view 4" },
    { src: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-6-1-scaled.jpg.jpeg", alt: "Private Villa Wassenaar - Additional view 5" },
    { src: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-7-1-scaled.jpg.jpeg", alt: "Private Villa Wassenaar - Additional view 6" },
    { src: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-8-1-scaled.jpg.jpeg", alt: "Private Villa Wassenaar - Additional view 7" },
    { src: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-9-1-scaled.jpg.jpeg", alt: "Private Villa Wassenaar - Additional view 8" },
    { src: "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/Private-Villa-Wassenaar-After-10-1-scaled.jpg.jpeg", alt: "Private Villa Wassenaar - Additional view 9" },
  ]
}

export default function PrivateVillaWassenaarPage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl={projectDetails.heroImage}
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

      {/* Back Button */}
      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/turn-key-management">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Turn Key Management
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-white text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {/* Project Details */}
          <AnimatedElement animationType="fadeInUp" className="mt-12">
            <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-black mb-8">Project Details</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-black">Location:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.location}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Status:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.status}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Service:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.service}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-black">Sectors:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.sectors}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Area:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.area}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-black">Client:</span>
                    <span className="ml-2 text-gray-700">{projectDetails.client}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Alternating Text-Image Sections */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projectDetails.sections.map((section, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Text Content */}
                <AnimatedElement 
                  animationType="fadeInLeft"
                  delay={0.1}
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
                </AnimatedElement>

                {/* Image */}
                <AnimatedElement 
                  animationType="fadeInRight"
                  delay={0.2}
                  className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '4/3' }}
                    />
                  </div>
                </AnimatedElement>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-4">
              Project Walkthrough
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Take a virtual tour through the transformed Private Villa Wassenaar and see the complete renovation process.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animationType="fadeInUp" delay={0.2}>
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/S7YIkF9o3k8?rel=0&modestbranding=1&showinfo=0"
                  title="Private Villa Wassenaar - Project Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full rounded-xl"
                ></iframe>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Additional Images Gallery */}
      <section className="py-12 lg:py-16 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Project Gallery
            </h2>
          </AnimatedElement>
          
          <div className="space-y-12">
            {/* Three images in a row */}
            <div className="grid md:grid-cols-3 gap-8">
              {projectDetails.additionalImages.slice(0, 3).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </div>
                </AnimatedElement>
              ))}
            </div>

            {/* Two large images */}
            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.additionalImages.slice(3, 5).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '4/3' }}
                    />
                  </div>
                </AnimatedElement>
              ))}
            </div>

            {/* Single wide image */}
            <AnimatedElement animationType="fadeInUp" delay={0.3}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src={projectDetails.additionalImages[5].src}
                  alt={projectDetails.additionalImages[5].alt}
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </AnimatedElement>

            {/* Final three images */}
            <div className="grid md:grid-cols-3 gap-8">
              {projectDetails.additionalImages.slice(6, 9).map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
                starting to dream, we'd love to hear from you. Reach out to discuss your project, and let's explore the
                possibilities together.
              </p>
              <div className="space-y-4 text-gray-700">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Headquarters:</strong> The Netherlands & Romania<br />
                    <strong>Working Point:</strong> Austria
                  </p>
                  <div className="flex space-x-4">
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="#" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
                  </div>
                  <Link 
                    href="mailto:office@studiobycristian.com" 
                    className="block text-gray-700 hover:text-black transition-colors"
                  >
                    office@studiobycristian.com
                  </Link>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight">
              <motion.div
                className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                <ContactForm />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Back Button Bottom */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/turn-key-management">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Turn Key Management
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
} 