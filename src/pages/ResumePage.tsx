import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelButton } from '../components/PixelButton/PixelButton'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'
import { TechnologyTag } from '../components/TechnologyTag/TechnologyTag'
import { projects } from '../data/projects'
import { resumeContent } from '../data/resume'
import './ResumePage.css'

const highlightedSlugs = new Set<string>(resumeContent.highlightedProjectSlugs)
const highlightedProjects = projects.filter((project) =>
  highlightedSlugs.has(project.slug),
)

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="resume-page__button-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      viewBox="0 0 24 24"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7.3A5.7 5.7 0 0 0 19.2 3c.2-.9.1-2.2-.2-3 0 0-1.2-.4-4 1.6a13.5 13.5 0 0 0-6 0C6.2-.4 5 0 5 0c-.3.8-.4 2.1-.2 3a5.7 5.7 0 0 0-1.5 4.2c0 5.7 3.4 6.9 6.7 7.3-.5.5-.8 1.1-.9 1.8-.1.7 0 1.4 0 2.1V22" />
      <path d="M9 18c-4.5 1.4-4.5-2.5-6.3-3" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg
      aria-hidden="true"
      className="resume-page__button-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      viewBox="0 0 24 24"
    >
      <path d="M5 2h10l4 4v16H5z" />
      <path d="M15 2v5h4M8 12h8M8 16h8" />
    </svg>
  )
}

export function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-page__layout">
        <header className="resume-page__header">
          <BackButton label="Back to Home" to="/" />
          <PageHeading title={resumeContent.pageTitle} />
        </header>

        <div className="resume-page__dashboard">
          <div className="resume-page__column resume-page__column--sidebar">
            <PixelPanel className="resume-page__panel resume-page__education">
              <h2>Education</h2>
              <div className="resume-page__education-copy">
                <strong>{resumeContent.education.degree}</strong>
                <span>{resumeContent.education.university}</span>
                <span>
                  Expected graduation:{' '}
                  {resumeContent.education.expectedGraduation}
                </span>
              </div>
              <div
                aria-label={resumeContent.artwork.alt}
                className="resume-page__art-placeholder"
                role="img"
              >
                <span>{resumeContent.artwork.label}</span>
                <strong>{resumeContent.artwork.status}</strong>
              </div>
            </PixelPanel>

            <PixelPanel className="resume-page__panel resume-page__links">
              <h2>Links</h2>
              <div className="resume-page__link-list">
                {resumeContent.links.map((link) =>
                  link.href ? (
                    <PixelButton
                      className="resume-page__link-button"
                      href={link.href}
                      key={link.id}
                      rel={link.external ? 'noreferrer' : undefined}
                      target={link.external ? '_blank' : undefined}
                    >
                      {link.icon === 'github' ? (
                        <GitHubIcon />
                      ) : (
                        <DocumentIcon />
                      )}
                      <span>{link.label}</span>
                      {link.external && (
                        <span
                          aria-hidden="true"
                          className="resume-page__external-mark"
                        >
                          ↗
                        </span>
                      )}
                    </PixelButton>
                  ) : (
                    <div key={link.id}>
                      <PixelButton
                        aria-describedby={`${link.id}-status`}
                        className="resume-page__link-button"
                        disabled={link.disabled}
                      >
                        {link.icon === 'github' ? (
                          <GitHubIcon />
                        ) : (
                          <DocumentIcon />
                        )}
                        <span>{link.label}</span>
                      </PixelButton>
                      {link.description && (
                        <span
                          className="screen-reader-only"
                          id={`${link.id}-status`}
                        >
                          {link.description}
                        </span>
                      )}
                    </div>
                  ),
                )}
              </div>
            </PixelPanel>
          </div>

          <div className="resume-page__column resume-page__column--main">
            <PixelPanel className="resume-page__panel resume-page__skills">
              <section className="resume-page__skill-group">
                <h2>Skills</h2>
                <ul className="resume-page__language-list">
                  {resumeContent.languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </section>

              <section className="resume-page__skill-group resume-page__skill-group--tools">
                <h2>Tools &amp; Concepts</h2>
                <ul className="resume-page__tag-list">
                  {resumeContent.toolsAndConcepts.map((item) => (
                    <li key={item}>
                      <TechnologyTag>{item}</TechnologyTag>
                    </li>
                  ))}
                </ul>
              </section>
            </PixelPanel>

            <PixelPanel className="resume-page__panel resume-page__projects">
              <h2>Project Highlights</h2>
              <div className="resume-page__project-list">
                {highlightedProjects.map((project) => (
                  <article className="resume-page__project" key={project.slug}>
                    <div
                      aria-label={`${project.title} thumbnail placeholder`}
                      className="resume-page__thumbnail"
                      role="img"
                    >
                      <span>Thumbnail</span>
                      <strong>TODO</strong>
                    </div>
                    <div className="resume-page__project-copy">
                      <h3>{project.title}</h3>
                      <p>{project.shortDescription}</p>
                      <ul className="resume-page__tag-list">
                        {project.technologies.slice(0, 3).map((technology) => (
                          <li key={technology}>
                            <TechnologyTag>{technology}</TechnologyTag>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <PixelButton
                      aria-label={`Open ${project.title}`}
                      className="resume-page__project-link"
                      to={`/projects/${project.slug}`}
                    >
                      <span aria-hidden="true">›</span>
                    </PixelButton>
                  </article>
                ))}
              </div>
            </PixelPanel>
          </div>
        </div>
      </div>
    </main>
  )
}
