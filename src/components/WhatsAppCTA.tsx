import { MessageCircle } from 'lucide-react'

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/919819824242?text=Hi%20Picasso%20Print%20%26%20Pack,%20I'm%20interested%20in%20getting%20a%20quote%20for%20packaging."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-success animate-pulse-ring" />
      <MessageCircle className="w-6 h-6 text-white relative z-10" />
      <span className="absolute right-full mr-3 bg-navy-light text-ivory text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  )
}
