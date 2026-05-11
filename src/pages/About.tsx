import { Link } from 'react-router-dom'
import { Award, HeartHandshake, Zap, Target } from 'lucide-react'
import { useFadeIn, useStaggerFadeIn } from '../hooks/useScrollAnimation'
import RFQCTA from '../sections/RFQCTA'

const values = [
  {
    icon: Award,
    title: 'Quality Without Compromise',
    description: 'Every unit that leaves our facility meets the highest standards.',
  },
  {
    icon: Zap,
    title: 'Speed as a Standard',
    description: 'Not a premium add-on. Fast turnaround is how we operate.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership Over Transaction',
    description: 'We grow when our clients grow. Long-term relationships matter.',
  },
  {
    icon: Target,
    title: 'Sustainability by Design',
    description: 'Environmental responsibility woven into every decision.',
  },
]

const milestones = [
  { year: '2008', event: 'Founded in Mumbai' },
  { year: '2012', event: 'Rigid Box Unit Launched' },
  { year: '2015', event: 'Pan-India Logistics Network' },
  { year: '2018', event: 'FSC Certification Achieved' },
  { year: '2021', event: '10 Million Boxes Milestone' },
  { year: '2024', event: 'Carbon Neutral Commitment' },
]

export default function About() {
  const heroRef = useFadeIn()
  const valuesRef = useStaggerFadeIn('.value-card', 0.1)
  const timelineRef = useStaggerFadeIn('.timeline-item', 0.1)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-navy pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <div ref={heroRef}>
            <h1 className="text-display text-ivory mb-6">
              <span className="block">BUILT IN</span>
              <span className="block text-gold">MUMBAI</span>
              <span className="block">FOR INDIA</span>
            </h1>
            <p className="text-body-lg text-ivory/60 max-w-xl">
              Two decades of packaging excellence. One relentless commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-ivory section-padding">
        <div className="content-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="image-parallax aspect-[4/3] rounded overflow-hidden">
              <img
                src="/images/about-factory.jpg"
                alt="Picasso manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-h1 text-text-dark mb-6">Our Story</h2>
              <div className="gold-line mb-6" />
              <p className="text-body-lg text-text-muted leading-relaxed mb-6">
                Founded in 2008, Picasso Print & Pack began with a simple belief: Indian brands deserve packaging that rivals the world's best. What started as a small commercial printing unit in Mumbai has evolved into one of India's most trusted packaging partners.
              </p>
              <p className="text-body-lg text-text-muted leading-relaxed mb-6">
                Today, we serve 12,000+ clients across 28 cities, manufacturing everything from humble kraft paper bags to luxury rigid boxes for India's most prestigious brands. Our 150,000 sq. ft. facility houses state-of-the-art die-cutting, lamination, and printing lines.
              </p>
              <p className="text-body-lg text-text-muted leading-relaxed">
                But our true measure of success isn't square footage or machine count — it's the trust our clients place in us, order after order, year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy section-padding">
        <div className="content-max mx-auto" ref={valuesRef}>
          <div className="mb-16">
            <h2 className="text-h1 text-ivory mb-4">What We Stand For</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-h3 text-ivory mb-3">{value.title}</h3>
                <p className="text-sm text-ivory/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-off-white section-padding">
        <div className="content-max mx-auto" ref={timelineRef}>
          <div className="mb-16">
            <h2 className="text-h1 text-text-dark mb-4">Our Journey</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="timeline-item bg-white rounded p-6 card-hover">
                <span className="text-display-md text-gold/30 block">{m.year}</span>
                <h3 className="text-h3 text-text-dark -mt-4">{m.event}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ivory section-padding">
        <div className="content-max mx-auto">
          <div className="mb-16">
            <h2 className="text-h1 text-text-dark mb-4">Leadership Team</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="image-parallax aspect-[3/2] rounded overflow-hidden">
              <img
                src="/images/about-team.jpg"
                alt="Picasso leadership team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-body-lg text-text-muted leading-relaxed mb-6">
                Our leadership team brings together decades of experience in packaging engineering, supply chain management, and brand strategy. Each member is driven by a shared mission: to make Indian packaging world-class.
              </p>
              <p className="text-body-lg text-text-muted leading-relaxed mb-8">
                From our CEO who started as a press operator to our Head of Design who trained at NID, our team embodies the belief that the best ideas come from diverse perspectives and deep expertise.
              </p>
              <Link to="/contact" className="btn-outline-gold">
                Work With Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-navy section-padding">
        <div className="content-max mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-h1 text-ivory mb-4">Certifications</h2>
            <div className="gold-line mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['ISO 9001', 'FSC Certified', 'SEDEX', 'GMP Compliant'].map((cert) => (
              <div key={cert} className="text-center p-6 border border-ivory/10 rounded">
                <span className="text-h3 text-gold block mb-2">{cert.split(' ')[0]}</span>
                <span className="text-sm text-ivory/60">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RFQCTA />
    </>
  )
}
