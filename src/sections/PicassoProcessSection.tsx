interface Step {
  number: number
  title: string
  description: string
  details: string[]
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Tell Us About Your Brand',
    description: 'Share your vision and requirements',
    details: [
      'Brand positioning & target audience',
      'Product category (beauty, jewelry, fashion, gifts)',
      'Quantity needed (500-10,000+ units)',
      'Budget & launch timeline',
    ],
  },
  {
    number: 2,
    title: 'We Design Your Vision',
    description: 'Craft the perfect packaging',
    details: [
      'Material selection (rigid boxes, kraft paper, specialty)',
      'Finish recommendations (foil, embossing, spot UV)',
      'Structure options (magnetic, drawer, custom inserts)',
      'Artwork collaboration & 2-3 revision rounds',
    ],
  },
  {
    number: 3,
    title: 'Sample & Approve',
    description: 'See it before production',
    details: [
      'Physical sample created for your review',
      'Production-ready artwork approval',
      'Quality verification & adjustments',
      'Final approval before manufacturing',
    ],
  },
  {
    number: 4,
    title: 'Production & Delivery',
    description: 'We bring it to life',
    details: [
      'In-house manufacturing & quality checks',
      '4-6 week standard turnaround (2-3 week rush available)',
      'Delivery to your location',
      'Ongoing support for reorders',
    ],
  },
]

export default function PicassoProcessSection() {
  return (
    <section className="bg-ivory section-padding">
      <div className="content-max mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 text-text-dark mb-4">The Picasso Process</h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
            From concept to delivery, we guide you every step of the way
          </p>
          <div className="gold-line mx-auto mt-8" />
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Timeline Line */}
          <div
            className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold to-gold hidden md:block"
            style={{
              left: '12.5%',
              right: '12.5%',
            }}
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Circle */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-gold text-navy flex items-center justify-center relative z-10 shadow-lg">
                  <span className="text-h1 font-bold">{step.number}</span>
                </div>
              </div>

              {/* Step Content */}
              <div className="bg-off-white rounded-xl p-6 border border-text-muted/10">
                <h3 className="text-h3 text-text-dark mb-2 text-center">{step.title}</h3>
                <p className="text-sm text-gold font-medium text-center mb-4">{step.description}</p>

                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                      <span className="text-gold flex-shrink-0 mt-1">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
