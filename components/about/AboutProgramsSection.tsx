import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { MYCEO_PROGRAMS } from "@/lib/constants";

export async function AboutProgramsSection() {
  const t = await getTranslations("AboutPage");

  return (
    <section
      className="border-t border-[#001F3F]/8 bg-white px-6 py-16 md:px-10 md:py-24"
      aria-labelledby="about-programs-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-[#B8860B]">
            {t("programsEyebrow")}
          </p>
          <h2
            id="about-programs-heading"
            className="mt-3 text-3xl font-black tracking-tight text-[#001F3F] md:text-4xl"
          >
            {t("programsTitle")}
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-[#001F3F]/65 md:text-base">
            {t("programsSubtitle")}
          </p>
        </header>

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5 md:mt-16 md:gap-6 lg:gap-8">
          {MYCEO_PROGRAMS.map((program) => (
            <li key={program.id} className="min-w-0">
              <figure className="m-0">
                <div className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-[#f6f7fb] shadow-[0_10px_40px_rgba(0,31,63,0.08)] ring-1 ring-[#001F3F]/[0.07] transition duration-300 hover:shadow-[0_18px_48px_rgba(0,31,63,0.12)] md:rounded-3xl">
                  <Image
                    src={program.image}
                    alt={t(`${program.i18nKey}ImageAlt`)}
                    fill
                    className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.02]"
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
