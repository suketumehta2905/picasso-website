import { useState } from 'react'
import { ChevronDown, Link as LinkIcon } from 'lucide-react'

interface Step {
  number: number
  title: string
  subtitle: string
  image: string
  description: string
  timeline: string
  details: string
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Share Your Vision',
    subtitle: 'Tell us your product & timeline',
    image: '/Kimi Images/picasso_website_images/08_workflow_step1.jpg',
    timeline: '1-2 days',
    description: 'We start with understanding your brand positioning, target audience, product dimensions, quantity needs, and budget parameters. This ensures every recommendation is tailored to your specific goals.',
    details: 'Brand positioning & target audience | Product category | Quantity needed | Budget & timeline',
  },
  {
    number: 2,
    title: 'Design & Prototype',
    subtitle: '2-3 concepts + physical sample',
    image: '/Kimi Images/picasso_website_images/09_workflow_step2.jpg',
    timeline: '5-7 days',
    description: 'Our design team creates 2-3 concepts with material selection, finish options, and structure recommendations. A physical sample is produced for your review before any production commitment. Includes 2-3 revision rounds.',
    details: 'Material selection | Finish recommendations | Structure options | Artwork collaboration',
  },
  {
    number: 3,
    title: 'Approve & Lock',
    subtitle: 'Sample review + final sign-off',
    image: '/Kimi Images/picasso_website_images/10_workflow_step3.jpg',
    timeline: '2-3 days',
    description: 'Review the physical sample for quality, color accuracy, and structural integrity. One round of revisions included. Final artwork approval locks specifications for production.',
    details: 'Physical sample review | Quality verification | Color accuracy | Final approval',
  },
  {
    number: 4,
    title: 'Produce & Deliver',
    subtitle: '4-6 weeks, rush 2-3 weeks',
    image: '/Kimi Images/picasso_website_images/11_workflow_step4.jpg',
    timeline: '4-6 weeks',
    description: 'In-house production with inline QC checks, final random sampling, and delivery coordination. Standard turnaround: 4-6 weeks. Rush orders available in 2-3 weeks.',
    details: 'In-house manufacturing | Quality checks | Final sampling | Delivery coordination',
  },
]

export default function PicassoProcessSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section className="bg-white py-24 px-4 md:px-8">
      <div className="content-max mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-bold tracking-widest uppercase text-gold bg-gold/10 px-4 py-2 rounded-full mb-4">
            Workflow
          </span>
          <h2 className="text-5xl font-black text-ink mb-4">From Concept to Delivery in Four Steps</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We guide you every step of the way with transparent timelines and expert collaboration.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-5 left-0 right-0 h-1 bg-sand z-0" />
          {steps.map((step) => (
            <button
              key={step.number}
              onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
              className={`relative z-10 w-12 h-12 rounded-full transition-all ${
                expandedStep === step.number
                  ? 'bg-gold text-ink shadow-lg'
                  : 'bg-white border-2 border-sand text-ink hover:border-gold'
              }`}
              aria-label={`Step ${step.number}: ${step.title}`}
            >
              <span className="font-bold text-lg">{step.number}</span>
            </button>
          ))}
        </div>

        {/* Step Cards */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="border border-sand rounded-xl overflow-hidden bg-white">
              {/* Collapsed Header */}
              <button
                onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                className="w-full flex items-center gap-4 p-6 hover:bg-stone/50 transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-full bg-gold text-ink font-bold flex items-center justify-center flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-ink text-lg">{step.title}</h3>
                  <p className="text-sm text-text-muted">{step.subtitle}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                    expandedStep === step.number ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {expandedStep === step.number && (
                <div className="px-6 pb-6 border-t border-sand bg-stone/50">
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full md:w-48 h-48 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <p className="text-text-muted mb-4">{step.description}</p>
                      <div className="bg-white rounded-lg p-4 border border-sand">
                        <p className="text-sm font-semibold text-gold mb-2 uppercase">Timeline: {step.timeline}</p>
                        <p className="text-sm text-text-muted">{step.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-ink font-bold py-3 px-8 rounded-lg hover:bg-gold-light transition-colors"
          >
            Start Your Project
            <LinkIcon className="w-4 h-4 rotate-180" />
          </a>
        </div>
      </div>
    </section>
  )
}
