interface ConceptProject {
  id: string
  title: string
  category: string
  imageUrl: string
  link: string
  description: string
}

const conceptProjects: ConceptProject[] = [
  {
    id: "noritech-working-house",
    title: "NORITECH Working House",
    category: "Business",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "/noritech-working-house",
    description: "A modern working house concept with a focus on integration with nature.",
  },
  {
    id: "hub-modular-office-concept",
    title: "HUB Modular Office",
    category: "Business",
    imageUrl: "/placeholder.svg?width=400&height=300",
    link: "/hub-modular-office-concept",
    description: "A flexible and dynamic modular office design for modern businesses.",
  },
]

const ConceptDesignPage = () => {
  return (
    <div>
      <h1>Concept Designs</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {conceptProjects.map((project) => (
          <div key={project.id} style={{ width: "300px", border: "1px solid #ccc", padding: "10px" }}>
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              style={{ width: "100%", height: "auto" }}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ConceptDesignPage
