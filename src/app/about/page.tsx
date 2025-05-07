"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload, FiChevronRight } from "react-icons/fi";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">
                Skander Benali | CTO & Co-founder at Infotexa
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With over 5 years of experience in web development, I've built a strong foundation in creating scalable, maintainable, and high-performance applications. As the CTO of Infotexa, I lead our technical strategy and empower our development team to deliver exceptional solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My journey began with a passion for solving complex problems through elegant solutions. Today, I combine my technical expertise with leadership skills to build innovative products that make a difference.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm deeply committed to staying at the forefront of technology, regularly experimenting with new tools and frameworks to find better ways to solve challenges.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">My Mission</h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "To create impactful technology solutions that solve real-world problems while fostering a culture of innovation, collaboration, and continuous improvement."
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  <FiDownload className="h-5 w-5" />
                  Download Resume
                </button>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6"
            >
              <div className="aspect-square rounded-lg mb-6 overflow-hidden">
                {/* Profile image */}
                <Image
                  src="/images/skander.jpg"
                  alt="Skander Benali"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium">
                    Location
                  </h4>
                  <p>San Francisco, CA</p>
                </div>
                <div>
                  <h4 className="text-sm uppercase text-gray-500 dark:text-gray-400 font-medium">
                    Email
                  </h4>
                  <a href="mailto:contact@infotexa.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    contact@infotexa.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Leadership & Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-medium mb-4">Team Leadership</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I excel at building and leading high-performing development teams, fostering a culture of collaboration, mentorship, and continuous improvement. My leadership approach emphasizes clear communication, knowledge sharing, and empowering team members to do their best work.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-medium mb-4">Communication</h3>
              <p className="text-gray-600 dark:text-gray-400">
                With experience bridging the gap between technical and non-technical stakeholders, I'm skilled at translating complex concepts into clear, actionable insights. This enables effective collaboration across teams and ensures everyone is aligned toward common goals.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-medium mb-4">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I approach challenges with a strategic mindset, breaking down complex problems into manageable components and developing innovative solutions. My analytical thinking combined with technical expertise allows me to resolve issues efficiently and effectively.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-medium mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Constantly exploring new technologies and methodologies, I drive innovation by identifying opportunities for improvement and implementing forward-thinking solutions. I encourage experimentation and creative thinking within my team.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          <div className="space-y-8 mb-16">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">CTO & Co-founder</h3>
                <span className="text-sm bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded">
                  2022 - Present
                </span>
              </div>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">Infotexa</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Leading the technical vision and strategy for Infotexa, overseeing software architecture, development operations, and technology infrastructure. Building and managing a talented engineering team while ensuring product reliability, security, and performance.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                  Team Leadership
                </span>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                  Software Architecture
                </span>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                  Technical Strategy
                </span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Lead Full-Stack Developer</h3>
                <span className="text-sm bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded">
                  2020 - 2022
                </span>
              </div>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">TechSolutions Inc.</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Led a team of developers in building enterprise-grade web applications. Designed and implemented scalable architectures, established coding standards, and mentored junior developers. Collaborated with product managers and designers to deliver high-quality software solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                  Full-Stack Development
                </span>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                  Team Mentorship
                </span>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                  Project Management
                </span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium">Senior Software Engineer</h3>
                <span className="text-sm bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 px-3 py-1 rounded">
                  2018 - 2020
                </span>
              </div>
              <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">Digital Innovations</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                Developed and maintained complex web applications using modern JavaScript frameworks and microservices architecture. Implemented CI/CD pipelines and enhanced application performance through optimization techniques. Participated in architecture discussions and code reviews.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                  Web Development
                </span>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                  DevOps
                </span>
                <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                  Performance Optimization
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
          >
            Explore My Skills <FiChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
