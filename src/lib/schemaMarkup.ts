/**
 * Schema Markup Generator for SEO
 * Creates JSON-LD structured data for search engines
 */

export interface BlogArticleSchema {
  title: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  author: {
    '@type': 'Organization'
    name: string
    url: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
}

export interface ProductSchema {
  name: string
  description: string
  image: string[]
  url: string
  brand: {
    '@type': 'Brand'
    name: string
  }
}

export interface FAQPageSchema {
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

/**
 * Generate Blog Article Schema
 * Helps Google understand blog content and display in rich snippets
 */
export const generateBlogSchema = (data: BlogArticleSchema) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: data.title,
  description: data.description,
  image: data.image,
  datePublished: data.datePublished,
  dateModified: data.dateModified || data.datePublished,
  author: data.author,
  publisher: data.publisher,
})

/**
 * Generate Product Schema
 * Helps Google display products with rich snippets in search results
 */
export const generateProductSchema = (data: ProductSchema) => ({
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: data.name,
  description: data.description,
  image: data.image,
  url: data.url,
  brand: data.brand,
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    offerCount: 1,
  },
})

/**
 * Generate FAQ Page Schema
 * Displays FAQs directly in search results
 */
export const generateFAQSchema = (faqs: Array<{ q: string; a: string }>) => ({
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
})

/**
 * Generate Organization Schema
 * Main organization information
 */
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Picasso Print & Pack',
  url: 'https://picassoprint.com',
  logo: 'https://picassoprint.com/images/logo.png',
  description: 'Premium packaging manufacturer in Mumbai offering custom rigid boxes, paper bags, and packaging solutions',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
  },
  sameAs: [
    'https://www.instagram.com/picassoprint',
    'https://www.linkedin.com/company/picasso-print-pack',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@picassoprint.com',
    url: 'https://picassoprint.com/contact',
  },
})

/**
 * Generate Local Business Schema
 * Helps with local search visibility
 */
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Picasso Print & Pack',
  image: 'https://picassoprint.com/images/hero-picasso-packaging.png',
  description: 'Premium packaging manufacturing company',
  url: 'https://picassoprint.com',
  telephone: '+919833136463',
  email: 'contact@picassoprint.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: 'XXXXX',
  },
  priceRange: '₹₹',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
})

/**
 * Hook for inserting schema into document head
 */
export const injectSchema = (schema: object) => {
  if (typeof window === 'undefined') return // SSR safety

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.innerHTML = JSON.stringify(schema)
  document.head.appendChild(script)

  return () => {
    document.head.removeChild(script)
  }
}
