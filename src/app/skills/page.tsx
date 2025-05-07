"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { FiCode, FiDatabase, FiServer, FiLayout, FiCloud, FiCheckCircle } from "react-icons/fi";

// Get unique categories
const categories = Array.from(new Set(skills.map(skill => skill.category)));

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills;

  // Function to render appropriate icon based on icon string
  const getIcon = (iconName: string | undefined) => {
    switch (iconName) {
      case 'SiJavascript':
      case 'SiJava':
      case 'SiPython':
      case 'SiPhp':
      case 'SiCsharp':
        return <FiCode className="w-6 h-6" />;
      case 'SiMysql':
      case 'SiMongodb':
      case 'SiPostgresql':
      case 'SiElasticsearch':
        return <FiDatabase className="w-6 h-6" />;
      case 'SiDocker':
      case 'SiGithubactions':
      case 'SiTerraform':
        return <FiServer className="w-6 h-6" />;
      case 'SiAdobexd':
      case 'SiTailwindcss':
      case 'SiFigma':
        return <FiLayout className="w-6 h-6" />;
      case 'SiAmazonaws':
      case 'SiMicrosoftazure':
      case 'SiGooglecloud':
      case 'SiIbmwatson':
        return <FiCloud className="w-6 h-6" />;
      default:
        return <FiCheckCircle className="w-6 h-6" />;
    }
  };

  // Get appropriate color for category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Languages':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'Frameworks':
        return 'bg-green-500 hover:bg-green-600';
      case 'Databases':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Tools & Platforms':
        return 'bg-purple-500 hover:bg-purple-600';
      case 'AI & Cloud':
        return 'bg-indigo-500 hover:bg-indigo-600';
      case 'Testing & APIs':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">My Skills</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          I've developed expertise in a variety of technologies, frameworks, and tools throughout my career.
          Here's a comprehensive overview of my technical proficiencies.
        </p>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Skills
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? getCategoryColor(category) + ' text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${skill.category === 'Languages' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 
                  skill.category === 'Frameworks' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                  skill.category === 'Databases' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' :
                  skill.category === 'Tools & Platforms' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                  skill.category === 'AI & Cloud' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' :
                  'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'}`}>
                  {getIcon(skill.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-2 w-6 rounded-full ${
                          i < skill.level
                            ? skill.category === 'Languages' ? 'bg-blue-500' : 
                              skill.category === 'Frameworks' ? 'bg-green-500' :
                              skill.category === 'Databases' ? 'bg-yellow-500' :
                              skill.category === 'Tools & Platforms' ? 'bg-purple-500' :
                              skill.category === 'AI & Cloud' ? 'bg-indigo-500' :
                              'bg-red-500'
                            : 'bg-gray-200 dark:bg-gray-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
