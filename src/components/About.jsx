import React from 'react'
import { CheckCircle2, Wrench, Shield, Clock } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Shield,
      title: 'Safety Compliance',
      desc: 'Commitment to high safety standards and reliable operational protocols.'
    },
    {
      icon: Wrench,
      title: 'Technical Expertise',
      desc: 'Skilled diagnostics, thorough maintenance, and precision workmanship.'
    },
    {
      icon: CheckCircle2,
      title: 'Tailored Solutions',
      desc: 'Customized elevator systems tailored to building architecture and traffic.'
    },
    {
      icon: Clock,
      title: 'Responsive Service',
      desc: 'Prompt technical support ensuring minimal downtime and dependable service.'
    }
  ]

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image with Subtle Accent Frame */}
          <div className="about-image-container">
            <div className="about-accent-box"></div>
            <div className="about-image-frame">
              <img
                src="/images/about-elevator.jpg"
                alt="Fayzon Technical Service specialist inspecting elevator controls"
                className="about-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="about-content-wrapper">
            <div>
              <span className="section-tag">About Company</span>
              <h2 className="about-title">About Fayzon Technical Service</h2>
            </div>

            <p className="about-text">
              Fayzon Technical Service provides professional elevator and technical solutions for residential, commercial and specialized building requirements. We focus on dependable service, quality workmanship and practical solutions that support safe and reliable elevator operation.
            </p>

            <p className="about-text">
              From new elevator installations to maintenance, repair and modernization, our goal is to provide customers with responsive technical support and solutions suited to their individual requirements.
            </p>

            {/* Highlights Grid */}
            <div className="about-highlights">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <div key={idx} className="about-highlight-item">
                    <div className="highlight-icon">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h4 className="highlight-title">{item.title}</h4>
                      <p className="highlight-desc">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
