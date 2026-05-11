import { CheckCircle2, Sparkles, Package } from 'lucide-react'

export default function TrustSection() {
  const stats = [
    {
      label: 'Est. 2008',
      description: '15+ years in premium packaging',
      icon: CheckCircle2,
    },
    {
      label: 'Custom Finishes',
      description: 'Foil, embossing, spot UV, magnetic closures',
      icon: Sparkles,
    },
    {
      label: '500+ MOQ',
      description: 'Perfect for product launches & testing',
      icon: Package,
    },
  ]

  return (
    <section className="bg-navy-light py-12 px-4 md:px-8">
      <div className="content-max mx-auto">
        <h2 className="text-center text-body text-ivory/70 mb-10">
          Trusted by Top Brands & Startups
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <Icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-h3 text-ivory mb-2">{stat.label}</h3>
                <p className="text-body-sm text-ivory/60">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
