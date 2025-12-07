"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo Area */}
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
           <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
             JuanaMae.
           </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#home" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-blue-500 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-blue-500 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-blue-500 transition-colors">Contact</Link>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-slate-900" />
          )}
        </button>
      </div>
    </nav>
  );
}