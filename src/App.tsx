import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* HEADER */}
      <header id="site-header">
        <img src="/header.png" alt="ReBlocks" className="header-logo" />
        
        {/* Desktop Nav */}
        <nav className="header-nav desktop-nav">
          <a href="https://canva.link/xll4nm7mq0mobil" target="_blank" rel="noopener noreferrer" className="nav-link">Canva</a>
          <a href="https://github.com/mtrsvn/ReBlocks" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
          <a href="https://imgur.com/a/zOPh0tT" target="_blank" rel="noopener noreferrer" className="nav-link">Architecture</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className={`burger-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Dropdown */}
        <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <a href="https://canva.link/xll4nm7mq0mobil" target="_blank" rel="noopener noreferrer" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Canva</a>
          <a href="https://github.com/mtrsvn/ReBlocks" target="_blank" rel="noopener noreferrer" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>GitHub</a>
          <a href="https://imgur.com/a/zOPh0tT" target="_blank" rel="noopener noreferrer" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Architecture</a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Faster, Cheaper</span><br />
            Remittance.
          </h1>

          <p className="hero-subtitle text-content" style={{ fontSize: '18px', maxWidth: '520px', lineHeight: '1.6' }}>
            A Layer-2 remittance protocol built on Morph Network for overseas workers and freelancers. Bypassing legacy banking rails to deliver smart contract-secured, near-instant 24/7 global settlements.
          </p>

          {/* Desktop Actions */}
          <div className="hero-actions hero-actions-desktop">
            <a
              id="launch-demo-btn"
              className="btn-demo"
              href="https://appetize.io/app/b_wopxyn4juesahuodtxhoxvlb4m"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              Launch Demo
            </a>

            <a href="#" id="appstore-link" className="badge-link disabled-link" aria-label="Download on the App Store">
              <img
                src="/Download_on_the_App_Store_Badge.svg.png"
                alt="Download on the App Store"
                className="store-badge disabled-badge"
              />
            </a>
            <a href="#" id="googleplay-link" className="badge-link disabled-link" aria-label="Get it on Google Play">
              <img
                src="/Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                className="store-badge disabled-badge"
              />
            </a>
          </div>
        </div>

        {/* PHONE SCREENSHOTS */}
        <div className="hero-phones">
          <div className="phone-wrapper phone-back">
            <img
              src="/IMG_1308-portrait.png"
              alt="ReBlocks App Screen 2"
              className="phone-screenshot"
            />
          </div>
          <div className="phone-wrapper phone-front">
            <img
              src="/IMG_1307-portrait.png"
              alt="ReBlocks App Screen 1"
              className="phone-screenshot"
            />
          </div>
        </div>

        {/* Mobile Actions - Rendered below phones on mobile */}
        <div className="hero-actions hero-actions-mobile">
          <a
            id="launch-demo-btn-mobile"
            className="btn-demo"
            href="https://appetize.io/app/b_wopxyn4juesahuodtxhoxvlb4m"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            Launch Demo
          </a>

          <a href="#" id="appstore-link-mobile" className="badge-link disabled-link" aria-label="Download on the App Store">
            <img
              src="/Download_on_the_App_Store_Badge.svg.png"
              alt="Download on the App Store"
              className="store-badge disabled-badge"
            />
          </a>
          <a href="#" id="googleplay-link-mobile" className="badge-link disabled-link" aria-label="Get it on Google Play">
            <img
              src="/Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              className="store-badge disabled-badge"
            />
          </a>
        </div>
      </section>
    </>
  )
}

export default App

