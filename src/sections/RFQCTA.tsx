import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Clock } from 'lucide-react'
import { useFadeIn } from '../hooks/useScrollAnimation'

export default function RFQCTA() {
  const sectionRef = useFadeIn()

  return (
    <section ref={sectionRef} className="bg-navy section-padding">
      <div className="content-max mx-auto">
        <div className="bg-navy-light rounded-2xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h1 text-ivory mb-6">
                Ready to Elevate Your Packaging?
              </h2>
              <p className="text-body-lg text-ivory/60 mb-8">
                Get a detailed quote in under 30 minutes. Share your specs, quantity, and timeline — our team responds fast.
              </p>
              <div className="flex items-center gap-3 text-success mb-8">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Average response time: 28 minutes</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary group">
                  Start Your RFQ
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/919819824242?text=Hi%20Picasso%20Print%20%26%20Pack,%20I%20need%20a%20packaging%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-navy rounded-lg p-6">
                    <span className="text-3xl font-bold text-gold">500+</span>
                    <p className="text-sm text-ivory/60 mt-1">MOQ Units</p>
                  </div>
                  <div className="bg-navy rounded-lg p-6">
                    <span className="text-3xl font-bold text-gold">48h</span>
                    <p className="text-sm text-ivory/60 mt-1">Sampling</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-navy rounded-lg p-6">
                    <span className="text-3xl font-bold text-gold">7 Days</span>
                    <p className="text-sm text-ivory/60 mt-1">Production</p>
                  </div>
                  <div className="bg-navy rounded-lg p-6">
                    <span className="text-3xl font-bold text-gold">28+</span>
                    <p className="text-sm text-ivory/60 mt-1">Cities Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
