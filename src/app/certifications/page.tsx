"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { FiExternalLink, FiAward, FiCheck, FiCode, FiServer } from "react-icons/fi";

export default function Certifications() {
  // Function to determine which icon to use for certificates based on issuer
  const getCertIcon = (issuer: string) => {
    const issuerLower = issuer.toLowerCase();
    if (issuerLower.includes('aws') || issuerLower.includes('amazon')) {
      return <FiServer className="text-tech-amber" />;
    } else if (issuerLower.includes('google')) {
      return <FiServer className="text-tech-cyan" />;
    } else if (issuerLower.includes('microsoft') || issuerLower.includes('azure')) {
      return <FiServer className="text-tech-blue" />;
    } else if (issuerLower.includes('kubernetes') || issuerLower.includes('cloud native')) {
      return <FiCode className="text-tech-purple" />;
    } else {
      return <FiAward className="text-tech-gray" />;
    }
  };

  // Function to get appropriate tech color for certificate
  const getCertColor = (issuer: string, type: 'text' | 'border' | 'bg' | 'glow') => {
    const issuerLower = issuer.toLowerCase();
    if (issuerLower.includes('aws') || issuerLower.includes('amazon')) {
      return type === 'text' ? 'text-tech-amber' : 
             type === 'border' ? 'border-tech-amber/30' : 
             type === 'bg' ? 'bg-tech-amber/10' : 'shadow-glow-amber';
    } else if (issuerLower.includes('google')) {
      return type === 'text' ? 'text-tech-cyan' : 
             type === 'border' ? 'border-tech-cyan/30' : 
             type === 'bg' ? 'bg-tech-cyan/10' : 'shadow-glow-cyan';
    } else if (issuerLower.includes('microsoft') || issuerLower.includes('azure')) {
      return type === 'text' ? 'text-tech-blue' : 
             type === 'border' ? 'border-tech-blue/30' : 
             type === 'bg' ? 'bg-tech-blue/10' : 'shadow-glow-blue';
    } else if (issuerLower.includes('kubernetes') || issuerLower.includes('cloud native')) {
      return type === 'text' ? 'text-tech-purple' : 
             type === 'border' ? 'border-tech-purple/30' : 
             type === 'bg' ? 'bg-tech-purple/10' : 'shadow-glow-purple';
    } else {
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
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-1 bg-tech-cyan animate-pulse"></div>
              <h1 className="text-3xl md:text-4xl font-mono text-white">PROFESSIONAL<span className="text-tech-cyan">_</span>CREDENTIALS</h1>
            </div>
            <p className="text-tech-gray font-light border-l border-tech-cyan/20 pl-4 ml-4 mt-4">
              I'm committed to continuous learning and professional development. These certifications validate my expertise and demonstrate my dedication to maintaining industry standards.
            </p>
          </div>

          {/* Certifications Grid - Tech Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-black/60 backdrop-blur-sm rounded-md overflow-hidden border ${getCertColor(cert.issuer, 'border')} hover:${getCertColor(cert.issuer, 'glow')} transition-all duration-300`}
              >
                {/* Terminal-style header */}
                <div className={`border-b ${getCertColor(cert.issuer, 'border')} px-4 py-2 flex items-center justify-between bg-black/40`}>
                  <div className="flex items-center gap-2">
                    {getCertIcon(cert.issuer)}
                    <h3 className={`font-mono text-sm ${getCertColor(cert.issuer, 'text')}`}>{cert.issuer.toUpperCase()}</h3>
                  </div>
                  <span className="text-xs font-mono text-tech-gray px-2 py-1 border border-tech-gray/20 rounded-sm">
                    {cert.date}
                  </span>
                </div>
                
                {/* Certificate content */}
                <div className="p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="mt-1 text-tech-gray"><FiCheck size={16} /></div>
                    <h3 className="text-white font-light">    
                      {cert.name}
                    </h3>
                  </div>
                  
                  {/* Verify link */}
                  {cert.url && (
                    <div className="flex justify-end mt-6">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 bg-black/60 ${getCertColor(cert.issuer, 'text')} border ${getCertColor(cert.issuer, 'border')} hover:border-opacity-60 px-3 py-1.5 rounded-sm font-mono text-xs transition-all duration-300 hover:${getCertColor(cert.issuer, 'glow')}`}
                      >
                        <FiExternalLink size={14} />
                        <span>VERIFY_CREDENTIAL</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Certifications Matter - Tech Style */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-4 w-1 bg-tech-purple animate-pulse"></div>
              <h2 className="text-xl font-mono text-white">WHY<span className="text-tech-purple">_</span>CERTIFICATIONS<span className="text-tech-purple">_</span>MATTER</h2>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-tech-purple/20 rounded-md p-6 hover:shadow-glow-purple transition-all duration-500">
              <p className="text-tech-gray font-light mb-4 border-l border-tech-purple/20 pl-4">
                Professional certifications validate my expertise and demonstrate my commitment to maintaining industry standards. They ensure I stay current with emerging technologies and best practices.
              </p>
              <p className="text-tech-gray font-light border-l border-tech-purple/20 pl-4">
                Beyond technical knowledge, these certifications also reflect my dedication to continuous learning and professional growth—qualities that I bring to every project and team.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
