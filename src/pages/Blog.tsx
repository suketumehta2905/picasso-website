import { useEffect } from 'react'
import { Clock, ArrowRight } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'
import { generateBlogSchema, injectSchema } from '../lib/schemaMarkup'

const articles = [
  {
    title: 'Rigid Box vs Folding Carton: Which Packaging Feels More Premium?',
    excerpt: 'Learn when to choose luxury rigid boxes over folding cartons. Understand the differences, costs, and which format creates the strongest unboxing experience for your brand.',
    category: 'Buying Guide',
    date: 'May 10, 2026',
    readTime: '8 min read',
    image: '/images/blog-rigid-vs-carton.jpg',
    seoTitle: 'Rigid Box vs Folding Carton: Which Feels More Premium?',
    primaryKeyword: 'rigid box vs folding carton',
    targetPersona: ['D2C Brand Manager', 'Startup Founder'],
  },
  {
    title: 'How Startups Can Choose Premium Packaging with Low MOQs',
    excerpt: 'Your product is great—now make the packaging match. A step-by-step guide for founders choosing premium packaging when you only need 500–2,000 units.',
    category: 'Strategy',
    date: 'May 8, 2026',
    readTime: '7 min read',
    image: '/images/gallery-7.jpg',
    seoTitle: 'Premium Packaging for Startups: Low MOQ Guide',
    primaryKeyword: 'low MOQ packaging manufacturer India',
    targetPersona: ['Startup Founder'],
  },
  {
    title: 'Top Paper Bag Styles for Retail, Gifting, QSR & D2C Brands',
    excerpt: 'Paper bags are more than carry solutions—they\'re mobile brand assets. Explore twisted handles, flat handles, rope handles, and D-cut bags for your industry.',
    category: 'Product Guide',
    date: 'May 6, 2026',
    readTime: '8 min read',
    image: '/images/blog-gsm-guide.jpg',
    seoTitle: 'Paper Bag Styles: Twisted, Flat, Rope & D-Cut Guide',
    primaryKeyword: 'types of paper bags for retail',
    targetPersona: ['Startup Founder', 'Procurement Head', 'QSR Owner'],
  },
  {
    title: 'Packaging Finishes Explained: Foil, Embossing, Spot UV & More',
    excerpt: 'A packaging finish often defines whether your box or bag feels premium. Learn when to use foil stamping, embossing, spot UV, and lamination to elevate perceived value.',
    category: 'Technical Guide',
    date: 'May 4, 2026',
    readTime: '7 min read',
    image: '/images/blog-sustainability.jpg',
    seoTitle: 'Premium Packaging Finishes: Foil, Embossing, Spot UV Guide',
    primaryKeyword: 'packaging finishes explained',
    targetPersona: ['Brand Team', 'Designer', 'D2C Manager'],
  },
  {
    title: 'Magnetic Closure Box vs Drawer Style Box: Which Feels Better?',
    excerpt: 'Two premium rigid box structures create different unboxing moments. Discover when to use magnetic closures for perfumes and when drawer boxes work best for jewelry.',
    category: 'Buying Guide',
    date: 'May 2, 2026',
    readTime: '6 min read',
    image: '/images/about-factory.jpg',
    seoTitle: 'Magnetic vs Drawer Box: Structure & Unboxing Guide',
    primaryKeyword: 'magnetic closure box vs drawer box',
    targetPersona: ['Designer', 'D2C Manager', 'Brand Team'],
  },
  {
    title: 'Packaging Quote Checklist: What to Share Before Asking for Price',
    excerpt: 'Get accurate quotes faster. Use our checklist to prepare product specs, quantities, materials, finishes, and timelines before contacting a packaging manufacturer.',
    category: 'Procurement',
    date: 'Apr 30, 2026',
    readTime: '5 min read',
    image: '/images/industry-qsr.jpg',
    seoTitle: 'Packaging Quote Checklist: Pre-Quote Preparation Guide',
    primaryKeyword: 'packaging quote checklist',
    targetPersona: ['Procurement Head', 'Startup Founder'],
  },
  {
    title: 'How Premium Packaging Increases Perceived Value of Your Product',
    excerpt: 'Research shows premium packaging increases customer perception by 30-50%. Learn how packaging design, materials, and finishes drive higher perceived value and justify pricing.',
    category: 'Strategy',
    date: 'Apr 28, 2026',
    readTime: '7 min read',
    image: '/images/gallery-7.jpg',
    seoTitle: 'Premium Packaging & Perceived Value: ROI Guide',
    primaryKeyword: 'how premium packaging increases perceived value',
    targetPersona: ['D2C Manager', 'Brand Manager'],
  },
  {
    title: 'Kraft Paper vs Art Paper: Which Is Better for Custom Paper Bags?',
    excerpt: 'Kraft paper feels natural and eco-conscious. Art paper feels premium and vibrant. Understand the trade-offs and choose the right material for your brand.',
    category: 'Technical Guide',
    date: 'Apr 26, 2026',
    readTime: '6 min read',
    image: '/images/blog-gsm-guide.jpg',
    seoTitle: 'Kraft vs Art Paper: Custom Paper Bag Material Guide',
    primaryKeyword: 'kraft paper vs art paper',
    targetPersona: ['Startup Founder', 'Designer', 'Procurement Head'],
  },
  {
    title: 'Best Packaging Ideas for Beauty and Cosmetics Brands',
    excerpt: 'Beauty brands demand premium packaging that communicates luxury, protects products, and creates unboxing moments. Learn which formats, finishes, and materials work best.',
    category: 'Industry Guide',
    date: 'Apr 24, 2026',
    readTime: '9 min read',
    image: '/images/industry-cosmetics.jpg',
    seoTitle: 'Premium Packaging for Beauty & Cosmetics Brands',
    primaryKeyword: 'packaging for cosmetics brands',
    targetPersona: ['Brand Manager', 'D2C Manager', 'Designer'],
  },
  {
    title: 'Best Rigid Box Styles for Perfumes, Jewelry and Gift Sets',
    excerpt: 'Perfume boxes, jewelry packaging, and gift sets demand different structures. Magnetic closures, drawer styles, and custom inserts create different unboxing experiences.',
    category: 'Product Guide',
    date: 'Apr 22, 2026',
    readTime: '8 min read',
    image: '/images/industry-jewelry.jpg',
    seoTitle: 'Premium Rigid Box Styles for Perfume, Jewelry & Gifts',
    primaryKeyword: 'rigid boxes for perfume jewelry gift',
    targetPersona: ['Designer', 'D2C Manager', 'Brand Manager'],
  },
  {
    title: 'How to Choose Handle Types for Paper Bags',
    excerpt: 'Twisted handles, flat handles, rope handles, D-cut bags — each creates a different brand experience. Learn which handle type suits your product and customer journey.',
    category: 'Technical Guide',
    date: 'Apr 20, 2026',
    readTime: '7 min read',
    image: '/images/product-paper-bags.jpg',
    seoTitle: 'Paper Bag Handle Types: Twisted, Flat, Rope Guide',
    primaryKeyword: 'paper bag handle types',
    targetPersona: ['Startup Founder', 'Procurement Head', 'Designer'],
  },
  {
    title: 'What Is Spot UV and When Should Brands Use It?',
    excerpt: 'Spot UV adds glossy highlights to selected areas while keeping the rest matte. It creates striking visual contrasts that make logos pop and feel premium.',
    category: 'Technical Guide',
    date: 'Apr 18, 2026',
    readTime: '6 min read',
    image: '/images/gallery-2.jpg',
    seoTitle: 'Spot UV Packaging: When & How to Use It',
    primaryKeyword: 'spot UV packaging',
    targetPersona: ['Designer', 'Brand Manager', 'D2C Manager'],
  },
  {
    title: 'Why D2C Brands Should Invest in Better Unboxing',
    excerpt: 'Unboxing moments create social media content, brand loyalty, and perceived value. D2C brands with premium packaging see 30-50% higher customer retention.',
    category: 'Strategy',
    date: 'Apr 16, 2026',
    readTime: '8 min read',
    image: '/images/gallery-8.jpg',
    seoTitle: 'D2C Unboxing Experience: Premium Packaging ROI',
    primaryKeyword: 'D2C unboxing premium packaging',
    targetPersona: ['D2C Manager', 'Brand Manager'],
  },
  {
    title: 'Corporate Gifting: How to Make Hampers Look Premium',
    excerpt: 'Corporate gifting boxes must balance luxury feel, practical storage, and professional presentation. Learn materials, finishes, and structures that impress clients.',
    category: 'Industry Guide',
    date: 'Apr 14, 2026',
    readTime: '7 min read',
    image: '/images/gallery-1.jpg',
    seoTitle: 'Premium Corporate Gift Hamper Packaging Guide',
    primaryKeyword: 'corporate gifting packaging',
    targetPersona: ['Procurement Head', 'Brand Manager'],
  },
  {
    title: 'How to Choose Packaging for a Product Launch',
    excerpt: 'Product launches are critical moments. First impression packaging creates buzz, drives unboxings, and sets brand perception. Here\'s how to choose strategically.',
    category: 'Strategy',
    date: 'Apr 12, 2026',
    readTime: '8 min read',
    image: '/images/gallery-5.jpg',
    seoTitle: 'Product Launch Packaging Strategy & Design',
    primaryKeyword: 'packaging for product launch',
    targetPersona: ['Startup Founder', 'D2C Manager', 'Brand Manager'],
  },
  {
    title: 'Paper Bags for QSR and Cafes: What Brands Should Check',
    excerpt: 'Food-grade paper bags for restaurants and cafes must be strong, safe, grease-resistant, and brandable. Learn material requirements and best practices.',
    category: 'Industry Guide',
    date: 'Apr 10, 2026',
    readTime: '7 min read',
    image: '/images/industry-qsr.jpg',
    seoTitle: 'QSR & Cafe Paper Bag Packaging Guide',
    primaryKeyword: 'QSR cafe paper bag',
    targetPersona: ['QSR Owner', 'Procurement Head'],
  },
  {
    title: 'Sustainable Packaging Options for Premium Brands',
    excerpt: 'Premium doesn\'t mean wasteful. Sustainable materials, eco-friendly inks, and recyclable structures now deliver luxury while respecting the environment.',
    category: 'Sustainability',
    date: 'Apr 8, 2026',
    readTime: '8 min read',
    image: '/images/blog-sustainability.jpg',
    seoTitle: 'Sustainable Premium Packaging Solutions',
    primaryKeyword: 'sustainable premium packaging',
    targetPersona: ['D2C Manager', 'Brand Manager'],
  },
  {
    title: 'Packaging Artwork Checklist Before Production',
    excerpt: 'Send the wrong artwork file and risk expensive reprinting. Use this checklist to ensure your design files are production-ready before manufacturing begins.',
    category: 'Procurement',
    date: 'Apr 6, 2026',
    readTime: '6 min read',
    image: '/images/blog-rigid-vs-carton.jpg',
    seoTitle: 'Packaging Artwork Checklist & Design Requirements',
    primaryKeyword: 'packaging artwork checklist',
    targetPersona: ['Designer', 'Brand Manager'],
  },
  {
    title: 'Common Packaging Mistakes Startups Should Avoid',
    excerpt: 'Don\'t learn the hard way. Learn from common mistakes: wrong MOQ, poor material choice, missing proofs, and designs that don\'t print well.',
    category: 'Strategy',
    date: 'Apr 4, 2026',
    readTime: '7 min read',
    image: '/images/gallery-7.jpg',
    seoTitle: 'Startup Packaging Mistakes to Avoid',
    primaryKeyword: 'common packaging mistakes startups',
    targetPersona: ['Startup Founder', 'D2C Manager'],
  },
  {
    title: 'How to Choose a Packaging Manufacturer in Mumbai',
    excerpt: 'Finding the right packaging partner in Mumbai takes more than a Google search. Learn what questions to ask, what certifications matter, and red flags to watch.',
    category: 'Procurement',
    date: 'Apr 2, 2026',
    readTime: '8 min read',
    image: '/images/about-factory.jpg',
    seoTitle: 'How to Choose Packaging Manufacturer in Mumbai',
    primaryKeyword: 'packaging manufacturer Mumbai',
    targetPersona: ['Procurement Head', 'Startup Founder'],
  },
]

export default function Blog() {
  const containerRef = useStaggerFadeIn('.article-card', 0.1)

  // Add FAQ Schema for Blog
  useEffect(() => {
    const faqs = [
      {
        q: 'What topics does the Picasso packaging blog cover?',
        a: 'Our blog covers packaging design, finishes, materials, industry-specific solutions, startup guides, and sustainability topics for brands.',
      },
      {
        q: 'How often is new content published?',
        a: 'We publish new articles regularly covering high-intent keywords related to packaging, manufacturing, and brand positioning.',
      },
      {
        q: 'Can I use blog articles for my business?',
        a: 'Our blog content is for educational purposes to help brands make informed packaging decisions. Each article includes actionable insights.',
      },
    ]

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    }

    const cleanup = injectSchema(faqSchema)
    return cleanup
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-navy pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <h1 className="text-display-md text-ivory mb-4">Packaging Insights</h1>
          <p className="text-body-lg text-ivory/60 max-w-xl">
            Expert guidance on packaging procurement, design, sustainability, and industry trends.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-ivory section-padding">
        <div className="content-max mx-auto" ref={containerRef}>
          <div className="mb-12">
            <h2 className="text-h1 text-text-dark mb-4">Latest Articles</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="article-card group bg-off-white rounded overflow-hidden card-hover">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="text-caption text-gold">{article.category}</span>
                    <span className="text-caption text-text-muted">{article.date}</span>
                    {article.targetPersona && (
                      <span className="text-caption text-navy-light bg-ivory px-2 py-0.5 rounded text-xs">
                        {Array.isArray(article.targetPersona) ? article.targetPersona[0] : article.targetPersona}
                      </span>
                    )}
                  </div>
                  <h3 className="text-h3 text-text-dark mb-3 group-hover:text-navy transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  {article.primaryKeyword && (
                    <p className="text-xs text-text-muted italic mb-3">
                      Keyword: <span className="text-gold font-medium">{article.primaryKeyword}</span>
                    </p>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span className="text-caption text-gold group-hover:text-gold-dim inline-flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
