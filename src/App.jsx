import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ElevatorSolutions from './components/ElevatorSolutions'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import QuoteForm from './components/QuoteForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ElevatorSolutions />
        <Services />
        <WhyChooseUs />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
