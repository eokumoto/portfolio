import { projects } from './projects'
import { education, portfolioLinks, type Education } from './site'

const languageNames = new Set([
  'Java',
  'C',
  'Python',
  'JavaScript',
  'TypeScript',
  'SQL',
  'HTML',
  'CSS',
])

const projectTechnologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
]

/** Shorter names for the resume page, where the general service reads better. */
const resumeTechnologyNames: Record<string, string> = {
  'Google Cloud TTS': 'Google Cloud',
}

function unique(items: string[]) {
  return [...new Set(items)]
}

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

export interface ResumeExperience {
  dates: string
  details?: string[]
  /** Project names in the details that link to their project page. */
  projectLinks?: { slug: string; text: string }[]
  organization: string
  /** Time with the organization overall, when it started before the first role. */
  organizationDates?: string
  role: string
}

export interface ResumeContent {
  artwork: {
    alt: string
    label: string
    status: string
  }
  education: Education
  experience: ResumeExperience[]
  highlightedProjectSlugs: string[]
  languages: string[]
  links: ResumeLink[]
  pageTitle: string
  coursework: string[]
  technologies: string[]
  toolsAndConcepts: string[]
}

export const resumeContent: ResumeContent = {
  pageTitle: 'Resume',
  education,
  languages: unique([
    'Java',
    'C',
    'Python',
    'JavaScript',
    'SQL',
    ...projectTechnologies.filter((name) => languageNames.has(name)),
  ]),
  technologies: unique([
    ...projectTechnologies
      .filter((name) => !languageNames.has(name))
      .map((name) => resumeTechnologyNames[name] ?? name),
    'Node.js',
    'Express.js',
  ]),
  coursework: [
    'Object-Oriented Programming',
    'Data Structures and Algorithms',
    'Design and Analysis of Algorithms',
    'Computer Organization',
    'Discrete Structures',
    'Database Systems',
    'Calculus I–IV',
    'Linear Analysis',
  ],
  toolsAndConcepts: unique([
    'Git',
    'GitHub',
    'VS Code',
    'IntelliJ IDEA',
    'PyCharm',
    'Figma',
    'Software design',
    'Full-stack development',
    'Webhooks',
    'Prompt engineering',
    'Agile development',
  ]),
  highlightedProjectSlugs: ['poly-problems', 'sid'],
  experience: [
    {
      role: 'Developer',
      organization: 'Hack4Impact Cal Poly',
      dates: 'Sep 2026 – Present',
      details: [
        'Selected through a competitive application, including a required bootcamp and interviews',
        'Built FitnessMaxxing with Team 7 during the bootcamp',
        'Developer on the We Are Atascadero Pride team',
      ],
    },
    {
      role: 'Software Developer',
      organization: 'CodeBox',
      dates: 'Oct 2025 – Jun 2026',
      details: [
        "Selected through a competitive application to join Cal Poly's student software development organization",
        'Helped build and ship PolyProblems, an iOS app for Cal Poly students and faculty',
        'Represented the project at campus outreach events and demos',
      ],
      projectLinks: [{ text: 'PolyProblems', slug: 'poly-problems' }],
    },
    {
      role: "Captain's Lieutenant",
      organization: 'Cal Poly Lion Dance Team',
      organizationDates: 'Sep 2024 – Present',
      dates: 'Mar 2026 – Present',
      details: [
        'One of four lieutenants on the leadership team of a 50+ member club, working closely with the two captains',
        'Teach and support new members at practices',
        'Build the performer rosters for each performance',
      ],
    },
    {
      role: 'Event Coordinator',
      organization: 'Cal Poly Lion Dance Team',
      dates: 'Mar 2025 – Mar 2026',
      details: [
        'Co-planned 2 to 3 club events per quarter with another coordinator and the captains',
        'Handled the timeline, room bookings and supplies for each event, all within a set budget',
      ],
    },
    {
      role: 'Office Assistant',
      organization: 'Moanalua Community School for Adults',
      dates: 'Summers and winter breaks, 2025 – 2026',
      details: [
        'Managed files and records, and graded and sorted testing materials',
      ],
    },
  ],
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
