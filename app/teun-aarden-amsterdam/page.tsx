"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const projectDetails = {
  title: "Teun Aarden Amsterdam",
  category: "Custom Furniture",
  location: "Amsterdam, The Netherlands",
  heroImage: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01382.jpg",
  description: "Custom furniture project in Amsterdam featuring bespoke design and craftsmanship.",
  additionalText: "Our team specializes in creating unique furniture pieces that perfectly complement the architectural style and personal preferences of each client.",
  images: [
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01382.jpg", alt: "Teun Aarden Amsterdam - Interior view 1" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01411.jpg", alt: "Teun Aarden Amsterdam - Interior view 2" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01413.jpg", alt: "Teun Aarden Amsterdam - Interior view 3" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01431.jpg", alt: "Teun Aarden Amsterdam - Interior view 4" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01435.jpg", alt: "Teun Aarden Amsterdam - Interior view 5" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01437.jpg", alt: "Teun Aarden Amsterdam - Interior view 6" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01440.jpg", alt: "Teun Aarden Amsterdam - Interior view 7" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01442.jpg", alt: "Teun Aarden Amsterdam - Interior view 8" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01452.jpg", alt: "Teun Aarden Amsterdam - Interior view 9" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01458.jpg", alt: "Teun Aarden Amsterdam - Interior view 10" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01461.jpg", alt: "Teun Aarden Amsterdam - Interior view 11" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01510.jpg", alt: "Teun Aarden Amsterdam - Interior view 12" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01519.jpg", alt: "Teun Aarden Amsterdam - Interior view 13" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01523.jpg", alt: "Teun Aarden Amsterdam - Interior view 14" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01532.jpg", alt: "Teun Aarden Amsterdam - Interior view 15" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01537.jpg", alt: "Teun Aarden Amsterdam - Interior view 16" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01549.jpg", alt: "Teun Aarden Amsterdam - Interior view 17" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01550.jpg", alt: "Teun Aarden Amsterdam - Interior view 18" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01563.jpg", alt: "Teun Aarden Amsterdam - Interior view 19" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01578.jpg", alt: "Teun Aarden Amsterdam - Interior view 20" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01598.jpg", alt: "Teun Aarden Amsterdam - Interior view 21" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01602.jpg", alt: "Teun Aarden Amsterdam - Interior view 22" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01631.jpg", alt: "Teun Aarden Amsterdam - Interior view 23" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01634.jpg", alt: "Teun Aarden Amsterdam - Interior view 24" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01637.jpg", alt: "Teun Aarden Amsterdam - Interior view 25" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01639.jpg", alt: "Teun Aarden Amsterdam - Interior view 26" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01653.jpg", alt: "Teun Aarden Amsterdam - Interior view 27" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01658.jpg", alt: "Teun Aarden Amsterdam - Interior view 28" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01661.jpg", alt: "Teun Aarden Amsterdam - Interior view 29" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01663.jpg", alt: "Teun Aarden Amsterdam - Interior view 30" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01666.jpg", alt: "Teun Aarden Amsterdam - Interior view 31" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01678.jpg", alt: "Teun Aarden Amsterdam - Interior view 32" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01680.jpg", alt: "Teun Aarden Amsterdam - Interior view 33" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01685.jpg", alt: "Teun Aarden Amsterdam - Interior view 34" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01691.jpg", alt: "Teun Aarden Amsterdam - Interior view 35" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01704.jpg", alt: "Teun Aarden Amsterdam - Interior view 36" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01709.jpg", alt: "Teun Aarden Amsterdam - Interior view 37" },
    { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01714.jpg", alt: "Teun Aarden Amsterdam - Interior view 38" },
    // { src: "/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01728.jpg", alt: "Teun Aarden Amsterdam - Interior view 39" },
  ]
}

// http://localhost:3000/_next/image?url=%2Fextra%20Custom%20Furniture%2FTeun%20Aarden_Amsterdam%2FEerste%20Helmersstraat%20181-1%20Amsterdam%2FDSC01437.jpg&w=1920&q=75

// Hook to detect mobile device
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Mobile-optimized image gallery component
const MobileOptimizedGallery = ({ images, aspectRatio = '4/3' }: { images: Array<{ src: string; alt: string }>, aspectRatio?: string }) => {
  return (
    <AnimatedElement animationType="fadeInUp" rootMargin="200px">
      <div className="space-y-6">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              style={{ aspectRatio }}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </AnimatedElement>
  )
}

export default function TeunAardenAmsterdamPage() {
  const isMobile = useIsMobile()
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
          <p className="mt-4 text-lg text-gray-200">{projectDetails.location}</p>

          {/* Project badges in hero */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Client: Teun Aarden
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Contractor: VBS
            </div>
          </div>
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
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Custom Furniture
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
              <Image
                src={projectDetails.images[0].src}
                alt={projectDetails.images[0].alt}
                width={1400}
                height={800}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Alternating layout: 3 images, then 2 images */}
            {isMobile ? (
              // Mobile-optimized version with fewer intersection observers
              <MobileOptimizedGallery
                images={projectDetails.images.slice(1)}
                aspectRatio="4/3"
              />
            ) : (
              // Desktop version with complex while loop and individual animations
              (() => {
                const galleryImages = projectDetails.images.slice(1);
                const imageRows = [];
                let currentIndex = 0;
                let rowNumber = 0;

                while (currentIndex < galleryImages.length) {
                  // Alternate: odd rows have 3 images, even rows have 2 images
                  const imagesPerRow = rowNumber % 2 === 0 ? 3 : 2;
                  const rowImages = galleryImages.slice(currentIndex, currentIndex + imagesPerRow);

                  if (rowImages.length > 0) {
                    imageRows.push(
                      <div key={currentIndex} className={`grid ${imagesPerRow === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
                        {rowImages.map((image, index) => (
                          <AnimatedElement
                            key={currentIndex + index}
                            animationType="fadeInUp"
                            delay={(currentIndex + index) * 0.05}
                          >
                            <div className="relative overflow-hidden rounded-xl shadow-sm bg-gray-100">
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
                    );
                  }

                  currentIndex += imagesPerRow;
                  rowNumber++;
                }

                return imageRows;
              })()
            )}
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
                Elegant Minimalistic Apartment
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  This elegant and minimalistic apartment was crafted with refined simplicity in mind. Designed for Teun Aarden and realized in collaboration with contractor VBS, the project reflects a harmonious blend of functionality and timeless design, right in the heart of Amsterdam.
                </p>
                <p>
                  The kitchen is the true centerpiece of the space—defined by its warm travertine stone used for countertops and backsplash, paired with handle-less cabinetry in a soft, muted tone. Open shelving adds a light, airy feel and allows functional objects to double as decoration.
                </p>
              </div>
            </AnimatedElement>

            {/* Image - Right */}
            <AnimatedElement animationType="fadeInRight" delay={0.2}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src="/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01431.jpg"
                  alt="Teun Aarden Amsterdam - Kitchen centerpiece"
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
                  src="/extra Custom Furniture/Teun Aarden_Amsterdam/Eerste Helmersstraat 181-1 Amsterdam/DSC01661.jpg"
                  alt="Teun Aarden Amsterdam - Bathroom and bedroom details"
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
                Quality Materials & Smart Detailing
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  High-end appliances are seamlessly integrated, including a Quooker tap and Siemens oven, alongside design-forward additions like a SMEG toaster and an espresso machine. Built-in LED lighting subtly illuminates the shelves, enhancing both visibility and ambiance.
                </p>
                <p>
                  The bathroom continues the minimalist theme with a custom-made, seamless white basin and wall-mounted faucet. In the bedroom, we created a custom wardrobe that blends discreetly into the niche. This project is a celebration of clarity, quality materials, and smart detailing.
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

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
              <Link href="/furniture-production">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Custom Furniture
              </Link>
            </Button>
          </AnimatedElement>
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
                    <strong>Headquarters:</strong> The Netherlands<br />

                  </p>
                  <div className="flex space-x-4">
                    <Link href="https://ro.linkedin.com/company/studiobycristian" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="https://www.instagram.com/studiobycristian/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
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
    </div>
  )
}
