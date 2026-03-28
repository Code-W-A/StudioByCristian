import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            We are dedicated to providing high-quality services and products. Learn more about our mission and values.
          </p>
        </div>

        {/* Menu Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="text-sm text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm text-gray-400 hover:text-white">
                Products
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/credentials" className="text-sm text-gray-400 hover:text-white">
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

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400">Email: info@example.com</p>
          <p className="text-sm text-gray-400">Phone: +1 555-123-4567</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
