import { education, portfolioLinks, type Education } from './site'

export type ResumeLinkIcon = 'document' | 'github'

export interface ResumeLink {
  description?: string
  disabled?: boolean
  external?: boolean
  href?: string
  icon: ResumeLinkIcon
  id: string
  label: string
}

export interface ResumeContent {
  artwork: {
    alt: string
    label: string
    status: string
  }
  education: Education
  highlightedProjectSlugs: string[]
  languages: string[]
  links: ResumeLink[]
  pageTitle: string
  toolsAndConcepts: string[]
}

export const resumeContent: ResumeContent = {
  pageTitle: 'Resume',
  education,
  languages: ['Java', 'C', 'Python', 'JavaScript', 'SQL'],
  toolsAndConcepts: [
    'Git',
    'Object-oriented programming',
    'Data structures',
    'Algorithms',
    'Software design',
  ],
  highlightedProjectSlugs: ['poly-problems', 'food-friends'],
  artwork: {
    alt: 'Campus artwork placeholder',
    label: 'Campus artwork',
    status: 'TODO',
  },
  links: [
    {
      description: 'The resume PDF has not been added yet.',
      disabled: true,
      icon: 'document',
      id: 'resume-pdf',
      label: 'Resume PDF — TODO',
    },
    {
      external: true,
      href: portfolioLinks.github.href,
      icon: 'github',
      id: 'github',
      label: portfolioLinks.github.label,
    },
  ],
}
