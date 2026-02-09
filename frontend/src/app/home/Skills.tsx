"use client";

import { motion } from "framer-motion";
import { Server, Layout, Brain, Cloud, Database, ExternalLink, GitBranch, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import Section from "@/components/Section";

const SKILLS = [
  {
    category: "Core Development",
    icon: Terminal,
    color: "bg-blue-100 text-blue-700 border-blue-200",
    skills: ["Python", "JavaScript", "Django", "React", "Next.js", "Node.js", "Express"],
  },
  {
    category: "Automation & AI",
    icon: Brain,
    color: "bg-purple-100 text-purple-700 border-purple-200",
    skills: ["Zoho Flow", "Zoho CRM", "Zapier", "Make", "Celery", "OpenAI API", "Power Automate"],
  },
  {
    category: "APIs & Integrations",
    icon: Server,
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
    skills: ["REST APIs", "WhatsApp API", "Google Apps Script", "CRM Integrations"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "bg-orange-100 text-orange-700 border-orange-200",
    skills: ["AWS", "Google Cloud", "Docker", "Git", "CI/CD", "Firebase"],
  },
  {
    category: "Databases",
    icon: Database,
    color: "bg-cyan-100 text-cyan-700 border-cyan-200",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Redis"],
  },
  {
    category: "Tools & Soft Skills",
    icon: Layout,
    color: "bg-pink-100 text-pink-700 border-pink-200",
    skills: ["Git/GitHub", "Jira", "Postman", "Agile", "Problem Solving", "Team Leadership"],
  }
];

export default function Skills() {
  return (
    <Section id="skills" variant="skills">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-block px-3 py-1 bg-white/50 border border-white/60 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-900 shadow-sm backdrop-blur-sm">
           Stack & Tools
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-indigo-900">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Proficiency</span>
        </h2>
        <p className="text-slate-700 max-w-xl mx-auto text-lg leading-relaxed">
           A versatile toolkit combining powerful backend logic with modern frontend frameworks and intelligent automation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {SKILLS.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-sm hover:shadow-xl hover:border-white/80 transition-all flex flex-col group"
            >
               <div className="flex items-center gap-4 mb-6">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform", cat.color)}>
                     <cat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{cat.category}</h3>
               </div>

               <div className="flex flex-wrap gap-2">
                  {cat.skills.map(s => (
                     <span key={s} className="bg-white/50 px-3 py-1.5 rounded-lg text-sm text-slate-700 font-medium border border-white/60 group-hover:border-white group-hover:bg-white transition-colors cursor-default">
                        {s}
                     </span>
                  ))}
               </div>
            </motion.div>
         ))}
      </div>
    </Section>
  );
}
