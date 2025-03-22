"use client";

import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUp,
  Code,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
  {
    icon: <Linkedin size={20} />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:amirhoseinabbasiamab@gmail.com",
    label: "Email",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-white pt-16 pb-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-500/20 to-transparent"></div>
      </div>

      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' d='M1,1 L19,1 L19,19 L1,19 L1,1 Z M0,0 L20,0 L20,20 L0,20 L0,0 Z'/%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      {/* Back to top button */}
      <div className="absolute right-6 top-6 z-10">
        <button
          onClick={scrollToTop}
          className="p-2.5 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm rounded-full border border-slate-700/50 hover:border-blue-500/30 text-slate-300 hover:text-blue-400 transition-all group shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp
            size={22}
            className="group-hover:-translate-y-1 transition-transform duration-300"
          />
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold mb-4 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Portfolio
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              A passionate Frontend Developer building modern and responsive
              websites and web applications with a focus on user experience and
              clean code.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-slate-800/70 hover:bg-slate-700/70 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 text-slate-300 hover:text-blue-400 transition-all hover:shadow-lg hover:shadow-blue-500/5"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-white flex items-center gap-2">
              <Code size={18} className="text-blue-400" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-white flex items-center gap-2">
              <Mail size={18} className="text-purple-400" />
              <span>Contact</span>
            </h3>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                <span>Tabriz </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                <span>Iran</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                <a
                  href="mailto:john.doe@example.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  amirhoseinabbasiamab@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                <a
                  href="tel:+15551234567"
                  className="hover:text-blue-400 transition-colors"
                >
                  +98 (914) 2347137
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Amirhosein Abbasi. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-sm mt-4 sm:mt-0">
            <span>Built with</span>
            <div className="flex gap-2 items-center px-2 py-1 rounded-full bg-slate-800/50 backdrop-blur-sm">
              <span className="text-blue-400 font-medium">Next.js</span>
              <span>+</span>
              <span className="text-blue-400 font-medium">Tailwind</span>
            </div>
            <ExternalLink size={14} className="ml-1 text-slate-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
