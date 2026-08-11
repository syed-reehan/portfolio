import { motion } from "framer-motion";
import { AnimatedBadge } from "../ui/animated-badge";

const skillBuckets = [
  {
    title: "Technical & Core",
    color: "#22d3ee",
    items: [
      "Python (Algorithmic Logic)",
      "Data Structures",
      "HTML5 / CSS3",
      "Responsive UI Design",
      "Git / GitHub",
      "Terminal Operations",
    ],
  },
  {
    title: "AI & Automation",
    color: "#38bdf8",
    items: [
      "Prompt Engineering",
      "Google AI Studio",
      "LLM API Exploration",
      "Computational Logic",
      "Automation Workflows",
    ],
  },
  {
    title: "Productivity",
    color: "#67e8f9",
    items: [
      "High-Velocity Touch Typing",
      "Rapid Prototyping",
      "Independent Execution",
      "Technical Writing",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Skills &amp; Expertise</h2>
        <p className="mt-4 text-white/70 max-w-3xl">
          Compact capability map across engineering fundamentals, AI workflows, and fast execution.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillBuckets.map((bucket, idx) => (
            <motion.div
              key={bucket.title}
              className="rounded-xl border border-white/15 bg-white/5 p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-xl font-semibold">{bucket.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {bucket.items.map((item) => (
                  <AnimatedBadge key={item} text={item} color={bucket.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
