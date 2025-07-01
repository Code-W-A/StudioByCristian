import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"

export default function HeroSectionTurnKeyManagement() {
  return (
    <ParallaxSection
      imageUrl="/turn-key-management-page/Turn-Key-Management-Header-scaled.jpg.jpeg"
      imageAlt="Turn Key Management Hero"
      strength={0.25}
      minHeight="100vh"
      overlayClassName="bg-black/40"
    >
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white">
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Turn Key Management</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
            The complete service of our "shaping ideas" philosophy. We create your space in our minds and we tend to its implementation into reality.
          </p>
        </AnimatedElement>
      </div>
    </ParallaxSection>
  )
} 