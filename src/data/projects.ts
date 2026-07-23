export type ProjectStatus = 'complete' | 'in-progress' | 'coming-soon'

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  slug: string
  title: string
  shortDescription: string
  technologies: string[]
  status?: ProjectStatus
  thumbnail?: string
  gallery?: ProjectImage[]
  githubUrl?: string
  demoUrl?: string
  overview?: string[]
  inspiration?: string[]
  developmentProcess?: string[]
  features?: string[]
  challenges?: string[]
  lessons?: string[]
}

export const projects: Project[] = [
  {
    slug: 'poly-problems',
    title: 'Poly Problems',
    shortDescription:
      'An app made for reporting problems on campus. Made through Codebox.',
    technologies: ['TypeScript', 'HTML', 'JavaScript'],
    githubUrl: 'https://github.com/codebox-calpoly/PolyProblems',
    demoUrl: 'https://apps.apple.com/us/app/polyproblems/id6762303809',
    overview: ['TODO'],
    features: ['TODO'],
    challenges: ['TODO'],
    lessons: ['TODO'],
  },
  {
    slug: 'food-friends',
    title: 'Food Friends',
    shortDescription: "An app for keeping track of what's in your fridge.",
    technologies: ['HTML', 'JavaScript'],
    status: 'complete',
    githubUrl: 'https://github.com/eokumoto/FoodFriends',
    overview: ['Built for KiroHacks Hackathon.'],
    features: ['TODO'],
    challenges: ['TODO'],
    lessons: ['TODO'],
  },
  {
    slug: 'easy-web',
    title: 'Easy Web',
    shortDescription: 'A browser that helps people browse confidently.',
    technologies: ['TypeScript', 'CSS'],
    githubUrl: 'https://github.com/eokumoto/easyWeb',
    demoUrl: 'https://abouteasyweb.vercel.app/',
    overview: ['Built for OpenAI Build Week.'],
    features: ['TODO'],
    challenges: ['TODO'],
    lessons: ['TODO'],
  },
]

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}
