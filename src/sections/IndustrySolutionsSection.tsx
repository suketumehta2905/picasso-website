import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Industry {
  name: string
  icon: string
  painPoints: string[]
  benefits: string[]
  color: string
}

const industries: Industry[] = [
  {
    name: 'Beauty & Cosmetics',
    icon: '💄',
    painPoints: ['Premium positioning', 'Unboxing experiences', 'Luxury finishes'],
    benefits: [
      'Magnetic closures for luxury feel',
      'Foil stamping & embossing',
      'Custom tissue & ribbons',
    ],
    color: 'from-pink/10 to-rose/10',
  },
  {
    name: 'Jewelry & Luxury Goods',
    icon: '💎',
    painPoints: ['Premium perception', 'Product protection', 'Brand prestige'],
    benefits: [
      'Drawer boxes for elegant presentation',
      'Specialty finishes for exclusivity',
      'Custom inserts & padding',
    ],
    color: 'from-purple/10 to-indigo/10',
  },
  {
    name: 'Gifting & Subscriptions',
    icon: '🎁',
    painPoints: ['Unboxing moments', 'Brand experience', 'Custom inserts'],
    benefits: [
      'Premium rigid boxes',
      'Tissue & ribbon customization',
      'Branded unboxing sequences',
    ],
    color: 'from-blue/10 to-cyan/10',
  },
  {
    name: 'Apparel & Fashion',
    icon: '👗',
    painPoints: ['Brand alignment', 'Luxury positioning', 'Memorable unboxing'],
    benefits: [
      'Custom-sized rigid boxes',
      'Specialty finishes matching aesthetic',
      'Premium structural options',
    ],
    color: 'from-green/10 to-emerald/10',
  },
]

export default function IndustrySolutionsSection() {
  return (
    <section className="bg-navy-light section-padding">
      <div className="content-max mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 text-ivory mb-4">Industry Solutions</h2>
          <p className="text-body-lg text-ivory/60 max-w-2xl mx-auto">
            Tailored packaging solutions for every D2C industry
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Link
              key={index}
              to="/contact"
              className={`group bg-gradient-to-br ${industry.color} border border-gold/10 rounded-xl p-8 hover:border-gold/30 transition-all duration-300 hover:shadow-xl`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl">{industry.icon}</span>
                <div>
                  <h3 className="text-h2 text-ivory mb-1">{industry.name}</h3>
                  <p className="text-sm text-gold font-medium">Tailored Solutions</p>
                </div>
              </div>

              {/* Pain Points */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-gold mb-3 font-semibold">
                  Key Challenges
                </p>
                <ul className="space-y-2">
                  {industry.painPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-ivory/80">
                      <span className="text-gold">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6 pb-6 border-t border-gold/10">
                <p className="text-xs uppercase tracking-wider text-gold mb-3 font-semibold">
                  Our Solutions
                </p>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-ivory/80">
                      <span className="text-gold">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all duration-300">
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
