import { Skill } from '@/types';
// Note: We'll use strings instead of direct imports for icons, as we'll render them dynamically
// This avoids lint errors for missing icon imports

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', level: 5, category: 'Languages', icon: 'SiJavascript' },
  { name: 'Java', level: 5, category: 'Languages', icon: 'SiJava' },
  { name: 'Python', level: 4, category: 'Languages', icon: 'SiPython' },
  { name: 'PHP', level: 4, category: 'Languages', icon: 'SiPhp' },
  { name: 'C#', level: 4, category: 'Languages', icon: 'SiCsharp' },
  
  // Frameworks
  { name: 'React', level: 5, category: 'Frameworks', icon: 'SiReact' },
  { name: 'Vue.js', level: 4, category: 'Frameworks', icon: 'SiVuedotjs' },
  { name: 'Angular', level: 4, category: 'Frameworks', icon: 'SiAngular' },
  { name: 'Spring Boot', level: 5, category: 'Frameworks', icon: 'SiSpringboot' },
  { name: 'Symfony', level: 4, category: 'Frameworks', icon: 'SiSymfony' },
  { name: '.NET', level: 4, category: 'Frameworks', icon: 'SiDotnet' },
  
  // Databases
  { name: 'MySQL', level: 5, category: 'Databases', icon: 'SiMysql' },
  { name: 'MongoDB', level: 4, category: 'Databases', icon: 'SiMongodb' },
  { name: 'PostgreSQL', level: 4, category: 'Databases', icon: 'SiPostgresql' },
  { name: 'Elasticsearch', level: 4, category: 'Databases', icon: 'SiElasticsearch' },
  
  // Tools & Platforms
  { name: 'Docker', level: 5, category: 'Tools & Platforms', icon: 'SiDocker' },
  { name: 'GitHub Actions', level: 4, category: 'Tools & Platforms', icon: 'SiGithubactions' },
  { name: 'Terraform', level: 4, category: 'Tools & Platforms', icon: 'SiTerraform' },
  
  // AI & Cloud
  { name: 'IBM Watson', level: 4, category: 'AI & Cloud', icon: 'SiIbmwatson' },
  { name: 'AWS', level: 4, category: 'AI & Cloud', icon: 'SiAmazonaws' },
  { name: 'Azure', level: 4, category: 'AI & Cloud', icon: 'SiMicrosoftazure' },
  { name: 'Google Cloud', level: 4, category: 'AI & Cloud', icon: 'SiGooglecloud' },
  
  // Design
  { name: 'Adobe XD', level: 4, category: 'Tools & Platforms', icon: 'SiAdobexd' },
  { name: 'Tailwind CSS', level: 5, category: 'Frameworks', icon: 'SiTailwindcss' },
  { name: 'Figma', level: 4, category: 'Tools & Platforms', icon: 'SiFigma' },
];
