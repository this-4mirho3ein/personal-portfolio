"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardFooter } from "../ui/Card";
import { Github, Code, FolderGit2, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    image: "/images/project1.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application for task and project management with drag-and-drop functionality, user authentication, and real-time updates.",
    tags: ["React", "Firebase", "Framer Motion", "TypeScript"],
    image: "/images/project2.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    title: "Fitness Tracker",
    description:
      "A mobile-responsive fitness tracking application that allows users to record workouts, track progress, and set goals.",
    tags: ["React", "Chart.js", "Node.js", "Express"],
    image: "/images/project3.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/project4.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Weather Dashboard",
    description:
      "An interactive weather application that provides real-time forecasts, weather maps, and location-based alerts with a clean, intuitive interface.",
    tags: ["React", "API Integration", "Leaflet", "Redux"],
    image: "/images/project5.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    title: "Recipe Finder App",
    description:
      "A culinary discovery platform that helps users find recipes based on ingredients they have, with filtering options and step-by-step instructions.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Auth.js"],
    image: "/images/project6.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "from-rose-500/20 to-red-500/20",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full group bg-slate-900/50 backdrop-blur-sm border-slate-800/60 overflow-hidden hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col">
        <div className="relative h-52 w-full overflow-hidden">
          {/* Project image with gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
          />

          {/* Grid pattern with animation */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-20 group-hover:scale-110 transition-transform duration-700"></div>

          {/* Animated dots */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
                style={{
                  top: `${15 + i * 15}%`,
                  left: `${10 + i * 20}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="absolute top-4 left-4 p-2.5 bg-slate-900/60 backdrop-blur-sm rounded-full group-hover:bg-slate-900/80 transition-all duration-300 z-10">
            <FolderGit2 className="h-5 w-5 text-blue-400 group-hover:text-blue-300" />
          </div>

          {/* Project title overlay on image */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-slate-900/90 to-transparent">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="px-5 py-4 flex-grow flex flex-col">
          <p className="text-slate-300 mb-4 flex-grow text-sm leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-medium bg-slate-800/80 text-slate-300 rounded-full border border-slate-700/50 group-hover:border-blue-500/30 group-hover:text-blue-300 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <CardFooter className="justify-between border-t border-slate-800/80 bg-slate-900/70 py-3 px-5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={18} />
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>View Project</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative py-16 bg-slate-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
        <div className="absolute right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/5 to-transparent"></div>
      </div>

      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFFFFF' d='M1,1 L19,1 L19,19 L1,19 L1,1 Z M0,0 L20,0 L20,20 L0,20 L0,0 Z'/%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3 bg-slate-800/50 px-3 py-1 rounded-full">
            <Code className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              Latest Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            My Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases
            different skills and technologies that I&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800/50 hover:bg-slate-800 text-white rounded-full transition-colors border border-slate-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <Github className="h-5 w-5" />
            <span>See More on GitHub</span>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
