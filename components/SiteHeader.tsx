"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { COMPETITION_MENU } from "@/lib/competition-menu";
import { SITE_HEADER_LOGO_SRC } from "@/lib/constants";
import { ui } from "@/lib/ui";

function desktopNavClasses(active: boolean) {
  const base =
    "rounded-full px-4 py-2 text-sm font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#001F3F]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  return [
    base,
    active
      ? "border border-white bg-[#001F3F] text-white shadow-sm"
      : "border border-transparent text-[#001F3F] hover:bg-slate-100",
  ].join(" ");
}

export function SiteHeader() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setMobileOpen(false);
    }, 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  const isCompetition =
    pathname === "/competition" || pathname.startsWith("/competition/");
  const isLogin = pathname === "/login";
  const isRegisterAccount = pathname === "/register";

  const currentMatch = COMPETITION_MENU.find((l) => l.href === pathname);
  const currentCompLabel = currentMatch
    ? t(`menu.${currentMatch.id}`)
    : pathname === "/about"
      ? t("menu.aboutUs")
      : null;
  const isAboutUsPage = pathname === "/about";

  return (
    <header className="ngc-site-header fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white shadow-[0_1px_0_rgba(15,23,42,0.05)]">
      <div className="flex w-full items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 md:px-8 lg:gap-6 lg:px-10 xl:px-12">
        <Link
          href="/"
          className="flex min-w-0 max-w-[min(100%,14rem)] items-center gap-3 rounded-lg py-2 font-[family-name:var(--font-montserrat)] outline-none transition hover:opacity-95 sm:max-w-none sm:gap-3.5 md:py-2.5 lg:py-2.5"
        >
          <span className="relative flex h-[4.25rem] w-[4.25rem] shrink-0 items-center justify-center md:h-[4.5rem] md:w-[4.5rem]">
            <Image
              src={SITE_HEADER_LOGO_SRC}
              alt={t("logoAlt")}
              width={274}
              height={275}
              className="h-full w-full object-contain object-center"
              priority
              unoptimized
            />
          </span>
          <span className="min-w-0 text-left leading-[1.15]">
            <span className="block truncate text-[0.95rem] font-extrabold tracking-tight text-[#001F3F] md:text-lg">
              {t("brandName")}
            </span>
            <span className="mt-1 block truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 md:text-[11px] md:tracking-[0.22em]">
              {t("brandSubtitle")}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-2 font-[family-name:var(--font-montserrat)] lg:flex"
          aria-label={t("navMain")}
        >
          <Link
            href="/"
            className={desktopNavClasses(pathname === "/")}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className={desktopNavClasses(isAboutUsPage)}
            aria-current={isAboutUsPage ? "page" : undefined}
          >
            {t("menu.aboutUs")}
          </Link>
          <Link
            href="/contact"
            className={desktopNavClasses(pathname === "/contact")}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="hidden min-w-0 shrink-0 items-center gap-2.5 lg:flex xl:gap-3">
          {isCompetition && pathname !== "/competition" ? (
            <p className="min-w-0 max-w-[min(100%,200px)] text-right text-xs leading-snug text-slate-500 xl:max-w-[240px]">
              <span className="text-slate-500">{t("youAreAt")}</span>{" "}
              <span className="font-medium text-slate-800">{currentCompLabel ?? t("competition")}</span>
            </p>
          ) : null}
          <LocaleSwitcher variant="header" />
          <div className="flex items-center gap-2 border-l border-slate-200/90 pl-2.5 xl:pl-3">
            <Link
              href="/login"
              aria-current={isLogin ? "page" : undefined}
              className={[
                ui.headerCtaSecondary,
                isLogin ? "border-slate-300 bg-slate-50 text-[#001F3F]" : "",
              ].join(" ")}
            >
              {t("login")}
            </Link>
            <Link
              href="/register"
              aria-current={isRegisterAccount ? "page" : undefined}
              className={[
                ui.headerCtaPrimary,
                isRegisterAccount ? "ring-1 ring-[#001F3F]/30" : "",
              ].join(" ")}
            >
              {t("signUp")}
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 py-2 lg:hidden md:gap-3 md:py-2.5">
          <LocaleSwitcher variant="header" />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/45 focus-visible:ring-offset-2"
            aria-expanded={mobileOpen}
            aria-controls="site-mobile-nav"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="site-mobile-nav"
          className="max-h-[min(75dvh,calc(100dvh-var(--ngc-header-h)-0.5rem))] overflow-y-auto overscroll-y-contain border-t border-slate-100 bg-slate-50/80 lg:hidden"
        >
          <div className="w-full space-y-2 px-4 py-4 pb-5 font-[family-name:var(--font-montserrat)] sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={[
                "block rounded-full py-3.5 pl-4 pr-3 text-center text-sm font-semibold transition",
                pathname === "/"
                  ? "border border-white bg-[#001F3F] text-white shadow-sm"
                  : "border border-transparent text-[#001F3F] hover:bg-white",
              ].join(" ")}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              aria-current={isAboutUsPage ? "page" : undefined}
              className={[
                "block rounded-full py-3.5 pl-4 pr-3 text-center text-sm font-semibold transition",
                isAboutUsPage
                  ? "border border-white bg-[#001F3F] text-white shadow-sm"
                  : "border border-transparent text-[#001F3F] hover:bg-white",
              ].join(" ")}
            >
              {t("menu.aboutUs")}
            </Link>
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={[
                "block rounded-full py-3.5 pl-4 pr-3 text-center text-sm font-semibold transition",
                pathname === "/contact"
                  ? "border border-white bg-[#001F3F] text-white shadow-sm"
                  : "border border-transparent text-[#001F3F] hover:bg-white",
              ].join(" ")}
            >
              {t("contact")}
            </Link>

            {isCompetition ? (
              <p className="px-3 py-2 text-xs text-slate-500">
                <span className="font-medium text-slate-600">{t("currentPageLabel")}</span>{" "}
                <span className="text-slate-800">{currentCompLabel ?? t("competition")}</span>
              </p>
            ) : null}

            <div className="grid gap-2 border-t border-slate-200/80 pt-4 sm:grid-cols-2 sm:gap-3">
              <Link
                href="/login"
                aria-current={isLogin ? "page" : undefined}
                className={[
                  ui.headerCtaSecondary,
                  "w-full py-3",
                  isLogin ? "border-slate-300 bg-slate-50" : "",
                ].join(" ")}
              >
                {t("login")}
              </Link>
              <Link
                href="/register"
                aria-current={isRegisterAccount ? "page" : undefined}
                className={[ui.headerCtaPrimary, "w-full py-3"].join(" ")}
              >
                {t("signUp")}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
