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
    <section className="bg-navy section-padding">
      <div className="content-max mx-auto" ref={containerRef}>
        <div className="mb-16 text-center">
          <h2 className="text-h1 text-ivory mb-4">What Our Partners Say</h2>
          <div className="gold-line mx-auto" />
        </div>

        {/* Featured Testimonial */}
        <div className="testimonial-card relative max-w-4xl mx-auto text-center mb-16">
          <Quote className="w-16 h-16 text-gold/20 mx-auto mb-6" />
          <blockquote className="text-h2 text-ivory font-medium leading-relaxed mb-8">
            "{testimonials[0].quote}"
          </blockquote>
          <div>
            <p className="text-caption text-gold">{testimonials[0].name}</p>
            <p className="text-sm text-ivory/60 mt-1">
              {testimonials[0].title}, {testimonials[0].company}
            </p>
          </div>
        </div>

        {/* Other Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.slice(1).map((t) => (
            <div key={t.name} className="testimonial-card bg-navy-light rounded p-8">
              <Quote className="w-8 h-8 text-gold/20 mb-4" />
              <blockquote className="text-sm text-ivory/80 leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-caption text-gold">{t.name}</p>
                <p className="text-sm text-ivory/50 mt-1">
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
