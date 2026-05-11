import { ArrowRight } from 'lucide-react'

interface CaseStudy {
  brand: string
  industry: string
  challenge: string
  solution: string
  result: string
  metric: string
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    brand: 'Luxe Beauty Co.',
    industry: 'Beauty & Cosmetics',
    challenge: 'Struggling to differentiate in a crowded beauty market; customers perceived products as generic',
    solution: 'Custom magnetic closure rigid boxes with gold foil stamping and custom tissue',
    result: 'Became a TikTok sensation with unboxing videos',
    metric: '+45% repeat purchase rate in 3 months',
    image: '/images/industry-cosmetics.jpg',
  },
  {
    brand: 'Jewelry Collective',
    industry: 'Jewelry & Luxury Goods',
    challenge: 'Premium positioning not reflected in packaging; needed to justify higher price points',
    solution: 'Drawer-style rigid boxes with embossing and custom velvet inserts',
    result: 'Generated 50K+ unboxing video views organically',
    metric: '60% higher perceived value among customers',
    image: '/images/industry-jewelry.jpg',
  },
  {
    brand: 'Gifting Startup',
    industry: 'Gifting & Subscriptions',
    challenge: 'Monthly subscription boxes felt plain despite quality products; low repeat rate',
    solution: 'Premium rigid boxes with foil stamping, custom tissue, and branded inserts',
    result: 'Customers shared unboxing experiences on social media',
    metric: '+75% customer retention in subscription cohort',
    image: '/images/gallery-5.jpg',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="bg-off-white section-padding">
      <div className="content-max mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-h1 text-text-dark mb-4">D2C Brands That Chose Picasso</h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
            Real results from real D2C brands investing in premium packaging
          </p>
          <div className="gold-line mx-auto mt-8" />
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-text-muted/10 hover:shadow-card transition-all duration-300 group"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.brand}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                {/* Brand Info */}
                <h3 className="text-h3 text-text-dark mb-1">{study.brand}</h3>
                <p className="text-sm font-medium text-gold mb-4">{study.industry}</p>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-2">
                    Challenge
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">
                    Our Solution
                  </p>
                  <p className="text-sm text-text-dark leading-relaxed">{study.solution}</p>
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-text-muted/10">
                  <p className="text-xs uppercase tracking-wider text-text-muted font-semibold mb-2">
                    Result
                  </p>
                  <p className="text-sm text-text-muted mb-2">{study.result}</p>
                  <p className="text-h3 text-navy font-bold">{study.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-gold hover:text-gold-dim font-semibold transition-colors group">
            Read Full Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
