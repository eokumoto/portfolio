import { Outlet } from 'react-router-dom'

export function PortfolioLayout() {
  return (
    <div className="site-layout">
      <Outlet />
    </div>
  )
}
