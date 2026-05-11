import { useStaggerFadeIn } from '../hooks/useScrollAnimation'
import { PenTool, Box, Cog, Truck } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Design',
    description: 'Structural engineers and brand strategists align on form and function.',
    icon: PenTool,
  },
  {
    number: '02',
    title: 'Prototype',
    description: 'Same-day sampling for rapid validation and approval.',
    icon: Box,
  },
  {
    number: '03',
    title: 'Produce',
    description: 'High-speed automated lines with rigorous QC checkpoints.',
    icon: Cog,
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Pan-India logistics with 99.2% on-time track record.',
    icon: Truck,
  },
]

export default function ManufacturingCapability() {
  const containerRef = useStaggerFadeIn('.process-step', 0.15)

  return (
    <section className="bg-navy section-padding">
      <div className="content-max mx-auto" ref={containerRef}>
        <div className="mb-16">
          <h2 className="text-h1 text-ivory mb-4">How We Build</h2>
          <div className="gold-line" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] md:left-[27px] top-0 bottom-0 w-[1px] bg-ivory/20 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.number} className="process-step flex gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center relative z-10">
                    <step.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                  </div>
                </div>
                <div className="pb-4">
                  <span className="text-display-xl text-gold/15 block -mt-2 md:-mt-4">
                    {step.number}
                  </span>
                  <h3 className="text-h2 text-ivory -mt-4 md:-mt-8 mb-3">{step.title}</h3>
                  <p className="text-body-lg text-ivory/60 max-w-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
