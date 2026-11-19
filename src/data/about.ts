const interests = [
  'Full-stack web development',
  'Content creation',
  'Video editing',
]

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
  introduction: string[]
  pageTitle: string
}

export const aboutContent: AboutContent = {
  pageTitle: 'ABOUT ME',
  greeting: 'HELLO!',
  greetingDecoration: '♡',
  introduction: [
    "I'm Emi, a third-year Software Engineering student at Cal Poly San Luis Obispo, minoring in math. I'm originally from Honolulu, Hawaii, and I love web development, especially full stack.",
    'I like building things people actually get to use. My first team project, PolyProblems, is now on the App Store. Since then I keep coming back to apps that make everyday things a little easier, like SID for dyslexic readers and EasyWeb for anyone who finds the internet overwhelming.',
    "A year ago I had never used git or built a backend. Now I've shipped an app with a team of ten, taken the lead on a hackathon build, and joined Hack4Impact Cal Poly as a developer. I'm proud of how far I've come and excited to keep learning.",
  ],
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
      items: [
        'Playing instruments (violin, piano)',
        'Singing',
        'Cooking (especially pasta!)',
        'Rock climbing',
        'Playing video games',
        'Lion dancing',
      ],
      marker: '♥',
      title: 'In My Free Time',
    },
    {
      display: 'list',
      items: [
        'One Piece',
        'Sushi',
        'Anything cute and pink',
        'Rollercoasters',
        'Llamas',
      ],
      marker: '✦',
      title: 'Things I Love',
    },
  ],
}
