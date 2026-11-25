import { useState } from 'react'
import type { Project } from '../data/projects'
import { Reveal } from './Reveal'

export function ProjectCard({ project }: { project: Project }) {
  const [imageMissing, setImageMissing] = useState(false)
  return (
    <Reveal>
      <article className={`project-row tone-${project.tone}`}>
        <div className="project-visual">
          {!imageMissing && <img src={`/images/projects/${project.slug}.png`} alt={`${project.name} project preview`} loading="lazy" onError={() => setImageMissing(true)} />}
          {imageMissing && <div className="project-placeholder"><span className="eyebrow">PROJECT Nº {project.number}</span><span className="placeholder-name">{project.name}</span><span className="placeholder-rule" /></div>}
        </div>
        <div className="project-content">
          <div className="project-title-line"><span className="project-number">{project.number} / 08</span><h3>{project.name}</h3></div>
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
