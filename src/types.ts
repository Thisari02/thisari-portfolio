export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  challenges: string | string[];
  solutions: string | string[];
  impact: string;
  status: 'Completed' | 'Ongoing';
  year: string;
  category: string;
  keyFeatures: string[];
  role?: string;
  roleDescription?: string;
  technologiesUsed?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
    tools?: string[];
    hardware?: string[];
    software?: string[];
    programming?: string[];
  };
  featured?: boolean;
  videoUrl?: string;
}

export interface Skill {
  name: string;
  level: 'Proficient' | 'Intermediate' | 'Advanced' | 'Learning';
  category: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skillsUsed: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string[];
  achievements?: string[];
  schoolTag?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  iconName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Achievement {
  id: string;
  metric: string;
  label: string;
  description: string;
}
