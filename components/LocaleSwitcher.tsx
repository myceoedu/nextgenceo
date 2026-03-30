"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-slate-200/90 bg-slate-50/80 p-px text-[10px] font-black uppercase tracking-wider text-[#001F3F] shadow-sm"
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => {
        const active = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            className={[
              "rounded-full px-2 py-0.5 transition",
              active
                ? "bg-[#001F3F] text-white shadow-sm"
                : "text-slate-600 hover:bg-white hover:text-[#001F3F]",
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
