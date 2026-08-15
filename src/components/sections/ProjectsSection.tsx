import { type TouchEvent, useRef, useState } from "react";
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
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Algorithmic CLI Suite",
    stack: "PYTHON 3 • GIT • TERMINAL",
    description:
      "A collection of terminal-based Python utilities engineered to automate daily computing tasks through clean, optimized logic loops. Includes a secure password generator and interactive task registry.",
    highlight:
      "Focuses on strong foundational concepts like condition handles and robust error management without external frameworks.",
    cta: "REPO",
    link: "https://algorithmic-cli-suite.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
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
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
];

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const touchStartXRef = useRef<number | null>(null);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX;
    if (typeof touchEndX !== "number") {
      touchStartXRef.current = null;
      return;
    }

    const swipeDistance = touchEndX - touchStartXRef.current;
    const swipeThreshold = 40;

    if (Math.abs(swipeDistance) >= swipeThreshold) {
      setActiveIndex((currentIndex) =>
        swipeDistance < 0
          ? (currentIndex + 1) % projects.length
          : (currentIndex - 1 + projects.length) % projects.length,
      );
    }

    touchStartXRef.current = null;
  };

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
          className="mt-10 flex justify-center items-center relative h-[480px] sm:h-[540px] w-full overflow-visible"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => {
            touchStartXRef.current = null;
          }}
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
              className={project.title === "Algorithmic CLI Suite"
                ? "h-[420px] sm:h-[470px] w-[248px] sm:w-[280px]"
                : "w-[248px] sm:w-[280px]"}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
