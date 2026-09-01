export const profile = {
  name: 'Chester Agsamosam',
  shortName: 'CA',
  role: 'Web App Developer',
  title: 'Frontend Developer',
  location: 'Lipa, Calabarzon, Philippines',
  snapshot: [
    { label: 'Role', value: 'Web App Developer' },
    { label: 'Focus', value: 'Vue.js · TypeScript' },
    { label: 'Experience', value: '5 yrs · since 2020' },
  ],
  headline:
    'Frontend developer with 5 years of Vue.js and TypeScript experience shipping production web apps — including a major Philippine digital wallet — plus Laravel full-stack work and a practical use of AI to deliver cleaner, faster results.',
  photo: {
    src: 'portrait.jpg',
    alt: 'Black-and-white portrait of Chester Agsamosam',
  },
  coverLetter: {
    greeting: 'Dear Hiring Manager,',
    closing: 'Respectfully,',
    paragraphs: [
      'I am writing to introduce myself as a frontend developer with five years of experience building production web applications. I currently work at Ascendion, where I contribute to a widely used digital wallet in the Philippines — shipping features, reusable components, and interface improvements that have to hold up under real user volume and enterprise quality standards.',
      'My day-to-day work is Vue.js (2 and 3) and TypeScript, with additional delivery in Svelte, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS. Alongside feature work, I focus on frontend optimization and refactoring: clearer structure, better performance, and code that other developers can reuse. I also take part in refinement, surface risks early, and mentor teammates when technical guidance is needed.',
      'Before this role I was a full-stack developer at Codabyte, where I handled website design, database administration, real-time crypto data streaming, and defect resolution. That background helps me collaborate across the stack even when my primary ownership is the frontend.',
      'I use AI as a practical part of how I work — to move faster, test more options, and raise quality — while still relying on my own understanding of the product and the code. I would welcome the chance to bring that combination of production experience, frontend craft, and reliable delivery to your team.',
    ],
  },
  summary:
    'Passionate and versatile frontend developer with full-stack experience building modern, responsive, and user-focused web applications. I have contributed to projects for a well-known digital wallet in the Philippines, working with modern frontend technologies and development practices. Today I use AI to move faster, solve harder problems, and raise the quality of work — without outsourcing the craft itself.',
  about: [
    'I build production frontend systems that have to feel effortless: clear structure, fast interaction, and components that survive real product pressure.',
    'My core stack is Vue.js 2/3, Svelte, TypeScript, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS, with additional full-stack work in Laravel. I treat AI as a force multiplier on skills I already own — not a substitute for them.',
  ],
  contact: {
    email: 'chesteragsamosam@gmail.com',
    phone: '+63 962 690 8392',
    phoneHref: 'tel:+639626908392',
    linkedin: 'https://www.linkedin.com/in/chesteragsamosam',
    linkedinLabel: 'linkedin.com/in/chesteragsamosam',
  },
  skills: [
    { group: 'Core', items: ['Vue.js 2/3', 'TypeScript', 'JavaScript', 'Svelte'] },
    { group: 'Interface', items: ['Web Design', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
    { group: 'Systems', items: ['Laravel', 'Full-stack delivery', 'Frontend optimization'] },
    { group: 'Practice', items: ['Artificial Intelligence (AI)', 'Mentorship', 'Technical refinement'] },
  ],
  languages: [
    { name: 'Filipino', level: 'Native or bilingual' },
    { name: 'English', level: 'Limited working' },
  ],
  education: [
    {
      school: 'AMA University',
      degree: 'Bachelor of Science, Computer Engineering',
    },
    {
      school: 'Lipa City Colleges',
      degree: 'Bachelor of Science, Computer Engineering',
    },
  ],
  companies: [
    {
      id: 'ascendion',
      company: 'Ascendion',
      tenure: '2021 — Present',
      span: '5 years',
      roles: [
        {
          title: 'Frontend Developer',
          dates: 'November 2021 — Present',
          points: [
            'Feature work, support, and web-component development for a highly popular e-wallet in the Philippines.',
            'Delivered production UI under enterprise quality bars — maintainable, performant, and built for continued evolution of the platform.',
          ],
        },
        {
          title: 'Development Specialist',
          dates: '2021 — Present',
          points: [
            'Frontend optimization and refactoring: structure, performance, maintainability, and reuse.',
            'Proactively proposing technical solutions during refinement and catching issues before they ship.',
            'Technical guidance and mentorship for fellow developers.',
          ],
        },
      ],
    },
    {
      id: 'codabyte',
      company: 'codabyte.io',
      tenure: '2020 — 2021',
      span: '1 year',
      roles: [
        {
          title: 'Full Stack Developer / Engineer',
          dates: '2020 — December 2021',
          points: [
            'Database administration and website design.',
            'Real-time crypto data streaming.',
            'Troubleshooting, debugging, and resolving defects across the stack.',
          ],
        },
      ],
    },
  ],
} as const
