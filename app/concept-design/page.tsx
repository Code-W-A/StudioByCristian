import type { Metadata } from "next"
import DesignCard from "@/components/design-card"
import { getPageMetadata } from "@/lib/seo-metadata"

export const metadata: Metadata = getPageMetadata("/concept-design")

export default function ConceptDesignPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Concept Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DesignCard project={{ title: "Design 1", shortDescription: "A cool design" }} />
        <DesignCard project={{ title: "Design 2", shortDescription: "Another cool design" }} />
        <DesignCard project={{ title: "Design 3", shortDescription: "Yet another cool design" }} />
      </div>
    </main>
  )
}
