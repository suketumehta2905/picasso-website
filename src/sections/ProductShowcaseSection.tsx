import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Product {
  title: string
  description: string
  features: string[]
  isHero?: boolean
}

const products: Product[] = [
  {
    title: 'Luxury Rigid Boxes',
    description: 'Premium unboxing experiences',
    features: [
      'Magnetic closures & drawer boxes',
      'Foil stamping, embossing, spot UV',
      'Custom inserts & structures',
      'Perfect for jewelry, beauty, gifts',
    ],
    isHero: true,
  },
  {
    title: 'Premium Paper Bags',
    description: 'Branded carry solutions',
    features: [
      'Twisted, flat, rope handles',
      'Custom branding & logo printing',
      'Eco-friendly options available',
      'Perfect for gifting & retail',
    ],
  },
  {
    title: 'Custom Finishes & Inserts',
    description: 'Elevate perceived value',
    features: [
      'Foil stamping (gold, silver, copper)',
      'Embossing & debossing',
      'Spot UV glossy finishes',
      'Custom tissue, ribbons, inserts',
    ],
  },
]

export default function ProductShowcaseSection() {
  return (
    <section className="bg-ivory section-padding">
      <div className="content-max mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 text-text-dark mb-4">Our Products</h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
            Everything your D2C brand needs to create premium unboxing experiences
          </p>
          <div className="gold-line mx-auto mt-8" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                product.isHero
                  ? 'md:col-span-1 md:row-span-2 bg-gradient-to-b from-gold/10 to-gold/5 border-2 border-gold/30 shadow-xl hover:shadow-2xl'
                  : 'bg-off-white border border-text-muted/10 hover:shadow-card'
              }`}
            >
              <div className="p-8 flex flex-col h-full">
                {product.isHero && (
                  <div className="mb-4 inline-block">
                    <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full">
                      ⭐ HERO PRODUCT
                    </span>
                  </div>
                )}

                <h3 className="text-h2 text-text-dark mb-2">{product.title}</h3>
                <p className="text-body text-gold font-medium mb-6">{product.description}</p>

                <ul className="space-y-4 mb-8 flex-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-gold text-lg leading-none flex-shrink-0">✓</span>
                      <span className="text-body text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 ${
                    product.isHero
                      ? 'text-navy hover:gap-3'
                      : 'text-gold hover:text-gold-dim hover:gap-3'
                  }`}
                >
                  Request Sample
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
