import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

import { cn } from "../../lib/utils";

export type ProjectCard = {
  title: string;
  stack: string;
  description: string;
  highlight: string;
  cta: string;
  link: string;
  image: string;
};

export type AnimatedCardProps = {
  project: ProjectCard;
  index: number;
  activeIndex: number;
  totalCards: number;
  onHover: (index: number) => void;
  onClick: (index: number) => void;
  className?: string;
};

const HOVER_DELAY = 500;

function signedOffset(index: number, activeIndex: number, len: number) {
  let delta = index - activeIndex;
  const half = Math.floor(len / 2);
  if (delta > half) delta -= len;
  if (delta < -half) delta += len;
  return delta;
}

export function AnimatedCard({
  project,
  index,
  activeIndex,
  totalCards,
  onHover,
  onClick,
  className,
}: AnimatedCardProps) {
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const offset = signedOffset(index, activeIndex, totalCards);

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  const left = { x: -128, rotate: -6, scale: 0.9, zIndex: 30 };
  const center = { x: 0, rotate: 0, scale: 1.05, zIndex: 50 };
  const right = { x: 128, rotate: 6, scale: 0.9, zIndex: 30 };

  const slot = offset === 0 ? center : offset < 0 ? left : right;

  const finalX = slot.x;
  const finalRotate = slot.rotate;
  const finalScale = slot.scale;
  const finalZIndex = slot.zIndex;

  return (
    <motion.article
      layout
      onMouseEnter={() => {
        if (hoverTimerRef.current) {
          clearTimeout(hoverTimerRef.current);
        }
        hoverTimerRef.current = setTimeout(() => {
          onHover(index);
        }, HOVER_DELAY);
      }}
      onMouseLeave={() => {
        if (hoverTimerRef.current) {
          clearTimeout(hoverTimerRef.current);
          hoverTimerRef.current = null;
        }
      }}
      onClick={() => onClick(index)}
      animate={{
        x: finalX,
        rotate: finalRotate,
        scale: finalScale,
        zIndex: finalZIndex,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 26, mass: 0.75 }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "absolute left-1/2 top-1/2 h-[360px] sm:h-[410px] w-[248px] sm:w-[280px] -translate-x-1/2 -translate-y-1/2 origin-center overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-md transition-shadow duration-300 hover:shadow-2xl",
        className,
      )}
      aria-label={project.title}
    >
      <div className="relative flex h-full flex-col">
        <div className="relative h-24 sm:h-28 flex-none">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
        </div>
        <div className="flex h-full flex-1 flex-col p-3 sm:p-4">
          <p className="text-xs tracking-widest text-white/65">{project.stack}</p>
          <h3 className="mt-2 text-base sm:text-lg font-display font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-xs sm:text-sm leading-snug text-white/80">{project.description}</p>
          <p className="mt-2 text-[11px] sm:text-xs leading-snug text-white/60">{project.highlight}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-auto pt-2 inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-2 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            {project.cta}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
