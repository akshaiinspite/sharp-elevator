import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside className="top-right-whatsapp-container" aria-label="Quick WhatsApp Contact">
      <a
        href="https://wa.me/919447711587?text=Hello%20Sharp%20Elevator%20%26%20Escalator%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="top-right-whatsapp-pill"
        title="Chat with Sharp Elevator on WhatsApp (9447711587)"
      >
        <div className="whatsapp-icon-circle">
          <MessageCircle size={20} className="whatsapp-svg-icon" />
          <span className="whatsapp-live-pulse" />
        </div>
        <div className="whatsapp-pill-text">
          <span className="pill-status">Online Now</span>
          <span className="pill-title">WhatsApp Us</span>
        </div>
      </a>
    </aside>
  );
}
