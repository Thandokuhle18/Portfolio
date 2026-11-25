import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <Reveal className="hero-copy">
        <p className="eyebrow">Software developer · South Africa</p>
        <h1 id="hero-title">Thandokuhle <em>Maphanga</em></h1>
        <p className="hero-intro">I build full-stack web and cloud applications with a growing focus on applied AI. Currently completing a degree in Application Development and the Melsoft AI-Augmented Full-Stack Developer programme.</p>
        <a className="text-link" href="#work">View selected work <span aria-hidden="true">↗</span></a>
      </Reveal>
      <Reveal className="portrait-wrap" delay={0.12}>
        <div className="portrait-backdrop" aria-hidden="true" />
        <img src="/images/thandokuhle-optimized.jpg" alt="Portrait of Thandokuhle Maphanga" fetchPriority="high" />
      </Reveal>
    </section>
  )
}
