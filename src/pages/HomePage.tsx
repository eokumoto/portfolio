import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelButton } from '../components/PixelButton/PixelButton'
import { SocialLinks } from '../components/SocialLinks/SocialLinks'

export function HomePage() {
  return (
    <main className="home-page">
      <div className="page-shell">
        <PageHeading
          description="3rd Year Software Engineering Student at Cal Poly San Luis Obispo · Aspiring Game Developer"
          title="Emi Okumoto"
        />

        <nav className="home-navigation" aria-label="Portfolio">
          <PixelButton to="/projects" variant="primary">
            Select Project
          </PixelButton>
          <PixelButton to="/about" variant="primary">
            About Me
          </PixelButton>
          <PixelButton to="/resume" variant="primary">
            Resume
          </PixelButton>
        </nav>

        <SocialLinks />
      </div>
    </main>
  )
}
