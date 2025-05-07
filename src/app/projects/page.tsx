"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiFilter } from "react-icons/fi";
import GithubProjects from "@/components/GithubProjects";
import { projects } from "@/data/projects";

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
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          Below are my latest GitHub repositories and other projects I've worked on. Each demonstrates 
          different aspects of my technical skills and problem-solving approach.
        </p>

        {/* GitHub Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">GitHub Repositories</h2>
          <GithubProjects username={githubUsername} count={6} />
        </div>

        {/* Other Projects Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-8">Other Projects</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Besides my GitHub repositories, here are other projects I've worked on that aren't 
            publicly available on GitHub.
          </p>

          {/* Filter Toggle Button (Mobile) */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300"
            >
              <FiFilter className="h-4 w-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filter Section */}
          <div className={`mb-10 ${showFilters ? "block" : "hidden md:block"}`}>
            <h3 className="text-lg font-medium mb-4">Filter by Technology</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTech(null)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTech === null
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                All
              </button>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTech === tech
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {tech}
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
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video relative bg-gray-200 dark:bg-gray-700">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                    {/* Placeholder for project image */}
                    <span className="text-sm">Project Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="mb-5">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No projects found with the selected technology. Try selecting a different filter.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
