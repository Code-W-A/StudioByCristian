import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedElement from "@/components/animated-element"
import { motion, type Variants } from "framer-motion"

const featuredProjectItems = [
  {
    name: "Dutch Village Concept",
    imageUrl: "/home-page/Village-Concept-Design-1-700x466.jpg.jpeg",
    link: "/dutch-village-concept",
  },
  {
    name: "Suriname Residential Apartments",
    imageUrl: "/home-page/Luxury-Apartment-Design-1-700x466.jpg.jpeg",
    link: "/suriname-apartments-residential-1-furniture",
  },
  {
    name: "Showroom Concept Design",
    imageUrl: "/home-page/Showroom-Design-1-700x466.jpg.jpeg",
    link: "/showroom-concept-design",
  },
  {
    name: "Mauritskade Residential Apartments",
    imageUrl: "/home-page/Elements-Design-Design-1-700x466.jpg.jpeg",
    link: "/mauritskade",
  },
]

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.03, boxShadow: "0px 10px 30px -5px rgba(0,0,0,0.1)", transition: { duration: 0.3 } },
}

export default function FeaturedProjectsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp" className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Featured Projects</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of our standout creations, showcasing innovation and attention to detail.
          </p>
        </AnimatedElement>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjectItems.map((project, index) => (
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
                          src={project.imageUrl}
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
  )
} 