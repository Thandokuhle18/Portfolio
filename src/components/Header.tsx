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
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="mailto:maphangathandokuhle@gmail.com">Email</a><a href="https://www.linkedin.com/in/thandokuhle-maphanga-24783b27a/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/Thandokuhle18" target="_blank" rel="noreferrer">GitHub</a><a className="nav-cv" href="/Thandokuhle-Maphanga-CV.pdf" download>CV</a>
      </nav>
    </header>
  )
}
