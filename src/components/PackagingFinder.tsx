import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

interface QuizState {
  category: string
  quantity: string
  goal: string
  format: string
}

const recommendations = {
  rigid_box: {
    title: 'Premium Rigid Box',
    description: 'Perfect for luxury unboxing experiences, premium positioning, and gift-worthy products.',
    benefits: ['Strong structural feel', 'Custom inserts possible', 'Excellent for photography', 'Premium pricing justified'],
    cta: 'Explore Rigid Boxes',
    link: '/products/rigid-boxes',
  },
  paper_bag: {
    title: 'Custom Paper Bag',
    description: 'Ideal for retail carry, branding on-the-go, and functional daily use.',
    benefits: ['Mobile brand asset', 'Multiple handle options', 'Sustainable option', 'Cost-effective'],
    cta: 'Shop Paper Bags',
    link: '/products/paper-bags',
  },
  both: {
    title: 'Hybrid Approach',
    description: 'Combine rigid boxes for unboxing + paper bags for carrying or gifting.',
    benefits: ['Complete brand experience', 'Multiple touchpoints', 'Premium + practical', 'Maximum perception value'],
    cta: 'Plan Your Packaging',
    link: '/contact',
  },
}

export default function PackagingFinder() {
  const [step, setStep] = useState(0)
  const [quiz, setQuiz] = useState<QuizState>({
    category: '',
    quantity: '',
    goal: '',
    format: '',
  })
  const [result, setResult] = useState<string | null>(null)

  const handleAnswer = (field: keyof QuizState, value: string) => {
    const newQuiz = { ...quiz, [field]: value }
    setQuiz(newQuiz)

    if (step < 3) {
      setStep(step + 1)
    } else {
      // Calculate recommendation
      const recommendedFormat = calculateRecommendation(newQuiz)
      setResult(recommendedFormat)
    }
  }

  const calculateRecommendation = (quizData: QuizState): string => {
    const { goal, category, format } = quizData

    // Logic: prioritize goal, then category
    if (goal.includes('premium') || goal.includes('unbox')) return 'rigid_box'
    if (goal.includes('carry') || goal.includes('retail')) return 'paper_bag'
    if (category.includes('beauty') || category.includes('luxury')) return 'rigid_box'
    if (category.includes('retail') || category.includes('food')) return 'paper_bag'
    if (format.includes('both')) return 'both'

    // Default
    return 'both'
  }

  const questions = [
    {
      question: 'What is your product category?',
      field: 'category' as const,
      options: [
        { label: 'Beauty & Cosmetics', value: 'beauty' },
        { label: 'Fashion & Apparel', value: 'fashion' },
        { label: 'Food & Beverage', value: 'food' },
        { label: 'Jewelry & Luxury', value: 'luxury' },
        { label: 'Electronics & Tech', value: 'tech' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      question: 'How many units do you need?',
      field: 'quantity' as const,
      options: [
        { label: '500–1,000 units', value: '500' },
        { label: '1,000–5,000 units', value: '1k' },
        { label: '5,000–10,000 units', value: '5k' },
        { label: '10,000+ units', value: '10k+' },
      ],
    },
    {
      question: 'What is your main packaging goal?',
      field: 'goal' as const,
      options: [
        { label: 'Look premium & luxe', value: 'premium' },
        { label: 'Create unboxing moments', value: 'unbox' },
        { label: 'Carry & transport', value: 'carry' },
        { label: 'Brand awareness', value: 'brand' },
        { label: 'Protect product', value: 'protect' },
        { label: 'Gift experience', value: 'gift' },
      ],
    },
    {
      question: 'What packaging format interests you?',
      field: 'format' as const,
      options: [
        { label: 'Rigid Box (premium)', value: 'rigid' },
        { label: 'Paper Bag (carry)', value: 'paper' },
        { label: 'Both formats', value: 'both' },
        { label: 'Not sure yet', value: 'unsure' },
      ],
    },
  ]

  if (result) {
    const recommendation = recommendations[result as keyof typeof recommendations]

    return (
      <section className="bg-gradient-to-b from-ivory to-off-white py-16 px-4 md:px-8">
        <div className="content-max mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-h1 text-text-dark mb-4">Your Packaging Match 🎯</h2>
            <p className="text-body-lg text-text-muted max-w-2xl mx-auto">
              Based on your answers, here's the packaging format that best matches your needs.
            </p>
          </div>

          {/* Result Card */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-card p-8 md:p-10 mb-8">
            <div className="mb-6">
              <h3 className="text-h2 text-navy mb-3">{recommendation.title}</h3>
              <p className="text-body-lg text-text-muted">{recommendation.description}</p>
            </div>

            <div className="mb-8">
              <h4 className="text-h3 text-navy mb-4">Key Benefits:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {recommendation.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-gold text-xl mt-1">✓</span>
                    <span className="text-body-lg text-text-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href={recommendation.link}
                className="flex-1 bg-gold text-navy font-semibold py-3 px-6 rounded-lg hover:bg-gold-light transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                {recommendation.cta}
                <ChevronRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  setStep(0)
                  setQuiz({ category: '', quantity: '', goal: '', format: '' })
                  setResult(null)
                }}
                className="px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-ivory transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>

          {/* Next Steps */}
          <div className="max-w-2xl mx-auto bg-navy rounded-2xl p-8 text-ivory">
            <h4 className="text-h3 mb-4">Next Steps:</h4>
            <ol className="space-y-3 text-body-lg">
              <li>1. Review the recommended packaging details on the product page</li>
              <li>2. Gather your product specs, quantity, and timeline</li>
              <li>3. <a href="/contact" className="text-gold hover:text-gold-light underline">Request a quote</a> with our packaging experts</li>
              <li>4. Get samples, feedback, and final pricing</li>
            </ol>
          </div>
        </div>
      </section>
    )
  }

  const currentQuestion = questions[step]

  return (
    <section className="bg-gradient-to-b from-navy to-navy-light py-16 px-4 md:px-8">
      <div className="content-max mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-h1 text-ivory mb-4">Find Your Perfect Packaging</h2>
          <p className="text-body-lg text-ivory/70">
            Answer 4 quick questions and we'll recommend the best packaging format for your product.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-gold text-sm font-semibold">Question {step + 1} of 4</span>
          </div>
          <div className="w-full h-2 bg-navy-light rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-300"
              style={{ width: `${((step + 1) / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-navy-light rounded-2xl p-8 mb-8">
          <h3 className="text-h2 text-ivory mb-8">{currentQuestion.question}</h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.field, option.value)}
                className="w-full text-left p-4 rounded-lg border-2 border-ivory/20 text-ivory hover:border-gold hover:bg-navy transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 border-2 border-ivory rounded-full flex items-center justify-center group-hover:border-gold">
                    <span className="w-3 h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                  <span className="text-body-lg font-medium">{option.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skip or Help */}
        <div className="text-center">
          <button
            onClick={() => {
              const recommendedFormat = calculateRecommendation(quiz)
              setResult(recommendedFormat)
            }}
            className="text-ivory/60 hover:text-gold text-sm underline"
          >
            Skip to recommendation →
          </button>
        </div>
      </div>
    </section>
  )
}
