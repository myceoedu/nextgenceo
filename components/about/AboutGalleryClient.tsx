"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useId, useState } from "react";

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
        className="border-t border-[#001F3F]/8 bg-[#f6f7fb] px-6 py-16 md:px-10 md:py-24"
        aria-labelledby={headingId}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center md:mx-0 md:max-w-none md:text-left">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[#B8860B]">
              {t("galleryEyebrow")}
            </p>
            <h2
              id={headingId}
              className="mt-3 text-3xl font-black tracking-tight text-[#001F3F] md:text-4xl"
            >
              {t("galleryTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-[#001F3F]/65 md:mx-0 md:text-base">
              {t("gallerySubtitle")}
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
            {images.map((src, i) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#001F3F]/5 text-left shadow-[0_8px_32px_rgba(0,31,63,0.08)] ring-1 ring-[#001F3F]/10 transition duration-300 hover:shadow-[0_20px_48px_rgba(0,31,63,0.14)] hover:ring-[#B8860B]/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8860B]"
                  aria-label={t("galleryOpenAria", { index: i + 1 })}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="sr-only">{t("galleryImageAlt", { index: i + 1 })}</span>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001F3F]/55 via-[#001F3F]/10 to-transparent opacity-80 transition duration-300 group-hover:opacity-95"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100"
                  >
                    <span className="rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
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
            className="absolute right-3 top-3 z-[102] rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-5 md:top-5"
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
