import { getPageMetadata } from "@/lib/seo-metadata"

export const metadata = getPageMetadata("/satkara-restaurant-turn-key-renovation")

export default function SatkaraRestaurantLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
