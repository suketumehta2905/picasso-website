import { Lightbulb, Users, CheckCircle, Palette, UtensilsCrossed } from 'lucide-react'

const personas = [
  {
    id: 1,
    title: 'Startup Founder / D2C Founder',
    icon: Lightbulb,
    mindset: '"I need premium packaging but with low MOQs (500–1,000 units)."',
    painPoint: 'How do I get luxury packaging without ordering 10,000 units?',
    cta: 'Help Me Choose My Packaging',
    ctaLink: '/packaging-finder',
    color: 'gold',
  },
  {
    id: 2,
    title: 'D2C Brand Manager',
    icon: Users,
    mindset: '"The packaging must elevate our brand perception."',
    painPoint: 'Which finishes and materials will make our product look premium?',
    cta: 'Upgrade My Brand Packaging',
    ctaLink: '/products/rigid-boxes',
    color: 'gold',
  },
  {
    id: 3,
    title: 'Procurement / Purchasing Head',
    icon: CheckCircle,
    mindset: '"I need a reliable vendor who delivers on time and quality."',
    painPoint: 'What details do I need to request an accurate quote?',
    cta: 'Request Production Quote',
    ctaLink: '/contact',
    color: 'gold',
  },
  {
    id: 4,
    title: 'Brand / Creative / Design Team',
    icon: Palette,
    mindset: '"Can the manufacturer execute our design beautifully?"',
    painPoint: 'Which finishes, inserts, and structures can be customized?',
    cta: 'Upload Artwork & Discuss',
    ctaLink: '/contact',
    color: 'gold',
  },
  {
    id: 5,
    title: 'QSR / Cafe / Food Brand Owner',
    icon: UtensilsCrossed,
    mindset: '"The bag must be strong, clean, and brandable."',
    painPoint: 'Which paper bag is best for food delivery and takeaway?',
    cta: 'Get Food Paper Bag Quote',
    ctaLink: '/products/paper-bags',
    color: 'gold',
  },
]

export default function PersonaCards() {
  return (
    <section className="bg-navy py-16 px-4 md:px-8">
      <div className="content-max mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-h1 text-ivory mb-4">Who Comes Here & What They Need</h2>
          <p className="text-body-lg text-ivory/70 max-w-2xl mx-auto">
            We serve different buyer segments. Find yourself below and discover the packaging solutions that match your needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {personas.map((persona) => {
            const Icon = persona.icon
            return (
              <div
                key={persona.id}
                className="bg-navy-light rounded-xl p-6 hover:shadow-card transition-all duration-300 group flex flex-col h-full"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-navy" />
                </div>

                {/* Title */}
                <h3 className="text-h3 text-ivory mb-2 leading-tight">{persona.title}</h3>

                {/* Mindset */}
                <p className="text-sm text-gold italic mb-4 flex-grow">{persona.mindset}</p>

                {/* Pain Point */}
                <div className="mb-4 pb-4 border-b border-navy/30">
                  <p className="text-xs text-ivory/70 uppercase tracking-wide font-medium mb-1">
                    Key Question
                  </p>
                  <p className="text-sm text-ivory/90">{persona.painPoint}</p>
                </div>

                {/* CTA Button */}
                <a
                  href={persona.ctaLink}
                  className="w-full bg-gold text-navy font-semibold py-2.5 px-4 rounded-lg hover:bg-gold-light transition-colors text-center text-sm group-hover:shadow-lg"
                >
                  {persona.cta}
                </a>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-ivory/60 text-sm max-w-xl mx-auto">
            Don't see your role? No problem. <a href="/contact" className="text-gold hover:text-gold-light underline">Contact us</a> with your specific needs, and we'll guide you through the right packaging solution.
          </p>
        </div>
      </div>
    </section>
  )
}
