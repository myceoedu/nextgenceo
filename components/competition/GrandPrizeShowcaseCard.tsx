"use client";

import { useState, type ReactNode } from "react";
import {
  GRAND_PRIZE_CARD_GOLD_BASE,
  GRAND_PRIZE_CARD_NAVY,
} from "@/lib/constants";

function BenefitTile({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex min-w-0 items-center gap-4">
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-amber-200/70 bg-gradient-to-br from-[#fff8e4] via-[#e8c85a] to-[#7a5c18] text-[#0A0E1A] shadow-[inset_0_2px_3px_rgba(255,255,255,0.55),inset_0_-2px_4px_rgba(90,60,15,0.35),0_4px_14px_rgba(0,0,0,0.35),0_0_24px_rgba(212,175,55,0.35)] md:h-12 md:w-12"
        aria-hidden
      >
        {icon}
      </span>
      <p className="min-w-0 font-sans text-sm font-bold leading-snug tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] md:text-base md:leading-snug">
        {children}
      </p>
    </div>
  );
}

type Props = {
  eyebrow: string;
  amount: ReactNode;
  subline: string;
  benefitCert: string;
  benefitPajsk: string;
};

const SHELF =
  "0 32px 64px -14px rgba(36, 28, 18, 0.28), 0 18px 36px -18px rgba(0, 0, 0, 0.22), 0 6px 16px -4px rgba(184, 147, 74, 0.12), 0 1px 0 rgba(255, 255, 255, 0.45) inset";

const SHELF_LIFT =
  "0 44px 88px -18px rgba(36, 28, 18, 0.34), 0 24px 48px -20px rgba(0, 0, 0, 0.28), 0 10px 28px -6px rgba(184, 147, 74, 0.2), 0 1px 0 rgba(255, 255, 255, 0.52) inset";

/**
 * Grand prize card — metallic / navy split with subtle 3D depth and hover lift for a premium, school-facing feel.
 */
export function GrandPrizeShowcaseCard({ eyebrow, amount, subline, benefitCert, benefitPajsk }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-6xl [perspective:1200px]">
      <div
        role="presentation"
        className={[
          "relative overflow-hidden rounded-[2rem] border border-[#c9a84a]/60 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          hovered
            ? "motion-safe:-translate-y-1.5 motion-safe:scale-[1.006] motion-reduce:translate-y-0 motion-reduce:scale-100"
            : "",
        ].join(" ")}
        style={{ boxShadow: hovered ? SHELF_LIFT : SHELF }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="grid min-h-[min(88vw,520px)] grid-rows-[7fr_3fr] md:min-h-[400px] lg:min-h-[420px]">
          {/* ——— Gold (~70%) ——— */}
          <div
            className="relative flex min-h-0 flex-col items-center justify-center border-b border-[#2c2214] px-6 py-12 text-center sm:px-10 sm:py-14 md:px-14 md:py-16"
            style={{
              background: GRAND_PRIZE_CARD_GOLD_BASE,
              boxShadow:
                "inset 0 3px 0 rgba(255, 255, 255, 0.38), inset 0 -18px 40px rgba(55, 38, 12, 0.22), inset 0 0 80px rgba(255, 235, 180, 0.08)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_70%_at_50%_-5%,rgba(255,250,235,0.55),transparent_50%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(200deg,transparent_38%,rgba(255,255,255,0.42)_49%,rgba(255,248,210,0.2)_52%,transparent_62%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-60"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent"
              aria-hidden
            />

            <p className="relative z-[1] font-[family-name:var(--font-grand-display)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1A1105]/88 [text-shadow:0_1px_0_rgba(255,255,255,0.25)] md:text-xs md:tracking-[0.32em]">
              {eyebrow}
            </p>
            <div
              className="relative z-[1] mt-5 font-[family-name:var(--font-grand-display)] text-[clamp(2.75rem,11vw,5rem)] font-bold leading-[0.92] tracking-tight text-[#0a1628] md:mt-6"
              style={{
                textShadow:
                  "0 1px 0 rgba(255, 255, 255, 0.18), 0 3px 6px rgba(0, 0, 0, 0.28), 0 8px 24px rgba(0, 0, 0, 0.12)",
              }}
            >
              {amount}
            </div>
            <p className="relative z-[1] mx-auto mt-6 max-w-xl font-[family-name:var(--font-grand-display)] text-[10px] font-semibold uppercase leading-snug tracking-[0.22em] text-[#1A1105]/85 [text-shadow:0_1px_0_rgba(255,255,255,0.2)] md:mt-7 md:text-[11px] md:tracking-[0.26em]">
              {subline}
            </p>
          </div>

          {/* ——— Navy (~30%) ——— */}
          <div
            className="relative flex min-h-0 items-center px-6 py-9 sm:px-10 md:px-16 md:py-10 lg:px-20 lg:py-11"
            style={{
              backgroundColor: GRAND_PRIZE_CARD_NAVY,
              boxShadow:
                "inset 0 10px 28px rgba(0, 0, 0, 0.42), inset 0 2px 0 rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-center gap-9 md:grid-cols-2 md:gap-12 lg:gap-16">
              <BenefitTile
                icon={
                  <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M8 6V4h8v2M8 6h8v14H8V6zM8 10h8M10 14h4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              >
                {benefitCert}
              </BenefitTile>
              <BenefitTile
                icon={
                  <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.9 7.2 17.9l.9-5.4L4.2 8.7l5.4-.8L12 3z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                {benefitPajsk}
              </BenefitTile>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
