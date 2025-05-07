"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar, FiGitBranch } from "react-icons/fi";
import { fetchRepositories, GithubRepository } from "@/utils/github-api";

interface GithubProjectsProps {
  username: string;
  count?: number;
}

export default function GithubProjects({ username, count = 6 }: GithubProjectsProps) {
  const [repos, setRepos] = useState<GithubRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadRepositories() {
      try {
        setIsLoading(true);
        const repositories = await fetchRepositories(username, count);
        setRepos(repositories);
      } catch (err) {
        setError("Failed to load GitHub repositories");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    loadRepositories();
  }, [username, count]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Make sure your GitHub token is correctly set up in the .env.local file.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {repos.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          {/* Repository Image/Header */}
          <div className="aspect-video relative bg-gray-200 dark:bg-gray-700 overflow-hidden">
            {repo.openGraphImageUrl ? (
              <img 
                src={repo.openGraphImageUrl} 
                alt={repo.name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <FiGithub className="h-12 w-12" />
              </div>
            )}
          </div>
          
          {/* Repository Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{repo.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {repo.description || "No description provided"}
            </p>
            
            {/* Tech Stack */}
            <div className="mb-5">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {repo.languages.nodes.map((lang) => (
                  <span
                    key={lang.name}
                    className="text-xs px-2 py-1 rounded"
                    style={{
                      backgroundColor: `${lang.color}20`, // Adding transparency
                      color: lang.color,
                    }}
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Stats & Links */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <FiStar className="h-4 w-4 mr-1" />
                  {repo.stargazerCount}
                </span>
                <span className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <FiGitBranch className="h-4 w-4 mr-1" />
                  {repo.forkCount}
                </span>
              </div>
              
              <div className="flex gap-3">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FiGithub className="h-5 w-5" />
                </a>
                {repo.homepageUrl && (
                  <a
                    href={repo.homepageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FiExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
