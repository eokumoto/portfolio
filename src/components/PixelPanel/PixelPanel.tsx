import type { ReactNode } from 'react'

interface PixelPanelProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'soft'
}

export function PixelPanel({
  children,
  className = '',
  variant = 'default',
}: PixelPanelProps) {
  const classes = [
    'pixel-panel',
    variant === 'soft' ? 'pixel-panel--soft' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <section className={classes}>{children}</section>
}
