import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '/products/paper-bags' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-md py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] flex items-center justify-between gap-12">
          <Link to="/" className="relative z-50 flex-shrink-0 hover:opacity-80 transition-opacity">
            {/* Desktop: Full Logo (Dark version for header) */}
            <img
              src="/images/picasso-logo-dark.svg"
              alt="Picasso Print & Pack - Premium Packaging for D2C Brands"
              className="hidden md:block h-20 w-auto"
              loading="eager"
            />
            {/* Mobile: Mark Only (Dark version for header) */}
            <img
              src="/images/picasso-mark-dark.svg"
              alt="Picasso"
              className="md:hidden h-12 w-12"
              loading="eager"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm uppercase font-bold tracking-wider text-ivory hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm font-bold px-8 py-3 ml-4">
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-ivory" />
            ) : (
              <Menu className="w-6 h-6 text-ivory" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-navy transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-h2 font-bold text-ivory hover:text-gold transition-colors duration-300 uppercase tracking-wide"
              style={{
                transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.4s ease-out',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary mt-4"
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 50}ms` : '0ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out',
            }}
          >
            Get Your Quote
          </Link>
        </div>
      </div>
    </>
  )
}
