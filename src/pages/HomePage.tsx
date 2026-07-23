import { PixelButton } from '../components/PixelButton/PixelButton'
import { SocialLinks } from '../components/SocialLinks/SocialLinks'
import './HomePage.css'

export function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__layout">
        <div className="home-page__main">
          <header className="home-page__title">
            <h1>Emi Okumoto</h1>
            <div className="home-page__subtitle">
              <p>Software Engineering Student</p>
              <p>Aspiring Game Developer</p>
            </div>
          </header>

          <nav className="home-page__navigation" aria-label="Portfolio">
            <PixelButton
              className="home-page__primary-button"
              to="/projects"
              variant="primary"
            >
              Projects
            </PixelButton>
            <PixelButton
              className="home-page__primary-button"
              to="/about"
              variant="primary"
            >
              About
            </PixelButton>
            <PixelButton
              className="home-page__primary-button"
              to="/resume"
              variant="primary"
            >
              Resume
            </PixelButton>
          </nav>
        </div>

        <footer className="home-page__footer">
          <p>Let&apos;s connect!</p>
          <SocialLinks compact />
        </footer>
      </div>
    </main>
  )
}
