"use client";

import { useEffect, useState } from "react";
import { GRAND_PRIZE_BASE_RM } from "@/lib/constants";

function formatRm(n: number) {
  return `RM ${Math.round(n).toLocaleString("en-MY")}`;
}

/** Ease-in-out cubic: gentle start from 0, smooth finish on 10,000. */
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

/**
 * Home hero grand prize: animates from RM 0 up to the base amount on each visit.
 */
export function HomeGrandPrizeRm({ className }: { className?: string }) {
  const [label, setLabel] = useState(() => formatRm(0));

  useEffect(() => {
    let frameId = 0;
    const durationMs = 3200;
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = easeInOutCubic(t);
      const value = GRAND_PRIZE_BASE_RM * eased;
      setLabel(formatRm(value));
      if (t < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return <span className={className}>{label}</span>;
}
