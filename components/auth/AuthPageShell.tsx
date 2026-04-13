import { getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { ui } from "@/lib/ui";

type Props = {
  children: ReactNode;
};

export async function AuthPageShell({ children }: Props) {
  const t = await getTranslations("AuthSidebar");
  const bullets = [t("b1"), t("b2"), t("b3"), t("b4"), t("b5")] as const;

  return (
    <div className="min-h-[calc(100dvh-4rem)] min-w-0 overflow-x-clip bg-gradient-to-b from-slate-100 via-slate-100/95 to-slate-200/40">
      <div
        className={`${ui.containerNarrow} pb-16 pt-[calc(var(--ngc-header-h)+1.5rem)] md:pb-20 md:pt-[calc(var(--ngc-header-h)+2rem)] lg:pt-[calc(var(--ngc-header-h)+2.5rem)]`}
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <aside className="min-w-0 lg:col-span-5">
            <p className={ui.eyebrow}>{t("kicker")}</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-[1.85rem]">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600 md:text-base">
              {t("lead")}
            </p>
            <ul className="mt-8 max-w-lg space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm font-medium leading-snug text-slate-700 md:text-[15px]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-[#001F3F]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </aside>
          <div className="min-w-0 lg:col-span-7">
            <div className={`${ui.card} bg-white/95 p-6 shadow-md ring-1 ring-slate-900/[0.02] backdrop-blur-sm md:p-8 lg:p-10`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
