import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function ContactSection() {
  return (
    <section className="contact-section page-shell section-space" id="contact" aria-labelledby="contact-heading">
      <div><SectionHeading label="GET IN TOUCH" title="Let's talk" id="contact-heading" /><p className="contact-note">For opportunities, collaborations, or a thoughtful conversation.</p></div>
      <Reveal className="contact-links">
        <a className="cv-link" href="/Thandokuhle-Maphanga-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
        <a className="email-link" href="mailto:maphangathandokuhle@gmail.com">maphangathandokuhle@gmail.com <span aria-hidden="true">↗</span></a>
        <div className="social-links"><a href="https://www.linkedin.com/in/thandokuhle-maphanga-24783b27a/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="https://github.com/Thandokuhle18" target="_blank" rel="noreferrer">GitHub · Thandokuhle18 <span aria-hidden="true">↗</span></a><a href="https://github.com/ST10459107" target="_blank" rel="noreferrer">GitHub · ST10459107 <span aria-hidden="true">↗</span></a></div>
      </Reveal>
    </section>
  )
}
