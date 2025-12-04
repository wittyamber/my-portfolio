"use client";

import { motion } from "framer-motion";

const skills = [
  "Next.js", "TypeScript", "Tailwind CSS", "Node.js", 
  "Git", "Figma", "Vercel", "JavaScript", 
  "HTML5", "Laravel", "CSS3", "MySQL"
];

export default function TechStack() {
  return (
    <section className="py-10 bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden">
      <div className="container mx-auto px-4 mb-6 text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Powering my builds
        </p>
      </div>

      {/* The Infinite Marquee Wrapper */}
      <div className="relative flex w-full overflow-hidden mask-linear-gradient">
        {/* We duplicate the list to create the infinite loop effect */}
        <motion.div
          className="flex min-w-full shrink-0 gap-8 py-2 px-4"
          animate={{ x: "-100%" }}
          transition={{
            duration: 20, // Speed of the scroll (higher = slower)
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-2xl font-bold text-zinc-400 dark:text-zinc-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-default whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </motion.div>
        
        {/* Second copy for seamless looping */}
        <motion.div
          className="flex min-w-full shrink-0 gap-8 py-2 px-4"
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 text-2xl font-bold text-zinc-400 dark:text-zinc-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-default whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}