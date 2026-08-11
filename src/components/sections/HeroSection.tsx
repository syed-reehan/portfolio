import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { LiquidMetal, liquidMetalPresets } from "@paper-design/shaders-react";
import { Button } from "../ui/button";

const titles = ["AI Utility Developer", "Tech Enthusiast", "Student", "Entrepreneur"];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => window.clearInterval(id);
  }, []);

  const activeTitle = useMemo(() => titles[index], [index]);

  return (
    <section
      id="home"
      className="relative w-full max-w-7xl mx-auto px-4 py-20 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <LiquidMetal {...liquidMetalPresets[2]} style={{ position: "absolute", inset: 0 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black" />
      </div>

      <div className="relative z-10 w-full text-center">
        <motion.p
          className="text-sm tracking-[0.35em] text-white/70"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          HELLO, WORLD
        </motion.p>
        <motion.h1
          className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          I&apos;m Syed Reehan
        </motion.h1>
        <div className="mt-8 h-14 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTitle}
              className="text-xl sm:text-2xl text-white/85"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
            >
              {activeTitle}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="rounded-full px-10 font-semibold"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            VIEW MY WORK
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
