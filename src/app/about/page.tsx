"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload, FiChevronRight, FiCode, FiServer, FiGithub, FiAward, FiTerminal } from "react-icons/fi";

// Prevent hydration errors
export const dynamic = 'force-dynamic';

export default function About() {
  return (
    <div className="min-h-screen bg-tech-dark px-4 py-16 md:py-24">
      {/* Tech-inspired header */}
      <div className="container mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 font-mono text-tech-cyan mb-4 bg-black/40 px-4 py-2 rounded-md border border-tech-cyan/20">
            <span className="text-tech-blue">function</span> <span className="text-white">About</span><span className="text-tech-purple">()</span> <span className="text-tech-blue">{"{}"}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-mono mb-2">ABOUT<span className="text-tech-cyan">_</span>ME</h1>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-tech-purple/50 to-transparent mb-8"></div>
        </motion.div>
      </div>
      
      <div className="container mx-auto max-w-5xl">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              {/* Tech-style title with glow effect */}
              <div className="mb-8">
                <h2 className="text-white font-mono text-xl mb-2">
                  <span className="bg-black/40 py-1 px-2 border-l-2 border-tech-amber">Skander Benali</span> <span className="text-tech-blue">|</span> <span className="text-tech-cyan">CTO & Co-founder</span>
                </h2>
                <div className="flex items-center gap-2 ml-4 text-tech-gray text-sm">
                  <span className="inline-block h-1 w-1 rounded-full bg-tech-amber"></span>
                  <span className="font-mono">Infotexa Technologies</span>
                </div>
              </div>
              
              {/* Terminal-style sections for bio */}
              <div className="bg-black/40 backdrop-blur-sm rounded-md border border-tech-blue/20 p-6 mb-8 relative">
                <div className="absolute top-0 left-0 right-0 h-6 bg-black/60 border-b border-tech-blue/20 flex items-center px-3">
                  <div className="flex gap-1.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-red-500/70"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500/70"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="text-tech-gray text-xs font-mono">~ bio.md</div>
                </div>
                
                <div className="mt-4">
                  <p className="text-tech-gray mb-4 font-light border-l border-tech-purple/30 pl-4">
                    With over 5 years of experience in web development, I've built a strong foundation in creating scalable, maintainable, and high-performance applications. As the CTO of Infotexa, I lead our technical strategy and empower our development team to deliver exceptional solutions.
                  </p>
                  <p className="text-tech-gray mb-4 font-light border-l border-tech-blue/30 pl-4">
                    My journey began with a passion for solving complex problems through elegant solutions. Today, I combine my technical expertise with leadership skills to build innovative products that make a difference.
                  </p>
                  <p className="text-tech-gray mb-4 font-light border-l border-tech-cyan/30 pl-4">
                    I'm deeply committed to staying at the forefront of technology, regularly experimenting with new tools and frameworks to find better ways to solve challenges.
                  </p>
                </div>
              </div>

              {/* Mission statement - data card style */}
              <div className="mb-8 bg-black/40 backdrop-blur-sm rounded-md border border-tech-amber/20 overflow-hidden">
                <div className="border-b border-tech-amber/30 px-4 py-2 flex items-center gap-2">
                  <FiCode className="text-tech-amber" />
                  <h3 className="text-tech-amber font-mono text-sm">MISSION_STATEMENT</h3>
                </div>
                <div className="p-5">
                  <p className="text-tech-gray italic font-light">
                    "To create impactful technology solutions that solve real-world problems while fostering a culture of innovation, collaboration, and continuous improvement."
                  </p>
                </div>
              </div>

              {/* Download button with tech styling */}
              <div className="mb-8">
                <button className="flex items-center gap-2 bg-black/60 hover:bg-black text-tech-amber border border-tech-amber/30 hover:border-tech-amber/50 px-6 py-3 rounded-md font-mono text-sm transition-all duration-300 hover:shadow-glow-amber group">
                  <FiDownload className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>download_resume.pdf</span>
                </button>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/40 backdrop-blur-sm rounded-md border border-tech-blue/20 overflow-hidden shadow-glow-blue"
            >
              {/* Tech-inspired data card header */}
              <div className="border-b border-tech-blue/30 px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FiServer className="text-tech-blue" />
                  <h3 className="text-tech-blue font-mono text-sm">PROFILE_DATA</h3>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-tech-amber/70"></div>
                  <div className="h-2 w-2 rounded-full bg-tech-cyan/70"></div>
                </div>
              </div>
              
              {/* Profile image with tech-style container */}
              <div className="p-6">
                <div className="aspect-square rounded-md mb-6 overflow-hidden border border-tech-blue/30 relative">
                  {/* Scan line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-blue/5 to-transparent opacity-20 z-10" style={{ backgroundSize: '100% 8px', backgroundRepeat: 'repeat' }}></div>
                  
                  {/* Profile image */}
                  <Image
                    src="/portfolio/images/skander.jpg"
                    alt="Skander Benali"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

                {/* Profile details with tech styling */}
                <div className="space-y-4">
                  <div className="bg-tech-dark/60 rounded-sm p-3 border-l-2 border-tech-cyan">
                    <h4 className="text-xs font-mono text-tech-cyan mb-1">
                      LOCATION_
                    </h4>
                    <p className="text-tech-gray font-light">Tunis, Tunisia</p>
                  </div>
                  
                  <div className="bg-tech-dark/60 rounded-sm p-3 border-l-2 border-tech-purple">
                    <h4 className="text-xs font-mono text-tech-purple mb-1">
                      CONTACT_
                    </h4>
                    <p className="text-tech-gray font-light">contact@skanderbenali.com</p>
                  </div>
                  
                  <div className="bg-tech-dark/60 rounded-sm p-3 border-l-2 border-tech-amber">
                    <h4 className="text-xs font-mono text-tech-amber mb-1">
                      LANGUAGES_
                    </h4>
                    <div className="flex flex-wrap gap-2 text-tech-gray font-light">
                      <span className="font-mono">English</span>
                      <span className="text-tech-blue">•</span>
                      <span className="font-mono">French</span>
                      <span className="text-tech-blue">•</span>
                      <span className="font-mono">Arabic</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-5 w-1 bg-tech-purple animate-pulse"></div>
            <h2 className="text-2xl font-mono text-white">LEADERSHIP<span className="text-tech-purple">_</span>SKILLS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/40 backdrop-blur-sm rounded-md border border-tech-blue/20 p-6 hover:shadow-glow-blue transition-all duration-300">
              <h3 className="text-tech-blue font-mono text-lg mb-4">Team Leadership</h3>
              <p className="text-tech-gray font-light">
                I excel at building and leading high-performing development teams, fostering a culture of collaboration, mentorship, and continuous improvement. My leadership approach emphasizes clear communication, knowledge sharing, and empowering team members to do their best work.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-md border border-tech-cyan/20 p-6 hover:shadow-glow-cyan transition-all duration-300">
              <h3 className="text-tech-cyan font-mono text-lg mb-4">Communication</h3>
              <p className="text-tech-gray font-light">
                With experience bridging the gap between technical and non-technical stakeholders, I'm skilled at translating complex concepts into clear, actionable insights. This enables effective collaboration across teams and ensures everyone is aligned toward common goals.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-md border border-tech-purple/20 p-6 hover:shadow-glow-purple transition-all duration-300">
              <h3 className="text-tech-purple font-mono text-lg mb-4">Problem Solving</h3>
              <p className="text-tech-gray font-light">
                I approach challenges with a strategic mindset, breaking down complex problems into manageable components and developing innovative solutions. My analytical thinking combined with technical expertise allows me to resolve issues efficiently and effectively.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-md border border-tech-amber/20 p-6 hover:shadow-glow-amber transition-all duration-300">
              <h3 className="text-tech-amber font-mono text-lg mb-4">Innovation</h3>
              <p className="text-tech-gray font-light">
                Constantly exploring new technologies and methodologies, I drive innovation by identifying opportunities for improvement and implementing forward-thinking solutions. I encourage experimentation and creative thinking within my team.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Terminal-inspired header for experience section */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-5 w-1 bg-tech-amber animate-pulse"></div>
            <h2 className="text-2xl font-mono text-white">EXPERIENCE<span className="text-tech-amber">_</span>LOG</h2>
          </div>
          
          <div className="space-y-8 mb-16">
            {/* Tech-inspired job card */}
            <div className="bg-black/60 backdrop-blur-sm rounded-md border border-tech-amber/20 overflow-hidden hover:shadow-glow-amber transition-all duration-300">
              {/* Terminal-like header */}
              <div className="border-b border-tech-amber/30 px-4 py-2 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <FiServer className="text-tech-amber" />
                  <h3 className="font-mono text-tech-amber">CTO & Co-founder</h3>
                </div>
                <span className="text-xs font-mono bg-tech-dark text-tech-amber px-3 py-1 rounded-sm border border-tech-amber/30">
                  2024 - Present
                </span>
              </div>
              
              <div className="p-6">
                <h4 className="text-white font-mono mb-3 text-lg">Infotexa<span className="text-tech-blue">_</span>Technologies</h4>
                <p className="text-tech-gray font-light mb-5 border-l-2 border-tech-amber/30 pl-4">
                  Leading the technical vision and strategy for Infotexa, overseeing software architecture, development operations, and technology infrastructure. Building and managing a talented engineering team while ensuring product reliability, security, and performance.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-tech-amber/10 border border-tech-amber/30 text-tech-amber px-2 py-1 rounded-sm font-mono">
                    Team Leadership
                  </span>
                  <span className="text-xs bg-tech-amber/10 border border-tech-amber/30 text-tech-amber px-2 py-1 rounded-sm font-mono">
                    Software Architecture
                  </span>
                  <span className="text-xs bg-tech-amber/10 border border-tech-amber/30 text-tech-amber px-2 py-1 rounded-sm font-mono">
                    Technical Strategy
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/60 backdrop-blur-sm rounded-md border border-tech-blue/20 overflow-hidden hover:shadow-glow-blue transition-all duration-300">
              {/* Terminal-like header */}
              <div className="border-b border-tech-blue/30 px-4 py-2 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <FiCode className="text-tech-blue" />
                  <h3 className="font-mono text-tech-blue">Software Engineer</h3>
                </div>
                <span className="text-xs font-mono bg-tech-dark text-tech-blue px-3 py-1 rounded-sm border border-tech-blue/30">
                  Sep 2023 - Jun 2024
                </span>
              </div>
              
              <div className="p-6">
                <h4 className="text-white font-mono mb-3 text-lg">DGtal<span className="text-tech-cyan">_</span>France</h4>
                <p className="text-tech-gray font-light mb-5 border-l-2 border-tech-blue/30 pl-4">
                  Architected and implemented a comprehensive Geolocation Information System utilizing a modern tech stack. Developed scalable backend services with Node.js, Express, and TypeScript while creating responsive frontends with Nuxt.js and Angular. Implemented real-time data processing with the ELK Stack and optimized system performance using Redis caching and RabbitMQ for message queuing. Established a containerized microservices architecture with Docker for efficient deployment and scaling.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-tech-blue/10 border border-tech-blue/30 text-tech-blue px-2 py-1 rounded-sm font-mono">
                    Full-Stack Development
                  </span>
                  <span className="text-xs bg-tech-blue/10 border border-tech-blue/30 text-tech-blue px-2 py-1 rounded-sm font-mono">
                    Docker
                  </span>
                  <span className="text-xs bg-tech-blue/10 border border-tech-blue/30 text-tech-blue px-2 py-1 rounded-sm font-mono">
                    TypeScript
                  </span>
                  <span className="text-xs bg-tech-blue/10 border border-tech-blue/30 text-tech-blue px-2 py-1 rounded-sm font-mono">
                    ELK Stack
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/60 backdrop-blur-sm rounded-md border border-tech-purple/20 overflow-hidden hover:shadow-glow-purple transition-all duration-300">
              {/* Terminal-like header */}
              <div className="border-b border-tech-purple/30 px-4 py-2 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <FiCode className="text-tech-purple" />
                  <h3 className="font-mono text-tech-purple">Intern Developer</h3>
                </div>
                <span className="text-xs font-mono bg-tech-dark text-tech-purple px-3 py-1 rounded-sm border border-tech-purple/30">
                  Jun 2022 - Sep 2022
                </span>
              </div>
              
              <div className="p-6">
                <h4 className="text-white font-mono mb-3 text-lg">KeepCom<span className="text-tech-purple">_</span>Nabeul</h4>
                <p className="text-tech-gray font-light mb-5 border-l-2 border-tech-purple/30 pl-4">
                  Designed and implemented a client-service oriented e-commerce platform following Adobe XD mockups as reference. Created an advanced chatbot with multiple automated functionalities to enhance the customer experience and streamline user interactions. Applied modern web development practices to ensure responsive design and optimal performance across devices.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-tech-purple/10 border border-tech-purple/30 text-tech-purple px-2 py-1 rounded-sm font-mono">
                    E-commerce
                  </span>
                  <span className="text-xs bg-tech-purple/10 border border-tech-purple/30 text-tech-purple px-2 py-1 rounded-sm font-mono">
                    UI/UX
                  </span>
                  <span className="text-xs bg-tech-purple/10 border border-tech-purple/30 text-tech-purple px-2 py-1 rounded-sm font-mono">
                    Chatbot Development
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/60 backdrop-blur-sm rounded-md border border-tech-cyan/20 overflow-hidden hover:shadow-glow-cyan transition-all duration-300">
              {/* Terminal-like header */}
              <div className="border-b border-tech-cyan/30 px-4 py-2 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <FiCode className="text-tech-cyan" />
                  <h3 className="font-mono text-tech-cyan">Freelance Web Developer & Graphic Designer</h3>
                </div>
                <span className="text-xs font-mono bg-tech-dark text-tech-cyan px-3 py-1 rounded-sm border border-tech-cyan/30">
                  May 2018 - Present
                </span>
              </div>
              
              <div className="p-6">
                <h4 className="text-white font-mono mb-3 text-lg">Self<span className="text-tech-cyan">_</span>Employed</h4>
                <p className="text-tech-gray font-light mb-5 border-l-2 border-tech-cyan/30 pl-4">
                  Provided comprehensive web development and design services for diverse clients across various industries. Created cohesive brand identities including logos, marketing materials, and digital assets for retail businesses. Enhanced and optimized multiple e-commerce platforms and developed a custom inventory management system. Delivered professional graphic design work including product catalogs, promotional materials, and corporate identity packages.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-tech-cyan/10 border border-tech-cyan/30 text-tech-cyan px-2 py-1 rounded-sm font-mono">
                    Web Development
                  </span>
                  <span className="text-xs bg-tech-cyan/10 border border-tech-cyan/30 text-tech-cyan px-2 py-1 rounded-sm font-mono">
                    Graphic Design
                  </span>
                  <span className="text-xs bg-tech-cyan/10 border border-tech-cyan/30 text-tech-cyan px-2 py-1 rounded-sm font-mono">
                    E-commerce
                  </span>
                  <span className="text-xs bg-tech-cyan/10 border border-tech-cyan/30 text-tech-cyan px-2 py-1 rounded-sm font-mono">
                    Brand Identity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mt-16">
          <Link
            href="/skills"
            className="inline-flex items-center gap-3 bg-black/60 border border-tech-blue/40 text-tech-blue px-6 py-3 rounded-sm font-mono hover:shadow-glow-blue transition-all duration-300 group"
          >
            <span>EXPLORE<span className="text-tech-purple">_</span>SKILLS</span>
            <FiChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
}
