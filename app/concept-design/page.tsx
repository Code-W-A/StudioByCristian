import DesignCard from "@/components/design-card"

export default function ConceptDesignPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Concept Designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DesignCard title="Design 1" description="A cool design" />
        <DesignCard title="Design 2" description="Another cool design" />
        <DesignCard title="Design 3" description="Yet another cool design" />
      </div>
    </main>
  )
}
