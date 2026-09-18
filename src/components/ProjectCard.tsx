import { ArrowUpRight, Github, LockKeyhole } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className={`project-card ${compact ? 'project-card--compact' : ''}`}>
      {project.image && !compact ? (
        <div className="project-card__media">
          <img
            src={project.image}
            alt={project.imageAlt ?? ''}
            width="1280"
            height="736"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="project-card__signal" aria-hidden="true">
          <span>{project.tech[0]}</span>
          <span>{project.tech[1]}</span>
          <span>{project.tech[2]}</span>
        </div>
      )}

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.eyebrow}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <ul className="project-card__highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="tag-list" aria-label="Technologies used">
          {project.tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card__links">
          {project.links?.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              <Github size={16} aria-hidden="true" />
              {link.label}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ))}
          {project.privateRepository && (
            <span className="private-label">
              <LockKeyhole size={15} aria-hidden="true" />
              Private repository
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
