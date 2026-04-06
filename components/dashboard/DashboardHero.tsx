import { getTranslations } from "next-intl/server";
import { Crown, Sparkles } from "lucide-react";

type Props = {
  email: string | null;
  schoolName: string | null;
  rosterCount: number;
};

export async function DashboardHero({ email, schoolName, rosterCount }: Props) {
  const t = await getTranslations("SchoolDashboard");

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white/40 to-transparent px-4 pb-12 pt-10 md:px-8 md:pb-16 md:pt-14">
      <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl md:h-[22rem] md:w-[22rem]" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-sky-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-gradient-to-r from-amber-50 to-amber-100/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-900 shadow-sm md:text-xs">
          <Sparkles className="h-3.5 w-3.5 shrink-0 text-amber-600" aria-hidden />
          {t("heroKicker")}
        </div>

        <div className="max-w-4xl">
          <h1 className="font-[family-name:var(--font-grand-display)] text-balance text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {t("heroTitle")}
          </h1>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-slate-600 md:text-lg md:leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch">
          <div className="flex min-w-[min(100%,280px)] flex-1 items-start gap-4 rounded-2xl border border-slate-200/90 bg-white px-5 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.08),0_0_0_1px_rgba(255,255,255,0.8)_inset] md:px-6 md:py-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-amber-300 to-amber-500 text-white shadow-[0_8px_24px_rgba(245,158,11,0.35)] ring-2 ring-amber-200">
              <Crown className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-amber-700">
                {schoolName ?? "—"}
              </p>
              <p className="mt-1.5 text-sm font-medium leading-snug text-slate-700">
                {t("welcomeLine", { email: email ?? "—" })}
              </p>
            </div>
          </div>

          <div className="flex min-w-[min(100%,220px)] items-center justify-between gap-4 rounded-2xl border border-sky-200/90 bg-gradient-to-br from-sky-50 to-white px-5 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.07)] md:px-7 md:py-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">
                {t("rosterStats")}
              </p>
              <p className="mt-2 font-[family-name:var(--font-grand-display)] text-2xl font-semibold tabular-nums text-amber-600 md:text-3xl">
                {t("rosterCount", { count: rosterCount })}
              </p>
            </div>
            <span className="hidden text-right text-xs font-medium leading-snug text-slate-500 sm:block sm:max-w-[9rem]">
              {t("cardDecor")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
