import React from 'react'
import { MessageSquare } from 'lucide-react'

export default function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/971504362926?text=Hello%20Fayzon%20Technical%20Service%2C%20I%20would%20like%20to%20enquire%20about%20your%20elevator%20services.'

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-tooltip">Chat with us on WhatsApp</div>
      <div className="floating-whatsapp-btn">
        <MessageSquare size={26} />
      </div>
    </a>
  )
}
