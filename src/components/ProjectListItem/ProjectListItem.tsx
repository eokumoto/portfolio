import { Link } from 'react-router-dom'
import type { Project, ProjectStatus } from '../../data/projects'
import { TechnologyTag } from '../TechnologyTag/TechnologyTag'

interface ProjectListItemProps {
  project: Project
  selected?: boolean
  to?: string
}

const statusLabels: Record<ProjectStatus, string> = {
  complete: 'Complete',
  'in-progress': 'In Progress',
  'coming-soon': 'Coming Soon',
}

export function ProjectListItem({
  project,
  selected = false,
  to = `/projects/${project.slug}`,
}: ProjectListItemProps) {
  return (
    <Link
      aria-current={selected ? 'page' : undefined}
      className={`project-list-item${selected ? ' is-selected' : ''}`}
      to={to}
    >
      <div className="project-list-item__thumbnail">
        {project.thumbnail ? (
          <img alt="" src={project.thumbnail} />
        ) : (
          <span>Thumbnail TODO</span>
        )}
      </div>

      <div className="project-list-item__content">
        {project.status && (
          <p className="project-list-item__status">
            {statusLabels[project.status]}
          </p>
        )}
        <h2 className="project-list-item__title">{project.title}</h2>
        <p className="project-list-item__description">
          {project.shortDescription}
        </p>
        <ul
          className="technology-list"
          aria-label={`${project.title} technologies`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>
              <TechnologyTag>{technology}</TechnologyTag>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
