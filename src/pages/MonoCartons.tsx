import { Link } from 'react-router-dom'
import { ArrowRight, Package } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'
import RFQCTA from '../sections/RFQCTA'

const cartonTypes = [
  {
    title: 'Perfume Cartons',
    description: 'Elegant folding cartons with premium board and intricate die-cutting for fragrance brands.',
    image: '/images/industry-cosmetics.jpg',
  },
  {
    title: 'Cosmetic Cartons',
    description: 'Soft-touch finishes with spot UV accents for beauty and skincare packaging.',
    image: '/images/gallery-3.jpg',
  },
  {
    title: 'Pharma Cartons',
    description: 'Regulatory compliant with tamper-evident features and precise leaflet integration.',
    image: '/images/industry-pharma.jpg',
  },
  {
    title: 'FMCG Cartons',
    description: 'High-speed compatible with shelf-ready designs and barcode integration.',
    image: '/images/industry-retail.jpg',
  },
  {
    title: 'Retail Cartons',
    description: 'Display-ready packaging with hanging tabs and easy-open features.',
    image: '/images/gallery-9.jpg',
  },
]

const structures = [
  'Straight Tuck',
  'Reverse Tuck',
  'Lock Bottom',
  'Auto-Lock Bottom',
  'Sleeve',
  'Tray',
]

export default function MonoCartons() {
  const cardsRef = useStaggerFadeIn('.carton-card', 0.1)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-ink pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <div className="mb-4">
            <Link to="/" className="text-sm text-white/40 hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-sm text-white/40 mx-2">/</span>
            <Link to="/products/mono-cartons" className="text-sm text-gold">
              Mono Cartons
            </Link>
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Mono Cartons</h1>
          <p className="text-lg text-white/70 max-w-xl">
            Precision folding cartons for every product category. Engineered for performance.
          </p>
        </div>
      </section>

      {/* Types */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl" ref={cardsRef}>
          <div className="mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">Carton Types</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartonTypes.map((carton) => (
              <div key={carton.title} className="carton-card bg-white rounded-lg overflow-hidden hover:shadow-elevated transition-all group border border-sand">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={carton.image}
                    alt={carton.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink mb-2">{carton.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-4">{carton.description}</p>
                  <Link
                    to="/contact"
                    className="text-sm text-gold font-semibold hover:text-gold-light inline-flex items-center gap-2"
                  >
                    Request Sample
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structures */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">Structural Formats</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {structures.map((structure) => (
              <div
                key={structure}
                className="bg-white rounded-lg p-6 flex items-center gap-4 border border-sand hover:border-gold/30 transition-colors"
              >
                <Package className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-sm font-medium text-ink">{structure}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RFQCTA />
    </>
  )
}
