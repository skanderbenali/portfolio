"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiCodepen, FiMail, FiTerminal, FiCode } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-tech-dark border-t border-tech-blue/10">
      <div className="container mx-auto px-4 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="text-tech-cyan">
                <FiTerminal className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-mono text-white">
                Skander<span className="text-tech-blue">Benali</span><span className="text-tech-cyan animate-blink">_</span>
              </h3>
            </div>
            
            <div className="font-light text-tech-gray mb-6 border-l border-tech-blue/20 pl-4">
              <p className="mb-1">Creating innovative solutions with cutting-edge technology.</p>
              <p className="text-xs opacity-80">{">"}  Executing code since 2018</p>
            </div>
            
            <div className="flex space-x-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-tech-gray/30 bg-black/30 hover:border-tech-cyan hover:text-tech-cyan hover:shadow-glow-cyan rounded-sm text-tech-gray transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-tech-gray/30 bg-black/30 hover:border-tech-blue hover:text-tech-blue hover:shadow-glow-blue rounded-sm text-tech-gray transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-tech-gray/30 bg-black/30 hover:border-tech-purple hover:text-tech-purple hover:shadow-glow-purple rounded-sm text-tech-gray transition-all duration-300"
                aria-label="Twitter"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://codepen.io"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-tech-gray/30 bg-black/30 hover:border-tech-amber hover:text-tech-amber hover:shadow-glow-amber rounded-sm text-tech-gray transition-all duration-300"
                aria-label="CodePen"
              >
                <FiCodepen className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Navigation Section */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-3 w-1 bg-tech-purple animate-pulse"></div>
              <h3 className="font-mono text-sm text-white">SITE<span className="text-tech-purple">_</span>MAP</h3>
            </div>
            
            <ul className="space-y-3 ml-4">
              <li>
                <Link href="/" className="text-tech-gray group flex items-center hover:text-white transition-colors duration-300">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 text-tech-purple transition-opacity">▹</span>
                  <span className="font-mono text-sm">HOME</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-tech-gray group flex items-center hover:text-white transition-colors duration-300">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 text-tech-purple transition-opacity">▹</span>
                  <span className="font-mono text-sm">ABOUT</span>
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-tech-gray group flex items-center hover:text-white transition-colors duration-300">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 text-tech-purple transition-opacity">▹</span>
                  <span className="font-mono text-sm">SKILLS</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-tech-gray group flex items-center hover:text-white transition-colors duration-300">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 text-tech-purple transition-opacity">▹</span>
                  <span className="font-mono text-sm">PROJECTS</span>
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-tech-gray group flex items-center hover:text-white transition-colors duration-300">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 text-tech-purple transition-opacity">▹</span>
                  <span className="font-mono text-sm">CERTIFICATIONS</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-tech-gray group flex items-center hover:text-white transition-colors duration-300">
                  <span className="mr-2 opacity-0 group-hover:opacity-100 text-tech-purple transition-opacity">▹</span>
                  <span className="font-mono text-sm">CONTACT</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="h-3 w-1 bg-tech-amber animate-pulse"></div>
              <h3 className="font-mono text-sm text-white">CONTACT<span className="text-tech-amber">_</span>DETAILS</h3>
            </div>
            
            <div className="text-tech-gray font-light mb-4 border-l border-tech-amber/20 pl-4">
              Feel free to reach out for collaborations or just a friendly chat.
            </div>
            
            <div className="flex items-start gap-3 ml-4 mb-4">
              <div className="mt-1 text-tech-amber"><FiMail size={14} /></div>
              <div>
                <h4 className="text-xs font-mono text-tech-gray mb-1">
                  EMAIL_ADDRESS
                </h4>
                <a
                  href="mailto:contact@infotexa.com"
                  className="text-white hover:text-tech-amber transition-colors"
                >
                  dev.skander.benali@gmail.com
                </a>
              </div>
            </div>
            
            <div className="ml-4 mt-6">
              <div className="p-3 border border-tech-amber/20 bg-black/30 rounded-sm">
                <div className="flex items-start gap-2">
                  <div className="mt-1 text-tech-amber"><FiCode size={14} /></div>
                  <div className="text-tech-gray text-sm font-light">
                    <span className="font-mono text-xs block mb-1">console.log("Connect with me!");</span>
                    Available for remote work and exciting projects.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Credits */}
        <div className="border-t border-tech-gray/10 mt-12 pt-8 text-center">
          <p className="text-tech-gray font-mono text-xs">
            <span className="text-tech-cyan">$</span> echo "© {new Date().getFullYear()} <span className="text-tech-blue">Skander Benali</span>. All rights reserved."
          </p>
        </div>
      </div>
    </footer>
  );
}
