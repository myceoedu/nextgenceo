import Image from "next/image";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { DRIVE_CHALLENGE_URL, LOGO_SRC, NAVY_DEEP } from "@/lib/constants";
import { ui } from "@/lib/ui";

function SocialIcon({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {children}
    </svg>
  );
}

function FacebookGlyph({ className }: { className?: string }) {
  return (
    <SocialIcon className={className}>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </SocialIcon>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <SocialIcon className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </SocialIcon>
  );
}

function TikTokGlyph({ className }: { className?: string }) {
  return (
    <SocialIcon className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 11-3.89-2.72V9.75a6.38 6.38 0 00-1-.07 6.52 6.52 0 106.12 6.92V9.08a8.16 8.16 0 004.77 1.52V6.86a4.86 4.86 0 01-1-.17z" />
    </SocialIcon>
  );
}

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const year = new Date().getFullYear();

  const footerLinkClass =
    "text-sm text-slate-300/95 transition hover:text-white focus-visible:outline-none focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c2744]";

  return (
    <footer
      className="ngc-site-footer border-t border-slate-900/20 text-slate-200"
      style={{
        background: `linear-gradient(175deg, ${NAVY_DEEP} 0%, #0c2744 48%, #081c30 100%)`,
      }}
    >
      <div className={`${ui.container} py-12 lg:py-16`}>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-start gap-4">
              <span className="relative mt-0.5 flex shrink-0 items-center justify-center">
                <Image
                  src={LOGO_SRC}
                  alt=""
                  width={637}
                  height={350}
                  className="h-14 w-auto max-w-[min(16rem,55vw)] object-contain object-left md:h-[4.5rem] md:max-w-[18rem]"
                  unoptimized
                />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{t("company")}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                  {t("quote")}
                </p>
              </div>
            </div>
          </div>

          <div className="md:pt-1 lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {t("colQuickLinks")}
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className={footerLinkClass}>
                  {t("linkHome")}
                </Link>
              </li>
              <li>
                <Link href="/#competition-hub" className={footerLinkClass}>
                  {t("linkCompetition")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className={footerLinkClass}>
                  {t("linkContact")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:pt-1 lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {t("colProgramme")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {t("ctaLine1")}{" "}
              <span className="font-medium text-slate-200">{t("ctaLine2")}</span>
              {t("ctaQ")}
            </p>
            <a
              href={DRIVE_CHALLENGE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-white underline decoration-white/35 underline-offset-4 transition hover:decoration-white/70"
            >
              {t("joinCta")}
            </a>
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
              <li>
                <Link href="/login" className={footerLinkClass}>
                  {t("linkSchoolLogin")}
                </Link>
              </li>
              <li>
                <Link href="/register" className={footerLinkClass}>
                  {t("linkSchoolRegister")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:pt-1 lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              {t("colConnect")}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              <li>
                <a
                  href="https://www.facebook.com/myceo2015/?locale=ms_MY"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.06] text-slate-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                  aria-label={t("socialFacebook")}
                >
                  <FacebookGlyph className="h-[18px] w-[18px]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/myceo_"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.06] text-slate-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                  aria-label={t("socialInstagram")}
                >
                  <InstagramGlyph className="h-[18px] w-[18px]" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@myceoeducation?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.06] text-slate-200 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
                  aria-label={t("socialTiktok")}
                >
                  <TikTokGlyph className="h-[18px] w-[18px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t("company")}. {t("rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}
