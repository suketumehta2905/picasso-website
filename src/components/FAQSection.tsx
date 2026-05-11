import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ContactFormModal from './ContactFormModal'

const faqs = [
  {
    question: 'What makes rigid boxes better for D2C brands than folding cartons?',
    answer: 'Rigid boxes feel premium and substantial—they create a luxury unboxing experience that drives brand loyalty and social media content. They support custom finishes (foil, embossing, spot UV) and custom inserts that elevate perceived value. Perfect for beauty, jewelry, and luxury goods where unboxing is part of the brand story.',
    relatedBlog: 'Rigid Box vs Folding Carton',
  },
  {
    question: 'What does MOQ (Minimum Order Quantity) mean and what\'s yours?',
    answer: 'MOQ is the smallest quantity we\'ll produce. At Picasso, our MOQ is 500 units—perfect for D2C brands testing products, launching limited editions, or seasonal releases. You can scale up as your business grows. No 10K+ minimum commitments required.',
    relatedBlog: 'How Startups Choose Premium Packaging',
  },
  {
    question: 'What are the best rigid box structures for different products?',
    answer: 'Magnetic closure boxes are perfect for beauty, cosmetics, and small gifts—they feel luxury and protect products. Drawer boxes are ideal for jewelry and high-end items—they create an elegant opening experience. Custom insert boxes work for any product category—they create branded unboxing moments.',
    relatedBlog: 'Rigid Box Styles Guide',
  },
  {
    question: 'What is foil stamping and why does it matter?',
    answer: 'Foil stamping adds metallic shine (gold, silver, or copper) to your logo or design elements. It creates a luxury feel, catches light beautifully, and significantly increases perceived value. For D2C brands, foil stamping often justifies premium pricing—customers perceive higher value.',
    relatedBlog: 'Packaging Finishes Explained',
  },
  {
    question: 'What is spot UV and should I use it?',
    answer: 'Spot UV is a glossy coating applied to specific areas (usually logos) while the rest stays matte. It creates striking visual contrast that feels premium and modern. Use it to make your logo pop, create luxury packaging, or add emphasis to key brand elements.',
    relatedBlog: 'What Is Spot UV and When to Use It',
  },
  {
    question: 'How much extra does it cost for premium finishes?',
    answer: 'Premium finishes (foil, embossing, spot UV) add cost, but the increased perceived value often justifies the investment. A D2C beauty brand with foil-stamped packaging can command 20-30% higher prices. We provide quotes that break down finish costs so you can calculate ROI.',
    relatedBlog: 'Premium Packaging & Perceived Value',
  },
  {
    question: 'How long does production take?',
    answer: 'Standard lead time is 4–6 weeks from artwork approval. Rush options (2–3 weeks) are available for product launches and seasonal releases. Timeline depends on customization level, quantity, and finish complexity. Share your deadline when requesting a quote.',
    relatedBlog: 'Packaging Quote Checklist',
  },
  {
    question: 'What information do I need to provide for a quote?',
    answer: 'Share: (1) Brand/product name, (2) Product category (beauty, jewelry, fashion, gifting), (3) Quantity needed, (4) Box dimensions/size, (5) Material preference, (6) Desired finishes (foil, embossing, spot UV, etc.), (7) Artwork or reference images, (8) Timeline. Use our Quote Checklist for detailed guidance.',
    relatedBlog: 'Packaging Quote Checklist',
  },
  {
    question: 'Can you help with packaging design or should I provide finished artwork?',
    answer: 'We can do both! You can provide finished artwork, or our design team can collaborate with you. We recommend design collaboration for D2C brands—we help you choose finishes, structures, and materials that align with your brand positioning and maximize perceived value.',
    relatedBlog: 'Packaging Design Strategy',
  },
]

export default function FAQSection() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleFAQ = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <>
      <section className="bg-ivory py-16 px-4 md:px-8">
        <div className="content-max mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-h2 text-text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-body text-text-muted max-w-2xl mx-auto">
              Get answers to common questions about our packaging formats, materials, finishes, and ordering process.
            </p>
          </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-off-white rounded-lg border border-text-muted/10 overflow-hidden hover:shadow-card transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-ivory transition-colors group"
              >
                <span className="flex-1">
                  <h3 className="text-body font-semibold text-text-dark group-hover:text-navy transition-colors">
                    {faq.question}
                  </h3>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 mt-1 ${
                    expanded[index] ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expanded[index] && (
                <div className="px-6 pb-6 border-t border-text-muted/10 animate-in fade-in slide-in-from-top-2 duration-200">
                  <p className="text-sm text-text-muted mb-4">{faq.answer}</p>
                  {faq.relatedBlog && (
                    <div className="pt-4 border-t border-text-muted/10">
                      <a
                        href="/blog"
                        className="text-gold hover:text-gold-dim font-medium inline-flex items-center gap-2 text-sm"
                      >
                        📖 Read: {faq.relatedBlog}
                        <span>→</span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-xl border border-gold/20 text-center">
            <h3 className="text-h4 text-navy mb-3">Didn't find your answer?</h3>
            <p className="text-body text-text-dark mb-6">
              Our packaging experts are ready to answer your specific questions. Reach out today.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-gold text-navy font-semibold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors"
            >
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
