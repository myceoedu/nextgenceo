"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Link, usePathname } from "@/i18n/navigation";
import { LOGO_SRC, NAVY_DEEP } from "@/lib/constants";
import { COMPETITION_MENU } from "@/lib/competition-menu";
import { ChevronDown, Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setMobileOpen(false);
      setOpen(false);
    }, 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  const isCompetition =
    pathname === "/competition" || pathname.startsWith("/competition/");
  const isRegistration = pathname === "/competition/registration";

  const currentMatch = COMPETITION_MENU.find((l) => l.href === pathname);
  const currentCompLabel = currentMatch
    ? t(`menu.${currentMatch.id}`)
    : pathname === "/about"
      ? t("menu.aboutUs")
      : null;
  const isAboutUsPage = pathname === "/about";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white shadow-[0_1px_0_rgba(0,31,63,0.04),0_8px_30px_rgba(0,31,63,0.06)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 md:px-10 py-3.5 md:py-4">
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

          <div className="relative px-1" ref={wrapRef}>
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              aria-current={isCompetition ? "page" : undefined}
              onClick={() => setOpen((v) => !v)}
              className={[
                "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition outline-none",
                isCompetition
                  ? "bg-amber-50 text-[#001F3F] ring-2 ring-[#FFD700]/70 ring-offset-2 ring-offset-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-[#001F3F] focus-visible:ring-2 focus-visible:ring-[#B8860B]/40",
                open ? "ring-2 ring-[#001F3F]/20 ring-offset-2 ring-offset-white" : "",
              ].join(" ")}
            >
              {t("competition")}
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open ? (
              <div
                className="absolute left-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white py-2 shadow-[0_24px_60px_rgba(0,31,63,0.14)]"
                role="menu"
              >
                <p className="px-4 pb-2 pt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {t("competitionPages")}
                </p>
                {COMPETITION_MENU.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      role="menuitem"
                      aria-current={active ? "page" : undefined}
                      className={[
                        "mx-2 block rounded-xl px-4 py-2.5 text-sm transition",
                        active
                          ? "bg-[#001F3F] font-bold text-white shadow-md"
                          : "font-semibold text-slate-700 hover:bg-slate-100",
                      ].join(" ")}
                    >
                      {t(`menu.${l.id}`)}
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>

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
          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <Link
              href="/competition"
              aria-current={pathname === "/competition" ? "page" : undefined}
              className={[
                "rounded-full border-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider transition",
                pathname === "/competition"
                  ? "border-[#001F3F] bg-[#001F3F] text-white shadow-md"
                  : "border-[#001F3F]/15 bg-white text-[#001F3F] shadow-sm hover:border-[#001F3F]/30 hover:bg-slate-50",
              ].join(" ")}
            >
              {t("overview")}
            </Link>
            <Link
              href="/competition/registration"
              aria-current={isRegistration ? "page" : undefined}
              className={[
                "rounded-full bg-gradient-to-br from-[#FFD700] via-[#e6e600] to-amber-100 px-6 py-2.5 text-xs font-black uppercase tracking-wider text-[#0B0B32] transition",
                isRegistration
                  ? "shadow-[0_0_0_3px_white,0_0_0_5px_#001F3F] ring-2 ring-[#001F3F]"
                  : "shadow-[0_12px_36px_rgba(0,31,63,0.18)] hover:-translate-y-0.5",
              ].join(" ")}
            >
              {t("register")}
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
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
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
            <p className="px-4 pt-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {t("mobileCompetition")}
            </p>
            {COMPETITION_MENU.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-xl px-4 py-3 text-sm",
                    active
                      ? "bg-[#001F3F] font-bold text-white"
                      : "font-semibold text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {t(`menu.${l.id}`)}
                </Link>
              );
            })}
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
                href="/competition/registration"
                className={[
                  "rounded-xl py-3.5 text-center text-sm font-black uppercase tracking-wider text-[#0B0B32]",
                  isRegistration
                    ? "bg-gradient-to-br from-[#FFD700] to-amber-100 ring-2 ring-[#001F3F]"
                    : "bg-gradient-to-br from-[#FFD700] to-amber-100",
                ].join(" ")}
              >
                {t("register")}
              </Link>
              <Link
                href="/competition"
                className={[
                  "rounded-xl border-2 py-3.5 text-center text-sm font-black uppercase tracking-wider",
                  pathname === "/competition"
                    ? "border-[#001F3F] bg-[#001F3F] text-white"
                    : "border-[#001F3F]/15 text-[#001F3F]",
                ].join(" ")}
              >
                {t("mobileOverview")}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
