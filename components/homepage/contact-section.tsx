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
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-gray-500 transition-colors group-hover:text-black" />
                <div className="transition-colors group-hover:text-black">
                  <div className="font-medium">Headquarters: The Netherlands</div>
                  <div>Van Beverningkstraat 101B, 2582 VC Den Haag, Netherlands</div>
                  <div className="text-sm text-gray-500 mt-1">(Available by appointment)</div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="mt-6">
                <div className="bg-gray-100 rounded-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.1687165324447!2d4.269782877378158!3d52.09034596073154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b18cee7893f1%3A0x55a59501f2eab3db!2sStudio%20byCristian!5e0!3m2!1sen!2snl!4v1735661234567!5m2!1sen!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Studio byCristian Location"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  <Link 
                    href="https://www.google.com/maps/place/Studio+byCristian/@52.0903459,4.2697828,17z/data=!3m1!4b1!4m6!3m5!1s0x47c5b18cee7893f1:0x55a59501f2eab3db!8m2!3d52.0903426!4d4.2723577!16s%2Fg%2F11ybnk5jg4?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    View on Google Maps
                  </Link>
                </p>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animationType="fadeInRight">
            <motion.div
              className="bg-black text-white p-8 sm:p-10 lg:p-12 rounded-xl shadow-2xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
} 