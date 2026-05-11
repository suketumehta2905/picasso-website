export default function TrustSection() {
  const stats = [
    {
      number: '15+',
      label: 'Years Serving D2C Brands',
    },
    {
      number: '500+',
      label: 'Brands Served Across India',
    },
    {
      number: '12+',
      label: 'Premium Finishes Available',
    },
    {
      number: '4-6',
      label: 'Week Standard Turnaround',
    },
  ]

  return (
    <section className="bg-stone py-24 px-4 md:px-8">
      <div className="content-max mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-card text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-gold mb-2">
                {stat.number}
              </div>
              <p className="text-sm font-medium text-ink/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
