import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'
import RFQCTA from '../sections/RFQCTA'

const bagTypes = [
  {
    title: 'Kraft Paper Bags',
    description: 'Natural, eco-friendly bags in various GSM weights. Perfect for organic brands and sustainable positioning.',
    image: '/images/product-paper-bags.jpg',
  },
  {
    title: 'Luxury Laminated Bags',
    description: 'Gloss or matte laminated finishes with premium feel. Ideal for retail and boutique brands.',
    image: '/images/gallery-1.jpg',
  },
  {
    title: 'Twisted Handle Bags',
    description: 'Classic twisted paper handles with reinforced bottoms. The standard for quality retail.',
    image: '/images/gallery-1.jpg',
  },
  {
    title: 'Flat Handle Bags',
    description: 'Sleek flat paper handles for a minimalist look. Popular for fashion and lifestyle brands.',
    image: '/images/product-paper-bags.jpg',
  },
  {
    title: 'Rope Handle Bags',
    description: 'Premium cotton or nylon rope handles. The choice for luxury gifting and high-end retail.',
    image: '/images/gallery-11.jpg',
  },
  {
    title: 'SOS Bags',
    description: 'Self-opening square bags for food service. Grease-resistant options available.',
    image: '/images/gallery-6.jpg',
  },
  {
    title: 'Food-Grade Takeaway Bags',
    description: 'FDA-compliant materials for direct food contact. Heat-resistant and durable.',
    image: '/images/industry-qsr.jpg',
  },
  {
    title: 'Custom Branded Bags',
    description: 'Full-color printing with your logo, patterns, and brand colors. Any size, any quantity.',
    image: '/images/gallery-11.jpg',
  },
]

const specs = [
  { feature: 'GSM Range', value: '80 - 350' },
  { feature: 'Paper Types', value: 'Kraft, Art, Ivory, Duplex' },
  { feature: 'Handle Types', value: 'Twisted, Flat, Rope, D-cut' },
  { feature: 'Printing', value: 'Offset, Screen, UV' },
  { feature: 'Finishes', value: 'Gloss, Matte, Spot UV, Emboss' },
  { feature: 'MOQ', value: '500 units' },
]

export default function PaperBags() {
  const cardsRef = useStaggerFadeIn('.bag-card', 0.08)

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
            <Link to="/products/paper-bags" className="text-sm text-gold">
              Paper Bags
            </Link>
          </div>
          <h1 className="text-5xl font-black text-white mb-4">Luxury Paper Bags That Carry Your Brand Beyond the Counter</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Custom printed paper bags for retail, gifting, QSR, fashion, pharma, and D2C brands.
            Choose kraft, art paper, duplex, rope handles, twisted handles, lamination, foil, and more.
            Order from 500 units with fast turnaround.
          </p>
        </div>
      </section>

      {/* Product Types */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl" ref={cardsRef}>
          <div className="mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">Paper Bag Types</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bagTypes.map((bag) => (
              <div key={bag.title} className="bag-card bg-white rounded-lg overflow-hidden hover:shadow-elevated transition-all group border border-sand">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={bag.image}
                    alt={bag.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink mb-2">{bag.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-4">{bag.description}</p>
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

      {/* Specifications */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">Technical Specifications</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="bg-white rounded-lg overflow-hidden border border-sand">
            <table className="w-full">
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={spec.feature}
                    className={`${i % 2 === 0 ? 'bg-stone/30' : 'bg-white'} border-b border-sand`}
                  >
                    <td className="px-8 py-5 text-sm font-medium text-ink w-1/3">
                      {spec.feature}
                    </td>
                    <td className="px-8 py-5 text-sm text-ink/70">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="bg-charcoal py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <ShoppingBag className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Any Size</h3>
              <p className="text-sm text-white/70">From tiny jewelry bags to large retail carriers.</p>
            </div>
            <div className="p-8">
              <ShoppingBag className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Any Print</h3>
              <p className="text-sm text-white/70">Full-color offset, screen, or UV printing.</p>
            </div>
            <div className="p-8">
              <ShoppingBag className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Any Volume</h3>
              <p className="text-sm text-white/70">From 500 units to millions per month.</p>
            </div>
          </div>
        </div>
      </section>

      <RFQCTA />
    </>
  )
}
