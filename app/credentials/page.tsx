"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"

const teamMembers = [
  {
    name: "Cristian Petre",
    role: "Founder & Lead Designer",
    imageQuery: "professional portrait of Cristian Petre",
    bio: "Cristian Petre is the visionary founder of Studio by Cristian, bringing years of international experience and a passion for innovative design to every project. His approach combines aesthetic elegance with functional precision.",
  },
  {
    name: "Claudia Petre",
    role: "Project Manager & Co-founder",
    imageQuery: "professional portrait of Claudia Petre",
    bio: "Claudia Petre oversees project management and client relations, ensuring seamless execution from concept to completion. Her dedication to detail and client satisfaction is paramount to the studio's success.",
  },
]

const expertiseSections = [
  {
    title: "Interior Architecture & Design Concept Development",
    content:
      "We begin by establishing the optimal functions for your space, considering all architectural possibilities. Using this foundation, we develop detailed computer-generated visualizations. This collaborative process ensures we achieve the best outcome, perfectly tailored to your vision and requirements. Our concepts are built on a deep understanding of spatial dynamics and aesthetic principles.",
    imageQuery: "moodboard for interior design concept with fabric swatches and sketches",
  },
  {
    title: "Furniture Production",
    content:
      "Our dedicated Furniture Production department allows our skilled artisans to bring ideas to life. We work with a diverse range of materials, from wood and laminates to metal, solid surfaces, fabrics, glass, and marble. We produce custom furniture pieces and collaborate with leading global furniture brands, ensuring quality and innovation in every piece.",
    imageQuery: "craftsman meticulously working on a custom wooden furniture piece in a workshop",
  },
  {
    title: "Turn Key Management",
    content:
      "From the initial concept to the final installation, we offer comprehensive Turn Key Management. This service ensures a stress-free process for our clients, as we handle every detail, coordinate all stakeholders, and oversee the entire project lifecycle. Our goal is to deliver exceptional spaces, flawlessly executed and ready for enjoyment.",
    imageQuery: "stylized set of keys on an architectural blueprint signifying project completion",
  },
]

export default function CredentialsPage() {
  return (
    <div className="bg-white text-black">
      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=700"
        imageAlt="Credentials Hero"
        minHeight="50vh"
        strength={0.2}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Credentials</h1>
        </AnimatedElement>
        <AnimatedElement animationType="fadeInUp" delay={0.2}>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 sm:text-xl">
            Our expertise, philosophy, and the dedicated team behind Studio by Cristian.
          </p>
        </AnimatedElement>
      </ParallaxSection>

      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Our Expertise</h2>
            <p className="mt-4 text-lg text-gray-700">
              We offer a comprehensive suite of services to bring your vision to life, from initial concept to final
              execution.
            </p>
          </AnimatedElement>
          <div className="space-y-12 lg:space-y-20">
            {expertiseSections.map((section, index) => (
              <AnimatedElement key={section.title} animationType="fadeInUp" delay={index * 0.1}>
                <div
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:grid-flow-row-dense" : ""}`}
                >
                  <div
                    className={`aspect-video w-full overflow-hidden rounded-lg shadow-xl ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <Image
                      src={`/placeholder.svg?width=800&height=600&query=${encodeURIComponent(section.imageQuery)}`}
                      alt={section.title}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <h3 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">{section.title}</h3>
                    <p className="mt-4 text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection
        imageUrl="/placeholder.svg?width=1600&height=600"
        imageAlt="Our Philosophy Background"
        minHeight="40vh"
        strength={0.15}
        overlayClassName="bg-black/60"
        className="py-16 lg:py-24"
      >
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <AnimatedElement animationType="fadeInUp">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Philosophy</h2>
            <p className="mt-6 text-xl text-gray-200 italic leading-relaxed">
              &ldquo;We believe that great design is born from a deep understanding of our clients' needs and
              aspirations. It's about creating spaces that are not only beautiful but also deeply personal and
              functional. Our commitment is to shaping ideas into tangible realities that inspire and endure.&rdquo;
            </p>
          </AnimatedElement>
        </div>
      </ParallaxSection>

      <section className="py-16 lg:py-24 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp" className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-700">
              The driving force behind our creative solutions and successful projects.
            </p>
          </AnimatedElement>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
            {teamMembers.map((member) => (
              <AnimatedElement
                key={member.name}
                animationType="scaleIn"
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-full shadow-lg mb-6">
                  <Image
                    src={`/placeholder.svg?width=300&height=300&query=${encodeURIComponent(member.imageQuery)}`}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                <p className="text-sm font-medium text-gray-600">{member.role}</p>
                <p className="mt-3 text-gray-700 text-sm max-w-xs">{member.bio}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
