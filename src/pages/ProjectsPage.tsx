import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { ProjectListItem } from '../components/ProjectListItem/ProjectListItem'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <BackButton label="Back to Home" to="/" />
        <PageHeading title="Select Project" />
      </header>

      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectListItem project={project} />
          </li>
        ))}
      </ul>
    </main>
  )
}
