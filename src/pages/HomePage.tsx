import { PixelButton } from '../components/PixelButton/PixelButton'
import { SocialLinks } from '../components/SocialLinks/SocialLinks'
import { siteContent } from '../data/site'
import './HomePage.css'

export function HomePage() {
  return (
    <main className="home-page">
      <div className="home-page__layout">
        <div className="home-page__main">
          <header className="home-page__title">
            <img
              alt={siteContent.homeLogo.alt}
              className="home-page__logo"
              height={siteContent.homeLogo.height}
              src={siteContent.homeLogo.src}
              width={siteContent.homeLogo.width}
            />
          </header>

          <nav className="home-page__navigation" aria-label="Portfolio">
            <div className="home-page__menu-buttons">
              {siteContent.primaryNavigation.map((item) => (
                <PixelButton
                  className="home-page__primary-button"
                  key={item.to}
                  to={item.to}
                >
                  {item.label}
                </PixelButton>
              ))}
            </div>
            <SocialLinks compact />
          </nav>
        </div>
      </div>
    </main>
  )
}
