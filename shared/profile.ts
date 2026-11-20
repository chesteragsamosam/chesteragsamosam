export const profile = {
  name: 'Chester Agsamosam',
  shortName: 'CA',
  role: 'AI Agentic Engineer',
  title: 'AI Agentic Engineer',
  location: 'Lipa City, Batangas, Philippines',
  birthDate: 'April 2, 1997',
  nationality: 'Filipino',
  gender: 'Male',
  maritalStatus: 'Single',
  height: '152 centimeters (5\'1")',
  weight: '52 kilograms (114.64 pounds)',
  eyeColor: 'Black',
  hairColor: 'Black',
  skinColor: 'Brown',
  ethnicity: 'Filipino',
  snapshot: [
    { label: 'Role', value: 'AI Agentic Engineer' },
    { label: 'Builds', value: 'Agents · AI apps · Web' },
    { label: 'Experience', value: '9 yrs · since 2017' },
    { label: 'Clients', value: 'Remote · worldwide' },
  ],
  headline:
    'I design and ship AI agents that do real work inside your product and your operations: answering customers, running workflows, and connecting to the tools you already use. Nine years of production engineering, including a major Philippine digital wallet, means they run reliably after launch, not only in a demo.',
  photo: {
    src: 'portrait.jpg',
    alt: 'Black-and-white portrait of Chester Agsamosam',
  },
  coverLetter: {
    greeting: 'Dear Hiring Manager,',
    closing: 'Respectfully,',
    paragraphs: [
    `I’m a developer with 9 years of experience building and maintaining production web applications. I currently work at Ascendion, where I contribute to a widely used digital wallet in the Philippines, working on new features, reusable components, bug fixes, and improvements to existing systems.`,
    'My strongest experience is in frontend development using Vue.js, TypeScript, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS, with additional experience in Svelte. I also have experience with backend development, databases, APIs, and real-time data, which allows me to work across different parts of an application when needed.',
    'Before Ascendion, I worked as a Full-Stack Developer at Codabyte, where I worked on website development, database administration, real-time crypto data streaming, and resolving issues across the application.',
    'Most of my engineering now runs through AI agents. I plan the work, break it into checked steps, have agents draft and review the code, and verify every change against the real product before it ships. That workflow lets me deliver faster without lowering the quality bar.',
    'I’m looking for an opportunity where I can apply my experience across frontend and backend development, continue growing, and contribute to building reliable and useful products.',
    ],
  },
  summary:
    'You get one engineer who owns the whole thing: the agent design, the integrations, the interface your users touch, and the production hardening. I scope small, ship a working version early, and measure whether it actually saves you time or money.',
  about: [
    'I am an AI agentic engineer. I build software where language models do more than chat. They read your data, call your APIs, make decisions inside guardrails you set, and hand off to a person when they should.',
    'Before agents, I spent nine years shipping production web apps: five of them on frontend systems for a widely used Philippine digital wallet, plus Laravel full-stack and real-time data work. That background is why my agents come with a usable interface, sane error handling, and logs you can read.',
    'The AI twin in the corner of this page is a small example. It is a streaming chat agent on a Cloudflare Worker, grounded in my own profile so it answers from facts instead of guessing.',
  ],
  services: [
    {
      title: 'Custom AI agents',
      outcome: 'Agents that take a task off your team\'s plate and finish it.',
      deliverables: ['Tool-using agents', 'Multi-step workflows', 'Human approval steps', 'Guardrails and logging'],
    },
    {
      title: 'AI inside your product',
      outcome: 'Assistants, copilots, and chat that know your data and speak in your voice.',
      deliverables: ['Knowledge-grounded chat', 'Retrieval (RAG)', 'Streaming UI', 'Model and cost tuning'],
    },
    {
      title: 'Workflow automation',
      outcome: 'The repetitive back-office work, handled by agents connected to your stack.',
      deliverables: ['API and CRM integrations', 'Email and document processing', 'Scheduled agents', 'MCP servers'],
    },
    {
      title: 'Web apps, built AI-first',
      outcome: 'Full products delivered faster because agents do the typing and I do the engineering.',
      deliverables: ['Vue / Nuxt / Svelte', 'TypeScript', 'Laravel back ends', 'Edge deployment'],
    },
  ],
  process: [
    { step: 'Scope', detail: 'A short call to find the one workflow where an agent pays for itself first.' },
    { step: 'Prototype', detail: 'A working version on your real data within days, so you judge results, not slides.' },
    { step: 'Harden', detail: 'Evaluations, guardrails, error handling, and monitoring before real users touch it.' },
    { step: 'Hand off', detail: 'Clear docs and a walkthrough so your team owns it, with ongoing support if you want it.' },
  ],
  contact: {
    email: 'chesteragsamosam@gmail.com',
    phone: '+63 962 690 8392',
    phoneHref: 'tel:+639626908392',
    linkedin: 'https://www.linkedin.com/in/chesteragsamosam',
    linkedinLabel: 'linkedin.com/in/chesteragsamosam',
  },
  resume: {
    file: '/chesteragsamosam/Chester%20Agsamosam%20Resume.pdf',
    label: 'Download resume (PDF)',
    name: 'Chester-Agsamosam-Resume.pdf',
  },
  cv: {
    file: '/chesteragsamosam/CHESTER%20AGSAMOSAM%20CV.docx',
    label: 'Download CV (DOCX)',
    name: 'Chester-Agsamosam-CV.docx',
  },
  skills: [
    { group: 'Agentic', items: ['AI agents', 'Tool calling', 'MCP', 'RAG', 'Prompt and eval design', 'Claude Code', 'OpenRouter'] },
    { group: 'Core', items: ['TypeScript', 'JavaScript', 'Vue.js 2/3', 'Nuxt', 'Svelte'] },
    { group: 'Systems', items: ['Laravel', 'Cloudflare Workers', 'REST APIs', 'Real-time data', 'Full-stack delivery'] },
    { group: 'Interface', items: ['Web Design', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
  ],
  personal: {
    chess:
      'I love playing chess. strategy, patience, and thinking a few moves ahead. It is a genuine hobby, not a professional claim: I do not list ratings, titles, or tournament results unless asked and I would not invent them.',
  },
  chat: {
    intro:
      "Hi, I'm Chester's digital twin. I'm an AI agentic engineer: I build AI agents, AI features inside products, and automations for clients, backed by 9 years of production web engineering, including a major Philippine digital wallet. Off the board I love chess. Ask what I could build for you, how I work, or about my background.",
    starters: [
      { label: 'Build', prompt: 'I have a business problem. What kind of AI agent could you build for it?' },
      { label: 'Process', prompt: 'How does a project with you work, from first call to launch?' },
      { label: 'Background', prompt: 'Walk me through your career and how you use AI agents in your engineering.' },
    ],
  },
  languages: [
    { name: 'Filipino', level: 'Native or bilingual' },
    { name: 'English', level: 'Limited working' },
  ],
  education: [
    {
      school: 'Kolehiyo ng Lungsod ng Lipa (2017-2021)',
      degree: 'Bachelor of Science, Computer Science',
    },
    {
      school: 'AMA University (2015-2017)',
      degree: 'Bachelor of Science, Computer Engineering',
    },
    {
      school: 'Lipa City Colleges (2013-2015)',
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
    {
      id: 'freelancing',
      company: 'Freelancing',
      tenure: '2020 — 2021',
      span: '3 years',
      roles: [
        {
          title: 'Web Application Developer',
          dates: '2017 — 2020',
          points: [
            'Developed and maintained web applications for clients using a variety of technologies including JavaScript, HTML, CSS, Bootstrap, Tailwind, PHP, and MySQL.',
            'Worked on a variety of projects including e-commerce websites, landing pages, and web applications.',
          ],
        },
      ],
    },
  ],
} as const
