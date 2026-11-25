import { useEffect, useState } from 'react'
import type { Project } from '../data/projects'
import { Reveal } from './Reveal'

export function ProjectCard({ project }: { project: Project }) {
  const [imageAvailable, setImageAvailable] = useState(false)
  useEffect(() => {
    let active = true
    const image = new Image()
    image.onload = () => { if (active) setImageAvailable(true) }
    image.src = `/images/projects/${project.slug}.png`
    return () => { active = false }
  }, [project.slug])
  return (
    <Reveal>
      <article className={`project-row tone-${project.tone}`}>
        {imageAvailable && <div className="project-visual"><img src={`/images/projects/${project.slug}.png`} alt={`${project.name} project preview`} loading="lazy" /></div>}
        <div className="project-content">
          <div className="project-title-line"><h3>{project.name}</h3></div>
          {project.status && <p className="project-status">{project.status}</p>}
          <p className="project-summary">{project.summary}</p>
          <p className="project-role"><span>MY ROLE</span>{project.role}</p>
          <p className="project-stack">{project.stack.join(' · ')}</p>
          <a className="project-link" href={project.code} target="_blank" rel="noreferrer">Code <span aria-hidden="true">↗</span></a>
        </div>
      </article>
    </Reveal>
  )
}
