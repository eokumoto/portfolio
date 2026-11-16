import { useParams } from 'react-router-dom'
import { BackButton } from '../components/BackButton/BackButton'
import { ImageCarousel } from '../components/ImageCarousel/ImageCarousel'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelButton } from '../components/PixelButton/PixelButton'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'
import { TechnologyTag } from '../components/TechnologyTag/TechnologyTag'
import { getProjectBySlug, getTechStack } from '../data/projects'
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
            <div className="project-detail-page__media">
              <ImageCarousel
                images={project.gallery}
                key={project.slug}
                projectTitle={project.title}
              />

              <PixelPanel className="project-detail-page__panel project-detail-page__panel--info">
                <div className="project-detail-page__info">
                  <h2>Project Info</h2>
                  <p className="project-detail-page__info-line">
                    {[
                      project.date,
                      project.status === 'in-progress' ? 'In progress' : null,
                      project.teamSize
                        ? `Team of ${project.teamSize}`
                        : project.role
                          ? 'Team project'
                          : 'Solo project',
                    ]
                      .filter(Boolean)
                      .join(' · ')}
                  </p>
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
            </div>

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
                <h2>Tech Stack</h2>
                <dl className="project-detail-page__stack">
                  {getTechStack(project).map((group) => (
                    <div
                      className="project-detail-page__stack-group"
                      key={group.label}
                    >
                      <dt>{group.label}</dt>
                      <dd>
                        <ul className="technology-list">
                          {group.items.map((technology) => (
                            <li key={technology}>
                              <TechnologyTag>{technology}</TechnologyTag>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ))}
                </dl>
              </PixelPanel>
            </div>
          </div>

          <div className="project-detail-page__details">
            <PixelPanel className="project-detail-page__panel">
              <h2>Features</h2>
              <DetailList items={project.features} />
            </PixelPanel>

            <div className="project-detail-page__details-side">
              <PixelPanel className="project-detail-page__panel">
                <h2>Challenges</h2>
                <DetailList items={project.challenges} />
              </PixelPanel>

              {project.role && project.role.length > 0 && (
                <PixelPanel className="project-detail-page__panel">
                  <h2>My Role</h2>
                  <DetailList items={project.role} />
                </PixelPanel>
              )}
            </div>
          </div>

          <PixelPanel className="project-detail-page__panel project-detail-page__panel--closing">
            <div className="project-detail-page__learned">
              <h2>What I Learned</h2>
              <DetailList items={project.lessons} />
            </div>
          </PixelPanel>
        </article>
      </div>
    </main>
  )
}
