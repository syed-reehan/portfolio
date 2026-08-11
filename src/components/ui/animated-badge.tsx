"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

type AnimatedBadgeProps = {
  text: string;
  color?: string;
  href?: string;
};

function hexToRgba(hexColor: string, alpha: number): string {
  const hex = hexColor.replace("#", "");
  if (hex.length === 3) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  if (hex.length === 6) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return hexColor;
}

export const AnimatedBadge = ({ text, color = "#22d3ee", href }: AnimatedBadgeProps) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 8, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="group relative flex max-w-fit items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-white"
    >
      <div
        className="relative flex h-2 w-2 items-center justify-center rounded-full"
        style={{ backgroundColor: hexToRgba(color, 0.4) }}
      >
        <div
          className="absolute h-2 w-2 animate-ping rounded-full"
          style={{ backgroundColor: color }}
        />
        <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      </div>
      <span className="text-xs font-semibold tracking-wide">{text}</span>
      {href ? <ChevronRight className="h-3.5 w-3.5 text-white/60" /> : null}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
