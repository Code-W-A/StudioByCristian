/** Public root for this project (matches `public/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar`). */
export const WASSENAAR_PUBLIC_ROOT =
  "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar" as const

/** Encode each path segment so `&`, spaces, etc. are valid in `next/image` URLs. */
export function wassenaarAsset(relativePath: string) {
  const encoded = relativePath
    .split("/")
    .filter((segment) => segment.length > 0)
    .map((segment) => encodeURIComponent(segment))
    .join("/")
  return `${WASSENAAR_PUBLIC_ROOT}/${encoded}`
}

export const WASSENAAR_HERO_IMAGE = wassenaarAsset("New House/optimized/HERO.webp")
