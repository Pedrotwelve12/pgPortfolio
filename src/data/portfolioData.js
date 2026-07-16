export const personal = {
  name: 'Pedro Rodolfo Gil Alfaro',
  firstName: 'Pedro',
  title: 'Full Stack Developer',
  email: 'pedrorodolfo.gil@email.com',
  phone: '+502 5466-1715',
  linkedin: 'https://www.linkedin.com/in/pedrogildev/',
  github: 'https://github.com/Pedrotwelve12',
  location: 'Guatemala',
  resume: null,
  summary:
    'Full Stack Developer with over 4 years of hands-on experience designing and building scalable web applications. Skilled in TypeScript, JavaScript, React, Node.js, and NestJS. Experienced with AWS services (Lambda, API Gateway, DynamoDB), REST and GraphQL APIs, and robust unit testing with Jest and Vitest. Committed to clean code, performance optimization, and modular architecture.',
};

export const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Material UI', icon: 'devicon-materialui-plain colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'NestJS', icon: 'devicon-nestjs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS Lambda', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'S3 / CloudFront', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'DynamoDB', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'AWS CDK', icon: 'devicon-amazonwebservices-original colored' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'DynamoDB', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'SQL / Oracle', icon: 'devicon-oracle-original colored' },
      { name: 'Amazon RDS', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'T-SQL', icon: 'devicon-microsoftsqlserver-plain colored' },
    ],
  },
  {
    category: 'Testing & Tools',
    items: [
      { name: 'Jest', icon: 'devicon-jest-plain colored' },
      { name: 'Vitest', icon: 'devicon-vitest-plain colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Telus Digital',
    period: 'Oct 2022 – May 2026',
    type: 'Full-time',
    highlights: [
      'Developed cloud-native microservices for TELUS Smart Home 2.0 IoT platform on AWS.',
      'Built serverless backends with TypeScript, Node.js, AWS Lambda, API Gateway, DynamoDB, EventBridge, and SQS.',
      'Implemented Infrastructure as Code using AWS CDK across multiple accounts and environments.',
      'Designed and enhanced REST and GraphQL APIs collaborating with distributed Agile teams.',
      'Built frontend features with React, React Query, and Material UI using reusable component architecture.',
      'Contributed to authorization and RBAC / policy-based access-control initiatives.',
      'Implemented observability with CloudWatch, Route 53 Health Checks, AWS X-Ray, and structured logging.',
      'Led unit and integration testing efforts using Jest and Vitest.',
    ],
    tech: ['TypeScript', 'Node.js', 'React', 'AWS Lambda', 'DynamoDB', 'GraphQL', 'NestJS', 'Material UI', 'AWS CDK', 'Jest'],
  },
  {
    id: 2,
    role: 'Senior Analyst',
    company: 'HCL Technologies Guatemala',
    period: '2021 – 2022',
    type: 'Full-time',
    highlights: [
      'Verified and processed sales orders ensuring contractual accuracy.',
      'Managed customer billing, provided statements, and accepted payments (EFT, ACH, credit cards).',
      'Resolved customer issues and performed assigned accounting tasks.',
    ],
    tech: ['Excel', 'ERP Systems', 'Data Analysis'],
  },
  {
    id: 3,
    role: 'Collections Associate / Process Leader',
    company: 'Capgemini Guatemala',
    period: '2019 – 2020',
    type: 'Full-time',
    highlights: [
      'Managed high-volume account portfolio of up to 5,000 accounts.',
      'Automated and improved collections processes using Excel, Python, and UIPath.',
      'Sent invoices and statements; confirmed pricing, shipping, and contracts.',
    ],
    tech: ['Python', 'UIPath', 'Excel', 'Process Automation'],
  },
  {
    id: 4,
    role: 'Accounting Intern',
    company: 'Aseguradora Guatemalteca',
    period: 'Oct 2017 – Nov 2017',
    type: 'Internship',
    highlights: [
      'Reconciled payable/receivable accounts and generated financial reports.',
      'Managed general ledger and internal accounting software.',
      'Created Excel-based reporting dashboards.',
    ],
    tech: ['Excel', 'Accounting Software', 'Financial Reporting'],
  },
];

export const education = [
  {
    degree: 'B.S. Software Engineering',
    institution: 'Universidad Mariano Gálvez de Guatemala',
    period: 'In Progress (9th Semester)',
  },
  {
    degree: 'Accounting',
    institution: 'Colegio Camino Verde',
    period: '2015 – 2017',
  },
];

export const languages = [
  { language: 'Spanish', level: 'Native', percent: 100 },
  { language: 'English', level: 'C1 – Advanced', percent: 85 },
];

export const navLinks = [
  { label: 'About', href: '#about', num: '01.' },
  { label: 'Skills', href: '#skills', num: '02.' },
  { label: 'Projects', href: '#projects', num: '03.' },
  { label: 'Experience', href: '#experience', num: '04.' },
  { label: 'Contact', href: '#contact', num: '05.' },
];

export const projects = [
  {
    id: 1,
    title: 'TELUS Smart Home IoT Platform',
    description:
      'Cloud-native microservices for a large-scale IoT platform managing smart home devices across AWS. Built serverless event-driven pipelines with real-time device-state synchronization, RBAC, and full observability.',
    tech: ['TypeScript', 'Node.js', 'React', 'AWS Lambda', 'DynamoDB', 'GraphQL', 'NestJS', 'AWS CDK'],
    github: null,
    demo: null,
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Collections Process Automation',
    description:
      'Automated high-volume collections workflow for 5,000+ accounts using Python scripting and UIPath RPA. Reduced manual effort by over 60%, improved accuracy, and streamlined invoice and payment reconciliation.',
    tech: ['Python', 'UIPath', 'Excel', 'RPA', 'Process Automation'],
    github: null,
    demo: null,
    featured: true,
    category: 'Automation',
  },
  {
    id: 3,
    title: 'Developer Portfolio',
    description:
      'This portfolio — a performant, accessible, and fully responsive SPA. Features scroll-spy navigation, section animations, a Formspree contact form, and automated GitHub Pages deployment via gh-pages.',
    tech: ['React', 'TypeScript', 'Material UI', 'Vite', 'GitHub Pages'],
    github: 'https://github.com/Pedrotwelve12/pgPortfolio',
    demo: 'https://Pedrotwelve12.github.io/pgPortfolio/',
    featured: true,
    category: 'Frontend',
  },
];
