"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";

// Pre-define particle positions to avoid hydration mismatch
const particlePositions = [
  { top: "25%", left: "10%" },
  { top: "65%", left: "85%" },
  { top: "35%", left: "70%" },
  { top: "80%", left: "20%" },
  { top: "50%", left: "45%" },
];

// Pre-define animation durations and delays
const particleAnimations = [
  { duration: 6, delay: 0.3 },
  { duration: 8, delay: 1.2 },
  { duration: 7, delay: 0.7 },
  { duration: 9, delay: 0.1 },
  { duration: 6.5, delay: 1.8 },
];

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-16 bg-slate-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        <div className="absolute left-0 w-1/3 h-full bg-gradient-to-r from-blue-500/5 to-transparent"></div>
      </div>

      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' d='M1,1 L19,1 L19,19 L1,19 L1,1 Z M0,0 L20,0 L20,20 L0,20 L0,0 Z'/%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Floating elements with fixed positions */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/20"
            style={{
              top: position.top,
              left: position.left,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particleAnimations[i].duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particleAnimations[i].delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3 bg-slate-800/50 px-3 py-1 rounded-full">
            <MessageSquare className="h-4 w-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">
              Let&apos;s Talk
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Get In Touch
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out through the form below or via my contact
            details.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm z-0"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-800/60 shadow-xl z-10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Send className="w-5 h-5 mr-2 text-blue-400" />
                <span>Send Me a Message</span>
              </h3>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-colors resize-none"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center group">
                  <span>Send Message</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm z-0"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-800/60 shadow-xl z-10">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                  <span>Contact Information</span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800/80 rounded-lg text-blue-400">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Location</h4>
                      <p className="text-slate-400">Tabriz, Iran</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800/80 rounded-lg text-blue-400">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Email</h4>
                      <p className="text-slate-400">
                        <a
                          href="mailto:john.doe@example.com"
                          className="hover:text-blue-400 transition-colors"
                        >
                          amirhoseinabbasiamab@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800/80 rounded-lg text-blue-400">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Phone</h4>
                      <p className="text-slate-400">
                        <a
                          href="tel:+15551234567"
                          className="hover:text-blue-400 transition-colors"
                        >
                          +98 (914) 2347137
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/60">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800/80 rounded-lg text-purple-400">
                      <Clock size={22} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">
                        Availability
                      </h4>
                      <p className="text-slate-400 mb-2">
                        I&apos;m currently available for freelance work and
                        full-time positions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="hidden lg:flex justify-center mt-8 mb-3"
            >
              <div className="inline-flex gap-2 px-4 py-2 bg-slate-800/30 backdrop-blur-sm rounded-full border border-slate-700/50 text-slate-400 text-sm">
                <span>Response time:</span>
                <span className="text-blue-400 font-medium">
                  Usually within 24 hours
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
