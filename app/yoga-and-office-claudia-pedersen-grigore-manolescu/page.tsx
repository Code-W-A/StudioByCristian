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
  title: "Yoga and Office Claudia Pedersen Grigore Manolescu",
  category: "Custom Furniture",
  heroImage: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4334.jpg",
  images: [
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4334.jpg", alt: "Yoga and Office - Interior view 1" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4350.jpg", alt: "Yoga and Office - Interior view 2" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4377.jpg", alt: "Yoga and Office - Interior view 3" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4380.jpg", alt: "Yoga and Office - Interior view 4" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4401.jpg", alt: "Yoga and Office - Interior view 5" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4413.jpg", alt: "Yoga and Office - Interior view 6" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4419.jpg", alt: "Yoga and Office - Interior view 7" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4425.jpg", alt: "Yoga and Office - Interior view 8" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4467.jpg", alt: "Yoga and Office - Interior view 9" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4473.jpg", alt: "Yoga and Office - Interior view 10" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4488.jpg", alt: "Yoga and Office - Interior view 11" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6821.jpg", alt: "Yoga and Office - Interior view 12" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6822.jpg", alt: "Yoga and Office - Interior view 13" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6838.jpg", alt: "Yoga and Office - Interior view 14" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6845.jpg", alt: "Yoga and Office - Interior view 15" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6856.jpg", alt: "Yoga and Office - Interior view 16" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6865.jpg", alt: "Yoga and Office - Interior view 17" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6877.jpg", alt: "Yoga and Office - Interior view 18" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6879.jpg", alt: "Yoga and Office - Interior view 19" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6883.jpg", alt: "Yoga and Office - Interior view 20" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6912.jpg", alt: "Yoga and Office - Interior view 21" }
  ]
}

export default function YogaAndOfficeClaudiaPedersenGrigoreManolescuPage() {
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