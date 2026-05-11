import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Product {
  title: string
  tagline: string
  description: string
  bestFor: string[]
  features: string[]
  primaryCTA: string
  secondaryCTA: string
  isHero?: boolean
}

const products: Product[] = [
  {
    title: 'Luxury Rigid Boxes',
    tagline: '⭐ Hero Product',
    description: 'Premium boxes for gifting, retail, jewelry, cosmetics and corporate hampers. Create a stronger first impression with rigid boxes designed for premium presentation, protection and brand recall.',
    bestFor: ['Jewelry', 'Perfumes', 'Beauty products', 'Luxury gifts', 'Electronics', 'Dry fruits', 'Corporate hampers'],
    features: [
      'Magnetic closure, drawer-style, lid-and-base and collapsible boxes',
      'Custom inserts for bottles, jars, jewelry, electronics and gift sets',
      'Premium finishes like foil stamping, embossing, debossing and spot UV',
      'Strong board construction for a luxury unboxing experience'
    ],
    primaryCTA: 'Explore Rigid Boxes',
    secondaryCTA: 'Request Sample',
    isHero: true,
  },
  {
    title: 'Custom Paper Bags',
    tagline: 'Branded Carry Bags',
    description: 'Branded carry bags for retail, gifting, events, QSR and premium stores. Turn every customer carryout into a moving brand impression.',
    bestFor: ['Retail stores', 'Boutiques', 'Restaurants', 'Bakeries', 'Events', 'Exhibitions', 'Corporate gifting'],
    features: [
      'V-bottom, square-bottom, SOS, rope-handle and twisted-handle bags',
      'Kraft, art paper, duplex and laminated options',
      'Custom size, logo printing and premium handle options',
      'Recyclable and food-grade options available'
    ],
    primaryCTA: 'Explore Paper Bags',
    secondaryCTA: 'Get Bag Recommendation',
  },
  {
    title: 'Finishes, Inserts & Enhancements',
    tagline: 'Perceived Value Add',
    description: 'Add perceived value through finishing, structure and presentation details. Small packaging details can make your product feel more premium and gift-worthy.',
    bestFor: ['Luxury packaging', 'Festive gifting', 'Product launches', 'Influencer kits', 'Retail display packaging'],
    features: [
      'Gold, silver, copper and holographic foil stamping',
      'Embossing, debossing, spot UV and soft-touch lamination',
      'Custom inserts, sleeves, ribbons, tissue paper and belly bands',
      'Structural prototyping to test fit, opening feel and presentation'
    ],
    primaryCTA: 'View Finish Options',
    secondaryCTA: 'Talk to Expert',
  },
]

export default function ProductShowcaseSection() {
  return (
    <section className="bg-ivory section-padding">
      <div className="content-max mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-h1 text-text-dark mb-4">Our Packaging Solutions</h2>
          <p className="text-body text-text-muted max-w-3xl">
            Premium packaging built for brands that want to be remembered. From luxury rigid boxes to custom paper bags and finishing enhancements, Picasso Print & Pack helps brands create packaging that looks premium, feels reliable, and supports real-world retail, gifting, and delivery needs.
          </p>
          <div className="gold-line mt-8" />
        </div>

        {/* Products Grid - Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Hero Product - Large Left Side */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold/30 rounded-xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <span className="text-xs font-bold text-gold bg-gold/10 px-4 py-2 rounded-full inline-block mb-6 w-fit">
                {products[0].tagline}
              </span>

              <h3 className="text-h2 text-text-dark mb-3">{products[0].title}</h3>
              <p className="text-sm text-text-muted mb-6 leading-relaxed">{products[0].description}</p>

              <div className="mb-8">
                <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">Best For:</p>
                <div className="flex flex-wrap gap-2">
                  {products[0].bestFor.map((item, idx) => (
                    <span key={idx} className="text-xs bg-gold/10 text-text-dark px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex-1">
                <ul className="space-y-3">
                  {products[0].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary text-sm px-6 py-2">
                  {products[0].primaryCTA}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="border-2 border-gold text-gold text-sm font-semibold px-6 py-2 rounded-lg hover:bg-gold/5 transition-colors">
                  {products[0].secondaryCTA}
                </button>
              </div>
            </div>
          </div>

          {/* Stacked Cards - Right Side */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {products.slice(1).map((product, idx) => (
              <div
                key={idx}
                className="bg-off-white border border-text-muted/10 rounded-xl p-6 hover:shadow-card transition-all duration-300 flex flex-col"
              >
                <span className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">
                  {product.tagline}
                </span>

                <h3 className="text-h4 text-text-dark mb-2">{product.title}</h3>
                <p className="text-xs text-text-muted mb-4 leading-relaxed">{product.description}</p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gold uppercase mb-2">Best For:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.bestFor.slice(0, 3).map((item, i) => (
                      <span key={i} className="text-xs bg-off-white text-text-dark px-2 py-0.5 rounded border border-text-muted/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 flex-1">
                  <ul className="space-y-2">
                    {product.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-gold text-lg leading-none flex-shrink-0">✓</span>
                        <span className="text-xs text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <Link to="/contact" className="btn-primary text-xs px-4 py-1.5 text-center">
                    {product.primaryCTA}
                  </Link>
                  <button className="border border-gold text-gold text-xs font-semibold px-4 py-1.5 rounded hover:bg-gold/5 transition-colors">
                    {product.secondaryCTA}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Strip */}
        <div className="bg-navy rounded-lg p-8 text-center border border-gold/20">
          <h4 className="text-h4 text-ivory mb-4">From Concept to Final Delivery</h4>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-ivory/80">
            <div>📐 Custom Size Guidance</div>
            <div>📋 Material Selection</div>
            <div>✨ Finish Recommendation</div>
            <div>🎁 Sampling</div>
            <div>📦 Bulk Production</div>
            <div>🚚 Pan-India Delivery</div>
          </div>
        </div>
      </div>
    </section>
  )
}
