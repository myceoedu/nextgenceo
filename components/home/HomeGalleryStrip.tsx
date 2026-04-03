"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ViewIn } from "@/components/motion-ui";
import { HOME_PAGE_GALLERY_IMAGES, NAVY, NAVY_DEEP } from "@/lib/constants";

export function HomeGalleryStrip() {
  const t = useTranslations("HomeGallery");
  return (
    <section
      className="relative overflow-hidden px-6 py-14 md:px-10 md:py-16"
      style={{
        background: `linear-gradient(145deg, ${NAVY_DEEP} 0%, #0a1f45 40%, ${NAVY} 72%, #1a1a5c 100%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 80%, rgba(255,215,0,0.2), transparent 50%), radial-gradient(circle at 90% 20%, rgba(87,227,255,0.12), transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <ViewIn className="relative mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFD700]/90 md:text-xs">
            {t("kicker")}
          </p>
          <h2 className="mt-3 text-balance text-[2rem] font-black uppercase leading-[1.06] tracking-tight text-white md:text-[3.1rem] md:leading-[1.08]">
            {t("title")}
          </h2>
          <span
            aria-hidden
            className="mx-auto mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B]"
          />
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-[15px] font-normal leading-[1.7] text-white/85 md:text-[1.15rem]">
            {t("subtitle")}
          </p>
        </header>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5 lg:gap-6">
          {HOME_PAGE_GALLERY_IMAGES.map((src, i) => (
            <div
              key={src}
              className="group relative aspect-[5/6] overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-1 ring-white/15 transition-transform duration-300 hover:-translate-y-1 sm:aspect-square"
            >
              <Image
                src={src}
                alt={t("imageAlt", { n: i + 1 })}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
                unoptimized={src.startsWith("/home/")}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001F3F]/55 via-transparent to-transparent opacity-80"
              />
            </div>
          ))}
        </div>
      </ViewIn>
    </section>
  );
}
