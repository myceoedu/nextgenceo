import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LOGO_SRC } from "@/lib/constants";
import { DashboardSignOut } from "@/components/dashboard/DashboardSignOut";
import type { ReactNode } from "react";

export async function DashboardShell({ children }: { children: ReactNode }) {
  const t = await getTranslations("SchoolDashboard");

  return (
    <div className="ngc-dashboard-root min-h-dvh bg-[#050a14]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(184,134,11,0.16),transparent_55%),radial-gradient(ellipse_90%_60%_at_100%_50%,rgba(0,31,63,0.45),transparent_50%),linear-gradient(180deg,#0a1628_0%,#0d1f3d_40%,#050a14_100%)]" />

      <header className="relative z-20 border-b border-white/[0.08] bg-[#001F3F]/75 shadow-[0_12px_48px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-5">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-xl pr-2 transition hover:bg-white/[0.04]"
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_0_0_1px_rgba(255,215,0,0.25),0_8px_24px_rgba(0,31,63,0.4)] ring-2 ring-[#FFD700]/35 md:h-12 md:w-12">
              <Image src={LOGO_SRC} alt="" width={44} height={44} className="h-9 w-9 object-contain md:h-10 md:w-10" />
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFD700]/95">
                NextGen CEO
              </span>
              <span className="block truncate text-sm font-black tracking-wide text-white md:text-base">
                {t("title")}
              </span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/20 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90 transition hover:border-[#FFD700]/40 hover:bg-white/[0.1] md:text-sm"
            >
              {t("backHome")}
            </Link>
            <DashboardSignOut variant="header" />
          </div>
        </div>
      </header>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
