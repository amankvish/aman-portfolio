"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Home, User, Code, Briefcase, FolderGit2, MessageSquare } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4",
          scrolled ? "py-0" : "py-2"
        )}
      >
        <div className={cn(
          "container mx-auto max-w-5xl flex items-center justify-between rounded-full border transition-all duration-300",
          scrolled 
            ? "bg-white/70 backdrop-blur-xl border-white/40 shadow-lg py-3 px-6" 
            : "bg-white/30 backdrop-blur-md border-white/20 shadow-sm py-4 px-8"
        )}>
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
              <div className="relative w-full h-full bg-gradient-to-tr from-indigo-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold font-heading text-sm shadow-inner group-hover:scale-105 transition-transform duration-300">
                AV
                <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse"></span>
              </div>
            </div>
            <div className="flex flex-col">
               <span className="font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">Aman Vishwakarma</span>
               <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-2 group-hover:translate-y-0">Software Engineer</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-white/50 backdrop-blur-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                    isActive 
                      ? "bg-white text-indigo-600 shadow-sm" 
                      : "text-slate-600 hover:text-indigo-500 hover:bg-white/50"
                  )}
                >
                  <link.icon className={cn("w-4 h-4", isActive ? "text-indigo-500" : "text-slate-400")} />
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href="#contact" 
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-cyan-600 to-violet-600 hover:hue-rotate-15 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all active:scale-95"
            >
              Let&apos;s Talk ✨
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2.5 text-slate-700 bg-white/60 hover:bg-white rounded-full backdrop-blur transition-all active:scale-90"
            >
               {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Bottom Sheet-style Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsOpen(false)}
               className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[32px] shadow-2xl md:hidden overflow-hidden"
            >
               <div className="p-6 space-y-6 bg-gradient-to-b from-white to-slate-50">
                  <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-2" />
                  
                  <div className="grid grid-cols-2 gap-3">
                    {NAV_LINKS.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        onClick={() => setIsOpen(false)}
                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-indigo-50 border border-slate-100 transition-colors group"
                      >
                        <link.icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                        <span className="font-semibold text-slate-700 group-hover:text-indigo-700">{link.name}</span>
                      </Link>
                    ))}
                  </div>

                  <Link 
                    href="#contact" 
                    onClick={() => setIsOpen(false)}
                    className="flex justify-center items-center gap-2 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white p-4 rounded-2xl font-bold text-lg shadow-xl"
                  >
                    Let&apos;s Talk <MessageSquare className="w-5 h-5 fill-current" />
                  </Link>
                  
                  <div className="text-center text-xs text-slate-400 font-medium pb-2">
                     Designed by Aman Vishwakarma
                  </div>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
