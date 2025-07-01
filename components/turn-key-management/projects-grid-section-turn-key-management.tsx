import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedElement from "@/components/animated-element"

const turnKeyProjects = [
  {
    name: "Private Villa Wassenaar",
    description: "The flipping of this lovely property was a challenge we loved to undertake. Trimming down the old and bringing in the new Scandinavian high-quality finishes and fixtures gave this private residence a revitalizing new life.",
    imageUrl: "/turn-key-management-page/Private-Villa-Wassenaar-Category-1-768x511.jpg.jpeg",
    link: "/turn-key-management-private-villa-wassenaar",
  },
  {
    name: "Amsterdam Apartment 1",
    description: "Brightness, peace of mind and comfort envelop our experience when stepping into this space.",
    imageUrl: "/turn-key-management-page/Amsterdam-1-Category-768x512.jpg.jpeg",
    link: "/turn-key-management-amsterdam-apartment-1",
  },
  {
    name: "Amsterdam Apartment 2",
    description: "This Amsterdam Apartment greets us with Scandinavian simplicity and elegance. The built-in furnishings are designed and carefully manufactured by our team of designers and carpenters.",
    imageUrl: "/turn-key-management-page/Amsterdam-Duplex-Category-768x511.jpg.jpeg",
    link: "/turn-key-management-amsterdam-apartment-2",
  },
  {
    name: "Voorburg Apartment",
    description: "The house renovation implied peeling off all the preexisting layers, updating installations, adding new lights making a full renovation and optimizing the space.",
    imageUrl: "/turn-key-management-page/Voorburg-Category-768x512.jpg.jpeg",
    link: "/turn-key-management-voorburg-apartment",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
}

export default function ProjectsGridSectionTurnKeyManagement() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {turnKeyProjects.map((project, index) => (
            <AnimatedElement key={project.name} animationType="fadeInUp" delay={index * 0.1}>
              <motion.div 
                variants={cardVariants} 
                initial="hidden" 
                animate="visible" 
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`lg:grid lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative group overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video w-full overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
                    
                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>

                  {/* Content Section */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <motion.div variants={cardVariants}>
                      <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                        {project.name}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {project.description}
                      </p>
                      
                      <Link
                        href={project.link}
                        className="group inline-flex items-center text-black hover:text-gray-700 font-medium text-lg transition-colors duration-300"
                      >
                        Explore Project
                        <motion.div
                          className="ml-2"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                          <ArrowRight className="h-5 w-5" />
                        </motion.div>
                      </Link>
                      
                      {/* Decorative line */}
                      <div className="mt-4 h-0.5 w-16 bg-black/20 group-hover:w-24 group-hover:bg-black/40 transition-all duration-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
} 