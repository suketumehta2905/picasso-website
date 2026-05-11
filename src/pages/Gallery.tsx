import { useState } from 'react'
import { X } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'

const filters = ['All', 'Paper Bags', 'Rigid Boxes', 'Cartons', 'Commercial Print']

const galleryItems = [
  { image: '/images/gallery-1.jpg', title: 'Premium Twisted Handle Bag', category: 'Paper Bags', client: 'L&V Luxury' },
  { image: '/images/gallery-2.jpg', title: 'Luxury Drawer Box', category: 'Rigid Boxes', client: 'Aurum Noir' },
  { image: '/images/gallery-3.jpg', title: 'Pharma Folding Cartons', category: 'Cartons', client: 'Cardiacare' },
  { image: '/images/gallery-4.jpg', title: 'Gold Foil Brochure', category: 'Commercial Print', client: 'Horologium' },
  { image: '/images/gallery-5.jpg', title: 'Custom Die-Cut Structure', category: 'Cartons', client: 'EcoWave' },
  { image: '/images/gallery-6.jpg', title: 'Food-Grade SOS Bags', category: 'Paper Bags', client: 'FreshBite' },
  { image: '/images/gallery-7.jpg', title: 'Gold Foil Packaging', category: 'Rigid Boxes', client: 'Aurum Atelier' },
  { image: '/images/gallery-8.jpg', title: 'Perfume Box Set', category: 'Rigid Boxes', client: 'Lumiere' },
  { image: '/images/gallery-9.jpg', title: 'Warehouse Scale', category: 'Paper Bags', client: 'Picasso Facility' },
  { image: '/images/gallery-10.jpg', title: 'Corporate Stationery', category: 'Commercial Print', client: 'Ascendant' },
  { image: '/images/gallery-11.jpg', title: 'Retail Shopping Bags', category: 'Paper Bags', client: 'Various Brands' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const containerRef = useStaggerFadeIn('.gallery-item', 0.06)

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-navy pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <h1 className="text-display-md text-ivory mb-4">Gallery</h1>
          <p className="text-body-lg text-ivory/60 max-w-xl">
            A showcase of our finest packaging work across industries and formats.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-ivory section-padding">
        <div className="content-max mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-navy text-ivory'
                    : 'bg-off-white text-text-muted hover:bg-navy/10'
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
                onClick={() => setLightbox(item.image)}
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
                    <p className="text-sm text-ivory/60 mt-1">{item.client}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-navy/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-ivory/10 flex items-center justify-center hover:bg-ivory/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-5 h-5 text-ivory" />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
