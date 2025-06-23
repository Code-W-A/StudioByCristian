import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"
import AnimatedElement from "@/components/animated-element"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/home-page/Contact-1.jpg.jpeg"
          alt="Contact background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedElement animationType="fadeInLeft" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Would you like to discuss a project?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're passionate about bringing unique visions to life. Whether you have a clear concept or are just
              starting to dream, we'd love to hear from you. Reach out to discuss your project, and let's explore the
              possibilities together.
            </p>
            <div className="space-y-4 text-gray-700">
              <Link href="mailto:office@studiobycristian.com" className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-gray-500 transition-colors group-hover:text-black" />
                <span className="transition-colors group-hover:text-black">office@studiobycristian.com</span>
              </Link>
              <Link href="tel:+31000000000" className="flex items-center group">
                <Phone className="h-5 w-5 mr-3 text-gray-500 transition-colors group-hover:text-black" />
                <span className="transition-colors group-hover:text-black">+31 000 000 000 (Placeholder)</span>
              </Link>
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-500 transition-colors group-hover:text-black" />
                <span className="transition-colors group-hover:text-black">
                  Our Studio Address, City, Country <br /> (Available by appointment)
                </span>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInRight">
            <motion.div
              className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl border border-black/20 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Corner accents */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/40" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/40" />
              <ContactForm />
            </motion.div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
} 