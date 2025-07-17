import Image from "next/image"
import Link from "next/link"
import AnimatedElement from "@/components/animated-element"
import { motion, type Variants } from "framer-motion"

const featuredProjectItems = [
  {
    name: "BizzStay Delft Project",
    imageUrl: "/featured-projects-extra/BizzSaty_Delft-Project.png",
    link: "/bizzstay-delft-foto",
  },
  {
    name: "Residential Thijs Overveen",
    imageUrl: "/extra Custom Furniture/Thijs_Overveen/Featured Projects overvee.jpg",
    link: "/thijs-overveen",
  },
  {
    name: "Hotel Concept Design",
    imageUrl: "/ravy-roy-new-pics/Reception/Reception_01.jpg",
    link: "/ravi-roy-spa-retreat-hotel",
  },
  {
    name: "Mauritskade Residential Apartments",
    imageUrl: "/STUDIO BY CRISTIAN/mauritskade/Mauritskade-Banner-scaled.jpg.jpeg",
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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background Geometric Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 border border-black rotate-45" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-black rotate-12" />
        <div className="absolute top-2/3 left-1/3 w-32 h-32 border border-black -rotate-12" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <AnimatedElement animationType="fadeInUp" className="mb-20 text-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Featured Projects
              </h2>
              {/* Elegant underline - Hidden on mobile */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="hidden lg:block absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 rounded-full"
              />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Complete, high-quality interior solutions for residential, hospitality, and commercial spaces — locally and internationally.
            </motion.p>
          </div>
        </AnimatedElement>

        {/* Sophisticated Asymmetric Layout */}
        <div className="space-y-8">
          {/* First Row - Two Items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Large Featured Project */}
            <AnimatedElement animationType="fadeInLeft" className="lg:col-span-2">
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="group h-full"
              >
                <Link href={featuredProjectItems[0].link} className="block h-full">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 h-[500px] bg-gray-100">
                    <Image
                      src={featuredProjectItems[0].imageUrl}
                      alt={featuredProjectItems[0].name}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                    
                    {/* Sophisticated Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                    
                    {/* Floating Content Card */}
                    <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="backdrop-blur-xl bg-white/10 rounded-xl p-4 lg:p-8 border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-500"
                      >
                        <h3 className="text-xl lg:text-3xl font-bold text-white mb-2 lg:mb-4 leading-tight">
                          {featuredProjectItems[0].name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 lg:w-12 h-px bg-white/60" />
                            <span className="text-white/80 text-xs lg:text-sm font-medium tracking-wide uppercase">
                              Featured Project
                            </span>
                          </div>
                          <motion.div
                            whileHover={{ x: 8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="hidden lg:flex items-center space-x-2 text-white/90 font-medium"
                          >
                            <span>Explore</span>
                            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white/60 transition-colors duration-300">
                              →
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Geometric Accent */}
                    <div className="absolute top-8 right-8 w-16 h-16 border-2 border-white/30 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200" />
                  </div>
                </Link>
              </motion.div>
            </AnimatedElement>

            {/* Smaller Project */}
            <AnimatedElement animationType="fadeInRight" delay={0.1}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="group h-full"
              >
                <Link href={featuredProjectItems[1].link} className="block h-full">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-[500px] bg-gray-100">
                    <Image
                      src={featuredProjectItems[1].imageUrl}
                      alt={featuredProjectItems[1].name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 group-hover:to-black/70 transition-all duration-500" />
                    
                    <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-auto lg:max-w-lg lg:min-w-80">
                      <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                        <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3 leading-tight text-left">
                          {featuredProjectItems[1].name}
                        </h3>
                        <div className="flex items-center text-white/70 group-hover:text-white/90 transition-colors duration-300">
                          <span className="text-sm font-medium">View Project</span>
                          <motion.span
                            className="ml-2 hidden lg:inline"
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatedElement>
          </div>

          {/* Second Row - Two Items Reversed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Smaller Project */}
            <AnimatedElement animationType="fadeInLeft" delay={0.2}>
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="group h-full"
              >
                <Link href={featuredProjectItems[2].link} className="block h-full">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-[400px] bg-gray-100">
                    <Image
                      src={featuredProjectItems[2].imageUrl}
                      alt={featuredProjectItems[2].name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 group-hover:to-black/70 transition-all duration-500" />
                    
                    <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-auto lg:max-w-lg lg:min-w-80">
                      <div className="backdrop-blur-sm bg-white/5 rounded-lg p-4 lg:p-6 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                        <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3 leading-tight text-left">
                          {featuredProjectItems[2].name}
                        </h3>
                        <div className="flex items-center text-white/70 group-hover:text-white/90 transition-colors duration-300">
                          <span className="text-sm font-medium">View Project</span>
                          <motion.span
                            className="ml-2 hidden lg:inline"
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatedElement>

            {/* Large Featured Project */}
            <AnimatedElement animationType="fadeInRight" delay={0.3} className="lg:col-span-2">
              <motion.div
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="group h-full"
              >
                <Link href={featuredProjectItems[3].link} className="block h-full">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 h-[400px] bg-gray-100">
                    <Image
                      src={featuredProjectItems[3].imageUrl}
                      alt={featuredProjectItems[3].name}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-tl from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                    
                    <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="backdrop-blur-xl bg-white/10 rounded-xl p-4 lg:p-8 border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-500"
                      >
                        <h3 className="text-xl lg:text-3xl font-bold text-white mb-2 lg:mb-4 leading-tight">
                          {featuredProjectItems[3].name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 lg:w-12 h-px bg-white/60" />
                            <span className="text-white/80 text-xs lg:text-sm font-medium tracking-wide uppercase">
                              Featured Project
                            </span>
                          </div>
                          <motion.div
                            whileHover={{ x: 8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="hidden lg:flex items-center space-x-2 text-white/90 font-medium"
                          >
                            <span>Explore</span>
                            <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:border-white/60 transition-colors duration-300">
                              →
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white/30 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200" />
                  </div>
                </Link>
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  )
} 