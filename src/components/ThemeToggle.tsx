"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiCode, FiTerminal } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Display Mode"
      className={`relative group flex items-center justify-center border p-1.5 transition-all duration-300 ${theme === "dark" 
        ? "border-tech-purple/30 text-tech-purple hover:border-tech-purple hover:shadow-glow-purple" 
        : "border-tech-amber/30 text-tech-amber hover:border-tech-amber hover:shadow-glow-amber"
      } bg-black/30 backdrop-blur-sm rounded-sm overflow-hidden`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10 flex items-center justify-center">
        {theme === "dark" ? (
          <div className="relative">
            <FiSun className="w-4 h-4" />
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 font-mono text-[8px] whitespace-nowrap"
              >
                LIGHT_MODE
              </motion.div>
            )}
          </div>
        ) : (
          <div className="relative">
            <FiMoon className="w-4 h-4" />
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 font-mono text-[8px] whitespace-nowrap"
              >
                DARK_MODE
              </motion.div>
            )}
          </div>
        )}
      </div>
      
      {/* Tech-style active indicators */}
      <div className="absolute top-0 left-0 h-1 w-1 bg-tech-cyan"></div>
      <div className="absolute bottom-0 right-0 h-1 w-1 bg-tech-cyan"></div>
      
      {/* Animated border effect */}
      <motion.div 
        className={`absolute inset-x-0 bottom-0 h-[1px] ${theme === "dark" ? "bg-tech-purple/50" : "bg-tech-amber/50"}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}
