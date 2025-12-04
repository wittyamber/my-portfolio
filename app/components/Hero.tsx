"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <--- Import Image component

export default function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm dark:border-zinc-800 dark:bg-zinc-900 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available for Hire / Projects
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Juana Mae.
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg">
            I'm an IT Student and Developer building pixel-perfect web experiences. 
            I turn coffee into clean code and creative designs.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Link 
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <Link 
              href="/cv.pdf" 
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Download CV
              <Download className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center"
        >

           <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl -z-10"></div>
           
           <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl rotate-3 border-4 border-white dark:border-zinc-800 shadow-2xl overflow-hidden bg-zinc-100">
              <Image 
                src="/me.png" 
                alt="Juana Mae"
                fill
                className="object-cover"
                priority
              />
           </div>
        </motion.div>

      </div>
    </section>
  );
}