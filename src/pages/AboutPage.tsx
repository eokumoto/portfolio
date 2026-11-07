import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'
import { SocialLinks } from '../components/SocialLinks/SocialLinks'
import { TechnologyTag } from '../components/TechnologyTag/TechnologyTag'
import './AboutPage.css'

export function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-page__layout">
        <header className="page-header">
          <BackButton label="Back to Home" to="/" />
          <PageHeading title="ABOUT ME" />
        </header>

        <div className="about-page__content">
          <PixelPanel className="about-page__art-panel">
            <div
              aria-label="Portrait artwork placeholder"
              className="about-page__art-placeholder"
              role="img"
            >
              <span>Portrait artwork</span>
              <strong>TODO</strong>
            </div>
          </PixelPanel>

          <PixelPanel className="about-page__text-panel">
            <div className="about-page__copy">
              <p className="about-page__greeting">HELLO!</p>
              <p className="about-page__introduction">
                3rd Year Software Engineering Student at Cal Poly San Luis
                Obispo
              </p>

              <section
                aria-labelledby="about-interests-heading"
                className="about-page__interests"
              >
                <h2 id="about-interests-heading">INTERESTS</h2>
                <ul>
                  <li>
                    <TechnologyTag>Game development</TechnologyTag>
                  </li>
                  <li>
                    <TechnologyTag>UI/UX design</TechnologyTag>
                  </li>
                </ul>
              </section>
            </div>

            <footer className="about-page__contact">
              <SocialLinks />
            </footer>
          </PixelPanel>
        </div>
      </div>
    </main>
  )
}
