import { useStaggerFadeIn } from '../hooks/useScrollAnimation'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Picasso Print & Pack transformed our brand presence. The rigid boxes they created for our perfume line have become a signature part of our unboxing experience. Clients now keep the boxes as keepsakes.",
    name: 'Priya Sharma',
    title: 'Founder',
    company: 'Aurum Fragrances',
  },
  {
    quote: "We've worked with dozens of packaging vendors across India. Picasso stands apart for their consistency, speed, and genuine partnership approach. They treat our brand like their own.",
    name: 'Rajesh Mehta',
    title: 'Procurement Head',
    company: 'HealthFirst Pharma',
  },
  {
    quote: "The turnaround time is remarkable. From design approval to delivery in under 10 days — and the quality never dips. That's why we've scaled from 5,000 to 500,000 units with them.",
    name: 'Ankit Patel',
    title: 'CEO',
    company: 'FreshBite Foods',
  },
]

export default function Testimonials() {
  const containerRef = useStaggerFadeIn('.testimonial-card', 0.15)

  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{
        backgroundImage: 'url(/images/product-rigid-boxes.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-navy/75 backdrop-blur-sm" />

      <div className="content-max mx-auto relative z-10" ref={containerRef}>
        <div className="mb-12 text-center">
          <h2 className="text-h1 text-ivory mb-3">What Our Partners Say</h2>
          <p className="text-body-sm text-ivory/60 mb-6">Real feedback from real D2C brands we've partnered with</p>
          <div className="gold-line mx-auto" />
        </div>

        {/* Featured Testimonial */}
        <div className="testimonial-card relative max-w-4xl mx-auto text-center mb-16">
          <Quote className="w-12 h-12 text-gold/20 mx-auto mb-6" />
          <blockquote className="text-body-lg text-ivory font-medium leading-relaxed mb-6">
            "{testimonials[0].quote}"
          </blockquote>
          <div>
            <p className="text-sm text-gold font-medium">{testimonials[0].name}</p>
            <p className="text-xs text-ivory/60 mt-1">
              {testimonials[0].title}, {testimonials[0].company}
            </p>
          </div>
        </div>

        {/* Other Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.slice(1).map((t) => (
            <div key={t.name} className="testimonial-card bg-navy/60 backdrop-blur-md rounded-lg p-8 border border-ivory/10 hover:border-gold/30 transition-all duration-300">
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <blockquote className="text-sm text-ivory/90 leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-sm font-medium text-gold">{t.name}</p>
                <p className="text-xs text-ivory/60 mt-1">
                  {t.title}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
