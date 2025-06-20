"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"
import AnimatedElement from "@/components/animated-element"
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, type Variants } from "framer-motion"
import { useRef, useEffect } from "react"
import ParallaxSection from "@/components/parallax-section" // Keep for other sections if needed
import { useState } from "react"

// --- Enhanced Hero Section Data ---
const heroNavItems = [
  {
    id: "design",
    title: "Design",
    subtitle: "Crafting unique environments with vision and precision.",
    imageQuery: "abstract architectural design rendering",
    link: "/design",
    cta: "Explore Design",
  },
  {
    id: "furniture",
    title: "Furniture Production",
    subtitle: "Bespoke pieces, meticulously built to inspire.",
    imageQuery: "artisan crafting custom wooden furniture in workshop",
    link: "/furniture-production",
    cta: "Discover Craftsmanship",
  },
  {
    id: "turnkey",
    title: "Turn Key Management",
    subtitle: "Seamless project execution, from concept to completion.",
    imageQuery: "modern luxury interior living room panoramic view",
    link: "/turn-key-management",
    cta: "Learn About Turn Key",
  },
  {
    id: "archive",
    title: "Work Archive",
    subtitle: "A legacy of transformative projects and inspired spaces.",
    imageQuery: "gallery wall showcasing diverse architectural projects",
    link: "/work-archive",
    cta: "View Our Portfolio",
  },
]

// --- Other Section Data (can be enhanced later) ---
const exploreWorkItems = [
  {
    title: "Furniture Production",
    imageQuery: "detailed shot of handcrafted wooden joint",
    link: "/furniture-production",
    description: "Exquisite, custom-made furniture that defines your space.",
  },
  {
    title: "Concept Design",
    imageQuery: "futuristic architectural sketch with flowing lines",
    link: "/concept-design",
    description: "Innovative concepts that push the boundaries of design.",
  },
]

const projectGridItems = [
  {
    name: "Dutch Village Concept",
    imageQuery: "Dutch Village Concept serene canal view",
    link: "/dutch-village-concept",
  },
  {
    name: "Suriname Residential",
    imageQuery: "Suriname Residential Apartments lush tropical exterior",
    link: "/suriname-apartments-residential-1-furniture",
  },
  {
    name: "Harmonie In Holz",
    imageQuery: "Harmonie in Holz warm wooden interior detail",
    link: "/harmonie-in-holz-house",
  },
  {
    name: "Mauritskade Apartments",
    imageQuery: "Mauritskade Apartments elegant facade",
    link: "/mauritskade",
  },
]

const productItems = [
  { name: "LADYCHAIR", imageQuery: "LADYCHAIR elegant silhouette on minimal background", link: "/shapes-lady-chair" },
  { name: "QUITTABLE", imageQuery: "QUITTABLE modern design with clean lines", link: "/shapes-out-table" },
  { name: "UFOCHAIR", imageQuery: "UFOCHAIR futuristic design profile shot", link: "/shapes-ufo-chair" },
]

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.03, boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.1)", transition: { duration: 0.3 } },
}

const shapesProductCardVariants: Variants = {
  ...cardVariants,
  hover: {
    y: -8,
    scale: 1.05,
    boxShadow: "0px 15px 35px -10px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, type: "spring", stiffness: 300 },
  },
}

export default function HomePage() {
  const [activeHero, setActiveHero] = useState(heroNavItems[0])
  const heroRef = useRef<HTMLDivElement>(null)

  // 3D tilt effect for hero image
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })

  // Mouse-driven 3D tilt — use real MotionValues so useTransform works
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        // normalised range −1 … 1
        mouseX.set((event.clientX - rect.left - rect.width / 2) / (rect.width / 2))
        mouseY.set((event.clientY - rect.top - rect.height / 2) / (rect.height / 2))
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) // Subtle parallax scroll

  // Mouse move effect for hero image (optional, can be intensive)
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  // useEffect(() => {
  //   const handleMouseMove = (event: MouseEvent) => {
  //     if (heroRef.current) {
  //       const rect = heroRef.current.getBoundingClientRect()
  //       const x = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2) // Normalize x
  //       const y = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2) // Normalize y
  //       setMousePosition({ x, y })
  //     }
  //   }
  //   window.addEventListener("mousemove", handleMouseMove)
  //   return () => window.removeEventListener("mousemove", handleMouseMove)
  // }, [])

  // Replace the old lines
  // const tiltX = useTransform(mousePosition.y, [-1, 1], [-5, 5])
  // const tiltY = useTransform(mousePosition.x, [-1, 1], [5, -5])

  const tiltX = useTransform(mouseY, [-1, 1], [-5, 5])
  const tiltY = useTransform(mouseX, [-1, 1], [5, -5])

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800 selection:bg-black selection:text-white">
      {/* --- Enhanced Hero Section --- */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex flex-col overflow-hidden text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeHero.id}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <motion.div
              style={{ y: imageY, rotateX: tiltX, rotateY: tiltY, transformPerspective: "1000px" }}
              className="w-full h-full"
            >
              <Image
                src={`/placeholder.svg?width=1920&height=1080&query=${encodeURIComponent(activeHero.imageQuery)}`}
                alt={activeHero.title}
                layout="fill"
                objectFit="cover"
                priority
                className="transform transition-transform duration-300 ease-out" // For smooth tilt
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Darker overlay */}
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start h-full pt-16 pb-8">
          <motion.div
            key={activeHero.id + "-text"} // Ensure text also animates with image
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              {activeHero.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-lg">{activeHero.subtitle}</p>
            <Button
              asChild
              size="lg"
              className="mt-10 bg-white text-black hover:bg-gray-200 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <Link href={activeHero.link}>{activeHero.cta}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Interactive Navigation Triggers for Hero */}
        <div className="relative z-20 mt-auto w-full pb-8 sm:pb-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              {heroNavItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveHero(item)}
                  onMouseEnter={() => setActiveHero(item)}
                  className={`p-3 sm:p-4 text-left rounded-lg transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75
                                    ${activeHero.id === item.id ? "bg-white/20 backdrop-blur-sm" : "bg-white/10 hover:bg-white/20"}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="font-semibold text-sm sm:text-base text-white">{item.title}</h3>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- About Us Section (Example of enhanced styling) --- */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedElement animationType="fadeInLeft" className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">About Us</p>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Studio by Cristian is a modern design studio where creativity meets precision. We specialize in
                transforming spaces into timeless experiences, blending innovative design with meticulous craftsmanship.
                Our passion is to bring your vision to life, creating environments that inspire and endure.
              </p>
              <Button asChild variant="link" className="mt-4 px-0 text-lg text-gray-900 hover:text-gray-700 group">
                <Link href="/about">
                  Learn More About Us{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedElement>
            <AnimatedElement
              animationType="fadeInRight"
              className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-xl shadow-2xl"
            >
              <Image
                src="/placeholder.svg?width=800&height=600"
                alt="Studio by Cristian team or office"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* --- Explore Our Work Section (Parallax with enhanced cards) --- */}
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1920&height=1080"
        imageAlt="Explore our work background"
        minHeight="auto"
        strength={0.1} // Subtle parallax
        overlayClassName="bg-black/70" // Darker overlay for text contrast
        className="py-20 lg:py-32"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <AnimatedElement animationType="fadeInUp" className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">Explore</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Expertise</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {exploreWorkItems.map((item, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.1}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Link href={item.link} className="group block h-full">
                    <Card className="overflow-hidden h-full flex flex-col bg-white/10 backdrop-blur-md text-white border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <CardHeader className="p-0 flex-shrink-0">
                        <div className="aspect-video w-full overflow-hidden">
                          <Image
                            src={`/placeholder.svg?width=800&height=500&query=${encodeURIComponent(item.imageQuery)}`}
                            alt={item.title}
                            width={800}
                            height={500}
                            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <CardTitle className="text-3xl font-semibold">{item.title}</CardTitle>
                          {item.description && (
                            <p className="mt-3 text-gray-300 text-md leading-relaxed">{item.description}</p>
                          )}
                        </div>
                        <div className="mt-6 text-gray-200 group-hover:text-white flex items-center font-medium">
                          Discover More{" "}
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* --- Featured Projects Section --- */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Featured Projects</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of our standout creations, showcasing innovation and attention to detail.
            </p>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {projectGridItems.map((project, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.05}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Link href={project.link || "#"} className="group block h-full">
                    <Card className="overflow-hidden bg-white text-black border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col rounded-xl">
                      <CardHeader className="p-0 flex-shrink-0">
                        <div className="aspect-square w-full overflow-hidden">
                          <Image
                            src={`/placeholder.svg?width=400&height=400&query=${encodeURIComponent(project.imageQuery)}`}
                            alt={project.name}
                            width={400}
                            height={400}
                            className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-5 flex-grow flex items-center">
                        <CardTitle className="text-lg font-medium text-gray-900">{project.name}</CardTitle>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* --- Shapes Collection Section --- */}
      <ParallaxSection
        id="shapes-collection"
        imageUrl="/placeholder.svg?width=1920&height=1080"
        imageAlt="Shapes Collection Background"
        minHeight="auto"
        strength={0.05} // Very subtle parallax
        overlayClassName="bg-black/80"
        className="py-20 lg:py-32"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <AnimatedElement animationType="fadeInUp" className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">Our Products</p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Shapes Collection</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productItems.map((product, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.1}>
                <motion.div
                  variants={shapesProductCardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Link href={product.link || "#"} className="group block h-full">
                    <Card className="overflow-hidden text-center bg-white/10 backdrop-blur-md text-white border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col rounded-xl">
                      <CardHeader className="p-0 flex-shrink-0">
                        <div className="aspect-square w-full overflow-hidden bg-white/5 flex items-center justify-center p-8">
                          <Image
                            src={`/placeholder.svg?width=400&height=400&query=${encodeURIComponent(product.imageQuery)}`}
                            alt={product.name}
                            width={300}
                            height={300}
                            className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-8 flex-grow flex flex-col justify-center">
                        <CardTitle className="text-2xl font-semibold text-white">{product.name}</CardTitle>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* --- Contact Section --- */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Let's Create Something <span className="text-gray-700">Extraordinary.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
                starting to dream, we'd love to hear from you. Reach out to discuss your project, and let's explore the
                possibilities together.
              </p>
              <div className="space-y-4 text-gray-700">
                <Link href="mailto:office@studiobycristian.com" className="flex items-center group">
                  <Mail className="h-5 w-5 mr-3 text-gray-500 transition-colors group-hover:text-black" />
                  <span className="transition-colors group-hover:text-black">office@studiobycristian.com</span>
                </Link>
                <Link href="tel:+31000000000" className="flex items-center group">
                  <Phone className="h-5 w-5 mr-3 text-gray-500 transition-colors group-hover:text-black" />
                  <span className="transition-colors group-hover:text-black">+31 000 000 000 (Placeholder)</span>
                </Link>
                <div className="flex items-start group">
                  <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-500 transition-colors group-hover:text-black" />
                  <span className="transition-colors group-hover:text-black">
                    Our Studio Address, City, Country <br /> (Available by appointment)
                  </span>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight">
              <motion.div
                className="bg-gray-50/50 p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl border border-gray-200/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ContactForm />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  )
}
