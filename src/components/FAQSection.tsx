import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is the difference between rigid boxes and folding cartons?',
    answer: 'Rigid boxes are made from thick greyboard wrapped with printed paper—they feel sturdy and premium, perfect for luxury products, gifting, and unboxing experiences. Folding cartons are lightweight cardboard that are printed and folded, ideal for FMCG, pharmaceuticals, and high-volume retail. Rigid boxes create stronger brand perception but cost more; folding cartons are economical and practical.',
    relatedBlog: 'Rigid Box vs Folding Carton',
  },
  {
    question: 'What does MOQ (Minimum Order Quantity) mean?',
    answer: 'MOQ is the smallest quantity a manufacturer will produce. At Picasso, we work with startups and D2C brands with practical MOQs starting from 500 units. Your MOQ depends on the packaging format, customization level, and production setup. We\'ll quote based on your needs.',
    relatedBlog: 'How Startups Choose Premium Packaging',
  },
  {
    question: 'What are the most popular paper bag handle types?',
    answer: 'The main types are: (1) Twisted handles—classic, affordable, best for retail and promotions; (2) Flat handles—strongest, best for QSR and heavy items; (3) Rope handles—premium, luxurious, best for fashion and gifting; (4) D-cut—simple, die-cut, best for giveaways and events.',
    relatedBlog: 'Top Paper Bag Styles',
  },
  {
    question: 'What is spot UV and when should I use it?',
    answer: 'Spot UV is a glossy coating applied to specific areas (usually logos or borders) while the rest remains matte. It creates a striking visual and tactile contrast that feels premium. Use it when you want to highlight your logo, create modern luxury packaging, or add emphasis to key design elements.',
    relatedBlog: 'What Is Spot UV and When to Use It',
  },
  {
    question: 'What is foil stamping and does it cost extra?',
    answer: 'Foil stamping adds metallic shine (gold, silver, or copper) to selected areas on your packaging. It creates a luxury feel and catches light beautifully. Yes, foil stamping adds cost, but the premium feel often justifies the investment for high-end products, perfumes, jewelry, and premium gifting.',
    relatedBlog: 'Packaging Finishes Explained',
  },
  {
    question: 'Can I order just 500 or 1,000 units?',
    answer: 'Yes! We specialize in practical quantities for startups and growing brands. We can produce 500 units of custom rigid boxes, 1,000 custom paper bags, or mixed quantities across formats. We work with your timeline and budget.',
    relatedBlog: 'How Startups Choose Premium Packaging',
  },
  {
    question: 'How long does it take to produce packaging?',
    answer: 'Standard lead time is 4–6 weeks from artwork approval. Rush options (2–3 weeks) are available at a premium. Timelines vary based on customization level, quantity, and material. Share your deadline when requesting a quote.',
    relatedBlog: 'Packaging Quote Checklist',
  },
  {
    question: 'What information do I need to provide for an accurate quote?',
    answer: 'Share: (1) Product type and category, (2) Quantity needed, (3) Dimensions/size, (4) Material preference, (5) Finish preference, (6) Artwork or reference image, (7) Delivery city, (8) Expected timeline. Use our Quote Checklist to prepare.',
    relatedBlog: 'Packaging Quote Checklist',
  },
]

export default function FAQSection() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({})

  const toggleFAQ = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section className="bg-ivory py-16 px-4 md:px-8">
      <div className="content-max mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-h1 text-text-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
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
                  <h3 className="text-h3 text-text-dark group-hover:text-navy transition-colors">
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
                  <p className="text-body-lg text-text-muted mb-4">{faq.answer}</p>
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
          <h3 className="text-h3 text-navy mb-3">Didn't find your answer?</h3>
          <p className="text-body-lg text-text-dark mb-6">
            Our packaging experts are ready to answer your specific questions. Reach out today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gold text-navy font-semibold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </section>
  )
}
