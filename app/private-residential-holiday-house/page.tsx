"use client"

import Image from "next/image"
import AnimatedElement from "@/components/animated-element"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

const projectDetails = {
  title: "Private Residential Holiday House",
  category: "Interior Design",
  heroImage: "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/02.Sabina%26Viorel%20Leganaru%20_%20Living%20u2.jpg",
  description: "We want to share with you how we address an interior design project presenting you the main steps:",
  processSteps: {
    moodboard: {
      title: "1. Moodboard & Survey",
      description: "Firstly, after meeting and speaking to our clients, we compose a Mood board in order to start a vision based on the meeting feedback. We measure the space, create a plan solution and propose a mood for the spaces using relevant suggestive images, colours and textures.",
      image: "/extra%20design/Horezu%20Holiday%20House/1_Moodboard%20si%20releveu/Sabina%20%26%20Viorel%20Leganaru%20_%20Moodboard_page-0001.jpg"
    },
    concept3D: {
      title: "2. 3D Concept", 
      description: "Based on the information gathered, we start tailoring the aesthetic of the space with the help of 3D visualizations. We utilise 3D visualisations as a tool in the design process, not a destination. Flexibility is required as the project may meet variations during the implementation process. The beneficiaries wished for a luminous open space, with wood elements, a touch of classic in the form of milled doors and custom décor from the Romanian Brancovenesc style.",
      rooms: {
        living: {
          title: "Living Room",
          images: [
            "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/02.Sabina%26Viorel%20Leganaru%20_%20Living%20u2.jpg",
            "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/04.Sabina%26Viorel%20Leganaru%20_%20Bucatarie%20u1.jpg",
            "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/06.Sabina%26Viorel%20Leganaru%20_%20Bucatarie%20u3.jpg"
          ]
        },
        masterBedroom: {
          title: "Master Bedroom & Bathroom",
          images: [
            "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/07.Sabina%26Viorel%20Leganaru%20_%20Dormitor%20Matrimonial%20u1.jpg",
            "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/08.Sabina%26Viorel%20Leganaru%20_%20Dormitor%20Matrimonial%20u2.jpg",
            "/extra design/Horezu Holiday House/2_Conceptul 3D/10.Baie Matrimoniala u1 v1.jpg"
          ]
        },
        otherRooms: {
          title: "Daughter's Bedroom & Grandmother's Bedroom",
          images: [
            "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/18.Sabina%26Viorel%20Leganaru%20_%20Dormitor%20Daria%20u1.jpg",
            "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/20.Sabina%26Viorel%20Leganaru%20_%20Dormitor%20Daria%20u3.jpg",
            "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/16.Sabina%26Viorel%20Leganaru%20_%20Dormitor%20Bunica%20u2.jpg",
            "/extra%20design/Horezu%20Holiday%20House/2_Conceptul%203D/17.Sabina%26Viorel%20Leganaru%20_%20Dormitor%20Bunica%20u1.jpg"
          ]
        },
        bathroom: {
          title: "Common Bathroom",
          images: [
            "/extra design/Horezu Holiday House/2_Conceptul 3D/13.Baie Comuna u1 v1.jpg",
            "/extra design/Horezu Holiday House/2_Conceptul 3D/15.Baie Comuna u3 v1.jpg"
          ]
        }
      }
    },
    planUpdates: {
      title: "3. Plan Updates",
      description: "We adapt the 3D concept to the house plan, synchronising every element. The plumbing, light fixtures and furniture are settled in a well-balanced composition.",
      images: [
        "/extra design/Horezu Holiday House/3_Planuri si Desene Tehncie/01.Sabina si Viorel Leganaru_Plan Mobilare_2023.08.16_page-0001.jpg",
        "/extra design/Horezu Holiday House/3_Planuri si Desene Tehncie/02.Sabina si Viorel Leganaru_Plan Electrice Noi_2023.08.16_page-0001.jpg"
      ]
    },
    technicalDrawings: {
      title: "4. Technical Drawings",
      description: "The proposed custom furniture or décor items are being detailed in a technical sheet, ready for execution.",
      images: [
        "/extra design/Horezu Holiday House/3_Planuri si Desene Tehncie/03.Sabina si Viorel Leganaru_Plan Plinta si Placari Pereti_2023.08.16_page-0001.jpg",
        "/extra design/Horezu Holiday House/3_Planuri si Desene Tehncie/04.Sabina si Viorel Leganaru_Plan Finisaje Pereti_2023.08.16_page-0001.jpg"
      ]
    },
    finalDeliverables: {
      title: "5. Purchase List & Price Offers",
      description: "At the end of the interior design project, our clients receive all the information they need to create their dream spaces. Clients can also choose to address our implementation project offer, which is separate from the design phase."
    }
  },
  location: "Horezu, Romania",
  status: "Design Complete",
  service: "Interior Design, 3D Visualization, Technical Documentation",
  sectors: "Residential",
  area: "Holiday House",
  client: "Sabina & Viorel Leganaru"
}

export default function PrivateResidentialHolidayHousePage() {
  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <ParallaxSection
        imageUrl={projectDetails.heroImage}
        imageAlt={projectDetails.title + " Hero Image"}
        minHeight="70vh"
        strength={0.3}
        overlayClassName="bg-black/40"
      >
        <AnimatedElement animationType="fadeInUp">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-300">{projectDetails.category}</p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl md:text-6xl">{projectDetails.title}</h1>
        </AnimatedElement>
      </ParallaxSection>

      {/* Back Button */}
      <section className="pt-12 pb-6 lg:pt-16 lg:pb-8 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/design">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                Our Interior Design Process
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {projectDetails.description}
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Step 1: Moodboard Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.processSteps.moodboard.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.processSteps.moodboard.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Moodboard Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={projectDetails.processSteps.moodboard.image}
                    alt="Moodboard for Private Residential Holiday House"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Step 2: 3D Concept Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            {/* 3D Concept Introduction */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                {projectDetails.processSteps.concept3D.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {projectDetails.processSteps.concept3D.description}
              </p>
            </div>

            {/* Living Room */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold text-black mb-8 text-center">
                {projectDetails.processSteps.concept3D.rooms.living.title}
              </h4>
              <div className="grid md:grid-cols-3 gap-8">
                {projectDetails.processSteps.concept3D.rooms.living.images.map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Living room view ${index + 1}`}
                        width={600}
                        height={450}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>

            {/* Master Bedroom & Bathroom */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold text-black mb-8 text-center">
                {projectDetails.processSteps.concept3D.rooms.masterBedroom.title}
              </h4>
              <div className="grid md:grid-cols-3 gap-8">
                {projectDetails.processSteps.concept3D.rooms.masterBedroom.images.map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Master bedroom and bathroom view ${index + 1}`}
                        width={600}
                        height={450}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>

            {/* Other Bedrooms */}
            <div className="mb-20">
              <h4 className="text-2xl font-bold text-black mb-8 text-center">
                {projectDetails.processSteps.concept3D.rooms.otherRooms.title}
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projectDetails.processSteps.concept3D.rooms.otherRooms.images.map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Bedroom view ${index + 1}`}
                        width={600}
                        height={450}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>

            {/* Common Bathroom */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-black mb-8 text-center">
                {projectDetails.processSteps.concept3D.rooms.bathroom.title}
              </h4>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {projectDetails.processSteps.concept3D.rooms.bathroom.images.map((image, index) => (
                  <AnimatedElement
                    key={index}
                    animationType="fadeInUp"
                    delay={index * 0.1}
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`Common bathroom view ${index + 1}`}
                        width={600}
                        height={450}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                        style={{ aspectRatio: '4/3' }}
                      />
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Step 3: Plan Updates Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:grid-flow-col-dense">
              {/* Text Content */}
              <div className="space-y-6 lg:col-start-2">
                <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {projectDetails.processSteps.planUpdates.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {projectDetails.processSteps.planUpdates.description}
                </p>
                <div className="pt-6">
                  <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Plan Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 lg:col-start-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={projectDetails.processSteps.planUpdates.images[0]}
                    alt="Floor plan with furniture layout"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: '4/3' }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Additional plan image */}
            <AnimatedElement animationType="fadeInUp" delay={0.2}>
              <div className="relative overflow-hidden rounded-xl shadow-md bg-gray-100">
                <Image
                  src={projectDetails.processSteps.planUpdates.images[1]}
                  alt="Electrical plan"
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
            </AnimatedElement>
          </AnimatedElement>
        </div>
      </section>

      {/* Step 4: Technical Drawings Section */}
      <section className="py-16 lg:py-20 bg-gray-50 text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                {projectDetails.processSteps.technicalDrawings.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {projectDetails.processSteps.technicalDrawings.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projectDetails.processSteps.technicalDrawings.images.map((image, index) => (
                <AnimatedElement
                  key={index}
                  animationType="fadeInUp"
                  delay={index * 0.1}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-gray-100">
                    <Image
                      src={image}
                      alt={`Technical drawing ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      style={{ aspectRatio: '4/3' }}
                    />
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Step 5: Final Deliverables Section */}
      <section className="py-16 lg:py-20 bg-white text-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedElement animationType="fadeInUp">
            <div className="text-center">
              <h3 className="text-3xl font-bold tracking-tight text-black sm:text-4xl mb-8">
                {projectDetails.processSteps.finalDeliverables.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {projectDetails.processSteps.finalDeliverables.description}
              </p>
              <div className="pt-8 mx-auto">
                <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-300 rounded-full mx-auto"></div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>



      {/* Back Button Bottom */}
      <section className="py-12 lg:py-16 bg-white text-black">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedElement animationType="fadeInUp">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white text-black border-gray-300 hover:bg-gray-100"
            >
              <Link href="/design">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back To Design Projects
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedElement animationType="fadeInLeft" className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
                starting to dream, we'd love to hear from you. Reach out to discuss your project, and let's explore the
                possibilities together.
              </p>
              <div className="space-y-4 text-gray-700">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Headquarters:</strong> The Netherlands<br />
                    
                  </p>
                  <div className="flex space-x-4">
                    <Link href="https://ro.linkedin.com/company/studiobycristian" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">LinkedIn</Link>
                    <Link href="https://www.instagram.com/studiobycristian/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors">Instagram</Link>
                  </div>
                  <Link 
                    href="mailto:office@studiobycristian.com" 
                    className="block text-gray-700 hover:text-black transition-colors"
                  >
                    office@studiobycristian.com
                  </Link>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animationType="fadeInRight">
              <motion.div
                className="bg-black text-white p-8 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Corner accents */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40" />
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                  Would you like to discuss a project?
                </h2>
                
                {/* Decorative line */}
                <div className="w-24 h-0.5 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-8" />
                
                <ContactForm />
              </motion.div>
            </AnimatedElement>
          </div>
        </div>
      </section>

    </div>
  )
} 