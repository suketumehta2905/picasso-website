import { ArrowRight } from 'lucide-react'

interface CaseStudy {
  brand: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    brand: 'Luxe Beauty Co.',
    industry: 'Beauty & Cosmetics',
    challenge: 'Struggling to stand out in a saturated beauty market. Packaging felt generic and failed to justify the $85 price point.',
    solution: 'Custom magnetic-closure rigid box with gold foil logo, embossed pattern, and blush-pink tissue with branded sticker seal.',
    results: [
      '12K organic unboxing video views in first month',
      '18% reduction in damage during shipping',
      'Repeat purchase rate climbed 8 points in 90 days',
    ],
    image: '/Kimi Images/picasso_website_images/12_case_study_beauty.jpg',
  },
  {
    brand: 'The Jewelry Collective',
    industry: 'Jewelry & Luxury Goods',
    challenge: 'Premium jewelry was shipped in generic pouches. Customers couldn\'t justify the price, and return rates were climbing.',
    solution: 'Drawer-style rigid box with deep navy exterior, silver embossing, and custom velvet insert with ribbon pull.',
    results: [
      'Return rate dropped 34%',
      'Customer NPS increased 22 points',
      'Box retention rate: 67% (customers kept the box)',
    ],
    image: '/Kimi Images/picasso_website_images/13_case_study_jewelry.jpg',
  },
  {
    brand: 'GiftBox',
    industry: 'Gifting & Subscriptions',
    challenge: 'Monthly subscription felt disposable. Churn was 28% after month 3.',
    solution: 'Premium rigid box with seasonal foil designs, custom tissue, and QR-linked unboxing experience.',
    results: [
      'Month-3 churn dropped to 11%',
      '43% of subscribers posted unboxing content',
      'Average box reuse: 3.2 times',
    ],
    image: '/Kimi Images/picasso_website_images/14_case_study_giftbox.jpg',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="bg-stone py-24 px-4 md:px-8">
      <div className="content-max mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-5xl font-black text-ink mb-4">Real Results from Real Brands</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Discover how packaging transformed growth and customer perception for leading D2C brands.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={study.image}
                  alt={study.brand}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-8 md:p-12">
                {/* Brand Info */}
                <h3 className="text-2xl font-bold text-ink mb-2">{study.brand}</h3>
                <p className="text-sm font-semibold text-gold uppercase tracking-wider mb-6">{study.industry}</p>

                {/* Challenge */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink">Challenge</h4>
                    <div className="flex-1 h-0.5 bg-gold" />
                  </div>
                  <p className="text-text-muted leading-relaxed">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink">Solution</h4>
                    <div className="flex-1 h-0.5 bg-gold" />
                  </div>
                  <p className="text-text-muted leading-relaxed">{study.solution}</p>
                </div>

                {/* Result */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink">Result</h4>
                    <div className="flex-1 h-0.5 bg-gold" />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-gold font-bold">•</span>
                        <span className="text-text-muted text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a href="#case-studies" className="inline-flex items-center gap-2 bg-gold text-ink font-bold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors">
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
