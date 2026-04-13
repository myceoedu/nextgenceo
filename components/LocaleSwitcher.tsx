"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher({ variant = "default" }: { variant?: "default" | "header" }) {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const isHeader = variant === "header";

  return (
    <div
      className={[
        "inline-flex shrink-0 items-center border border-slate-200/85 bg-white shadow-sm",
        isHeader ? "rounded p-px" : "rounded-md p-0.5 text-xs",
      ].join(" ")}
      role="group"
      aria-label={t("languageLabel")}
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            className={[
              "font-semibold transition",
              isHeader
                ? [
                    "min-h-[22px] min-w-[1.65rem] rounded-sm px-1 py-px text-[9px] leading-none tracking-wide md:min-h-6 md:min-w-[1.85rem] md:px-1.5 md:text-[10px]",
                    active
                      ? "bg-[#001F3F] text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                  ].join(" ")
                : [
                    "rounded-[5px] px-2.5 py-1 text-xs font-medium",
                    active
                      ? "bg-[#001F3F] text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                  ].join(" "),
            ].join(" ")}
            aria-pressed={active}
          >
            {loc === "ms" ? "BM" : "EN"}
          </button>
        );
      })}
    </div>
  );
}
