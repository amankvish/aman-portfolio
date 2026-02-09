"use client";

import Hero from "./home/Hero";
import About from "./home/About";
import Skills from "./home/Skills";
import Experience from "./home/Experience";
import Projects from "./home/Projects";
import Contact from "./home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
