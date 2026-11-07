import { PixelButton } from '../components/PixelButton/PixelButton'
import { SocialLinks } from '../components/SocialLinks/SocialLinks'
import './HomePage.css'

export function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__layout">
        <div className="home-page__main">
          <header className="home-page__title">
            <img
              alt="Emi Okumoto — Software Engineering Student — Build, Code, Create!"
              className="home-page__logo"
              height="724"
              src="/images/Title.png"
              width="2172"
            />
          </header>

          <nav className="home-page__navigation" aria-label="Portfolio">
            <div className="home-page__menu-buttons">
              <PixelButton
                className="home-page__primary-button"
                to="/projects"
              >
                Projects
              </PixelButton>
              <PixelButton className="home-page__primary-button" to="/about">
                About
              </PixelButton>
              <PixelButton className="home-page__primary-button" to="/resume">
                Resume
              </PixelButton>
            </div>
            <SocialLinks compact />
          </nav>
        </div>
      </div>
    </main>
  )
}
