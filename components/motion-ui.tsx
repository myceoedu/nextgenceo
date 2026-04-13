"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const viewIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Vertical rhythm aligned with marketing sections (premium, not excessive). */
export const sectionY = "py-16 md:py-24";

export function ViewIn({
  children,
  className = "",
  viewport: viewportProp,
}: {
  children: React.ReactNode;
  className?: string;
  /** Override when a section needs earlier/larger in-view trigger (e.g. short blocks). */
  viewport?: { once?: boolean; amount?: number };
}) {
  const viewport = viewportProp ?? { once: true, amount: 0.12 };
  return (
    <motion.div
      variants={viewIn}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
