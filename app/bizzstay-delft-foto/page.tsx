"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"
import ProjectVideoShowcase from "@/components/project-video-showcase"

const projectDetails = {
  title: "BizzStay Delft Foto",
  category: "Custom Furniture",
  heroImage: "/bizzstay_sfeer/SFEER-9.jpg",
  images: [
    // New BizzStay Sfeer images
    { src: "/bizzstay_sfeer/SFEER-1.jpg", alt: "BizzStay Delft Foto - Sfeer view 1" },
    { src: "/bizzstay_sfeer/SFEER-2.jpg", alt: "BizzStay Delft Foto - Sfeer view 2" },
    { src: "/bizzstay_sfeer/SFEER-9.jpg", alt: "BizzStay Delft Foto - Sfeer view 9" },
    { src: "/bizzstay_sfeer/SFEER-10.jpg", alt: "BizzStay Delft Foto - Sfeer view 10" },
    { src: "/bizzstay_sfeer/SFEER-12.jpg", alt: "BizzStay Delft Foto - Sfeer view 12" },
    { src: "/bizzstay_sfeer/SFEER-17.jpg", alt: "BizzStay Delft Foto - Sfeer view 17" },
    { src: "/bizzstay_sfeer/SFEER-28.jpg", alt: "BizzStay Delft Foto - Sfeer view 28" },
    { src: "/bizzstay_sfeer/SF0CF3~1.JPG", alt: "BizzStay Delft Foto - Additional view 1" },
    { src: "/bizzstay_sfeer/SF3176~1.JPG", alt: "BizzStay Delft Foto - Additional view 2" },
    { src: "/bizzstay_sfeer/SF3369~1.JPG", alt: "BizzStay Delft Foto - Additional view 3" },
    { src: "/bizzstay_sfeer/SF7D88~1.JPG", alt: "BizzStay Delft Foto - Additional view 4" },
    { src: "/bizzstay_sfeer/SF9C57~1.JPG", alt: "BizzStay Delft Foto - Additional view 5" },
    { src: "/bizzstay_sfeer/SFD138~1.JPG", alt: "BizzStay Delft Foto - Additional view 6" },
    // Original images
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9002.jpg", alt: "BizzStay Delft Foto - Interior view 1" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9007.jpg", alt: "BizzStay Delft Foto - Interior view 2" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9017.jpg", alt: "BizzStay Delft Foto - Interior view 3" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9025.jpg", alt: "BizzStay Delft Foto - Interior view 4" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9036.jpg", alt: "BizzStay Delft Foto - Interior view 5" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9040.jpg", alt: "BizzStay Delft Foto - Interior view 6" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9043.jpg", alt: "BizzStay Delft Foto - Interior view 7" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9046.jpg", alt: "BizzStay Delft Foto - Interior view 8" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9049.jpg", alt: "BizzStay Delft Foto - Interior view 9" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9054.jpg", alt: "BizzStay Delft Foto - Interior view 10" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9065.jpg", alt: "BizzStay Delft Foto - Interior view 11" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9072.jpg", alt: "BizzStay Delft Foto - Interior view 12" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9079.jpg", alt: "BizzStay Delft Foto - Interior view 13" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9083.jpg", alt: "BizzStay Delft Foto - Interior view 14" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9090.jpg", alt: "BizzStay Delft Foto - Interior view 15" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9095.jpg", alt: "BizzStay Delft Foto - Interior view 16" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9104.jpg", alt: "BizzStay Delft Foto - Interior view 17" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9109.jpg", alt: "BizzStay Delft Foto - Interior view 18" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9113.jpg", alt: "BizzStay Delft Foto - Interior view 19" },
    { src: "/extra Custom Furniture/BizzStay_Delft Foto/_EWP9119.jpg", alt: "BizzStay Delft Foto - Interior view 20" }
  ]
}

export default function BizzStayDelftFotoPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection imageUrl={projectDetails.heroImage} imageAlt={projectDetails.title + " Hero Image"} minHeight="70vh" strength={0.3} overlayClassName="bg-black/40">
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{projectDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
        </AnimatedElement>
      </ParallaxSection>

      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button asChild variant="outline" size="lg" className="bg-white text-black border-gray-300 hover:bg-gray-100">
              <Link href="/furniture-production"><ArrowLeft className="mr-2 h-5 w-5" />Back to Custom Furniture</Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Project Video Showcase */}
      <ProjectVideoShowcase 
        videoId="1097919705"
        title="Hotel Delft - Luxury Custom Furniture"
        description="Discover the sophisticated hospitality design that creates memorable experiences through thoughtful interior architecture and premium furnishing"
      />

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
              <Image src={projectDetails.images[0].src} alt={projectDetails.images[0].alt} width={1400} height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '16/9' }} />
            </div>
          </AnimatedElement>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.images.slice(1, 3).map((image, index) => (
                <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                    <Image src={image.src} alt={image.alt} width={800} height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                  </div>
                </AnimatedElement>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projectDetails.images.slice(3, 6).map((image, index) => (
                <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                  <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                    <Image src={image.src} alt={image.alt} width={600} height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '1/1' }} />
                  </div>
                </AnimatedElement>
              ))}
            </div>
            {projectDetails.images.slice(6).map((image, index) => (
              <AnimatedElement key={index} animationType="fadeInUp" delay={index * 0.1}>
                <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                  <Image src={image.src} alt={image.alt} width={1400} height={800}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '16/9' }} />
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content - Left */}
            <AnimatedElement animationType="fadeInLeft" className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Hotel Apartments – Delft City Center
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  We had the privilege to contribute to the furnishing of this charming hotel apartment nestled in the heart of the historic city center of Delft, The Netherlands. Designed with thoughtful attention by Valk Design and operated by BizzStay, these short-term stay apartments combine tradition with contemporary comfort.
                </p>
                <p>
                  In homage to Delft's heritage, the design incorporates the iconic Delft blue as a recurring accent—most strikingly in the bespoke kitchens. This bold color choice is elegantly balanced with natural wood tones, tactile textiles, and soft golden elements to create a warm, welcoming atmosphere.
                </p>
              </div>
            </AnimatedElement>

            {/* Image - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src="/bizzstay_sfeer/SFEER-9.jpg"
                  alt="BizzStay Delft - Hotel apartment interior"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </AnimatedElement>
          </div>

          {/* Second Row - Image Left, Text Right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-24">
            {/* Image - Left */}
            <AnimatedElement animationType="fadeInLeft" className="lg:order-1">
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src="/bizzstay_sfeer/SFEER-12.jpg"
                  alt="BizzStay Delft - Custom furniture details"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </AnimatedElement>

            {/* Text Content - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2} className="space-y-6 lg:order-2">
              <h3 className="text-2xl font-bold tracking-tight text-black">
                Turnkey Custom Furniture Solutions
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our role encompassed the complete turnkey delivery of all custom furniture—from open living areas and compact kitchens to smart workspace nooks, bedrooms, and stylish bathroom vanities. We carefully selected materials for both aesthetics and durability, including fingerprint-resistant MDF with wood-look HPL, Compact HPL, and premium Italian kitchen countertops with a marble finish.
                </p>
                <p>
                  Each apartment is tailored to offer both elegance and functionality. From integrated bunk beds and clever storage solutions to sculptural lighting and layered textures, every detail contributes to a refined, hotel-like experience that feels like home.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Contact Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
                starting to dream, we'd love to hear from you.
              </p>
              <div className="space-y-4 text-gray-700">
                <p><strong>Headquarters:</strong> The Netherlands</p>
                <div className="flex space-x-4">
                                      <Link href="https://ro.linkedin.com/company/studiobycristian" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="https://www.instagram.com/studiobycristian/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
                </div>
                <Link href="mailto:office@studiobycristian.com" className="block text-gray-700 hover:text-black transition-colors">office@studiobycristian.com</Link>
              </div>
            </AnimatedElement>
            <AnimatedElement animationType="fadeInRight">
              <motion.div className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }} viewport={{ once: true, amount: 0.3 }}>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  Would you like to discuss a project?
                </h2>
                
                {/* Decorative line */}
                <div className="w-24 h-0.5 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-8" />
                
                <ContactForm />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  )
} 