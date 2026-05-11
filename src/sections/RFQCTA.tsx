import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Clock } from 'lucide-react'

export default function RFQCTA() {
  return (
    <section className="bg-ink py-24 px-4 md:px-8">
      <div className="content-max mx-auto max-w-4xl">
        <div className="bg-charcoal rounded-xl p-8 md:p-16 border border-white/8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Turn Your Packaging Into a Competitive Advantage?
            </h2>
            <p className="text-lg text-white/80">
              Get a detailed quote in under 30 minutes. Share your specs, quantity, and timeline — our team responds fast.
            </p>
          </div>

          <div className="space-y-6">
            {/* Form CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-ink font-bold py-4 px-6 rounded-lg hover:bg-gold-light transition-colors">
                Get My Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919819824242?text=Hi%20Picasso%20Print%20%26%20Pack,%20I%20need%20a%20packaging%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-bold py-4 px-6 rounded-lg hover:bg-gold/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-charcoal text-white/60">Or prefer to talk?</span>
              </div>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4 border border-white/10 rounded-lg">
                <p className="text-white/60 text-sm mb-2">WhatsApp Business</p>
                <a href="https://wa.me/919819824242" className="text-gold font-bold hover:text-gold-light">
                  +91 98198 24242
                </a>
              </div>
              <div className="p-4 border border-white/10 rounded-lg">
                <p className="text-white/60 text-sm mb-2">Email</p>
                <a href="mailto:info@picassopack.com" className="text-gold font-bold hover:text-gold-light">
                  info@picassopack.com
                </a>
              </div>
              <div className="p-4 border border-white/10 rounded-lg">
                <p className="text-white/60 text-sm mb-2">Phone</p>
                <a href="tel:+919819824242" className="text-gold font-bold hover:text-gold-light">
                  +91 98198 24242
                </a>
              </div>
            </div>

            {/* Trust Message */}
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <Clock className="w-4 h-4 text-gold" />
              <span>Average response time: 28 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
