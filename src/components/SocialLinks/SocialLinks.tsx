import { PixelButton } from '../PixelButton/PixelButton'

export interface SocialLink {
  href: string
  label: string
}

interface SocialLinksProps {
  compact?: boolean
  links?: SocialLink[]
}

const portfolioSocialLinks: SocialLink[] = [
  { href: 'https://github.com/eokumoto', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/emiokumoto/', label: 'LinkedIn' },
  { href: 'mailto:eokumoto@calpoly.edu', label: 'Email' },
]

const compactMarkers: Record<string, string> = {
  Email: 'EMAIL',
  GitHub: 'GITHUB',
  LinkedIn: 'LINKEDIN',
}

export function SocialLinks({
  compact = false,
  links = portfolioSocialLinks,
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
              {compact && (
                <span className="social-links__marker" aria-hidden="true">
                  {compactMarkers[link.label] ?? link.label.slice(0, 1)}
                </span>
              )}
              <span className={compact ? 'screen-reader-only' : undefined}>
                {link.label}
              </span>
            </PixelButton>
          </li>
        )
      })}
    </ul>
  )
}
