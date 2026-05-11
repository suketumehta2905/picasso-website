import { Link } from 'react-router-dom'
import { Award, HeartHandshake, Zap, Target, ArrowRight } from 'lucide-react'
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
      <section className="relative min-h-[70vh] flex items-center bg-ink pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <div ref={heroRef}>
            <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
              About Picasso
            </span>
            <h1 className="text-5xl font-black text-white mb-6">
              Built in Mumbai<br />
              <span className="text-gold">For India</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Two decades of packaging excellence. One relentless commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/images/about-factory.jpg"
                alt="Picasso manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-black text-ink mb-6">Our Story</h2>
              <div className="h-1 w-16 bg-gold mb-6" />
              <p className="text-lg text-ink/70 leading-relaxed mb-6">
                Founded in 2008, Picasso Print & Pack began with a simple belief: Indian brands deserve packaging that rivals the world's best. What started as a small commercial printing unit in Mumbai has evolved into one of India's most trusted packaging partners.
              </p>
              <p className="text-lg text-ink/70 leading-relaxed mb-6">
                Today, we serve 500+ brands across major Indian cities, manufacturing everything from humble kraft paper bags to luxury rigid boxes for India's most prestigious brands. Our state-of-the-art facility houses cutting-edge die-cutting, lamination, and printing lines.
              </p>
              <p className="text-lg text-ink/70 leading-relaxed">
                But our true measure of success isn't equipment or capacity — it's the trust our clients place in us, order after order, year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-24 px-4 md:px-8" ref={valuesRef}>
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-white mb-4">What We Stand For</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-stone py-24 px-4 md:px-8" ref={timelineRef}>
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">Our Journey</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="timeline-item bg-white rounded-lg p-6 hover:shadow-elevated transition-all">
                <span className="text-5xl font-black text-gold/20 block">{m.year}</span>
                <h3 className="text-lg font-bold text-ink -mt-4">{m.event}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">Leadership Team</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/2] rounded-lg overflow-hidden">
              <img
                src="/images/about-team.jpg"
                alt="Picasso leadership team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-ink/70 leading-relaxed mb-6">
                Our leadership team brings together decades of experience in packaging engineering, supply chain management, and brand strategy. Each member is driven by a shared mission: to make Indian packaging world-class.
              </p>
              <p className="text-lg text-ink/70 leading-relaxed mb-8">
                From our CEO who started as a press operator to our Head of Design who trained at NID, our team embodies the belief that the best ideas come from diverse perspectives and deep expertise.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gold text-ink font-bold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors">
                Work With Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-charcoal py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-white mb-4">Certifications & Compliance</h2>
            <div className="h-1 w-16 bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['ISO 9001', 'FSC Certified', 'SEDEX', 'GMP Compliant'].map((cert) => (
              <div key={cert} className="text-center p-6 border border-white/10 rounded-lg">
                <span className="text-2xl font-bold text-gold block mb-2">{cert.split(' ')[0]}</span>
                <span className="text-sm text-white/70">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RFQCTA />
    </>
  )
}
