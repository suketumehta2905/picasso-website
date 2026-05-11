import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag, Box, Package, Printer, Lightbulb } from 'lucide-react'
import { useStaggerFadeIn } from '../hooks/useScrollAnimation'

const products = [
  {
    icon: ShoppingBag,
    title: 'Paper Bags',
    description: 'Kraft, laminated, twisted handle, SOS, food-grade — every format, any volume.',
    href: '/products/paper-bags',
  },
  {
    icon: Box,
    title: 'Rigid Boxes',
    description: 'Magnetic closure, drawer style, foldable luxury — engineered for unboxing moments.',
    href: '/products/rigid-boxes',
  },
  {
    icon: Package,
    title: 'Mono Cartons',
    description: 'Perfume, pharma, cosmetic, FMCG folding cartons with precision die-cutting.',
    href: '/products/mono-cartons',
  },
  {
    icon: Printer,
    title: 'Commercial Print',
    description: 'Brochures, catalogues, stationery, books — brand communication that holds weight.',
    href: '/contact',
  },
  {
    icon: Lightbulb,
    title: 'Custom Development',
    description: 'Structural design, prototyping, sampling, brand packaging consultation.',
    href: '/contact',
  },
]

export default function ProductEcosystem() {
  const containerRef = useStaggerFadeIn('.product-card', 0.1)

  return (
    <section className="bg-ivory section-padding">
      <div className="content-max mx-auto" ref={containerRef}>
        <div className="mb-16">
          <h2 className="text-h1 text-text-dark mb-4">
            Everything Your Brand Wears
          </h2>
          <p className="text-body-lg text-text-muted max-w-2xl">
            From concept to carton — a complete packaging ecosystem built for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 lg:px-[8.33%]">
          {products.slice(3).map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ icon: Icon, title, description, href }: typeof products[0]) {
  return (
    <Link
      to={href}
      className="product-card group block bg-off-white rounded p-8 card-hover"
    >
      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <h3 className="text-h3 text-text-dark mb-3">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed mb-6">{description}</p>
      <span className="text-caption text-gold group-hover:text-gold-dim transition-colors inline-flex items-center gap-2">
        Explore
        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  )
}
