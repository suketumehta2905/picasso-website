import { Link } from 'react-router-dom'
import { Sparkles, Gem, UtensilsCrossed, Shirt, Box, CheckCircle, ArrowRight } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'
import RFQCTA from '../sections/RFQCTA'

const industries = [
  {
    icon: Sparkles,
    id: 'beauty',
    title: 'Beauty & Cosmetics',
    shortDesc: 'Premium packaging elevating perceived value and brand luxury',
    image: '/images/industry-cosmetics.jpg',
    keywords: ['custom packaging for cosmetics', 'rigid boxes for cosmetics', 'luxury cosmetic packaging'],
    challenges: [
      'Differentiating premium brands in crowded market',
      'Creating unboxing moments for social media',
      'Protecting delicate products during shipping',
      'Matching brand color and finish requirements',
    ],
    recommendations: {
      formats: ['Magnetic closure rigid boxes', 'Custom inserts for bottles/jars', 'Luxury paper bags with rope handles'],
      materials: ['Ivory board, greyboard, specialty papers'],
      finishes: ['Foil stamping (gold/silver/rose gold)', 'Embossing', 'Spot UV', 'Matte or soft touch lamination'],
    },
    cta: 'Get Cosmetics Packaging Quote',
    ctaLink: '/contact',
  },
  {
    icon: Gem,
    id: 'jewelry',
    title: 'Jewelry & Luxury Gifting',
    shortDesc: 'Premium structures that make every unboxing moment unforgettable',
    image: '/images/industry-jewelry.jpg',
    keywords: ['rigid boxes for jewelry', 'luxury gift packaging', 'drawer boxes jewelry'],
    challenges: [
      'Creating secure product presentation',
      'Protecting high-value items from damage',
      'Making packaging reusable/collectible',
      'Implementing custom inserts and padding',
    ],
    recommendations: {
      formats: ['Drawer style boxes with ribbon pulls', 'Magnetic closure rigid boxes', 'Custom velvet inserts'],
      materials: ['Premium greyboard, specialty papers'],
      finishes: ['Soft touch coating', 'Foil stamping', 'Embossing', 'Velvet/satin liners'],
    },
    cta: 'Design Jewelry Packaging',
    ctaLink: '/contact',
  },
  {
    icon: UtensilsCrossed,
    id: 'food',
    title: 'QSR / Food & Cafe',
    shortDesc: 'Food-safe, practical, branded packaging for takeaway excellence',
    image: '/images/industry-qsr.jpg',
    keywords: ['paper bags for restaurants', 'food delivery bags', 'cafe packaging'],
    challenges: [
      'Food-grade compliance and safety certifications',
      'Grease and moisture resistance',
      'High-speed production and consistency',
      'Brand visibility in crowded marketplace',
    ],
    recommendations: {
      formats: ['Flat handle bags (strength for heavy items)', 'SOS bags with PE coating', 'Kraft paper bags', 'Custom branded bags'],
      materials: ['Food-grade kraft paper', 'PE-coated paper', 'Duplex board'],
      finishes: ['Full-color printing', 'Minimal finishes', 'Food-safe inks'],
    },
    cta: 'Order QSR Bags',
    ctaLink: '/contact',
  },
  {
    icon: Shirt,
    id: 'fashion',
    title: 'Fashion & Apparel',
    shortDesc: 'Branded carry solutions that extend the luxury retail experience',
    image: '/images/gallery-11.jpg',
    keywords: ['luxury paper bags for fashion', 'rope handle shopping bags', 'branded retail bags'],
    challenges: [
      'Creating premium in-store experience',
      'Balancing luxury feel with cost efficiency',
      'Accommodating varied product sizes',
      'Building brand recognition through packaging',
    ],
    recommendations: {
      formats: ['Rope handle luxury bags', 'Flat handle bags', 'Custom printed paper bags', 'Tissue paper wrapping'],
      materials: ['Art paper, premium kraft, duplex board'],
      finishes: ['Full-color printing', 'Matte lamination', 'Foil accents', 'Custom tissue lining'],
    },
    cta: 'Order Fashion Bags',
    ctaLink: '/contact',
  },
  {
    icon: Box,
    id: 'gifting',
    title: 'Corporate Gifting & Premium',
    shortDesc: 'Elegant packaging solutions for memorable corporate moments',
    image: '/images/gallery-8.jpg',
    keywords: ['corporate gifting packaging', 'premium gift boxes', 'hamper packaging'],
    challenges: [
      'Conveying prestige and corporate respect',
      'Protecting mixed products in one package',
      'Customizing for corporate identity',
      'Managing bulk orders with consistency',
    ],
    recommendations: {
      formats: ['Rigid boxes with custom inserts', 'Nested boxes for multi-product sets', 'Luxury hamper boxes with handles'],
      materials: ['Premium greyboard, ivory board'],
      finishes: ['Embossing with corporate logos', 'Foil stamping', 'Matte lamination', 'Custom ribbon'],
    },
    cta: 'Design Gift Packaging',
    ctaLink: '/contact',
  },
  {
    icon: CheckCircle,
    id: 'electronics',
    title: 'Electronics & Tech',
    shortDesc: 'Premium unboxing experiences for high-tech products',
    image: '/images/gallery-5.jpg',
    keywords: ['rigid boxes for electronics', 'product unboxing packaging', 'tech product boxes'],
    challenges: [
      'Protecting sensitive electronics during shipping',
      'Creating premium unboxing experience',
      'Secure product positioning in box',
      'Accommodating product documentation',
    ],
    recommendations: {
      formats: ['Magnetic closure rigid boxes', 'Custom foam/EVA inserts', 'Sleek lid & base boxes'],
      materials: ['Premium greyboard, specialty papers'],
      finishes: ['Matte lamination', 'Spot UV', 'Soft touch coating', 'Foil accents'],
    },
    cta: 'Design Electronics Box',
    ctaLink: '/contact',
  },
]

const caseStudies = [
  {
    client: 'LuxeBeau Cosmetics',
    industry: 'Beauty & Cosmetics',
    challenge: 'D2C beauty brand needed premium unboxing experience to justify ₹3000+ price point',
    solution: 'Magnetic closure rigid box with tissue wrapping, custom foam inserts, and gold foil logo',
    result: '45% increase in repeat purchases, 60% UGC content from unboxing',
  },
  {
    client: 'Café Aroma',
    industry: 'QSR & Food',
    challenge: 'Multi-outlet cafe needed grease-resistant bags that maintained brand image',
    solution: 'PE-coated flat handle bags with full-color printing across 30+ designs',
    result: 'Zero leakage complaints, 35% increase in takeaway orders from Instagram sharing',
  },
  {
    client: 'ThreadStyle Apparel',
    industry: 'Fashion & Retail',
    challenge: 'Premium fashion brand needed packaging matching luxury positioning without excessive cost',
    solution: 'Rope handle luxury bags with matte lamination and tissue lining',
    result: 'Customers keep bags as storage, 50% repeat purchase rate improved to 70%',
  },
  {
    client: 'Lumina Jewelry',
    industry: 'Jewelry & Luxury',
    challenge: 'Luxury jewelry startup needed distinctive, collectible packaging for premium launch',
    solution: 'Drawer-style boxes with velvet inserts, custom ribbon, embossed logo',
    result: 'Became brand identity element, customers display boxes as décor, 85% premium tier sales',
  },
  {
    client: 'CorporateGifts Pro',
    industry: 'Corporate Gifting',
    challenge: 'B2B gifting company needed flexible packaging for multi-product corporate hampers',
    solution: 'Custom rigid boxes with adjustable foam inserts, corporate foil stamping',
    result: 'Increased average order value by ₹5000, became preferred vendor for 20+ corporates',
  },
  {
    client: 'TechPro Gadgets',
    industry: 'Electronics & Tech',
    challenge: 'Electronics startup needed premium unboxing to compete with global brands',
    solution: 'Magnetic closure boxes with custom foam cutouts, spot UV logo, tissue wrapping',
    result: '70% customers shared unboxing videos, 3x organic reach vs competitors',
  },
]

export default function Industries() {
  const industryRef = useStaggerFadeIn('.industry-section', 0.1)
  const caseRef = useStaggerFadeIn('.case-card', 0.12)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-ink pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
            Industries
          </span>
          <h1 className="text-5xl font-black text-white mb-4">Packaging Solutions for Every Industry</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Industry-specific packaging solutions tailored to your sector's unique requirements, compliance needs, and brand positioning.
          </p>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="bg-stone" ref={industryRef}>
        {industries.map((industry, idx) => {
          const Icon = industry.icon
          const isEven = idx % 2 === 0

          return (
            <div key={industry.id} className="industry-section border-b border-text-muted/10 last:border-b-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:direction-reverse'}`}>
                {/* Image */}
                <div className={`aspect-video lg:aspect-auto overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center p-8 md:p-12 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                    <h2 className="text-3xl font-bold text-ink">{industry.title}</h2>
                  </div>

                  <p className="text-lg text-ink/70 mb-6">{industry.shortDesc}</p>

                  {/* Challenges */}
                  <div className="mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink mb-4">Key Packaging Challenges</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink/70">
                          <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommendations */}
                  <div className="mb-8 pb-8 border-b border-sand">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink mb-4">Our Recommendations</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-ink">Packaging Formats:</span>
                        <p className="text-ink/70">{industry.recommendations.formats.join(', ')}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-ink">Materials:</span>
                        <p className="text-ink/70">{industry.recommendations.materials.join(', ')}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-ink">Finishes:</span>
                        <p className="text-ink/70">{industry.recommendations.finishes.join(', ')}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={industry.ctaLink}
                    className="inline-flex items-center gap-2 bg-gold text-ink font-bold py-3 px-6 rounded-lg hover:bg-gold-light transition-colors w-fit"
                  >
                    {industry.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* Case Studies */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl" ref={caseRef}>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
              Success Stories
            </span>
            <h2 className="text-5xl font-black text-ink mb-4">Real Results from Real Brands</h2>
            <p className="text-lg text-ink/70 max-w-2xl mx-auto">
              How brands in different industries solved their packaging challenges with Picasso solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.client} className="case-card bg-white rounded-lg p-6 border border-sand hover:shadow-elevated transition-all">
                <div className="mb-6">
                  <p className="text-sm font-bold text-ink">{study.client}</p>
                  <p className="text-xs text-gold font-semibold uppercase tracking-wider mt-1">{study.industry}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-ink/60 uppercase tracking-wider font-semibold block mb-2">Challenge</span>
                    <p className="text-sm text-ink/70">{study.challenge}</p>
                  </div>
                  <div className="pt-4 border-t border-sand">
                    <span className="text-xs text-ink/60 uppercase tracking-wider font-semibold block mb-2">Solution</span>
                    <p className="text-sm text-ink/70">{study.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-sand">
                    <span className="text-xs text-gold uppercase tracking-wider font-semibold block mb-2">Result</span>
                    <p className="text-sm text-ink font-medium">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-ink py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-black text-white mb-6">Ready to Upgrade Your Packaging?</h2>
          <p className="text-lg text-white/70 mb-8">
            Our packaging experts understand your industry's unique challenges. Let's discuss your specific needs and find the perfect solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-ink font-bold py-4 px-10 rounded-lg hover:bg-gold-light transition-colors text-lg"
          >
            Request Your Industry Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <RFQCTA />
    </>
  )
}
