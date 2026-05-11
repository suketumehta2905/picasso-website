import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import { useFadeIn } from '../hooks/useScrollAnimation'

const faqs = [
  {
    question: 'What is your Minimum Order Quantity (MOQ)?',
    answer: 'Our MOQ starts at 500 units for most paper bag and carton products. For rigid boxes, MOQ typically starts at 300 units. We also offer sample batches as low as 50 units for validation before scaling.',
  },
  {
    question: 'How quickly can I get a sample?',
    answer: 'Standard sampling takes 2-3 business days. For urgent requirements, we offer same-day digital prototypes and next-day physical samples for select products.',
  },
  {
    question: 'What is your typical production timeline?',
    answer: 'Production timelines vary by product and quantity. Paper bags: 5-7 days. Rigid boxes: 10-14 days. Folding cartons: 7-10 days. Rush orders can be accommodated with prior notice.',
  },
  {
    question: 'Do you ship pan-India?',
    answer: 'Yes, we deliver to all 28 states and 8 union territories. We have partnered logistics networks ensuring 99.2% on-time delivery across India. International shipping available on request.',
  },
  {
    question: 'What customization options do you offer?',
    answer: 'Full customization including size, material, color, printing (offset, screen, UV), finishes (gloss, matte, spot UV, foil stamping, embossing), and structural design. We also offer design consultation services.',
  },
  {
    question: 'What are your payment terms?',
    answer: 'For new clients: 50% advance, 50% before dispatch. For established clients: Net 15-30 days based on credit approval. We accept bank transfer, cheque, and UPI.',
  },
]

export default function Contact() {
  const formRef = useFadeIn()
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    quantity: '',
    specifications: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-ink pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-5xl font-black text-white mb-4">Get Your Quote</h1>
          <p className="text-lg text-white/70 max-w-xl">
            Tell us what you need. We'll respond within 30 minutes during business hours.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div ref={formRef}>
              {submitted ? (
                <div className="bg-success/10 rounded-lg p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-ink mb-2">Quote Request Received!</h3>
                  <p className="text-ink/70">
                    Our team will review your requirements and respond within 30 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-ink/70 block mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full py-3 bg-transparent border-b border-sand focus:border-gold outline-none text-ink"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-ink/70 block mb-2">Company *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full py-3 bg-transparent border-b border-sand focus:border-gold outline-none text-ink"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-ink/70 block mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full py-3 bg-transparent border-b border-sand focus:border-gold outline-none text-ink"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-ink/70 block mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full py-3 bg-transparent border-b border-sand focus:border-gold outline-none text-ink"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-ink/70 block mb-2">Product Type</label>
                      <select
                        value={formData.productType}
                        onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                        className="w-full py-3 bg-transparent border-b border-sand focus:border-gold outline-none text-ink"
                      >
                        <option value="">Select product</option>
                        <option value="paper-bags">Paper Bags</option>
                        <option value="rigid-boxes">Rigid Boxes</option>
                        <option value="mono-cartons">Mono Cartons</option>
                        <option value="commercial-print">Commercial Print</option>
                        <option value="custom">Custom Development</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-ink/70 block mb-2">Quantity</label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full py-3 bg-transparent border-b border-sand focus:border-gold outline-none text-ink"
                        placeholder="e.g. 5,000 units"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-ink/70 block mb-2">Specifications</label>
                    <textarea
                      value={formData.specifications}
                      onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                      rows={4}
                      className="w-full py-3 bg-transparent border-b border-sand focus:border-gold outline-none text-ink resize-none"
                      placeholder="Size, material, finish, colors, delivery timeline..."
                    />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 bg-gold text-ink font-bold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors">
                    <Send className="w-4 h-4" />
                    Get My Quote
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 border border-sand">
                <h3 className="text-2xl font-bold text-ink mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919819824242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-success/10 rounded-lg hover:bg-success/20 transition-colors"
                  >
                    <MessageCircle className="w-6 h-6 text-success" />
                    <div>
                      <span className="text-sm font-bold text-ink block">WhatsApp</span>
                      <span className="text-sm text-ink/70">+91 98198 24242</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4">
                    <Phone className="w-6 h-6 text-gold" />
                    <div>
                      <span className="text-sm font-bold text-ink block">Phone</span>
                      <span className="text-sm text-ink/70">+91 98198 24242</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4">
                    <Mail className="w-6 h-6 text-gold" />
                    <div>
                      <span className="text-sm font-bold text-ink block">Email</span>
                      <span className="text-sm text-ink/70">info@picassopack.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4">
                    <MapPin className="w-6 h-6 text-gold" />
                    <div>
                      <span className="text-sm font-bold text-ink block">Address</span>
                      <span className="text-sm text-ink/70">Mumbai, Maharashtra, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal rounded-lg p-8 text-center">
                <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                <span className="text-2xl font-bold text-white block mb-1">Under 30 Minutes</span>
                <span className="text-sm text-white/70">Average quote response time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-stone py-24 px-4 md:px-8">
        <div className="content-max mx-auto max-w-5xl">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-ink mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-16 bg-gold" />
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden border border-sand">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone/30 transition-colors"
                >
                  <span className="text-sm font-medium text-ink pr-4">{faq.question}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-ink/50 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 border-t border-sand">
                    <p className="text-sm text-ink/70 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
