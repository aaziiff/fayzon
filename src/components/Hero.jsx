import React from 'react'
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react'

export default function Hero() {
  const whatsappUrl = "https://wa.me/971504362926?text=Hello%20Fayzon%20Technical%20Service%2C%20I%20would%20like%20to%20enquire%20about%20your%20elevator%20services."

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Fayzon Technical Service • Elevating Excellence
            </div>

            <h1 className="hero-title">
              Reliable Elevator Solutions for Every Building
            </h1>

            <p className="hero-description">
              Professional elevator installation, maintenance, repair and modernization services focused on safety, reliability and performance.
            </p>

            <div className="hero-cta-group">
              <a href="#quote" className="btn btn-primary">
                Request a Quote
                <ArrowRight size={18} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageSquare size={18} />
                WhatsApp Us
              </a>
            </div>

            <div className="hero-pillars">
              <span>Installation</span>
              <span className="hero-pillars-dot">•</span>
              <span>Maintenance</span>
              <span className="hero-pillars-dot">•</span>
              <span>Repair</span>
              <span className="hero-pillars-dot">•</span>
              <span>Modernization</span>
            </div>
          </div>

          {/* Right Image Graphic */}
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img
                src="/images/hero-elevator.jpg"
                alt="Modern corporate elevator architecture"
                className="hero-image"
                loading="eager"
              />
              <div className="hero-image-badge">
                <div className="badge-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="badge-text-main">Safety & Quality First</div>
                  <div className="badge-text-sub">Engineered for Dependable Operation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
