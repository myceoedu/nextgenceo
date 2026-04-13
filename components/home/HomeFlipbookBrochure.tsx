"use client";

import { ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { FLIPPINGBOOK_EMBED } from "@/lib/constants";

type Props = {
  sectionId?: string;
};

/**
 * FlippingBook in iframe — lateral gutters for page scroll; on narrow viewports the stage
 * is given a minimum width so the viewer can lay out a spread, with horizontal scroll.
 */
export function HomeFlipbookBrochure({ sectionId = "competition-hub" }: Props) {
  const t = useTranslations("FlipbookBrochure");
  const headingId = `${sectionId}-heading`;

  const readerHeight = { height: "min(80dvh, 920px)", minHeight: "min(420px, 55dvh)" } as const;

  return (
    <section
      id={sectionId}
      aria-labelledby={headingId}
      className="scroll-mt-28 border-t border-[#d4cfc4] bg-[#f4f1eb] py-8 md:scroll-mt-32 md:py-12"
    >
      <header className="px-4 pb-2 pt-2 text-center sm:px-6 md:px-8 md:pb-3 md:pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7b62]">{t("eyebrow")}</p>
        <h2
          id={headingId}
          className="mx-auto mt-2 max-w-5xl text-balance font-[family-name:var(--font-grand-display)] text-3xl font-bold tracking-tight text-[#1c1916] md:mt-2.5 md:text-4xl md:leading-tight lg:text-[2.5rem]"
        >
          {t("title")}
        </h2>
        <a
          href={FLIPPINGBOOK_EMBED.viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7d5a3a] underline decoration-[#c9b8a0] underline-offset-[5px] transition hover:text-[#6b4d31] hover:decoration-[#9d8a63] md:mt-3.5"
        >
          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {t("openNewTab")}
        </a>
      </header>

      {/* Lateral gutters: pointer can rest here for window scroll / touch pass-through to page */}
      <div className="w-full px-4 pb-4 sm:px-6 md:px-10 lg:px-14 xl:px-[max(2rem,calc((100vw-90rem)/2+1rem))]">
        <div
          className="overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:auto] [scrollbar-gutter:stable_both-edges]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* min width on small screens nudges FlippingBook toward two-page layout; md+ fills row */}
          <div
            className="relative mx-auto min-w-[min(100%,736px)] border border-[#bfa46a]/50 shadow-sm md:min-w-0"
            style={readerHeight}
          >
            {/* “Book” frame: spine gutter + leaves */}
            <div
              className="pointer-events-none absolute inset-0 z-10 rounded-lg ring-1 ring-[#9d8a63]/22 md:rounded-xl"
              aria-hidden
            >
              <div className="absolute inset-y-2 left-1/2 z-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#bfa46a]/35 to-transparent md:inset-y-3" />
            </div>
            <div className="relative h-full overflow-hidden rounded-lg bg-[#e6e0d4] p-[3px] md:rounded-xl md:p-1 md:ring-1 md:ring-[#a09078]/32">
              <iframe
                src={FLIPPINGBOOK_EMBED.viewUrl}
                title={t("title")}
                className="relative z-0 block h-full w-full rounded-md border-0 bg-[#f0ebe3] md:rounded-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>

        <p className="mx-auto mt-2 max-w-lg px-1 text-center text-[11px] font-medium leading-snug text-[#6b6358] md:hidden">
          {t("mobileSpreadHint")}
        </p>
      </div>
    </section>
  );
}
