import { BackButton } from '../components/BackButton/BackButton'
import { PageHeading } from '../components/PageHeading/PageHeading'
import { PixelPanel } from '../components/PixelPanel/PixelPanel'

export function ResumePage() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <BackButton label="Back to Home" to="/" />
        <PageHeading title="Resume" />
      </header>

      <div className="page-content">
        <PixelPanel>
          <h2>Education</h2>
          <p>B.S. Software Engineering</p>
          <p>Cal Poly San Luis Obispo</p>
          <p>Expected graduation: May 2028</p>
        </PixelPanel>

        <PixelPanel>
          <h2>Skills</h2>
          <h3>Languages</h3>
          <p>Java, C, Python, JavaScript, SQL</p>
          <h3>Tools</h3>
          <p>Git, TODO</p>
          <h3>Concepts</h3>
          <p>
            Object-oriented programming, data structures, algorithms, software
            design
          </p>
        </PixelPanel>
      </div>
    </main>
  )
}
