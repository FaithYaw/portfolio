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
  liveUrl: string;
  githubUrl: string;
  role: string;
  year: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string; // SVG path data for inline rendering
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
  tagline: 'Building digital products, brands, and experiences.',
  bio: 'I am a passionate software engineer specializing in full-stack web development. With a keen eye for design and a drive for technical excellence, I create scalable, user-centric applications that solve real-world problems.',
  email: 'faithyaw.xy@gmail.com',
  location: 'Malaysia',
  resumeUrl: '/assets/resume.pdf',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/FaithYaw', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/faith-yaw/', icon: 'linkedin' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'cloudsync-dashboard',
    title: 'CloudSync Dashboard',
    shortDescription: 'Real-time cloud infrastructure monitoring',
    fullDescription: 'A comprehensive dashboard for monitoring multi-cloud infrastructure in real-time. Provides detailed analytics, alerts, and cost optimization recommendations.',
    challenges: 'Handling high-frequency WebSocket data streams without performance degradation.',
    solutions: 'Implemented a custom data aggregation layer and optimized React re-renders using virtualization.',
    keyFeatures: ['Real-time metrics', 'Customizable alerts', 'Multi-cloud support', 'Cost analysis'],
    techStack: ['React', 'Node.js', 'WebSocket', 'AWS'],
    category: 'Full-Stack',
    imageUrl: '',
    liveUrl: 'https://cloudsync-example.com',
    githubUrl: 'https://github.com/alexayaw/cloudsync',
    role: 'Lead Developer',
    year: 2025
  },
  {
    id: 'fintrack-ai',
    title: 'FinTrack AI',
    shortDescription: 'AI-powered financial analytics platform',
    fullDescription: 'An intelligent platform that analyzes financial data to provide actionable insights and predictive modeling for businesses.',
    challenges: 'Integrating complex machine learning models into a fast, responsive API.',
    solutions: 'Utilized FastAPI for high-performance async endpoints and deployed ML models using optimized ONNX runtimes.',
    keyFeatures: ['Predictive analytics', 'Automated reporting', 'Data visualization', 'Anomaly detection'],
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
    category: 'AI / Backend',
    imageUrl: '',
    liveUrl: 'https://fintrack-example.com',
    githubUrl: 'https://github.com/alexayaw/fintrack',
    role: 'Backend / AI Engineer',
    year: 2024
  },
  {
    id: 'devflow',
    title: 'DevFlow',
    shortDescription: 'Developer workflow automation tool',
    fullDescription: 'A CLI and web interface designed to streamline complex development workflows, CI/CD pipelines, and local environment setups.',
    challenges: 'Creating a flexible architecture that supports multiple cloud providers and CI tools.',
    solutions: 'Designed a plugin-based architecture in Go, allowing easy community contributions and integrations.',
    keyFeatures: ['Pipeline automation', 'Environment templating', 'Plugin system', 'CLI & Web UI'],
    techStack: ['Angular', 'Go', 'Docker', 'Kubernetes'],
    category: 'DevOps / Tools',
    imageUrl: '',
    liveUrl: 'https://devflow-example.com',
    githubUrl: 'https://github.com/alexayaw/devflow',
    role: 'Creator & Maintainer',
    year: 2023
  },
  {
    id: 'ecomarket',
    title: 'EcoMarket',
    shortDescription: 'Sustainable e-commerce marketplace',
    fullDescription: 'A multi-vendor marketplace focusing exclusively on eco-friendly and sustainable products, with integrated carbon footprint tracking.',
    challenges: 'Managing complex vendor payouts and inventory synchronization.',
    solutions: 'Integrated Stripe Connect for seamless multi-party payments and Redis for high-speed inventory caching.',
    keyFeatures: ['Multi-vendor support', 'Stripe Connect', 'Carbon tracking', 'Real-time inventory'],
    techStack: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
    category: 'Full-Stack',
    imageUrl: '',
    liveUrl: 'https://ecomarket-example.com',
    githubUrl: 'https://github.com/alexayaw/ecomarket',
    role: 'Full-Stack Developer',
    year: 2023
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Angular', icon: '' },
      { name: 'React', icon: '' },
      { name: 'TypeScript', icon: '' },
      { name: 'HTML/CSS', icon: '' },
      { name: 'RxJS', icon: '' }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: '' },
      { name: 'Python', icon: '' },
      { name: 'Go', icon: '' },
      { name: 'PostgreSQL', icon: '' },
      { name: 'MongoDB', icon: '' }
    ]
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker', icon: '' },
      { name: 'Kubernetes', icon: '' },
      { name: 'AWS', icon: '' },
      { name: 'CI/CD', icon: '' },
      { name: 'Terraform', icon: '' }
    ]
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', icon: '' },
      { name: 'Webpack', icon: '' },
      { name: 'Figma', icon: '' },
      { name: 'Jest', icon: '' }
    ]
  }
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
  { value: '8+', label: 'Years of Experience' },
  { value: '40+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies Mastered' },
  { value: '100%', label: 'Client Satisfaction' }
];
