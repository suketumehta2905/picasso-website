import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const industries = [
  {
    name: 'QSR & Food',
    description: 'Food-grade compliance, grease resistance, takeaway optimization.',
    image: '/images/industry-qsr.jpg',
  },
  {
    name: 'Pharmaceuticals',
    description: 'Tamper-evident, regulatory compliant, batch-tracked.',
    image: '/images/industry-pharma.jpg',
  },
  {
    name: 'Cosmetics & Beauty',
    description: 'Premium finishes, magnetic closures, unboxing experiences.',
    image: '/images/industry-cosmetics.jpg',
  },
  {
    name: 'Jewelry & Luxury',
    description: 'Satin inserts, foam precision, velvet-touch exteriors.',
    image: '/images/industry-jewelry.jpg',
  },
  {
    name: 'Retail & FMCG',
    description: 'Shelf-ready, high-speed compatible, barcode-integrated.',
    image: '/images/industry-retail.jpg',
  },
  {
    name: 'Education',
    description: 'Bulk optimization, durable materials, cost-effective.',
    image: '/images/industry-education.jpg',
  },
]

export default function IndustrySolutions() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const scrollAmount = 340
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
    setTimeout(checkScroll, 300)
  }

  return (
    <section className="bg-kraft section-padding">
      <div className="content-max mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-h1 text-text-dark mb-4">Built for Your Industry</h2>
            <div className="gold-line" />
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-text-dark/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-text-dark" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-text-dark/20 flex items-center justify-center hover:bg-gold hover:border-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-text-dark" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
        >
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex-shrink-0 w-[280px] md:w-[320px] snap-start"
            >
              <div className="relative h-[400px] rounded overflow-hidden group">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 overlay-gradient" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-h3 text-ivory mb-2">{industry.name}</h3>
                  <p className="text-sm text-ivory/70">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
