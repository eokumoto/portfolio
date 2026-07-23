import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelButton } from '../components/PixelButton/PixelButton'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'
import { ProjectListItem } from '../components/ProjectListItem/ProjectListItem'
import { SocialLinks } from '../components/SocialLinks/SocialLinks'
import { TechnologyTag } from '../components/TechnologyTag/TechnologyTag'
import { projects } from '../data/projects'

export function StyleGuidePage() {
  const exampleProject = projects[1]

  return (
    <main className="page-shell style-guide-page">
      <BackButton label="Back to Home" to="/" />
      <PageHeading
        description="Temporary reference for the shared portfolio components."
        eyebrow="Shared visual system"
        title="Style Guide"
      />

      <div className="style-guide-content">
        <section className="style-guide-section" aria-labelledby="buttons-title">
          <h2 id="buttons-title">PixelButton</h2>
          <div className="style-guide-grid">
            <div className="style-guide-swatch">
              <p className="style-guide-label">Default</p>
              <PixelButton>Default Button</PixelButton>
            </div>
            <div className="style-guide-swatch">
              <p className="style-guide-label">Hover</p>
              <PixelButton className="is-hover-preview">Hover Button</PixelButton>
            </div>
            <div className="style-guide-swatch">
              <p className="style-guide-label">Focus</p>
              <PixelButton className="is-focus-preview">Focus Button</PixelButton>
            </div>
            <div className="style-guide-swatch">
              <p className="style-guide-label">Selected</p>
              <PixelButton selected>Selected Button</PixelButton>
            </div>
            <div className="style-guide-swatch">
              <p className="style-guide-label">Disabled</p>
              <PixelButton disabled>Disabled Button</PixelButton>
            </div>
            <div className="style-guide-swatch">
              <p className="style-guide-label">Primary</p>
              <PixelButton variant="primary">Primary Button</PixelButton>
            </div>
          </div>
        </section>

        <section className="style-guide-section" aria-labelledby="panels-title">
          <h2 id="panels-title">PixelPanel</h2>
          <div className="style-guide-grid">
            <PixelPanel>
              <h3>Warm cream panel</h3>
              <p>
                Body copy uses a readable sans-serif font and comfortable line
                spacing.
              </p>
            </PixelPanel>
            <PixelPanel variant="soft">
              <h3>Soft panel</h3>
              <p>A quieter surface for secondary information.</p>
            </PixelPanel>
          </div>
        </section>

        <section className="style-guide-section" aria-labelledby="heading-title">
          <h2 id="heading-title">PageHeading</h2>
          <PixelPanel variant="soft">
            <PageHeading
              align="left"
              description="A readable description can support the display heading."
              eyebrow="Example page"
              title="Cozy Components"
            />
          </PixelPanel>
        </section>

        <section className="style-guide-section" aria-labelledby="social-title">
          <h2 id="social-title">SocialLinks</h2>
          <PixelPanel>
            <SocialLinks />
          </PixelPanel>
        </section>

        <section className="style-guide-section" aria-labelledby="tags-title">
          <h2 id="tags-title">TechnologyTag</h2>
          <ul className="technology-list">
            <li>
              <TechnologyTag>TypeScript</TechnologyTag>
            </li>
            <li>
              <TechnologyTag>React</TechnologyTag>
            </li>
            <li>
              <TechnologyTag>CSS</TechnologyTag>
            </li>
          </ul>
        </section>

        <section className="style-guide-section" aria-labelledby="project-title">
          <h2 id="project-title">ProjectListItem</h2>
          <ProjectListItem project={exampleProject} selected />
        </section>
      </div>
    </main>
  )
}
