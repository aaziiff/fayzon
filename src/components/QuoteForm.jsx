import React, { useState } from 'react'
import { Send, CheckCircle2, MessageSquare, RotateCcw } from 'lucide-react'

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: '',
    elevatorType: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const serviceOptions = [
    'Installation',
    'Maintenance',
    'Repair',
    'Modernization',
    'Inspection',
    'Technical Support',
    'Other'
  ]

  const elevatorOptions = [
    'Passenger Elevator',
    'Home Elevator',
    'Hospital Elevator',
    'Goods / Freight Elevator',
    'Service Elevator',
    'Glass / Panoramic Elevator',
    'Other'
  ]

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    } else if (!/^[\d\s+\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select a service.'
    }

    if (!formData.elevatorType) {
      newErrors.elevatorType = 'Please select an elevator type.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your requirement.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // Google Sheets Web App URL (configured via .env or Vercel Environment Variables)
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    try {
      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            serviceRequired: formData.serviceRequired,
            elevatorType: formData.elevatorType,
            message: formData.message,
            submittedAt: new Date().toLocaleString()
          })
        })
      } else {
        // Simulated delay when URL is not configured yet
        await new Promise((resolve) => setTimeout(resolve, 600))
      }
      setIsSubmitted(true)
    } catch (err) {
      console.error('Submission error:', err)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceRequired: '',
      elevatorType: '',
      message: ''
    })
    setErrors({})
    setIsSubmitted(false)
  }

  const whatsappInquiryUrl = `https://wa.me/971504362926?text=${encodeURIComponent(
    `Hello Fayzon Technical Service,\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.serviceRequired}\nElevator: ${formData.elevatorType}\nMessage: ${formData.message}`
  )}`

  return (
    <section id="quote" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Enquiry</span>
          <h2 className="section-title">Request a Quote</h2>
          <p className="section-subtitle">
            Tell us about your elevator requirement and our team will get back to you.
          </p>
        </div>

        <div className="quote-card">
          {isSubmitted ? (
            <div className="quote-success-box">
              <div className="success-icon-wrapper">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="success-title">Thank You, {formData.fullName}!</h3>
              <p className="success-text">
                Your enquiry for <strong>{formData.serviceRequired}</strong> ({formData.elevatorType}) has been received. Our technical team will review your requirement and contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> shortly.
              </p>
              <div className="success-actions">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageSquare size={16} />
                  Send Copy via WhatsApp
                </a>
                <button onClick={handleReset} className="btn btn-secondary">
                  <RotateCcw size={16} />
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">
                  Full Name <span className="required-mark">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="e.g. Mohammed Al Hashmi"
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  value={formData.fullName}
                  onChange={handleChange}
                  aria-required="true"
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label className="form-label" htmlFor="phone">
                  Phone Number <span className="required-mark">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g. +971 50 123 4567"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                  aria-required="true"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address <span className="required-mark">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. name@example.com"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              {/* Service Required */}
              <div className="form-group">
                <label className="form-label" htmlFor="serviceRequired">
                  Service Required <span className="required-mark">*</span>
                </label>
                <select
                  id="serviceRequired"
                  name="serviceRequired"
                  className={`form-select ${errors.serviceRequired ? 'error' : ''}`}
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  aria-required="true"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.serviceRequired && (
                  <span className="error-message">{errors.serviceRequired}</span>
                )}
              </div>

              {/* Elevator Type */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="elevatorType">
                  Elevator Type <span className="required-mark">*</span>
                </label>
                <select
                  id="elevatorType"
                  name="elevatorType"
                  className={`form-select ${errors.elevatorType ? 'error' : ''}`}
                  value={formData.elevatorType}
                  onChange={handleChange}
                  aria-required="true"
                >
                  <option value="">Select elevator type...</option>
                  {elevatorOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.elevatorType && (
                  <span className="error-message">{errors.elevatorType}</span>
                )}
              </div>

              {/* Message */}
              <div className="form-group full-width">
                <label className="form-label" htmlFor="message">
                  Message & Project Details <span className="required-mark">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please describe your elevator project, building type, or maintenance requirement..."
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  aria-required="true"
                />
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting Enquiry...' : 'SUBMIT ENQUIRY'}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
