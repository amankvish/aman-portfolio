"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Phone, Heart, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden rounded-t-[32px] mt-12 font-sans border-t border-white/5">
      
      {/* 🎨 Background: Deep Gradient & Tech Textures */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-violet-950 opacity-90"></div>
      
      {/* Slow Ambient Motion */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(79,70,229,0.25),transparent_60%)]"
      />

      <div className="container mx-auto px-6 max-w-7xl pt-12 pb-6 relative z-10">
        
        {/* 🧱 Main Structure */}
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          
          {/* 🔹 LEFT: Brand */}
          <div className="md:col-span-5 space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-3 group">
               <div className="relative w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-indigo-500/50 transition-all duration-300">
                 <span className="text-lg font-black font-heading bg-clip-text text-transparent bg-gradient-to-tr from-indigo-400 to-cyan-400">AV</span>
               </div>
               <div className="space-y-0.5">
                  <h3 className="text-xl font-bold font-heading text-white tracking-tight">Aman Vishwakarma</h3>
                  <p className="text-indigo-400 text-[11px] font-bold uppercase tracking-[0.15em]">Software Engineer & Automation Expert</p>
               </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Building scalable digital ecosystems with clean code and intelligent automation.
            </p>

            <div className="flex gap-3">
               <SocialLink href="https://github.com/amankvish" icon={Github} label="GitHub" />
               <SocialLink href="https://linkedin.com/in/amankvish" icon={Linkedin} label="LinkedIn" />
               <SocialLink href="https://twitter.com/aman_kvish" icon={Twitter} label="Twitter" />
            </div>
          </div>

          {/* 🔹 CENTER: Navigate */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-400">Navigate</h4>
            <nav className="flex flex-wrap md:flex-col gap-x-6 gap-y-2.5 justify-center md:justify-start">
               <FooterLink href="#home">Home</FooterLink>
               <FooterLink href="#about">About</FooterLink>
               <FooterLink href="#skills">Skills</FooterLink>
               <FooterLink href="#experience">Experience</FooterLink>
               <FooterLink href="#projects">Projects</FooterLink>
               <FooterLink href="#contact">Contact</FooterLink>
            </nav>
          </div>

          {/* 🔹 RIGHT: Contact */}
          <div className="md:col-span-4 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
             <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-400">Contact</h4>
             <div className="space-y-3 w-full md:w-auto">
                <a href="mailto:amankvish2@outlook.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-all group">
                   <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
                     <Mail className="w-4 h-4 text-indigo-400 group-hover:text-cyan-400" />
                   </div>
                   <span className="text-[13px] font-medium tracking-wide">amankvish2@outlook.com</span>
                </a>
                <a href="tel:+918869948046" className="flex items-center gap-3 text-slate-400 hover:text-white transition-all group">
                   <div className="w-8 h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all">
                     <Phone className="w-4 h-4 text-indigo-400 group-hover:text-cyan-400" />
                   </div>
                   <span className="text-[13px] font-medium tracking-wide">+91 8869 948046</span>
                </a>
             </div>
          </div>
        </div>

        {/* 🧾 BOTTOM BAR */}
        <div className="relative pt-6">
           <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent origin-center"></div>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-medium py-2">
             <p className="order-2 md:order-1 tracking-tight">
               &copy; {currentYear} Aman Vishwakarma
             </p>
             <p className="order-1 md:order-2 flex items-center gap-1.5 bg-white/5 border border-white/5 px-4 py-1 rounded-full backdrop-blur-sm group">
                Built with <Heart className="w-3 h-3 text-rose-500 fill-current animate-pulse" /> using Next.js
             </p>
             <div className="order-3 flex gap-6">
                <Link href="#" className="hover:text-indigo-400 transition-colors uppercase tracking-[0.1em] text-[10px]">Privacy Policy</Link>
                <Link href="#" className="hover:text-indigo-400 transition-colors uppercase tracking-[0.1em] text-[10px]">Terms of Service</Link>
             </div>
           </div>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-2xl transition-colors group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ y: -3, scale: 1.05 }}
      className="relative w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <Icon className="w-4 h-4 relative z-10" />
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 group w-max">
      <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
      <span className="text-[13px] font-medium tracking-wide group-hover:translate-x-0.5 transition-transform">{children}</span>
    </Link>
  );
}
