import { useState } from 'react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'

const filters = ['All', 'Paper Bags', 'Rigid Boxes', 'Cartons', 'Commercial Print']

const galleryItems = [
  { image: '/images/gallery-1.jpg', title: 'Premium Twisted Handle Bag', category: 'Paper Bags' },
  { image: '/images/gallery-2.jpg', title: 'Luxury Drawer Box', category: 'Rigid Boxes' },
  { image: '/images/gallery-3.jpg', title: 'Pharma Folding Cartons', category: 'Cartons' },
  { image: '/images/gallery-4.jpg', title: 'Gold Foil Brochure', category: 'Commercial Print' },
  { image: '/images/gallery-5.jpg', title: 'Custom Die-Cut Structure', category: 'Cartons' },
  { image: '/images/gallery-6.jpg', title: 'Food-Grade SOS Bags', category: 'Paper Bags' },
  { image: '/images/gallery-7.jpg', title: 'Gold Foil Packaging', category: 'Rigid Boxes' },
  { image: '/images/gallery-8.jpg', title: 'Perfume Box Set', category: 'Rigid Boxes' },
  { image: '/images/gallery-9.jpg', title: 'Warehouse Scale', category: 'Paper Bags' },
  { image: '/images/gallery-10.jpg', title: 'Corporate Stationery', category: 'Commercial Print' },
  { image: '/images/gallery-11.jpg', title: 'Retail Shopping Bags', category: 'Paper Bags' },
]

export default function GalleryShowcase() {
  const [activeFilter, setActiveFilter] = useState('All')
  const containerRef = useStaggerFadeIn('.gallery-item', 0.08)

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section className="bg-stone py-24 px-4 md:px-8">
      <div className="content-max mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="text-5xl font-black text-ink mb-4">Work That Speaks</h2>
          <p className="text-lg text-text-muted">
            Discover the packaging projects we've brought to life for leading brands
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gold text-ink'
                  : 'bg-white text-ink hover:bg-gold/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={containerRef} className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {filteredItems.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="gallery-item break-inside-avoid group relative rounded overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-colors duration-300 flex items-end">
                <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-caption text-gold">{item.category}</span>
                  <h4 className="text-h3 text-ivory mt-1">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
