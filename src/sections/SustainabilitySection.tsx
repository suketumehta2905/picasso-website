interface Benefit {
  metric: string
  label: string
  description: string
}

const stats: Benefit[] = [
  {
    metric: '73%',
    label: 'of Gen Z prefer sustainable packaging',
    description: '',
  },
  {
    metric: 'Same Price',
    label: 'as Standard paper',
    description: '',
  },
  {
    metric: '100%',
    label: 'Certified & Audited',
    description: '',
  },
]

const materials = [
  { title: 'FSC Certified Paper & Board', desc: 'Traceable to responsibly managed forests' },
  { title: 'Recycled Content Options', desc: '30%, 50%, 80% post-consumer waste available' },
  { title: 'Biodegradable Alternatives', desc: 'Compostable paper & eco-inks for premium positioning' },
  { title: 'Reduced Plastics', desc: 'Water-based inks, soy-based coatings, no micro-plastics' },
]

const certifications = [
  { title: 'FSC Chain of Custody', desc: 'Every batch tracked from forest to your door' },
  { title: 'BSCI Certified', desc: 'Supplier audits verify labor & environmental practices' },
  { title: 'SMETA Audits', desc: 'Independent audits of factory practices & compliance' },
  { title: 'Supplier Transparency', desc: 'We publish sourcing locations & certifications' },
]

const benefits = [
  { title: 'Brand Perception', desc: 'Eco-conscious packaging strengthens brand trust.' },
  { title: 'Social Content', desc: 'Sustainable unboxing is shareable. Customers post more often.' },
  { title: 'No Cost Premium', desc: 'FSC kraft paper costs the same as standard.' },
]

export default function SustainabilitySection() {
  return (
    <section className="bg-stone py-24 px-4 md:px-8">
      <div className="content-max mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
            Sustainability
          </span>
          <h2 className="text-5xl font-black text-ink mb-6">Packaging That Performs — Without Compromising the Planet</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Your customers care about sustainability. We help you deliver it — without sacrificing quality, cost, or timeline.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 md:p-8 shadow-card text-center">
              <div className="text-4xl md:text-5xl font-black text-success mb-3">
                {stat.metric}
              </div>
              <p className="text-sm font-medium text-ink/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Materials & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-ink text-lg mb-6 uppercase tracking-wider">Materials We Use</h3>
            <ul className="space-y-4">
              {materials.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-gold font-bold flex-shrink-0 mt-1">→</span>
                  <div>
                    <p className="font-bold text-ink text-sm">{item.title}</p>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-ink text-lg mb-6 uppercase tracking-wider">Certifications & Audits</h3>
            <ul className="space-y-4">
              {certifications.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-success font-bold flex-shrink-0 mt-1">✓</span>
                  <div>
                    <p className="font-bold text-ink text-sm">{item.title}</p>
                    <p className="text-sm text-text-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 border border-sand">
              <h4 className="font-bold text-ink mb-2 text-sm uppercase tracking-wider">{benefit.title}</h4>
              <p className="text-sm text-text-muted">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#contact" className="inline-flex items-center gap-2 bg-gold text-ink font-bold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors">
            Explore Sustainable Options
          </a>
        </div>
      </div>
    </section>
  )
}
