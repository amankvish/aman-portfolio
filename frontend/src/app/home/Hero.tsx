"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Activity, Code2, Database, Layers, Cloud, Lock, Play, Zap } from "lucide-react";
import Section from "@/components/Section";

const TECH_STACK = [
  { icon: Code2, label: "Python" },
  { icon: Layers, label: "Django" },
  { icon: Activity, label: "React" },
  { icon: Database, label: "Next.js" },
  { icon: Layers, label: "AWS" },
];

export default function Hero() {
  return (
    <Section id="home" variant="hero" className="flex items-center min-h-screen pt-32 pb-20 overflow-hidden relative">
      
      {/* 🖌️ MULTI-LAYER ANIMATED BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Gradient Mesh */}
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-cyan-100/30 to-violet-100/40 mix-blend-multiply"></div>
         
         {/* Slow Abstract Waves */}
         <motion.div 
           animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-indigo-300/20 to-purple-300/20 blur-[120px]"
         ></motion.div>
         <motion.div 
           animate={{ rotate: [0, -5, 0], scale: [1, 1.1, 1] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-cyan-300/20 to-emerald-300/20 blur-[120px]"
         ></motion.div>

         {/* Circuit Line Pattern */}
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* LEFT SIDE: TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-2">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-white/60 backdrop-blur-sm text-sm font-semibold text-indigo-700 shadow-sm"
             >
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
               </span>
               Available for new roles
             </motion.div>
             
             <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tight leading-[1.05] text-slate-900">
               <span className="block">Aman</span>
               <span className="block relative">
                 <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-cyan-500 to-violet-600">Vishwakarma</span>
                 <span className="absolute -bottom-2 left-0 w-full h-4 bg-indigo-200/50 -z-10 -rotate-1 rounded-full blur-sm"></span>
               </span>
             </h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-medium text-slate-700 leading-tight md:max-w-xl"
          >
             Building <span className="font-bold text-slate-900 border-b-4 border-cyan-200">scalable apps</span> & <span className="font-bold text-slate-900 border-b-4 border-purple-200">automation</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-2"
          >
             {TECH_STACK.map((tech, i) => (
               <motion.div
                 key={tech.label}
                 whileHover={{ scale: 1.05 }}
                 className="px-4 py-1.5 rounded-full bg-white/60 border border-white/60 shadow-sm text-sm font-semibold text-slate-600 backdrop-blur-sm flex items-center gap-2 cursor-default"
               >
                 <tech.icon className="w-3.5 h-3.5" /> {tech.label}
               </motion.div>
             ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl text-slate-600 leading-relaxed max-w-lg"
          >
            I design, automate, and scale real systems — with clarity, creativity, and engineering discipline.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-full font-bold text-lg shadow-xl shadow-indigo-500/20 hover:-translate-y-1 transition-all flex items-center gap-2 group"
            >
              Explore Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="/resume.pdf" 
              download 
              className="px-8 py-4 bg-white/50 hover:bg-white text-slate-900 border border-white/60 rounded-full font-bold text-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              Download CV <Download className="w-5 h-5" />
            </a>
          </motion.div>
          
          {/* Stats Row */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.4 }}
             className="flex gap-8 pt-8 border-t border-indigo-100/50 max-w-md"
          >
             <div>
                <div className="text-2xl font-bold text-slate-900">1.5+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Years</div>
             </div>
             <div>
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Projects</div>
             </div>
             <div>
                <div className="text-2xl font-bold text-slate-900">60%</div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Efficiency</div>
             </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: DEVELOPER SYSTEM FRAME */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative hidden lg:flex justify-center items-center h-[600px] w-full perspective-1000"
        >
           {/* Rotating Core Ring */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="absolute w-[400px] h-[400px] rounded-full border border-indigo-200/40 border-dashed"
           ></motion.div>
           <motion.div 
             animate={{ rotate: -360 }}
             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
             className="absolute w-[550px] h-[550px] rounded-full border border-cyan-200/30 border-dashed opacity-50"
           ></motion.div>

           {/* Central Core Node */}
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-20"
           >
              {/* Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
              
              <div className="relative w-48 h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-100">
                 <Image 
                   src="/img/amankvish.jpg" 
                   alt="Aman Vishwakarma" 
                   fill 
                   className="object-cover"
                   priority
                 />
              </div>
              
              {/* Status Badge attached to Core */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 whitespace-nowrap">
                 <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                 <span className="text-xs font-bold text-slate-700">System Online</span>
              </div>
           </motion.div>

           {/* Floating System Panels (Orbiting) */}
           <SystemPanel 
              icon={Zap} 
              label="Automation" 
              color="text-amber-500" 
              bg="bg-amber-50"
              x={-180} y={-100} delay={0} 
           />
           <SystemPanel 
              icon={Cloud} 
              label="Cloud" 
              color="text-sky-500" 
              bg="bg-sky-50"
              x={180} y={-80} delay={1} 
           />
           <SystemPanel 
              icon={Database} 
              label="Backend" 
              color="text-emerald-500" 
              bg="bg-emerald-50"
              x={-160} y={120} delay={2} 
           />
           <SystemPanel 
              icon={Activity} 
              label="Performance" 
              color="text-rose-500" 
              bg="bg-rose-50"
              x={170} y={100} delay={3} 
           />

           {/* Connector Lines (SVG) */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
              <motion.path 
                d="M 50% 50% L 30% 35%" 
                stroke="url(#grad1)" 
                strokeWidth="1.5" 
                fill="none" 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.path 
                d="M 50% 50% L 70% 38%" 
                stroke="url(#grad1)" 
                strokeWidth="1.5" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              />
              <motion.path 
                d="M 50% 50% L 32% 65%" 
                stroke="url(#grad1)" 
                strokeWidth="1.5" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.4 }}
              />
              <motion.path 
                d="M 50% 50% L 68% 62%" 
                stroke="url(#grad1)" 
                strokeWidth="1.5" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.6 }}
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                  <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                </linearGradient>
              </defs>
           </svg>

        </motion.div>

      </div>
    </Section>
  );
}

function SystemPanel({ icon: Icon, label, color, bg, x, y, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        delay: 1 + delay * 0.2 
      }}
      className={`absolute z-20 flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/60 hover:scale-105 transition-transform cursor-default group`}
      style={{ left: "50%", top: "50%" }} // Centered initially, then moved by x/y
    >
      <div className={`p-2 rounded-lg ${bg}`}>
         <Icon className={`w-5 h-5 ${color}`} />
      </div>
      <div>
         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">System</div>
         <div className="text-sm font-bold text-slate-800">{label}</div>
      </div>
      <div className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-indigo-500 transition-colors"></div>
    </motion.div>
  )
}