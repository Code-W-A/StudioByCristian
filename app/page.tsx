"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import AnimatedElement from "@/components/animated-element"
import { motion, type Variants } from "framer-motion"
import ParallaxSection from "@/components/parallax-section"

const heroSlides = [
  { title: "Design", imageQuery: "stunning modern interior design with parallax effect", link: "/design" },
]
const exploreWorkItems = [
  {
    title: "Furniture Production",
    imageQuery: "workshop with tools and wood for furniture",
    link: "/furniture-production",
  },
  { title: "Concept Design", imageQuery: "architectural sketch or 3D model of a concept design", link: "/design" },
]
const projectGridItems = [
  {
    name: "Dutch Village Concept",
    imageQuery: "Dutch Village Concept exterior rendering",
    link: "/dutch-village-concept",
  },
  {
    name: "Suriname Residential Apartments",
    imageQuery: "Suriname Residential Apartments modern interior",
    link: "/suriname-apartments-residential-1-furniture",
  },
  {
    name: "Showroom Concept Design",
    imageQuery: "sleek Showroom Concept Design interior",
    link: "/harmonie-in-holz-house",
  },
  {
    name: "Mauritskade Residential Apartments",
    imageQuery: "Mauritskade Residential Apartments living space",
    link: "/mauritskade",
  },
]
const productItems = [
  { name: "LADYCHAIR", imageQuery: "elegant LADYCHAIR design", link: "/shapes-lady-chair" },
  { name: "QUITTABLE", imageQuery: "modern QUITTABLE design", link: "/shapes-out-table" }, // Updated link
  { name: "UFOCHAIR", imageQuery: "unique UFOCHAIR design", link: "/shapes-ufo-chair" }, // Updated link
]

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, color: "#000000" } },
}

export default function HomePage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl={`/placeholder.svg?width=1600&height=900&query=${encodeURIComponent(heroSlides[0].imageQuery)}`}
        imageAlt={heroSlides[0].title}
        minHeight="75vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl">{heroSlides[0].title}</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="mt-4 max-w-xl text-lg text-gray-200 sm:text-xl">
            Transforming spaces with passion and precision.
          </p>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.4}>
          <Button asChild size="lg" className="mt-8 bg-white text-black hover:bg-gray-200">
            <Link href={heroSlides[0].link}>Explore Our {heroSlides[0].title}</Link>
          </Button>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <AnimatedElement animationType="fadeInLeft">
                <p className="text-sm font-semibold uppercase tracking-wider text-black">About Us</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Who We Are</h2>
                <p className="mt-6 text-lg text-gray-700">Studio by Cristian is a modern design studio...</p>
                <Button asChild variant="link" className="mt-6 px-0 text-lg text-black hover:text-gray-700">
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </AnimatedElement>
            </div>
            <AnimatedElement
              animationType="fadeInRight"
              className="aspect-video w-full overflow-hidden rounded-lg shadow-xl"
            >
              <Image
                src="/placeholder.svg?width=800&height=600"
                alt="Studio by Cristian team"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </AnimatedElement>
          </div>
        </div>
      </section>

      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=800"
        imageAlt="Explore our work background"
        minHeight="auto" // Adjust as needed, or set specific height
        strength={0.15}
        overlayClassName="bg-black/60" // Darker overlay for better text contrast on this section
        className="py-16 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <AnimatedElement animationType="fadeInUp" className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">Explore</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Work</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {exploreWorkItems.map((item, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.1} staggerChildren={0.15}>
                <Link href={item.link} className="group block">
                  <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full flex flex-col bg-white/90 backdrop-blur-sm text-black border-gray-300/50">
                    <CardHeader className="p-0 flex-shrink-0">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?width=800&height=500&query=${encodeURIComponent(item.imageQuery)}`}
                          alt={item.title}
                          width={800}
                          height={500}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <motion.div variants={itemVariants}>
                        <CardTitle className="text-2xl font-semibold text-black">{item.title}</CardTitle>
                      </motion.div>
                      <motion.div variants={itemVariants} className="mt-4">
                        <div className="text-black group-hover:text-gray-700 flex items-center">
                          Discover More <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-gray-700">A selection of our standout creations.</p>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {projectGridItems.map((project, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.05} staggerChildren={0.1}>
                <Link href={project.link || "#"} className="group block h-full">
                  <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-white text-black border-gray-300 h-full flex flex-col">
                    <CardHeader className="p-0 flex-shrink-0">
                      <div className="aspect-square w-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?width=400&height=400&query=${encodeURIComponent(project.imageQuery)}`}
                          alt={project.name}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow flex items-center">
                      <motion.div variants={itemVariants}>
                        <CardTitle className="text-lg font-medium text-black">{project.name}</CardTitle>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection
        id="shapes-collection"
        imageUrl="/placeholder.svg?width=1600&height=800"
        imageAlt="Shapes Collection Background"
        minHeight="auto"
        strength={0.1}
        overlayClassName="bg-black/50"
        className="py-16 lg:py-24"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
          <AnimatedElement animationType="fadeInUp" className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">Our Products</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Shapes Collection</h2>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {productItems.map((product, index) => (
              <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.1} staggerChildren={0.1}>
                <Link href={product.link || "#"} className="group block h-full">
                  <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl text-center bg-white/90 backdrop-blur-sm text-black border-gray-300/50 h-full flex flex-col">
                    <CardHeader className="p-0 flex-shrink-0">
                      <div className="aspect-square w-full overflow-hidden bg-gray-100/50 flex items-center justify-center">
                        <Image
                          src={`/placeholder.svg?width=400&height=400&query=${encodeURIComponent(product.imageQuery)}`}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow flex flex-col justify-center">
                      <motion.div variants={itemVariants}>
                        <CardTitle className="text-xl font-semibold text-black">{product.name}</CardTitle>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Would you like to discuss a project?
              </h2>
              <p className="mt-4 text-lg text-gray-700">We're always excited to hear about new ideas...</p>
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/placeholder.svg?width=600&height=400"
                  alt="Studio by Cristian Logo Detail"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </AnimatedElement>
            <AnimatedElement
              animationType="fadeInRight"
              className="rounded-lg border border-gray-300 bg-white p-6 shadow-lg sm:p-8 lg:p-10"
            >
              <ContactForm />
            </AnimatedElement>
          </div>
        </div>
      </section>
    </div>
  )
}
