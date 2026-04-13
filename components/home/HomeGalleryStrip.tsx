"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ViewIn } from "@/components/motion-ui";
import { HOME_PAGE_GALLERY_IMAGES } from "@/lib/constants";

export function HomeGalleryStrip() {
  const t = useTranslations("HomeGallery");
  return (
    <section
      className="border-t border-slate-200/80 bg-[#0f172a] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-8"
      aria-labelledby="home-gallery-heading"
    >
      <ViewIn className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 md:text-[13px]">
            {t("kicker")}
          </p>
          <h2
            id="home-gallery-heading"
            className="mt-3 text-balance text-2xl font-semibold leading-snug tracking-tight text-white md:text-3xl"
          >
            {t("title")}
          </h2>
          <span aria-hidden className="mx-auto mt-4 block h-px w-12 bg-slate-600" />
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-slate-300 md:text-base">
            {t("subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
          {HOME_PAGE_GALLERY_IMAGES.map((src, i) => (
            <div
              key={src}
              className="group relative aspect-[5/6] overflow-hidden rounded-xl border border-white/10 bg-slate-800/50 shadow-sm sm:aspect-square"
            >
              <Image
                src={src}
                alt={t("imageAlt", { n: i + 1 })}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 50vw, 25vw"
                unoptimized={src.startsWith("/home/")}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent"
              />
            </div>
          ))}
        </div>
      </ViewIn>
    </section>
  );
}
