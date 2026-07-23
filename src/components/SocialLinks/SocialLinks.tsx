import { PixelButton } from '../PixelButton/PixelButton'

export interface SocialLink {
  href: string
  label: string
}

interface SocialLinksProps {
  links?: SocialLink[]
}

const portfolioSocialLinks: SocialLink[] = [
  { href: 'https://github.com/eokumoto', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/emiokumoto/', label: 'LinkedIn' },
  { href: 'mailto:eokumoto@calpoly.edu', label: 'Email' },
]

export function SocialLinks({
  links = portfolioSocialLinks,
}: SocialLinksProps) {
  return (
    <ul className="social-links" aria-label="Social links">
      {links.map((link) => {
        const external = link.href.startsWith('http')

        return (
          <li key={link.href}>
            <PixelButton
              href={link.href}
              rel={external ? 'noreferrer' : undefined}
              target={external ? '_blank' : undefined}
            >
              {link.label}
            </PixelButton>
          </li>
        )
      })}
    </ul>
  )
}
