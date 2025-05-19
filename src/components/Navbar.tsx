"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX, FiCommand, FiTerminal } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home", techLabel: "HOME" },
  { href: "/about", label: "About", techLabel: "ABOUT" },
  { href: "/skills", label: "Skills", techLabel: "SKILLS" },
  { href: "/projects", label: "Projects", techLabel: "PROJECTS" },
  { href: "/certifications", label: "Certifications", techLabel: "CERTIFICATIONS" },
  { href: "/contact", label: "Contact", techLabel: "CONTACT" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-tech-dark/90 backdrop-blur-md border-b border-tech-blue/20" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center text-xl font-mono text-white">
              <div className="mr-2 text-tech-cyan">
                <FiTerminal className="h-5 w-5 group-hover:animate-pulse" />
              </div>
              <span className="relative">
                <span>Skander</span>
                <span className="text-tech-blue">Benali</span>
                <span className="text-tech-cyan animate-blink">_</span>
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-[1px] bg-tech-blue/70 group-hover:w-full"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-mono transition-all duration-300 relative group
                      ${isActive 
                        ? "text-tech-cyan" 
                        : "text-tech-gray hover:text-white"
                      }`}
                  >
                    <div className="relative overflow-hidden">
                      <span className="flex items-center gap-1">
                        {isActive && (
                          <div className="h-3 w-1 bg-tech-cyan animate-pulse absolute -left-2"></div>
                        )}
                        {link.techLabel}
                        {isActive && <span className="text-tech-cyan ml-1 animate-blink">_</span>}
                      </span>
                      
                      {!isActive && (
                        <motion.div 
                          className="absolute bottom-0 left-0 w-0 h-[1px] bg-tech-cyan/50 group-hover:w-full"
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </div>
                    
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-tech-cyan shadow-glow-cyan"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Right Side Controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 text-tech-cyan border border-tech-cyan/30 bg-black/30 hover:bg-black/50 hover:border-tech-cyan hover:shadow-glow-cyan rounded-sm transition-all duration-300"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Toggle navigation</span>
                {isOpen ? 
                  <FiX className="h-5 w-5" /> : 
                  <FiCommand className="h-5 w-5" />
                }
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-tech-blue/20 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-3 font-mono text-sm transition-all duration-300 ${isActive 
                      ? "border-l-2 border-tech-cyan pl-3 text-tech-cyan bg-tech-blue/5" 
                      : "text-tech-gray hover:text-white hover:bg-black/80"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center">
                    {isActive && <span className="mr-2">→</span>}
                    {link.techLabel}
                    {isActive && <span className="text-tech-cyan ml-1 animate-blink">_</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </header>
  );
}
