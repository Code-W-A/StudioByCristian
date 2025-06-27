import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

// Using Libre Baskerville as a similar serif font to GFS Didot available on Google Fonts
const gfsDidotAlternative = Libre_Baskerville({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: "Studio by Cristian - Interior Design",
  description: "Modern interior design and furniture production.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/sigla/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/sigla/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/sigla/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/sigla/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/sigla/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/sigla/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/sigla/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/sigla/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/sigla/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/sigla/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/sigla/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/sigla/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/sigla/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/sigla/ms-icon-144x144.png', sizes: '144x144', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${gfsDidotAlternative.className} bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
