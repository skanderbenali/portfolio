"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiChevronRight, FiCode, FiBriefcase, FiServer, FiLayout, FiAward } from "react-icons/fi";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import Typewriter from "typewriter-effect";

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
        <div className="absolute inset-0 bg-[url('/portfolio/images/grid-pattern.svg')] opacity-10 z-0"></div>
        
        {/* Subtle tech lines */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute h-px w-full top-1/4 left-0 bg-gradient-to-r from-transparent via-tech-blue/20 to-transparent"></div>
          <div className="absolute h-px w-full top-2/4 left-0 bg-gradient-to-r from-transparent via-tech-cyan/10 to-transparent"></div>
          <div className="absolute h-px w-full top-3/4 left-0 bg-gradient-to-r from-transparent via-tech-purple/15 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-10 lg:space-x-20">
            {/* Animated Code Snippet with tech-inspired effects */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-[600px] mx-auto md:mx-0 h-auto relative"
            >
              {/* Terminal window with code snippet */}
              <div className="bg-black/70 backdrop-blur-md border border-tech-blue/30 rounded-md overflow-hidden shadow-glow-blue">
                {/* Terminal header */}
                <div className="bg-black/80 px-4 py-2 border-b border-tech-blue/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-tech-red hover:bg-tech-red/80 transition-colors duration-300"></div>
                    <div className="h-3 w-3 rounded-full bg-tech-amber hover:bg-tech-amber/80 transition-colors duration-300"></div>
                    <div className="h-3 w-3 rounded-full bg-tech-green hover:bg-tech-green/80 transition-colors duration-300"></div>
                  </div>
                  <div className="font-mono text-xs text-tech-gray flex items-center gap-1.5">
                    <span className="text-tech-purple">~/</span>
                    <span>creative-code.tsx</span>
                  </div>
                  <div className="w-16"></div> {/* Spacer to balance header */}
                </div>
                
                {/* Code content with TypeWriter Effect */}
                <div className="p-6 font-code text-sm md:text-base overflow-hidden relative h-[220px] border-t border-tech-dark/50">
                  <div className="typewriter-container relative">
                    <Typewriter
                      options={{
                        delay: 50, // Slightly slower to feel more human
                        deleteSpeed: 30,
                        cursor: '<span style="font-weight: bold; font-size: 1.25rem; animation: blink 1s infinite; display: inline-block; color: #22d3ee;">_</span>', // Custom cursor with inline animation
                        wrapperClassName: 'typewriter-wrapper'
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          // Random pauses and varying speeds to mimic human typing
                          .changeDelay(60)
                          .typeString('<span class="text-tech-purple">// Your creative code here</span>')
                          .pauseFor(500) // Longer pause after comment
                          .typeString('<br/>')
                          .changeDelay(30) // Faster typing for keywords
                          .typeString('<span class="text-tech-cyan">function</span> ')
                          .changeDelay(70) // Slower for function name
                          .typeString('<span class="text-tech-amber">createMagic</span>')
                          .changeDelay(40)
                          .typeString('<span class="text-white">()</span> <span class="text-white">{</span>')
                          .pauseFor(300)
                          .typeString('<br/>')
                          .changeDelay(40)
                          .typeString('<span class="pl-6 inline-block"></span><span class="text-tech-blue">const</span> ')
                          .typeString('<span class="text-tech-purple">imagination</span> ')
                          .typeString('<span class="text-white">=</span> ')
                          .changeDelay(30)
                          .typeString('<span class="text-tech-blue">new</span> ')
                          .typeString('<span class="text-tech-amber">Inspiration</span>')
                          .typeString('<span class="text-white">();</span>')
                          .pauseFor(200)
                          .typeString('<br/>')
                          .changeDelay(45)
                          .typeString('<span class="pl-6 inline-block"></span><span class="text-tech-blue">return</span> ')
                          .typeString('<span class="text-tech-purple">imagination</span>')
                          .typeString('<span class="text-white">.</span>')
                          .changeDelay(60)
                          .typeString('<span class="text-tech-amber">transform</span>')
                          .changeDelay(30)
                          .typeString('<span class="text-white">(</span>')
                          .typeString('<span class="text-tech-cyan">"idea"</span>')
                          .typeString('<span class="text-white">);</span>')
                          .pauseFor(300)
                          .typeString('<br/>')
                          .changeDelay(80) // Slower for closing bracket
                          .typeString('<span class="text-white">}</span>')
                          .start();
                      }}
                    />
                  </div>
                </div>
                
                {/* Terminal command line at bottom */}
                <div className="border-t border-tech-blue/20 px-4 py-2 bg-black/70 font-mono text-xs flex items-center gap-2">
                  <span className="text-tech-green">$</span>
                  <span className="text-tech-amber">node</span>
                  <span className="text-white">./create-portfolio.js</span>
                  <motion.span 
                    className="text-tech-cyan ml-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                  >
                    [SUCCESS]  
                  </motion.span>
                </div>
              </div>
              
              {/* Tech glow effects behind terminal */}
              <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-tech-blue/10 via-tech-cyan/5 to-tech-purple/10 blur-2xl rounded-lg"></div>
              <div className="absolute -inset-0 -z-10 bg-gradient-to-tr from-tech-purple/10 via-transparent to-tech-blue/10 blur-3xl rounded-lg"></div>
              
              {/* Enhanced background matrix effect */}
              <div className="absolute -inset-10 -z-20 opacity-25 overflow-hidden">
                {/* Animated matrix elements - First layer */}
                <motion.div 
                  className="text-tech-green font-code text-[10px] opacity-70 absolute top-[15%] left-[20%] whitespace-nowrap"
                  animate={{ y: [0, 500], opacity: [0.8, 0] }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: "loop", delay: 0 }}
                >
                  const data = fetch("api/user");
                </motion.div>
                <motion.div 
                  className="text-tech-red font-code text-[10px] opacity-75 absolute top-[35%] left-[10%] whitespace-nowrap"
                  animate={{ y: [0, 600], opacity: [0.85, 0] }}
                  transition={{ duration: 28, repeat: Infinity, repeatType: "loop", delay: 5 }}
                >
                  function processData(input) {'{}'}
                </motion.div>
                <motion.div 
                  className="text-tech-cyan font-code text-[10px] opacity-65 absolute top-[60%] left-[25%] whitespace-nowrap"
                  animate={{ y: [0, 400], opacity: [0.8, 0] }}
                  transition={{ duration: 18, repeat: Infinity, repeatType: "loop", delay: 12 }}
                >
                  if (condition) return true;
                </motion.div>
                <motion.div 
                  className="text-tech-purple font-code text-[10px] opacity-75 absolute top-[75%] left-[15%] whitespace-nowrap"
                  animate={{ y: [0, 300], opacity: [0.9, 0] }}
                  transition={{ duration: 15, repeat: Infinity, repeatType: "loop", delay: 3 }}
                >
                  const array = [1, 2, 3, 4];
                </motion.div>
                
                {/* Animated matrix elements - Second layer */}
                <motion.div 
                  className="text-tech-amber font-code text-[10px] opacity-75 absolute top-[25%] left-[75%] whitespace-nowrap"
                  animate={{ y: [0, 550], opacity: [0.9, 0] }}
                  transition={{ duration: 25, repeat: Infinity, repeatType: "loop", delay: 7 }}
                >
                  export default function() {'{}'}
                </motion.div>
                <motion.div 
                  className="text-tech-blue font-code text-[10px] opacity-75 absolute top-[45%] left-[65%] whitespace-nowrap"
                  animate={{ y: [0, 450], opacity: [0.9, 0] }}
                  transition={{ duration: 22, repeat: Infinity, repeatType: "loop", delay: 10 }}
                >
                  async function loadData() {'{}'}
                </motion.div>
                <motion.div 
                  className="text-tech-green font-code text-[10px] opacity-70 absolute top-[65%] left-[80%] whitespace-nowrap"
                  animate={{ y: [0, 350], opacity: [0.85, 0] }}
                  transition={{ duration: 16, repeat: Infinity, repeatType: "loop", delay: 4 }}
                >
                  const config = {'{'}key: "value"{'}'};
                </motion.div>
                
                {/* Additional animated matrix elements */}
                <motion.div 
                  className="text-tech-green font-code text-[10px] opacity-65 absolute top-[5%] left-[35%] whitespace-nowrap"
                  animate={{ y: [0, 520], opacity: [0.85, 0] }}
                  transition={{ duration: 24, repeat: Infinity, repeatType: "loop", delay: 2 }}
                >
                  // Define user interface
                </motion.div>
                <motion.div 
                  className="text-tech-purple font-code text-[10px] opacity-65 absolute top-[5%] left-[30%] whitespace-nowrap"
                  animate={{ y: [0, 480], opacity: [0.8, 0] }}
                  transition={{ duration: 23, repeat: Infinity, repeatType: "loop", delay: 15 }}
                >
                  // Navigation hook
                </motion.div>
                <motion.div 
                  className="text-tech-red font-code text-[10px] opacity-70 absolute top-[5%] left-[5%] whitespace-nowrap"
                  animate={{ y: [0, 600], opacity: [0.8, 0] }}
                  transition={{ duration: 28, repeat: Infinity, repeatType: "loop", delay: 8 }}
                >
                  // Run side effect on mount
                </motion.div>
                <motion.div 
                  className="text-tech-blue font-code text-[10px] opacity-65 absolute top-[5%] left-[55%] whitespace-nowrap"
                  animate={{ y: [0, 450], opacity: [0.8, 0] }}
                  transition={{ duration: 21, repeat: Infinity, repeatType: "loop", delay: 6 }}
                >
                  // Component decorator
                </motion.div>
                <motion.div 
                  className="text-tech-gray font-code text-[10px] opacity-70 absolute top-[5%] left-[20%] whitespace-nowrap"
                  animate={{ y: [0, 520], opacity: [0.85, 0] }}
                  transition={{ duration: 25, repeat: Infinity, repeatType: "loop", delay: 11 }}
                >
                  // Cache expensive calculation
                </motion.div>
                <motion.div 
                  className="text-tech-purple font-code text-[10px] opacity-75 absolute top-[5%] left-[42%] whitespace-nowrap"
                  animate={{ y: [0, 580], opacity: [0.9, 0] }}
                  transition={{ duration: 27, repeat: Infinity, repeatType: "loop", delay: 9 }}
                >
                  console.log("Rendering component");
                </motion.div>
                <motion.div 
                  className="text-tech-green font-code text-[10px] opacity-70 absolute top-[5%] left-[68%] whitespace-nowrap"
                  animate={{ y: [0, 400], opacity: [0.85, 0] }}
                  transition={{ duration: 19, repeat: Infinity, repeatType: "loop", delay: 13 }}
                >
                  // Export component props type
                </motion.div>
                <motion.div 
                  className="text-tech-red font-code text-[10px] opacity-70 absolute top-[5%] left-[80%] whitespace-nowrap"
                  animate={{ y: [0, 550], opacity: [0.9, 0] }}
                  transition={{ duration: 26, repeat: Infinity, repeatType: "loop", delay: 7.5 }}
                >
                  // Animation wrapper component
                </motion.div>
                
                {/* Animated elements - Rain effect */}
                <motion.div 
                  className="absolute top-[5%] left-[50%] text-tech-red font-code text-[10px] whitespace-nowrap"
                  animate={{ y: [0, 600], opacity: [0.9, 0] }}
                  transition={{ duration: 30, repeat: Infinity, repeatType: "loop", delay: 0 }}
                >
                  import React from "react";
                </motion.div>
                <motion.div 
                  className="absolute top-[5%] left-[40%] text-tech-blue font-code text-[10px] whitespace-nowrap"
                  animate={{ y: [0, 550], opacity: [0.9, 0] }}
                  transition={{ duration: 26, repeat: Infinity, repeatType: "loop", delay: 2 }}
                >
                  const state = useState(null);
                </motion.div>
                <motion.div 
                  className="absolute top-[5%] left-[65%] text-tech-cyan font-code text-[10px] whitespace-nowrap"
                  animate={{ y: [0, 500], opacity: [0.85, 0] }}
                  transition={{ duration: 24, repeat: Infinity, repeatType: "loop", delay: 4 }}
                >
                  import {'{}'} motion {'}'} from "framer-motion";
                </motion.div>
                <motion.div 
                  className="absolute top-[5%] left-[10%] text-tech-amber font-code text-[10px] whitespace-nowrap"
                  animate={{ y: [0, 580], opacity: [0.9, 0] }}
                  transition={{ duration: 28, repeat: Infinity, repeatType: "loop", delay: 1 }}
                >
                  // Handle form submit event
                </motion.div>
                <motion.div 
                  className="absolute top-[5%] left-[30%] text-tech-purple font-code text-[10px] whitespace-nowrap"
                  animate={{ y: [0, 520], opacity: [0.8, 0] }}
                  transition={{ duration: 25, repeat: Infinity, repeatType: "loop", delay: 6 }}
                >
                  const [loading, setLoading] = useState(false);
                </motion.div>
                <motion.div 
                  className="absolute top-[5%] left-[75%] text-tech-gray font-code text-[10px] whitespace-nowrap"
                  animate={{ y: [0, 540], opacity: [0.85, 0] }}
                  transition={{ duration: 27, repeat: Infinity, repeatType: "loop", delay: 8 }}
                >
                  // Return JSX element
                </motion.div>
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
                  Full Stack Software Engineer <span className="text-tech-cyan">/</span> Data Scientist
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
                  With over 5 years of experience in full-stack development, I specialize in building efficient web applications and data-driven solutions. My focus is on creating clean, maintainable code that solves real business challenges.
                </p>
                <p className="text-tech-gray mb-6 border-l-2 border-tech-cyan pl-4">
                  Combining software engineering with data science skills, I've designed real-time analytics dashboards and implemented data processing pipelines that transform complex information into actionable insights.
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
              <h3 className="text-xl font-mono text-tech-cyan mb-6 pb-2 border-b border-tech-cyan/30">TECH_STACK<span className="animate-pulse">_</span></h3>
              <div className="space-y-4">
                {['React / Next.js', 'Node.js', 'Python', 'TensorFlow', 'AWS', 'TypeScript'].map((skill, index) => (
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
                    <div className="absolute inset-0 bg-[url('/portfolio/images/grid-pattern.svg')] opacity-10"></div>
                    
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
        <div className="absolute inset-0 bg-[url('/portfolio/images/grid-pattern.svg')] opacity-5"></div>
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
