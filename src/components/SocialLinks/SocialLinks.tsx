import { PixelButton } from '../PixelButton/PixelButton'
import { socialLinks, type SocialLink } from '../../data/site'

interface SocialLinksProps {
  compact?: boolean
  iconOnly?: boolean
  links?: SocialLink[]
  showIcons?: boolean
}

const compactMarkers: Record<string, string> = {
  Email: 'EMAIL',
  GitHub: 'GITHUB',
  LinkedIn: 'LINKEDIN',
}

function SocialIcon({ label }: { label: string }) {
  const commonProps = {
    'aria-hidden': true,
    className: 'social-links__icon',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'square' as const,
    strokeLinejoin: 'miter' as const,
    viewBox: '0 0 24 24',
  }

  if (label === 'GitHub') {
    return (
      <svg {...commonProps}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7.3A5.7 5.7 0 0 0 19.2 3c.2-.9.1-2.2-.2-3 0 0-1.2-.4-4 1.6a13.5 13.5 0 0 0-6 0C6.2-.4 5 0 5 0c-.3.8-.4 2.1-.2 3a5.7 5.7 0 0 0-1.5 4.2c0 5.7 3.4 6.9 6.7 7.3-.5.5-.8 1.1-.9 1.8-.1.7 0 1.4 0 2.1V22" />
        <path d="M9 18c-4.5 1.4-4.5-2.5-6.3-3" />
      </svg>
    )
  }

  if (label === 'LinkedIn') {
    return (
      <svg {...commonProps}>
        <rect height="11" width="4" x="3" y="10" />
        <path d="M11 21v-6.5a4.5 4.5 0 0 1 9 0V21h-4v-6a1.5 1.5 0 0 0-3 0v6Z" />
        <rect height="4" width="4" x="3" y="3" />
      </svg>
    )
  }

  if (label === 'Email') {
    return (
      <svg {...commonProps}>
        <rect height="16" width="20" x="2" y="4" />
        <path d="m3 6 9 7 9-7" />
      </svg>
    )
  }

  return <span aria-hidden="true">{label.slice(0, 1)}</span>
}

export function SocialLinks({
  compact = false,
  iconOnly = false,
  links = socialLinks,
  showIcons = false,
}: SocialLinksProps) {
  return (
    <ul
      className={`social-links${compact ? ' social-links--compact' : ''}`}
      aria-label="Social links"
    >
      {links.map((link) => {
        const external = link.href.startsWith('http')

        return (
          <li key={link.href}>
            <PixelButton
              href={link.href}
              rel={external ? 'noreferrer' : undefined}
              target={external ? '_blank' : undefined}
            >
              {iconOnly || showIcons ? (
                <SocialIcon label={link.label} />
              ) : compact ? (
                <span className="social-links__marker" aria-hidden="true">
                  {compactMarkers[link.label] ?? link.label.slice(0, 1)}
                </span>
              ) : null}
              <span
                className={
                  (compact || iconOnly) && !showIcons
                    ? 'screen-reader-only'
                    : undefined
                }
              >
                {link.label}
              </span>
            </PixelButton>
          </li>
        )
      })}
    </ul>
  )
}
