// Centralized testimonials data for consistent use across the site
export interface Testimonial {
  name: string
  company: string
  role: string
  quote: string
  type: string
  projectLink?: string
}

export const allTestimonials: Testimonial[] = [
  {
    name: "Dennis Kellner",
    company: "BizzStay",
    role: "Owner",
    quote: "I've worked with Cristian and the Studio byCristian team for over six years—on everything from small jobs to fully furnished apartments. No matter the challenge, you can always count on them to finish the job and deliver with a smile. They're reliable, focused, and always committed to doing what's best for the client.",
    type: "Long-term Partnership",
    projectLink: "/bizzstay-delft-foto"
  },
  {
    name: "Thijs Mantel",
    company: "Private Client",
    role: "Homeowner",
    quote: "Cristian and his team were hired in 2023 to build the interior of our living room as part of a reconstruction. The design was made by architect Martijn Elzinga. They built and created the kitchen, a door, cupboards and other largely wooden decorations. Even though it was a challenging assignment, also in terms of planning, the end result is magnificent, very beautiful craftsmanship. We are really happy and enjoying it everyday!",
    type: "Beautiful Craftsmanship",
    projectLink: "/thijs-overveen"
  },
  {
    name: "Cassandra Van den Berg", 
    company: "Private Client",
    role: "Homeowner",
    quote: "ByCristian designed and delivered amazing results for us. Our kitchen is an eye catcher and defines the home. The balance of colors, functionality, lighting and Cristian's eye for detail make us really happy with our choice. Aftercare is also very well-appreciated and done without any hassle. Aside from our designer kitchen, Cristian also designed our walk-in closet wardrobes, built-in bathroom cabinets and a large office bookshelf/cabinet. We highly recommend ByCristian for anyone who is looking for quality and attention to detail.",
    type: "Quality & Attention to Detail",
    projectLink: "/cassandra-aerdenhout"
  },
  {
    name: "Olaf Lawerman",
    company: "Project Partner",
    role: "Collaborator",
    quote: "After successfully completing an important and challenging project together with Studio byCristian, I can fairly say both I was pleased with the ways in which we have been collaborating with the company Through many months of working together, I saw that Studio byCristian will not let you down when the project will reach both highs and lows in terms of issues and site management. The team will always be there, flexible, and willing to surpass any difficult moment, ensuring that the good quality of the products that they are delivering remains the same. I would gladly recommend them further.",
    type: "Reliable Partnership",
    projectLink: "/bizzstay-delft-foto"
  },
  {
    name: "Valk Design",
    company: "Laura and Kim",
    role: "Design Partners",
    quote: "Christian and team are hard workers and always willing to deliver beautiful work. Working drawings are extended and on location they are very flexible. Studio by Christian is a good company with friendly people. Our Delft project turned out amazing thanks to Studio by Christian!",
    type: "Professional Partnership",
    projectLink: "/bizzstay-delft-foto"
  },
  {
    name: "Wanise",
    company: "Private Client",
    role: "Homeowner",
    quote: "I have custom made cabinets on my entire house done by 'Studio by Cristian' and I am very happy with the overall result. The cabinets are beautiful, Cristian and the team were very polite, professional and attentive to every detail and wish. Every day they cleaned and tidied up the entire space, treating my home as their own. The price was fair and they delivered everything on the agreed time. I would hire them again with no doubt.",
    type: "Professional Excellence"
  },
  {
    name: "Adee",
    company: "Private Client",
    role: "Homeowner",
    quote: "Studio byCristian and his team did a fantastic job on the custom-made furniture. mastering the difficult task of making something beautiful, functional within the limit of an old construction house.",
    type: "Custom Solutions"
  }
]

// Export specific sets for different contexts
export const featuredTestimonials = allTestimonials.slice(0, 4) // First 4 for homepage
export const credentialsTestimonials = allTestimonials 