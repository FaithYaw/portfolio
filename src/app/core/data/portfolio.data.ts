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
  bio: `I'm a Full Stack Engineer who enjoys understanding how things work beneath the surface.I've worked on software across fintech and insurance, including internal trading systems and insurance platforms.I'm still learning, experimenting, and occasionally going down engineering rabbit holes that start with "I wonder how this actually works..." , which is probably one of the reasons I enjoy software development in the first place.`,
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
      'Creating a flexible architecture that supports multiple cloud providers and CI tools.',
    solutions:
      'Designed a plugin-based architecture in Go, allowing easy community contributions and integrations.',
    keyFeatures: ['Pipeline automation', 'Environment templating', 'Plugin system', 'CLI & Web UI'],
    techStack: ['Angular', 'Go', 'Docker', 'Kubernetes'],
    category: 'DevOps / Tools',
    imageUrl: 'project-demo/devops-demo.png',
    videoUrl: 'project-demo/devops-ai.mp4',
    liveUrl: 'https://devflow-example.com',
    githubUrl: 'https://github.com/alexayaw/devflow',
    role: 'Creator & Maintainer',
    year: 2023,
  },
  {
    id: 'ecomarket',
    title: 'EcoMarket',
    shortDescription: 'Sustainable e-commerce marketplace',
    fullDescription:
      'A multi-vendor marketplace focusing exclusively on eco-friendly and sustainable products, with integrated carbon footprint tracking.',
    challenges: 'Managing complex vendor payouts and inventory synchronization.',
    solutions:
      'Integrated Stripe Connect for seamless multi-party payments and Redis for high-speed inventory caching.',
    keyFeatures: [
      'Multi-vendor support',
      'Stripe Connect',
      'Carbon tracking',
      'Real-time inventory',
    ],
    techStack: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
    category: 'Full-Stack',
    imageUrl: '',
    liveUrl: 'https://ecomarket-example.com',
    videoUrl: 'duitku-demo.mp4',
    githubUrl: 'https://github.com/alexayaw/ecomarket',
    role: 'Full-Stack Developer',
    year: 2023,
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
    title: 'Reading & Writing',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    description:
      'I read a lot, from fiction to non-fiction. Reading keeps me curious, while writing essays helps me untangle the many thoughts that seem perfectly clear in my head until I try to put them on paper.',
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
    company: 'Tech Innovators Inc.',
    role: 'Senior Full-Stack Developer',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: 'Leading a team of 5 developers in building enterprise-grade web applications.',
    highlights: [
      'Architected a microservices-based backend using Node.js and Go.',
      'Reduced initial load time of the main dashboard by 40%.',
      'Mentored junior developers and established code quality standards.'
    ]
  },
  {
    company: 'Creative Digital Agency',
    role: 'Web Developer',
    startDate: 'Mar 2020',
    endDate: 'Dec 2022',
    description: 'Developed high-performance websites and web applications for diverse clients.',
    highlights: [
      'Delivered 20+ projects on time and within budget.',
      'Implemented custom animations using GSAP and Three.js.',
      'Integrated headless CMS solutions for improved client content management.'
    ]
  },
  {
    company: 'Startup Hub',
    role: 'Junior Software Engineer',
    startDate: 'Jun 2018',
    endDate: 'Feb 2020',
    description: 'Assisted in the development of MVPs for early-stage startups.',
    highlights: [
      'Developed responsive UI components using Angular and React.',
      'Assisted in setting up CI/CD pipelines with GitHub Actions.',
      'Collaborated closely with designers to implement pixel-perfect interfaces.'
    ]
  }
];

export const STATS: Stat[] = [
  { value: '3', label: 'Years of Experience' },
  { value: '10+', label: 'Technologies Mastered' }
];
