import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Instagram, Mail, Linkedin } from "lucide-react"
import AnimatedElement from "@/components/animated-element"

export default function ContactSectionTurnKeyManagement() {
  return (
    <section className="py-16 lg:py-24 bg-white text-black">
      <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedElement animationType="fadeInUp">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Feel free to contact us</h2>
        </AnimatedElement>
        
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedElement animationType="fadeInUp" delay={0.1} className="flex flex-col items-center">
            <MapPin className="h-10 w-10 text-black mb-3" />
            <p className="text-sm font-medium text-black">Headquarters:</p>
            <p className="text-sm text-gray-600">The Netherlands & Romania</p>
            <p className="text-sm font-medium text-black mt-2">Working Point:</p>
            <p className="text-sm text-gray-600">Austria</p>
          </AnimatedElement>
          
          <AnimatedElement animationType="fadeInUp" delay={0.2} className="flex flex-col items-center">
            <Linkedin className="h-10 w-10 text-black mb-3" />
            <a href="#" className="text-sm font-medium text-black hover:text-gray-700 transition-colors">
              LinkedIn
            </a>
          </AnimatedElement>
          
          <AnimatedElement animationType="fadeInUp" delay={0.3} className="flex flex-col items-center">
            <Instagram className="h-10 w-10 text-black mb-3" />
            <a href="#" className="text-sm font-medium text-black hover:text-gray-700 transition-colors">
              Instagram
            </a>
          </AnimatedElement>
          
          <AnimatedElement animationType="fadeInUp" delay={0.4} className="flex flex-col items-center">
            <Mail className="h-10 w-10 text-black mb-3" />
            <a
              href="mailto:office@studiobycristian.com"
              className="text-sm font-medium text-black hover:text-gray-700 transition-colors"
            >
              office@studiobycristian.com
            </a>
          </AnimatedElement>
        </div>
        
        <AnimatedElement animationType="fadeInUp" delay={0.5}>
          <Button asChild size="lg" className="mt-10 bg-black text-white hover:bg-gray-800">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </AnimatedElement>
      </div>
    </section>
  )
} 