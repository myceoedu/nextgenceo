import { getTranslations } from "next-intl/server";

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
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28"
      style={{
        background:
          "linear-gradient(165deg, #05081a 0%, #001F3F 38%, #141452 72%, #0a0a24 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 10% 0%, rgba(184,134,11,0.18), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(87,227,255,0.12), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <p className="text-center text-xs font-black uppercase tracking-[0.28em] text-[#B8860B] md:text-left">
          {t("historyEyebrow")}
        </p>
        <h2 className="mt-4 text-center text-3xl font-black leading-tight tracking-tight text-white md:text-left md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {t("historyTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-medium leading-relaxed text-white/55 md:mx-0 md:text-left md:text-base">
          {t("historyIntro")}
        </p>

        <div className="relative mt-14 md:mt-20">
          <ul className="flex flex-col gap-10 md:gap-14">
            {milestones.map((m, i) => (
              <li
                key={i}
                className="grid gap-4 md:grid-cols-[minmax(0,7.5rem)_1fr] md:gap-10 lg:grid-cols-[minmax(0,9rem)_1fr]"
              >
                <div className="md:pt-1">
                  <span className="inline-flex max-w-full items-center justify-center rounded-2xl border-2 border-[#B8860B]/90 bg-[#001F3F]/90 px-4 py-2.5 text-center text-[0.7rem] font-black leading-snug tracking-wide text-[#FFD700] shadow-[0_0_28px_rgba(184,134,11,0.22)] md:min-w-[7rem] md:text-xs">
                    {m.label}
                  </span>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-8 md:shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
                  <p className="text-sm font-medium leading-relaxed text-white/[0.88] md:text-base md:leading-relaxed">
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
