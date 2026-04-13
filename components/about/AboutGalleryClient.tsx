"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useId, useState } from "react";
import { ui } from "@/lib/ui";

type Props = {
  images: readonly string[];
};

export function AboutGalleryClient({ images }: Props) {
  const t = useTranslations("AboutPage");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingId = useId();
  const total = images.length;

  const goNext = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return null;
      return (i + 1) % total;
    });
  }, [total]);

  const goPrev = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return null;
      return (i - 1 + total) % total;
    });
  }, [total]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, goNext, goPrev]);

  if (total === 0) return null;

  return (
    <>
      <section
        className={`${ui.borderSection} bg-slate-50/90 ${ui.section}`}
        aria-labelledby={headingId}
      >
        <div className={ui.marketingContent}>
          <div className="mx-auto max-w-2xl text-center md:mx-0 md:max-w-none md:text-left">
            <p className={ui.eyebrow}>{t("galleryEyebrow")}</p>
            <h2 id={headingId} className={`mt-3 ${ui.displayMd}`}>
              {t("galleryTitle")}
            </h2>
            <p className={`mx-auto mt-3 max-w-xl md:mx-0 ${ui.body}`}>
              {t("gallerySubtitle")}
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
            {images.map((src, i) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 text-left shadow-sm transition hover:border-slate-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
                  aria-label={t("galleryOpenAria", { index: i + 1 })}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                  <span className="sr-only">{t("galleryImageAlt", { index: i + 1 })}</span>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/5 to-transparent opacity-75 transition group-hover:opacity-90"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100"
                  >
                    <span className="rounded-full border border-white/35 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                      {t("galleryExpand")}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {openIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]/92 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={t("galleryLightboxAria")}
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(null);
            }}
            className="absolute right-3 top-3 z-[102] rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-5 md:top-5"
          >
            {t("galleryClose")}
          </button>

          <p className="pointer-events-none absolute bottom-4 left-0 right-0 z-[102] text-center text-sm font-medium text-white/75">
            {t("galleryCounter", { current: openIndex + 1, total })}
          </p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-1 top-1/2 z-[102] -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-5 md:p-3.5"
            aria-label={t("galleryPrev")}
          >
            <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-1 top-1/2 z-[102] -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-5 md:p-3.5"
            aria-label={t("galleryNext")}
          >
            <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative z-[101] flex max-h-[min(85vh,900px)] w-full max-w-5xl items-center justify-center px-10 md:px-14"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[openIndex]!}
              alt={t("galleryImageAlt", { index: openIndex + 1 })}
              width={1600}
              height={1200}
              className="max-h-[min(85vh,900px)] w-auto max-w-full object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
