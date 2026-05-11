import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  id: string
  type: 'bot' | 'user'
  text: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [hasGreeted, setHasGreeted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Load draft on mount
  useEffect(() => {
    const savedName = localStorage.getItem('chat_name') || ''
    const savedMessage = localStorage.getItem('chat_draft') || ''
    setName(savedName)
    setMessage(savedMessage)
  }, [])

  // Add greeting when widget opens for first time
  useEffect(() => {
    if (isOpen && !hasGreeted && messages.length === 0) {
      setMessages([{
        id: '1',
        type: 'bot',
        text: 'Hi 👋 Welcome to Picasso Print and Pack. How can we help you today?'
      }])
      setHasGreeted(true)
    }
  }, [isOpen, hasGreeted, messages.length])

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Save drafts
  useEffect(() => {
    localStorage.setItem('chat_name', name)
    localStorage.setItem('chat_draft', message)
  }, [name, message])

  const handleSend = () => {
    if (!name.trim() || !message.trim()) return

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: message
    }
    setMessages(prev => [...prev, userMsg])

    // Generate WhatsApp text
    const whatsappText = encodeURIComponent(
      `Name: ${name}\n\nMessage: ${message}`
    )

    // Open WhatsApp in new tab
    window.open(
      `https://wa.me/919833136463?text=${whatsappText}`,
      '_blank'
    )

    // Show confirmation
    const confirmMsg: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      text: `Thanks ${name}! Your message has been sent to WhatsApp. We'll get back to you shortly.`
    }
    setMessages(prev => [...prev, confirmMsg])

    // Clear draft
    setMessage('')
    localStorage.removeItem('chat_draft')
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        aria-label="Open chat"
      >
        <span className="absolute inset-0 rounded-full bg-success animate-pulse-ring" />
        <MessageCircle className="w-6 h-6 text-white relative z-10" />
      </button>
    )
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Chat Window */}
      <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm md:max-w-md animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="bg-gradient-to-b from-navy-light to-navy rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] md:h-[650px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-gold to-gold-light px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-gold" />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-semibold text-navy text-sm">Picasso Support</h3>
                <p className="text-navy/70 text-xs">Usually responds in minutes</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-navy" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-navy-light/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-200`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gold text-navy rounded-br-none'
                      : 'bg-navy text-ivory rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-navy p-4 space-y-3 bg-navy">
            <div>
              <label className="block text-ivory text-xs font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-2.5 bg-navy-light text-ivory placeholder-ivory/50 rounded-lg border border-navy-light/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-ivory text-xs font-medium mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your packaging needs..."
                className="w-full px-4 py-2.5 bg-navy-light text-ivory placeholder-ivory/50 rounded-lg border border-navy-light/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors resize-none h-20"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.ctrlKey) {
                    handleSend()
                  }
                }}
              />
            </div>

            <button
              onClick={handleSend}
              disabled={!name.trim() || !message.trim()}
              className="w-full bg-gradient-to-r from-gold to-gold-light text-navy font-semibold py-3 px-4 rounded-lg hover:from-gold-light hover:to-gold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-ivory/50 text-xs text-center">
              💬 We'll respond on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
