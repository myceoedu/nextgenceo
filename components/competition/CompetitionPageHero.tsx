import { getTranslations } from "next-intl/server";
import { NAVY_DEEP } from "@/lib/constants";

export async function CompetitionPageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  const t = await getTranslations("CompetitionPageHero");

  return (
    <section
      className="relative overflow-hidden px-6 pb-16 pt-28 text-white md:px-10 md:pb-20 md:pt-32"
      style={{
        background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, #141452 50%, #0B0B32 100%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,215,0,0.25), transparent 45%), radial-gradient(circle at 90% 80%, rgba(87,227,255,0.15), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-[#FFD700]/90">
          {t("eyebrow")}
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/75 md:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
