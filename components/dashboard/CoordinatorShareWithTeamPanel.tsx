import { Share2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function CoordinatorShareWithTeamPanel() {
  const t = await getTranslations("SchoolDashboard");

  const bullets = [t("shareB1"), t("shareB2"), t("shareB3"), t("shareB4")] as const;

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-sky-50/50 to-amber-50/30 p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] md:p-7">
      <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-amber-200/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-48 bg-gradient-to-tr from-sky-200/40 to-transparent blur-2xl" />
      <div className="relative flex gap-4 md:gap-5">
        <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-amber-300 to-amber-500 text-white shadow-lg ring-2 ring-amber-200">
          <Share2 className="h-5 w-5" strokeWidth={1.75} aria-hidden />
        </div>
        <div className="min-w-0">
          <h2 className="text-sm font-black uppercase tracking-[0.16em] text-amber-700">{t("shareTitle")}</h2>
          <p className="mt-3 text-[15px] font-medium leading-relaxed text-slate-600">{t("shareLead")}</p>
          <ul className="mt-5 space-y-3 text-[15px] font-medium leading-relaxed text-slate-700">
            {bullets.map((text) => (
              <li key={text} className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
