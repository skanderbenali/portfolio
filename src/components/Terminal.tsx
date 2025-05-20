"use client";

import { useState, useEffect, useRef, ReactNode, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FiX, FiTerminal, FiChevronRight, FiCommand, FiMinimize2, FiMaximize2, FiMinus } from "react-icons/fi";
import Draggable from "react-draggable";

// TypeWriter component
interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  startDelay?: number;
  onComplete?: () => void;
}

const TypeWriter = ({ text, delay = 40, className = "", startDelay = 0, onComplete }: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    
    return () => clearTimeout(startTimer);
  }, [startDelay]);
  
  useEffect(() => {
    if (!started) return;
    
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, delay, onComplete, started, text]);
  
  return <span className={className}>{displayedText}</span>;
};

interface CommandResult {
  command: string;
  output: string | ReactNode;
  isError?: boolean;
}

type TerminalMode = 'fullscreen' | 'windowed' | 'minimized';

export default function Terminal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<TerminalMode>('fullscreen');
  const [prevMode, setPrevMode] = useState<TerminalMode>('fullscreen');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [commandHistory, setCommandHistory] = useState<CommandResult[]>([
    { 
      command: "init",
      output: (
        <div>
          <div className="text-tech-green font-mono">
            <pre className="mb-2 text-xs sm:text-sm opacity-90 hidden md:block">{`
      ██████╗██╗   ██╗██████╗ ███████╗██████╗     ███╗   ██╗███████╗██╗  ██╗██╗   ██╗███████╗
     ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗    ████╗  ██║██╔════╝╚██╗██╔╝██║   ██║██╔════╝
     ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝    ██╔██╗ ██║█████╗   ╚███╔╝ ██║   ██║███████╗
     ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗    ██║╚██╗██║██╔══╝   ██╔██╗ ██║   ██║╚════██║
     ╚██████╗   ██║   ██████╔╝███████╗██║  ██║    ██║ ╚████║███████╗██╔╝ ██╗╚██████╔╝███████║
      ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝
                                                                                          
    ██████╗ ██████╗  ██████╗ ████████╗ ██████╗  ██████╗ ██████╗ ██╗     
    ██╔══██╗██╔══██╗██╔═══██╗╚══██╔══╝██╔═══██╗██╔════╝██╔═══██╗██║     
    ██████╔╝██████╔╝██║   ██║   ██║   ██║   ██║██║     ██║   ██║██║     
    ██╔═══╝ ██╔══██╗██║   ██║   ██║   ██║   ██║██║     ██║   ██║██║     
    ██║     ██║  ██║╚██████╔╝   ██║   ╚██████╔╝╚██████╗╚██████╔╝███████╗
    ╚═╝     ╚═╝  ╚═╝ ╚═════╝    ╚═╝    ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝`}</pre>
            
            <pre className="mb-2 text-[8px] font-bold opacity-90 block md:hidden">{`
   ░█████╗░██╗░░░██╗██████╗░███████╗██████╗░
   ██╔══██╗╚██╗░██╔╝██╔══██╗██╔════╝██╔══██╗
   ██║░░╚═╝░╚████╔╝░██████╦╝█████╗░░██████╔╝
   ██║░░██╗░░╚██╔╝░░██╔══██╗██╔══╝░░██╔══██╗
   ╚█████╔╝░░░██║░░░██████╦╝███████╗██║░░██║
   ░╚════╝░░░░╚═╝░░░╚═════╝░╚══════╝╚═╝░░╚═╝
   
   ███╗░░██╗███████╗██╗░░██╗██╗░░░██╗░██████╗
   ████╗░██║██╔════╝╚██╗██╔╝██║░░░██║██╔════╝
   ██╔██╗██║█████╗░░░╚███╔╝░██║░░░██║╚█████╗░
   ██║╚████║██╔══╝░░░██╔██╗░██║░░░██║░╚═══██╗
   ██║░╚███║███████╗██╔╝╚██╗╚██████╔╝██████╔╝
   
   ██████╗░██████╗░░█████╗░████████╗░█████╗░░█████╗░░█████╗░██╗░░░░░
   ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██║░░░░░
   ██████╔╝██████╔╝██║░░██║░░░██║░░░██║░░██║██║░░╚═╝██║░░██║██║░░░░░
   ██╔═══╝░██╔══██╗██║░░██║░░░██║░░░██║░░██║██║░░██╗██║░░██║██║░░░░░
   ██║░░░░░██║░░██║╚█████╔╝░░░██║░░░╚█████╔╝╚█████╔╝╚█████╔╝███████╗`}</pre>
          </div>
          
          <div className="font-mono opacity-90 space-y-1 text-xs sm:text-sm">
            <p className="text-tech-cyan">
              <TypeWriter 
                text="[SYS] Quantum-Secured Terminal v3.7.21 | CODENAME: NEXUS" 
                delay={20} 
              />
            </p>
            <p className="text-tech-green">
              <TypeWriter 
                text={`[INIT] System boot sequence completed at ${new Date().toISOString()}`} 
                delay={15} 
                startDelay={400} 
              />
            </p>
            <p className="text-tech-amber">
              <TypeWriter 
                text="[SECURE] Biometric authentication bypassed: VISITOR MODE ENABLED" 
                delay={15} 
                startDelay={1000} 
              />
            </p>
            <p className="text-tech-gray">
              <TypeWriter 
                text="[NETWORK] Encrypted P2P connection established via NeuroLink™" 
                delay={15} 
                startDelay={1600} 
              />
            </p>
            <p className="text-tech-purple">
              <TypeWriter 
                text={`[CRYPTO] Session key: ${Math.random().toString(36).substring(2, 8)}-${Math.random().toString(36).substring(2, 8)}-${Math.random().toString(36).substring(2, 8)}`} 
                delay={10} 
                startDelay={2200} 
              />
            </p>
            <p className="text-tech-blue">
              <TypeWriter 
                text="[AI] Neural interface online. Synapse protocol initialized." 
                delay={15} 
                startDelay={2800} 
              />
            </p>
            <p className="text-tech-red">
              <TypeWriter 
                text="[ALERT] All interactions are logged and monitored by SENTINEL" 
                delay={20} 
                startDelay={3400} 
              />
            </p>
          </div>

          <div className="mt-4 border-t border-tech-gray/20 pt-2 space-y-1 text-xs sm:text-sm">
            <p className="text-tech-green">
              <TypeWriter 
                text={">"}  
                delay={80} 
                startDelay={4000} 
              />{" "}
              <TypeWriter 
                text="ACCESS GRANTED: Visitor clearance level established" 
                delay={20} 
                startDelay={4100} 
                className="text-tech-amber" 
              />
            </p>
            <p className="text-tech-gray">
              <TypeWriter 
                text={">"}  
                delay={80} 
                startDelay={4600} 
              />{" "}
              <span>Execute </span>
              <TypeWriter 
                text="help" 
                delay={80} 
                startDelay={4800} 
                className="text-tech-cyan" 
              />
              <TypeWriter 
                text=" to access command registry" 
                delay={20} 
                startDelay={5000} 
              />
            </p>
            <p className="text-tech-purple">
              <TypeWriter 
                text={">"}  
                delay={80} 
                startDelay={5200} 
              />{" "}
              <span>Run </span>
              <TypeWriter 
                text="whoami" 
                delay={80} 
                startDelay={5400} 
                className="text-tech-amber" 
              />
              <TypeWriter 
                text=" for identity verification" 
                delay={20} 
                startDelay={5600} 
              />
            </p>
            <p className="text-tech-red">
              <TypeWriter 
                text={">"}  
                delay={80} 
                startDelay={5800} 
              />{" "}
              <TypeWriter 
                text="CAUTION: Unauthorized commands will trigger countermeasures" 
                delay={25} 
                startDelay={6000} 
              />
            </p>
          </div>
        </div>
      )
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandsHistory, setCommandsHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Focus the input field when terminal opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  // Scroll to the bottom when new commands are entered
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [commandHistory]);

  // Center terminal in viewport
  useEffect(() => {
    if (isOpen && terminalRef.current) {
      if (mode === 'windowed') {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const terminalWidth = 800; // Approximate width of terminal
        const terminalHeight = 500; // Approximate height of terminal

        setPosition({ 
          x: Math.max(0, (viewportWidth - terminalWidth) / 2),
          y: Math.max(0, (viewportHeight - terminalHeight) / 4)
        });
      } else if (mode === 'fullscreen') {
        setPosition({ x: 0, y: 0 });
      }
    }
  }, [isOpen, mode]);

  // Handle keyboard history navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHistoryIndex(prev => {
          const newIndex = prev < commandsHistory.length - 1 ? prev + 1 : prev;
          if (newIndex >= 0 && newIndex < commandsHistory.length) {
            setInput(commandsHistory[commandsHistory.length - 1 - newIndex]);
          }
          return newIndex;
        });
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHistoryIndex(prev => {
          const newIndex = prev > 0 ? prev - 1 : -1;
          if (newIndex >= 0) {
            setInput(commandsHistory[commandsHistory.length - 1 - newIndex]);
          } else {
            setInput('');
          }
          return newIndex;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, commandsHistory]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand();
    }
  };

  const executeCommand = () => {
    if (!input.trim()) return;
    
    const cmd = input.trim().toLowerCase();
    setCommandsHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    let result: CommandResult;

    switch (cmd) {
      case 'theme':
        result = {
          command: cmd,
          output: (
            <div>
              <p className="text-tech-amber font-bold">Portfolio Color Palette:</p>
              <div className="mt-2 grid grid-cols-2 gap-3 md:grid-cols-3">
                <div className="flex flex-col space-y-1">
                  <div className="h-8 w-full bg-[#0f172a] border border-white/10 rounded"></div>
                  <span className="text-xs font-mono">#0f172a - Dark Blue Slate</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="h-8 w-full bg-[#38bdf8] border border-white/10 rounded"></div>
                  <span className="text-xs font-mono">#38bdf8 - Sky Blue</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="h-8 w-full bg-[#facc15] border border-white/10 rounded"></div>
                  <span className="text-xs font-mono">#facc15 - Amber</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="h-8 w-full bg-[#22d3ee] border border-white/10 rounded"></div>
                  <span className="text-xs font-mono">#22d3ee - Cyan</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="h-8 w-full bg-[#a78bfa] border border-white/10 rounded"></div>
                  <span className="text-xs font-mono">#a78bfa - Purple</span>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="h-8 w-full bg-[#94a3b8] border border-white/10 rounded"></div>
                  <span className="text-xs font-mono">#94a3b8 - Cool Gray</span>
                </div>
              </div>
              <p className="mt-3 text-tech-gray">Primary feel: <span className="text-white">Techy, Analytical, Sharp</span></p>
            </div>
          )
        };
        break;
        
      case 'help':
        result = {
          command: cmd,
          output: (
            <div>
              <p className="text-tech-amber font-bold">Available Commands:</p>
              <ul className="mt-2 space-y-1">
                <li><span className="text-tech-cyan">help</span> - Show this help message</li>
                <li><span className="text-tech-cyan">about</span> - Display information about me</li>
                <li><span className="text-tech-cyan">skills</span> - List my technical skills</li>
                <li><span className="text-tech-cyan">projects</span> - Show my projects</li>
                <li><span className="text-tech-cyan">contact</span> - Get my contact information</li>
                <li><span className="text-tech-cyan">theme</span> - Display portfolio color palette</li>
                <li><span className="text-tech-cyan">whoami</span> - Display current user information</li>
                <li><span className="text-tech-red">sudo</span> / <span className="text-tech-red">su</span> - Attempt to gain elevated privileges</li>
                <li><span className="text-tech-cyan">clear</span> - Clear the terminal</li>
                <li><span className="text-tech-cyan">exit</span> - Close the terminal</li>
              </ul>
              <p className="mt-2 text-tech-gray italic">Pro tip: Use Up/Down arrow keys to navigate command history</p>
            </div>
          )
        };
        break;

      case 'about':
        result = {
          command: cmd,
          output: (
            <div>
              <p className="text-tech-blue font-bold">Skander Benali</p>
              <p className="mt-1 text-tech-gray">Full Stack Developer & Data Scientist</p>
              <p className="mt-3">
                With over 5 years of experience in full-stack development, I specialize in building efficient web applications 
                and data-driven solutions. My focus is on creating clean, maintainable code that solves real business challenges.
              </p>
              <p className="mt-2">
                Combining software engineering with data science skills, I've designed real-time analytics dashboards and 
                implemented data processing pipelines that transform complex information into actionable insights.
              </p>
            </div>
          )
        };
        break;

      case 'skills':
        result = {
          command: cmd,
          output: (
            <div>
              <p className="text-tech-amber font-bold">Technical Skills:</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div>
                  <p className="text-tech-cyan">Frontend:</p>
                  <ul className="ml-4 list-disc">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                  </ul>
                </div>
                <div>
                  <p className="text-tech-cyan">Backend:</p>
                  <ul className="ml-4 list-disc">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="mt-2">
                  <p className="text-tech-cyan">Data Science:</p>
                  <ul className="ml-4 list-disc">
                    <li>TensorFlow</li>
                    <li>Pandas</li>
                    <li>Data Visualization</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
                <div className="mt-2">
                  <p className="text-tech-cyan">DevOps:</p>
                  <ul className="ml-4 list-disc">
                    <li>AWS</li>
                    <li>Docker</li>
                    <li>CI/CD</li>
                    <li>Git</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        };
        break;

      case 'projects':
        result = {
          command: cmd,
          output: (
            <div>
              <p className="text-tech-amber font-bold">Featured Projects:</p>
              <div className="mt-2 space-y-3">
                <div className="border-l-2 border-tech-cyan pl-3">
                  <p className="text-tech-cyan font-mono">Real-time Analytics Dashboard</p>
                  <p className="text-sm">Built with React, D3.js, and Node.js to visualize complex data streams in real-time.</p>
                </div>
                <div className="border-l-2 border-tech-purple pl-3">
                  <p className="text-tech-purple font-mono">ML-Powered Recommendation Engine</p>
                  <p className="text-sm">Python and TensorFlow implementation for personalized content recommendations.</p>
                </div>
                <div className="border-l-2 border-tech-blue pl-3">
                  <p className="text-tech-blue font-mono">E-Commerce Platform</p>
                  <p className="text-sm">Full-stack solution with Next.js, MongoDB, and Stripe integration.</p>
                </div>
                <p className="mt-2 text-tech-gray">Type <span className="text-tech-cyan">open projects</span> to visit my projects page</p>
              </div>
            </div>
          )
        };
        break;

      case 'contact':
        result = {
          command: cmd,
          output: (
            <div>
              <p className="text-tech-amber font-bold">Contact Information:</p>
              <ul className="mt-2 space-y-1">
                <li><span className="text-tech-cyan">Email:</span> dev.skander.benali@gmail.com</li>
                <li><span className="text-tech-cyan">LinkedIn:</span> linkedin.com/in/skander-benali</li>
                <li><span className="text-tech-cyan">GitHub:</span> github.com/skanderbenali</li>
                <li><span className="text-tech-cyan">Location:</span> Tunis, Tunisia</li>
              </ul>
              <p className="mt-2 text-tech-gray">Type <span className="text-tech-cyan">open contact</span> to visit my contact page</p>
            </div>
          )
        };
        break;

      case 'whoami':
        result = {
          command: cmd,
          output: (
            <div className="space-y-2">
              <div className="text-tech-green font-mono border-b border-tech-gray/30 pb-1 flex justify-between">
                <span>[IDENTITY_SCAN_COMPLETE]</span>
                <span>{new Date().toISOString().split('T')[1].split('.')[0]}</span>
              </div>
              
              <div className="bg-black/40 p-3 border border-tech-blue/20 rounded">
                <p className="text-tech-blue font-bold">USER CLASSIFICATION: <span className="text-tech-amber">VISITOR</span></p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                  <p className="text-tech-gray">ACCESS_LEVEL:</p>
                  <p className="text-tech-cyan">DELTA-<span className="text-tech-amber">3</span></p>
                  
                  <p className="text-tech-gray">SESSION_TOKEN:</p>
                  <p className="text-tech-amber">{Math.random().toString(36).substring(2, 6)}-{Math.random().toString(36).substring(2, 6)}</p>
                  
                  <p className="text-tech-gray">TERMINAL_NODE:</p>
                  <p className="text-tech-cyan">NEXUS-PRIME</p>
                  
                  <p className="text-tech-gray">GEOLOCATION:</p>
                  <p className="text-tech-purple">ENCRYPTED</p>
                  
                  <p className="text-tech-gray">CLEARANCE:</p>
                  <p className="text-tech-green">READ-ONLY</p>
                </div>
              </div>
              
              <p className="text-tech-red border-l-2 border-tech-red pl-2 text-xs">NOTICE: Your activity is being monitored by SENTINEL AI defense systems</p>
              <p className="text-tech-gray text-xs">Proceed with <span className="text-tech-green">help</span> command to access permitted operations</p>
            </div>
          )
        };
        break;
        
      case 'sudo':
      case 'su':
        setCommandHistory(prev => [...prev, {
          command: cmd,
          output: (
            <div className="flex items-center">
              <span className="text-tech-amber">[sudo] password for visitor: </span>
              <span className="w-2 h-4 bg-tech-gray animate-pulse ml-1"></span>
            </div>
          )
        }]);
        
      
        setTimeout(() => {
          setCommandHistory(prev => {
            const newHistory = [...prev];
            // Replace the last output with asterisks
            if (newHistory.length > 0) {
              newHistory[newHistory.length - 1] = {
                command: cmd,
                output: (
                  <div className="flex items-center">
                    <span className="text-tech-amber">[sudo] password for visitor: </span>
                    <span className="text-white">****</span>
                  </div>
                )
              };
            }
            return newHistory;
          });
        }, 800);
        
        setTimeout(() => {
          setCommandHistory(prev => {
            const newHistory = [...prev];
            if (newHistory.length > 0) {
              newHistory[newHistory.length - 1] = {
                command: cmd,
                output: (
                  <div className="flex items-center">
                    <span className="text-tech-amber">[sudo] password for visitor: </span>
                    <span className="text-white">*********</span>
                  </div>
                )
              };
            }
            return newHistory;
          });
        }, 1200);
        
        setTimeout(() => {
          setCommandHistory(prev => {
            const newHistory = [...prev];
            if (newHistory.length > 0) {
              newHistory[newHistory.length - 1] = {
                command: cmd,
                output: (
                  <div className="font-mono">
                    <div className="flex items-center">
                      <span className="text-tech-amber">[sudo] password for visitor: </span>
                      <span className="text-white">*********</span>
                    </div>
                  </div>
                )
              };
            }
            return newHistory;
          });
        }, 1500);

        setTimeout(() => {
          setCommandHistory(prev => [...prev, {
            command: '',
            output: (
              <div className="text-tech-amber mb-1">
                <p className="animate-pulse">[AUTHENTICATING...]</p>
              </div>
            )
          }]);
        }, 2000);
        
        setTimeout(() => {
          setCommandHistory(prev => [...prev, {
            command: '',
            output: (
              <div className="space-y-2">
                
                <div className="text-tech-red font-mono">
                  <p>[ACCESS_DENIED] Root privileges required</p>
                  <p className="mt-1">Authentication failure: 3 incorrect attempts</p>
                  <p className="mt-1">incident logged: {new Date().toISOString()}</p>
                </div>
                
                <div className="bg-black/40 border border-tech-red/40 p-2 mt-2 text-sm rounded">
                  <p className="text-tech-red font-bold">SECURITY ALERT:</p>
                  <p className="text-tech-amber">Unauthorized elevation attempt detected</p>
                  <p className="text-tech-gray text-xs mt-2">SENTINEL defense system has logged this activity</p>
                  <p className="text-tech-gray text-xs">Further attempts may result in system lockdown</p>
                </div>
                
                <div className="text-tech-green text-xs mt-2">
                  <p>{">"} To access permitted operations, use <span className="text-tech-cyan">help</span> command</p>
                </div>
              </div>
            ),
            isError: true
          }]);
        }, 3500); // Show error after 3.5 seconds to simulate complete authentication flow
        
      
        setInput("");
        return;

      case 'clear':
        result = {
          command: cmd,
          output: ""
        };
        setCommandHistory([]);
        break;

      case 'exit':
        result = {
          command: cmd,
          output: "Closing terminal..."
        };
        setTimeout(() => {
          onClose();
        }, 500);
        break;

      case 'open about':
        result = {
          command: cmd,
          output: "Opening About page..."
        };
        setTimeout(() => {
          window.location.href = '/about';
        }, 500);
        break;

      case 'open projects':
        result = {
          command: cmd,
          output: "Opening Projects page..."
        };
        setTimeout(() => {
          window.location.href = '/projects';
        }, 500);
        break;

      case 'open skills':
        result = {
          command: cmd,
          output: "Opening Skills page..."
        };
        setTimeout(() => {
          window.location.href = '/skills';
        }, 500);
        break;

      case 'open contact':
        result = {
          command: cmd,
          output: "Opening Contact page..."
        };
        setTimeout(() => {
          window.location.href = '/contact';
        }, 500);
        break;

      case 'open home':
        result = {
          command: cmd,
          output: "Opening Home page..."
        };
        setTimeout(() => {
          window.location.href = '/';
        }, 500);
        break;

      default:
        result = {
          command: cmd,
          output: `Command not found: ${cmd}. Type 'help' for available commands.`,
          isError: true
        };
    }

    setCommandHistory(prev => [...prev, result]);
    setInput("");
  };

  const handleMinimize = () => {
    setPrevMode(mode);
    setMode('minimized');
  };

  const handleMaximize = () => {
    if (mode === 'fullscreen') {
      setMode('windowed');
    } else {
      setPrevMode(mode);
      setPosition({ x: 0, y: 0 });
      setMode('fullscreen');
    }
  };

  const handleRestore = () => {
    const targetMode = prevMode === 'minimized' ? 'fullscreen' : prevMode;
    setMode(targetMode);
    
    if (targetMode === 'fullscreen') {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleDragStop = (e: any, data: { x: number, y: number }) => {
    setPosition({ x: data.x, y: data.y });
  };

  const terminalRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (mode === 'fullscreen' || !terminalRef.current) return;
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };


  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || mode === 'fullscreen' || !terminalRef.current) return;
    
    requestAnimationFrame(() => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const terminalRect = terminalRef.current?.getBoundingClientRect();
      const terminalWidth = terminalRect?.width || 800;
      const terminalHeight = terminalRect?.height || 500;
      
      const newX = Math.min(Math.max(0, e.clientX - startPos.x), viewportWidth - terminalWidth);
      const newY = Math.min(Math.max(0, e.clientY - startPos.y), viewportHeight - terminalHeight);
      
      setPosition({
        x: newX,
        y: newY
      });
    });
  }, [isDragging, startPos, mode]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={`fixed inset-0 z-50 ${mode === 'fullscreen' ? 'bg-black/70 backdrop-blur-md' : ''} 
            ${mode === 'minimized' ? 'pointer-events-none' : ''} transition-all duration-300`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget && mode === 'fullscreen') onClose();
          }}
        >
          <motion.div 
            ref={terminalRef}
            className={`${mode === 'fullscreen' ? 'fixed inset-0' : mode === 'minimized' ? 
              'fixed bottom-4 right-4 w-60 sm:w-64 h-12 pointer-events-auto' : 
              'w-full max-w-[90vw] sm:max-w-2xl md:max-w-3xl h-[80vh] sm:h-[70vh] mx-auto pointer-events-auto'} 
              bg-tech-dark/95 border ${mode === 'minimized' ? 'border-tech-amber/40' : 'border-tech-blue/30'} 
              rounded-md overflow-hidden ${mode === 'minimized' ? 'shadow-glow-amber' : 'shadow-glow-blue'} 
              flex flex-col transition-all duration-300 z-[9999]`}
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              ...(mode === 'windowed' ? {
                transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
              } : {
                // Explicitly reset transform when in fullscreen or minimized
                transform: 'translate3d(0px, 0px, 0px)'
              })
            }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ...(isDragging ? { type: 'tween', ease: 'linear' } : {})
            }}
            onClick={(e) => e.stopPropagation()}
            style={mode === 'windowed' ? { 
              position: 'absolute',
              transform: `translate3d(${position.x}px, ${position.y}px, 0px)`
            } : mode === 'fullscreen' ? { 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: 0,
              transform: 'none' // Explicitly reset transform
            } : mode === 'minimized' ? {
              transform: 'none' // Reset transform in minimized mode as well
            } : undefined}
          >

            <div 
              onMouseDown={handleMouseDown}
              className="terminal-handle bg-black/80 px-4 py-2 border-b border-tech-blue/20 flex items-center justify-between cursor-move">
              <div className="flex items-center gap-2">
                <button 
                  onClick={onClose}
                  className="h-3 w-3 rounded-full bg-tech-red hover:bg-tech-red/80 transition-colors duration-300 cursor-pointer"
                  aria-label="Close terminal"
                ></button>
                <button 
                  onClick={mode === 'minimized' ? handleRestore : handleMinimize}
                  className="h-3 w-3 rounded-full bg-tech-amber hover:bg-tech-amber/80 transition-colors duration-300 cursor-pointer"
                  aria-label={mode === 'minimized' ? 'Restore terminal' : 'Minimize terminal'}
                ></button>
                <button 
                  onClick={handleMaximize}
                  className="h-3 w-3 rounded-full bg-tech-green hover:bg-tech-green/80 transition-colors duration-300 cursor-pointer"
                  aria-label={mode === 'fullscreen' ? 'Restore terminal' : 'Maximize terminal'}
                ></button>
              </div>
              <div className="font-mono text-[10px] sm:text-xs text-tech-gray flex items-center gap-1.5">
                <span className="text-tech-purple">~/</span>
                <span>portfolio-terminal</span>
              </div>
              <div className="flex gap-2 text-tech-gray">
                {mode !== 'minimized' && (
                  <>
                    <button 
                      onClick={handleMinimize}
                      className="hover:text-tech-amber transition-colors"
                      aria-label="Minimize terminal"
                    >
                      <FiMinus className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={handleMaximize}
                      className="hover:text-tech-green transition-colors"
                      aria-label={mode === 'fullscreen' ? 'Restore terminal' : 'Maximize terminal'}
                    >
                      {mode === 'fullscreen' ? (
                        <FiMinimize2 className="h-4 w-4" />
                      ) : (
                        <FiMaximize2 className="h-4 w-4" />
                      )}
                    </button>
                    <button 
                      onClick={onClose}
                      className="hover:text-tech-red transition-colors"
                      aria-label="Close terminal"
                    >
                      <FiX className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
            

            {mode !== 'minimized' && (
              <div className="flex-1 overflow-y-auto p-2 sm:p-4 font-mono text-xs sm:text-sm md:text-sm scrollbar-thin scrollbar-thumb-tech-blue/30 scrollbar-track-black/20">
              {commandHistory.map((item, index) => (
                <div key={index} className="mb-3">
                  {item.command && (
                    <div className="flex items-center text-tech-gray">
                      <span className="text-tech-green mr-2">visitor@portfolio:~$</span>
                      <span className="text-tech-cyan">{item.command}</span>
                    </div>
                  )}
                  <div className={`mt-1 pl-5 ${item.isError ? 'text-tech-red' : 'text-white'}`}>
                    {item.output}
                  </div>
                </div>
              ))}
              
              <div className="flex items-center text-tech-gray">
                <span className="text-tech-green mr-2">visitor@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="bg-transparent border-none outline-none text-tech-cyan flex-1 focus:outline-none"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              <div ref={terminalEndRef} />
            </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
