import { Sparkles, Heart, Package, Lightbulb } from 'lucide-react'

interface Feature {
  icon: React.ComponentType<any>
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Heart,
    title: 'Unboxing Moments Matter',
    description:
      'Premium packaging creates memorable unboxing experiences that drive social media content and customer loyalty.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Finishes',
    description:
      'Foil stamping, embossing, spot UV, and custom inserts elevate perceived value and justify premium pricing.',
  },
  {
    icon: Package,
    title: 'Practical MOQs',
    description:
      'Start with 500 units for product launches, testing, and seasonal releases. Scale up as your brand grows.',
  },
  {
    icon: Lightbulb,
    title: 'Expert Guidance',
    description:
      'Our packaging consultants help you choose materials, finishes, and structures that match your brand\'s luxury positioning.',
  },
]

export default function WhyPickassoSection() {
  return (
    <section className="bg-navy-light section-padding">
      <div className="content-max mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 text-ivory mb-4">Why Picasso for D2C Brands?</h2>
          <p className="text-body-lg text-ivory/60 max-w-2xl mx-auto">
            We specialize in creating premium packaging that drives brand perception and customer loyalty
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-navy rounded-xl p-8 border border-navy/50 hover:border-gold/30 transition-all duration-300 hover:shadow-lg"
              >
                <Icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-h3 text-ivory mb-3">{feature.title}</h3>
                <p className="text-body text-ivory/70">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
