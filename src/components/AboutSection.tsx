import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

const education = [
  'Melsoft AI-Augmented Full-Stack Developer Programme, April to December 2026 (in progress; selected into the Top 25 through a competitive hackathon)',
  'Bachelor of Computer and Information Sciences in Application Development, Emeris Ruimsig (formerly IIE MSA), 2025 to 2027',
  'Higher Certificate in Mobile Application and Web Development, IIE MSA, 2024, with distinction',
]

export function AboutSection() {
  return (
    <section className="about-section page-shell section-space" id="about" aria-labelledby="about-heading">
      <SectionHeading number="003" label="A LITTLE ABOUT ME" title="A considered approach to building." id="about-heading" />
      <Reveal className="about-grid">
        <div className="about-copy">
          <p>I am a software developer in training with a focus on application development, cloud computing and applied AI. I am completing a Bachelor of Computer and Information Sciences in Application Development, following a Higher Certificate in Mobile Application and Web Development awarded with distinction.</p>
          <p>Alongside my degree I am completing the Melsoft AI-Augmented Full-Stack Developer programme, where I build and deploy full-stack applications using TypeScript, React and Supabase, working with Git-based workflows, automated testing and continuous integration. My goal is to grow into an AI Solutions Architect, and I am seeking internship and junior developer opportunities.</p>
        </div>
        <div className="education">
          <h3>Education and programmes</h3>
          <ol>{education.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol>
        </div>
      </Reveal>
    </section>
  )
}
