import Link from "next/link"
import { Linkedin, Instagram, Mail, MapPin } from "lucide-react"

export default function Footer() {
  const iconColor = "text-white" // Icons will be white on black background

  return (
    <footer className="border-t border-gray-700 bg-black text-gray-300">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Menu</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/design" className="text-sm text-gray-400 hover:text-white">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/furniture-production" className="text-sm text-gray-400 hover:text-white">
                  Furniture Production
                </Link>
              </li>
              <li>
                <Link href="/turn-key-management" className="text-sm text-gray-400 hover:text-white">
                  Turn Key
                </Link>
              </li>
              <li>
                <Link href="/work-archive" className="text-sm text-gray-400 hover:text-white">
                  Work Archive
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  Credentials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className={`h-5 w-5 mr-2 mt-0.5 ${iconColor} flex-shrink-0`} />
                <span className="text-sm text-gray-400">
                  Headquarters: The Netherlands & Romania
                  <br />
                  Working Point: Austria
                </span>
              </li>
              <li className="flex items-center">
                <Mail className={`h-5 w-5 mr-2 ${iconColor} flex-shrink-0`} />
                <a href="mailto:office@studiobycristian.com" className="text-sm text-gray-400 hover:text-white">
                  office@studiobycristian.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Social</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center">
                <Linkedin className={`h-5 w-5 mr-2 ${iconColor} flex-shrink-0`} />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center">
                <Instagram className={`h-5 w-5 mr-2 ${iconColor} flex-shrink-0`} />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Philosophy</h3>
            <p className="mt-4 text-3xl font-light italic text-gray-400">
              &ldquo;Shaping <span className="font-semibold text-white">ideas</span>&rdquo;
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-500">Copyright {new Date().getFullYear()} &copy; Studio by Cristian</p>
        </div>
      </div>
    </footer>
  )
}
