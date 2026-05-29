import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [diaryDropdownOpen, setDiaryDropdownOpen] = useState(false)
  const [mobileDiaryOpen, setMobileDiaryOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDiaryDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const buildDiaries = [
    { label: 'Update #1', url: 'https://x.com/gubsiclez/status/2057131970766016535?s=20', desc: 'Concept, L2 remittance problem, and Morph integration' },
    { label: 'Update #2', url: 'https://x.com/gubsiclez/status/2057517699413254325?s=20', desc: 'Designing the recipient and sender mobile experiences' },
    { label: 'Update #3', url: 'https://x.com/gubsiclez/status/2057884201450709293?s=20', desc: 'Smart contract backend and Morph Network bridging' },
    { label: 'Update #4', url: 'https://x.com/gubsiclez/status/2060018033184378886?s=20', desc: 'Interactive Appetize demo & testnet beta launch' }
  ]

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
          
          {/* Build Diaries Dropdown */}
          <div className="nav-dropdown-wrapper" ref={dropdownRef}>
            <button 
              className={`nav-link dropdown-toggle-btn ${diaryDropdownOpen ? 'active' : ''}`}
              onClick={() => setDiaryDropdownOpen(!diaryDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={diaryDropdownOpen}
            >
              Build Diaries
              <svg className={`chevron-icon ${diaryDropdownOpen ? 'open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {diaryDropdownOpen && (
              <div className="nav-dropdown-menu">
                {buildDiaries.map((diary, index) => (
                  <a 
                    key={index} 
                    href={diary.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="dropdown-item"
                    onClick={() => setDiaryDropdownOpen(false)}
                  >
                    <span className="dropdown-item-title">{diary.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="https://x.com/gubsiclez/status/2058208780131999981?s=20" target="_blank" rel="noopener noreferrer" className="nav-link">Video Demo</a>
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
          
          {/* Mobile Build Diaries Accordion */}
          <div className="mobile-accordion-wrapper">
            <button 
              className={`mobile-nav-link mobile-dropdown-btn ${mobileDiaryOpen ? 'active' : ''}`} 
              onClick={() => setMobileDiaryOpen(!mobileDiaryOpen)}
            >
              <span>Build Diaries</span>
              <svg className={`chevron-icon ${mobileDiaryOpen ? 'open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={`mobile-submenu ${mobileDiaryOpen ? 'open' : ''}`}>
              {buildDiaries.map((diary, index) => (
                <a 
                  key={index} 
                  href={diary.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-submenu-link" 
                  onClick={() => { setMenuOpen(false); setMobileDiaryOpen(false); }}
                >
                  <div className="mobile-submenu-title">{diary.label}</div>
                </a>
              ))}
            </div>
          </div>

          <a href="https://x.com/gubsiclez/status/2058208780131999981?s=20" target="_blank" rel="noopener noreferrer" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Video Demo</a>
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
              href="https://expo.dev/artifacts/eas/4bUh4PB8gp17tgFwH2k2yX.apk"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download APK
            </a>

            <a
              id="launch-demo-btn"
              className="btn-secondary"
              href="https://appetize.io/app/b_nxax2eojumzt4fv2gyf54fc6n4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Demo
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
            href="https://expo.dev/artifacts/eas/4bUh4PB8gp17tgFwH2k2yX.apk"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </a>

          <a
            id="launch-demo-btn-mobile"
            className="btn-secondary"
            href="https://appetize.io/app/b_nxax2eojumzt4fv2gyf54fc6n4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch Demo
          </a>
        </div>
      </section>
    </>
  )
}

export default App

