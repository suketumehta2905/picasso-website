import { useState } from 'react'
import { X } from 'lucide-react'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: 'rigid-boxes',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real implementation, this would send to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)

    // Reset form and close after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        product: 'rigid-boxes',
      })
      setSubmitted(false)
      onClose()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-navy/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-ivory rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy to-navy-dark p-6 flex items-center justify-between">
          <h2 className="text-h3 text-ivory">Contact Our Experts</h2>
          <button
            onClick={onClose}
            className="text-ivory hover:text-gold transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-h4 text-navy mb-2">Thank you!</h3>
              <p className="text-body text-text-muted">
                We've received your message. Our team will be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-text-muted/20 rounded-lg focus:outline-none focus:border-gold bg-off-white text-navy"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-text-muted/20 rounded-lg focus:outline-none focus:border-gold bg-off-white text-navy"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-text-muted/20 rounded-lg focus:outline-none focus:border-gold bg-off-white text-navy"
                  placeholder="+91 98198 24242"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-text-muted/20 rounded-lg focus:outline-none focus:border-gold bg-off-white text-navy"
                  placeholder="Your Brand"
                />
              </div>

              {/* Product Interest */}
              <div>
                <label htmlFor="product" className="block text-sm font-semibold text-navy mb-2">
                  Interested In
                </label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-text-muted/20 rounded-lg focus:outline-none focus:border-gold bg-off-white text-navy"
                >
                  <option value="rigid-boxes">Luxury Rigid Boxes</option>
                  <option value="paper-bags">Custom Paper Bags</option>
                  <option value="finishes">Finishes & Enhancements</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Your Question
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-text-muted/20 rounded-lg focus:outline-none focus:border-gold bg-off-white text-navy resize-none"
                  placeholder="Tell us about your packaging needs..."
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-text-muted/20 text-navy font-semibold rounded-lg hover:bg-off-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
