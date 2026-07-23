import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { ProjectListItem } from '../components/ProjectListItem/ProjectListItem'
import { projects } from '../data/projects'
import './ProjectsPage.css'

export function ProjectsPage() {
  return (
    <main className="page-shell projects-page">
      <div className="projects-page__frame">
        <div className="page-header">
          <BackButton label="Back to Home" to="/" />
          <PageHeading title="Select Project" />
        </div>

        <ul className="project-list">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <ProjectListItem project={project} selected={index === 0} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
