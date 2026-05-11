import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const productLinks = [
  { label: 'Paper Bags', href: '/products/paper-bags' },
  { label: 'Rigid Boxes', href: '/products/rigid-boxes' },
  { label: 'Mono Cartons', href: '/products/mono-cartons' },
  { label: 'Commercial Print', href: '/products/paper-bags' },
  { label: 'Custom Development', href: '/contact' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Capabilities', href: '/about' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
]

const industryLinks = [
  { label: 'QSR & Food', href: '/industries' },
  { label: 'Pharmaceuticals', href: '/industries' },
  { label: 'Cosmetics', href: '/industries' },
  { label: 'Jewelry', href: '/industries' },
  { label: 'Retail', href: '/industries' },
]

const contactLinks = [
  { label: 'RFQ Form', href: '/contact' },
  { label: 'WhatsApp', href: 'https://wa.me/919819824242' },
  { label: 'Email', href: 'mailto:info@picassopack.com' },
  { label: 'Phone', href: 'tel:+919819824242' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-ivory/10">
      <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-black tracking-tight uppercase text-ivory">
                PICASSO
              </span>
              <span className="block text-[0.7rem] tracking-[0.25em] uppercase text-gold font-medium -mt-1">
                Print & Pack
              </span>
            </Link>
            <p className="text-ivory/60 text-sm leading-relaxed mb-6 max-w-sm">
              Premium packaging manufacturing for brands that demand excellence. 
              From concept to delivery, we build packaging that elevates your brand.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-ivory/60 text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Mumbai, India — Serving brands nationwide</span>
              </div>
              <div className="flex items-center gap-3 text-ivory/60 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+919819824242" className="hover:text-gold transition-colors">+91 98198 24242</a>
              </div>
              <div className="flex items-center gap-3 text-ivory/60 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:info@picassopack.com" className="hover:text-gold transition-colors">info@picassopack.com</a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-caption text-ivory font-medium mb-4">Products</h4>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-ivory/60 hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-caption text-ivory font-medium mb-4">Company</h4>
                <ul className="space-y-3">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-ivory/60 hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-caption text-ivory font-medium mb-4">Industries</h4>
                <ul className="space-y-3">
                  {industryLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-ivory/60 hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-caption text-ivory font-medium mb-4">Contact</h4>
                <ul className="space-y-3">
                  {contactLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-ivory/60 hover:text-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-ivory/40">
            © 2024 Picasso Print & Pack. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-caption text-ivory/40 hover:text-ivory transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="text-caption text-ivory/40 hover:text-ivory transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
