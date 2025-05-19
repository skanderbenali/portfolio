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
        {/* Tech-focused dark background */}
        <div className="absolute inset-0 bg-tech-dark z-0"></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-tech-dark to-black/70 z-0"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 z-0"></div>
        
        {/* Subtle tech lines */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute h-px w-full top-1/4 left-0 bg-gradient-to-r from-transparent via-tech-blue/20 to-transparent"></div>
          <div className="absolute h-px w-full top-2/4 left-0 bg-gradient-to-r from-transparent via-tech-cyan/10 to-transparent"></div>
          <div className="absolute h-px w-full top-3/4 left-0 bg-gradient-to-r from-transparent via-tech-purple/15 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-10 lg:space-x-20">
            {/* Profile Image with tech-inspired glow effect */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-72 h-72 md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] relative"
            >
              {/* Multi-layered glow effect for tech vibe */}
              <div className="absolute inset-0 -left-3 -top-3 bg-tech-blue/10 blur-2xl rounded-full z-0"></div>
              <div className="absolute inset-0 -right-3 -bottom-1 bg-tech-cyan/5 blur-3xl rounded-full z-0"></div>
              <div className="absolute inset-0 -left-1 -top-1 bg-tech-purple/5 blur-xl rounded-full z-0"></div>
              
              {/* Scanline effect - subtle tech vibe */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-blue/5 to-transparent opacity-20 z-0" style={{ backgroundSize: '100% 8px', backgroundRepeat: 'repeat' }}></div>
              
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
                <div className="flex items-center gap-2 text-sm font-medium text-tech-blue mb-2 tracking-wider">
                  <span className="h-px w-10 bg-tech-blue"></span>
                  <span className="font-mono">WELCOME TO MY PORTFOLIO</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
                Skander <span className="text-tech-amber">Benali</span>
              </h1>
              
              <div className="relative inline-block">
                <h2 className="text-xl md:text-2xl text-tech-gray font-light mb-1">
                  CTO <span className="text-tech-cyan">&</span> Full-Stack Developer
                </h2>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-tech-purple/50 to-transparent mb-5"></div>
              </div>
              
              <h3 className="font-mono text-tech-cyan/80 text-sm mb-5">
                <span className="inline-block px-2 py-1 bg-tech-dark/80 rounded border border-tech-cyan/20 shadow-glow-cyan">5+ years experience</span>
              </h3>
              
              {/* Tech-inspired availability status */}
              <div className="bg-tech-dark/80 backdrop-blur-sm px-4 py-3 rounded-lg inline-flex items-center gap-3 mb-8 border border-tech-blue/20 shadow-glow-blue">
                <span className="inline-block h-2 w-2 rounded-full bg-tech-cyan animate-pulse"></span>
                <span className="text-sm text-tech-gray font-mono">Available for new projects</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-tech-amber hover:bg-tech-amber/90 text-tech-dark px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-glow-amber border border-tech-amber/20"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/projects"
                  className="bg-transparent hover:bg-tech-blue/10 text-tech-blue border border-tech-blue/30 px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-glow-blue"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-20 w-full px-4 bg-tech-dark/80">
        <div className="container mx-auto">
          {/* Section header with tech-inspired styling */}
          <div className="mb-12 flex items-center">
            <span className="h-px w-8 bg-tech-cyan mr-4"></span>
            <h2 className="text-2xl font-bold text-white font-mono">ABOUT<span className="text-tech-cyan">_</span>ME</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative mb-6 inline-block">
                <p className="text-tech-gray mb-4 border-l-2 border-tech-purple pl-4">
                  As the CTO & Co-founder of Infotexa, I bring over 5 years of experience in web development and technical leadership.
                </p>
                <p className="text-tech-gray mb-6 border-l-2 border-tech-cyan pl-4">
                  My mission is to build scalable, innovative solutions that solve real-world problems. I'm passionate about clean code, emerging technologies, and fostering collaborative development environments.
                </p>
              </div>
              
              <Link 
                href="/about"
                className="text-tech-amber hover:text-tech-amber/90 hover:underline flex items-center gap-1 font-mono"
              >
                <span className="text-tech-blue">{">"}  Learn more about me</span> <FiChevronRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="md:w-1/2 bg-tech-dark p-8 rounded-md border border-tech-blue/20 shadow-glow-blue">
              <h3 className="text-xl font-mono text-tech-cyan mb-6 pb-2 border-b border-tech-cyan/30">CORE_SKILLS<span className="animate-pulse">_</span></h3>
              <div className="space-y-4">
                {['Leadership', 'Team Collaboration', 'Innovation', 'Problem Solving', 'Communication'].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-tech-purple"></div>
                    <span className="text-tech-gray font-light">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section - Tech Theme */}
      <section className="py-20 w-full bg-gradient-to-b from-tech-dark to-black px-4">
        <div className="container mx-auto">
          {/* Terminal-inspired section header */}
          <div className="mb-16 flex flex-col items-center">
            <div className="w-full max-w-3xl bg-black/50 rounded-t-md p-2 border-t border-x border-tech-blue/30 flex items-center mb-0">
              <div className="flex gap-1.5 mr-3">
                <div className="h-3 w-3 rounded-full bg-red-500/70"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500/70"></div>
                <div className="h-3 w-3 rounded-full bg-green-500/70"></div>
              </div>
              <div className="text-tech-gray text-xs font-mono">~ services.sh</div>
            </div>
            <div className="w-full max-w-3xl bg-tech-dark/90 backdrop-blur-sm p-6 border-b border-x border-tech-blue/30 rounded-b-md">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-4 w-1 bg-tech-cyan animate-pulse"></div>
                <h2 className="text-2xl font-mono text-white font-bold tracking-wide">SERVICES<span className="text-tech-cyan">_</span></h2>
              </div>
              <p className="text-tech-gray font-mono text-sm pl-6 border-l border-tech-purple/50">
                <span className="text-tech-amber">$</span> I specialize in delivering end-to-end solutions across various domains of software development.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              // Map service icons to React icons
              const IconComponent = {
                'code': FiCode,
                'brain': FiServer,
                'cloud': FiBriefcase,
                'design': FiLayout
              }[service.icon] || FiCode;
              
              // Alternate glow colors for tech aesthetic
              const glowColors = [
                'shadow-glow-blue',
                'shadow-glow-cyan',  
                'shadow-glow-purple',
                'shadow-glow-amber'
              ];
              
              return (
                <motion.div 
                  key={service.id}
                  className={`bg-tech-dark p-6 rounded-md border border-tech-blue/20 ${glowColors[index % 4]} backdrop-blur-sm hover:bg-tech-dark/70 transition-all duration-300`}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`${index % 4 === 0 ? 'text-tech-blue' : index % 4 === 1 ? 'text-tech-cyan' : index % 4 === 2 ? 'text-tech-purple' : 'text-tech-amber'} mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-mono font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-tech-gray text-sm">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Tech Theme */}
      <section className="py-20 w-full px-4 bg-tech-dark">
        <div className="container mx-auto">
          {/* Terminal-style header with tech accent */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="h-5 w-1 bg-tech-amber animate-pulse"></div>
              <h2 className="text-2xl font-mono text-white font-bold tracking-wide">PROJECTS<span className="text-tech-amber">_</span></h2>
            </div>
            <Link 
              href="/projects"
              className="text-tech-blue hover:text-tech-cyan transition-colors flex items-center gap-1 font-mono text-sm border border-tech-blue/30 px-3 py-2 rounded-sm hover:bg-tech-blue/5"
            >
              <span>cd ./all-projects</span> <FiChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              // Alternate glow colors for tech aesthetic
              const glowColors = [
                'shadow-glow-blue',
                'shadow-glow-cyan',  
                'shadow-glow-purple'
              ];
              
              const techColors = [
                'border-tech-blue/40 bg-tech-blue/5',
                'border-tech-cyan/40 bg-tech-cyan/5',
                'border-tech-purple/40 bg-tech-purple/5'
              ];
              
              return (
                <motion.div 
                  key={project.id}
                  className={`bg-black/60 backdrop-blur-sm rounded-md overflow-hidden border border-tech-blue/20 ${glowColors[index % 3]} transition-all duration-300`}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="aspect-video relative bg-tech-dark/80 border-b border-tech-blue/10 overflow-hidden">
                    {/* Tech-style overlay with grid pattern */}
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
                    
                    {/* Project type badge */}
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-sm border border-tech-cyan/30 z-10">
                      <span className="text-xs font-mono text-tech-cyan">Web App</span>
                    </div>
                    
                    {/* Placeholder for project image with tech style */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="h-16 w-16 rounded-full border-2 border-dashed border-tech-amber/50 flex items-center justify-center animate-pulse">
                        <span className="text-tech-amber font-mono text-xs">{'>_'}</span>
                      </div>
                      <span className="text-xs text-tech-gray mt-2 font-mono">Project Preview</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-mono text-white mb-2">{project.title}</h3>
                    <p className="text-tech-gray text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`text-xs ${techColors[techIndex % 3]} px-2 py-1 rounded-sm border font-mono`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-tech-dark border border-tech-gray/30 text-tech-gray px-2 py-1 rounded-sm font-mono">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-4">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          className="text-sm text-tech-amber hover:text-tech-amber/80 font-mono flex items-center gap-1 group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="h-px w-3 bg-tech-amber group-hover:w-5 transition-all"></span> Demo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a 
                          href={project.repoUrl}
                          className="text-sm text-tech-blue hover:text-tech-cyan font-mono flex items-center gap-1 group"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="h-px w-3 bg-tech-blue group-hover:w-5 transition-all"></span> Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Preview Section - Tech Theme */}
      <section className="py-20 w-full bg-gradient-to-b from-black to-tech-dark px-4">
        <div className="container mx-auto">
          {/* Code-inspired header */}
          <div className="flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-2 font-mono text-tech-blue bg-tech-dark/80 border border-tech-blue/20 rounded-md px-4 py-2 mb-6">
              <span className="text-tech-purple">const</span> <span className="text-white">skills</span> <span className="text-tech-purple">=</span> <span className="text-tech-cyan">[...]</span>
            </div>
            <h2 className="text-2xl font-mono text-white font-bold mb-2">TECHNICAL<span className="text-tech-cyan">_</span>SKILLS</h2>
            <p className="text-tech-gray max-w-2xl text-center font-light mb-4">
              <span className="font-mono text-tech-cyan">// </span>
              I've developed expertise across multiple stacks and technologies
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-tech-purple/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
            {/* Featured Skills Preview - Tech cards */}
            {["JavaScript", "React", "Spring Boot", "Docker", "AWS", "UI/UX Design"].map((skill, index) => {
              const colors = [
                { bg: 'bg-tech-blue/10', border: 'border-tech-blue/30', text: 'text-tech-blue', glow: 'shadow-glow-blue' },
                { bg: 'bg-tech-cyan/10', border: 'border-tech-cyan/30', text: 'text-tech-cyan', glow: 'shadow-glow-cyan' },
                { bg: 'bg-tech-purple/10', border: 'border-tech-purple/30', text: 'text-tech-purple', glow: 'shadow-glow-purple' },
                { bg: 'bg-tech-amber/10', border: 'border-tech-amber/30', text: 'text-tech-amber', glow: 'shadow-glow-amber' },
              ];
              
              const colorSet = colors[index % colors.length];
              
              return (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`${colorSet.bg} backdrop-blur-sm p-4 rounded-md border ${colorSet.border} hover:${colorSet.glow} transition-all duration-300 flex flex-col items-center gap-3 text-center hover:-translate-y-1`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`${colorSet.text} p-2`}>
                    <FiCode className="h-5 w-5" />
                  </div>
                  <span className={`font-mono text-sm ${colorSet.text}`}>{skill}</span>
                </motion.div>
              );
            })}
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/skills"
              className="bg-tech-dark hover:bg-tech-dark/80 border border-tech-cyan/20 text-tech-cyan hover:text-tech-cyan/90 px-6 py-3 rounded-md font-mono text-sm transition-all duration-300 hover:shadow-glow-cyan flex items-center gap-2 group"
            >
              <span className="h-px w-4 bg-tech-cyan group-hover:w-6 transition-all"></span>
              Explore All Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Preview Section - Tech Theme */}
      <section className="py-20 w-full px-4 bg-tech-dark">
        <div className="container mx-auto">
          {/* Data-inspired header for certifications */}
          <div className="mb-16 flex flex-col items-center">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-full border-2 border-tech-amber flex items-center justify-center">
                <FiAward className="h-6 w-6 text-tech-amber" />
              </div>
            </div>
            <h2 className="text-2xl font-mono text-white font-bold mb-2 tracking-tight">CERTIFICATIONS<span className="text-tech-amber animate-pulse">_</span></h2>
            <p className="text-tech-gray max-w-xl text-center font-light mb-6">
              Industry-recognized credentials validating my expertise in cloud and software architecture
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-tech-amber/40 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Featured Certifications with tech-inspired design */}
            {[
              { name: "Microsoft Certified: Azure Solutions Architect Expert", issuer: "Microsoft", color: "tech-blue" },
              { name: "Google Cloud Professional Cloud Architect", issuer: "Google Cloud", color: "tech-cyan" },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-black/70 backdrop-blur-sm rounded-md overflow-hidden border border-${cert.color}/20 shadow-glow-${cert.color === 'tech-blue' ? 'blue' : 'cyan'}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`py-6 border-b border-${cert.color}/20 flex flex-col items-center justify-center`}>
                  <div className={`text-${cert.color} text-center`}>
                    <div className={`inline-flex items-center justify-center h-12 w-12 rounded-full bg-${cert.color}/10 mb-2`}>
                      <FiAward className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-mono text-white">{cert.issuer}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-2">
                    <div className={`flex-shrink-0 w-1 h-full bg-${cert.color}/50 self-stretch`}></div>
                    <h3 className="font-mono text-sm text-tech-gray">{cert.name}</h3>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <span className={`text-xs text-${cert.color} font-mono border-t border-${cert.color}/30 pt-1 inline-block`}>Validated</span>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/40 backdrop-blur-sm border border-dashed border-tech-gray/20 rounded-md overflow-hidden flex items-center justify-center p-10"
              whileHover={{ scale: 1.02 }}
            >
              <Link
                href="/certifications"
                className="flex flex-col items-center text-tech-gray hover:text-tech-amber transition-colors gap-3 group"
              >
                <div className="h-12 w-12 rounded-full border border-tech-gray/30 group-hover:border-tech-amber/50 flex items-center justify-center transition-colors">
                  <span className="text-2xl group-hover:scale-125 transition-transform">+</span>
                </div>
                <span className="font-mono text-sm">View All Certifications</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action - Tech Theme */}
      <section className="py-24 w-full bg-black px-4 relative overflow-hidden">
        {/* Tech grid background with overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-tech-dark via-transparent to-transparent"></div>
        
        {/* Animated tech elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-tech-blue/20 to-transparent"></div>
          <div className="absolute top-2/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-tech-purple/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-8 bg-black/60 backdrop-blur-md border border-tech-amber/20 rounded-md px-8 py-6 shadow-glow-amber">
            <h2 className="text-3xl font-mono font-bold text-white mb-4">Let's Build <span className="text-tech-amber">_</span>Together</h2>
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-tech-amber/50 to-transparent mb-4"></div>
            <p className="text-tech-gray max-w-2xl mx-auto mb-8 font-light">
              Have a project in mind? Let's collaborate and turn your vision into reality with cutting-edge technology solutions.
            </p>
            <Link 
              href="/contact"
              className="bg-tech-amber text-tech-dark hover:bg-tech-amber/90 px-8 py-3 rounded-md font-mono font-medium transition-all duration-300 inline-flex items-center gap-2 hover:gap-3 border border-tech-amber/50 shadow-glow-amber"
            >
              <span className="text-sm">INIT_CONTACT</span>
              <FiChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          {/* Terminal-style signature */}
          <div className="font-mono text-tech-gray/60 text-xs mt-8">
            <span className="text-tech-blue">~ $</span> Powered by modern tech stack &amp; clean code philosophy
          </div>
        </div>
      </section>
    </div>
  );
}
