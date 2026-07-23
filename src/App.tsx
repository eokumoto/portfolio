import { Navigate, Route, Routes } from 'react-router-dom'
import { PortfolioLayout } from './layouts/PortfolioLayout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ResumePage } from './pages/ResumePage'
import { StyleGuidePage } from './pages/StyleGuidePage'

function App() {
  return (
    <Routes>
      <Route element={<PortfolioLayout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="style-guide" element={<StyleGuidePage />} />
      </Route>

      <Route path="projects/:slug" element={<ProjectDetailPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
