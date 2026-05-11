import { useEffect, useRef } from 'react'

const clients = [
  'TATA',
  'Reliance',
  'HDFC',
  'ICICI',
  'Loreal',
  'Nykaa',
  'Myntra',
  'Zomato',
  'Swiggy',
  'Flipkart',
  'Amazon',
  'Patanjali',
]

export default function TrustStrip() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Duplicate for seamless loop
    const track = trackRef.current
    if (track && track.children.length < 24) {
      const children = Array.from(track.children)
      children.forEach((child) => {
        const clone = child.cloneNode(true)
        track.appendChild(clone)
      })
    }
  }, [])

  return (
    <section className="bg-kraft py-10 overflow-hidden">
      <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] mb-6">
        <p className="text-caption text-navy/60 text-center">
          TRUSTED BY LEADING BRANDS ACROSS INDIA
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div ref={trackRef} className="marquee-track">
          {clients.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <span className="text-xl md:text-2xl font-bold text-navy/30 uppercase tracking-wider whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
