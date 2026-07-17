export const personal = {
  name: 'Pedro Rodolfo Gil Alfaro',
  firstName: 'Pedro',
  title: 'Full Stack Developer',
  email: 'pedrorodolfo.gil@gmail.com',
  phone: '+502 5466-1715',
  linkedin: 'https://www.linkedin.com/in/pedrogildev/',
  github: 'https://github.com/Pedrotwelve12',
  location: 'Guatemala',
  resume: null,
  summary:
    'Full Stack Developer with over 4 years of hands-on experience designing and building scalable web applications. Skilled in TypeScript, JavaScript, React, Node.js, and NestJS. Experienced with AWS services (Lambda, API Gateway, DynamoDB), REST and GraphQL APIs, and robust unit testing with Jest and Vitest. Committed to clean code, performance optimization, and modular architecture.',
};

export const skills = [
  // Row 1
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'C# / .NET', icon: 'devicon-csharp-plain colored' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'React Query', icon: 'devicon-react-original colored' },
      { name: 'Material UI', icon: 'devicon-materialui-plain colored' },
      { name: 'HTML5 / CSS3', icon: 'devicon-html5-plain colored' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'NestJS', icon: 'devicon-nestjs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'ASP.NET Core', icon: 'devicon-dot-net-plain colored' },
      { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
    ],
  },
  // Row 2
  {
    category: 'Cloud & Serverless',
    items: [
      { name: 'AWS Lambda', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@12/icons/awslambda.svg', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'API Gateway', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@12/icons/amazonapigateway.svg', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'DynamoDB', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@12/icons/amazondynamodb.svg', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'EventBridge / SQS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@12/icons/amazonsqs.svg', icon: 'devicon-amazonwebservices-original colored' },
    ],
  },
  {
    category: 'DevOps & IaC',
    items: [
      { name: 'AWS CDK', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'CI/CD Pipeline', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'CloudWatch / X-Ray', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@12/icons/amazoncloudwatch.svg', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'Multi-Account AWS', icon: 'devicon-amazonwebservices-original colored' },
    ],
  },
  {
    category: 'Testing',
    items: [
      { name: 'Jest', icon: 'devicon-jest-plain colored' },
      { name: 'Vitest', icon: 'devicon-vitest-plain colored' },
      { name: 'Cypress', icon: 'devicon-cypressio-plain colored' },
      { name: 'MSW', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@12/icons/mockserviceworker.svg', icon: 'devicon-jest-plain colored' },
    ],
  },
  // Row 3
  {
    category: 'Databases',
    items: [
      { name: 'DynamoDB', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@12/icons/amazondynamodb.svg', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'Amazon RDS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@12/icons/amazonrds.svg', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'SQL / Oracle', icon: 'devicon-oracle-original colored' },
    ],
  },
  {
    category: 'Architecture',
    items: [
      { name: 'Microservices', icon: 'devicon-nestjs-plain colored' },
      { name: 'Event-Driven', icon: 'devicon-amazonwebservices-original colored' },
      { name: 'DDD / Monorepo', icon: 'devicon-github-original colored' },
      { name: 'Scrum / Agile', icon: 'devicon-jira-plain colored' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
      { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain colored' },
      { name: 'Apache NetBeans', icon: 'devicon-apache-plain colored' },
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
      'Developed and maintained cloud-native microservices and web applications for TELUS Smart Home, a large-scale IoT platform on AWS.',
      'Implemented serverless backend solutions using TypeScript, Node.js, AWS Lambda, API Gateway, DynamoDB, EventBridge, and SQS.',
      'Developed infrastructure as code using AWS CDK to provision and manage resources across multiple AWS accounts and environments.',
      'Designed and improved REST and GraphQL APIs collaborating with distributed teams under Agile methodologies.',
      'Participated in authorization and policy-based access control initiatives and role management.',
      'Implemented monitoring, observability, and operational health checks using CloudWatch, Route 53, AWS X-Ray, and structured logging.',
      'Collaborated on CI/CD pipelines, automated validations, deployments, and infrastructure compliance processes.',
      'Developed and maintained shared libraries, reusable SDKs, and platform tools used by multiple microservices.',
      'Led unit and integration testing efforts using Jest and Vitest to ensure application quality and stability.',
      'Participated in feature flags, runtime configuration management, and production incident resolution.',
      'Developed and maintained scalable React applications using TypeScript, React Query, and Material UI.',
      'Designed reusable component libraries, custom hooks, and shared frontend patterns to improve maintainability.',
      'Collaborated with UX and backend teams to deliver responsive, accessible, and production-ready user interfaces.',
    ],
    tech: ['TypeScript', 'Node.js', 'React', 'React Query', 'AWS Lambda', 'DynamoDB', 'EventBridge', 'GraphQL', 'NestJS', 'AWS CDK', 'Jest', 'CI/CD'],
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
