import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AnimatedCard } from "../ui/animated-card.tsx";

type Project = {
  title: string;
  stack: string;
  description: string;
  highlight: string;
  cta: string;
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Developer Portfolio Architecture",
    stack: "HTML5 • CSS3 • MODERN LAYOUTS",
    description:
      "A high-performance personal brand storefront designed from scratch to host and showcase live software assets and developer credentials.",
    highlight:
      "Emphasizes visual clean lines, responsive asset scaling, and direct integration with version control systems.",
    cta: "LIVE DEMO",
    link: "https://github.com/",
    image:
      "https://github.com/syed-reehan/portfolio/blob/main/public/Developer%20Portfolio%20LOGO.png?raw=true",
  },
  {
    title: "Algorithmic CLI Suite",
    stack: "PYTHON 3 • GIT • TERMINAL",
    description:
      "A collection of terminal-based Python utilities engineered to automate daily computing tasks through clean, optimized logic loops. Includes a secure password generator and interactive task registry.",
    highlight:
      "Focuses on strong foundational concepts like condition handles and robust error management without external frameworks.",
    cta: "REPO",
    link: "https://algorithmic-cli-suite-v3.vercel.app/",
    image:
      "https://github.com/syed-reehan/portfolio/blob/main/public/Algorithmic%20CLI%20Suite%20LOGO.png?raw=true",
  },
  {
    title: "AI-Driven Logic Explainer",
    stack: "PYTHON • GOOGLE AI STUDIO • MARKDOWN",
    description:
      "An interactive interface designed to parse complex operational instructions and break them down into structured pseudocode using LLM prompts. Active development.",
    highlight:
      "Demonstrates early exposure to prompt engineering frameworks and integrating AI utility solutions into developer workflows.",
    cta: "PREVIEW",
    link: "https://github.com/",
    image:
      "https://github.com/syed-reehan/portfolio/blob/main/public/AI-Driven%20Logic%20LOGO.png?raw=true",
  },
];

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(1);

 // Add the useEffect here (Line 58)
  useEffect(() => {
    const autoPlay = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000); 

    return () => clearInterval(autoPlay);
  }, [projects.length]);
  
 return (
    <section id="projects" className="relative w-full max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
      </div>

      <div className="relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Projects &amp; Research</h2>
        <p className="mt-4 max-w-3xl text-white/70">
          Selected builds focused on practical utility, clean architecture, and execution-driven
          learning.
        </p>

       <motion.div
  className="mt-10 flex justify-center items-center relative h-[480px] sm:h-[540px] w-full overflow-visible touch-pan-y cursor-grab active:cursor-grabbing"
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  dragElastic={0.2}
 onDragEnd={(_, info) => {
  const offset = info.offset.x;
  const velocity = info.velocity.x;
  const total = projects.length;

  if (offset < -50 || velocity < -500) {
    // Swiped left -> Next project (Loops back to 0 if at the end)
    setActiveIndex((prev) => (prev + 1) % total);
  } else if (offset > 50 || velocity > 500) {
    // Swiped right -> Previous project (Loops to the end if at 0)
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }
}}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45 }}
  viewport={{ once: true }}
>
  {projects.map((project, idx) => (
    <AnimatedCard
      key={project.title}
      project={project}
      index={idx}
      activeIndex={activeIndex}
      totalCards={projects.length}
      onHover={setActiveIndex}
      onClick={setActiveIndex}
      className={
        project.title === "Algorithmic CLI Suite"
          ? "h-[420px] sm:h-[470px] w-[248px] sm:w-[280px]"
          : "w-[248px] sm:w-[280px]"
      }
    />
  ))}
</motion.div> 
      </div>
    </section>
  );
}
