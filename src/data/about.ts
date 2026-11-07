import { education, siteContent } from './site'

const interests = ['Game development', 'UI/UX design']

export interface AboutDetailSection {
  display: 'lines' | 'list'
  items: string[]
  marker: string
  title: string
}

export interface AboutContent {
  artwork: {
    alt: string
    label: string
    status: string
  }
  details: AboutDetailSection[]
  greeting: string
  greetingDecoration: string
  interests: string[]
  interestsHeading: string
  introduction: string
  pageTitle: string
}

export const aboutContent: AboutContent = {
  pageTitle: 'ABOUT ME',
  greeting: 'HELLO!',
  greetingDecoration: '♡',
  introduction: `I'm a ${siteContent.subtitle}.`,
  interestsHeading: 'INTERESTS',
  interests,
  artwork: {
    alt: 'Portrait artwork placeholder',
    label: 'Portrait artwork',
    status: 'TODO',
  },
  details: [
    {
      display: 'list',
      items: interests,
      marker: '♥',
      title: 'What I Like',
    },
    {
      display: 'lines',
      items: [
        education.degree,
        education.university,
        `Expected graduation: ${education.expectedGraduation}`,
      ],
      marker: '◆',
      title: 'Currently',
    },
    {
      display: 'list',
      items: ['Aspiring game developer'],
      marker: '✦',
      title: 'Goals',
    },
  ],
}
