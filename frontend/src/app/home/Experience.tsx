"use client";

import { motion } from "framer-motion";
import { Link2, Github, ArrowUpRight, Zap, Database, Smartphone, Cloud, MessageSquare } from "lucide-react";
import Section from "@/components/Section";

export default function Experience() {
  const experiences = [
    {
      role: "Associate L1 – Automation Engineer / Python Developer",
      company: "Astro Arun Pandit Pvt. Ltd.",
      date: "May 2024 – Present",
      logo: "🪐",
      bg: "bg-purple-100 text-purple-700 border-purple-200",
      description: "Leading automation initiatives and developing scalable backend systems for astrology tech products.",
      contributions: [
        { title: "Automation Workflows", detail: "Built flows using Zoho Flow + CRM + WhatsApp API reducing manual lead processing by 65%." },
        { title: "Data Pipelines", detail: "Developed Python & Selenium scripts for automated data scraping, cleaning & syncing." },
        { title: "Async Architecture", detail: "Implemented Celery-based async task queues for high-volume background jobs." },
        { title: "Internal Tools", detail: "Created Google Apps Script tools saving the operations team 20+ hours/month." },
      ]
    },
  ];

  return (
    <Section id="experience" variant="experience">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-16 text-center">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600">Journey</span>
        </h2>

        <div className="relative border-l-2 border-slate-900/10 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`absolute -left-[42px] md:-left-[74px] top-0 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md z-10 border-4 border-white ${exp.bg}`}>
                {exp.logo}
              </div>

              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                       <p className="text-lg font-medium text-slate-600">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold bg-white/80 text-slate-700 px-4 py-1.5 rounded-full mt-4 md:mt-0 w-max border border-slate-200/50">
                    {exp.date}
                  </span>
                </div>

                <p className="text-slate-700 mb-8 leading-relaxed max-w-3xl border-l-4 border-amber-300 pl-4">
                  {exp.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {exp.contributions.map((c, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 bg-white/50 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-amber-100">
                       <div className="mt-1 min-w-[8px] h-[8px] rounded-full bg-amber-400 shadow-sm"></div>
                       <div>
                         <h4 className="font-semibold text-slate-900 text-sm mb-1">{c.title}</h4>
                         <p className="text-sm text-slate-600 leading-snug">{c.detail}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
