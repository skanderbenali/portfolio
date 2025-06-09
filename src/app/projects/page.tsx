"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter, FiCode, FiExternalLink, FiGithub } from "react-icons/fi";
import GithubProjects from "@/components/GithubProjects";
import { projects } from "@/data/projects";
import Image from "next/image";
import { getAssetPath, isGoogleDriveUrl, getGoogleDriveEmbedUrl } from "@/utils/path";

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const githubUsername = "skanderbenali"; // Your GitHub username

  // Get unique technologies from all projects in the data file
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort();

  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter((project) => project.technologies.includes(selectedTech))
    : projects;

  return (
    <div className="min-h-screen bg-tech-dark px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          {/* Tech-inspired header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 bg-tech-purple animate-pulse"></div>
              <h1 className="text-3xl md:text-4xl font-mono text-white">PROJECT<span className="text-tech-purple">_</span>SHOWCASE</h1>
            </div>
            <p className="text-tech-gray font-light border-l border-tech-purple/20 pl-4 ml-4 mt-4">
              Below are my latest GitHub repositories and other projects I've worked on. Each demonstrates 
              different aspects of my technical skills and problem-solving approach.
            </p>
          </div>

          {/* GitHub Projects Section */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-4 w-1 bg-tech-blue animate-pulse"></div>
              <h2 className="text-2xl font-mono text-white">GITHUB<span className="text-tech-blue">_</span>REPOSITORIES</h2>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-tech-blue/20 rounded-md p-6 hover:shadow-glow-blue transition-all duration-500">
              <GithubProjects username={githubUsername} count={10} />
            </div>
          </div>

          {/* Other Projects Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-4 w-1 bg-tech-amber animate-pulse"></div>
              <h2 className="text-2xl font-mono text-white">OTHER<span className="text-tech-amber">_</span>PROJECTS</h2>
            </div>
            <p className="text-tech-gray font-light border-l border-tech-amber/20 pl-4 ml-4 mb-8">
              Besides my GitHub repositories, here are other projects I've worked on that aren't 
              publicly available on GitHub.
            </p>

            {/* Filter Toggle Button (Mobile) */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 bg-black/40 border border-tech-amber/30 text-tech-amber px-4 py-2 rounded-sm font-mono text-sm"
              >
                <FiFilter className="h-4 w-4" />
                {showFilters ? "HIDE_FILTERS" : "SHOW_FILTERS"}
              </button>
            </div>

            {/* Filter Section */}
            <div className={`mb-10 ${showFilters ? "block" : "hidden md:block"}`}>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-1 bg-tech-cyan animate-pulse"></div>
                <h3 className="text-lg font-mono text-white">FILTER<span className="text-tech-cyan">_</span>BY<span className="text-tech-cyan">_</span>TECH</h3>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  onClick={() => setSelectedTech(null)}
                  className={`px-4 py-2 rounded-sm text-sm font-mono transition-all duration-200 border ${
                    selectedTech === null
                      ? 'bg-tech-blue/20 text-tech-blue border-tech-blue/50 shadow-glow-blue'
                      : 'bg-black/40 text-tech-gray border-tech-gray/20 hover:border-tech-gray/50'
                  }`}
                >
                  ALL_TECH
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSelectedTech(tech)}
                    className={`px-4 py-2 rounded-sm text-sm font-mono transition-all duration-200 border ${
                      selectedTech === tech
                        ? 'bg-tech-cyan/20 text-tech-cyan border-tech-cyan/50 shadow-glow-cyan'
                        : 'bg-black/40 text-tech-gray border-tech-gray/20 hover:border-tech-gray/50'
                    }`}
                  >
                    {tech.toUpperCase().replace(/\s+/g, '_')}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/60 backdrop-blur-sm rounded-md overflow-hidden border border-tech-amber/20 hover:shadow-glow-amber transition-all duration-300"
                >
                  {/* Terminal-style header */}
                  <div className="border-b border-tech-amber/30 px-4 py-2 flex items-center justify-between bg-black/40">
                    <div className="flex items-center gap-2">
                      <FiCode className="text-tech-amber" />
                      <h3 className="font-mono text-tech-amber">{project.title.toUpperCase()}</h3>
                    </div>
                  </div>
                  
                  {/* Project preview area */}
                  <div className="aspect-video relative bg-black/50 border-b border-tech-amber/20">
                    {project.demoUrl ? (
                      isGoogleDriveUrl(project.demoUrl) ? (
                        // Handle Google Drive videos with iframe embedding
                        <iframe
                          src={getGoogleDriveEmbedUrl(project.demoUrl)}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : project.demoUrl.endsWith('.mp4') ? (
                        // Handle local MP4 videos
                        <video 
                          className="w-full h-full object-cover" 
                          poster={project.image ? getAssetPath(project.image) : undefined}
                          controls
                        >
                          <source src={getAssetPath(project.demoUrl)} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        // Handle other external video URLs
                        <div className="h-full w-full flex items-center justify-center">
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black/60 text-tech-cyan border border-tech-cyan/30 hover:border-tech-cyan/60 px-4 py-2 rounded-sm font-mono text-sm transition-all duration-300 hover:shadow-glow-cyan"
                          >
                            <FiExternalLink size={18} />
                            <span>VIEW DEMO</span>
                          </a>
                        </div>
                      )
                    ) : project.image ? (
                      // If there's an image but no video, show the image
                      <div className="h-full w-full relative">
                        <Image 
                          src={getAssetPath(project.image) as string} 
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      // If there's neither video nor image, show placeholder
                      <div className="absolute inset-0 flex items-center justify-center text-tech-gray">
                        <span className="font-mono text-xs border border-tech-gray/30 px-3 py-1 rounded-sm">PROJECT_PREVIEW</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Project content */}
                  <div className="p-6">
                    <p className="text-tech-gray font-light mb-5 border-l pl-4 border-tech-amber/30">
                      {project.description}
                    </p>
                    
                    <div className="mb-5">
                      <h4 className="font-mono text-xs text-tech-gray/70 mb-3">
                        TECHNOLOGIES_USED:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-tech-amber/10 border border-tech-amber/30 text-tech-amber px-2 py-1 rounded-sm font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project links */}
                    <div className="flex gap-3 mt-4">
                      {project.demoUrl && (
                        <a 
                          href={isGoogleDriveUrl(project.demoUrl) 
                            ? project.demoUrl 
                            : getAssetPath(project.demoUrl)} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-black/60 text-tech-cyan border border-tech-cyan/30 hover:border-tech-cyan/60 px-3 py-1.5 rounded-sm font-mono text-xs transition-all duration-300 hover:shadow-glow-cyan"
                        >
                          <FiExternalLink size={14} />
                          <span>
                            {isGoogleDriveUrl(project.demoUrl) ? 'DEMO_VIDEO' : 
                              project.demoUrl.endsWith('.mp4') ? 'VIEW_DEMO' : 'LIVE_DEMO'}
                          </span>
                        </a>
                      )}
                      
                      {project.repoUrl && (
                        <a 
                          href={project.repoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-black/60 text-tech-blue border border-tech-blue/30 hover:border-tech-blue/60 px-3 py-1.5 rounded-sm font-mono text-xs transition-all duration-300 hover:shadow-glow-blue"
                        >
                          <FiGithub size={14} />
                          <span>SOURCE_CODE</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="bg-black/40 border border-tech-amber/20 rounded-md p-8 text-center">
                <p className="text-tech-gray font-mono">
                  NO_PROJECTS_FOUND with the selected technology.<br />
                  Try selecting a different filter.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
