import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function ElevatorSolutions() {
  const solutions = [
    {
      title: 'Passenger Elevators',
      description: 'Modern and comfortable elevator solutions for residential, commercial and office buildings.',
      image: '/images/passenger-elevator.jpg',
      alt: 'Luxury modern passenger elevator cabin'
    },
    {
      title: 'Home Elevators',
      description: 'Compact and elegant solutions for villas and private residences.',
      image: '/images/home-elevator.jpg',
      alt: 'Glass home elevator in luxury villa'
    },
    {
      title: 'Hospital Elevators',
      description: 'Spacious elevator solutions suitable for hospitals and healthcare facilities.',
      image: '/images/hospital-elevator.jpg',
      alt: 'Spacious hospital bed stretcher elevator'
    },
    {
      title: 'Goods & Freight Elevators',
      description: 'Strong and practical solutions for transporting goods, equipment and materials.',
      image: '/images/freight-elevator.jpg',
      alt: 'Heavy duty goods freight elevator'
    },
    {
      title: 'Service Elevators',
      description: 'Functional solutions for hotels, restaurants, commercial buildings and service environments.',
      image: '/images/service-elevator.jpg',
      alt: 'Commercial service and utility elevator'
    },
    {
      title: 'Glass / Panoramic Elevators',
      description: 'Modern elevator solutions that combine functionality with architectural aesthetics.',
      image: '/images/panoramic-elevator.jpg',
      alt: 'Architectural glass panoramic elevator'
    }
  ]

  return (
    <section id="solutions" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engineered Solutions</span>
          <h2 className="section-title">Our Elevator Solutions</h2>
          <p className="section-subtitle">
            Engineered systems designed to meet diverse architectural, commercial, and residential vertical mobility requirements.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div key={index} className="solution-card">
              <div className="solution-image-box">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="solution-image"
                  loading="lazy"
                />
              </div>
              <div className="solution-content">
                <h3 className="solution-title">{item.title}</h3>
                <p className="solution-description">{item.description}</p>
                <a href="#quote" className="solution-footer">
                  <span>Enquire Solution</span>
                  <div className="solution-arrow">
                    <ArrowRight size={16} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
