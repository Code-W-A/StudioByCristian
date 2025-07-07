import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"

export default function HeroSectionFurnitureProduction() {
  return (
    <ParallaxSection
      imageUrl="/extra Custom Furniture/Cassandra_Aerdenhout/_EWP5992.jpg"
      imageAlt="Cassandra Aerdenhout Custom Furniture"
      strength={0.25}
      minHeight="100vh"
      overlayClassName="bg-black/40"
    >
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center text-white">

        <AnimatedElement animationType="fadeInUp" delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Furniture Production</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
          Pieces raging from custom built – in furniture and stand – alone original creations.          </p>
        </AnimatedElement>
      </div>
    </ParallaxSection>
  )
} 