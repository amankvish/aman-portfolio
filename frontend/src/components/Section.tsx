import { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  variant:
    | "hero"
    | "about"
    | "skills"
    | "experience"
    | "projects"
    | "contact";
  className?: string;
};

const styles = {
  hero: {
    bg: "bg-gradient-to-br from-indigo-200 via-cyan-200 to-violet-200",
    text: "text-slate-900",
  },
  about: {
    bg: "bg-gradient-to-br from-emerald-100 via-sky-100 to-cyan-100",
    text: "text-slate-800",
  },
  skills: {
    bg: "bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100",
    text: "text-indigo-900",
  },
  experience: {
    bg: "bg-gradient-to-br from-orange-100 via-amber-100 to-rose-100",
    text: "text-slate-900",
  },
  projects: {
    bg: "bg-gradient-to-br from-teal-100 via-cyan-100 to-sky-100",
    text: "text-slate-900",
  },
  contact: {
    bg: "bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#0e7490]", // Deep indigo → violet → cyan
    text: "text-white",
  },
};

export default function Section({ id, variant, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-24 px-6 ${styles[variant].bg} ${styles[variant].text} ${className}`}
    >
      {/* Tech Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
