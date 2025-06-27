import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedElement from "@/components/animated-element"

const furnitureProjects = [
  {
    name: "Mauritskade Apartments",
    imageUrl: "/furniture-production-page/www.studiobycristian.com-1750525148492/Mauritskade-Appartments-Category-1-768x511.jpg.jpeg",
    link: "/mauritskade",
  },
  {
    name: "Suriname Apartments Residential 1",
    imageUrl: "/suriname-apartments-residential-1-furniture/Suriname-Apartments-1.jpg.jpeg",
    link: "/suriname-apartments-residential-1-furniture",
  },
  {
    name: "Suriname Apartments Residential 2",
    imageUrl: "/suriname-apartments-residential-2-furniture/Suriname-Apartments-2-scaled.jpg.jpeg",
    link: "/suriname-apartments-residential-2-furniture",
  },
  {
    name: "Susan and Cyril Apartment",
    imageUrl: "/furniture-production-page/www.studiobycristian.com-1750525148492/Susan-and-Cyril-Apartment-Category-768x511.jpg.jpeg",
    link: "/susan-and-cyril-apartment",
  },
  {
    name: "DERODELOPER Luxury Store",
    imageUrl: "/derodeloper-luxury-store-furniture/DERODELOPER-Luxury-Store-Banner-scaled.jpg.jpeg",
    link: "/derodeloper-luxury-store-furniture",
  },
  {
    name: "Private Home for Kristian & Claudia",
    imageUrl: "/private-home-for-kristian-and-claudia/Private-Home-for-Kristian-and-Claudia-Banner-scaled.jpg.jpeg",
    link: "/private-home-for-kristian-and-claudia",
  },
  {
    name: "Walden BizStay Kitchens",
    imageUrl: "/furniture-production-page/www.studiobycristian.com-1750525148492/Walden-BizStay-Kitchens-Category-768x512.jpg.jpeg",
    link: "/walden-bizstay-kitchens",
  },
  {
    name: "Private Home for Dennis & Mabel",
    imageUrl: "/furniture-production-page/www.studiobycristian.com-1750525148492/Private-Home-for-Dennis-Mabel-Category-1-768x511.jpg.jpeg",
    link: "/private-home-for-dennis-mabel",
  },
  {
    name: "Amsterdam Amsteldijk Double Apartments",
    imageUrl: "/furniture-production-page/www.studiobycristian.com-1750525148492/Amsteldijk-Duplex-Appartments-Category-768x511.jpg.jpeg",
    link: "/amsterdam-amsteldijk-double-apartments",
  },
  {
    name: "Private House Wassenaar",
    imageUrl: "/furniture-production-page/www.studiobycristian.com-1750525148492/Private-House-Wassenaar-Category-1-768x512.jpg.jpeg",
    link: "/private-house-wassenaar",
  },
  {
    name: "Chi Cafe",
    imageUrl: "/furniture-production-page/www.studiobycristian.com-1750525148492/Chi-Cafe-Category-768x513.jpg.jpeg",
    link: "/chi-cafe",
  },
  {
    name: "OBA Amsterdam Library",
    imageUrl: "/furniture-production-page/www.studiobycristian.com-1750525148492/OBA-Amsterdam-Library-Category-1-768x511.jpg.jpeg",
    link: "/oba-amsterdam-library",
  },
  {
    name: "Shapes",
    imageUrl: "/furniture-production-page/www.studiobycristian.com-1750525148492/Shapes-Category-2-768x511.jpg.jpeg",
    link: "/shapes",
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

export default function ProjectsGridSectionFurnitureProduction() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
          {furnitureProjects.map((project, index) => (
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