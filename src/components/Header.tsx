import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Thandokuhle Maphanga, home">
        <span className="wordmark">Thandokuhle Maphanga</span>
        <span className="brand-note">Software developer · Krugersdorp, South Africa</span>
      </a>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
      <nav id="main-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  )
}
