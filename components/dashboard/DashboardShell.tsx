import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { LOGO_SRC } from "@/lib/constants";
import { DashboardSignOut } from "@/components/dashboard/DashboardSignOut";
import type { ReactNode } from "react";

export async function DashboardShell({ children }: { children: ReactNode }) {
  const t = await getTranslations("SchoolDashboard");

  return (
    <div className="ngc-dashboard-root min-h-dvh bg-[var(--ngc-dash-bg-deep)] text-slate-800 antialiased">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(168deg,var(--ngc-dash-bg-mid)_0%,var(--ngc-dash-bg)_42%,#cfe4fd_88%,var(--ngc-dash-bg-deep)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_85%_65%_at_85%_0%,rgba(251,191,36,0.2),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_100%,rgba(56,189,248,0.16),transparent_52%)]"
        aria-hidden
      />

      <header
        className="relative z-20 border-b border-slate-200/90 bg-[var(--ngc-dash-header)] shadow-[0_4px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8 md:py-5">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-xl pr-2 transition hover:bg-slate-900/[0.04]"
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_4px_20px_rgba(15,23,42,0.1)] ring-2 ring-amber-400/35 md:h-12 md:w-12">
              <Image src={LOGO_SRC} alt="" width={44} height={44} className="h-9 w-9 object-contain md:h-10 md:w-10" />
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-amber-700">
                NextGen CEO
              </span>
              <span className="block truncate text-sm font-black tracking-wide text-slate-900 md:text-base">{t("title")}</span>
            </span>
          </Link>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm transition hover:border-amber-400/60 hover:bg-amber-50/80 md:text-sm"
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
