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
}: {
  targetIso: string;
  label: string;
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

  return (
    <div
      className="rounded-3xl p-5 md:p-6"
      style={{
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      <div className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
        {label}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {[
          { k: t("days"), v: days === null ? "—" : String(days) },
          { k: t("hours"), v: hours === null ? "—" : format2(hours) },
          { k: t("min"), v: minutes === null ? "—" : format2(minutes) },
          { k: t("sec"), v: seconds === null ? "—" : format2(seconds) },
        ].map((x, i) => (
          <div
            key={i}
            className="rounded-2xl px-3 py-3 text-center"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div className="text-2xl font-black leading-none text-white md:text-3xl">
              {x.v}
            </div>
            <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/60">
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
