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
        <header className="about-page__header">
          <BackButton label="Back to Home" to="/" />
          <PageHeading title="ABOUT ME" />
        </header>

        <PixelPanel className="about-page__content">
          <div className="about-page__introduction-row">
            <div
              aria-label="Portrait artwork placeholder"
              className="about-page__art-placeholder"
              role="img"
            >
              <span>Portrait artwork</span>
              <strong>TODO</strong>
            </div>

            <div className="about-page__copy">
              <p className="about-page__greeting">
                HELLO! <span aria-hidden="true">♡</span>
              </p>
              <p className="about-page__introduction">
                I&apos;m a 3rd Year Software Engineering Student at Cal Poly San
                Luis Obispo.
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
          </div>

          <div className="about-page__details">
            <section className="about-page__detail-card">
              <h2><span aria-hidden="true">♥</span> What I Like</h2>
              <ul>
                <li>Game development</li>
                <li>UI/UX design</li>
              </ul>
            </section>

            <section className="about-page__detail-card">
              <h2><span aria-hidden="true">◆</span> Currently</h2>
              <p>B.S. Software Engineering</p>
              <p>Cal Poly San Luis Obispo</p>
              <p>Expected graduation: May 2028</p>
            </section>

            <section className="about-page__detail-card">
              <h2><span aria-hidden="true">✦</span> Goals</h2>
              <ul>
                <li>Aspiring game developer</li>
              </ul>
            </section>
          </div>
        </PixelPanel>

        <footer className="about-page__contact">
          <SocialLinks showIcons />
        </footer>
      </div>
    </main>
  )
}
