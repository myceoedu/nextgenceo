import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getPartnersImagePublicPath } from "@/lib/resolve-partners-image";

export async function AboutPartnersSection() {
  const t = await getTranslations("AboutPage");
  const logosSrc = getPartnersImagePublicPath();

  return (
    <section
      className="border-t border-[#001F3F]/8 bg-white px-6 py-14 md:px-10 md:py-20"
      aria-labelledby="about-partners-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="about-partners-heading"
            className="text-3xl font-black tracking-tight text-[#001F3F] md:text-4xl"
          >
            {t("partnersTitle")}
          </h2>
          <p className="mt-4 text-[0.7rem] font-bold uppercase leading-relaxed tracking-[0.2em] text-[#EA580C] sm:text-xs md:text-sm md:tracking-[0.26em]">
            {t("partnersSubtitle")}
          </p>
        </header>

        {logosSrc ? (
          <div className="mx-auto mt-12 w-full max-w-5xl md:mt-16">
            <Image
              src={logosSrc}
              alt={t("partnersLogosAlt")}
              width={2400}
              height={800}
              quality={95}
              className="h-auto w-full object-contain [image-rendering:auto]"
              sizes="(min-width: 1280px) 1152px, (min-width: 768px) 90vw, 100vw"
              priority={false}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
