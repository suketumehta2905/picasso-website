const testimonials = [
  {
    quote: "Picasso didn't just deliver boxes — they delivered a strategy. Our unboxing content generates more organic reach than our paid ads. That's ROI you can't buy.",
    name: 'Priya Sharma',
    title: 'Founder',
    company: 'Aurum Fragrances',
    location: 'Mumbai, India',
  },
  {
    quote: "We've worked with dozens of packaging vendors. Picasso is the only one that treats our brand like their own. The attention to detail is obsessive — in the best way.",
    name: 'Rajesh Mehta',
    title: 'Head of Procurement',
    company: 'HealthFirst Pharma',
    location: 'Pune, India',
  },
  {
    quote: "From design approval to delivery in 9 days. The quality never dipped. We scaled from 5,000 to 500,000 units with zero drama.",
    name: 'Ankit Patel',
    title: 'CEO',
    company: 'FreshBite Foods',
    location: 'Bangalore, India',
  },
]

export default function Testimonials() {
  return (
    <section
      className="relative py-24 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(/Kimi Images/picasso_website_images/15_testimonials_bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-ink/75 backdrop-blur-sm z-0" />

      <div className="content-max mx-auto max-w-5xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
            What Our Partners Say
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Real Feedback from Real Brands
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-charcoal border border-white/8 rounded-lg p-8 md:p-12 hover:border-gold/30 transition-all"
            >
              {/* Quote Mark */}
              <div className="text-8xl text-gold/10 leading-none mb-4 font-serif">"</div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex-shrink-0" />
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-sm text-white/60">
                    {testimonial.title}, {testimonial.company}
                  </p>
                  <p className="text-xs text-white/40 mt-1">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === 0 ? 'bg-gold w-8' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
