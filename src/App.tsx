import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [diaryDropdownOpen, setDiaryDropdownOpen] = useState(false)
  const [mobileDiaryOpen, setMobileDiaryOpen] = useState(false)
  const [localModalOpen, setLocalModalOpen] = useState(false)
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(id)
    setTimeout(() => {
      setCopiedText(null)
    }, 2000)
  }

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

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setLocalModalOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
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

          <button className="run-locally-btn" onClick={() => setLocalModalOpen(true)}>
            How to Run the App Locally
          </button>
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

      {/* LOCAL RUN TUTORIAL MODAL */}
      {localModalOpen && (
        <div className="modal-overlay" onClick={() => setLocalModalOpen(false)}>
          <div className="modal-container local-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-group">
                <span className="modal-title">Running the Code Locally</span>
              </div>
              <button className="modal-close" onClick={() => setLocalModalOpen(false)} aria-label="Close modal">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <div className="modal-body local-modal-body">
              <div className="tutorial-section">
                <h4 className="tutorial-section-title">Prerequisites</h4>
                <div className="prereq-grid">
                  <div className="prereq-card">
                    <div className="prereq-info">
                      <div className="prereq-name">npm / yarn</div>
                      <div className="prereq-desc">Package manager for JavaScript</div>
                    </div>
                  </div>
                  <div className="prereq-card">
                    <div className="prereq-info">
                      <div className="prereq-name">Git</div>
                      <div className="prereq-desc">Distributed version control system</div>
                    </div>
                  </div>
                  <div className="prereq-card">
                    <div className="prereq-info">
                      <div className="prereq-name">Node.js</div>
                      <div className="prereq-desc">JavaScript runtime environment</div>
                    </div>
                  </div>
                  <div className="prereq-card">
                    <div className="prereq-info">
                      <div className="prereq-name">Expo Go App</div>
                      <div className="prereq-desc">Client to run Expo projects</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tutorial-section">
                <h4 className="tutorial-section-title">Installation & Execution</h4>
                
                <div className="step-list">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <div className="step-title">Clone the Repository</div>
                      <p className="step-desc">Open your terminal and clone the ReBlocks project code.</p>
                      <div className="code-block-wrapper">
                        <pre><code>{`git clone https://github.com/mtrsvn/ReBlocks\ncd ReBlocks`}</code></pre>
                        <button 
                          className="copy-code-btn"
                          onClick={() => handleCopy("git clone https://github.com/mtrsvn/ReBlocks\ncd ReBlocks", "clone")}
                        >
                          {copiedText === "clone" ? "Copied! ✓" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <div className="step-title">Install Client Dependencies</div>
                      <p className="step-desc">Install the required node packages for the project.</p>
                      <div className="code-block-wrapper">
                        <pre><code>npm install</code></pre>
                        <button 
                          className="copy-code-btn"
                          onClick={() => handleCopy("npm install", "install")}
                        >
                          {copiedText === "install" ? "Copied! ✓" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <div className="step-title">Start the Expo Development Server</div>
                      <p className="step-desc">Launch the development server to run React Native.</p>
                      <div className="code-block-wrapper">
                        <pre><code>npx expo start</code></pre>
                        <button 
                          className="copy-code-btn"
                          onClick={() => handleCopy("npx expo start", "start")}
                        >
                          {copiedText === "start" ? "Copied! ✓" : "Copy"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="step-item">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <div className="step-title">Scan and Run</div>
                      <p className="step-desc">
                        Scan the QR code displayed in your terminal using your physical device's camera to load the application instantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App

