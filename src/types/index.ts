export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Languages' | 'Frameworks' | 'Databases' | 'Tools & Platforms' | 'AI & Cloud' | 'Testing & APIs';
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
