import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { getPartnersImagePublicPath } from "@/lib/resolve-partners-image";
import { ui } from "@/lib/ui";

export async function AboutPartnersSection() {
  const t = await getTranslations("AboutPage");
  const logosSrc = getPartnersImagePublicPath();

  return (
    <section
      className={`${ui.borderSection} bg-white ${ui.sectionTight}`}
      aria-labelledby="about-partners-heading"
    >
      <div className={ui.marketingContent}>
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="about-partners-heading"
            className={ui.displayMd}
          >
            {t("partnersTitle")}
          </h2>
          <p className={`mt-3 ${ui.eyebrow}`}>
            {t("partnersSubtitle")}
          </p>
        </header>

        {logosSrc ? (
          <div className="mx-auto mt-10 w-full max-w-5xl md:mt-12">
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
