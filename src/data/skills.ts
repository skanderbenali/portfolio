import { Skill } from '@/types';
// Note: We'll use strings instead of direct imports for icons, as we'll render them dynamically
// This avoids lint errors for missing icon imports

export const skills: Skill[] = [
  // Languages
  { name: 'JavaScript', level: 5, category: 'Languages', icon: 'SiJavascript' },
  { name: 'TypeScript', level: 5, category: 'Languages', icon: 'SiTypescript' },
  { name: 'Java', level: 5, category: 'Languages', icon: 'SiJava' },
  { name: 'Python', level: 4, category: 'Languages', icon: 'SiPython' },
  { name: 'PHP', level: 4, category: 'Languages', icon: 'SiPhp' },
  { name: 'C++', level: 4, category: 'Languages', icon: 'SiCplusplus' },
  { name: 'C#', level: 4, category: 'Languages', icon: 'SiCsharp' },
  { name: 'Bash', level: 4, category: 'Languages', icon: 'SiGnubash' },
  { name: 'SQL', level: 5, category: 'Languages', icon: 'SiPostgresql' },
  { name: 'HTML5', level: 5, category: 'Languages', icon: 'SiHtml5' },
  { name: 'CSS3', level: 5, category: 'Languages', icon: 'SiCss3' },
  
  // Frameworks
  { name: 'React', level: 5, category: 'Frameworks', icon: 'SiReact' },
  { name: 'Vue.js', level: 4, category: 'Frameworks', icon: 'SiVuedotjs' },
  { name: 'Angular', level: 4, category: 'Frameworks', icon: 'SiAngular' },
  { name: 'Nuxt.js', level: 4, category: 'Frameworks', icon: 'SiNuxtdotjs' },
  { name: 'Next.js', level: 5, category: 'Frameworks', icon: 'SiNextdotjs' },
  { name: 'Node.js', level: 5, category: 'Frameworks', icon: 'SiNodedotjs' },
  { name: 'Express.js', level: 5, category: 'Frameworks', icon: 'SiExpress' },
  { name: 'NestJS', level: 4, category: 'Frameworks', icon: 'SiNestjs' },
  { name: 'Symfony', level: 4, category: 'Frameworks', icon: 'SiSymfony' },
  { name: 'Laravel', level: 4, category: 'Frameworks', icon: 'SiLaravel' },
  { name: '.NET', level: 4, category: 'Frameworks', icon: 'SiDotnet' },
  { name: 'Spring Boot', level: 5, category: 'Frameworks', icon: 'SiSpringboot' },
  { name: 'FastAPI', level: 4, category: 'Frameworks', icon: 'SiFastapi' },
  { name: 'JavaFX', level: 4, category: 'Frameworks', icon: 'SiJava' },
  { name: 'jQuery', level: 4, category: 'Frameworks', icon: 'SiJquery' },
  { name: 'Bootstrap', level: 5, category: 'Frameworks', icon: 'SiBootstrap' },
  { name: 'Tailwind CSS', level: 5, category: 'Frameworks', icon: 'SiTailwindcss' },
  
  // Databases
  { name: 'PostgreSQL', level: 5, category: 'Databases', icon: 'SiPostgresql' },
  { name: 'MySQL', level: 5, category: 'Databases', icon: 'SiMysql' },
  { name: 'MongoDB', level: 4, category: 'Databases', icon: 'SiMongodb' },
  { name: 'Oracle', level: 4, category: 'Databases', icon: 'SiOracle' },
  { name: 'Redis', level: 4, category: 'Databases', icon: 'SiRedis' },
  { name: 'Elasticsearch', level: 4, category: 'Databases', icon: 'SiElasticsearch' },
  { name: 'Firebase', level: 4, category: 'Databases', icon: 'SiFirebase' },
  { name: 'Supabase', level: 4, category: 'Databases', icon: 'SiSupabase' },
  
  // Tools & Platforms
  { name: 'Docker', level: 5, category: 'Tools & Platforms', icon: 'SiDocker' },
  { name: 'Git', level: 5, category: 'Tools & Platforms', icon: 'SiGit' },
  { name: 'GitHub Actions', level: 4, category: 'Tools & Platforms', icon: 'SiGithubactions' },
  { name: 'GitLab CI/CD', level: 4, category: 'Tools & Platforms', icon: 'SiGitlab' },
  { name: 'Terraform', level: 4, category: 'Tools & Platforms', icon: 'SiTerraform' },
  { name: 'CircleCI', level: 4, category: 'Tools & Platforms', icon: 'SiCircleci' },
  { name: 'Kibana', level: 4, category: 'Tools & Platforms', icon: 'SiKibana' },
  { name: 'Logstash', level: 4, category: 'Tools & Platforms', icon: 'SiLogstash' },
  { name: 'RabbitMQ', level: 4, category: 'Tools & Platforms', icon: 'SiRabbitmq' },
  { name: 'Vite', level: 4, category: 'Tools & Platforms', icon: 'SiVite' },
  { name: 'Jenkins', level: 4, category: 'Tools & Platforms', icon: 'SiJenkins' },
  { name: 'SonarQube', level: 4, category: 'Tools & Platforms', icon: 'SiSonarqube' },
  { name: 'Grafana', level: 4, category: 'Tools & Platforms', icon: 'SiGrafana' },
  { name: 'Bitbucket', level: 4, category: 'Tools & Platforms', icon: 'SiBitbucket' },
  { name: 'Figma', level: 4, category: 'Tools & Platforms', icon: 'SiFigma' },
  
  // AI & Cloud
  { name: 'IBM Watson', level: 4, category: 'AI & Cloud', icon: 'SiIbmwatson' },
  { name: 'Vortex AI', level: 4, category: 'AI & Cloud', icon: 'SiTensorflow' },
  { name: 'OpenAI API', level: 4, category: 'AI & Cloud', icon: 'SiOpenai' },
  { name: 'AWS', level: 4, category: 'AI & Cloud', icon: 'SiAmazonaws' },
  
  // Testing & APIs
  { name: 'GraphQL', level: 4, category: 'Testing & APIs', icon: 'SiGraphql' },
  { name: 'REST APIs', level: 5, category: 'Testing & APIs', icon: 'SiOpenapiinitiative' },
  { name: 'WebSockets', level: 4, category: 'Testing & APIs', icon: 'SiSocketdotio' },
  { name: 'OAuth2/JWT', level: 4, category: 'Testing & APIs', icon: 'SiAuth0' },
  { name: 'XML', level: 4, category: 'Testing & APIs', icon: 'SiXml' },
  { name: 'Jest', level: 4, category: 'Testing & APIs', icon: 'SiJest' },
  { name: 'Mocha', level: 4, category: 'Testing & APIs', icon: 'SiMocha' },
  { name: 'Cypress', level: 4, category: 'Testing & APIs', icon: 'SiCypress' },
  { name: 'Postman', level: 4, category: 'Testing & APIs', icon: 'SiPostman' },
];
