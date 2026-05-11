import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 bg-ink text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg animate-in fade-in zoom-in-75 duration-200">
          Chat with us — avg. response 28 min
          <div className="absolute top-full right-4 w-2 h-2 bg-ink transform rotate-45 -translate-y-1" />
        </div>
      )}

      {/* Pulsing Background Rings */}
      <div className="absolute inset-0 rounded-full bg-gold/30 animate-pulse-ring" />
      <div className="absolute inset-2 rounded-full bg-gold/20 animate-pulse-ring" style={{ animationDelay: '0.7s' }} />

      {/* Button */}
      <a
        href="https://wa.me/919819824242"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-16 h-16 bg-gold text-ink rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-transform duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  )
}
