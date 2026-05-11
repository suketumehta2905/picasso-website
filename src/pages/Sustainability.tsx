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
      <section className="relative min-h-[60vh] flex items-center bg-stone pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
            Sustainability
          </span>
          <h1 className="text-5xl font-black text-ink mb-4">Sustainable Packaging That Works</h1>
          <p className="text-lg text-ink/70 max-w-xl">
            Responsible materials. Measurable impact. Transparent commitments.
          </p>
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-stone py-24 px-4 md:px-8" ref={commitmentRef}>
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">Our Commitments</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((c) => (
              <div key={c.title} className="commitment-card bg-white rounded-lg p-8 hover:shadow-elevated transition-all border border-sand">
                <c.icon className="w-10 h-10 text-success mb-6" />
                <h3 className="text-lg font-bold text-ink mb-3">{c.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-24 px-4 md:px-8" ref={statsRef}>
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-white mb-4">Impact Metrics</h2>
            <div className="h-1 w-16 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card text-center p-8">
                <stat.icon className="w-8 h-8 text-success mx-auto mb-4" />
                <span className="text-4xl font-black text-white block mb-2">{stat.value}</span>
                <span className="text-sm text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Guide */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">Material Options Guide</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="bg-white rounded-lg overflow-hidden border border-sand">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-sand bg-stone/30">
                    <th className="px-6 py-4 text-left text-sm font-bold text-ink">Material</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ink">Recyclable</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ink">Biodegradable</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-ink">Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  {materials.map((m, i) => (
                    <tr
                      key={m.material}
                      className={`${i % 2 === 0 ? 'bg-stone/20' : 'bg-white'} border-b border-sand`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-ink">{m.material}</td>
                      <td className="px-6 py-4 text-sm text-ink/70">{m.recyclable}</td>
                      <td className="px-6 py-4 text-sm text-ink/70">{m.biodegradable}</td>
                      <td className="px-6 py-4 text-sm text-ink/70">{m.bestUse}</td>
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
