import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ABOUT_PAGE_IMAGE_SRC, LOGO_SRC } from "@/lib/constants";

/** ~5:7 split — between “half page” and “tiny strip”; photo scales to column width and shows in full (no cover crop). */
const PHOTO_WIDTH = 900;
const PHOTO_HEIGHT = 1125;

export async function AboutIntroSection() {
  const t = await getTranslations("AboutPage");
  const imageSrc = ABOUT_PAGE_IMAGE_SRC || LOGO_SRC;
  const isLogoFallback = !ABOUT_PAGE_IMAGE_SRC;

  return (
    <section className="border-b border-[#001F3F]/[0.06] bg-white px-6 py-14 md:px-10 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-12 md:gap-10 lg:gap-12">
        <div className="w-full md:col-span-5">
          {isLogoFallback ? (
            <div className="relative mx-auto aspect-square w-full max-w-[14rem] md:mx-0 md:max-w-full md:aspect-[4/5]">
              <Image
                src={imageSrc}
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 768px) 38vw, 224px"
                className="object-contain object-left object-top p-4 md:p-6"
                priority
              />
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt={t("imageAlt")}
              width={PHOTO_WIDTH}
              height={PHOTO_HEIGHT}
              sizes="(min-width: 1024px) 400px, (min-width: 768px) 38vw, 100vw"
              className="h-auto w-full object-contain object-left object-top"
              priority
            />
          )}
        </div>

        <div className="md:col-span-7 md:border-l md:border-[#001F3F]/[0.08] md:pl-8 lg:pl-11">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#B8860B] md:text-[0.8rem] md:tracking-[0.2em]">
            {t("kicker")}
          </p>
          <div className="mt-7 w-full max-w-none space-y-5 text-sm font-medium leading-[1.72] text-[#001F3F]/88 md:mt-8 md:space-y-6 md:text-[0.95rem] md:leading-[1.78]">
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
            <p>{t("body3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
