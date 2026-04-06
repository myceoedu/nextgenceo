import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export async function AuthPageShell({ children }: Props) {
  const t = await getTranslations("AuthSidebar");
  const bullets = [t("b1"), t("b2"), t("b3"), t("b4"), t("b5")] as const;

  return (
    <div className="min-h-[calc(100dvh-4rem)] bg-gradient-to-b from-slate-100 via-[#eef2f9] to-[#e8ecf4]">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-[calc(var(--ngc-header-h)+1.5rem)] md:px-8 md:pb-20 md:pt-[calc(var(--ngc-header-h)+2rem)] lg:pt-[calc(var(--ngc-header-h)+2.5rem)]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <aside className="lg:col-span-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#B8860B]">
              {t("kicker")}
            </p>
            <h2 className="mt-3 text-balance text-2xl font-black leading-[1.12] tracking-tight text-[#001F3F] md:text-[1.85rem]">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-[#001F3F]/72 md:text-base">
              {t("lead")}
            </p>
            <ul className="mt-8 max-w-lg space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm font-medium leading-snug text-[#001F3F]/88 md:text-[15px]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#001F3F]/8 text-[#B8860B] ring-1 ring-[#001F3F]/10">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </aside>
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-[0_28px_80px_rgba(0,31,63,0.11)] ring-1 ring-slate-900/[0.03] backdrop-blur-sm md:p-8 lg:p-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
