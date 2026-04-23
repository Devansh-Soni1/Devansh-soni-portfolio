export const personalInfo = {
  name: { first: 'DEVANSH', last: 'SONI' },
  role: 'Full Stack Developer',
  location: 'Sujangarh, Rajasthan',
  email: 'sonidevansh899@gmail.com',
  phone: '+91 9521186211',
  github: 'https://github.com/Devansh-Soni1',
  linkedin: 'https://www.linkedin.com/in/devansh-soni1/',
  instagram: 'http://instagram.com/__devansh_soni__',
  bio: 'BCA Graduate building fast, modern web apps. React · Node.js · MongoDB · Tailwind. Ready to ship real products from day one.',
  typewriterWords: [
    'React Developer',
    'Node.js Builder',
    'Full Stack Dev',
    'UI Enthusiast',
    'Open to Hire',
  ],
}

export const stats = [
  { id: 'c1', target: 5,  suffix: '+',  label: 'Projects Live' },
  { id: 'c2', target: 7,  suffix: '+',  label: 'Technologies'  },
  { id: 'c3', target: 6,  suffix: 'mo', label: 'Months Training' },
]

export const skills = [
  { name: 'JavaScript', sub: 'Core',           color: '#f7df1e' },
  { name: 'React',      sub: 'Frontend',        color: '#61dafb' },
  { name: 'Node.js',    sub: 'Backend',         color: '#00ff88' },
  { name: 'MongoDB',    sub: 'Database',        color: '#47a248' },
  { name: 'Tailwind CSS', sub: 'Styling',       color: '#06b6d4' },
  { name: 'HTML5',      sub: 'Markup',          color: '#e34f26' },
  { name: 'CSS3',       sub: 'Styling',         color: '#1572b6' },
  { name: 'Git & GitHub', sub: 'Version Control', color: '#f05032' },
  { name: 'REST APIs',  sub: 'Integration',     color: '#ff6a00' },
  { name: 'Responsive', sub: 'Design',          color: '#a855f7' },
]

export const projects = [
  {
    id: 1,
    tag: 'Live Website',
    isLive: true,
    title: 'Sunshine Handmade',
    desc: 'Real client e-commerce site for a handmade brand. Live on web — clean product UI, smooth UX, fully responsive.',
    tech: ['HTML', 'CSS', 'JS', 'Responsive'],
    link: 'https://www.sunshinehandmade.in/',
  },
  {
    id: 2,
    tag: 'Game',
    isLive: true,
    title: 'Tic Tac Toe AI',
    desc: 'Browser game with smart AI opponent & 1v1 mode. Unbeatable computer logic in pure vanilla JS.',
    tech: ['JavaScript', 'CSS', 'AI Logic'],
    link: 'https://devansh-soni1.github.io/Tic-Tac-Toe/src/',
  },
  {
    id: 3,
    tag: 'React App',
    isLive: false,
    title: 'Money Spends Tracker',
    desc: 'Expense tracker built with React + JSON API. Clean dashboard, state management, real data flow.',
    tech: ['React', 'JSON API', 'CSS'],
    link: 'https://github.com/Devansh-Soni1/money-spends',
  },
  {
    id: 4,
    tag: 'Portfolio',
    isLive: true,
    title: 'Devvansh soni Portfolio',
    desc: 'Personal portfolio built with React, Framer Motion & Tailwind. 3D card, particle network, glowing UI — fully responsive.',
    tech: ['React', 'Framer Motion', 'Tailwind', '3D'],
    link: 'https://devansh-soni-portfolio.vercel.app/',  
  },
]

export const education = [
  {
    date: 'AUG 2025 — FEB 2026',
    title: 'Web Development Course',
    org: '// JDB Infotech Institute, jaipur',
    desc: 'Full-stack training — HTML, CSS, JS, React, Node.js, MongoDB, Tailwind. Built real client and personal projects during the course.',
  },
  {
    date: '2023 — 2025',
    title: 'Bachelor of Computer Applications',
    org: '// Shri Balaji College · PDUS University, Sikar',
    desc: 'Core CS fundamentals, programming, databases and software development. Graduated with good academic performance.',
  },
]
