"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { Menu, X, ChevronRight, Code, Download } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-900/80 backdrop-blur-lg py-3 shadow-xl shadow-slate-900/10"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative group"
        >
          <span className="inline-block">Portfolio</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-blue-400 relative group overflow-hidden flex items-center"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out"></span>
            </Link>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-full bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/50 hover:border-blue-500/30 text-slate-200 flex items-center gap-2 transition-all group"
          >
            <span>Resume</span>
            <Download
              size={16}
              className="text-blue-400 group-hover:translate-y-0.5 transition-transform"
            />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              className="md:hidden p-2 text-slate-200 bg-slate-800/70 rounded-md hover:bg-slate-700 transition-colors"
              aria-label="Open Menu"
            >
              <Menu size={22} />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-50" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50"
            />

            <Dialog.Content className="fixed top-0 right-0 h-full w-[300px] bg-slate-900/95 backdrop-blur-md z-50 border-l border-slate-800/70 shadow-2xl">
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="h-full"
              >
                <div className="flex justify-between items-center p-6 border-b border-slate-800/70">
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Menu
                  </span>
                  <Dialog.Close asChild>
                    <button
                      className="p-2 text-slate-400 hover:text-slate-200 bg-slate-800/70 rounded-md hover:bg-slate-700/80 transition-colors"
                      aria-label="Close Menu"
                    >
                      <X size={18} />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="p-6">
                  <nav className="flex flex-col space-y-5">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className="text-slate-300 hover:text-blue-400 py-2 flex items-center justify-between group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span>{link.name}</span>
                          <ChevronRight
                            size={16}
                            className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                          />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-10 pt-6 border-t border-slate-800/60">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white font-medium"
                    >
                      <span>Download Resume</span>
                      <Download size={16} />
                    </a>
                  </div>

                  <div className="mt-8 p-4 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2 text-slate-300">
                      <Code size={16} className="text-blue-400" />
                      <span className="text-sm font-medium">Get in touch</span>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Feel free to reach out for collaborations or just a
                      friendly chat.
                    </p>
                    <div className="mt-3">
                      <a
                        href="mailto:john.doe@example.com"
                        className="text-blue-400 text-sm hover:underline"
                      >
                        john.doe@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
};
