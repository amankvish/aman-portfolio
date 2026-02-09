"use client";

import { motion } from "framer-motion";

export default function ColorfulBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-cyan-100 to-purple-100" />

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-30 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-1/2 -right-32 h-[380px] w-[380px] rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 blur-3xl"
        animate={{ x: [0, -80, 0], y: [0, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tech Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
    </div>
  );
}
