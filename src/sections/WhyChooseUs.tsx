import { Award, TrendingUp, Clock, Sparkles, Leaf, Scale } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'

const features = [
  {
    icon: Award,
    title: 'High-Quality Manufacturing',
    description: 'ISO 9001 certified processes with rigorous QC at every stage.',
  },
  {
    icon: TrendingUp,
    title: 'Cost-Effective at Scale',
    description: 'Competitive pricing without compromising on quality or finish.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Same-day sampling and industry-leading production timelines.',
  },
  {
    icon: Sparkles,
    title: 'Premium Finishes',
    description: 'Foil stamping, embossing, spot UV, soft-touch lamination.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Materials',
    description: 'FSC-certified papers, recyclable options, biodegradable alternatives.',
  },
  {
    icon: Scale,
    title: 'Low MOQ + Scale',
    description: 'Start from 500 units and scale to millions with consistent quality.',
  },
]

export default function WhyChooseUs() {
  const containerRef = useStaggerFadeIn('.feature-card', 0.1)

  return (
    <section className="bg-navy section-padding">
      <div className="content-max mx-auto" ref={containerRef}>
        <div className="mb-16">
          <h2 className="text-h1 text-ivory mb-4">
            Why India's Best Brands Choose Picasso
          </h2>
          <div className="gold-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <feature.icon className="w-4 h-4 text-gold" />
              </div>
              <h3 className="text-h3 text-ivory mb-3">{feature.title}</h3>
              <p className="text-sm text-ivory/60 leading-relaxed">{feature.description}</p>
              <div className="gold-line mt-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
