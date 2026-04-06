"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, ChevronDown, Copy, ShieldCheck } from "lucide-react";

type Props = {
  email: string | null;
  userId: string;
};

export function DashboardSessionCard({ email, userId }: Props) {
  const t = useTranslations("SchoolDashboard");
  const [copied, setCopied] = useState(false);

  async function copyId() {
    try {
      await navigator.clipboard.writeText(userId);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] md:p-7">
      <div className="pointer-events-none absolute -left-12 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="relative">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-amber-300 to-amber-500 text-white shadow-md ring-2 ring-amber-200">
            <ShieldCheck className="h-5 w-5" strokeWidth={1.75} aria-hidden />
          </span>
          <div className="min-w-0 pt-0.5">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-amber-700">{t("sessionTitle")}</h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">{t("sessionOk")}</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 md:px-5 md:py-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{t("emailLabel")}</p>
          <p className="mt-2 break-all text-[15px] font-semibold leading-snug tracking-tight text-slate-900">{email ?? "—"}</p>
        </div>

        <details className="group mt-4 rounded-2xl border border-slate-200 bg-white transition open:border-amber-400/50 open:shadow-md open:shadow-amber-100/50">
          <summary className="cursor-pointer list-none px-4 py-3.5 text-sm font-semibold text-slate-800 transition marker:content-none hover:text-slate-950 md:px-5 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              <span>{t("sessionSupportRef")}</span>
              <ChevronDown
                className="h-4 w-4 shrink-0 text-amber-600 transition duration-300 group-open:rotate-180"
                strokeWidth={2.25}
                aria-hidden
              />
            </span>
          </summary>
          <div className="border-t border-slate-100 px-4 pb-4 pt-1 md:px-5 md:pb-5">
            <p className="mt-3 text-xs leading-relaxed text-slate-500">{t("sessionSupportRefHint")}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <code className="block max-h-28 min-w-0 flex-1 overflow-y-auto break-all rounded-lg border border-slate-200 bg-slate-100 px-3 py-2.5 text-left font-mono text-[11px] leading-relaxed text-slate-800">
                {userId}
              </code>
              <button
                type="button"
                onClick={() => void copyId()}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-amber-500/40 bg-gradient-to-b from-amber-200 to-amber-400 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-amber-950 shadow-sm transition hover:brightness-105"
              >
                {copied ? <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
                {copied ? t("copied") : t("copyRef")}
              </button>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
}
