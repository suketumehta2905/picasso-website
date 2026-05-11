import { CheckCircle2, BarChart3, Leaf } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'

const benefits = [
  {
    icon: CheckCircle2,
    title: 'Eco-Conscious Customers Expect It',
    metric: '73%',
    description: 'of Gen Z consumers prefer brands with sustainable packaging',
    detail: 'Premium packaging with certified sustainable materials directly impacts brand perception and customer retention.',
  },
  {
    icon: BarChart3,
    title: 'Cost Competitive',
    metric: 'Same Price',
    description: 'FSC kraft paper vs. standard paper (no premium cost)',
    detail: 'Achieve sustainability goals without sacrificing margins. Our suppliers enable this at scale.',
  },
  {
    icon: Leaf,
    title: 'Third-Party Verified',
    metric: '100%',
    description: 'of raw materials tracked and certified by independent auditors',
    detail: 'Not claims. Actual certifications: FSC, BSCI, SMETA audits. Full traceability for your supply chain.',
  },
]

export default function SustainabilitySection() {
  const containerRef = useStaggerFadeIn('.sustain-card', 0.12)

  return (
    <section className="bg-white section-padding border-t border-text-muted/10">
      <div className="content-max mx-auto" ref={containerRef}>
        <div className="mb-16">
          <h2 className="text-h1 text-text-dark mb-4">Sustainable by Design</h2>
          <p className="text-body text-text-muted max-w-2xl">
            Your customers care about sustainability. We help you deliver it—without compromising quality, cost, or timeline.
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="sustain-card bg-off-white rounded-xl p-8 border border-text-muted/10 hover:border-gold/30 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-gold mb-6" />
                <div className="text-h2 text-navy font-bold mb-1">{benefit.metric}</div>
                <h3 className="text-h4 text-text-dark mb-4">{benefit.title}</h3>
                <p className="text-xs text-text-muted mb-4 leading-relaxed">{benefit.description}</p>
                <p className="text-xs text-text-muted italic leading-relaxed">{benefit.detail}</p>
              </div>
            )
          })}
        </div>

        {/* Real Details Section */}
        <div className="bg-navy-light rounded-xl p-10 border border-gold/10">
          <h3 className="text-h2 text-ivory mb-8">What's Actually Available</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-h4 text-gold mb-4">Materials We Use</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg">→</span>
                  <span className="text-sm text-ivory"><strong>FSC Certified Paper & Board</strong> - Traceable to responsibly managed forests (not greenwashing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg">→</span>
                  <span className="text-sm text-ivory"><strong>Recycled Content Options</strong> - 30%, 50%, 80% post-consumer waste available</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg">→</span>
                  <span className="text-sm text-ivory"><strong>Biodegradable Alternatives</strong> - Compostable paper & eco-inks for premium positioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg">→</span>
                  <span className="text-sm text-ivory"><strong>Reduced Plastics</strong> - Water-based inks, soy-based coatings, no micro-plastics</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-h4 text-gold mb-4">Certifications & Audits</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg">✓</span>
                  <span className="text-sm text-ivory"><strong>FSC Chain of Custody</strong> - Every batch tracked from forest to your facility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg">✓</span>
                  <span className="text-sm text-ivory"><strong>BSCI Certified</strong> - Supplier audits verify labor & environmental practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg">✓</span>
                  <span className="text-sm text-ivory"><strong>SMETA Audits</strong> - Independent audits of factory practices & compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-lg">✓</span>
                  <span className="text-sm text-ivory"><strong>Supplier Transparency</strong> - We publish sourcing locations & certifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mt-12 bg-gold/5 rounded-xl p-8 border border-gold/10">
          <h3 className="text-h4 text-text-dark mb-4">Why This Matters for Your Brand</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">Customer Perception</p>
              <p className="text-sm text-text-muted">Eco-conscious packaging strengthens brand perception. Customers feel good about their purchase.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">Social Content</p>
              <p className="text-sm text-text-muted">Sustainable unboxing is shareable. Customers post about eco-friendly packaging more often than generic.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">No Cost Premium</p>
              <p className="text-sm text-text-muted">FSC kraft paper costs the same as standard. You gain sustainability benefits without margin impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
