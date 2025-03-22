"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Code,
  Braces,
  Terminal,
  FileJson,
  Layers,
  PanelLeft,
} from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 md:px-8 flex items-center overflow-hidden bg-slate-950">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute top-1/4 right-1/3 w-60 h-60 bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      {/* Tech pattern elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-10 left-20 text-blue-500">
          <Code size={30} />
        </div>
        <div className="absolute top-32 left-40 text-purple-500 rotate-12">
          <Braces size={25} />
        </div>
        <div className="absolute top-60 left-10 text-indigo-500 -rotate-6">
          <Terminal size={20} />
        </div>
        <div className="absolute bottom-40 left-1/3 text-sky-500 rotate-45">
          <FileJson size={22} />
        </div>
        <div className="absolute top-1/3 right-10 text-violet-500 -rotate-12">
          <Layers size={28} />
        </div>
        <div className="absolute bottom-20 right-1/4 text-blue-500 rotate-6">
          <PanelLeft size={24} />
        </div>
      </div>

      {/* Floating technology labels */}
      <motion.div
        className="absolute top-1/4 left-1/4 bg-slate-800/50 text-blue-400 px-3 py-1 rounded-md text-sm font-medium z-0"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Next.js
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-1/3 bg-slate-800/50 text-blue-500 px-3 py-1 rounded-md text-sm font-medium z-0"
        animate={{
          y: [0, 15, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        TypeScript
      </motion.div>

      <motion.div
        className="absolute top-20 left-1/2 bg-slate-800/50 text-green-400 px-3 py-1 rounded-md text-sm font-medium z-20"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        React
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 bg-slate-800/50 text-purple-400 px-3 py-1 rounded-md text-sm font-medium z-20"
        animate={{
          y: [0, -12, 0],
          x: [0, 15, 0],
          rotate: [0, 4, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        Tailwind
      </motion.div>

      {/* Animated floating elements */}
      <motion.div
        className="absolute top-32 left-20 text-blue-500/20 z-0"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="h-10 w-10 rounded-md border border-blue-500/20 rotate-12"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 text-purple-500/20 z-0"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="h-12 w-12 rounded-full border border-purple-500/20"></div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-1/3 text-indigo-500/20 z-0"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="h-8 w-8 rounded-md border border-indigo-500/20 -rotate-12"></div>
      </motion.div>

      {/* Main content */}
      <div className="container mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium mb-6">
              Frontend Developer
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 relative">
                Amirhosein Abbasi
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 w-0"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.8,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-medium text-slate-300 mb-6">
              <span className="text-white">Frontend Developer</span> passionate
              about building beautiful web experiences
            </h2>

            <p className="text-slate-400 text-lg mb-8 max-w-xl">
              I create responsive websites and applications that provide users
              with an exceptional digital experience. Let&apos;s work together
              on your next project!
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="#projects">
                <Button className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  <span>View Projects</span>
                  <ArrowRight className="ml-2 h-5 w-6" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800 text-slate-300"
                >
                  Contact Me
                </Button>
              </Link>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://github.com/this-4mirho3ein"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600/20 rounded-full blur-xl z-0"></div>
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-purple-600/20 rounded-full blur-xl z-0"></div>

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden z-10">
                <div className="absolute inset-0 rounded-full shadow-xl z-0"></div>

                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <Image
                    src="/images/MyImage.jpg"
                    alt="Profile Photo"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/20 to-transparent mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
