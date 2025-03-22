"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Clock,
  Code,
  Lightbulb,
  Users,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Clean Code",
    description:
      "I write clean, maintainable code following best practices and industry standards.",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Collaborative",
    description:
      "I thrive in team environments and enjoy working together to solve complex problems.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Problem Solver",
    description:
      "I approach challenges creatively and find efficient solutions to technical problems.",
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    title: "Deadline Oriented",
    description:
      "I prioritize tasks effectively to deliver high-quality work on schedule.",
  },
];

// Pre-define particle positions to avoid hydration mismatch
const particlePositions = [
  { top: "20%", left: "15%" },
  { top: "70%", left: "80%" },
  { top: "40%", left: "60%" },
  { top: "80%", left: "30%" },
  { top: "30%", left: "85%" },
  { top: "60%", left: "45%" },
  { top: "90%", left: "10%" },
  { top: "10%", left: "50%" },
];

// Pre-define animation durations and delays
const particleAnimations = [
  { duration: 5, delay: 0 },
  { duration: 7, delay: 1 },
  { duration: 6, delay: 0.5 },
  { duration: 8, delay: 1.5 },
  { duration: 5.5, delay: 0.2 },
  { duration: 7.5, delay: 0.8 },
  { duration: 6.5, delay: 1.2 },
  { duration: 5.8, delay: 0.4 },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
      </div>

      {/* Animated particles with fixed positions */}
      <div className="absolute inset-0 z-0">
        {particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/20"
            style={{
              top: position.top,
              left: position.left,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
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

      <div className="container mx-auto px-4 sm:px-6 md:px-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3 bg-slate-800/50 px-3 py-1 rounded-full">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              Discover My Story
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            About Me
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 text-base">
            Passionate frontend developer creating exceptional digital
            experiences with modern technologies , and graduated from university
            of Tabriz in Software Engineering field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl z-0"></div>
            <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 z-10">
              <Image
                src="/images/About-Me.jpg"
                alt="My Workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-blue-400 font-medium">
                    Amirhosein Abbasi
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Frontend Developer
                  </h3>
                  <div className="flex gap-2 mt-1">
                    <span className="px-2 py-0.5 bg-slate-800/70 rounded-full text-xs text-blue-300">
                      Next.js
                    </span>
                    <span className="px-2 py-0.5 bg-slate-800/70 rounded-full text-xs text-green-300">
                      React
                    </span>
                    <span className="px-2 py-0.5 bg-slate-800/70 rounded-full text-xs text-purple-300">
                      Tailwind
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Creating{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                beautiful web experiences
              </span>{" "}
              with modern technologies
            </h3>

            <p className="text-slate-300">
              I&apos;m a passionate Frontend Developer and specializing in
              building responsive and performant web applications with a focus
              on exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 transition duration-300 hover:bg-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="mb-2 p-1.5 inline-flex rounded-lg bg-slate-700/50 text-blue-400">
                      {feature.icon}
                    </div>
                    <h4 className="font-semibold text-base text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#projects"
                className="inline-flex items-center group mt-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
              >
                View my projects
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
