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
        
        if (repositories.length === 0) {
          console.warn('No repositories returned from GitHub API');
          // Check if token is available for better error messages
          if (!process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
            setError("GitHub token is missing. Make sure it's set in your environment variables.");
          } else {
            setError("No repositories found. Please check your GitHub username.");
          }
        } else {
          setRepos(repositories);
          setError(null);
        }
      } catch (err) {
        console.error('Error loading repositories:', err);
        setError("Failed to load GitHub repositories. Please check the console for details.");
      } finally {
        setIsLoading(false);
      }
    }

    loadRepositories();
  }, [username, count]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-pulse flex gap-3 items-center">
          <div className="h-2 w-2 rounded-full bg-tech-blue"></div>
          <div className="h-2 w-2 rounded-full bg-tech-blue/70 delay-100"></div>
          <div className="h-2 w-2 rounded-full bg-tech-blue/40 delay-200"></div>
          <span className="font-mono text-tech-gray ml-2">LOADING_REPOSITORIES...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 border border-red-500/30 bg-red-500/10 rounded-sm px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="text-red-400 font-mono">[ERROR]: {error}</p>
          <p className="text-tech-gray font-light border-l border-red-500/20 pl-4 mt-2">
            Make sure your GitHub token is correctly set up in the .env.local file.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-black/60 backdrop-blur-sm rounded-md overflow-hidden border border-tech-blue/20 hover:shadow-glow-blue transition-all duration-300"
        >
          {/* Terminal-style header */}
          <div className="border-b border-tech-blue/30 px-4 py-2 flex items-center justify-between bg-black/40">
            <div className="flex items-center gap-2">
              <FiGithub className="text-tech-blue" />
              <h3 className="font-mono text-sm text-tech-blue">{repo.name.toUpperCase()}</h3>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="flex items-center text-xs text-tech-gray">
                <FiStar className="h-3 w-3 mr-1 text-tech-amber" />
                {repo.stargazerCount}
              </span>
              <span className="flex items-center text-xs text-tech-gray">
                <FiGitBranch className="h-3 w-3 mr-1 text-tech-cyan" />
                {repo.forkCount}
              </span>
            </div>
          </div>
          
          {/* Repository preview image */}
          {repo.openGraphImageUrl ? (
            <div className="aspect-video relative overflow-hidden border-b border-tech-blue/20">
              <img 
                src={repo.openGraphImageUrl} 
                alt={repo.name} 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ) : (
            <div className="aspect-video relative bg-black/50 border-b border-tech-blue/20 flex items-center justify-center">
              <span className="font-mono text-xs border border-tech-gray/30 px-3 py-1 rounded-sm text-tech-gray">NO_PREVIEW</span>
            </div>
          )}
          
          {/* Repository Content */}
          <div className="p-5">
            <p className="text-tech-gray font-light text-sm mb-4 line-clamp-3 border-l border-tech-blue/20 pl-3">
              {repo.description || "No description provided"}
            </p>
            
            {/* Tech Stack */}
            <div className="mb-5">
              <h4 className="font-mono text-xs text-tech-gray/60 mb-3">
                LANGUAGES:
              </h4>
              <div className="flex flex-wrap gap-2">
                {repo.languages.nodes.map((lang) => (
                  <span
                    key={lang.name}
                    className="text-xs border px-2 py-1 rounded-sm font-mono"
                    style={{
                      backgroundColor: `${lang.color}10`, // More transparency for dark theme
                      borderColor: `${lang.color}30`,
                      color: lang.color,
                    }}
                  >
                    {lang.name}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div className="flex gap-3 mt-4">
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/60 text-tech-blue border border-tech-blue/30 hover:border-tech-blue/60 px-3 py-1.5 rounded-sm font-mono text-xs transition-all duration-300 hover:shadow-glow-blue"
              >
                <FiGithub size={14} />
                <span>VIEW_REPO</span>
              </a>
              {repo.homepageUrl && (
                <a
                  href={repo.homepageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black/60 text-tech-cyan border border-tech-cyan/30 hover:border-tech-cyan/60 px-3 py-1.5 rounded-sm font-mono text-xs transition-all duration-300 hover:shadow-glow-cyan"
                >
                  <FiExternalLink size={14} />
                  <span>LIVE_DEMO</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
