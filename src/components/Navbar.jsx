import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Elevators', href: '#solutions' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Logo */}
          <a href="#hero" className="nav-brand" onClick={handleLinkClick} aria-label="Fayzon Technical Service Home">
            <div className="nav-brand-logo-wrap">
              <img
                src="/images/logo-icon-dark.png"
                alt="Fayzon Technical Service Emblem"
                className="nav-brand-logo-img"
              />
            </div>
            <div className="nav-brand-text">
              <span className="brand-main">
                F<span className="brand-chevron">Λ</span>YZON
              </span>
              <span className="brand-sub">TECHNICAL SERVICE</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action */}
          <div className="nav-actions">
            <a href="#quote" className="btn btn-primary">
              Get a Quote
              <ArrowUpRight size={16} />
            </a>
            <button
              className="nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#quote"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '8px' }}
          onClick={handleLinkClick}
        >
          Get a Quote
        </a>
      </div>
    </header>
  )
}
