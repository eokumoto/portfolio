import type { Project, ProjectStatus } from '../../data/projects'
import { TechnologyTag } from '../TechnologyTag/TechnologyTag'

interface ProjectListItemProps {
  onSelect?: () => void
  project: Project
  selected?: boolean
}

const statusLabels: Record<ProjectStatus, string> = {
  complete: 'Complete',
  'in-progress': 'In Progress',
  'coming-soon': 'Coming Soon',
}

export function ProjectListItem({
  onSelect,
  project,
  selected = false,
}: ProjectListItemProps) {
  return (
    <li
      aria-selected={selected}
      className={`project-list-item${selected ? ' is-selected' : ''}`}
      id={`project-option-${project.slug}`}
      onClick={onSelect}
      role="option"
    >
      <div className="project-list-item__thumbnail">
        {project.thumbnail ? (
          <img alt="" src={project.thumbnail} />
        ) : (
          <span>Thumbnail TODO</span>
        )}
      </div>

      <div className="project-list-item__content">
        <p className="project-list-item__status">
          {project.status ? (
            statusLabels[project.status]
          ) : (
            <span aria-hidden="true">&nbsp;</span>
          )}
        </p>
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
    </li>
  )
}
