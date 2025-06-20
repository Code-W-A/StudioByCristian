"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"

export interface DesignCardProps {
  project: {
    id: string
    title: string
    category?: string
    imageUrl: string
    shortDescription?: string
    link: string
  }
}

/**
 * Generic card used on Design / Concept-Design overview pages.
 * It expects a `project` object and renders an image, title and a “View Details” link.
 */
export default function DesignCard({ project }: DesignCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col bg-white text-black border-gray-300 transition-shadow duration-300 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
        {project.shortDescription && <p className="mt-2 text-sm text-gray-600">{project.shortDescription}</p>}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={project.link} className="text-sm font-medium text-black hover:text-gray-700 flex items-center">
          View Details <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}
