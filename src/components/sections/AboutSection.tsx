import { motion } from "framer-motion";
import { MagicText } from "../ui/magic-text";
import { TiltCard } from "../ui/tilt-card";

const focusPoints = [
  "Writing clean logic and mastering foundational engineering principles.",
  "Building independent scripts, web utilities, and exploring automated systems.",
  "Connecting with fellow builders, founders, and tech operators.",
];

export function AboutSection() {
  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">About Me</h2>
        <p className="mt-6 max-w-4xl text-white/85 text-lg leading-8">
          I am a developer, builder, and engineering student with a deep fascination for turning
          logic into functional software. Currently, I am pursuing a dual-path academic journey: a
          Bachelor&apos;s in Engineering alongside a BS in Data Science and Applications from IIT
          Madras.
        </p>

        <div className="mt-10 max-w-5xl">
          <MagicText text="Education without execution is just noise. While I value academic foundations, I believe true learning happens when code meets a live server. I don't just want to study systems; I want to build them." />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusPoints.map((point, idx) => (
            <motion.div
              key={point}
              className="h-full"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <TiltCard className="h-full rounded-xl border border-white/15 bg-white/5 p-6 flex">
                <div className="flex h-full flex-1 items-center">
                  <p className="text-white/85 leading-7">{point}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
