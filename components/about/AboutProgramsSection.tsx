import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MYCEO_PROGRAMS } from "@/lib/constants";
import { ui } from "@/lib/ui";

export async function AboutProgramsSection() {
  const t = await getTranslations("AboutPage");

  return (
    <section
      className={`${ui.borderSection} bg-white ${ui.section}`}
      aria-labelledby="about-programs-heading"
    >
      <div className={ui.marketingContent}>
        <header className="mx-auto max-w-2xl text-center">
          <p className={ui.eyebrow}>{t("programsEyebrow")}</p>
          <h2
            id="about-programs-heading"
            className={`mt-3 ${ui.displayMd}`}
          >
            {t("programsTitle")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
            {t("programsSubtitle")}
          </p>
        </header>

        <ul className="mt-10 grid list-none grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-5 md:mt-14 md:gap-6 lg:gap-8">
          {MYCEO_PROGRAMS.map((program) => (
            <li key={program.id} className="min-w-0">
              <figure className="m-0">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-slate-200/90 bg-slate-50 shadow-sm md:rounded-2xl">
                  <Image
                    src={program.image}
                    alt={t(`${program.i18nKey}ImageAlt`)}
                    fill
                    className="object-cover object-center"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <figcaption className="sr-only">
                  {t(`${program.i18nKey}Title`)}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
