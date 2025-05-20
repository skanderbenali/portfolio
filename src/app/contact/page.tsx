"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiTwitter, FiCodepen, FiMail, FiMapPin, FiCheck, FiX, FiLoader } from "react-icons/fi";

export default function Contact() {
  const [state, handleSubmit] = useForm("xgvkqzrg");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
              <div className="h-6 w-1 bg-tech-amber animate-pulse"></div>
              <h1 className="text-3xl md:text-4xl font-mono text-white">ESTABLISH<span className="text-tech-amber">_</span>CONNECTION</h1>
            </div>
            <p className="text-tech-gray font-light border-l border-tech-amber/20 pl-4 ml-4 mt-4">
              Have a project in mind or want to discuss collaboration opportunities? I'd love to hear from you. Use the connection form below or execute a direct command through socials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Form - Tech Style */}
            <div className="md:col-span-2 bg-black/30 backdrop-blur-sm border border-tech-blue/30 rounded-md overflow-hidden p-0">
              {/* Terminal-style header */}
              <div className="border-b border-tech-blue/30 px-4 py-2 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-tech-red"></div>
                  <div className="h-3 w-3 rounded-full bg-tech-amber"></div>
                  <div className="h-3 w-3 rounded-full bg-tech-green"></div>
                </div>
                <h3 className="font-mono text-sm text-tech-gray">./send_message.sh</h3>
                <div className="w-20"></div> {/* Spacer to balance the header */}
              </div>

              {/* Form content */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-mono text-tech-cyan"
                    >
                      NAME<span className="text-tech-amber">_</span>IDENTIFIER
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-tech-blue/40 rounded-sm focus:border-tech-blue focus:ring-1 focus:ring-tech-blue bg-black/50 text-white font-light placeholder:text-tech-gray/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-mono text-tech-cyan"
                    >
                      RETURN<span className="text-tech-amber">_</span>ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-tech-blue/40 rounded-sm focus:border-tech-blue focus:ring-1 focus:ring-tech-blue bg-black/50 text-white font-light placeholder:text-tech-gray/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-mono text-tech-cyan"
                  >
                    COMMUNICATION<span className="text-tech-amber">_</span>SUBJECT
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-tech-blue/40 rounded-sm focus:border-tech-blue focus:ring-1 focus:ring-tech-blue bg-black/50 text-white font-light appearance-none"
                    style={{ background: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath stroke=%27%2394a3b8%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E") no-repeat right 0.5rem center/1.5em, transparent' }}
                  >
                    <option value="" className="bg-tech-dark">Select subject</option>
                    <option value="general" className="bg-tech-dark">General Inquiry</option>
                    <option value="project" className="bg-tech-dark">Project Proposal</option>
                    <option value="job" className="bg-tech-dark">Job Opportunity</option>
                    <option value="other" className="bg-tech-dark">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-mono text-tech-cyan"
                  >
                    MESSAGE<span className="text-tech-amber">_</span>PAYLOAD
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-tech-blue/40 rounded-sm focus:border-tech-blue focus:ring-1 focus:ring-tech-blue bg-black/50 text-white font-light placeholder:text-tech-gray/50"
                  ></textarea>
                </div>

                <div className="space-y-2 mt-4">
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                    className="text-tech-red text-sm font-mono border-l-2 border-tech-red pl-2 py-1"
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-tech-red text-sm font-mono border-l-2 border-tech-red pl-2 py-1"
                  />
                  <ValidationError 
                    prefix="Subject" 
                    field="subject"
                    errors={state.errors}
                    className="text-tech-red text-sm font-mono border-l-2 border-tech-red pl-2 py-1"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-tech-red text-sm font-mono border-l-2 border-tech-red pl-2 py-1"
                  />
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-5 py-2.5 bg-black/60 text-tech-blue border border-tech-blue/40 hover:border-tech-blue hover:shadow-glow-blue rounded-sm flex items-center gap-2 transition-all duration-300 font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {state.submitting ? (
                      <>
                        <div className="animate-spin h-4 w-4 border-2 border-tech-blue border-t-transparent rounded-full mr-2"></div>
                        TRANSMITTING<span className="animate-pulse">...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND<span className="text-tech-amber">_</span>MESSAGE</span> <FiSend className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {state.succeeded && (
                  <div className="p-4 border border-tech-green/30 bg-tech-green/10 text-tech-green rounded-sm flex items-start gap-3 animate-fadeIn">
                    <div className="mt-1"><FiCheck size={16} /></div>
                    <div>
                      <p className="font-mono text-sm mb-1">MESSAGE_SENT_SUCCESSFULLY</p>
                      <p className="text-tech-gray font-light text-sm">Your message has been transmitted. I'll establish contact soon!</p>
                    </div>
                  </div>
                )}

                {state.errors && state.errors.length > 0 && (
                  <div className="p-4 border border-tech-red/30 bg-tech-red/10 text-tech-red rounded-sm flex items-start gap-3 animate-fadeIn">
                    <div className="mt-1"><FiX size={16} /></div>
                    <div>
                      <p className="font-mono text-sm mb-1">TRANSMISSION_ERROR</p>
                      <p className="text-tech-gray font-light text-sm">Connection failed. Please check the form and retry.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information - Tech Style */}
            <div>
              <div className="bg-black/40 backdrop-blur-sm border border-tech-cyan/30 rounded-md overflow-hidden hover:shadow-glow-cyan transition-all duration-300 h-full">
                {/* Terminal-style header */}
                <div className="border-b border-tech-cyan/30 px-4 py-2 flex items-center justify-between bg-black/40">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-tech-cyan"></div>
                  </div>
                  <h3 className="font-mono text-sm text-tech-gray">contact_points.json</h3>
                  <div className="w-8"></div> {/* Spacer to balance the header */}
                </div>
                
                <div className="p-5 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-3 w-1 bg-tech-cyan"></div>
                      <h3 className="font-mono text-sm text-white">CONTACT<span className="text-tech-cyan">_</span>INFO</h3>
                    </div>
                    
                    <div className="space-y-4 ml-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-tech-cyan"><FiMail size={16} /></div>
                        <div>
                          <h4 className="text-xs font-mono text-tech-gray mb-1">
                            EMAIL_ADDRESS
                          </h4>
                          <a
                            href="mailto:skander.benali@infotexa.com"
                            className="text-white hover:text-tech-cyan transition-colors"
                          >
                            skander.benali@infotexa.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="mt-1 text-tech-cyan"><FiMapPin size={16} /></div>
                        <div>
                          <h4 className="text-xs font-mono text-tech-gray mb-1">
                            LOCATION_COORDS
                          </h4>
                          <p className="text-white">Tunis, Tunisia</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-3 w-1 bg-tech-cyan"></div>
                      <h3 className="font-mono text-sm text-white">SOCIAL<span className="text-tech-cyan">_</span>ENDPOINTS</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 ml-4">
                      <a
                        href="https://github.com/skanderbenali"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-tech-gray/30 bg-black/30 hover:border-tech-cyan hover:text-tech-cyan hover:shadow-glow-cyan rounded-md text-tech-gray transition-all duration-300"
                        aria-label="GitHub"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/skander-benali/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-tech-gray/30 bg-black/30 hover:border-tech-blue hover:text-tech-blue hover:shadow-glow-blue rounded-md text-tech-gray transition-all duration-300"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin size={20} />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-tech-gray/30 bg-black/30 hover:border-tech-cyan hover:text-tech-cyan hover:shadow-glow-cyan rounded-md text-tech-gray transition-all duration-300"
                        aria-label="Twitter"
                      >
                        <FiTwitter size={20} />
                      </a>
                      <a
                        href="https://codepen.io/Skander-Ben-Ali/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-tech-gray/30 bg-black/30 hover:border-tech-purple hover:text-tech-purple hover:shadow-glow-purple rounded-md text-tech-gray transition-all duration-300"
                        aria-label="CodePen"
                      >
                        <FiCodepen size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-tech-gray/20">
                    <div className="p-4 bg-black/50 border border-tech-amber/20 rounded-sm">
                      <p className="text-tech-gray text-sm font-light">
                        <span className="text-tech-amber font-mono">NOTE:</span> Response time is typically within
                        24-48 hours. For urgent matters, direct contact through social channels is recommended.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
