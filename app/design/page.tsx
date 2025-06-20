import DesignCard from "@/components/DesignCard"

const designProjects = [
  {
    id: "noritech-working-house",
    title: "NORITECH Working House",
    category: "Residential Design",
    imageUrl: "/placeholder.svg?width=400&height=300",
    shortDescription: "Modern residential design for NORITECH employees.",
    link: "/noritech-working-house",
  },
  {
    id: "hub-modular-office-concept",
    title: "HUB Modular Office Concept",
    category: "Commercial Design",
    imageUrl: "/placeholder.svg?width=400&height=300",
    shortDescription: "Innovative and flexible modular office design concept.",
    link: "/hub-modular-office-concept",
  },
]

export default function DesignPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Design Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designProjects.map((project) => (
          <DesignCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
