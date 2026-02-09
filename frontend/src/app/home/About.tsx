"use client";

import { motion } from "framer-motion";
import { Zap, Code, Server, Clock, Activity, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";
import Section from "@/components/Section";

const HIGHLIGHTS = [
  { 
    title: "Automation & Productivity", 
    desc: "Automated multi-step workflows using Zoho Flow + CRM + WhatsApp API, improving productivity by ~65%.",
    icon: Zap,
    color: "bg-amber-100/60 text-amber-700 border-amber-200"
  },
  { 
    title: "Scripting & Integrations",
    desc: "Built automation scripts combining Zoho CRM, Selenium, Python, and Google Apps Script.",
    icon: Code,
    color: "bg-indigo-100/60 text-indigo-700 border-indigo-200"
  },
  { 
    title: "Asynchronous Systems",
    desc: "Implemented Celery-based background processing for high-volume tasks.",
    icon: Server,
    color: "bg-emerald-100/60 text-emerald-700 border-emerald-200"
  },
  { 
    title: "Efficiency Gains",
    desc: "Designed internal CRM tools saving 20+ hours/month.",
    icon: Clock,
    color: "bg-rose-100/60 text-rose-700 border-rose-200"
  },
  { 
    title: "Web & Performance",
    desc: "Optimized a Next.js platform (Occult Gurukul) for performance & SEO.",
    icon: Activity,
    color: "bg-cyan-100/60 text-cyan-700 border-cyan-200"
  },
  { 
    title: "AI & NLP",
    desc: "Built summarizers and sentiment systems reducing lead processing time by ~40%.",
    icon: BrainCircuit,
    color: "bg-purple-100/60 text-purple-700 border-purple-200"
  }
];

export default function About() {
  return (
    <Section id="about" variant="about">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
           
           {/* Left: Bio & Code Block */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-10"
           >
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">
                   About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-500">Me</span>
                 </h2>
                 <p className="text-xl text-slate-700 font-light leading-relaxed">
                   Passionate developer crafting digital solutions. I focus on pragmatic solutions that <strong className="text-slate-900">reduce manual work</strong>, improve reliability, and scale.
                 </p>
              </div>

              <div className="prose prose-lg text-slate-700">
                <p>
                  Software Developer with <strong>1.5+ years of experience</strong> in Python development, full-stack engineering, automation systems, and API-driven integrations. Experienced in building scalable backend services, automating multi-step workflows, and creating responsive web applications using Django, React, Next.js, and AWS.
                </p>
                <p>
                  I leverage tools like <strong>Celery, Selenium, Zoho APIs, and WhatsApp Business API</strong> to automate operations and integrate cross-platform systems.
                </p>
              </div>

              {/* Code Snippet Card */}
              <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800 font-mono text-sm relative group overflow-hidden">
                 <div className="absolute top-0 right-0 bg-gradient-to-bl from-accent-cyan/20 to-transparent w-32 h-32 rounded-bl-full"></div>
                 
                 <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>

                 <div className="space-y-1 text-slate-300">
                    <p><span className="text-purple-400">class</span> <span className="text-yellow-300">SoftwareDeveloper</span>:</p>
                    <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</p>
                    <p className="pl-8">self.stack = [<span className="text-green-300">&quot;Python&quot;</span>, <span className="text-green-300">&quot;Django&quot;</span>, <span className="text-green-300">&quot;React&quot;</span>, <span className="text-green-300">&quot;Next.js&quot;</span>]</p>
                    <p className="pl-8">self.focus = <span className="text-green-300">&quot;Automation & scalable backend&quot;</span></p>
                    <br/>
                    <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">automate</span>(self, workflow):</p>
                    <p className="pl-8"><span className="text-purple-400">return</span> f<span className="text-green-300">&quot;Automated &#123;workflow&#125; -&gt; reduced manual effort&quot;</span></p>
                 </div>
              </div>

              <div className="italic text-slate-600 text-sm border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50/50 rounded-r-lg">
                 Nature Meets Tech — Blending natural inspiration with technical innovation
              </div>
           </motion.div>

           {/* Right: Feature Grid */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="grid sm:grid-cols-2 gap-6"
           >
              {HIGHLIGHTS.map((item, i) => (
                 <motion.div
                   key={item.title}
                   whileHover={{ y: -5, scale: 1.02 }}
                   transition={{ type: "spring", stiffness: 300 }}
                   className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm hover:shadow-lg transition-all group"
                 >
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6", item.color)}>
                       <item.icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-snug">{item.desc}</p>
                 </motion.div>
              ))}
           </motion.div>
        
        </div>
    </Section>
  );
}
