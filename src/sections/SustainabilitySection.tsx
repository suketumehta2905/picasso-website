import { Leaf, TreePine, Globe } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'

const metrics = [
  {
    icon: Leaf,
    value: '80%+',
    label: 'Recyclable Materials',
    description: 'Across our entire product range',
    color: 'success',
  },
  {
    icon: TreePine,
    value: 'FSC',
    label: 'Certified Sourcing',
    description: 'Responsibly managed forests',
    color: 'success',
  },
  {
    icon: Globe,
    value: '2026',
    label: 'Carbon Neutral Target',
    description: 'Offset programs in progress',
    color: 'success',
  },
]

export default function SustainabilitySection() {
  const containerRef = useStaggerFadeIn('.sustain-card', 0.12)

  return (
    <section className="bg-off-white section-padding">
      <div className="content-max mx-auto" ref={containerRef}>
        <div className="mb-16">
          <h2 className="text-h1 text-text-dark mb-4">Packaging with Purpose</h2>
          <p className="text-body-lg text-text-muted max-w-2xl">
            Responsible materials. Measurable impact. Transparent commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="sustain-card bg-white rounded p-8 border-t-[3px] border-success card-hover"
            >
              <metric.icon className="w-8 h-8 text-success mb-6" />
              <span className="text-display-md text-text-dark block mb-2">{metric.value}</span>
              <h3 className="text-h3 text-text-dark mb-2">{metric.label}</h3>
              <p className="text-sm text-text-muted">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Commitment Text */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-h3 text-text-dark mb-3">Recyclable First</h4>
            <p className="text-sm text-text-muted leading-relaxed">
              80%+ of our product range uses recyclable or biodegradable materials.
            </p>
          </div>
          <div>
            <h4 className="text-h3 text-text-dark mb-3">FSC Certified</h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Paper and board from responsibly managed forests, tracked by chain of custody.
            </p>
          </div>
          <div>
            <h4 className="text-h3 text-text-dark mb-3">Carbon Conscious</h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Logistics optimization targeting carbon-neutral delivery by 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
