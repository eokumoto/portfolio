import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'

export function AboutPage() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <BackButton label="Back to Home" to="/" />
        <PageHeading title="About Emi" />
      </header>

      <div className="page-content">
        <PixelPanel>
          <p>Hello!</p>
          <p>Biography: TODO</p>

          <h2>Interests</h2>
          <ul>
            <li>Game development</li>
            <li>UI/UX design</li>
            <li>TODO</li>
          </ul>
        </PixelPanel>
      </div>
    </main>
  )
}
