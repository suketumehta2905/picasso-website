import { Link } from 'react-router-dom'
import { ArrowRight, Box } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'
import RFQCTA from '../sections/RFQCTA'

const boxTypes = [
  {
    title: 'Magnetic Closure',
    description: 'Seamless magnetic snap closure for a satisfying unboxing experience.',
    image: '/images/product-rigid-boxes.jpg',
  },
  {
    title: 'Drawer Style',
    description: 'Slide-out drawer mechanism with ribbon pull. Elegant and functional.',
    image: '/images/gallery-2.jpg',
  },
  {
    title: 'Lid & Base',
    description: 'Classic two-piece construction. Timeless and versatile.',
    image: '/images/gallery-8.jpg',
  },
  {
    title: 'Foldable Rigid',
    description: 'Ships flat, assembles rigid. Save on logistics without compromising luxury.',
    image: '/images/gallery-5.jpg',
  },
  {
    title: 'Luxury Gift',
    description: 'Premium materials with satin interiors and gold foil accents.',
    image: '/images/gallery-8.jpg',
  },
  {
    title: 'Perfume & Cosmetic',
    description: 'Custom inserts and foam cutouts for product security.',
    image: '/images/industry-cosmetics.jpg',
  },
  {
    title: 'Jewelry',
    description: 'Velvet-touch exteriors with satin-lined interiors and cushion pads.',
    image: '/images/industry-jewelry.jpg',
  },
  {
    title: 'Custom Inserts',
    description: 'EVA foam, satin, velvet, or paperboard inserts tailored to your product.',
    image: '/images/gallery-2.jpg',
  },
]

const finishes = [
  'Matte Lamination',
  'Gloss Lamination',
  'Spot UV',
  'Foil Stamping',
  'Embossing',
  'Debossing',
  'Soft Touch',
  'Texture Coating',
]

export default function RigidBoxes() {
  const cardsRef = useStaggerFadeIn('.box-card', 0.08)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-navy pt-24">
        <div className="content-max mx-auto px-[clamp(20px,5vw,80px)] w-full">
          <div className="mb-4">
            <Link to="/" className="text-caption text-ivory/40 hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-caption text-ivory/40 mx-2">/</span>
            <Link to="/products/rigid-boxes" className="text-caption text-gold">
              Rigid Boxes
            </Link>
          </div>
          <h1 className="text-display-md text-ivory mb-4">Premium Rigid Boxes Engineered for the Reveal</h1>
          <p className="text-body-lg text-ivory/60 max-w-2xl">
            Premium rigid boxes for cosmetics, perfumes, jewelry, electronics, gifting, fashion, and D2C brands.
            Custom sizes, inserts, foil, embossing, and luxury finishes. Magnetic closure and drawer style options.
            Perfect for premium unboxing experiences. Start from 500 units.
          </p>
        </div>
      </section>

      {/* Product Types */}
      <section className="bg-ivory section-padding">
        <div className="content-max mx-auto" ref={cardsRef}>
          <div className="mb-16">
            <h2 className="text-h1 text-text-dark mb-4">Rigid Box Types</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boxTypes.map((box) => (
              <div key={box.title} className="box-card bg-off-white rounded overflow-hidden card-hover group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={box.image}
                    alt={box.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-h3 text-text-dark mb-2">{box.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-4">{box.description}</p>
                  <Link
                    to="/contact"
                    className="text-caption text-gold hover:text-gold-dim inline-flex items-center gap-2"
                  >
                    Request Sample
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes */}
      <section className="bg-navy section-padding">
        <div className="content-max mx-auto">
          <div className="mb-12">
            <h2 className="text-h1 text-ivory mb-4">Finishes That Impress</h2>
            <div className="gold-line" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {finishes.map((finish) => (
              <div
                key={finish}
                className="bg-navy-light rounded p-6 text-center border border-ivory/10 hover:border-gold/30 transition-colors"
              >
                <Box className="w-6 h-6 text-gold mx-auto mb-3" />
                <span className="text-sm text-ivory/80">{finish}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RFQCTA />
    </>
  )
}
