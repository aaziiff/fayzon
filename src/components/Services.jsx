import React from 'react'
import {
  Layers,
  Wrench,
  AlertTriangle,
  RefreshCw,
  ClipboardCheck,
  Headphones
} from 'lucide-react'

export default function Services() {
  const servicesList = [
    {
      title: 'Elevator Installation',
      description: 'Professional installation solutions based on building and technical requirements.',
      icon: Layers
    },
    {
      title: 'Elevator Maintenance',
      description: 'Preventive maintenance to help maintain reliable elevator performance.',
      icon: Wrench
    },
    {
      title: 'Elevator Repair',
      description: 'Technical troubleshooting and repair support for elevator issues.',
      icon: AlertTriangle
    },
    {
      title: 'Elevator Modernization',
      description: 'Upgrading existing elevator systems with modern components and improved functionality.',
      icon: RefreshCw
    },
    {
      title: 'Inspection & Assessment',
      description: 'Technical evaluation to understand elevator requirements and identify potential issues.',
      icon: ClipboardCheck
    },
    {
      title: 'Technical Support',
      description: 'Responsive support for elevator-related service requirements.',
      icon: Headphones
    }
  ]

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Core Capabilities</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive technical support and engineering services throughout every lifecycle stage of your vertical transport systems.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service, index) => {
            const IconComp = service.icon
            return (
              <div key={index} className="service-card">
                <div className="service-icon-box">
                  <IconComp size={24} strokeWidth={2} />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
