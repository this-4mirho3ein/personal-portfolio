"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, ChevronRight } from "lucide-react";

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
];

const uiLibraries = [
  "Tailwind",
  "ShadCn UI",
  "Mantine",
  "Material UI",
  "React Bootstrap",
  "Daisy UI",
];

const stateManagement = ["Context API", "Redux Toolkit", "Zustand"];

const apiAndData = ["Zod", "Axios", "Tanstack Query", "Next-Auth", "MongoDB"];

const SkillTag = ({ name }: { name: string }) => {
  // Generate a randomized gradient from a set of predefined options
  const gradients = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-pink-400",
    "from-emerald-500 to-teal-400",
    "from-amber-500 to-orange-400",
    "from-rose-500 to-red-400",
    "from-indigo-500 to-blue-400",
  ];

  // Use hash of name to deterministically select a gradient
  const hashCode = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const gradientIndex = hashCode % gradients.length;
  const gradient = gradients[gradientIndex];

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -3,
        transition: { duration: 0.2 },
      }}
      className={`px-4 py-2 bg-slate-800/80 text-slate-200 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm border border-slate-700/50 hover:bg-gradient-to-r hover:${gradient} hover:text-white hover:border-transparent hover:shadow-xl hover:shadow-${
        gradient.split(" ")[0]
      }/20 transition-all duration-300 cursor-default`}
    >
      {name}
    </motion.span>
  );
};

const SkillCategory = ({
  title,
  skills,
  iconColor,
}: {
  title: string;
  skills: string[];
  iconColor: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-slate-900/60 backdrop-blur-sm p-6 rounded-xl border border-slate-800/50 shadow-lg hover:shadow-xl hover:border-slate-700/70 transition-all duration-300"
    >
      <h3 className="text-lg font-semibold text-white mb-5 flex items-center">
        <Sparkles className={`w-5 h-5 mr-2 ${iconColor}`} />
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <SkillTag name={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-slate-950 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-purple-500/10 to-transparent"></div>
        <div className="absolute left-0 top-1/4 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-3 bg-slate-800/70 px-4 py-1.5 rounded-full backdrop-blur-sm border border-slate-700/50">
            <Terminal className="h-4 w-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">
              Tech Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            My Skills
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            I&apos;ve acquired and refined various technical skills throughout
            my career. Here&apos;s an overview of the technologies I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          <SkillCategory
            title="Core Technologies"
            skills={frontendSkills}
            iconColor="text-blue-400"
          />

          <SkillCategory
            title="UI Libraries"
            skills={uiLibraries}
            iconColor="text-purple-400"
          />

          <SkillCategory
            title="State Management"
            skills={stateManagement}
            iconColor="text-green-400"
          />

          <SkillCategory
            title="API & Data"
            skills={apiAndData}
            iconColor="text-amber-400"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center group mt-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-400 font-medium hover:from-blue-500/20 hover:to-purple-500/20 hover:text-blue-300 transition-all duration-300"
          >
            See my projects
            <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
