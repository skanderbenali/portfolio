import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered CRM System',
    description: 'A comprehensive customer relationship management system with AI-powered insights, predictive analytics, and intelligent automation for sales teams.',
    image: '/images/projects/crm.jpg',
    technologies: ['React', 'Spring Boot', 'IBM Watson', 'Elasticsearch', 'Docker'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'project-2',
    title: 'E-commerce Microservices',
    description: 'A scalable e-commerce platform built with microservices architecture, featuring real-time inventory, payment processing, and analytics dashboard.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Vue.js', '.NET', 'MongoDB', 'Azure', 'Terraform'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'project-3',
    title: 'DevOps Automation Pipeline',
    description: 'A comprehensive CI/CD pipeline with automated testing, deployment, and monitoring for enterprise applications.',
    image: '/images/projects/devops.jpg',
    technologies: ['GitHub Actions', 'Docker', 'Terraform', 'AWS', 'Python'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'project-4',
    title: 'Healthcare Data Analytics Platform',
    description: 'A HIPAA-compliant healthcare analytics platform for processing and visualizing patient data, clinical outcomes, and treatment effectiveness.',
    image: '/images/projects/healthcare.jpg',
    technologies: ['Angular', 'Symfony', 'PostgreSQL', 'Google Cloud', 'AI/ML'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com',
    featured: true
  },
  {
    id: 'project-5',
    title: 'Smart Home IoT Hub',
    description: 'A central hub for managing smart home devices with a focus on security, privacy, and seamless integration.',
    image: '/images/projects/smarthome.jpg',
    technologies: ['React', 'Java', 'MQTT', 'Docker', 'AWS IoT'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com',
    featured: false
  },
  {
    id: 'project-6',
    title: 'Financial Trading Algorithm',
    description: 'An automated trading system with machine learning models for market prediction and portfolio optimization.',
    image: '/images/projects/finance.jpg',
    technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker', 'AWS'],
    demoUrl: 'https://github.com',
    repoUrl: 'https://github.com',
    featured: false
  }
];
