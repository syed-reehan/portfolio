"use client";

import { LiquidMetal, liquidMetalPresets } from "@paper-design/shaders-react";
import { Button } from "./button";
import { Badge } from "./badge";
import { motion, AnimatePresence } from "framer-motion";

interface LiquidMetalHeroProps {
  badge?: string;
  greeting: string;
  title: string;
  rotatingTitles: string[];
  primaryCtaLabel: string;
  onPrimaryCtaClick: () => void;
}

export default function LiquidMetalHero({
  badge,
  greeting,
  title,
  rotatingTitles,
  primaryCtaLabel,
  onPrimaryCtaClick,
}: LiquidMetalHeroProps) {
  return (
    <div className="relative z-10 text-center space-y-8">
      {badge && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            variant="secondary"
            className="bg-white/10 text-white border-white/20 backdrop-blur-sm"
          >
            {badge}
          </Badge>
        </motion.div>
      )}

      <div className="space-y-5">
        <motion.p
          className="text-sm tracking-[0.35em] text-white/75"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {greeting}
        </motion.p>

        <motion.h1
          className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <div className="h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {rotatingTitles.map((item, idx) => (
              <motion.p
                key={`${item}-${idx}`}
                className="hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
              >
                {item}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="pt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            onClick={onPrimaryCtaClick}
            size="lg"
            className="rounded-full px-10 py-6 text-base font-semibold shadow-2xl"
          >
            {primaryCtaLabel}
          </Button>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <LiquidMetal {...liquidMetalPresets[2]} style={{ position: "absolute", inset: 0 }} />
      </div>
    </div>
  );
}
