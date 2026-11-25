import { toolkit } from '../data/toolkit'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function ToolkitSection() {
  return (
    <section className="toolkit-section page-shell section-space" aria-labelledby="toolkit-heading">
      <SectionHeading title="Toolkit" id="toolkit-heading" />
      <Reveal className="toolkit-grid">{toolkit.map((group) => <div className="toolkit-group" key={group.title}><h3>{group.title}</h3><p>{group.items.join(' · ')}</p></div>)}</Reveal>
    </section>
  )
}
