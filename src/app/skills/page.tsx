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

  // Get appropriate tech color for category
  const getCategoryTechColor = (category: string, type: 'text' | 'border' | 'bg' | 'glow') => {
    switch (category) {
      case 'Languages':
        return type === 'text' ? 'text-tech-blue' : 
               type === 'border' ? 'border-tech-blue/30' : 
               type === 'bg' ? 'bg-tech-blue/10' : 'shadow-glow-blue';
      case 'Frameworks':
        return type === 'text' ? 'text-tech-cyan' : 
               type === 'border' ? 'border-tech-cyan/30' : 
               type === 'bg' ? 'bg-tech-cyan/10' : 'shadow-glow-cyan';
      case 'Databases':
        return type === 'text' ? 'text-tech-amber' : 
               type === 'border' ? 'border-tech-amber/30' : 
               type === 'bg' ? 'bg-tech-amber/10' : 'shadow-glow-amber';
      case 'Tools & Platforms':
        return type === 'text' ? 'text-tech-purple' : 
               type === 'border' ? 'border-tech-purple/30' : 
               type === 'bg' ? 'bg-tech-purple/10' : 'shadow-glow-purple';
      case 'AI & Cloud':
      case 'Testing & APIs':
      default:
        return type === 'text' ? 'text-tech-gray' : 
               type === 'border' ? 'border-tech-gray/30' : 
               type === 'bg' ? 'bg-tech-gray/10' : 'shadow-none';
    }
  };

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
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 bg-tech-blue animate-pulse"></div>
              <h1 className="text-3xl md:text-4xl font-mono text-white">TECHNICAL<span className="text-tech-blue">_</span>SKILLS</h1>
            </div>
            <p className="text-tech-gray font-light border-l border-tech-blue/20 pl-4 ml-4 mt-4">
              I've developed expertise in a variety of technologies, frameworks, and tools throughout my career.
              Here's a comprehensive overview of my technical proficiencies.
            </p>
          </div>

          {/* Category Filter - Terminal Inspired */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-4 w-1 bg-tech-purple animate-pulse"></div>
              <h2 className="text-xl font-mono text-white">FILTER<span className="text-tech-purple">_</span>BY<span className="text-tech-purple">_</span>CATEGORY</h2>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-sm text-sm font-mono transition-all duration-200 border ${
                  selectedCategory === null
                    ? 'bg-tech-blue/20 text-tech-blue border-tech-blue/50 shadow-glow-blue'
                    : 'bg-black/40 text-tech-gray border-tech-gray/20 hover:border-tech-gray/50'
                }`}
              >
                ALL_SKILLS
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-sm text-sm font-mono transition-all duration-200 border ${
                    selectedCategory === category
                      ? category === 'Languages' ? 'bg-tech-blue/20 text-tech-blue border-tech-blue/50 shadow-glow-blue' : 
                        category === 'Frameworks' ? 'bg-tech-cyan/20 text-tech-cyan border-tech-cyan/50 shadow-glow-cyan' :
                        category === 'Databases' ? 'bg-tech-amber/20 text-tech-amber border-tech-amber/50 shadow-glow-amber' :
                        category === 'Tools & Platforms' ? 'bg-tech-purple/20 text-tech-purple border-tech-purple/50 shadow-glow-purple' :
                        'bg-tech-gray/20 text-tech-gray border-tech-gray/50'
                      : 'bg-black/40 text-tech-gray border-tech-gray/20 hover:border-tech-gray/50'
                  }`}
                >
                  {category.toUpperCase().replace(' & ', '_')}
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
                className={`bg-black/60 backdrop-blur-sm rounded-md overflow-hidden border ${getCategoryTechColor(skill.category, 'border')} hover:${getCategoryTechColor(skill.category, 'glow')} transition-all duration-300`}
              >
                {/* Terminal-style header */}
                <div className={`border-b ${getCategoryTechColor(skill.category, 'border')} px-3 py-2 flex items-center justify-between bg-black/40`}>
                  <div className="flex items-center gap-2">
                    <div className={`${getCategoryTechColor(skill.category, 'text')}`}>
                      {getIcon(skill.icon)}
                    </div>
                    <h3 className={`font-mono text-sm ${getCategoryTechColor(skill.category, 'text')}`}>{skill.name.toUpperCase()}</h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 w-3 ${i < skill.level ? getCategoryTechColor(skill.category, 'bg') : 'bg-tech-gray/10'}`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Skill content */}
                <div className="p-4">
                  <div className="font-light text-sm text-tech-gray">
                    <span className="font-mono text-xs text-tech-gray/60 block mb-2">
                      CATEGORY: <span className={getCategoryTechColor(skill.category, 'text')}>{skill.category}</span>
                    </span>
                    
                    {skill.description && (
                      <p className="text-tech-gray/80 mt-2 border-l pl-3 border-tech-gray/20">
                        {skill.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
