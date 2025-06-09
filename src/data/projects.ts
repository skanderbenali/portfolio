import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Multi-Store Inventory Dashboard',
    description: 'A comprehensive solution for managing product inventory across multiple e-commerce platforms like Shopify, Etsy, and Amazon with real-time synchronization, stock alerts, and a unified dashboard.',
    image: '/images/projects/multi-store-inventory-dashboard.png',
    technologies: ['Laravel', 'React', 'Inertia.js', 'TailwindCSS', 'Pusher'],
    demoUrl: 'https://drive.google.com/file/d/1bz8FzWXPDfmrr_81HKOwNslRxOE6eMdJ/view?usp=drive_link',
    repoUrl: 'https://github.com/skanderbenali/Multi-Store-Inventory-Dashboard',
    featured: true
  },
  {
    id: 'project-2',
    title: 'AI-Powered Lead Generation Tool',
    description: 'A full-stack SaaS application for AI-driven lead generation, enrichment, and automated outreach. Find, score, enrich, and engage with high-quality leads using machine learning and automation.',
    image: '/images/projects/leadgen-ai.jpeg',
    technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'OpenAI GPT', 'Docker'],
    demoUrl: undefined,
    repoUrl: 'https://github.com/skanderbenali/AI-powered-lead-generation-tool',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Elasticsearch PostgreSQL Data Indexer',
    description: 'A Node.js application that synchronizes data between PostgreSQL databases and Elasticsearch, enabling efficient search capabilities while maintaining data consistency across systems.',
    image: undefined,
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Elasticsearch', 'Express.js'],
    demoUrl: 'https://drive.google.com/file/d/1DvTZRS5QS4Nn5FHAOuEZEKraxW9KkckV/view?usp=drive_link',
    repoUrl: 'https://github.com/skanderbenali/elasticsearch-postgresql-data-indexer',
    featured: true
  }
];
