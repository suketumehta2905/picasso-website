import { useCounter } from '../hooks/useScrollAnimation'

const stats = [
  { value: 50, suffix: 'M+', label: 'Boxes Delivered' },
  { value: 12, suffix: 'K+', label: 'Clients Served' },
  { value: 28, suffix: '+', label: 'Cities Covered' },
  { value: 99, suffix: '.2%', label: 'On-Time Delivery' },
]

export default function KPIStats() {
  return (
    <section className="bg-navy section-padding">
      <div className="content-max mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const counterRef = useCounter(value, suffix)

  return (
    <div className="text-center">
      <span
        ref={counterRef}
        className="text-display-md text-ivory block mb-3"
      >
        0{suffix}
      </span>
      <div className="gold-line mx-auto mb-3" />
      <span className="text-caption text-ivory/50">{label}</span>
    </div>
  )
}
