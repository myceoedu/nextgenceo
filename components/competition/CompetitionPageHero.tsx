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
      className="relative overflow-hidden px-4 pb-14 pt-[calc(var(--ngc-header-h)+1.75rem)] text-white sm:px-6 md:px-8 md:pb-16 md:pt-[calc(var(--ngc-header-h)+2.25rem)] lg:px-8"
      style={{
        background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, #141452 50%, #0B0B32 100%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,215,0,0.22), transparent 45%), radial-gradient(circle at 90% 80%, rgba(87,227,255,0.12), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-100/90 md:text-[13px]">
          {t("eyebrow")}
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight md:mt-4 md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:mt-6 md:text-lg">
            {subtitle}
          </p>
        ) : null}
        <span className="mx-auto mt-6 block h-px w-12 bg-white/25 md:mt-8" aria-hidden />
      </div>
    </section>
  );
}
