import { PixelButton } from '../components/PixelButton/PixelButton'
import { SocialLinks } from '../components/SocialLinks/SocialLinks'
import './HomePage.css'

export function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__layout">
        <div className="home-page__main">
          <header className="home-page__title">
            <h1>EMI OKUMOTO</h1>
            <div className="home-page__subtitle">
              <p>SOFTWARE ENGINEERING STUDENT</p>
            </div>
          </header>

          <nav className="home-page__navigation" aria-label="Portfolio">
            <PixelButton
              className="home-page__primary-button"
              to="/projects"
            >
              PROJECTS
            </PixelButton>
            <PixelButton
              className="home-page__primary-button"
              to="/about"
            >
              ABOUT
            </PixelButton>
            <PixelButton
              className="home-page__primary-button"
              to="/resume"
            >
              RESUME
            </PixelButton>
          </nav>
        </div>

        <footer className="home-page__footer">
          <p>LET&apos;S CONNECT!</p>
          <SocialLinks compact />
        </footer>
      </div>
    </main>
  )
}
