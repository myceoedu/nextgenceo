"use client";

import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { FLIPPINGBOOK_EMBED } from "@/lib/constants";

type Props = {
  sectionId?: string;
};

/**
 * Programme brochure — iframe embed. Cross-origin flipbook viewers capture wheel/touch
 * while the pointer is over the iframe; we cap height and avoid viewport-filling flex so
 * the document still scrolls from the title row, gutters, and content below.
 * @see https://online.flippingbook.com/view/454725206/
 */
export function HomeFlipbookBrochure({ sectionId = "competition-hub" }: Props) {
  const t = useTranslations("FlipbookBrochure");
  const headingId = `${sectionId}-heading`;

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className="scroll-mt-28 border-t border-slate-200/70 bg-[#eceff3] py-2 md:scroll-mt-32 md:py-3"
    >
      <header className="px-4 pb-3 pt-5 text-center md:px-6 md:pb-4 md:pt-7">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-700">{t("eyebrow")}</p>
        <h2
          id={headingId}
          className="mx-auto mt-2 max-w-5xl text-balance font-[family-name:var(--font-grand-display)] text-3xl font-bold tracking-tight text-slate-900 md:mt-2.5 md:text-4xl md:leading-tight lg:text-[2.5rem]"
        >
          {t("title")}
        </h2>
        <a
          href={FLIPPINGBOOK_EMBED.viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-[5px] transition hover:text-teal-950 hover:decoration-teal-500 md:mt-3.5"
        >
          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {t("openNewTab")}
        </a>
      </header>

      <div className="w-full px-0 pb-4">
        <div className="relative mx-auto w-full max-w-none">
          {/*
            Fixed max-height (~80dvh) so browser scroll wheel reaches the page when cursor
            is above/below the reader; over the iframe, events stay inside FlippingBook.
          */}
          <div
            className="relative mx-auto w-full overflow-hidden border-y border-slate-300/40 bg-[#dfe3e8] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
            style={{ height: "min(80dvh, 920px)", minHeight: "min(420px, 55dvh)" }}
          >
            <iframe
              src={FLIPPINGBOOK_EMBED.viewUrl}
              title={t("title")}
              className="h-full w-full border-0 bg-slate-50"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
        <p className="mx-auto mt-3 max-w-3xl px-4 text-center text-[11px] leading-relaxed text-slate-500 md:text-xs">
          {t("vendorNote")}
        </p>
      </div>
    </section>
  );
}
