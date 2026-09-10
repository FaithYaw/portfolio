export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // SVG path or icon name
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenges: string;
  solutions: string;
  keyFeatures: string[];
  techStack: string[];
  category: string;
  imageUrl: string;
  videoUrl?: string;
  liveUrl: string;
  githubUrl: string;
  role: string;
  year?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string; // SVG path data for inline rendering
}

export interface OutsideInterest {
  title: string;
  imageUrl: string;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Faith Yaw',
  title: 'Full-Stack Developer',
  tagline: 'I like building things and figuring out how things work.',
  bio: `I'm a Full Stack Engineer who enjoys taking things apart to understand how they work beneath the surface. My experience is mainly in the fintech industry, where I've worked on everything from internal trading systems to insurance platforms. Outside of work, I like learning new technologies, experimenting with ideas, and building side projects that solve problems I actually care about.  `,
  email: 'faithyaw.xy@gmail.com',
  location: 'Malaysia',
  resumeUrl: '/assets/resume.pdf',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/FaithYaw', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/faith-yaw/', icon: 'linkedin' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'duitku',
    title: 'DuitKu',
    shortDescription: 'A virtual AI financial advisor',
    fullDescription:
      'An intelligent virtual financial advisor that analyzes spending pattern and delivers personalized financial guidance through conversational AI.',
    challenges:
      'Many Malaysians struggle with managing their finances due to a lack of easy-to-use budgeting tools. Existing apps are often too complex or too generic and only has functions for tracking expenses, leading to low engagement and poor financial habits.',
    solutions:
      'Duitku helps Malaysians build healthier financial habits by combining real-time expense tracking with AI-powered insights. It transforms raw spending data into clear, actionable advice, making it easier for users to understand their finances and make smarter money decisions.',
    keyFeatures: [
      'AI-Powered Chat Interface – Natural language conversations for financial guidance',
      'Expense Analysis – Categorized spending insights and spending patterns',
      'Smart Recommendations – Personalized savings suggestions based on your habits',
    ],
    techStack: ['Java Spring Boot', 'Python', 'FastAPI', 'React Native', 'Expo', 'PostgreSQL'],
    category: 'AI / Backend',
    imageUrl: 'project-demo/duitku-demo.png',
    videoUrl: 'project-demo/duitku-demo.mp4',
    liveUrl: 'http://ec2-52-62-92-112.ap-southeast-2.compute.amazonaws.com:3000/',
    githubUrl: '',
    role: '',
  },
  {
    id: 'devflow',
    title: 'DevFlow',
    shortDescription: 'Developer workflow automation tool',
    fullDescription:
      'A CLI and web interface designed to streamline complex development workflows, CI/CD pipelines, and local environment setups.',
    challenges:
      'Developer often manage infrastructure across multiple tools and dashboards, leading to slow troubleshooting, missed issues, and risky manual actions during incidents.',
    solutions:
      'This app centralizes operational insight and enables quick, guided decision-making. It surfaces real-time health data, explains system states, and supports safe execution of infrastructure actions only after explicit approval,helping dev move faster without sacrificing control.',
    keyFeatures: [
      'Live infrastructure dashboard with container health, Jenkins job status, and deployment visibility',
      'Conversational ops assistant that can inspect infrastructure and answer DevOps questions',
      'PHuman-approved write actions for changes like restarts, deploys, and updates to reduce risky automation',
      'CLI & Web UI interface for flexible workflow management and monitoring',
    ],
    techStack: ['Python'],
    category: 'DevOps / Tools',
    imageUrl: 'project-demo/devops-demo.png',
    videoUrl: 'project-demo/devops-ai.mp4',
    liveUrl: '',
    githubUrl: 'https://github.com/FaithYaw/devops-agent',
    role: 'Creator & Maintainer',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular?size=48' },
      { name: 'React', icon: 'https://cdn.simpleicons.org/react?size=48' },
      { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript?size=48' },
      { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss?size=48' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Java', icon: 'java.png?size=48' },
      { name: 'Python', icon: 'https://cdn.simpleicons.org/python?size=48' },
      { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql?size=48' },
      { name: 'OracleSQL', icon: 'oracle.png?size=48' },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker?size=48' },
      { name: 'AWS', icon: 'aws.png?size=48' },
      { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins?size=48' },
      { name: 'Grafana K6', icon: 'https://cdn.simpleicons.org/grafana?size=48' },
    ],
  },
];




export const OUTSIDE_INTERESTS: OutsideInterest[] = [
  {
    title: 'Travel & Culture',
    imageUrl: 'travel.jpeg',
    description:
      'I like getting lost in new places, trying to understand how local people live, and collecting stories (and food recommendations) along the way.',
  },
  {
    title: 'Fitness & Wellbeing',
    imageUrl: 'nature_hiking.jpeg',
    description:
      'I’m happiest when I’m immersed in nature and under the sun, especially on a good hike. I also enjoy playing tennis, although calling myself a tennis player is currently a bit of a stretch. I’m getting slightly less terrible with practice, though.',
  },
  {
    title: 'Meow',
    imageUrl: 'meow.png',
    description:
      'I love my meow meows. Playing with my cats is one of my favourite ways to switch off, decompress after a long day of staring at code.',
  },
];





export const EXPERIENCES: Experience[] = [
  {
    company: 'iFAST Global Hub AI',
    role: 'Full-Stack Developer',
    startDate: 'Apr 2025',
    endDate: 'Jun 2026',
    description:
      'Design, develop, and maintain full-stack applications using Java (Spring Boot) and Angular, delivering new features and system enhancements for internal trading system.',
    highlights: [
      'Contribute to the development and enhancement of in-house bond trading platform, implementing new functionality and improving operational workflows ',
      'Architected and developed an AI-powered knowledge assistant.',
      'Provide production support for trading operations, investigating bond order issues and performing root cause analysis.',
    ],
  },
  {
    company: 'Hokenso Sdn Bhd',
    role: 'Full-Stack Developer',
    startDate: 'Mar 2024',
    endDate: 'Apr 2025',
    description: 'Developed enterprise insurance applications using Java Spring Boot and Vue.js.',
    highlights: [
      'Designed and maintained backend services supporting secure, scalable insurance workflows.',
      'Delivered end-to-end features in an Agile environment, from requirement analysis to deployment.',
      'Improved software quality through unit testing (JUnit, Mockito) and close collaboration with QA during testing and release cycles.',
    ],
  },
  {
    company: 'iFAST Capital Sdn Bhd',
    role: 'Full-Stack Developer (Intern)',
    startDate: 'Sep 2022',
    endDate: 'Mar 2023',
    description:
      'Revamped legacy CRM system to improve user experience and system performance, while also implementing new features.',
    highlights: [
      'Developed REST APIs with Java Spring.',
      'Developed responsive UI components using Angular.',
      'Performed system maintenance, troubleshooting, and pre-deployment testing to ensure stability.',
    ],
  },
];

export const STATS: Stat[] = [
  { value: '2+', label: 'Years of Experience' },
  { value: '10+', label: 'Technologies Mastered' }
];
