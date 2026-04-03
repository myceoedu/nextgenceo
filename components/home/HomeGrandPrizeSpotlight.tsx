"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import { HomeGrandPrizeRm } from "@/components/home/HomeGrandPrizeRm";
import { viewIn } from "@/components/motion-ui";

function GrandPrizeSpotlightBenefit({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <motion.div
      className="flex gap-4 md:gap-5"
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff8dc] via-[#e6c35c] to-[#9a7828] text-[#1a0f08] shadow-[0_6px_20px_rgba(212,175,55,0.45),inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ring-[#f4e4a8]/80 md:h-14 md:w-14 md:rounded-[1.1rem]">
        {icon}
      </span>
      <p className="min-w-0 pt-1 text-[15px] font-semibold leading-snug tracking-wide text-white/95 md:pt-1.5 md:text-lg md:leading-relaxed">
        {children}
      </p>
    </motion.div>
  );
}

/** Wide grand-prize showcase: metallic gold, Cinzel typography, shimmer + motion. */
export function HomeGrandPrizeSpotlight() {
  const t = useTranslations("HomeHero");
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={viewIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="relative mx-auto mb-12 w-full max-w-5xl sm:mb-14 md:mb-16 lg:mb-20"
    >
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_85%_65%_at_50%_18%,rgba(212,175,55,0.45),rgba(180,140,50,0.12)_45%,transparent_70%)] blur-2xl md:-inset-10 md:rounded-[2.5rem]",
          !reduceMotion ? "ngc-grand-prize-ambient" : "opacity-50",
        ].join(" ")}
      />

      <motion.div
        className="relative overflow-hidden rounded-[1.35rem] sm:rounded-3xl md:rounded-[1.75rem]"
        style={{
          boxShadow:
            "0 0 0 2px rgba(212,175,55,0.75), 0 0 0 1px rgba(255,248,220,0.35) inset, 0 0 120px rgba(212,175,55,0.28), 0 40px 100px rgba(8,6,20,0.5)",
        }}
        whileHover={
          reduceMotion
            ? undefined
            : {
                scale: 1.012,
                transition: { type: "spring", stiffness: 260, damping: 22 },
              }
        }
      >
        <div
          className="ngc-grand-prize-shimmer relative px-6 py-10 text-center sm:px-10 sm:py-12 md:px-14 md:py-16 lg:py-[4.25rem]"
          style={{
            backgroundImage: `linear-gradient(148deg, #4a3a12 0%, #8a6b28 14%, #b8942d 32%, #e0c24d 48%, #f2d56e 54%, #c9a227 68%, #8f7028 88%, #5c4518 100%)`,
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(165deg,rgba(255,255,255,0.42)_0%,transparent_38%,rgba(0,0,0,0.08)_100%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] opacity-30 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E")`,
            }}
          />

          <p className="font-grand-display relative z-[3] text-[11px] font-semibold uppercase tracking-[0.32em] text-[#1c1209]/88 sm:text-xs md:text-[13px] md:tracking-[0.36em]">
            {t("prizeEyebrow")}
          </p>
          <p className="font-grand-display relative z-[3] mt-4 text-[clamp(2.75rem,11.5vw,4.25rem)] font-bold leading-[0.88] tracking-[0.02em] text-[#120a06] sm:mt-5 sm:text-[clamp(3.1rem,12vw,4.85rem)] md:mt-6 md:text-[clamp(3.35rem,9.5vw,5.5rem)] lg:text-[5.75rem] [text-shadow:0_2px_0_rgba(255,245,200,0.45),0_0_60px_rgba(255,220,120,0.35),0_8px_24px_rgba(40,25,8,0.25)]">
            <HomeGrandPrizeRm className="tabular-nums" />
          </p>
          <p className="font-grand-display relative z-[3] mx-auto mt-4 max-w-xl text-[12px] font-semibold uppercase leading-snug tracking-[0.2em] text-[#1f140c] sm:mt-5 sm:text-sm md:mt-6 md:text-[15px] md:tracking-[0.22em]">
            {t("prizeSub")}
          </p>
        </div>

        <div className="relative grid gap-8 border-t-[3px] border-[#d4af37] bg-gradient-to-b from-[#050814] via-[#0a1028] to-[#060b1a] px-6 py-8 sm:px-10 sm:py-10 md:grid-cols-2 md:gap-10 md:px-12 md:py-12 lg:px-14 lg:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"
          />
          <GrandPrizeSpotlightBenefit
            icon={
              <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M8 6V4h8v2M8 6h8v14H8V6zM8 10h8M10 14h4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            }
          >
            {t("prizeDetailCerts")}
          </GrandPrizeSpotlightBenefit>
          <GrandPrizeSpotlightBenefit
            icon={
              <svg className="h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 3z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            {t("prizeDetailPajsk")}
          </GrandPrizeSpotlightBenefit>
        </div>
      </motion.div>
    </motion.div>
  );
}
