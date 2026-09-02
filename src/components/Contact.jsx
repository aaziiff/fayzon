import React from 'react'
import { Phone, Mail, MessageSquare, ArrowRight } from 'lucide-react'

export default function Contact() {
  const phone = "+971 50 436 2926"
  const phoneTel = "tel:+971504362926"
  const email = "info@fayzon.ae"
  const emailMailto = "mailto:info@fayzon.ae"
  const whatsappUrl = "https://wa.me/971504362926?text=Hello%20Fayzon%20Technical%20Service%2C%20I%20would%20like%20to%20enquire%20about%20your%20elevator%20services."

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Channels</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Contact Fayzon Technical Service for immediate technical assistance, site surveys, or service consultations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Company Details Card */}
          <div className="contact-info-card">
            <div className="contact-brand-header">
              <div className="contact-brand-emblem">
                <img
                  src="/images/logo-icon-dark.png"
                  alt="Fayzon Technical Service Emblem"
                  className="contact-brand-img"
                />
              </div>
              <div>
                <h3 className="contact-brand-title">Fayzon Technical Service</h3>
                <p className="contact-brand-sub">Elevating Excellence • Elevator Solutions</p>
              </div>
            </div>

            <div className="contact-methods">
              {/* Phone */}
              <a href={phoneTel} className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-label">Phone Support</div>
                  <div className="contact-val">{phone}</div>
                </div>
              </a>

              {/* Email */}
              <a href={emailMailto} className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-label">Email Enquiries</div>
                  <div className="contact-val">{email}</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <div className="contact-icon" style={{ background: '#E6F8EB', color: '#25D366' }}>
                  <MessageSquare size={20} />
                </div>
                <div>
                  <div className="contact-label">Instant Messaging</div>
                  <div className="contact-val">{phone}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Quick Action Cards */}
          <div className="contact-action-boxes">
            {/* Call Action */}
            <div className="contact-action-card">
              <div className="action-card-text">
                <h4>Speak with an Specialist</h4>
                <p>Call our technical desk directly for immediate assistance.</p>
              </div>
              <a href={phoneTel} className="btn btn-primary">
                Call Us
                <Phone size={16} />
              </a>
            </div>

            {/* Email Action */}
            <div className="contact-action-card">
              <div className="action-card-text">
                <h4>Send an Email Inquiry</h4>
                <p>Submit your RFQ or specifications to info@fayzon.ae.</p>
              </div>
              <a href={emailMailto} className="btn btn-secondary">
                Email Us
                <Mail size={16} />
              </a>
            </div>

            {/* WhatsApp Action */}
            <div className="contact-action-card">
              <div className="action-card-text">
                <h4>Chat on WhatsApp</h4>
                <p>Fast, direct chat with our technical support team.</p>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp Us
                <MessageSquare size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
