import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import gsap from 'gsap'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const metaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        titleRef.current?.querySelectorAll('.hero-line') || [],
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current?.querySelectorAll('a') || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          metaRef.current?.querySelectorAll('span') || [],
          { opacity: 0 },
          { opacity: 1, duration: 0.6, stagger: 0.1 },
          '-=0.3'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Hero banner 1.png"
          alt="Premium Picasso Print and Pack branded packaging - rigid boxes and paper bags"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 content-max mx-auto px-[clamp(20px,5vw,80px)] text-center pt-24 pb-32">
        <div ref={titleRef} className="mb-8">
          <h1 className="text-display-md text-ivory">
            <span className="hero-line block">PREMIUM RIGID BOXES</span>
            <span className="hero-line block">THAT CREATE</span>
            <span className="hero-line block text-gold">UNFORGETTABLE UNBOXING</span>
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="text-body text-ivory/60 max-w-2xl mx-auto mb-10"
        >
          Luxury rigid boxes with magnetic closures, foil stamping, embossing & spot UV finishes.
          Starting at 500 units for D2C brands that understand premium packaging drives brand loyalty.
          Expert design collaboration from concept to delivery.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary group">
            Get Your Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/products" className="btn-secondary">
            View Rigid Boxes
          </Link>
        </div>

      </div>
    </section>
  )
}
