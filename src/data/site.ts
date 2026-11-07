export interface SocialLink {
  href: string
  id: 'email' | 'github' | 'linkedin'
  label: string
}

export interface Education {
  degree: string
  expectedGraduation: string
  university: string
}

export const siteContent = {
  name: 'Emi Okumoto',
  subtitle: '3rd Year Software Engineering Student at Cal Poly San Luis Obispo',
  homeLogo: {
    alt: 'Emi Okumoto — Software Engineering Student — Build, Code, Create!',
    height: 724,
    src: '/images/emi-logo.png',
    width: 2172,
  },
  primaryNavigation: [
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Resume', to: '/resume' },
  ],
} as const

export const education: Education = {
  degree: 'B.S. Software Engineering',
  expectedGraduation: 'May 2028',
  university: 'Cal Poly San Luis Obispo',
}

export const portfolioLinks = {
  github: {
    href: 'https://github.com/eokumoto',
    id: 'github',
    label: 'GitHub',
  },
  linkedin: {
    href: 'https://www.linkedin.com/in/emiokumoto/',
    id: 'linkedin',
    label: 'LinkedIn',
  },
  email: {
    href: 'mailto:eokumoto@calpoly.edu',
    id: 'email',
    label: 'Email',
  },
} satisfies Record<SocialLink['id'], SocialLink>

export const socialLinks: SocialLink[] = [
  portfolioLinks.github,
  portfolioLinks.linkedin,
  portfolioLinks.email,
]
