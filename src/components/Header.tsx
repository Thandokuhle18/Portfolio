export function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Thandokuhle Maphanga, home">TM<span>.</span></a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a><a className="nav-cv" href="/Thandokuhle-Maphanga-CV.pdf" download>CV</a>
      </nav>
      <span className="folio">FOLIO / 2026</span>
    </header>
  )
}
