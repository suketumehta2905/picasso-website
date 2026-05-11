interface Feature {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Unboxing Moments',
    description: 'Premium packaging creates shareable content & loyalty.',
  },
  {
    title: 'Luxury Finishes',
    description: 'Foil, embossing, spot UV — justify premium pricing.',
  },
  {
    title: 'Start at 500 Units',
    description: 'Flexible MOQs for launches & testing.',
  },
  {
    title: 'Expert Guidance',
    description: 'Packaging consultants from concept to delivery.',
  },
]

export default function WhyPickassoSection() {
  return (
    <section className="bg-stone py-24 px-4 md:px-8">
      <div className="content-max mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Image - Sticky */}
          <div className="sticky top-24">
            <img
              src="/Kimi Images/picasso_website_images/07_why_picasso.jpg"
              alt="Why Picasso - Premium packaging showcase"
              className="w-full rounded-xl object-cover shadow-card"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-6">
              Why Picasso
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-ink mb-6 leading-tight">
              Built for Brands That Take Packaging Seriously
            </h2>

            <p className="text-lg text-text-muted mb-12 leading-relaxed">
              We don't just manufacture boxes. We engineer unboxing moments that turn one-time buyers into repeat customers and social media advocates.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-sand rounded-lg p-6 hover:shadow-card transition-all"
                >
                  <h3 className="font-bold text-ink text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
