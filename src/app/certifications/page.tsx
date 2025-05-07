"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";
import { FiExternalLink, FiAward } from "react-icons/fi";

export default function Certifications() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6">My Certifications</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-10">
          I'm committed to continuous learning and professional development. Here are some of the professional certifications I've earned.
        </p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 relative bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-900/10 dark:bg-blue-900/30"></div>
                <div className="relative z-10 text-white text-center p-6">
                  <FiAward className="h-12 w-12 mx-auto mb-2" />
                  <h3 className="text-xl font-semibold">{cert.issuer}</h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Issued: {cert.date}</span>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FiExternalLink className="h-4 w-4" /> Verify
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Why Certifications Matter</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Professional certifications validate my expertise and demonstrate my commitment to maintaining industry standards. They ensure I stay current with emerging technologies and best practices.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Beyond technical knowledge, these certifications also reflect my dedication to continuous learning and professional growth—qualities that I bring to every project and team.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
