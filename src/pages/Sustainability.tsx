import { TreePine, Globe, Recycle, Droplets, Wind } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'
import RFQCTA from '../sections/RFQCTA'

const commitments = [
  {
    icon: Recycle,
    title: 'Recyclable First',
    description: '80%+ of our product range uses recyclable or biodegradable materials. We actively design for end-of-life recyclability.',
  },
  {
    icon: TreePine,
    title: 'FSC Certified Sourcing',
    description: 'Paper and board from responsibly managed forests, tracked by chain of custody documentation.',
  },
  {
    icon: Wind,
    title: 'Carbon Conscious',
    description: 'Logistics optimization and offset programs targeting carbon-neutral delivery by 2026.',
  },
]

const stats = [
  { value: '80%', label: 'Recyclable', icon: Recycle },
  { value: '100%', label: 'FSC Paper', icon: TreePine },
  { value: '50%', label: 'Waste Reduction', icon: Droplets },
  { value: '2026', label: 'Carbon Neutral', icon: Globe },
]

const materials = [
  { material: 'Kraft Paper', recyclable: 'Yes', biodegradable: 'Yes', bestUse: 'Bags, wraps, boxes' },
  { material: 'Art Paper', recyclable: 'Yes', biodegradable: 'Yes', bestUse: 'Labels, inserts' },
  { material: 'Duplex Board', recyclable: 'Yes', biodegradable: 'No', bestUse: 'Folding cartons' },
  { material: 'Corrugated', recyclable: 'Yes', biodegradable: 'Yes', bestUse: 'Shipping boxes' },
  { material: 'PE Coated', recyclable: 'Limited', biodegradable: 'No', bestUse: 'Food-grade bags' },
  { material: 'Bioplastic', recyclable: 'No', biodegradable: 'Yes', bestUse: 'Window films' },
]

export default function Sustainability() {
  const commitmentRef = useStaggerFadeIn('.commitment-card', 0.1)
  const statsRef = useStaggerFadeIn('.stat-card', 0.1)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-kraft pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <h1 className="text-display-md text-text-dark mb-4">Sustainable Packaging</h1>
          <p className="text-body-lg text-text-dark/60 max-w-xl">
            Responsible materials. Measurable impact. Transparent commitments.
          </p>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-ivory section-padding">
        <div className="content-max mx-auto" ref={commitmentRef}>
          <div className="mb-16">
            <h2 className="text-h1 text-text-dark mb-4">Our Commitments</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((c) => (
              <div key={c.title} className="commitment-card bg-off-white rounded p-8 card-hover">
                <c.icon className="w-10 h-10 text-success mb-6" />
                <h3 className="text-h3 text-text-dark mb-3">{c.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy section-padding">
        <div className="content-max mx-auto" ref={statsRef}>
          <div className="mb-12 text-center">
            <h2 className="text-h1 text-ivory mb-4">Impact Metrics</h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card text-center p-8">
                <stat.icon className="w-8 h-8 text-success mx-auto mb-4" />
                <span className="text-display-md text-ivory block mb-2">{stat.value}</span>
                <span className="text-caption text-ivory/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Guide */}
      <section className="bg-off-white section-padding">
        <div className="content-max mx-auto">
          <div className="mb-12">
            <h2 className="text-h1 text-text-dark mb-4">Material Options Guide</h2>
            <div className="gold-line" />
          </div>
          <div className="bg-white rounded overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-text-muted/10">
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-dark">Material</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-dark">Recyclable</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-dark">Biodegradable</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-text-dark">Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((m, i) => (
                    <tr
                      key={m.material}
                      className={`${i % 2 === 0 ? 'bg-off-white' : 'bg-white'} border-b border-text-muted/10`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-text-dark">{m.material}</td>
                      <td className="px-6 py-4 text-sm text-text-muted">{m.recyclable}</td>
                      <td className="px-6 py-4 text-sm text-text-muted">{m.biodegradable}</td>
                      <td className="px-6 py-4 text-sm text-text-muted">{m.bestUse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <RFQCTA />
    </>
  )
}
