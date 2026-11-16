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
  /** When Emi worked on it, shown on the Select Project list. */
  date?: string
  thumbnail?: string
  gallery?: ProjectImage[]
  githubUrl?: string
  demoUrl?: string
  overview?: string[]
  /** What Emi personally did, for team projects. */
  role?: string[]
  /** How many people built it, counting Emi. Leave out for solo projects. */
  teamSize?: number
  inspiration?: string[]
  developmentProcess?: string[]
  features?: string[]
  challenges?: string[]
  lessons?: string[]
}

export const projects: Project[] = [
  {
    slug: 'poly-problems',
    teamSize: 10,
    title: 'PolyProblems',
    shortDescription:
      'A mobile app for reporting problems on campus. Made with CodeBox.',
    date: 'Oct 2025 – Jun 2026',
    technologies: [
      'TypeScript',
      'React Native',
      'Expo',
      'Supabase',
      'React Native Maps',
    ],
    githubUrl: 'https://github.com/codebox-calpoly/PolyProblems',
    demoUrl: 'https://apps.apple.com/us/app/polyproblems/id6762303809',
    overview: [
      'PolyProblems is a community-powered app that lets Cal Poly students and staff report campus issues straight to the departments that can fix them.',
      'I built it as one of six developers on a ten-person CodeBox team, working with a project manager, two tech leads and a designer. CodeBox is a student-led software organization at Cal Poly. The app is live on the App Store.',
    ],
    role: [
      'Built the Profile page',
      'Built the report cards that show each issue in the feed, and switched them from hardcoded sample data to real reports',
    ],
    features: [
      'One-tap reporting from the main feed, with a description, a pinned campus location and optional photos',
      'Community upvotes, so the most important issues rise to the top',
      'Reports go through a quick approval step before they appear on the public feed',
      'Filters for Facilities, Safety, Dining and Tech issues',
    ],
    challenges: [
      'Working in a team of ten students, so coordinating with designers, tech leads and other developers mattered as much as writing code',
      'Shipping a real app to the App Store instead of a class demo',
    ],
    lessons: [
      'My first time building something with other people, which is where I learned the Git workflow of cloning, branching, pulling and merging on a real team',
      'My first full-stack project outside of class. I had never used Supabase or built a backend before, and learned both while shipping to the App Store',
      'How a larger student team plans, reviews and ships work together',
    ],
  },
  {
    slug: 'sid',
    teamSize: 4,
    title: 'SID: Simplified Information Display',
    shortDescription:
      'Helps dyslexic readers by turning any flyer, menu or handout into easy-to-read text, just by snapping a photo.',
    date: 'Nov 13 – 15, 2026',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Gemini API',
      'Google Cloud TTS',
      'Stripe',
      'Vercel',
    ],
    githubUrl: 'https://github.com/eokumoto/SID',
    demoUrl: 'https://simplified-information-display.vercel.app/',
    overview: [
      'SID helps dyslexic readers with the hard-to-read text that is everywhere: flyers, menus, handouts and more. Upload a photo and SID shows the exact words back in a clear, dyslexia-friendly font with more space.',
      'I built it with three teammates over a three-day weekend at the OCOB x CPVC x CPE AI hackathon at Cal Poly.',
    ],
    role: [
      "Led the technical build as the team's software engineering student",
      'Coded alongside a data science teammate, splitting up the development work',
      'Connected and deployed the full stack: Next.js, Supabase, Gemini, Stripe and Google Cloud Text-to-Speech on Vercel',
    ],
    features: [
      'One Upload button that opens your phone camera or photo library, plus drag-and-drop and paste on desktop',
      'Word-for-word transcription with Gemini, keeping the original wording and line breaks',
      'Photo view that lays readable text over the original lines, with zoom, pan and an Original toggle',
      'Reading settings for size, spacing, background and font, with open-source, readability-focused fonts like OpenDyslexic, Lexend and Atkinson Hyperlegible',
      'Read aloud with Google Cloud Text-to-Speech and word-by-word highlighting',
      'Free and Pro plans, with Pro subscriptions through Stripe, kept in sync by a Stripe webhook',
      'Optional login with Google or email, saved history and deletion through Supabase',
    ],
    challenges: [
      'Turning up text and button sizes broke the navbar and wrapping, so we built separate, more careful mobile layouts',
      'Lots of merge conflicts from two of us editing the same files under hackathon time pressure',
      'Keeping the AI from rewriting or summarizing, so readers see exactly what the photo says',
      'Working around Gemini rate limits, including switching models mid-project',
      'Supabase only sends two emails an hour, which broke magic-link login, so we switched to password sign-in',
    ],
    lessons: [
      'Integrating an AI model (Gemini) into a real app for the first time, including keeping API keys on the server and handling rate limits',
      'Setting up paid subscriptions with Stripe for the first time',
      'Adding read aloud with Google Cloud Text-to-Speech for the first time',
      'Designing for accessibility first, from contrast and fonts to never relying on color alone',
    ],
  },
  {
    slug: 'study-sync',
    title: 'Study Sync',
    shortDescription:
      'Find classmates in your Cal Poly courses and join or host study sessions.',
    status: 'in-progress',
    date: 'Sep – Dec 2026',
    thumbnail: '/images/projects/study-sync/thumbnail.png',
    gallery: [
      {
        src: '/images/projects/study-sync/session-feed.png',
        alt: 'Study Sync feed of recommended study sessions, filtered by course, time and format',
      },
      {
        src: '/images/projects/study-sync/session-chat.png',
        alt: 'A Study Sync session page with details, attendees and a group chat',
      },
      {
        src: '/images/projects/study-sync/new-session.png',
        alt: 'The Study Sync form for posting a new study session',
      },
    ],
    technologies: ['TypeScript', 'CSS', 'JavaScript', 'Supabase', 'Vercel'],
    githubUrl: 'https://github.com/maaxdu/3100project',
    demoUrl: 'https://3100project.vercel.app/',
    overview: [
      'StudySync helps Cal Poly students find classmates to study with. Sign up, pick the classes you are enrolled in, and see study sessions for those courses in one feed.',
      'Built with a teammate for CSC 3100 (Software Engineering). Still in progress.',
    ],
    role: [
      'Set up the Supabase project: database, auth and the data behind courses, sessions, chat and notifications',
      'Built the frontend and the backend for the whole app',
      'My teammate designed the UI, and I turned the designs into working pages',
    ],
    features: [
      'Sign up and choose your classes from a list of every Cal Poly course, loaded from a CSV',
      'A profile with your name, year and major',
      'Post a study session with the course, topic, date and time, in-person or virtual format, location and group size',
      'A feed of sessions you can filter by your courses, by today, this week or any time, and by format',
      "Join other people's sessions and talk in a group chat once you're in",
      'Notifications when a session you joined changes',
    ],
    challenges: ['TODO'],
    lessons: ['TODO'],
  },
  {
    slug: 'easy-web',
    title: 'Easy Web',
    shortDescription: 'A browser that helps people browse confidently.',
    date: 'Jul 2026',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/eokumoto/easyWeb',
    demoUrl: 'https://abouteasyweb.vercel.app/',
    overview: [
      'EasyWeb is a browser for people who feel less confident online. It helps them understand websites, spot possible scams and ask someone they trust for help.',
      'It was inspired by watching members of my own family struggle with modern websites, not because they lacked ability, but because the internet has become overwhelming. Built for OpenAI Build Week.',
    ],
    features: [
      'Ask EasyWeb: plain-language answers about a page, with "Show me on the page" to point at the right spot',
      'Scam awareness for lookalike sites, urgency tactics, unclear refunds and risky payment requests',
      'A Trusted Helper companion app, paired with a code, where a family member can manage bookmarks and answer help requests',
      'Demo websites that show each feature in action',
    ],
    challenges: [
      'Explaining websites simply without being condescending',
      'Keeping the person browsing in control while still letting a helper step in',
    ],
    lessons: [
      'Designing for users who are very different from me',
      'Using Codex to move faster while keeping product and design decisions my own',
    ],
  },
  {
    slug: 'food-friends',
    teamSize: 2,
    title: 'Food Friends',
    shortDescription: "An app for keeping track of what's in your fridge.",
    date: 'May 2026',
    technologies: ['HTML', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/eokumoto/FoodFriends',
    demoUrl: 'https://youtube.com/shorts/75-awUHHbAw',
    overview: [
      'Food Friends keeps track of what is in your fridge, freezer and pantry so food gets eaten before it goes bad.',
      'Built at KiroHacks using Kiro, an AI-powered code editor, to help plan and build it.',
    ],
    role: ['Coded the whole app, building from the UI my teammate designed'],
    features: [
      'Inventory for fridge, freezer and pantry, with estimated expiry dates for common foods',
      'An "Expiring soon" list with color-coded urgency',
      'Quick actions to use an item, move it to the freezer or remove it',
      'Recipe ideas and food-saving tips based on what you have',
      'A grocery list, all saved in the browser with no sign-up',
    ],
    challenges: [
      'Estimating how long different foods last depending on where they are stored',
      'Fitting the whole app into plain HTML and JavaScript in a hackathon timeframe',
    ],
    lessons: [
      'Building a complete app without a framework',
      'Keeping a mobile-first layout simple and quick to use',
    ],
  },
  {
    slug: 'fitness-maxxing',
    title: 'FitnessMaxxing',
    shortDescription: 'A website for a mock gym.',
    date: 'Sep – Oct 2026',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Supabase', 'Vercel'],
    githubUrl: 'https://github.com/jaydonkc/h4i-calpoly-team7',
    demoUrl: 'https://h4i-calpoly-team7.vercel.app/',
    overview: [
      'FitnessMaxxing is a gym website with a playful identity. Members can sign up, book classes and pick a membership. Checkout is simulated and never charges money.',
      'Built with Team 7 for the Hack4Impact Cal Poly bootcamp.',
    ],
    role: [
      'Built the first version of the site: the page shell for Home, Classes, Purchase, Profile and Contact, plus the navbar and footer',
      'Did a UI pass across the pages later in the project',
    ],
    features: [
      'Account signup and login, with protected account pages',
      'Class schedules with filters, locations and booking with capacity checks',
      'Simulated membership checkout',
      'Coach bios, gym locations, hours and FAQs',
      'Contact messages saved to the database',
    ],
    challenges: [
      'Making sure classes could not be overbooked when several people reserve at once',
      'Coordinating feature branches and releases as a team',
    ],
    lessons: [
      'Working with MongoDB alongside Supabase auth',
      'Team workflows like pull requests, a dev branch and release checklists',
    ],
  },
]

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}

const techStackGroups: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: [
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Python',
      'Java',
      'C',
      'SQL',
    ],
  },
  {
    label: 'Frontend',
    items: [
      'Next.js',
      'React',
      'React Native',
      'Expo',
      'Tailwind CSS',
      'React Native Maps',
    ],
  },
  { label: 'Backend', items: ['Supabase', 'MongoDB'] },
  {
    label: 'APIs & Services',
    items: ['Gemini API', 'Google Cloud TTS', 'Stripe'],
  },
  { label: 'Deployment', items: ['Vercel'] },
]

/** Groups a project's technologies into Languages, Frontend, Backend and so on. */
export function getTechStack(project: Project) {
  const groups = techStackGroups
    .map((group) => ({
      label: group.label,
      items: project.technologies.filter((tech) => group.items.includes(tech)),
    }))
    .filter((group) => group.items.length > 0)
  const known = new Set(techStackGroups.flatMap((group) => group.items))
  const other = project.technologies.filter((tech) => !known.has(tech))

  return other.length > 0
    ? [...groups, { label: 'Other', items: other }]
    : groups
}
