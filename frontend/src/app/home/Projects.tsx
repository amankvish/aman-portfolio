"use client";

import { motion } from "framer-motion";
import { Link2, Github, ArrowUpRight, Zap, Database, Smartphone, Cloud, MessageSquare } from "lucide-react";
import Section from "@/components/Section";

const PROJECTS = [
  {
    title: "Business Automation Suite",
    desc: "End-to-end automation platform handling 250+ daily triggers. Automates lead processing, CRM updates, and WhatsApp communication.",
    tech: ["Zoho Flow", "WhatsApp API", "OpenAI", "Node.js"],
    icon: Zap,
    color: "bg-indigo-50 border-indigo-100 text-indigo-600",
    metrics: ["55% Manual Work Reduced", "250+ Daily Triggers"],
    href: "#"
  },
  {
    title: "Online Book Store",
    desc: "Full-stack scalable marketplace with JWT authentication, secure payment gateways, and admin dashboard.",
    tech: ["Django", "React", "PostgreSQL", "Redux"],
    icon: Database,
    color: "bg-emerald-50 border-emerald-100 text-emerald-600",
    metrics: ["Secure Payments", "Admin Dashboard"],
    href: "#"
  },
  {
    title: "Weather & AQI IoT System",
    desc: "Real-time air quality monitoring system using IoT sensors and XGBoost ML models for pollution prediction.",
    tech: ["IoT (ESP32)", "Python ML", "XGBoost", "React"],
    icon: Cloud,
    color: "bg-cyan-50 border-cyan-100 text-cyan-600",
    metrics: ["Real-time Data", "ML Predictions"],
    href: "#"
  },
  {
    title: "EVsol – EV Charging Locator",
    desc: "Android app for discovering EV charging stations with live navigation.",
    tech: ["Java", "Google Maps API", "Android"],
    icon: Smartphone,
    color: "bg-orange-50 border-orange-100 text-orange-600",
    metrics: ["Live Navigation", "Maps Integration"],
    href: "#"
  },
  {
    title: "Smart Chat Automation Bot",
    desc: "AI-powered customer support bot using LangChain and OpenAI. Handles FAQs and webinar follow-ups 24/7.",
    tech: ["Python", "FastAPI", "LangChain", "OpenAI"],
    icon: MessageSquare,
    color: "bg-purple-50 border-purple-100 text-purple-600",
    metrics: ["24/7 Availability", "Context-Aware"],
    href: "#"
  }
];

export default function Projects() {
  return (
    <Section id="projects" variant="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
         <div>
            <div className="inline-block px-3 py-1 bg-teal-100/60 border border-teal-200 rounded-full text-xs font-semibold uppercase tracking-wider text-teal-800 mb-2 shadow-sm">
               Selected Work
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900">
              Showcase <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Projects</span>
            </h2>
         </div>
         
         <a 
           href="https://github.com/amankvish" 
           target="_blank"
           className="flex items-center gap-2 text-slate-600 hover:text-teal-700 font-medium transition-colors group"
         >
           View GitHub <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
         </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {PROJECTS.map((p, i) => (
           <motion.div
             key={p.title}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: i * 0.1 }}
             className="group relative bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 hover:shadow-2xl hover:shadow-teal-500/10 transition-all hover:-translate-y-1 flex flex-col h-full"
           >
              <div className="flex justify-between items-start mb-6">
                 <div className={`p-3 rounded-2xl transition-colors ${p.color}`}>
                    <p.icon className="w-6 h-6" />
                 </div>
                 <div className="p-2 bg-white rounded-full text-slate-400 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm">
                    <ArrowUpRight className="w-5 h-5" />
                 </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                 {p.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                 {p.desc}
              </p>

              <div className="space-y-4 pt-6 border-t border-slate-100 mt-auto">
                 <div className="flex flex-wrap gap-2">
                    {p.metrics.map(m => (
                       <span key={m} className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded border border-emerald-100 shadow-sm">
                          {m}
                       </span>
                    ))}
                 </div>
                 
                 <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => (
                       <span key={t} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded border border-slate-200/60">
                          {t}
                       </span>
                    ))}
                 </div>
              </div>
           </motion.div>
         ))}
      </div>
    </Section>
  );
}
