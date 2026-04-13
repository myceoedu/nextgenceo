import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ABOUT_PAGE_IMAGE_SRC, LOGO_SRC } from "@/lib/constants";
import { ui } from "@/lib/ui";

/** ~5:7 split — between “half page” and “tiny strip”; photo scales to column width and shows in full (no cover crop). */
const PHOTO_WIDTH = 900;
const PHOTO_HEIGHT = 1125;

export async function AboutIntroSection() {
  const t = await getTranslations("AboutPage");
  const imageSrc = ABOUT_PAGE_IMAGE_SRC || LOGO_SRC;
  const isLogoFallback = !ABOUT_PAGE_IMAGE_SRC;

  return (
    <section className={`${ui.borderSection} bg-white ${ui.section}`}>
      <div className={`${ui.marketingContent} grid items-start gap-10 md:grid-cols-12 md:gap-10 lg:gap-12`}>
        <div className="w-full min-w-0 md:col-span-5">
          {isLogoFallback ? (
            <div className="mx-auto flex max-w-xl justify-center md:mx-0 md:justify-start">
              <Image
                src={imageSrc}
                alt={t("imageAlt")}
                width={637}
                height={350}
                sizes="(min-width: 768px) 380px, 100vw"
                className="h-auto w-full max-w-md object-contain object-left md:max-w-lg"
                priority
                unoptimized
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

        <div className="min-w-0 md:col-span-7 md:border-l md:border-slate-200 md:pl-8 lg:pl-11">
          <p className={ui.eyebrow}>{t("kicker")}</p>
          <div className="mt-6 w-full max-w-none space-y-5 text-sm leading-relaxed text-slate-600 md:mt-8 md:space-y-6 md:text-base md:leading-relaxed">
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
            <p>{t("body3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
