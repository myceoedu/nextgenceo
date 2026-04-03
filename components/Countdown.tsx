"use client";

import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { GOLD_DEEP } from "@/lib/constants";

function format2(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown({
  targetIso,
  label,
  embedded,
}: {
  targetIso: string;
  label: string;
  /** Flatter styling when nested inside a minimal hero panel */
  embedded?: boolean;
}) {
  const t = useTranslations("Countdown");
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso]);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const kickoff = window.setTimeout(() => setNow(Date.now()), 0);
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => {
      window.clearTimeout(kickoff);
      window.clearInterval(id);
    };
  }, []);

  const diff = now === null ? null : Math.max(0, target - now);
  const totalSeconds = diff === null ? null : Math.floor(diff / 1000);
  const days =
    totalSeconds === null ? null : Math.floor(totalSeconds / (60 * 60 * 24));
  const hours =
    totalSeconds === null ? null : Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes =
    totalSeconds === null ? null : Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds === null ? null : totalSeconds % 60;

  const shell = embedded
    ? "rounded-none border-0 bg-transparent p-0"
    : "rounded-3xl border border-white/14 bg-white/[0.06] p-5 md:p-6";

  const cellShell = embedded
    ? "rounded-lg border border-white/[0.18] bg-black/60 px-1.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:px-2 md:py-2.5"
    : "rounded-2xl border border-white/12 bg-white/[0.05] px-3 py-3";

  return (
    <div className={shell}>
      <div
        className={[
          "font-semibold uppercase leading-snug tracking-[0.14em] text-white/82",
          embedded
            ? "text-[10px] font-bold tracking-[0.14em] text-white/75 md:text-[11px] md:tracking-[0.16em]"
            : "text-sm font-bold tracking-[0.12em]",
        ].join(" ")}
      >
        {label}
      </div>
      <div className={embedded ? "mt-4 grid grid-cols-4 gap-2.5 md:gap-3" : "mt-4 grid grid-cols-4 gap-3"}>
        {[
          { k: t("days"), v: days === null ? "—" : String(days) },
          { k: t("hours"), v: hours === null ? "—" : format2(hours) },
          { k: t("min"), v: minutes === null ? "—" : format2(minutes) },
          { k: t("sec"), v: seconds === null ? "—" : format2(seconds) },
        ].map((x, i) => (
          <div key={i} className={`${cellShell} text-center`}>
            <div
              className={[
                "font-black leading-none text-white tabular-nums",
                embedded
                  ? "text-lg md:text-xl lg:text-2xl [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]"
                  : "text-2xl md:text-3xl",
              ].join(" ")}
            >
              {x.v}
            </div>
            <div
              className={[
                "mt-2 font-bold uppercase leading-tight tracking-[0.12em] text-white/70",
                embedded ? "mt-1 text-[9px] sm:text-[10px] md:text-[11px]" : "mt-1.5 text-[10px] sm:text-[11px]",
              ].join(" ")}
            >
              {x.k}
            </div>
          </div>
        ))}
      </div>
      {diff === 0 ? (
        <div className="mt-4 text-sm font-bold" style={{ color: GOLD_DEEP }}>
          {t("completed")}
        </div>
      ) : null}
    </div>
  );
}
