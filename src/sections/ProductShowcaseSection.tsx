import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Product {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  structures: string[]
  finishes: string[]
  moq: string
  leadTime: string
  customSizes: boolean
  category: 'all' | 'rigid' | 'bags' | 'inserts' | 'sustainable'
}

const products: Product[] = [
  {
    id: 'rigid',
    title: 'Premium Rigid Boxes',
    subtitle: 'Magnetic closures, foil, embossing',
    image: '/Kimi Images/picasso_website_images/03_products_rigid.jpg',
    description: 'Our flagship product. Rigid boxes with magnetic closures, custom inserts, and premium finishes that turn unboxing into a brand moment.',
    structures: ['Magnetic closure', 'Drawer-style', 'Book-style', 'Custom shapes', 'Lid & base'],
    finishes: ['Gold foil stamping', 'Silver foil stamping', 'Copper foil stamping', 'Embossing / Debossing', 'Spot UV glossy', 'Matte lamination', 'Soft-touch coating'],
    moq: '500 units',
    leadTime: '4-6 weeks',
    customSizes: true,
    category: 'all' || 'rigid',
  },
  {
    id: 'bags',
    title: 'Branded Paper Bags',
    subtitle: 'Twisted, rope & flat handles',
    image: '/Kimi Images/picasso_website_images/04_products_bags.jpg',
    description: 'Branded carry bags for retail, gifting, events, and premium stores. Turn every customer carryout into a moving brand impression.',
    structures: ['V-bottom', 'Square-bottom', 'SOS', 'Rope-handle', 'Twisted-handle'],
    finishes: ['Kraft paper', 'Art paper', 'Recycled', 'FSC-certified', 'Custom printing'],
    moq: '1,000 units',
    leadTime: '3-5 weeks',
    customSizes: true,
    category: 'all' || 'bags',
  },
  {
    id: 'inserts',
    title: 'Custom Inserts',
    subtitle: 'Foam, velvet, molded pulp',
    image: '/Kimi Images/picasso_website_images/05_products_inserts.jpg',
    description: 'Add perceived value through finishing, structure and presentation details. Small packaging details make your product feel more premium and gift-worthy.',
    structures: ['EVA foam', 'Velvet', 'Molded pulp', 'Cardboard dividers', 'Die-cut cavities'],
    finishes: ['Ribbon pulls', 'Magnetic holders', 'Custom embossing', 'Dye options', 'Texture finishes'],
    moq: '500 units',
    leadTime: '4-6 weeks',
    customSizes: true,
    category: 'all' || 'inserts',
  },
  {
    id: 'sustainable',
    title: 'Sustainable Options',
    subtitle: 'FSC-certified, recycled, bio',
    image: '/Kimi Images/picasso_website_images/06_products_sustainable.jpg',
    description: 'Eco-friendly packaging options that maintain quality and cost competitiveness. Same price as standard, 100% certified & audited.',
    structures: ['FSC Certified Paper', 'Recycled Content 30-80%', 'Biodegradable', 'Plastic-free', 'Soy-based inks'],
    finishes: ['Water-based inks', 'Eco-coating', 'Natural dyes', 'Minimal processing', 'Compostable'],
    moq: '500 units',
    leadTime: '4-6 weeks',
    customSizes: true,
    category: 'all' || 'sustainable',
  },
]

const filterOptions: { label: string; value: 'all' | 'rigid' | 'bags' | 'inserts' | 'sustainable' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Rigid Boxes', value: 'rigid' },
  { label: 'Paper Bags', value: 'bags' },
  { label: 'Inserts', value: 'inserts' },
  { label: 'Sustainable', value: 'sustainable' },
]

export default function ProductShowcaseSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<'all' | 'rigid' | 'bags' | 'inserts' | 'sustainable'>('all')

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.id === activeFilter)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="content-max mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-5xl font-bold text-ink mb-4">Everything You Need to Create Unforgettable Unboxing</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            From rigid boxes to sustainable alternatives — find the perfect format for your product and budget.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === option.value
                  ? 'bg-gold text-ink'
                  : 'bg-stone text-ink hover:bg-sand'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-sand rounded-xl overflow-hidden bg-white hover:shadow-card transition-shadow"
            >
              {/* Collapsed Header */}
              <button
                onClick={() => toggleExpand(product.id)}
                className="w-full flex items-center gap-4 p-6 hover:bg-stone transition-colors text-left"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 rounded object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ink">{product.title}</h3>
                  <p className="text-sm text-text-muted">{product.subtitle}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                    expandedId === product.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedId === product.id && (
                <div className="px-6 pb-6 border-t border-sand bg-stone/50">
                  <p className="text-text-muted mb-8">{product.description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-ink text-sm uppercase tracking-wider mb-4">Structure Options</h4>
                      <ul className="space-y-2">
                        {product.structures.map((item, idx) => (
                          <li key={idx} className="text-sm text-text-muted flex items-start gap-3">
                            <span className="text-gold font-bold flex-shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-sm uppercase tracking-wider mb-4">Finish Options</h4>
                      <ul className="space-y-2">
                        {product.finishes.map((item, idx) => (
                          <li key={idx} className="text-sm text-text-muted flex items-start gap-3">
                            <span className="text-gold font-bold flex-shrink-0">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 mb-8 border border-sand">
                    <h4 className="font-bold text-ink text-sm uppercase tracking-wider mb-4">Specifications</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gold font-bold">MOQ:</span> {product.moq}
                      </div>
                      <div>
                        <span className="text-gold font-bold">Lead Time:</span> {product.leadTime}
                      </div>
                      <div className="md:col-span-2">
                        <span className="text-gold font-bold">Custom Sizes:</span> {product.customSizes ? 'Yes' : 'No'}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 px-6 py-3 bg-gold text-ink font-bold rounded-lg hover:bg-gold-light transition-colors">
                      Request a Sample
                    </button>
                    <Link to="/contact" className="flex-1 px-6 py-3 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold/10 transition-colors text-center">
                      Get a Quote
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <Link to="/products" className="inline-flex items-center gap-2 bg-gold text-ink font-bold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors">
            Explore All Products
            <ChevronDown className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  )
}
