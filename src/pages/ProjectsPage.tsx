import { useEffect, useState, type KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelButton } from '../components/PixelButton/PixelButton'
import { ProjectListItem } from '../components/ProjectListItem/ProjectListItem'
import { SocialLinks } from '../components/SocialLinks/SocialLinks'
import { projects } from '../data/projects'
import './ProjectsPage.css'

export function ProjectsPage() {
  const navigate = useNavigate()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selectedProject = projects[selectedIndex]
  const isComingSoon = selectedProject?.status === 'coming-soon'

  useEffect(() => {
    if (!selectedProject) {
      return
    }

    document
      .getElementById(`project-option-${selectedProject.slug}`)
      ?.scrollIntoView({ block: 'nearest' })
  }, [selectedProject])

  function handleSelectorKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    let nextIndex: number | undefined

    switch (event.key) {
      case 'ArrowDown':
        nextIndex = Math.min(selectedIndex + 1, projects.length - 1)
        break
      case 'ArrowUp':
        nextIndex = Math.max(selectedIndex - 1, 0)
        break
      case 'Home':
        nextIndex = 0
        break
      case 'End':
        nextIndex = projects.length - 1
        break
      default:
        return
    }

    event.preventDefault()
    setSelectedIndex(nextIndex)
  }

  function openSelectedProject() {
    if (!selectedProject || isComingSoon) {
      return
    }

    navigate(`/projects/${selectedProject.slug}`)
  }

  return (
    <main className="projects-page">
      <div className="projects-page__frame">
        <div className="page-header">
          <BackButton label="Back to Home" to="/" />
          <PageHeading title="Select Project" />
        </div>

        <ul
          aria-activedescendant={
            selectedProject
              ? `project-option-${selectedProject.slug}`
              : undefined
          }
          aria-label="Projects"
          className="project-list"
          onKeyDown={handleSelectorKeyDown}
          role="listbox"
          tabIndex={0}
        >
          {projects.map((project, index) => (
            <ProjectListItem
              key={project.slug}
              onSelect={() => setSelectedIndex(index)}
              project={project}
              selected={index === selectedIndex}
            />
          ))}
        </ul>

        <div className="projects-page__actions">
          <div className="projects-page__action-row">
            <PixelButton
              aria-describedby={
                isComingSoon ? 'project-availability-message' : undefined
              }
              className="projects-page__open-button"
              disabled={!selectedProject || isComingSoon}
              onClick={openSelectedProject}
              variant="primary"
            >
              Open Selected Project
            </PixelButton>

            <SocialLinks compact />
          </div>

          <p
            className="projects-page__availability"
            id="project-availability-message"
            role="status"
          >
            {isComingSoon ? 'This project is coming soon.' : ''}
          </p>
        </div>
      </div>
    </main>
  )
}
