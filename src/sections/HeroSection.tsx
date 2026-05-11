import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import gsap from 'gsap'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const trustRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
        .fromTo(
          titleRef.current?.querySelectorAll('.hero-line') || [],
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current?.querySelectorAll('a, button') || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
          '-=0.4'
        )
        .fromTo(
          trustRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Kimi Images/picasso_website_images/01_hero_unboxing.jpg"
          alt="Premium packaging unboxing moment - Picasso Print & Pack"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/30 to-ink/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 content-max mx-auto px-[clamp(20px,5vw,80px)] text-center py-24">
        <div ref={labelRef} className="mb-6">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full">
            Premium Packaging Manufacturer
          </span>
        </div>

        <div ref={titleRef} className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
            <span className="hero-line block">The Packaging Your</span>
            <span className="hero-line block">Customers Won't</span>
            <span className="hero-line block">
              <span className="text-gold">Throw Away</span>
            </span>
          </h1>
        </div>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Custom rigid boxes with magnetic closures, foil stamping & embossing. Built for D2C brands who sell unboxing as part of the product. Starting at 500 units. Delivered in 4-6 weeks.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Link to="#contact" className="inline-flex items-center gap-2 bg-gold text-ink font-bold py-4 px-8 rounded-lg hover:bg-gold-light transition-colors">
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="inline-flex items-center gap-2 border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors">
            See Our Work
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        {/* Trust Bar */}
        <div ref={trustRef} className="border-t border-white/20 pt-12">
          <p className="text-white/60 text-sm font-medium mb-6 uppercase tracking-wider">Trusted by:</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="h-10 w-24 bg-white/20 rounded flex items-center justify-center text-white/40 text-xs font-medium">Logo</div>
            <div className="h-10 w-24 bg-white/20 rounded flex items-center justify-center text-white/40 text-xs font-medium">Logo</div>
            <div className="h-10 w-24 bg-white/20 rounded flex items-center justify-center text-white/40 text-xs font-medium">Logo</div>
            <div className="h-10 w-24 bg-white/20 rounded flex items-center justify-center text-white/40 text-xs font-medium">Logo</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <ChevronDown className="w-6 h-6 text-gold/50" />
      </div>
    </section>
  )
}
