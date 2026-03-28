import type { ReactNode } from "react"

const emphasisClassName = "font-semibold text-black"

function Emphasis({ children }: { children: ReactNode }) {
  return <span className={emphasisClassName}>{children}</span>
}

export default function AboutIntroText() {
  return (
    <>
      <Emphasis>Studio byCristian</Emphasis>{" "}
      is a design & build studio specialized in{" "}
      <Emphasis>general contracting and management</Emphasis>,{" "}
      <Emphasis>custom furniture</Emphasis>,{" "}
      <Emphasis>interior design</Emphasis>, and{" "}
      <Emphasis>turn-key interior renovations</Emphasis>.{" "}
      We help our clients bring their spaces to life — with tailored solutions that combine thoughtful design,
      functional detail, and premium craftsmanship.{" "}
      From cozy homes to boutique hotels, lively restaurants to stylish offices, our work adapts to every need —
      always with a clear, personal vision at the core.
    </>
  )
}
