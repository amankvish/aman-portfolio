"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MessageSquare, ExternalLink } from "lucide-react";
import Section from "@/components/Section";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "amankvish2@outlook.com",
    href: "mailto:amankvish2@outlook.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 8869 948046",
    href: "tel:+918869948046",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@amankvish",
    href: "https://github.com/amankvish",
    color: "from-slate-700 to-slate-900"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Aman Vishwakarma",
    href: "https://linkedin.com/in/amankvish",
    color: "from-indigo-500 to-blue-600"
  }
];

export default function Contact() {
  return (
    <Section id="contact" variant="contact" className="overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN — MESSAGE & STATUS */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight">
              Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Connect</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-md leading-relaxed">
              Have an idea or a project? I&apos;ll help you build it—fast & reliable.
            </p>
          </div>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
             </span>
             <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Available for new projects</span>
          </div>

          <p className="text-lg italic text-slate-400 font-light">
            Let&apos;s create something amazing together ✨
          </p>
        </motion.div>

        {/* RIGHT COLUMN — CONTACT DETAILS */}
        <div className="space-y-4">
           {CONTACT_ITEMS.map((item, idx) => (
             <motion.a
               key={item.label}
               href={item.href}
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               whileHover={{ x: 10, scale: 1.02 }}
               className="group block relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all shadow-xl overflow-hidden"
             >
                {/* Glow Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex items-center gap-6 relative z-10">
                   <div className={`p-4 rounded-2xl bg-gradient-to-tr ${item.color} shadow-lg ring-4 ring-white/5 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                   </div>
                   
                   <div className="flex-1">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.value}</div>
                   </div>

                   <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-5 h-5 text-slate-500" />
                   </div>
                </div>
             </motion.a>
           ))}
        </div>
      </div>
    </Section>
  );
}
