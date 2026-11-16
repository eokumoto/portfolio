import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelButton } from '../components/PixelButton/PixelButton'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'
import { TechnologyTag } from '../components/TechnologyTag/TechnologyTag'
import { Link } from 'react-router-dom'
import { resumeContent, type ResumeExperience } from '../data/resume'
import campusArt from '../assets/resume-campus.png'
import './ResumePage.css'

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

/** Turns project names in an experience bullet into links to their pages. */
function renderDetail(
  detail: string,
  projectLinks: ResumeExperience['projectLinks'],
) {
  const link = projectLinks?.find(({ text }) => detail.includes(text))
  if (!link) return detail
  const [before, ...rest] = detail.split(link.text)
  return (
    <>
      {before}
      <Link className="resume-page__project-link" to={`/projects/${link.slug}`}>
        {link.text}
      </Link>
      {rest.join(link.text)}
    </>
  )
}

function ExperienceDetails({ item }: { item: ResumeExperience }) {
  if (!item.details || item.details.length === 0) return null
  return (
    <ul>
      {item.details.map((detail) => (
        <li key={detail}>{renderDetail(detail, item.projectLinks)}</li>
      ))}
    </ul>
  )
}

/** Groups back-to-back roles at the same organization, newest first. */
function groupExperience(items: ResumeExperience[]) {
  const groups: ResumeExperience[][] = []
  for (const item of items) {
    const last = groups.at(-1)
    if (last && last[0].organization === item.organization) last.push(item)
    else groups.push([item])
  }
  return groups
}

/** Spans from the oldest role's start to the newest role's end. */
function getGroupDates(group: ResumeExperience[]) {
  const overall = group.find((item) => item.organizationDates)
  if (overall?.organizationDates) return overall.organizationDates
  const end = group[0].dates.split(' – ').at(-1)
  const start = group[group.length - 1].dates.split(' – ')[0]
  return `${start} – ${end}`
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
                <span className="resume-page__school">
                  {resumeContent.education.university}
                </span>
                <strong className="resume-page__degree">
                  {resumeContent.education.degree}
                </strong>
                {resumeContent.education.minor && (
                  <span className="resume-page__minor">
                    {resumeContent.education.minor}
                  </span>
                )}
                <span className="resume-page__grad-badge">
                  Expected {resumeContent.education.expectedGraduation}
                </span>
              </div>
              <div aria-hidden="true" className="resume-page__campus-art">
                <img alt="" src={campusArt} />
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
                <h2>Languages</h2>
                <ul className="resume-page__language-list">
                  {resumeContent.languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </section>

              <div className="resume-page__skill-group resume-page__skill-group--tools">
                <section>
                  <h2>Technologies</h2>
                  <ul className="resume-page__tag-list">
                    {resumeContent.technologies.map((item) => (
                      <li key={item}>
                        <TechnologyTag>{item}</TechnologyTag>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2>Tools &amp; Concepts</h2>
                  <ul className="resume-page__tag-list">
                    {resumeContent.toolsAndConcepts.map((item) => (
                      <li key={item}>
                        <TechnologyTag>{item}</TechnologyTag>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="resume-page__skill-group resume-page__skill-group--coursework">
                <h2>Coursework</h2>
                <ul className="resume-page__tag-list">
                  {resumeContent.coursework.map((course) => (
                    <li key={course}>
                      <TechnologyTag>{course}</TechnologyTag>
                    </li>
                  ))}
                </ul>
              </section>
            </PixelPanel>
          </div>
        </div>

        <div className="resume-page__stack">
          <PixelPanel className="resume-page__panel resume-page__experience">
            <h2>Experience</h2>
            <div className="resume-page__experience-list">
              {groupExperience(resumeContent.experience).map((group) =>
                group.length === 1 ? (
                  <article
                    className="resume-page__experience-item"
                    key={`${group[0].organization}-${group[0].role}`}
                  >
                    <header>
                      <div>
                        <h3>{group[0].role}</h3>
                        <p className="resume-page__experience-org">
                          {group[0].organization}
                        </p>
                      </div>
                      <p className="resume-page__experience-dates">
                        {group[0].dates}
                      </p>
                    </header>
                    <ExperienceDetails item={group[0]} />
                  </article>
                ) : (
                  <article
                    className="resume-page__experience-item"
                    key={group[0].organization}
                  >
                    <header>
                      <h3 className="resume-page__experience-org">
                        {group[0].organization}
                      </h3>
                      <p className="resume-page__experience-dates">
                        {getGroupDates(group)}
                      </p>
                    </header>
                    <ol className="resume-page__positions">
                      {group.map((item) => (
                        <li className="resume-page__position" key={item.role}>
                          <header>
                            <h4>{item.role}</h4>
                            <p className="resume-page__experience-dates">
                              {item.dates}
                            </p>
                          </header>
                          <ExperienceDetails item={item} />
                        </li>
                      ))}
                    </ol>
                  </article>
                ),
              )}
            </div>
          </PixelPanel>
        </div>
      </div>
    </main>
  )
}
