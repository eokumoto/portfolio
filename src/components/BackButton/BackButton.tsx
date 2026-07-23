import { PixelButton } from '../PixelButton/PixelButton'

interface BackButtonProps {
  label: 'Back to Home' | 'Leave Project'
  to: '/' | '/projects'
}

export function BackButton({ label, to }: BackButtonProps) {
  return (
    <PixelButton className="back-button" to={to}>
      <span aria-hidden="true">←</span>
      {label}
    </PixelButton>
  )
}
