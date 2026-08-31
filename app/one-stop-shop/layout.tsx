import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "One Stop Shop for Interior Projects | Studio ByCristian",
  description: "From a single room upgrade to a complete turn-key interior, Studio byCristian brings design, renovation, custom furniture, production, sourcing and installation together in one coordinated service.",
  keywords: ["one stop shop interior", "interior renovation Netherlands", "turn-key renovation", "custom furniture", "project consultation"],
  alternates: { canonical: "/one-stop-shop" },
  openGraph: { title: "One Stop Shop | Studio ByCristian", description: "Design, renovation, custom furniture, production, sourcing and installation together in one coordinated service.", url: "/one-stop-shop", type: "website" },
}

export default function Layout({ children }: { children: React.ReactNode }) { return children }
