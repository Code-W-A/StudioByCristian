import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "One Stop Shop for Interior Projects | Studio ByCristian",
  description: "One partner for interior design, renovation, custom furniture and turn-key delivery. Book a free showroom or online project consultation.",
  keywords: ["one stop shop interior", "interior renovation Netherlands", "turn-key renovation", "custom furniture", "project consultation"],
  alternates: { canonical: "/one-stop-shop" },
  openGraph: { title: "One Stop Shop | Studio ByCristian", description: "Design, renovate, furnish and deliver with one accountable partner.", url: "/one-stop-shop", type: "website" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
