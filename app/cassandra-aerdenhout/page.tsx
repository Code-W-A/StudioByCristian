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
  title: "Cassandra Aerdenhout",
  category: "Custom Furniture",
  heroImage: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5858.jpg",
  images: [
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5858.jpg", alt: "Cassandra Aerdenhout - Interior view 1" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5886.jpg", alt: "Cassandra Aerdenhout - Interior view 6" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5893.jpg", alt: "Cassandra Aerdenhout - Interior view 7" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5900.jpg", alt: "Cassandra Aerdenhout - Interior view 8" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5914.jpg", alt: "Cassandra Aerdenhout - Interior view 9" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5919.jpg", alt: "Cassandra Aerdenhout - Interior view 10" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5923.jpg", alt: "Cassandra Aerdenhout - Interior view 11" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5938.jpg", alt: "Cassandra Aerdenhout - Interior view 12" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5942.jpg", alt: "Cassandra Aerdenhout - Interior view 13" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5950.jpg", alt: "Cassandra Aerdenhout - Interior view 14" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5953.jpg", alt: "Cassandra Aerdenhout - Interior view 15" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5955.jpg", alt: "Cassandra Aerdenhout - Interior view 16" },
    // { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5958.jpg", alt: "Cassandra Aerdenhout - Interior view 17" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5963.jpg", alt: "Cassandra Aerdenhout - Interior view 18" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5967.jpg", alt: "Cassandra Aerdenhout - Interior view 19" },
    { src: "/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5970.jpg", alt: "Cassandra Aerdenhout - Interior view 20" }
  ]
}

// http://localhost:3000/_next/image?url=%2Fextra%20Custom%20Furniture%2FCassandra_Aerdenhout%2F_EWP5958.jpg&w=1920&q=75

export default function CassandraAerdenhoutPage() {
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
        videoId="1097919511"
        title="Cassandra Aerdenhout - Luxury Custom Furniture"
        description="Experience the elegant transformation of this Aerdenhout residence featuring bespoke furniture design and sophisticated interior architecture"
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
            {/* Alternating layout: 2 images, then 1 image, then 2 images, etc. */}
            {(() => {
              const remainingImages = projectDetails.images.slice(6);
              const elements = [];
              
              for (let i = 0; i < remainingImages.length; i += 3) {
                // Add pair of images (2 in a row)
                if (i < remainingImages.length) {
                  elements.push(
                    <div key={`pair-${i}`} className="grid md:grid-cols-2 gap-8">
                      <AnimatedElement animationType="fadeInUp" delay={i * 0.1}>
                        <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                          <Image src={remainingImages[i].src} alt={remainingImages[i].alt} width={900} height={675}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                        </div>
                      </AnimatedElement>
                      {remainingImages[i + 1] && (
                        <AnimatedElement animationType="fadeInUp" delay={(i + 1) * 0.1}>
                          <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                            <Image src={remainingImages[i + 1].src} alt={remainingImages[i + 1].alt} width={900} height={675}
                              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '4/3' }} />
                          </div>
                        </AnimatedElement>
                      )}
                    </div>
                  );
                }
                
                // Add single image if exists
                if (remainingImages[i + 2]) {
                  elements.push(
                    <AnimatedElement key={`single-${i + 2}`} animationType="fadeInUp" delay={(i + 2) * 0.1}>
                      <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
                        <Image src={remainingImages[i + 2].src} alt={remainingImages[i + 2].alt} width={1400} height={800}
                          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" style={{ aspectRatio: '16/9' }} />
                      </div>
                    </AnimatedElement>
                  );
                }
              }
              
              return elements;
            })()}
          </div>
        </div>
      </section>

      {/* Project Description Section */}
      <section className="py-16 lg:py-24 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content - Left */}
            <AnimatedElement animationType="fadeInLeft" className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Private Residence – Aerdenhout, The Netherlands
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  A refined interior project nestled in the exclusive surroundings of Aerdenhout, this private residence embodies elegance, precision, and timeless design. Our studio was entrusted with the complete production and installation of bespoke furniture for the kitchen and the library — both integral to the client's vision of sophistication and function.
                </p>
                <p>
                  The kitchen was designed to be a true centerpiece — featuring custom dark wood cabinetry, a large island with 45-degree mitred joints, and a luxurious stone-look tile countertop imported from Italy.
                </p>
              </div>
            </AnimatedElement>

            {/* Image - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src="/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5886.jpg"
                  alt="Cassandra Aerdenhout - Kitchen centerpiece"
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
                  src="/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5923.jpg"
                  alt="Cassandra Aerdenhout - Library and reading area"
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
                Seamless Luxury & Timeless Design
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  The seamless finish is enhanced by concealed integrated lighting, slim vertical pendant lamps, and illuminated glass-fronted upper cabinets, creating an atmosphere of understated luxury and warmth. The thoughtful layout maximizes both space and visual impact.
                </p>
                <p>
                  An additional bespoke request was the full-wall book cabinet in the reading area. Meticulously crafted from painted MDF and fingerprint-resistant materials, this expansive library combines functionality with minimalist elegance — offering ample closed storage below and open shelving above, all lit by refined top-mounted picture lights for a cozy and curated ambiance.
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