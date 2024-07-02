"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About"), {
  ssr: false,
});
const Mine = dynamic(() => import("@/components/Mine"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
});
const Education = dynamic(() => import("@/components/Education"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#21213B] flex-col items-center justify-center p-24" >
      
      <div id="/">
        <Mine></Mine>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="skills">
        <Skills></Skills>
      </div>
      <div id="project">
        <Projects></Projects>
      </div>
      <div id="education">
        <Education></Education>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </main>
  );
}
