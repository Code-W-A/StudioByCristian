import Image from "next/image"

type Benefit = [string, string]

const eyebrowClass = "text-[10px] uppercase tracking-[0.32em]"
const bodyCopy = "text-[clamp(1rem,1.05vw,1.125rem)] leading-[1.65]"
const container = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"
const imageSrc = "/STUDIO BY CRISTIAN/turn-key-management-private-villa-wassenaar/New House/QY0A9570.jpg"
const imageAlt = "Completed Wassenaar bathroom with twin basins and bespoke floating cabinets"

function BenefitsIndex({ benefits }: { benefits: Benefit[] }) {
  return (
    <ol className="border-t border-white/24">
      {benefits.map(([title, description], index) => (
        <li
          key={title}
          className="group relative grid gap-x-7 gap-y-4 border-b border-white/20 py-8 sm:grid-cols-[3rem_minmax(0,0.82fr)_minmax(0,1.18fr)] sm:py-9 xl:grid-cols-[3.5rem_minmax(12rem,0.78fr)_minmax(18rem,1.22fr)] xl:gap-x-9"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white/80 transition-transform duration-700 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
          />
          <span className="text-[10px] tracking-[0.22em] text-white/38 transition-colors duration-500 group-hover:text-white/75 motion-reduce:transition-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="max-w-[18rem] text-[clamp(1.35rem,1.75vw,1.9rem)] uppercase leading-[1.05] tracking-[-0.025em] text-white sm:col-start-2">
            {title}
          </h3>
          <p className={`max-w-[31rem] text-white/60 transition-colors duration-500 group-hover:text-white/82 sm:col-start-3 motion-reduce:transition-none ${bodyCopy}`}>
            {description}
          </p>
        </li>
      ))}
    </ol>
  )
}

export default function StickyBenefits({ benefits }: { benefits: Benefit[] }) {
  return (
    <div className="bg-[#11110f] py-[clamp(6rem,9vw,9rem)] text-white">
      <div className={container}>
        <div className="grid gap-14 lg:grid-cols-[minmax(19rem,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-16 xl:gap-24">
          <div>
            <p className={`${eyebrowClass} text-white/48`}>Why One Partner</p>
            <h2 className="mt-6 text-[clamp(3.75rem,5.7vw,6.25rem)] uppercase leading-[0.88] tracking-[-0.05em]">
              <span className="block">Works</span>
              <span className="block">better.</span>
            </h2>

            <div className="relative mt-12 aspect-[4/3] overflow-hidden bg-[#292824] sm:aspect-[16/10] lg:mt-16 lg:aspect-[4/5]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                quality={95}
                sizes="(min-width: 1440px) 843px, (min-width: 1024px) 65vw, 115vw"
                className="object-cover object-center transition-transform duration-[1200ms] ease-out hover:scale-[1.025] motion-reduce:transition-none"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
            </div>
          </div>

          <BenefitsIndex benefits={benefits} />
        </div>
      </div>
    </div>
  )
}
