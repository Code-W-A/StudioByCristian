import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"

export default function HeroSectionDesign() {
  return (
    <ParallaxSection
      imageUrl="/design-page/Design-Main-Banner.jpg.jpeg"
      imageAlt="Modern Interior Design"
      strength={0.3}
      minHeight="100vh"
      overlayClassName="bg-black/40"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Design</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We design out of love. We are living optimization enthusiasts and our mission is bringing our client's desires out to light in literally the best shapes possible.
          </p>
        </AnimatedElement>
      </div>
    </ParallaxSection>
  )
} 