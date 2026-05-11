import { Link } from 'react-router-dom'
import { CheckCircle, Sparkles, Zap, Palette } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'
import RFQCTA from '../sections/RFQCTA'

const finishes = [
  {
    title: 'Matte Lamination',
    description: 'Smooth, non-glossy, refined appearance with a soft touch feel.',
    benefits: ['Modern aesthetic', 'Reduced glare', 'Premium feel', 'Less fingerprints'],
    bestFor: ['Beauty & cosmetics', 'Luxury fashion', 'Minimal design', 'Premium gifting'],
    image: '/images/gallery-1.jpg',
    color: 'from-navy-light to-navy',
  },
  {
    title: 'Gloss Lamination',
    description: 'Shiny, reflective surface that makes colors vibrant and eye-catching.',
    benefits: ['Vibrant colors', 'High impact', 'Professional look', 'Water resistant'],
    bestFor: ['Retail packaging', 'Bright designs', 'Food products', 'Promotional bags'],
    image: '/images/gallery-2.jpg',
    color: 'from-gold to-gold-light',
  },
  {
    title: 'Foil Stamping',
    description: 'Metallic foil (gold, silver, copper) applied to selected areas for luxury shine.',
    benefits: ['Eye-catching shine', 'Luxury feel', 'Logo highlight', 'Premium positioning'],
    bestFor: ['Perfume boxes', 'Jewelry packaging', 'Premium gifts', 'Luxury brands'],
    image: '/images/industry-jewelry.jpg',
    color: 'from-gold-light to-kraft',
  },
  {
    title: 'Embossing',
    description: 'Design raised above the surface, creating texture and depth.',
    benefits: ['Tactile appeal', 'Design depth', 'Premium touch', 'Logo emphasis'],
    bestFor: ['Corporate packaging', 'Luxury boxes', 'Branded stationery', 'Gift sets'],
    image: '/images/gallery-5.jpg',
    color: 'from-navy to-navy-light',
  },
  {
    title: 'Debossing',
    description: 'Design pressed inward, creating an engraved, premium effect.',
    benefits: ['Elegant look', 'Tactile texture', 'Subtle luxury', 'Professional feel'],
    bestFor: ['High-end packaging', 'Jewelry boxes', 'Premium cosmetics', 'Corporate gifts'],
    image: '/images/gallery-8.jpg',
    color: 'from-kraft to-kraft-light',
  },
  {
    title: 'Spot UV',
    description: 'Glossy coating on select areas while rest remains matte, creating contrast.',
    benefits: ['Visual contrast', 'Logo emphasis', 'Modern look', 'Selective shine'],
    bestFor: ['Contemporary brands', 'Logo highlights', 'Modern packaging', 'Tech products'],
    image: '/images/gallery-11.jpg',
    color: 'from-navy-light to-gold',
  },
  {
    title: 'Soft Touch Coating',
    description: 'Velvet-like, non-glossy coating that feels luxurious and premium.',
    benefits: ['Soft feel', 'Premium quality', 'Elegant appearance', 'No slip feel'],
    bestFor: ['Luxury brands', 'High-end cosmetics', 'Premium jewelry', 'Gift packages'],
    image: '/images/industry-cosmetics.jpg',
    color: 'from-gold to-navy-light',
  },
  {
    title: 'Textured Paper',
    description: 'Embossed texture patterns in the paper itself for visual and tactile interest.',
    benefits: ['Visual interest', 'Unique feel', 'Artisanal look', 'Premium appearance'],
    bestFor: ['Artisan brands', 'Craft packaging', 'Eco-conscious brands', 'Limited editions'],
    image: '/images/blog-gsm-guide.jpg',
    color: 'from-kraft-light to-kraft',
  },
]

const finishComparison = [
  {
    finish: 'Matte Lamination',
    premiumFeel: '★★★★☆',
    cost: '$$',
    bestFor: 'Beauty, luxury, minimal design',
    durability: 'Excellent',
  },
  {
    finish: 'Gloss Lamination',
    premiumFeel: '★★★☆☆',
    cost: '$',
    bestFor: 'Retail, bright colors, food',
    durability: 'Excellent',
  },
  {
    finish: 'Foil Stamping',
    premiumFeel: '★★★★★',
    cost: '$$$',
    bestFor: 'Perfume, jewelry, luxury',
    durability: 'Good',
  },
  {
    finish: 'Embossing',
    premiumFeel: '★★★★☆',
    cost: '$$',
    bestFor: 'Corporate, luxury, logos',
    durability: 'Excellent',
  },
  {
    finish: 'Spot UV',
    premiumFeel: '★★★★☆',
    cost: '$$',
    bestFor: 'Modern, contemporary brands',
    durability: 'Excellent',
  },
  {
    finish: 'Soft Touch',
    premiumFeel: '★★★★★',
    cost: '$$$',
    bestFor: 'Luxury, high-end cosmetics',
    durability: 'Very Good',
  },
]

export default function Finishes() {
  const cardsRef = useStaggerFadeIn('.finish-card', 0.08)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-navy pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <div className="mb-4">
            <Link to="/" className="text-caption text-ivory/40 hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-caption text-ivory/40 mx-2">/</span>
            <Link to="/finishes" className="text-caption text-gold">
              Finishes & Materials
            </Link>
          </div>
          <h1 className="text-display-md text-ivory mb-4">Premium Packaging Finishes & Materials Explained</h1>
          <p className="text-body-lg text-ivory/60 max-w-2xl">
            A packaging finish often defines whether your box or bag feels premium. Learn when to use foil stamping,
            embossing, spot UV, soft touch, and lamination to elevate perceived value and create lasting impressions.
          </p>
        </div>
      </section>

      {/* Finishes Grid */}
      <section className="bg-ivory section-padding">
        <div className="content-max mx-auto">
          <div className="mb-12">
            <h2 className="text-h1 text-text-dark mb-4">Packaging Finishes Explained</h2>
            <p className="text-body-lg text-text-muted max-w-2xl">
              Each finish creates a different brand impression. Some are about visual impact, others about tactile luxury.
            </p>
            <div className="gold-line mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={cardsRef}>
            {finishes.map((finish, index) => (
              <div key={index} className="finish-card bg-off-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-navy-light">
                  <img
                    src={finish.image}
                    alt={finish.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-h3 text-text-dark mb-2">{finish.title}</h3>
                  <p className="text-body-lg text-text-muted mb-4">{finish.description}</p>

                  {/* Benefits */}
                  <div className="mb-6 pb-6 border-b border-text-muted/10">
                    <p className="text-sm font-semibold text-navy mb-3">Key Benefits:</p>
                    <ul className="space-y-2">
                      {finish.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text-muted">
                          <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <p className="text-sm font-semibold text-navy mb-3">Best For:</p>
                    <div className="flex flex-wrap gap-2">
                      {finish.bestFor.map((category, idx) => (
                        <span key={idx} className="bg-ivory text-navy text-xs font-medium px-3 py-1.5 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-navy py-16 px-4 md:px-8">
        <div className="content-max mx-auto">
          <div className="mb-12">
            <h2 className="text-h1 text-ivory mb-4">Finish Comparison Guide</h2>
            <p className="text-body-lg text-ivory/60 max-w-2xl">
              Compare premium feel, cost, best use cases, and durability across all packaging finishes.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-ivory text-sm md:text-base">
              <thead>
                <tr className="border-b-2 border-gold">
                  <th className="text-left py-4 px-3 font-semibold text-gold">Finish</th>
                  <th className="text-left py-4 px-3 font-semibold text-gold">Premium Feel</th>
                  <th className="text-left py-4 px-3 font-semibold text-gold">Cost</th>
                  <th className="text-left py-4 px-3 font-semibold text-gold">Best For</th>
                  <th className="text-left py-4 px-3 font-semibold text-gold">Durability</th>
                </tr>
              </thead>
              <tbody>
                {finishComparison.map((item, idx) => (
                  <tr key={idx} className="border-b border-ivory/10 hover:bg-navy-light transition-colors">
                    <td className="py-4 px-3 font-semibold">{item.finish}</td>
                    <td className="py-4 px-3 text-gold">{item.premiumFeel}</td>
                    <td className="py-4 px-3 text-gold-light">{item.cost}</td>
                    <td className="py-4 px-3 text-ivory/80">{item.bestFor}</td>
                    <td className="py-4 px-3 text-ivory/80">{item.durability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Expert Tip */}
      <section className="bg-ivory-dim py-16 px-4 md:px-8">
        <div className="content-max mx-auto max-w-3xl">
          <div className="flex gap-6 items-start">
            <Sparkles className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-h2 text-navy mb-4">Expert Tip: Finish Combinations</h3>
              <p className="text-body-lg text-text-muted mb-4">
                Don't use every finish at once. The most luxurious packaging uses <strong>restrained combinations</strong>:
              </p>
              <ul className="space-y-3 text-body-lg text-text-muted">
                <li>✓ <strong>Matte lamination + foil</strong> — Elegant and modern</li>
                <li>✓ <strong>Textured paper + embossing</strong> — Artisanal luxury</li>
                <li>✓ <strong>Soft touch + spot UV on logo</strong> — Contemporary premium</li>
                <li>✓ <strong>Kraft + minimal printing</strong> — Sustainable luxury</li>
                <li>✗ <strong>Avoid:</strong> Gloss + foil + embossing + spot UV all together = chaotic</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Material Guide */}
      <section className="bg-off-white section-padding">
        <div className="content-max mx-auto">
          <div className="mb-12">
            <h2 className="text-h1 text-text-dark mb-4">Popular Materials for Premium Packaging</h2>
            <div className="gold-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                material: 'Kraft Paper',
                description: 'Natural brown kraft with eco-conscious appeal',
                gsmRange: '100-350 GSM',
                finishes: 'Minimal printing, embossing',
                industries: 'Eco brands, organic, artisanal',
              },
              {
                material: 'Art Paper',
                description: 'Premium white or cream paper with excellent print quality',
                gsmRange: '150-300 GSM',
                finishes: 'Foil, gloss lamination, spot UV',
                industries: 'Fashion, beauty, premium retail',
              },
              {
                material: 'Ivory Board',
                description: 'Crisp white board with smooth finish, professional look',
                gsmRange: '200-400 GSM',
                finishes: 'Matte, gloss, foil',
                industries: 'Corporate, gifting, cosmetics',
              },
              {
                material: 'Duplex Board',
                description: 'Two-ply board (white front, kraft back) strong and eco-friendly',
                gsmRange: '250-400 GSM',
                finishes: 'Embossing, minimal finishes',
                industries: 'Sustainable packaging, retail',
              },
              {
                material: 'Greyboard',
                description: 'Rigid board for rigid boxes, premium feel, extremely sturdy',
                gsmRange: '1200-2000 GSM',
                finishes: 'Laminated wrapper (all finishes)',
                industries: 'Luxury boxes, jewelry, perfume',
              },
              {
                material: 'Specialty Papers',
                description: 'Textured, metallic, or specialty finishes',
                gsmRange: '100-300 GSM',
                finishes: 'Custom textures, unique effects',
                industries: 'Limited editions, premium brands',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <h3 className="text-h3 text-navy mb-3">{item.material}</h3>
                <p className="text-body-lg text-text-muted mb-4">{item.description}</p>
                <div className="space-y-3 text-sm text-text-muted">
                  <div>
                    <span className="font-semibold text-navy">GSM Range: </span>{item.gsmRange}
                  </div>
                  <div>
                    <span className="font-semibold text-navy">Recommended Finishes: </span>{item.finishes}
                  </div>
                  <div>
                    <span className="font-semibold text-navy">Industries: </span>{item.industries}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-16 px-4 md:px-8">
        <div className="content-max mx-auto max-w-3xl">
          <h2 className="text-h1 text-text-dark mb-12 text-center">Common Questions About Finishes</h2>

          <div className="space-y-6">
            {[
              {
                q: 'Does foil stamping work on all colors?',
                a: 'Foil works best on dark backgrounds (navy, black, dark brown). On light backgrounds, gold and silver still work, but copper may be harder to see. Test a sample first.',
              },
              {
                q: 'How durable is spot UV?',
                a: 'Very durable. Spot UV resists scratches and lasts the product lifetime. However, it can show fingerprints on glossy areas.',
              },
              {
                q: 'What\'s the difference between embossing and debossing?',
                a: 'Embossing raises the design above the surface (visible and tactile bump). Debossing presses it inward (looks engraved). Both create premium tactile effects.',
              },
              {
                q: 'Can I combine foil with embossing?',
                a: 'Yes! Foil + embossing together creates ultra-premium luxury. The foil sits on top of the raised embossed area for maximum impact.',
              },
              {
                q: 'Which finish is most eco-friendly?',
                a: 'Kraft paper with minimal or no finish is most eco-friendly. Matte lamination is also recyclable. Foil and some coatings are harder to recycle.',
              },
              {
                q: 'Does soft touch coating protect the package?',
                a: 'Soft touch provides light protection but is mainly for luxury feel. For food or fragile items, use lamination instead.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-off-white rounded-lg p-6">
                <h4 className="text-h3 text-navy mb-3">{item.q}</h4>
                <p className="text-body-lg text-text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="bg-navy-light py-16 px-4 md:px-8">
        <div className="content-max mx-auto max-w-3xl">
          <h3 className="text-h2 text-ivory mb-6">Learn More About Premium Packaging</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/products/rigid-boxes" className="flex items-center gap-3 bg-navy p-4 rounded-lg hover:bg-navy/80 transition-colors group">
              <Zap className="w-5 h-5 text-gold" />
              <span className="text-ivory group-hover:text-gold transition-colors">Explore Rigid Boxes</span>
            </Link>
            <Link to="/products/paper-bags" className="flex items-center gap-3 bg-navy p-4 rounded-lg hover:bg-navy/80 transition-colors group">
              <Zap className="w-5 h-5 text-gold" />
              <span className="text-ivory group-hover:text-gold transition-colors">Explore Paper Bags</span>
            </Link>
            <Link to="/blog" className="flex items-center gap-3 bg-navy p-4 rounded-lg hover:bg-navy/80 transition-colors group">
              <Palette className="w-5 h-5 text-gold" />
              <span className="text-ivory group-hover:text-gold transition-colors">Read Packaging Blog</span>
            </Link>
            <Link to="/industries" className="flex items-center gap-3 bg-navy p-4 rounded-lg hover:bg-navy/80 transition-colors group">
              <Palette className="w-5 h-5 text-gold" />
              <span className="text-ivory group-hover:text-gold transition-colors">Industry Solutions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-ivory to-off-white py-16 px-4 md:px-8">
        <div className="content-max mx-auto max-w-2xl text-center">
          <h2 className="text-h1 text-text-dark mb-4">Ready to Choose Your Packaging Finishes?</h2>
          <p className="text-body-lg text-text-muted mb-8">
            Our packaging experts can recommend the perfect finish combination for your product, brand, and budget.
            Get samples and see the premium feel in person.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-navy font-semibold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors"
          >
            Request a Finishes Sample
          </Link>
        </div>
      </section>

      <RFQCTA />
    </>
  )
}
