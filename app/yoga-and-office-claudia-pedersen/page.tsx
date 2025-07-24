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
  title: "Yoga and Office Claudia Pedersen",
  category: "Custom Furniture",
  heroImage: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4334.jpg",
  images: [
    // { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4334.jpg", alt: "Yoga and Office - Interior view 1" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4350.jpg", alt: "Yoga and Office - Interior view 2" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4377.jpg", alt: "Yoga and Office - Interior view 3" },
    { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4380.jpg", alt: "Yoga and Office - Interior view 4" },
    // { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4401.jpg", alt: "Yoga and Office - Interior view 5" },
    // { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4413.jpg", alt: "Yoga and Office - Interior view 6" },
    // { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4419.jpg", alt: "Yoga and Office - Interior view 7" },
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
    // { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6883.jpg", alt: "Yoga and Office - Interior view 20" },
    // { src: "/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6912.jpg", alt: "Yoga and Office - Interior view 21" }
  ]
}

// http://localhost:3000/_next/image?url=%2Fextra%20Custom%20Furniture%2FYoga%20and%20Office%20Claudia%20Pedersen_Grigore%20Manolescu%2FHiRes%2FIMG_4401.jpg&w=1200&q=75
// http://localhost:3000/_next/image?url=%2Fextra%20Custom%20Furniture%2FYoga%20and%20Office%20Claudia%20Pedersen_Grigore%20Manolescu%2FHiRes%2FIMG_4334.jpg&w=1920&q=75


export default function YogaAndOfficeClaudiaPedersenGrigoreManolescuPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection imageUrl={projectDetails.heroImage} imageAlt={projectDetails.title + " Hero Image"} minHeight="70vh" strength={0.3} overlayClassName="bg-black/40">
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{projectDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
          
          {/* Project badges in hero */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Client: Claudia Pedersen
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Location: Bucharest, Romania
            </div>
          </div>
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
            {/* Alternating pattern: 2 images, then 1 image, repeating */}
            {(() => {
              const result = [];
              let imageIndex = 1; // Start from index 1 since index 0 is already shown above
              
              while (imageIndex < projectDetails.images.length) {
                // Two images in a row
                if (imageIndex + 1 < projectDetails.images.length) {
                  result.push(
                    <div key={`pair-${imageIndex}`} className="grid md:grid-cols-2 gap-8">
                      <AnimatedElement animationType="fadeInUp" delay={0.1}>
                        <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                          <Image 
                            src={projectDetails.images[imageIndex].src} 
                            alt={projectDetails.images[imageIndex].alt} 
                            width={900} 
                            height={675}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                            style={{ aspectRatio: '4/3' }} 
                          />
                        </div>
                      </AnimatedElement>
                      <AnimatedElement animationType="fadeInUp" delay={0.2}>
                        <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                          <Image 
                            src={projectDetails.images[imageIndex + 1].src} 
                            alt={projectDetails.images[imageIndex + 1].alt} 
                            width={900} 
                            height={675}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                            style={{ aspectRatio: '4/3' }} 
                          />
                        </div>
                      </AnimatedElement>
                    </div>
                  );
                  imageIndex += 2;
                }
                
                // Single image
                if (imageIndex < projectDetails.images.length) {
                  result.push(
                    <AnimatedElement key={`single-${imageIndex}`} animationType="fadeInUp" delay={0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                        <Image 
                          src={projectDetails.images[imageIndex].src} 
                          alt={projectDetails.images[imageIndex].alt} 
                          width={1400} 
                          height={800}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                          style={{ aspectRatio: '16/9' }} 
                        />
                      </div>
                    </AnimatedElement>
                  );
                  imageIndex++;
                }
              }
              
              return result;
            })()}
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
                Multi-Purpose Meditation Room
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  This multi-purpose room holds a special meaning for us. Created for Claudia Pedersen, the space had to combine seemingly opposite functions: a peaceful, symbolic meditation room and a fully functional home office. The challenge was to balance serenity and productivity within one harmonious environment.
                </p>
                <p>
                  We designed custom cabinetry and shelves to accommodate books, decorative objects, and office materials, while also keeping the space feeling airy and calm. The built-in yellow bench provides a cheerful accent and a place for reflection or reading.
                </p>
              </div>
            </AnimatedElement>

            {/* Image - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src="/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_4413.jpg"
                  alt="Yoga and Office - Custom cabinetry and yellow bench"
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
                  src="/extra Custom Furniture/Yoga and Office Claudia Pedersen_Grigore Manolescu/HiRes/IMG_6865.jpg"
                  alt="Yoga and Office - Meditation area with round carpet and symbolic details"
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
                Where Clarity & Inner Peace Meet
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Natural textures, soft lighting, and carefully curated details—like the backlit circular mirror and rounded shelves—help foster a gentle, soothing ambiance. A work area with ergonomic seating and seamless desk surfaces supports focus, while the round meditation carpet and symbolic art pieces invite moments of mindfulness.
                </p>
                <p>
                  Everything was tailored to Claudia's needs, with handcrafted millwork in soft wood tones, hidden storage solutions, and warm, tactile finishes. The result is a space that radiates intention—where clarity of thought and inner peace meet.
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