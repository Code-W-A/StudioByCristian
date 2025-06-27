import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedElement from "@/components/animated-element"

const designProjects = [
  {
    name: "Laren House Concept",
    imageUrl: "/design-page/Laren-House-Concept-Category-1-1-768x432.jpg.jpeg",
    link: "/laren-house-concept",
  },
  {
    name: "Mauritskade",
    imageUrl: "/design-page/Mauritskade-Category-3-1-768x432.jpg.jpeg",
    link: "/mauritskade",
  },
  {
    name: "Day Care Concept",
    imageUrl: "/design-page/Day-Care-Concept-Category-2-1-768x432.jpg.jpeg",
    link: "/day-care-concept",
  },
  {
    name: "NORITECH Working House",
    imageUrl: "/design-page/NORITECH-Working-House-Category-2-1-768x432.jpg.jpeg",
    link: "/noritech-working-house",
  },
  {
    name: "Chic Parisien Apartment",
    imageUrl: "/design-page/Chic-Parisien-Apartment-Category-768x432.jpg.jpeg",
    link: "/chic-parisien-apartment",
  },
  {
    name: "Dutch Village Concept",
    imageUrl: "/design-page/Dutch-Village-Concept-Category-768x432.jpg.jpeg",
    link: "/dutch-village-concept",
  },
  {
    name: "Walden Apartments Concept",
    imageUrl: "/design-page/Walden-Apartments-Concept-Category-768x432.jpg.jpeg",
    link: "/walden-appartments-concept",
  },
  {
    name: "Harmonie in Holz Showroom Concept",
    imageUrl: "/design-page/Harmonie-in-Holz-Showroom-Concept-Category-768x432.jpg.jpeg",
    link: "/harmonie-in-holz-house",
  },
  {
    name: "Wassenaar House Concept",
    imageUrl: "/design-page/Wassenaar-House-Category-1-768x432.jpg.jpeg",
    link: "/wassenaar-house-concept",
  },
  {
    name: "Private Penthouse",
    imageUrl: "/design-page/Private-Penthouse-Category-1-1-1-768x432.jpg.jpeg",
    link: "/private-penthouse",
  },
  {
    name: "Gradinaru Family Private Douplex House",
    imageUrl: "/STUDIO BY CRISTIAN/Gradinaru-Family-Private-Douplex-House/Gradinaru-Family-Private-Douplex-House-Banner-scaled.jpg.jpeg",
    link: "/gradinaru-family-private-duplex-house",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 },
  },
}

export default function ProjectsGridSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {designProjects.map((project, index) => (
            <AnimatedElement key={project.name} animationType="scaleIn" delay={index * 0.05}>
              <motion.div variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
                <Link
                  href={project.link}
                  className="group block relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-500"
                >
                  {/* Background Image */}
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Text Container with Animated Border */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="relative">
                      {/* Animated Border */}
                      <div className="absolute inset-0 border-2 border-white/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-white/60" />
                      
                      {/* Backdrop Blur Container */}
                      <div className="relative backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-500">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                          {project.name}
                        </h3>
                        
                        {/* Animated Line */}
                        <div className="h-0.5 w-0 bg-white/60 group-hover:w-full transition-all duration-700 ease-out" />
                        
                        {/* Explore Text */}
                        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                          <span className="text-white/80 text-sm font-medium flex items-center">
                            Explore Project 
                            <motion.span 
                              className="ml-2 inline-block"
                              initial={{ x: 0 }}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            >
                              →
                            </motion.span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Accent */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" />
                </Link>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
} 