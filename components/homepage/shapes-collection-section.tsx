import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { motion, type Variants } from "framer-motion"

const shapesProducts = [
  { name: "LADYCHAIR", imageUrl: "/home-page/LadyChair-3-700x466.jpg.jpeg", link: "/shapes-lady-chair" },
  { name: "OUTTABLE", imageUrl: "/home-page/OutTable-1-700x466.jpg.jpeg", link: "/shapes-out-table" },
  { name: "UFOCHAIR", imageUrl: "/home-page/UFOchair-3-700x466.jpg.jpeg", link: "/shapes-ufo-chair" },
]

const shapesProductCardVariants: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    y: -8,
    scale: 1.05,
    boxShadow: "0px 15px 35px -10px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, type: "spring", stiffness: 300 },
  },
}

export default function ShapesCollectionSection() {
  return (
    <ParallaxSection
      id="shapes-collection"
      imageUrl="/home-page/LadyChair-3-700x466.jpg.jpeg"
      imageAlt="Shapes Collection Background"
      minHeight="auto"
      strength={0.05} // Very subtle parallax
      overlayClassName="bg-black/80"
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white">
        <AnimatedElement animationType="fadeInUp" className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">OUR ORIGINAL</h2>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">SHAPES</h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shapesProducts.map((product, index) => (
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
                          src={product.imageUrl}
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
  )
} 