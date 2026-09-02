import React from 'react'
import {
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle,
  Users,
  Clock
} from 'lucide-react'

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Safety First',
      desc: 'A safety-focused approach to elevator services.',
      icon: ShieldCheck
    },
    {
      title: 'Professional Service',
      desc: 'Reliable technical support with attention to detail.',
      icon: Award
    },
    {
      title: 'Quality Workmanship',
      desc: 'Practical solutions with a focus on quality.',
      icon: Sparkles
    },
    {
      title: 'Reliable Solutions',
      desc: 'Services designed to support dependable elevator operation.',
      icon: CheckCircle
    },
    {
      title: 'Customer Focused',
      desc: 'Solutions based on individual customer and building requirements.',
      icon: Users
    },
    {
      title: 'Responsive Support',
      desc: 'Easy communication for service enquiries and technical assistance.',
      icon: Clock
    }
  ]

  return (
    <section id="why-us" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Commitment</span>
          <h2 className="section-title">Why Choose Fayzon?</h2>
          <p className="section-subtitle">
            Dedicated to maintaining highest standards in technical service, passenger safety, and customer satisfaction across the UAE.
          </p>
        </div>

        <div className="why-grid">
          {points.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="why-card">
                <div className="why-icon-wrap">
                  <IconComponent size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-desc">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
