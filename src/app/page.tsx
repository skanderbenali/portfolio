"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiChevronRight, FiCode, FiBriefcase, FiServer, FiLayout, FiAward } from "react-icons/fi";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-blue-950 to-indigo-900 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 z-0"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/portfolio/images/grid-pattern.svg')] opacity-10 z-0"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-400/10 dark:bg-blue-300/10 rounded-full blur-sm"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 1.2, 1],
                opacity: [0, 0.4, 0.3, 0] 
              }}
              transition={{ 
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-10 lg:space-x-20">
            {/* Profile Image with subtle glow effect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-72 h-72 md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] relative"
            >
              <div className="absolute inset-0 -left-3 -top-3 bg-blue-500/20 blur-2xl rounded-full z-0"></div>
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/portfolio/images/skander-benali.png"
                  alt="Skander Benali"
                  width={600}
                  height={700}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center md:text-left md:max-w-xl lg:max-w-2xl"
            >
              <div className="inline-block mb-3">
                <div className="flex items-center gap-2 text-sm font-medium text-blue-400 mb-2 tracking-wider">
                  <span className="h-px w-6 bg-blue-400"></span>
                  <span>WELCOME TO MY PORTFOLIO</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                Skander <span className="text-blue-400">Benali</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-5">
                CTO <span className="text-blue-400">&</span> Full-Stack Developer with 5+ years of experience
              </h2>
              
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg inline-flex items-center gap-3 mb-8 border border-white/10">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                <p className="text-gray-200 font-medium">
                  CTO • Full-Stack Dev • AI Enthusiast
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:translate-y-[-2px]"
                >
                  Let's Build Something!
                </Link>
                <Link 
                  href="/projects"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/10 hover:border-white/30 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:translate-y-[-2px]"
                >
                  View My Work <FiChevronRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 w-full px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As the CTO & Co-founder of Infotexa, I bring over 5 years of experience in web development and technical leadership.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                My mission is to build scalable, innovative solutions that solve real-world problems. I'm passionate about clean code, emerging technologies, and fostering collaborative development environments.
              </p>
              <Link 
                href="/about"
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                Learn more about me <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">My Soft Skills</h3>
              <div className="space-y-3">
                {['Leadership', 'Team Collaboration', 'Innovation', 'Problem Solving', 'Communication'].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 w-full bg-gray-50 dark:bg-gray-900 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What I Do</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in delivering end-to-end solutions across various domains of software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              // Map service icons to React icons
              const IconComponent = {
                'code': FiCode,
                'brain': FiServer,
                'cloud': FiBriefcase,
                'design': FiLayout
              }[service.icon] || FiCode;
              
              return (
                <motion.div 
                  key={service.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-500 dark:text-blue-400 mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 w-full px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link 
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              View all projects <FiChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video relative bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    {/* Placeholder for project image */}
                    <span className="text-sm">Project Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl}
                        className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 w-full bg-gray-50 dark:bg-gray-900 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Technical Skills</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              I've developed expertise in a wide range of technologies, frameworks, and tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Featured Skills Preview */}
            {["JavaScript", "React", "Spring Boot", "Docker", "AWS", "UI/UX Design"].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center gap-3"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-lg">
                  <FiCode className="h-5 w-5" />
                </div>
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/skills"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Preview Section */}
      <section className="py-20 w-full px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Certifications</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              I hold several industry certifications that validate my expertise in cloud technologies and software architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Featured Certifications Preview */}
            {[
              { name: "Microsoft Certified: Azure Solutions Architect Expert", issuer: "Microsoft" },
              { name: "Google Cloud Professional Cloud Architect", issuer: "Google Cloud" },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
              >
                <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <FiAward className="h-8 w-8 mx-auto mb-1" />
                    <h3 className="text-lg font-medium">{cert.issuer}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2">{cert.name}</h3>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-sm flex items-center justify-center p-10"
            >
              <Link
                href="/certifications"
                className="flex flex-col items-center text-blue-600 dark:text-blue-400 hover:underline gap-2"
              >
                <span className="text-4xl">+</span>
                <span>View All Certifications</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 w-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Have a project in mind? Let's discuss how my expertise can help bring your ideas to life.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors duration-300 inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
