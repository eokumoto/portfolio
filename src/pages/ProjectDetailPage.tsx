import { useParams } from 'react-router-dom'
import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'
import { TechnologyTag } from '../components/TechnologyTag/TechnologyTag'
import { getProjectBySlug } from '../data/projects'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <main className="page-shell">
        <BackButton label="Leave Project" to="/projects" />
        <h1>Project not found</h1>
        <p>No project matches this URL.</p>
      </main>
    )
  }

  return (
    <main className="page-shell">
      <BackButton label="Leave Project" to="/projects" />
      <article className="page-content">
        <PageHeading
          description={project.shortDescription}
          title={project.title}
        />

        <PixelPanel>
          <h2>Overview</h2>
          {project.overview?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </PixelPanel>

        <PixelPanel>
          <h2>Technologies</h2>
          <ul className="technology-list">
            {project.technologies.map((technology) => (
              <li key={technology}>
                <TechnologyTag>{technology}</TechnologyTag>
              </li>
            ))}
          </ul>
        </PixelPanel>
      </article>
    </main>
  )
}
