import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [diaryDropdownOpen, setDiaryDropdownOpen] = useState(false)
  const [mobileDiaryOpen, setMobileDiaryOpen] = useState(false)
  const [localModalOpen, setLocalModalOpen] = useState(false)
  const [copiedText, setCopiedText] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [activeStep, setActiveStep] = useState(0)
  const [activeSubImage, setActiveSubImage] = useState(0)

  const tourSteps = [
    {
      title: "Seamless Login",
      badge: "WEB3 ABSTRACTED",
      subtitle: "No Seed Phrases or Gas Needed",
      description: "Sign up using a familiar email and password interface. Under the hood, ReBlocks secures your account instantly without forcing you to manage private keys or crypto wallets.",
      keywords: ["Email & Password", "Simple Setup", "Secure Access"],
      images: [
        "/screenshots/login-portrait.png",
        "/screenshots/create account auth.png",
        "/screenshots/verify email auth.png",
        "/screenshots/pin auth.png"
      ]
    },
    {
      title: "Secure Profile",
      badge: "BANK-GRADE SECURITY",
      subtitle: "Compliant & Trusted Verification",
      description: "Fast identity verification to ensure regulatory compliance and account safety. Unlocks full transaction limits for cross-border remittances within minutes.",
      keywords: ["Identity Protection", "Regulatory Compliance", "Secure Limits"],
      images: [
        "/screenshots/profile page unverified kyc.png"
      ]
    },
    {
      title: "x402 AI Agent",
      badge: "AGENTIC PAYMENTS",
      subtitle: "Effortless Conversational Payments",
      description: "Turn complex cross-border transfers into a simple conversation. Just tell our AI who to pay, and it handles the live FX rates, L2 routing, and local payout instantly.",
      keywords: ["Natural Language", "Real-Time FX", "Smart Routing"],
      images: [
        "/screenshots/ai assistant.png"
      ]
    },
    {
      title: "Premium Dashboard",
      badge: "INTUITIVE UX",
      subtitle: "Familiar Banking Experience",
      description: "Looks and feels like a modern financial app. Manage local payout recipients, view balances, and track your transparent on-chain transaction history with zero friction.",
      keywords: ["Local Payouts", "Clean UI", "Address Book"],
      images: [
        "/screenshots/home page.png",
        "/screenshots/recipients page.png",
        "/screenshots/history page.png",
        "/screenshots/profile page.png"
      ]
    },
    {
      title: "Instant Transfers",
      badge: "MORPH L2 SETTLEMENT",
      subtitle: "Smart Contract Verification & Settlement",
      description: "Local funds are on-ramped to stablecoins and securely locked by our smart contract. Upon verification, funds are released to local off-ramps for payout, emitting real-time L2 events and a verifiable Tx Hash.",
      keywords: ["Regional E-Wallets", "Server-Side Routing", "On-Chain Verification"],
      images: [
        "/screenshots/step 1 sending.png",
        "/screenshots/step1 sending-newrecepient.png",
        "/screenshots/step 1 sending-qr.png",
        "/screenshots/step 2.png",
        "/screenshots/step 3.png",
        "/screenshots/step3 payment method.png",
        "/screenshots/step3 convert.png",
        "/screenshots/step3confirm payment.png",
        "/screenshots/step4 done.png",
        "/screenshots/transactionhash.png"
      ]
    }
  ]

  const handleStepChange = (index: number) => {
    setActiveStep(index)
    setActiveSubImage(0)
  }

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
          <a href="https://canva.link/xll4nm7mq0mobil" target="_blank" rel="noopener noreferrer" className="nav-link">Pitch</a>
          <a href="https://x.com/gubsiclez/status/2058208780131999981?s=20" target="_blank" rel="noopener noreferrer" className="nav-link">Video Demo</a>
          
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

          <a href="https://imgur.com/a/zOPh0tT" target="_blank" rel="noopener noreferrer" className="nav-link">Architecture</a>
          <a href="https://github.com/mtrsvn/ReBlocks" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
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
          <a href="https://canva.link/xll4nm7mq0mobil" target="_blank" rel="noopener noreferrer" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Pitch</a>
          <a href="https://x.com/gubsiclez/status/2058208780131999981?s=20" target="_blank" rel="noopener noreferrer" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Video Demo</a>
          
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

          <a href="https://imgur.com/a/zOPh0tT" target="_blank" rel="noopener noreferrer" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Architecture</a>
          <a href="https://github.com/mtrsvn/ReBlocks" target="_blank" rel="noopener noreferrer" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>GitHub</a>
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
              Launch Simulator
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
            Launch Simulator
          </a>
        </div>
      </section>

      {/* APP TOUR SECTION */}
      <section id="app-tour">
        <div className="tour-container">
          <div className="tour-header">
            <h2 className="tour-section-title">
              See How <span className="gradient-text">ReBlocks</span> Works
            </h2>
            <p className="tour-section-desc">
              Take a walk through our gasless, instant L2 cross-border remittance protocol. Click through the technical breakthroughs below to see how our x402 AI Agent and Morph architecture make sending money home as easy as sending a text.
            </p>
          </div>

          <div className="tour-showcase-grid">
            {/* Tour Steps Tabs */}
            <div className="tour-steps-tabs">
              {tourSteps.map((step, idx) => (
                <button
                  key={idx}
                  className={`tour-step-card ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => handleStepChange(idx)}
                >
                  <div className="step-card-header">
                    <span className="step-number-pill">0{idx + 1}</span>
                    <span className="step-badge-mini">{step.badge}</span>
                  </div>
                  <h3 className="step-card-title">{step.title}</h3>
                  <p className="step-card-subtitle">{step.subtitle}</p>
                  
                  {activeStep === idx && (
                    <div className="step-card-details">
                      <p className="step-detail-desc">{step.description}</p>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="tour-viewer-panel">
              <div className="tour-viewer-container">
                {tourSteps[activeStep].images.length > 1 && (
                  <>
                    <button
                      className="tour-chevron left-chevron"
                      onClick={() => setActiveSubImage(Math.max(0, activeSubImage - 1))}
                      disabled={activeSubImage === 0}
                      aria-label="Previous screenshot"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button
                      className="tour-chevron right-chevron"
                      onClick={() => setActiveSubImage(Math.min(tourSteps[activeStep].images.length - 1, activeSubImage + 1))}
                      disabled={activeSubImage === tourSteps[activeStep].images.length - 1}
                      aria-label="Next screenshot"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </>
                )}
                
                <div className="tour-viewer-frame">
                  <div 
                    className="tour-carousel-track" 
                    style={{ transform: `translateX(-${activeSubImage * 100}%)` }}
                  >
                    {tourSteps[activeStep].images.map((img, idx) => (
                      <div key={idx} className={`tour-carousel-slide ${idx === activeSubImage ? 'active' : ''}`}>
                        <img
                          src={img}
                          alt={`${tourSteps[activeStep].title} - Screen ${idx + 1}`}
                          className="tour-active-screenshot"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sub-image Pagination Controls */}
              {tourSteps[activeStep].images.length > 1 && (
                <div className="tour-pagination">
                  <span className="pagination-label">Step Flow Progress:</span>
                  <div className="pagination-dots">
                    {tourSteps[activeStep].images.map((_, imgIdx) => (
                      <button
                        key={imgIdx}
                        className={`pagination-dot-btn ${activeSubImage === imgIdx ? 'active' : ''}`}
                        onClick={() => setActiveSubImage(imgIdx)}
                        aria-label={`Go to screenshot ${imgIdx + 1}`}
                      >
                        <span className="dot-index">{imgIdx + 1}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* CTA SECTION */}
      <section id="cta">
        <div className="cta-content">
          <h2 className="cta-title">Send Money Instantly</h2>
          <p className="cta-subtitle">
            Experience the fastest, cheapest way to send money home. Try the live interactive demo or download the app today.
          </p>
          <div className="cta-badges">
            <a
              href="https://expo.dev/artifacts/eas/4bUh4PB8gp17tgFwH2k2yX.apk"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#fff', color: '#45936d', boxShadow: 'none' }}
            >
              Download APK
            </a>

            <a
              className="btn-primary"
              href="https://appetize.io/app/b_nxax2eojumzt4fv2gyf54fc6n4"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#fff', color: '#45936d', boxShadow: 'none' }}
            >
              Launch Simulator
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
            <button 
              className="run-locally-btn" 
              onClick={() => setLocalModalOpen(true)}
              style={{ color: '#fff', textDecorationColor: 'rgba(255,255,255,0.5)' }}
            >
              How to Run the App Locally
            </button>
          </div>
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

