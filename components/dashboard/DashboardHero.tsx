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
    <section className="relative overflow-hidden border-b border-white/[0.06] px-4 pb-12 pt-10 md:px-8 md:pb-16 md:pt-14">
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#FFD700]/[0.07] blur-3xl md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-teal-500/[0.08] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/[0.09] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD700] md:text-xs">
          <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {t("heroKicker")}
        </div>

        <div className="max-w-4xl">
          <h1 className="font-[family-name:var(--font-grand-display)] text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            {t("heroTitle")}
          </h1>
          <p className="mt-5 max-w-3xl text-base font-medium leading-relaxed text-slate-300/95 md:text-lg md:leading-relaxed">
            {t("heroSubtitle")}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch">
          <div className="flex min-w-[min(100%,280px)] flex-1 items-start gap-4 rounded-2xl border border-white/[0.12] bg-[#001F3F]/60 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:px-6 md:py-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFD700]/15 text-[#FFD700] ring-1 ring-[#FFD700]/25">
              <Crown className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFD700]/85">
                {schoolName ?? "—"}
              </p>
              <p className="mt-1.5 text-sm font-medium leading-snug text-white/90">
                {t("welcomeLine", { email: email ?? "—" })}
              </p>
            </div>
          </div>

          <div className="flex min-w-[min(100%,220px)] items-center justify-between gap-4 rounded-2xl border border-white/[0.12] bg-white/[0.04] px-5 py-4 backdrop-blur-md md:px-7 md:py-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                {t("rosterStats")}
              </p>
              <p className="mt-2 font-[family-name:var(--font-grand-display)] text-2xl font-semibold tabular-nums text-[#FFD700] md:text-3xl">
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
