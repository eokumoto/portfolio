import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'
import { SocialLinks } from '../components/SocialLinks/SocialLinks'
import { TechnologyTag } from '../components/TechnologyTag/TechnologyTag'
import { aboutContent } from '../data/about'
import './AboutPage.css'

export function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-page__layout">
        <header className="about-page__header">
          <BackButton label="Back to Home" to="/" />
          <PageHeading title={aboutContent.pageTitle} />
        </header>

        <PixelPanel className="about-page__content">
          <div className="about-page__introduction-row">
            <div
              aria-label={aboutContent.artwork.alt}
              className="about-page__art-placeholder"
              role="img"
            >
              <span>{aboutContent.artwork.label}</span>
              <strong>{aboutContent.artwork.status}</strong>
            </div>

            <div className="about-page__copy">
              <p className="about-page__greeting">
                {aboutContent.greeting}{' '}
                <span aria-hidden="true">
                  {aboutContent.greetingDecoration}
                </span>
              </p>
              <p className="about-page__introduction">
                {aboutContent.introduction}
              </p>

              <section
                aria-labelledby="about-interests-heading"
                className="about-page__interests"
              >
                <h2 id="about-interests-heading">
                  {aboutContent.interestsHeading}
                </h2>
                <ul>
                  {aboutContent.interests.map((interest) => (
                    <li key={interest}>
                      <TechnologyTag>{interest}</TechnologyTag>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <div className="about-page__details">
            {aboutContent.details.map((detail) => (
              <section className="about-page__detail-card" key={detail.title}>
                <h2>
                  <span aria-hidden="true">{detail.marker}</span>{' '}
                  {detail.title}
                </h2>
                {detail.display === 'list' ? (
                  <ul>
                    {detail.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  detail.items.map((item) => <p key={item}>{item}</p>)
                )}
              </section>
            ))}
          </div>
        </PixelPanel>

        <footer className="about-page__contact">
          <SocialLinks showIcons />
        </footer>
      </div>
    </main>
  )
}
