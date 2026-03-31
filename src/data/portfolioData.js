import resumePdf from '../assets/Ajit Das.pdf'

export const profile = {
  name: 'Ajit Das',
  role: 'Full-Stack Developer',
  tagline:
    'Result-oriented Full-Stack Developer with 2+ years of experience in building scalable, high-performance web applications.',
  location: 'Mirpur 2, Rupnagar Abashik, Bangladesh',
  email: 'dasajit697@gmail.com',
  resumeUrl: resumePdf,
  cta: {
    primaryLabel: 'View Projects',
    secondaryLabel: 'Download Resume',
  },
  socialLinks: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ajit-das-33561a210/' },
    { label: 'Phone', url: 'tel:+8801710977179' },
  ],
}

export const about = {
  title: 'Full-Stack developer focused on scalable, maintainable products',
  subtitle:
    'Proficient in AI-driven development workflows, responsive UI architecture, requirement analysis, and RESTful API integration.',
  paragraphs: [
    'I build high-performance frontend systems with React, Next.js, Redux Toolkit, and modern CSS tools. My work emphasizes responsive design, cross-browser compatibility, and clean, reusable architecture.',
    'Beyond implementation, I contribute to architectural planning and workflow efficiency. I use AI-assisted development to accelerate delivery while maintaining quality, readability, and long-term maintainability.',
  ],
}

export const stats = [
  { label: 'Years Building Web', value: '2+' },
  { label: 'Projects Built', value: '10+' },
  { label: 'Frontend Focus', value: 'React + Next.js' },
]

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'PHP',
  'React',
  'Redux',
  'Next.js',
  'Node.js',
  'Express.js',
  'Laravel',
  'Bootstrap',
  'Tailwind CSS',
  'Firebase Authentication',
  'Responsive Design',
  'Cross-Browser Compatibility',
  'Problem Solving',
  'Requirement Analysis',
  'Communication and Team Collaboration',
  'Time Management',
  'Adaptability',
  'AI-Driven Development Workflows',
  'REST API Integration',
  'Architectural Planning',
  'Vite',
  'Sass',
]

export const experience = [
  {
    company: 'Omega Solution',
    role: 'Software Development (Full-Stack)',
    period: '10 Months (2025 - 2026)',
    points: [
      'Developed responsive and user-friendly interfaces with React.js, Redux, Tailwind CSS, and Bootstrap for 10+ projects.',
      'Developed Ticketing System frontend features with API integration.',
      'Developed Salon Software frontend screens and user workflows.',
      'Implemented ERP backend modules with Laravel (CRUD + database integration).',
      'Built and consumed REST APIs using Node.js/Express and Laravel.',
    ],
  },
]

export const education = [
  {
    institute: 'Feni Computer Institute',
    degree: 'Engineering in Computer Science and Technology',
    period: '2017 - 2021',
  },
  {
    institute: 'Bangladesh University of Business and Technology (BUBT)',
    degree: 'Computer Science and Engineering',
    period: '2023 - 2026 (Ongoing)',
  },
]

export const projects = [
  {
    title: 'EduManage (School Management System)',
    description:
      'Engineered a secure school management platform with role-based dashboard views and permission levels for Admins, Teachers, Parents, and Students.',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Redux Toolkit', 'RTK Query'],
    outcome: 'Optimized data flow, enabled secure token-based auth, and improved performance with Next.js server-side optimization.',
    link: 'https://school-management-dashboard-9p7b-bi0smicqt-ajit133s-projects.vercel.app/sign-in',
    github: 'https://github.com/Ajit133/School_Management_Dashboard',
  },
  {
    title: 'E-Commerce App',
    description:
      'Built a high-performance storefront featuring advanced product filtering, real-time search, and a persistent cart experience.',
    stack: ['React', 'Vite', 'Redux Toolkit', 'Sass', 'Vercel'],
    outcome: 'Delivered a mobile-first experience with secure checkout logic, form validation, and real-time pricing updates.',
    link: 'https://e-commerce-app-six-gilt.vercel.app/',
    github: 'https://github.com/Ajit133/E-Commerce-App',
  },
  {
    title: 'QuickHire',
    description:
      'Developed a full-stack job board with listing, search, filtering, job details, and complete application submission flow.',
    stack: ['React', 'Redux', 'Laravel', 'Tailwind CSS', 'REST API'],
    outcome: 'Implemented secure admin controls, resume upload, and responsive UX across mobile, tablet, and desktop.',
    link: 'https://quickhire-frontend-xi.vercel.app/',
    github: 'https://github.com/Ajit133/QuickhireFrontend',
    record: 'https://www.loom.com/share/f25ba949218245f59fde7bd8a05df881',
  },
]

export const contact = {
  title: 'Let us build something great',
  subtitle:
    'Open to full-time and freelance opportunities in frontend or full-stack development.',
}

export const footer = {
  text: 'Ajit Das • Full-Stack Developer • Mirpur 2, Rupnagar Abashik, Bangladesh',
}
