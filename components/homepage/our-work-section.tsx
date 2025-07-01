import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { motion, type Variants } from "framer-motion"

// --- Our Work Section Data ---
const ourWorkItems = [
  {
    title: "Custom Furniture",
    imageUrl: "/home-page/Our-Portfolio-Furniture-Production-1-700x466.jpg.jpeg",
    link: "/furniture-production",
    description: "We create custom-made furniture that blends aesthetics, comfort, and function — every piece made to order.",
  },
  {
    title: "Interior Design",
    imageUrl: "/home-page/Our-Portfolio-Concept-Design-1-700x466.jpg.jpeg",
    link: "/wasenaar-house-concept",
    description: " interior concepts that balance beauty and purpose — design that feels good too.",
  },
  {
    title: "Interior Renovation",
    imageUrl: "/home-page/Furniture-Design-Banner-1-scaled.jpg.jpeg",
    link: "/turn-key-management",
    description: "Well-managed, end-to-end renovation services — from the first sketch to the final detail.",
  },
]

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.03, boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.1)", transition: { duration: 0.3 } },
}

export default function OurWorkSection() {
  return (
    <ParallaxSection
      imageUrl="/home-page/Furniture-Production-1-scaled.jpg.jpeg"
      imageAlt="Our work background"
      minHeight="auto"
      strength={0.1} // Subtle parallax
      overlayClassName="bg-black/70" // Darker overlay for text contrast
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <AnimatedElement animationType="fadeInUp" className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">What We Do</h2>
          <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">Furnish. Design. Renovate. Anywhere.</p>
        </AnimatedElement>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ourWorkItems.map((item, index) => (
            <AnimatedElement key={index} animationType="scaleIn" delay={index * 0.1}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link href={item.link} className="group block h-full">
                  <Card className="overflow-hidden h-full flex flex-col bg-white/10 backdrop-blur-md text-white border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="p-0 flex-shrink-0">
                      <div className="aspect-video w-full overflow-hidden">
                        <Image
                          src={item.imageUrl}
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
  )
} 