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

/** "SID: Simplified..." becomes "SID", "PolyProblems" or "Study Sync" becomes "PP" or "SS". */
function getInitials(title: string) {
  if (title.includes(':')) return title.split(':')[0].slice(0, 3).toUpperCase()

  return title
    .split(/\s+|(?<=[a-z])(?=[A-Z])/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
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
          <span aria-hidden="true" className="project-list-item__initials">
            {getInitials(project.title)}
          </span>
        )}
      </div>

      <div className="project-list-item__content">
        <p className="project-list-item__status">
          {project.status || project.date ? (
            [project.status && statusLabels[project.status], project.date]
              .filter(Boolean)
              .join(' · ')
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
          aria-label={`${project.title} tech stack`}
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
