import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

export function WorkSection() {
  return (
    <section className="work-section page-shell section-space" id="work" aria-labelledby="work-heading">
      <SectionHeading label="SELECTED WORK" title="Selected work" id="work-heading" />
      <div className="project-list">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
    </section>
  )
}
