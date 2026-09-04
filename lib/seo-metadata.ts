import type { Metadata } from "next"

type SeoEntry = {
  title: string
  description: string
  keywords: string[]
  openGraphType?: "website" | "article"
}

export const siteName = "Studio ByCristian"
export const siteUrl = "https://www.studiobycristian.com"

const designTerms = ["interior design", "bespoke interiors", "premium interiors", "interior planning"]
const furnitureTerms = ["bespoke furniture", "custom furniture", "custom-made furniture", "high-end furniture"]
const renovationTerms = ["interior renovation", "turn-key management", "design-led renovation", "premium interiors"]
const hospitalityTerms = ["hospitality interiors", "bespoke furniture", "premium interiors", "custom-made furniture"]
const retailTerms = ["retail fit-out", "custom furniture", "bespoke interiors", "high-end furniture"]
const workplaceTerms = ["workplace design", "bespoke interiors", "custom furniture", "premium interiors"]
const archiveTerms = ["work archive", "portfolio", "bespoke interiors", "custom furniture"]
const shapesTerms = ["designer furniture", "collectible furniture", "bespoke furniture", "high-end furniture"]

const page = (title: string, description: string, keywords: string[]): SeoEntry => ({
  title,
  description,
  keywords,
})

const project = (title: string, description: string, keywords: string[]): SeoEntry => ({
  title,
  description,
  keywords,
  openGraphType: "article",
})

const withBrand = (...terms: string[]) => [siteName, ...terms]

const projectKeywords = (projectName: string, terms: string[]) => [projectName, siteName, ...terms]

export const seoEntries = {
  "/": page(
    "Studio ByCristian | Bespoke Furniture & Interior Design",
    "Studio ByCristian creates bespoke furniture, premium interiors, and design-led renovations for residential, retail, hospitality, and workplace spaces.",
    withBrand("bespoke furniture", "custom furniture", "interior design", "bespoke interiors", "premium interiors", "furniture design studio"),
  ),
  "/about": page(
    "About Studio ByCristian | Bespoke Interiors & Craftsmanship",
    "Learn how Studio ByCristian combines interior design, technical planning, custom furniture, and precise execution to deliver premium bespoke interiors.",
    withBrand("interior design studio", "bespoke furniture", "custom-made furniture", "premium interiors", "high-end furniture"),
  ),
  "/amsterdam-amsteldijk-double-apartments": project(
    "Amsterdam Amsteldijk Double Apartments | Studio ByCristian",
    "Amsterdam Amsteldijk Double Apartments showcases a calm Scandinavian interior with built-in furniture designed and crafted by Studio ByCristian for refined rental living.",
    projectKeywords("Amsterdam Amsteldijk Double Apartments", [...renovationTerms, "built-in furniture"]),
  ),
  "/bizzstay-delft": project(
    "BizzStay Delft | Custom Furniture | Studio ByCristian",
    "BizzStay Delft presents custom furniture and tailored interiors by Studio ByCristian for serviced living with hospitality comfort, durability, and clean detailing.",
    projectKeywords("BizzStay Delft", [...furnitureTerms, ...hospitalityTerms, "serviced apartments"]),
  ),
  "/cassandra-aerdenhout": project(
    "Cassandra Aerdenhout | Custom Furniture | Studio ByCristian",
    "Cassandra Aerdenhout highlights bespoke kitchen and library furniture crafted by Studio ByCristian for a refined private residence in the Netherlands.",
    projectKeywords("Cassandra Aerdenhout", [...furnitureTerms, "bespoke kitchen", "library furniture"]),
  ),
  "/chi-cafe": project(
    "Chi Cafe | Bespoke Cafe Interior | Studio ByCristian",
    "Chi Cafe features custom-made furniture and a design-led hospitality atmosphere shaped by Studio ByCristian through precise detailing and warm materiality.",
    projectKeywords("Chi Cafe", [...furnitureTerms, ...hospitalityTerms, "cafe interior"]),
  ),
  "/chic-parisien-apartment": project(
    "Chic Parisien Apartment | Studio ByCristian",
    "Chic Parisien Apartment explores a sophisticated residential concept where Studio ByCristian balances Parisian character, elegant finishes, and bespoke interior planning.",
    projectKeywords("Chic Parisien Apartment", [...designTerms, "luxury apartment"]),
  ),
  "/concept-design": page(
    "Concept Design | Studio ByCristian",
    "Discover concept design references and early-stage interior ideas from Studio ByCristian for bespoke residential and commercial spaces.",
    withBrand("concept design", "interior design", "bespoke interiors", "premium interiors", "design references"),
  ),
  "/contact": page(
    "Contact Studio ByCristian | Bespoke Furniture & Interiors",
    "Contact Studio ByCristian to discuss bespoke furniture, interior design, renovation, or a premium custom interior project.",
    withBrand("contact", "bespoke furniture", "interior design", "premium interiors", "custom furniture"),
  ),
  "/credentials": page(
    "Credentials & Client Testimonials | Studio ByCristian",
    "Read client testimonials, professional highlights, and service credentials that reflect Studio ByCristian's standards in design, fabrication, and project delivery.",
    withBrand("credentials", "client testimonials", "bespoke furniture", "interior design", "project delivery"),
  ),
  "/day-care-concept": project(
    "Day Care Concept | Interior Design | Studio ByCristian",
    "Day Care Concept presents a thoughtful interior proposal by Studio ByCristian, designed to support comfort, clarity, and a welcoming environment for children.",
    projectKeywords("Day Care Concept", [...designTerms, "commercial interiors", "concept design"]),
  ),
  "/duplex-transformation-amsterdam": project(
    "Duplex Transformation Amsterdam | Studio ByCristian",
    "An Amsterdam duplex transformation into two all-electric apartments with new technical systems, custom kitchens, turn-key renovation, and a rooftop extension.",
    projectKeywords("Duplex Transformation Amsterdam", [
      ...renovationTerms,
      "Amsterdam duplex transformation",
      "all-electric apartments",
      "rooftop extension",
      "turn-key renovation",
    ]),
  ),
  "/derodeloper-luxury-store-furniture": project(
    "DERODELOPER Luxury Store | Retail Furniture | Studio ByCristian",
    "DERODELOPER Luxury Store showcases premium retail furniture and refined material detailing executed by Studio ByCristian for a luxury sneaker environment in The Hague.",
    projectKeywords("DERODELOPER Luxury Store", [...retailTerms, "luxury store furniture", "bespoke retail interiors"]),
  ),
  "/design": page(
    "Interior Design & Planning | Studio ByCristian",
    "Explore interior design and planning services by Studio ByCristian, from concept development and material direction to buildable bespoke interiors.",
    withBrand("interior design", "interior planning", "bespoke interiors", "premium interiors", "furniture design studio"),
  ),
  "/dutch-village-concept": project(
    "Dutch Village Concept | Studio ByCristian",
    "Dutch Village Concept presents a design-led residential vision by Studio ByCristian, combining contemporary comfort with calm, contextual material choices.",
    projectKeywords("Dutch Village Concept", [...designTerms, "residential concept"]),
  ),
  "/furniture-production": page(
    "Custom Furniture Production | Studio ByCristian",
    "Discover bespoke furniture production by Studio ByCristian, crafted for refined residential, hospitality, retail, and workplace interiors.",
    withBrand("bespoke furniture", "custom furniture", "custom-made furniture", "high-end furniture", "furniture production"),
  ),
  "/harmonie-in-holz-house": project(
    "Harmonie in Holz Showroom Concept | Studio ByCristian",
    "Harmonie in Holz Showroom Concept explores a warm showroom environment by Studio ByCristian, shaped through natural materials, spatial clarity, and premium presentation.",
    projectKeywords("Harmonie in Holz Showroom Concept", [...designTerms, "showroom concept", "natural materials"]),
  ),
  "/hub-modular-office-concept": project(
    "HUB Modular Office Concept | Studio ByCristian",
    "HUB Modular Office Concept presents a flexible workplace proposal by Studio ByCristian, developed for modern collaboration, modular planning, and clean commercial interiors.",
    projectKeywords("HUB Modular Office Concept", [...workplaceTerms, "office concept"]),
  ),
  "/interior-renovation": page(
    "Interior Renovation & Turn-Key Management | Studio ByCristian",
    "See Studio ByCristian's interior renovation and turn-key management projects, delivered through technical coordination, custom fabrication, and premium finishes.",
    withBrand("interior renovation", "turn-key management", "bespoke interiors", "premium interiors", "design-led renovation"),
  ),
  "/interior-renovation/amsterdam-apartment-1": project(
    "Amsterdam Apartment 1 | Before & After Renovation | Studio ByCristian",
    "Amsterdam Apartment 1 presents a before-and-after renovation by Studio ByCristian, showing how an older interior was transformed into a refined contemporary home.",
    projectKeywords("Amsterdam Apartment 1", [...renovationTerms, "before and after renovation"]),
  ),
  "/interior-renovation/amsterdam-apartment-2": project(
    "Amsterdam Apartment 2 | Before & After Renovation | Studio ByCristian",
    "Amsterdam Apartment 2 shows how Studio ByCristian transformed an attic apartment into a bright, efficient, and elegantly resolved living space.",
    projectKeywords("Amsterdam Apartment 2", [...renovationTerms, "before and after renovation"]),
  ),
  "/interior-renovation/private-villa-wassenaar": project(
    "Private Villa Wassenaar | Before & After Renovation | Studio ByCristian",
    "Private Villa Wassenaar traces a before-and-after renovation by Studio ByCristian, transforming the property into a polished, light-filled family residence.",
    projectKeywords("Private Villa Wassenaar", [...renovationTerms, "villa renovation"]),
  ),
  "/interior-renovation/voorburg-apartment": project(
    "Voorburg Apartment | Before & After Renovation | Studio ByCristian",
    "Voorburg Apartment illustrates how Studio ByCristian reshaped a compact interior into a calmer, more functional, and more refined home.",
    projectKeywords("Voorburg Apartment", [...renovationTerms, "apartment renovation"]),
  ),
  "/laren-house-concept": project(
    "Laren House Concept | Studio ByCristian",
    "Laren House Concept reveals a refined residential design proposal by Studio ByCristian, combining bespoke interiors, elegant materials, and carefully composed living spaces.",
    projectKeywords("Laren House Concept", [...designTerms, "residential concept"]),
  ),
  "/mauritskade-apartments": project(
    "Mauritskade Apartments | Custom Furniture | Studio ByCristian",
    "Mauritskade Apartments showcases custom furniture produced by Studio ByCristian for serviced apartment living, balancing durability, elegance, and efficient space use.",
    projectKeywords("Mauritskade Apartments", [...furnitureTerms, "serviced apartments"]),
  ),
  "/mauritskade-concept-design": project(
    "Mauritskade Concept Design | Studio ByCristian",
    "Mauritskade Concept Design presents Studio ByCristian's early design direction for a residential interior shaped by calm materials, layout clarity, and custom detailing.",
    projectKeywords("Mauritskade Concept Design", [...designTerms, "concept design"]),
  ),
  "/noritech-working-house": project(
    "NORITECH Working House | Studio ByCristian",
    "NORITECH Working House is a timber-based housing concept by Studio ByCristian, designed to provide comfort, practicality, and a welcoming long-stay environment.",
    projectKeywords("NORITECH Working House", [...designTerms, ...workplaceTerms, "timber housing concept"]),
  ),
  "/oba-amsterdam-library": project(
    "OBA Amsterdam Library | Custom Furniture | Studio ByCristian",
    "OBA Amsterdam Library features bespoke library furniture and consistent timber detailing engineered by Studio ByCristian for a cohesive public interior in Amsterdam.",
    projectKeywords("OBA Amsterdam Library", [...furnitureTerms, "library furniture", "public interior"]),
  ),
  "/private-home-for-dennis-mabel": project(
    "Private Home for Dennis & Mabel | Studio ByCristian",
    "Private Home for Dennis & Mabel showcases custom furniture tailored by Studio ByCristian for everyday living, blending function, warmth, and premium craftsmanship.",
    projectKeywords("Private Home for Dennis & Mabel", [...furnitureTerms, "private home"]),
  ),
  "/private-home-for-kristian-and-claudia": project(
    "Private Home for Kristian & Claudia | Studio ByCristian",
    "Private Home for Kristian & Claudia highlights bespoke furniture by Studio ByCristian, created to bring calm materiality and tailored function into a private home.",
    projectKeywords("Private Home for Kristian & Claudia", [...furnitureTerms, "private home"]),
  ),
  "/private-penthouse": project(
    "Private Penthouse | Studio ByCristian",
    "Private Penthouse presents a high-end residential concept by Studio ByCristian, where warm woods, dark accents, and open-plan elegance define the interior.",
    projectKeywords("Private Penthouse", [...designTerms, "luxury apartment", "high-end penthouse"]),
  ),
  "/private-residential-holiday-house": project(
    "Private Residential Holiday House | Studio ByCristian",
    "Private Residential Holiday House documents a full interior design process by Studio ByCristian, from moodboards and 3D concepts to technical drawings and procurement.",
    projectKeywords("Private Residential Holiday House", [...designTerms, "holiday house", "technical drawings"]),
  ),
  "/purelei-store": project(
    "PURELEI Store | Retail Fit-Out | Studio ByCristian",
    "PURELEI Store showcases a refined retail fit-out in Cologne, executed by Studio ByCristian through general contracting, custom display systems, and precise spatial coordination.",
    projectKeywords("PURELEI Store", [...retailTerms, "general contracting", "custom display systems"]),
  ),
  "/ravi-roy-spa-retreat-hotel": project(
    "Ravi Roy Spa Retreat Hotel | Studio ByCristian",
    "Ravi Roy Spa Retreat Hotel presents a wellness and hospitality concept by Studio ByCristian, shaped through calm atmospheres, premium interiors, and guest-focused design.",
    projectKeywords("Ravi Roy Spa Retreat Hotel", [...designTerms, ...hospitalityTerms, "wellness retreat"]),
  ),
  "/satkara-restaurant-turn-key-renovation": project(
    "Satkara Restaurant Amsterdam | Turn-Key Renovation | Studio ByCristian",
    "Satkara is an Indian-Nepalese fine-dining restaurant in Amsterdam delivered by Studio ByCristian through complete turn-key renovation, general contracting, bespoke elements, and custom furniture.",
    projectKeywords("Satkara Restaurant", [
      ...renovationTerms,
      ...hospitalityTerms,
      "Amsterdam restaurant renovation",
      "general contractor",
      "turn-key restaurant renovation",
    ]),
  ),
  "/shapes": page(
    "SHAPES Collection | Designer Furniture | Studio ByCristian",
    "Explore SHAPES, the Studio ByCristian collection of sculptural designer furniture created with expressive form, refined woodworking, and collectible character.",
    withBrand("designer furniture", "collectible furniture", "bespoke furniture", "high-end furniture", "sculptural furniture"),
  ),
  "/shapes-lady-chair": project(
    "Lady Chair | SHAPES Collection | Studio ByCristian",
    "Discover Lady Chair, a sculptural piece from the SHAPES collection by Studio ByCristian, balancing artistic presence, comfort, and refined craftsmanship.",
    projectKeywords("Lady Chair", [...shapesTerms, "walnut chair", "designer chair"]),
  ),
  "/shapes-out-table": project(
    "Out Table | SHAPES Collection | Studio ByCristian",
    "Discover Out Table from the SHAPES collection by Studio ByCristian, a sculptural dining table defined by elegant proportions and crafted walnut character.",
    projectKeywords("Out Table", [...shapesTerms, "designer table", "walnut table"]),
  ),
  "/shapes-spider-kit": project(
    "SPIDER kit | SHAPES Collection | Studio ByCristian",
    "View SPIDER kit by Studio ByCristian, a distinctive table and chair ensemble from the SHAPES collection designed for contemporary spaces and expressive dining settings.",
    projectKeywords("SPIDER kit", [...shapesTerms, "designer table and chairs", "dining set"]),
  ),
  "/shapes-ufo-chair": project(
    "UFO Chair | SHAPES Collection | Studio ByCristian",
    "Explore UFO Chair, a bold sculptural seat from the SHAPES collection by Studio ByCristian, designed as a collectible furniture object with strong material presence.",
    projectKeywords("UFO Chair", [...shapesTerms, "designer chair", "sculptural chair"]),
  ),
  "/sudip-den-haag": project(
    "Sudip Den Haag | Custom Furniture | Studio ByCristian",
    "Sudip Den Haag features bespoke furniture crafted by Studio ByCristian, designed to integrate seamlessly into a refined residential interior with custom functionality.",
    projectKeywords("Sudip Den Haag", [...furnitureTerms, "residential furniture"]),
  ),
  "/suriname-apartments-residential-1-furniture": project(
    "Suriname Apartments Residential 1 | Studio ByCristian",
    "Suriname Apartments Residential 1 presents custom furniture by Studio ByCristian for apartment living, combining durable materials, tailored storage, and refined detailing.",
    projectKeywords("Suriname Apartments Residential 1", [...furnitureTerms, "apartment furniture"]),
  ),
  "/suriname-apartments-residential-2-furniture": project(
    "Suriname Apartments Residential 2 | Studio ByCristian",
    "Suriname Apartments Residential 2 showcases tailored furniture production by Studio ByCristian for premium residential interiors in The Hague.",
    projectKeywords("Suriname Apartments Residential 2", [...furnitureTerms, "apartment furniture"]),
  ),
  "/susan-and-cyril-apartment": project(
    "Susan and Cyril Apartment | Studio ByCristian",
    "Susan and Cyril Apartment highlights custom furniture by Studio ByCristian for a private home in Amsterdam, balancing elegant living with practical daily use.",
    projectKeywords("Susan and Cyril Apartment", [...furnitureTerms, "apartment furniture"]),
  ),
  "/teun-aarden-amsterdam": project(
    "Teun Aarden Amsterdam | Custom Furniture | Studio ByCristian",
    "Teun Aarden Amsterdam features bespoke furniture by Studio ByCristian, created to deliver custom functionality and a polished residential atmosphere.",
    projectKeywords("Teun Aarden Amsterdam", [...furnitureTerms, "residential furniture"]),
  ),
  "/thijs-overveen": project(
    "Thijs Overveen | Custom Furniture | Studio ByCristian",
    "Thijs Overveen showcases custom furniture and tailored interior execution by Studio ByCristian, with refined detailing and made-to-measure craftsmanship.",
    projectKeywords("Thijs Overveen", [...furnitureTerms, "bespoke joinery"]),
  ),
  "/turn-key-management-amsterdam-apartment-1": project(
    "Amsterdam Apartment 1 | Turn-Key Renovation | Studio ByCristian",
    "Amsterdam Apartment 1 documents Studio ByCristian's turn-key renovation delivery, from build progression and site coordination to the final interior result.",
    projectKeywords("Amsterdam Apartment 1", [...renovationTerms, "turn-key renovation"]),
  ),
  "/turn-key-management-amsterdam-apartment-2": project(
    "Amsterdam Apartment 2 | Turn-Key Renovation | Studio ByCristian",
    "Amsterdam Apartment 2 documents Studio ByCristian's turn-key renovation process, connecting the build phase, detailed coordination, and a resolved final apartment interior.",
    projectKeywords("Amsterdam Apartment 2", [...renovationTerms, "turn-key renovation"]),
  ),
  "/turn-key-management-private-villa-wassenaar": project(
    "Private Villa Wassenaar | Turn-Key Renovation | Studio ByCristian",
    "Private Villa Wassenaar documents a full turn-key renovation by Studio ByCristian, covering technical execution, phased transformation, and premium residential detailing.",
    projectKeywords("Private Villa Wassenaar", [...renovationTerms, "turn-key renovation"]),
  ),
  "/turn-key-management-voorburg-apartment": project(
    "Voorburg Apartment | Turn-Key Renovation | Studio ByCristian",
    "Voorburg Apartment documents Studio ByCristian's turn-key renovation process, connecting the build phase, custom solutions, and finished living spaces.",
    projectKeywords("Voorburg Apartment", [...renovationTerms, "turn-key renovation"]),
  ),
  "/unusual-spaces": project(
    "Unusual Spaces | Custom Furniture | Studio ByCristian",
    "Unusual Spaces reveals a bold Utrecht workplace executed by Studio ByCristian through turn-key furniture contracting, custom fabrication, and precise coordination.",
    projectKeywords("Unusual Spaces", [...furnitureTerms, ...workplaceTerms, "turn-key furniture"]),
  ),
  "/vbs-kitchen-and-living": project(
    "VBS Kitchen and Living | Custom Furniture | Studio ByCristian",
    "VBS Kitchen and Living presents bespoke kitchen and living furniture by Studio ByCristian, designed for elegant daily use and seamless residential integration.",
    projectKeywords("VBS Kitchen and Living", [...furnitureTerms, "bespoke kitchen", "living room furniture"]),
  ),
  "/walden-appartments-concept": project(
    "Walden Apartments Concept | Studio ByCristian",
    "Walden Apartments Concept explores a residential design direction by Studio ByCristian, combining calm geometry, material balance, and bespoke interior planning.",
    projectKeywords("Walden Apartments Concept", [...designTerms, "apartment concept"]),
  ),
  "/walden-bizstay-kitchens": project(
    "Walden BizStay Kitchens | Custom Kitchens | Studio ByCristian",
    "Walden BizStay Kitchens showcases a large-scale custom kitchen production project by Studio ByCristian for serviced apartments in The Hague.",
    projectKeywords("Walden BizStay Kitchens", [...furnitureTerms, "custom kitchens", "serviced apartments"]),
  ),
  "/wasenaar-house-concept": project(
    "Wasenaar House Concept | Studio ByCristian",
    "Wasenaar House Concept presents a residential transformation vision by Studio ByCristian, refreshing a private home through Scandinavian finishes and thoughtful planning.",
    projectKeywords("Wasenaar House Concept", [...designTerms, "house concept", "residential transformation"]),
  ),
  "/wassenaar-house-concept": project(
    "Wassenaar House Concept | Studio ByCristian",
    "Wassenaar House Concept explores a detailed residential concept by Studio ByCristian, from mood and layout to bathrooms, wardrobes, and outdoor living.",
    projectKeywords("Wassenaar House Concept", [...designTerms, "house concept", "residential interiors"]),
  ),
  "/wassenaar-plan-2000": project(
    "Wassenaar Plan 2000 | Custom Furniture | Studio ByCristian",
    "Wassenaar Plan 2000 highlights custom furniture by Studio ByCristian, combining precision-made joinery, timeless materials, and tailored residential comfort.",
    projectKeywords("Wassenaar Plan 2000", [...furnitureTerms, "joinery", "residential comfort"]),
  ),
  "/work-archive": page(
    "Work Archive | Studio ByCristian",
    "Browse the Studio ByCristian archive of bespoke interiors, luxury stores, private homes, and hospitality projects.",
    withBrand(...archiveTerms, "luxury stores", "private homes", "restaurants and hotels"),
  ),
  "/work-archive/luxury-stores": page(
    "Luxury Stores | Work Archive | Studio ByCristian",
    "Browse luxury store projects from the Studio ByCristian work archive, featuring refined retail interiors, bespoke furniture, and premium fit-outs.",
    withBrand(...archiveTerms, "luxury stores", "retail fit-out", "bespoke retail interiors"),
  ),
  "/work-archive/private-homes": page(
    "Private Homes | Work Archive | Studio ByCristian",
    "Explore private home projects in the Studio ByCristian archive, from bespoke furniture and premium interiors to full residential transformations.",
    withBrand(...archiveTerms, "private homes", "bespoke furniture", "premium interiors"),
  ),
  "/work-archive/restaurants-hotels": page(
    "Restaurants & Hotels | Work Archive | Studio ByCristian",
    "Discover hospitality projects in the Studio ByCristian archive, featuring bespoke furniture, custom interiors, and elegant restaurant and hotel environments.",
    withBrand(...archiveTerms, "restaurants", "hotels", "hospitality interiors", "bespoke furniture"),
  ),
  "/yoga-and-office-claudia-pedersen": project(
    "Yoga and Office Claudia Pedersen | Custom Furniture | Studio ByCristian",
    "Yoga and Office Claudia Pedersen showcases bespoke furniture by Studio ByCristian, designed to support focused work and restorative daily rituals in one interior.",
    projectKeywords("Yoga and Office Claudia Pedersen", [...furnitureTerms, "home office furniture", "wellness interior"]),
  ),
} as const satisfies Record<string, SeoEntry>

export function getPageMetadata(path: keyof typeof seoEntries): Metadata {
  const entry = seoEntries[path]

  return {
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: path,
      siteName,
      locale: "en_US",
      type: entry.openGraphType ?? "website",
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
