import { getTranslations } from "next-intl/server";
import { ui } from "@/lib/ui";

export async function AboutHistorySection() {
  const t = await getTranslations("AboutPage");
  const milestones = [
    {
      label: t("historyMilestone1Label"),
      body: t("historyMilestone1Body"),
    },
    {
      label: t("historyMilestone2Label"),
      body: t("historyMilestone2Body"),
    },
    {
      label: t("historyMilestone3Label"),
      body: t("historyMilestone3Body"),
    },
  ];

  return (
    <section
      className={`${ui.section} text-white`}
      style={{
        background: "linear-gradient(165deg, #0a1628 0%, #001F3F 45%, #141452 100%)",
      }}
    >
      <div className={`${ui.marketingContent} relative max-w-4xl`}>
        <p className={`text-center md:text-left ${ui.eyebrow} text-slate-400`}>
          {t("historyEyebrow")}
        </p>
        <h2 className="mt-4 text-center text-3xl font-semibold leading-tight tracking-tight text-white md:text-left md:text-4xl">
          {t("historyTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:mx-0 md:text-left md:text-base">
          {t("historyIntro")}
        </p>

        <div className="relative mt-12 md:mt-16">
          <ul className="flex flex-col gap-8 md:gap-12">
            {milestones.map((m, i) => (
              <li
                key={i}
                className="grid gap-4 md:grid-cols-[minmax(0,7.5rem)_1fr] md:gap-10 lg:grid-cols-[minmax(0,9rem)_1fr]"
              >
                <div className="md:pt-1">
                  <span className="inline-flex max-w-full items-center justify-center rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-center text-[11px] font-semibold leading-snug text-white md:min-w-[7rem] md:px-4 md:text-xs">
                    {m.label}
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-6 shadow-sm backdrop-blur-sm md:p-8">
                  <p className="text-sm leading-relaxed text-white/85 md:text-base md:leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
