import { useParams } from 'react-router-dom'
import { BackButton } from '../components/BackButton/BackButton'
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelButton } from '../components/PixelButton/PixelButton'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'
import { TechnologyTag } from '../components/TechnologyTag/TechnologyTag'
import { getProjectBySlug } from '../data/projects'
import './ProjectDetailPage.css'

interface DetailListProps {
  items?: string[]
}

function DetailList({ items }: DetailListProps) {
  if (!items || items.length === 0) {
    return <p>TODO</p>
  }

  return (
    <ul className="project-detail-page__detail-list">
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  )
}

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="project-detail-page__layout">
          <BackButton label="Leave Project" to="/projects" />
          <PixelPanel className="project-detail-page__not-found">
            <h1>Project not found</h1>
            <p>No project matches this URL.</p>
          </PixelPanel>
        </div>
      </main>
    )
  }

  return (
    <main className="project-detail-page">
      <div className="project-detail-page__layout">
        <BackButton label="Leave Project" to="/projects" />
        <article className="project-detail-page__content">
          <PageHeading
            description={project.shortDescription}
            title={project.title}
          />

          <div className="project-detail-page__showcase">
            <ImageCarousel
              images={project.gallery}
              key={project.slug}
              projectTitle={project.title}
            />

            <div className="project-detail-page__summary">
              <PixelPanel className="project-detail-page__panel project-detail-page__panel--overview">
                <h2>Overview</h2>
                {project.overview?.length ? (
                  project.overview.map((paragraph, index) => (
                    <p key={`${paragraph}-${index}`}>{paragraph}</p>
                  ))
                ) : (
                  <p>TODO</p>
                )}
              </PixelPanel>

              <PixelPanel className="project-detail-page__panel project-detail-page__panel--technologies">
                <h2>Technologies</h2>
                <ul className="technology-list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      <TechnologyTag>{technology}</TechnologyTag>
                    </li>
                  ))}
                </ul>
              </PixelPanel>
            </div>
          </div>

          <PixelPanel className="project-detail-page__panel project-detail-page__panel--closing">
            <div className="project-detail-page__learned">
              <h2>What I Learned</h2>
              <DetailList items={project.lessons} />
            </div>

            {(project.githubUrl || project.demoUrl) && (
              <div className="project-detail-page__actions">
                {project.githubUrl && (
                  <PixelButton
                    href={project.githubUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    GITHUB
                  </PixelButton>
                )}
                {project.demoUrl && (
                  <PixelButton
                    href={project.demoUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    DEMO
                  </PixelButton>
                )}
              </div>
            )}
          </PixelPanel>
        </article>
      </div>
    </main>
  )
}
