"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { LOGO_SRC, NAVY_DEEP } from "@/lib/constants";
import { COMPETITION_MENU } from "@/lib/competition-menu";
import { Menu, X } from "lucide-react";

function topNavPill(active: boolean) {
  return [
    "rounded-full px-4 py-2 text-sm font-bold transition outline-none",
    active
      ? "bg-[#001F3F] text-white shadow-md shadow-[#001F3F]/25 ring-2 ring-[#001F3F] ring-offset-2 ring-offset-white"
      : "text-slate-600 hover:bg-slate-100 hover:text-[#001F3F] focus-visible:ring-2 focus-visible:ring-[#B8860B]/40",
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
    <header className="ngc-site-header fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white shadow-[0_1px_0_rgba(0,31,63,0.04),0_8px_30px_rgba(0,31,63,0.06)]">
      <div className="flex w-full items-center justify-between gap-4 px-5 py-3.5 md:px-8 lg:px-12 xl:px-16 md:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3 md:gap-4">
          <div className="relative h-13 w-[5.75rem] shrink-0 overflow-visible md:w-[6.25rem]">
            <Image
              src={LOGO_SRC}
              alt="MY CEO Logo"
              width={96}
              height={96}
              className="absolute left-0 top-[50%] h-11 w-11 -translate-y-2 origin-left scale-[2.05] rounded-xl object-contain md:h-12 md:w-12 md:scale-[2.15]"
              priority
            />
          </div>
          <div className="min-w-0 leading-tight">
            <div
              className="truncate text-sm font-black tracking-wide md:text-base"
              style={{ color: NAVY_DEEP }}
            >
              NextGen CEO
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 md:text-[11px]">
              Challenge 2026
            </div>
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-2"
          aria-label={t("navMain")}
        >
          <Link
            href="/"
            className={topNavPill(pathname === "/")}
            aria-current={pathname === "/" ? "page" : undefined}
          >
            {t("home")}
          </Link>

          <Link
            href="/about"
            className={topNavPill(isAboutUsPage)}
            aria-current={isAboutUsPage ? "page" : undefined}
          >
            {t("menu.aboutUs")}
          </Link>

          <Link
            href="/contact"
            className={topNavPill(pathname === "/contact")}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="hidden lg:flex flex-col items-end gap-1 shrink-0">
          <div className="flex items-center gap-2.5">
            <LocaleSwitcher />
            <Link
              href="/login"
              aria-current={isLogin ? "page" : undefined}
              className={[
                "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition outline-none",
                isLogin
                  ? "border-[#001F3F] bg-[#001F3F] text-white shadow-md"
                  : "border-slate-200 text-[#001F3F] hover:border-[#001F3F]/35 hover:bg-slate-50",
              ].join(" ")}
            >
              {t("login")}
            </Link>
            <Link
              href="/register"
              aria-current={isRegisterAccount ? "page" : undefined}
              className={[
                "rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition outline-none",
                isRegisterAccount
                  ? "border-[#001F3F] bg-[#001F3F] text-white shadow-md"
                  : "border-slate-200 text-[#001F3F] hover:border-[#001F3F]/35 hover:bg-slate-50",
              ].join(" ")}
            >
              {t("signUp")}
            </Link>
          </div>
          {isCompetition && pathname !== "/competition" ? (
            <span className="max-w-[220px] truncate text-right text-[10px] font-semibold text-slate-500">
              {t("youAreAt")}{" "}
              <span className="font-bold text-[#001F3F]">
                {currentCompLabel ?? t("competition")}
              </span>
            </span>
          ) : null}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            className="rounded-xl border border-slate-200 p-2 text-[#001F3F]"
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:px-8 lg:px-12 xl:px-16 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={[
                "rounded-xl px-4 py-3 text-sm font-bold",
                pathname === "/"
                  ? "bg-[#001F3F] text-white"
                  : "text-[#001F3F] hover:bg-slate-50",
              ].join(" ")}
            >
              {t("home")}
            </Link>
            <Link
              href="/about"
              aria-current={isAboutUsPage ? "page" : undefined}
              className={[
                "rounded-xl px-4 py-3 text-sm font-bold",
                isAboutUsPage
                  ? "bg-[#001F3F] text-white"
                  : "text-[#001F3F] hover:bg-slate-50",
              ].join(" ")}
            >
              {t("menu.aboutUs")}
            </Link>
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={[
                "mt-1 rounded-xl px-4 py-3 text-sm font-bold",
                pathname === "/contact"
                  ? "bg-[#001F3F] text-white"
                  : "text-[#001F3F] hover:bg-slate-50",
              ].join(" ")}
            >
              {t("contact")}
            </Link>
            {isCompetition ? (
              <p className="px-4 py-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-600">
                  {t("currentPageLabel")}{" "}
                </span>
                <span className="font-bold text-[#001F3F]">
                  {currentCompLabel ?? t("competition")}
                </span>
              </p>
            ) : null}
            <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
              <Link
                href="/login"
                aria-current={isLogin ? "page" : undefined}
                className={[
                  "rounded-xl py-3 text-center text-sm font-bold",
                  isLogin
                    ? "bg-[#001F3F] text-white"
                    : "border border-slate-200 text-[#001F3F] hover:bg-slate-50",
                ].join(" ")}
              >
                {t("login")}
              </Link>
              <Link
                href="/register"
                aria-current={isRegisterAccount ? "page" : undefined}
                className={[
                  "rounded-xl py-3 text-center text-sm font-bold",
                  isRegisterAccount
                    ? "bg-[#001F3F] text-white"
                    : "border border-slate-200 text-[#001F3F] hover:bg-slate-50",
                ].join(" ")}
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
