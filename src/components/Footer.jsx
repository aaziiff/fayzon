import React from 'react'
import { Phone, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const phone = "+971 50 436 2926"
  const email = "info@fayzon.ae"

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <a href="#hero" className="footer-logo-link" onClick={scrollToTop} aria-label="Fayzon Technical Service Home">
              <img
                src="/images/logo-dark.png"
                alt="Fayzon Technical Service - Elevating Excellence"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-tagline">Elevating Excellence • Professional Elevator Solutions</p>
            <p className="footer-desc">
              Delivering dependable elevator installation, preventive maintenance, repair, and modernization across residential and commercial buildings throughout the UAE.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#solutions" className="footer-link">Elevator Solutions</a></li>
              <li><a href="#services" className="footer-link">Our Services</a></li>
              <li><a href="#why-us" className="footer-link">Why Choose Us</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Phone size={16} color="#C5A059" />
                <a href="tel:+971504362926">{phone}</a>
              </li>
              <li className="footer-contact-item">
                <Mail size={16} color="#C5A059" />
                <a href="mailto:info@fayzon.ae">{email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Fayzon Technical Service. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#8E95A5', background: 'none' }}
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
