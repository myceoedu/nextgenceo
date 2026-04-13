"use client";

/**
 * Marketing sections (home + competition). For new UI, prefer tokens in `@/lib/ui`
 * (container, section padding, cards, buttons) before adding one-off classes.
 */
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { item, sectionY, ViewIn, viewIn } from "@/components/motion-ui";
import { Link } from "@/i18n/navigation";
import { GrandPrizeShowcaseCard } from "@/components/competition/GrandPrizeShowcaseCard";
import { HomeGrandPrizeSpotlight } from "@/components/home/HomeGrandPrizeSpotlight";
import { PreviewTopicIcon } from "@/components/home/PreviewTopicIcons";
import {
  DRIVE_CHALLENGE_URL,
  GEP_HERO_FLOAT_IMAGES,
  GRAND_PRIZE_LABEL,
  HOME_HERO_BACKGROUND_SRC,
  HOME_OUTCOMES_SIDE_IMAGES,
  HOME_TEASER_VIDEO_SRC,
  HOME_TEASER_YOUTUBE_VIDEO_ID,
  LOGO_SRC,
  NAVY,
  NAVY_DEEP,
  SPONSOR_SRC,
} from "@/lib/constants";
import { ABOUT_US_PAGE, COMPETITION_MENU } from "@/lib/competition-menu";
import { ui } from "@/lib/ui";

export function SectionDivider({ invert }: { invert?: boolean }) {
  return (
    <div className={["relative w-full", invert ? "rotate-180" : ""].join(" ")}>
      <svg
        className="block h-[56px] w-full md:h-[90px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31.86,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3.67V120H0V0C59.71,22.76,118.42,67.8,196.85,73.6,264.78,78.63,291.86,62.05,321.39,56.44Z"
          fill={NAVY}
        />
      </svg>
    </div>
  );
}

export function EducatorSection() {
  const t = useTranslations("Educator");
  return (
    <section className={`${ui.borderSection} bg-white text-[#001F3F] ${sectionY}`}>
      <ViewIn className={ui.marketingContent}>
        <div className="mb-10 border-l-4 border-[#001F3F] pl-5 text-left md:mb-12 md:pl-6">
          <p className={ui.eyebrow}>{t("kicker")}</p>
          <h2 className={`mt-3 ${ui.displayMd}`}>
            {t("h1a")} <br />
            <span className="text-[#001F3F]/90">{t("h1b")}</span>
          </h2>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[1.35fr_0.85fr] md:gap-14">
          <div className="min-w-0">
            <p className="mb-6 text-lg font-medium text-slate-800 md:text-xl">
              {t("p1")}
            </p>
            <p className={`mb-6 text-base md:text-lg ${ui.body}`}>
              {t("p2Lead")}{" "}
              <strong className="font-semibold text-slate-800">{t("p2Hot")}</strong> {t("p2Tail")}
            </p>

            <div className={`mb-8 ${ui.cardMuted}`}>
              <p className="text-sm italic leading-relaxed text-slate-800 md:text-base md:leading-relaxed">
                &quot;{t("quote")}&quot;
              </p>
            </div>

            <a
              href="https://www.instagram.com/myceo_"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-3 text-sm font-semibold text-slate-700 transition hover:text-[#001F3F] md:text-base"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </span>
              {t("igCta")}
            </a>
          </div>

          <div className="rounded-xl bg-[#001F3F] p-8 text-white shadow-md md:p-10">
            <h3 className="mb-6 border-b border-white/15 pb-4 text-lg font-semibold text-white md:text-xl">
              {t("sideTitle")}
            </h3>
            <ul className="mb-8 space-y-4 text-sm leading-relaxed text-white/90 md:text-[15px]">
              <li className="flex gap-3">
                <span className="mt-0.5 text-emerald-300" aria-hidden>
                  ✓
                </span>
                {t("li1")}
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-emerald-300" aria-hidden>
                  ✓
                </span>
                {t("li2")}
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-emerald-300" aria-hidden>
                  ✓
                </span>
                {t("li3")}
              </li>
            </ul>

            <Link
              href="/competition/registration"
              className="block w-full rounded-md bg-white px-6 py-3.5 text-center text-sm font-semibold text-[#001F3F] shadow-sm transition hover:bg-slate-100"
            >
              {t("register")}
            </Link>
            <p className="mt-5 text-center text-xs italic text-white/55">
              {t("footnote")}
            </p>
          </div>
        </div>
      </ViewIn>
    </section>
  );
}

export function ApaItuSection() {
  const t = useTranslations("ApaItu");
  const tEdu = useTranslations("Educator");
  const cards = [
    { title: t("c1t"), desc: t("c1d") },
    { title: t("c2t"), desc: t("c2d") },
    { title: t("c3t"), desc: t("c3d") },
  ];
  return (
    <section
      className={`${sectionY} text-center text-white`}
      style={{
        background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
      }}
    >
      <div className={ui.marketingContent}>
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`mb-5 ${ui.displayMd} text-white md:mb-6`}>{t("title")}</h2>
          <p className="mx-auto max-w-3xl text-base font-medium leading-relaxed text-white/80 md:text-lg">
            {t("lead")}
          </p>
        </motion.div>

        <div className="mt-12 grid justify-items-stretch gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex min-w-0 flex-col rounded-xl border border-white/10 bg-white/[0.06] p-7 text-left shadow-sm transition hover:bg-white/[0.09] md:p-8"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-sm font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">{c.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-white/75 md:text-[15px] md:leading-relaxed">
                {c.desc}
              </p>
              <div aria-hidden className="mt-6 h-px w-full bg-white/10" />
              <div className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                {tEdu("powered")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GrandPrizeSection() {
  const tg = useTranslations("GrandPrize");
  const th = useTranslations("HomeHero");
  return (
    <section className={`${ui.borderSection} bg-white py-16 md:py-24`}>
      <ViewIn className={`relative ${ui.marketingContent} max-w-6xl`}>
        <GrandPrizeShowcaseCard
          eyebrow={tg("title")}
          amount={<span className="tabular-nums">{GRAND_PRIZE_LABEL}</span>}
          subline={th("prizeSub")}
          benefitCert={th("prizeDetailCerts")}
          benefitPajsk={th("prizeDetailPajsk")}
        />
      </ViewIn>
    </section>
  );
}

export function ManfaatSekolahSection() {
  const t = useTranslations("ManfaatSekolah");
  const items = [
    { title: t("m1t"), d: t("m1d") },
    { title: t("m2t"), d: t("m2d") },
    { title: t("m3t"), d: t("m3d") },
    { title: t("m4t"), d: t("m4d") },
    { title: t("m5t"), d: t("m5d") },
  ];
  return (
    <section
      className={`${sectionY}`}
      style={{
        background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
      }}
    >
      <ViewIn className={`${ui.marketingContent} max-w-4xl`}>
        <h2 className={`mb-10 text-center ${ui.displayMd} text-white md:mb-12`}>
          {t("title")}
        </h2>

        <div className="space-y-4">
          {items.map((x) => (
            <motion.div
              key={x.title}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              className="rounded-xl border border-white/10 bg-white/[0.06] px-6 py-5 shadow-sm backdrop-blur-sm transition hover:border-white/15 md:px-7 md:py-6"
            >
              <div className="text-lg font-semibold text-white md:text-xl">{x.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-white/75 md:text-[15px] md:leading-relaxed">
                {x.d}
              </div>
            </motion.div>
          ))}
        </div>
      </ViewIn>
    </section>
  );
}

export function ManfaatPelajarSection() {
  const t = useTranslations("ManfaatPelajar");
  const cards = [
    {
      title: t("grandTitle", { amount: GRAND_PRIZE_LABEL }),
      desc: t("grandDesc"),
      gold: true,
    },
    { title: t("c2Title"), desc: t("c2Desc") },
    { title: t("c3Title"), desc: t("c3Desc") },
    { title: t("c4Title"), desc: t("c4Desc") },
    { title: t("c5Title"), desc: t("c5Desc") },
  ];
  return (
    <section className={`${ui.borderSection} bg-white ${sectionY}`}>
      <ViewIn className={`${ui.marketingContent} text-[#001F3F]`}>
        <h2 className={`mb-10 text-center ${ui.displaySm} md:mb-12 md:text-3xl`}>{t("title")}</h2>

        <div className="grid justify-items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className={[
                "min-w-0 rounded-xl border p-6 text-left shadow-sm transition md:p-7",
                c.gold
                  ? "border-[#a67c14]/45 bg-gradient-to-br from-[#fffdf6] via-[#f5ecd4] to-[#e8d9a8]"
                  : "border-slate-200/90 bg-white hover:border-slate-300/90",
              ].join(" ")}
            >
              <div
                className={[
                  "text-base font-semibold md:text-lg",
                  c.gold
                    ? "font-[family-name:var(--font-grand-display)] tracking-tight text-[#1A1105]"
                    : "text-slate-900",
                ].join(" ")}
              >
                {c.title}
              </div>
              <div className={`mt-2 ${ui.body} ${c.gold ? "text-[#1A1105]/82" : "text-slate-600"}`}>
                {c.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </ViewIn>
    </section>
  );
}

export function TermaSection() {
  const t = useTranslations("Terma");
  const termaItems = [
    { h: t("i1h"), p: t("i1p") },
    { h: t("i2h"), p: t("i2p") },
    { h: t("i3h"), p: t("i3p") },
    { h: t("i4h"), p: t("i4p") },
    { h: t("i5h"), p: t("i5p") },
    { h: t("i6h"), p: t("i6p") },
    { h: t("i7h"), p: t("i7p") },
    { h: t("i8h"), p: t("i8p") },
  ];
  return (
    <section className={`bg-[#001F3F] ${sectionY} text-center text-amber-100`}>
      <ViewIn className={ui.marketingContent}>
        <h2 className={`mb-10 text-white ${ui.displaySm} md:mb-12 md:text-3xl`}>{t("title")}</h2>

        <div className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {termaItems.map((x, idx) => (
            <motion.div
              key={`${x.h}-${idx}`}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              className="flex min-h-[220px] w-full max-w-[240px] flex-col items-center justify-center rounded-full border border-white/10 bg-white p-5 text-center text-[#001F3F] shadow-md sm:min-h-[240px] sm:p-6"
            >
              <div className={`mb-2 font-semibold ${idx < 4 ? "text-base md:text-lg" : "text-sm md:text-base"}`}>
                {x.h}
              </div>
              <div className="text-xs font-medium leading-snug text-slate-700 md:text-[13px] md:leading-snug">
                {x.p}
              </div>
            </motion.div>
          ))}
        </div>
      </ViewIn>
    </section>
  );
}

export function PenilaianSection() {
  const t = useTranslations("Penilaian");
  const rows = [
    { h: t("s1h"), p: t("s1p"), pct: "20%" },
    { h: t("s2h"), p: t("s2p"), pct: "20%" },
    { h: t("s3h"), p: t("s3p"), pct: "25%" },
    { h: t("s4h"), p: t("s4p"), pct: "35%" },
  ];
  return (
    <section className={`bg-white ${sectionY}`}>
      <ViewIn className={`${ui.marketingContent} max-w-5xl text-[#001F3F]`}>
        <h2 className={`mb-10 text-center ${ui.displaySm} md:mb-12 md:text-3xl`}>{t("title")}</h2>

        <div className="space-y-4 text-left md:space-y-5">
          {rows.map((x) => (
            <motion.div
              key={x.h}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              className="flex flex-col gap-4 rounded-xl border border-slate-200/90 bg-white px-5 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-6"
            >
              <div className="min-w-0">
                <div className="text-base font-semibold text-slate-900 md:text-lg">{x.h}</div>
                <div className={`mt-1 ${ui.body}`}>{x.p}</div>
              </div>
              <div className="shrink-0 text-xl font-semibold tabular-nums text-[#001F3F] md:text-2xl">
                {x.pct}
              </div>
            </motion.div>
          ))}
        </div>
      </ViewIn>
    </section>
  );
}

export function TimelineSection() {
  const t = useTranslations("Timeline");
  const timelineStages = [
    { when: t("s1when"), title: t("s1title"), desc: t("s1desc") },
    { when: t("s2when"), title: t("s2title"), desc: t("s2desc") },
    { when: t("s3when"), title: t("s3title"), desc: t("s3desc") },
  ];
  return (
    <section className={`bg-[#001F3F] ${sectionY}`}>
      <ViewIn className={`${ui.marketingContent} text-center`}>
        <h2 className={`mb-10 text-amber-100 ${ui.displaySm} md:mb-12 md:text-3xl`}>
          {t("title")}
        </h2>

        <div className="relative grid items-start gap-12 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden
            className="absolute left-[8%] right-[8%] top-[52px] hidden h-px bg-white/20 md:block"
          />

          {timelineStages.map((x) => (
            <motion.div
              key={x.when}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="text-amber-50/95"
            >
              <div className="mx-auto mb-6 flex h-[92px] w-[160px] items-center justify-center rounded-lg bg-white text-lg font-semibold text-[#001F3F] shadow-md md:h-[100px] md:w-[170px] md:text-xl">
                {x.when}
              </div>
              <div className="text-base font-semibold text-white md:text-lg">{x.title}</div>
              <div className="mx-auto mt-2 max-w-[320px] text-sm leading-relaxed text-white/70 md:text-[15px]">
                {x.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </ViewIn>
    </section>
  );
}

export function ImportantDatesSectionWithVisual() {
  return (
    <section className="relative overflow-hidden border-t border-slate-200/80 bg-slate-50 px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-8">
      <ViewIn className="relative mx-auto max-w-6xl">
        <HomeGrandPrizeSpotlight />
        <ImportantDatesCard />
      </ViewIn>
    </section>
  );
}

const DATE_CARD_THEMES = {
  coral: {
    border: "border-slate-200",
    badge: "bg-slate-700 text-white",
    month: "text-[#001F3F]",
  },
  navy: {
    border: "border-slate-200",
    badge: "bg-[#001F3F] text-white",
    month: "text-[#001F3F]",
  },
  gold: {
    border: "border-slate-300",
    badge: "bg-slate-900 text-white",
    month: "text-[#001F3F]",
  },
} as const;

export function ImportantDatesCard() {
  const t = useTranslations("ImportantDates");
  const tt = useTranslations("Timeline");
  const stages = [
    {
      when: tt("s1when"),
      title: tt("s1title"),
      desc: tt("s1desc"),
      tier: "coral" as keyof typeof DATE_CARD_THEMES,
      badge: t("badgeStandard"),
    },
    {
      when: tt("s2when"),
      title: tt("s2title"),
      desc: tt("s2desc"),
      tier: "navy" as keyof typeof DATE_CARD_THEMES,
      badge: t("badgeStandard"),
    },
    {
      when: tt("s3when"),
      title: tt("s3title"),
      desc: tt("s3desc"),
      tier: "gold" as keyof typeof DATE_CARD_THEMES,
      badge: t("badgeFeatured"),
    },
  ];

  return (
    <div className="w-full">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 md:text-[13px]">
          {t("label")}
        </p>
        <h2 className="mt-3 text-balance text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl md:leading-tight">
          {t("title")}
        </h2>
        <span aria-hidden className="mx-auto mt-4 block h-px w-12 bg-slate-300" />
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-slate-600 md:text-base">
          {t("sectionLead")}
        </p>
      </header>

      <ul className="mt-12 grid list-none gap-5 p-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {stages.map((x) => {
          const th = DATE_CARD_THEMES[x.tier];
          return (
            <li
              key={x.when}
              className={[
                "relative flex min-h-full flex-col rounded-xl border bg-white px-5 pb-6 pt-9 text-center shadow-sm",
                th.border,
              ].join(" ")}
            >
              <div
                className={[
                  "absolute -top-2.5 left-1/2 max-w-[92%] -translate-x-1/2 rounded-md px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] sm:text-[11px]",
                  th.badge,
                ].join(" ")}
              >
                {x.badge}
              </div>
              <h3 className="text-sm font-semibold text-slate-800 md:text-[15px]">
                {x.title}
              </h3>
              <p
                className={[
                  "mt-4 text-3xl font-semibold leading-none tracking-tight sm:text-[2rem] md:text-[2.25rem]",
                  th.month,
                ].join(" ")}
              >
                {x.when}
              </p>
              <p className="mt-4 flex-1 text-left text-sm leading-relaxed text-slate-600 md:text-center md:text-[15px]">
                {x.desc}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-slate-500 md:text-sm">
        {t("footnote")}
      </p>
    </div>
  );
}

type GepCtaTarget = { label: string; href: string; external?: boolean };

function GepFloatTile({
  src,
  className = "",
  rotateClass = "",
}: {
  src: string;
  className?: string;
  rotateClass?: string;
}) {
  return (
    <div className={["w-full max-w-[7.25rem]", rotateClass, className].filter(Boolean).join(" ")}>
      {/* Native img so each tile hugs its real aspect ratio (no fixed-height “card”). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="block h-auto w-full rounded-xl border border-slate-200/80 shadow-sm"
      />
    </div>
  );
}

function GepHeroCtaButton({
  cta,
  className,
  iconAccent = "orange",
}: {
  cta: GepCtaTarget;
  className: string;
  iconAccent?: "orange" | "navy";
}) {
  const iconClass = iconAccent === "navy" ? "text-[#001F3F]" : "text-[#FF7F32]";
  const inner = (
    <>
      {cta.label}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <ArrowUpRight className={["h-4 w-4", iconClass].join(" ")} aria-hidden />
      </span>
    </>
  );
  if (cta.external) {
    return (
      <a href={cta.href} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={cta.href} className={className}>
      {inner}
    </Link>
  );
}

function GepOutreachHero({
  variant,
  pill,
  title,
  lead,
  footnote,
  heroCta,
  termsLinkLabel,
  heading,
  titleUppercase = false,
}: {
  variant: "registration" | "home";
  pill: string;
  title: ReactNode;
  lead: string;
  footnote?: string | null;
  heroCta: GepCtaTarget;
  termsLinkLabel: string;
  heading: "h1" | "h2";
  titleUppercase?: boolean;
}) {
  const t = useTranslations("Registration");
  const gepLeft = GEP_HERO_FLOAT_IMAGES.slice(0, 2);
  const gepRight = GEP_HERO_FLOAT_IMAGES.slice(2);
  const isHome = variant === "home";

  const sectionPad =
    variant === "registration"
      ? "relative isolate overflow-x-clip bg-white px-6 pb-10 pt-[calc(var(--ngc-header-h)+var(--ngc-hero-top-gap)+1.25rem)] md:px-10 md:pb-14 md:pt-[calc(var(--ngc-header-h)+var(--ngc-hero-top-gap)+1.75rem)]"
      : // Contain rings/floats inside the section; generous vertical rhythm so nothing bleeds into header/footer.
        "relative isolate -mb-px overflow-hidden border-t border-slate-200/80 bg-white py-20 scroll-mt-[calc(var(--ngc-header-h)+1rem)] md:py-24 lg:py-28";

  const titleCls = isHome
    ? [
        "mt-5 font-[family-name:var(--font-montserrat)] font-extrabold leading-[1.12] tracking-tight text-balance text-[#001F3F] sm:text-2xl md:mt-7 md:text-3xl md:leading-[1.1] lg:text-[2.45rem] lg:leading-[1.08]",
        titleUppercase ? "uppercase" : "",
      ]
        .filter(Boolean)
        .join(" ")
    : [
        "mt-5 font-black leading-[1.1] tracking-tight sm:text-3xl md:mt-6 md:text-4xl md:leading-[1.08] lg:text-[2.65rem]",
        titleUppercase ? "text-[1.55rem] uppercase" : "text-[1.65rem] md:text-[2.25rem] lg:text-[2.5rem]",
      ].join(" ");

  const ctaClass = isHome
    ? "inline-flex items-center gap-2 rounded-full bg-[#FF7F32] px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#e56f28] md:px-10 md:py-4 md:text-[12px] md:tracking-[0.14em]"
    : "inline-flex items-center gap-3 rounded-full bg-[#FF7F32] px-8 py-3.5 text-[12px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#e56f28] md:px-10 md:py-4 md:text-[13px]";

  const ringLayer =
    variant === "registration" ? (
      <>
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/4 hidden h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full border-[3px] border-[#FF7F32]/25 md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-1/3 hidden h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full border-[3px] border-[#FF7F32]/22 md:block"
        />
      </>
    ) : (
      <>
        {/* Thin peach arcs from the sides (reference: light rings, not heavy strokes). */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[44%] top-[4%] hidden h-[min(95vw,38rem)] w-[min(95vw,38rem)] rounded-full border border-orange-200/80 sm:-left-[40%] md:top-[10%] md:block md:h-[min(88vw,42rem)] md:w-[min(88vw,42rem)] lg:-left-[36%]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[44%] top-[10%] hidden h-[min(92vw,36rem)] w-[min(92vw,36rem)] rounded-full border border-orange-200/75 sm:-right-[40%] md:top-[16%] md:block md:h-[min(85vw,40rem)] md:w-[min(85vw,40rem)] lg:-right-[34%]"
        />
      </>
    );

  const floatCols = (
    <>
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute hidden flex-col gap-4 2xl:gap-5",
          isHome
            ? "top-1/2 z-0 max-w-[7.25rem] -translate-y-1/2 sm:left-4 md:left-6 lg:flex lg:left-8 xl:left-10 2xl:left-14"
            : "left-0 top-2 z-[1] xl:flex",
        ].join(" ")}
      >
        {gepLeft.map((src, i) => (
          <GepFloatTile
            key={src}
            src={src}
            rotateClass={i % 2 === 0 ? "-rotate-6" : "rotate-3"}
          />
        ))}
      </div>
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute hidden flex-col gap-4 2xl:gap-5",
          isHome
            ? "top-1/2 z-0 max-w-[7.25rem] -translate-y-1/2 sm:right-4 md:right-6 lg:flex lg:right-8 xl:right-10 2xl:right-14"
            : "right-0 top-6 z-[1] xl:flex",
        ].join(" ")}
      >
        {gepRight.map((src, i) => (
          <GepFloatTile
            key={src}
            src={src}
            rotateClass={i % 2 === 0 ? "rotate-6" : "-rotate-3"}
          />
        ))}
      </div>
    </>
  );

  const copyColumn = (
    <div
      className={[
        "relative z-10 mx-auto px-1 text-center",
        isHome
          ? "w-full max-w-2xl lg:max-w-[42rem] xl:max-w-[44rem]"
          : "max-w-xl md:max-w-2xl xl:max-w-2xl",
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] md:text-xs",
          isHome
            ? "rounded-full border border-slate-200/90 bg-white text-[#001F3F]"
            : "rounded-full border border-[#001F3F]/10 bg-[#f8fafc] text-[#001F3F]/80",
        ].join(" ")}
      >
        {pill}
      </span>
      {heading === "h1" ? (
        <h1 className={titleCls}>{title}</h1>
      ) : (
        <h2 className={titleCls}>{title}</h2>
      )}
      <p
        className={[
          "mx-auto mt-5 text-[15px] font-medium leading-relaxed md:mt-6 md:text-lg",
          isHome
            ? "max-w-2xl text-slate-600"
            : "max-w-lg text-[#001F3F]/58 md:max-w-xl",
        ].join(" ")}
      >
        {lead}
      </p>
      {footnote ? (
        <p
          className={[
            "mt-3 text-xs italic md:text-sm",
            isHome ? "text-slate-400" : "text-[#001F3F]/40",
          ].join(" ")}
        >
          {footnote}
        </p>
      ) : null}
      <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-7">
        <GepHeroCtaButton
          cta={heroCta}
          className={ctaClass}
          iconAccent="orange"
        />
      </div>
      <div
        className={[
          "mt-6 flex md:mt-7",
          isHome
            ? "flex-row flex-wrap items-center justify-center gap-5 text-[#001F3F]/55 sm:gap-6"
            : "flex-col items-center gap-3 text-slate-500 sm:flex-row sm:flex-wrap sm:justify-center",
        ].join(" ")}
      >
        <Link
          href="/competition/terms"
          className={[
            "shrink-0 text-sm font-medium underline underline-offset-[6px] transition md:text-[15px]",
            isHome
              ? "text-[#001F3F]/60 decoration-slate-300 hover:text-[#001F3F] hover:decoration-[#001F3F]/45"
              : "text-[#001F3F] decoration-slate-300 hover:decoration-[#001F3F]/50",
          ].join(" ")}
        >
          {termsLinkLabel}
        </Link>
        <a
          href="https://www.instagram.com/myceo_"
          target="_blank"
          rel="noreferrer"
          className={[
            "shrink-0 text-xs font-medium no-underline transition md:text-sm",
            isHome
              ? "text-[#001F3F]/55 hover:text-[#001F3F]"
              : "text-slate-500 hover:text-[#001F3F]",
          ].join(" ")}
        >
          {t("ig")}
        </a>
      </div>
    </div>
  );

  if (isHome) {
    return (
      <section className={sectionPad}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {ringLayer}
        </div>
        <ViewIn
          viewport={{ once: true, amount: 0.35 }}
          className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10"
        >
          {floatCols}
          {copyColumn}
        </ViewIn>
      </section>
    );
  }

  return (
    <section className={sectionPad}>
      {ringLayer}
      <ViewIn className="relative z-10 mx-auto w-full max-w-7xl pb-14 md:px-2 md:pb-16">
        {floatCols}
        {copyColumn}
      </ViewIn>
    </section>
  );
}

export function RegistrationSection() {
  const t = useTranslations("Registration");
  const tf = useTranslations("HomeFinalCta");
  const heroTitle = t("gepHeroTitle");
  const titleMatch = heroTitle.match(/^(.+?)\s+(\d{4})$/);
  const titleNode =
    titleMatch != null ? (
      <>
        <span className="text-[#001F3F]">{titleMatch[1].trim()}</span>{" "}
        <span className="text-[#FF7F32]">{titleMatch[2]}</span>
      </>
    ) : (
      <span className="text-[#001F3F]">{heroTitle}</span>
    );

  return (
    <>
      <GepOutreachHero
        variant="registration"
        pill={t("gepHeroPill")}
        title={titleNode}
        lead={t("gepHeroLead")}
        footnote={t("footnote")}
        heroCta={{
          label: t("gepRegister"),
          href: DRIVE_CHALLENGE_URL,
          external: true,
        }}
        termsLinkLabel={tf("termsLink")}
        heading="h1"
        titleUppercase
      />
      <section
        className="border-t border-slate-200/90 bg-slate-50/90 px-6 py-5 text-center md:px-10 md:py-6"
        aria-label={t("alreadyHaveAccount")}
      >
        <p className="mx-auto max-w-lg text-sm font-medium text-[#001F3F]/72 md:text-[15px]">
          {t("alreadyHaveAccount")}{" "}
          <Link
            href="/login"
            className="font-bold text-[#001F3F] underline decoration-[#001F3F]/25 underline-offset-[5px] transition hover:decoration-[#B8860B]/50"
          >
            {t("loginCta")}
          </Link>
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm font-medium text-[#001F3F]/72 md:text-[15px]">
          {t("newAccountPrompt")}{" "}
          <Link
            href="/register"
            className="font-bold text-[#001F3F] underline decoration-[#001F3F]/25 underline-offset-[5px] transition hover:decoration-[#B8860B]/50"
          >
            {t("signUpCta")}
          </Link>
        </p>
      </section>
    </>
  );
}

export function SponsorStrip() {
  const t = useTranslations("Sponsor");
  return (
    <section className={`${ui.borderSection} relative bg-slate-50/90 ${sectionY} text-center`}>
      <ViewIn className={`${ui.marketingContent} text-[#001F3F]`}>
        <h2 className={`mb-8 ${ui.displayMd} md:mb-10`}>
          {t("title")}
        </h2>
        <div className="flex justify-center px-1">
          <Image
            src={SPONSOR_SRC}
            alt={t("alt")}
            width={1000}
            height={560}
            className="h-auto w-full max-w-[1000px] rounded-xl border border-slate-200/80 bg-white shadow-sm"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
        </div>
      </ViewIn>
    </section>
  );
}

export function HowToParticipateSection() {
  const t = useTranslations("HowToParticipate");
  const steps = [
    { n: "01", title: t("s1t"), d: t("s1d") },
    { n: "02", title: t("s2t"), d: t("s2d") },
    { n: "03", title: t("s3t"), d: t("s3d") },
    { n: "04", title: t("s4t"), d: t("s4d") },
    { n: "05", title: t("s5t"), d: t("s5d") },
    { n: "06", title: t("s6t"), d: t("s6d") },
  ];
  return (
    <section className={`bg-slate-50 ${sectionY}`}>
      <ViewIn className={`${ui.marketingContent} text-[#001F3F]`}>
        <h2 className={`mb-3 text-center ${ui.displaySm} md:mb-4 md:text-3xl`}>{t("title")}</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-slate-600 md:mb-12 md:text-base">
          {t("intro")}
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="rounded-xl border border-slate-200/90 bg-white p-6 shadow-sm md:p-7"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {t("stepLabel")} {s.n}
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{s.title}</div>
              <p className={`mt-2 ${ui.body}`}>{s.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-12">
          <Link href="/competition/terms" className={`${ui.btnSecondary} w-full sm:w-auto`}>
            {t("termsCta")}
          </Link>
          <Link href="/competition/registration" className={`${ui.btnPrimary} w-full sm:w-auto`}>
            {t("regCta")}
          </Link>
        </div>
      </ViewIn>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center rounded-md bg-zinc-900/78 px-3 py-1.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-white backdrop-blur-sm md:text-[11px] md:tracking-[0.15em]">
      {children}
    </span>
  );
}

export function HomeHeroBlock() {
  const t = useTranslations("HomeHero");
  const tc = useTranslations("Countdown");
  const mini = [
    { k: t("miniMac"), v: t("miniReg") },
    { k: t("miniMei"), v: t("miniBoot") },
    { k: t("miniJun"), v: t("miniPitch") },
  ];
  return (
    <section className="relative flex min-h-[100dvh] min-h-[100svh] w-full max-w-[100vw] flex-col overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={HOME_HERO_BACKGROUND_SRC}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="ngc-hero-bg object-cover object-[center_32%] md:object-center"
        />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(102deg, rgba(8,7,6,0.92) 0%, rgba(12,10,8,0.78) 24%, rgba(18,14,10,0.45) 42%, rgba(10,9,8,0.2) 58%, rgba(0,0,0,0.06) 72%, transparent 85%)`,
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-black/12 md:hidden" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-black/12 to-transparent"
      />

      {/* Reserve fixed header + gap so hero content lives in exactly the remaining viewport. */}
      <div
        aria-hidden
        className="shrink-0"
        style={{
          height: "calc(var(--ngc-header-h) + var(--ngc-hero-top-gap))",
        }}
      />

      <div className="ngc-hero-main relative z-10 flex w-full min-h-0 flex-1 flex-col justify-center py-3 md:py-4">
        <div className="flex w-full min-w-0 flex-1 flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <motion.div
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
            }}
            initial="hidden"
            animate="show"
            className="grid w-full min-w-0 items-start gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,1fr)] lg:items-start lg:gap-10 xl:gap-14 2xl:gap-16"
          >
            <div className="text-white">
              <div className="w-full min-w-0 lg:max-w-none xl:pr-2">
                <motion.div variants={item}>
                  <Badge>{t("badge")}</Badge>
                </motion.div>

                <motion.div variants={item} className="mt-5 flex gap-4 sm:mt-6 sm:gap-5 md:gap-6">
                  <div
                    aria-hidden
                    className="mt-1 hidden w-[3px] shrink-0 rounded-full bg-[#facc15] sm:block sm:min-h-[7.75rem] md:mt-1.5 md:min-h-[10rem] lg:min-h-[11.5rem]"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white sm:text-base md:text-lg md:tracking-[0.24em] lg:text-xl">
                      NextGen
                    </p>
                    <h1 className="mt-1.5 text-[clamp(3.35rem,12vw,8.75rem)] font-bold leading-[0.86] tracking-[-0.035em] text-white md:mt-2">
                      CEO
                    </h1>
                    <p className="mt-2.5 text-[clamp(1.35rem,4.5vw,2.65rem)] font-bold uppercase tracking-[0.12em] text-[#facc15] md:mt-3.5 md:tracking-[0.14em]">
                      Challenge 2026
                    </p>
                  </div>
                </motion.div>

                <motion.p
                  variants={item}
                  className="mt-6 max-w-2xl text-base font-bold leading-snug text-balance md:mt-7 md:text-lg lg:max-w-3xl xl:max-w-[40rem]"
                >
                  <span className="text-white">| </span>
                  <span className="text-[#facc15]">{t("pitchLine")}</span>
                </motion.p>

                <motion.p
                  variants={item}
                  className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 md:mt-6 md:text-[15px] md:leading-relaxed lg:max-w-3xl xl:max-w-[44rem]"
                >
                  {t("body")}
                </motion.p>

                <motion.div
                  variants={item}
                  className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-10"
                >
                  <Link
                    href="/competition/registration"
                    className="inline-flex min-h-[44px] min-w-[180px] items-center justify-center rounded-lg bg-[#facc15] px-6 py-3 text-sm font-bold uppercase tracking-wide text-neutral-950 transition hover:bg-[#eab308] md:min-h-[46px]"
                  >
                    {t("ctaRegister")}
                  </Link>
                  <Link
                    href="/competition/terms"
                    className="text-center text-sm font-medium text-white underline decoration-white/45 underline-offset-[6px] transition hover:decoration-white sm:text-left md:text-[15px]"
                  >
                    {t("ctaSecondary")}
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              variants={item}
              className="h-full w-full min-w-0 rounded-2xl border border-white/18 bg-black/40 p-4 backdrop-blur-xl sm:p-5 md:p-6 lg:h-auto lg:pl-7 lg:pr-6 xl:pl-8"
            >
              <div>
                <Countdown
                  targetIso="2026-09-30T00:00:00+08:00"
                  label={tc("finaleLabel")}
                  embedded
                />
              </div>
              <div className="mt-6 border-t border-white/12 pt-5 md:mt-7 md:pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 md:text-[11px] md:tracking-[0.2em]">
                  {t("timelineEyebrow")}
                </p>
                <div className="mt-3 flex flex-col gap-2.5 text-[13px] leading-snug text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 md:text-sm">
                  {mini.map((x) => (
                    <span key={x.k}>
                      <span className="font-bold text-white">{x.k}</span>
                      <span className="text-white/45"> — </span>
                      {x.v}
                    </span>
                  ))}
                </div>
                <p className="mt-5 font-mono text-[10px] tracking-wide text-[#facc15]/90 md:mt-6 md:text-xs">
                  {t("hashtag")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HomeVideoAsideCheck() {
  return (
    <span
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-[#001F3F]"
      aria-hidden
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 12 10" fill="none">
        <path
          d="M1 5l3.5 3.5L11 1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** MP4 fallback: avoids showing another programme’s first frame as a “poster”; user opts in to play. */
function HomeMp4TeaserPlayer() {
  const t = useTranslations("HomeVideo");
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#141210]">
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-10 text-center transition hover:bg-[#1a1814] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD700]"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD700]/90">
            {t("fallbackOverlayKicker")}
          </span>
          <span className="max-w-md font-sans text-lg font-semibold leading-snug text-white md:text-xl">
            {t("fallbackOverlayTitle")}
          </span>
          <span className="max-w-md font-sans text-sm leading-relaxed text-white/72 md:text-[15px]">
            {t("fallbackOverlayBody")}
          </span>
          <span className="mt-1 inline-flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-2.5 text-sm font-bold tracking-wide text-[#001F3F] shadow-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
            {t("fallbackPlay")}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      <video
        className="h-full w-full object-contain"
        controls
        playsInline
        preload="metadata"
        autoPlay
      >
        <source src={HOME_TEASER_VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}

export function HomeVideoTeaser() {
  const t = useTranslations("HomeVideo");
  const ytId = HOME_TEASER_YOUTUBE_VIDEO_ID.trim();
  const useYoutube = Boolean(ytId);

  const asidePoints = [
    { title: t("aside1t"), desc: t("aside1d") },
    { title: t("aside2t"), desc: t("aside2d") },
    { title: t("aside3t"), desc: t("aside3d") },
    { title: t("aside4t"), desc: t("aside4d") },
    { title: t("aside5t"), desc: t("aside5d") },
  ];

  return (
    <section
      className="border-t border-slate-200/80 bg-white px-4 py-16 font-sans sm:px-6 md:px-8 md:py-20 lg:px-8"
      aria-labelledby="home-video-heading"
    >
      <ViewIn className="mx-auto max-w-7xl">
        <motion.div
          variants={viewIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14"
        >
          <motion.div
            variants={viewIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="min-w-0 lg:col-span-7"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#001F3F]/55 md:mb-4 md:text-[13px]">
              {t("eyebrow")}
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-black shadow-sm">
              {useYoutube ? (
                <iframe
                  title={t("youtubeIframeTitle")}
                  src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(ytId)}?rel=0`}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              ) : (
                <HomeMp4TeaserPlayer />
              )}
            </div>
            {useYoutube ? (
              <p className="mt-3 text-xs text-slate-500">{t("videoHintYoutube")}</p>
            ) : (
              <p className="mt-3 text-xs text-slate-500">{t("videoHintMp4")}</p>
            )}
          </motion.div>

          <motion.aside
            variants={viewIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            className="min-w-0 lg:col-span-5 lg:pt-0"
          >
            <div className="text-center lg:text-left">
              <h2
                id="home-video-heading"
                className="font-[family-name:var(--font-montserrat)] text-balance text-2xl font-extrabold leading-[1.12] tracking-tight text-[#001F3F] md:text-3xl lg:text-[2.05rem] lg:leading-[1.1]"
              >
                {t("asideHead")}
              </h2>
              <span
                aria-hidden
                className="mx-auto mt-4 block h-px w-12 bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent lg:mx-0 lg:from-[#d4af37]/50 lg:via-[#d4af37] lg:to-transparent"
              />
            </div>
            <p className="mt-5 text-pretty text-[15px] font-normal leading-relaxed text-slate-600 md:text-base">
              {t("asideIntro")}
            </p>
            <ul className="mt-8 space-y-5">
              {asidePoints.map((row) => (
                <li key={row.title} className="flex gap-3.5 text-left">
                  <HomeVideoAsideCheck />
                  <div className="min-w-0">
                    <p className="text-[15px] font-semibold leading-snug text-slate-800 md:text-base">
                      {row.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{row.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.aside>
        </motion.div>
      </ViewIn>
    </section>
  );
}

/** Muted champagne gold on dark band — readable, formal (not neon yellow). */
const TRUST_STRIP_GOLD = "#c9b06a";

export function HomeTrustStrip() {
  const t = useTranslations("HomeTrust");
  const rows = [
    { k: t("organiser"), v: t("organiserVal"), monoValue: false as const },
    { k: t("edition"), v: t("editionVal"), monoValue: false as const },
    { k: t("recognition"), v: t("recognitionVal"), monoValue: false as const },
    { k: t("hashtag"), v: t("hashtagVal"), monoValue: true as const },
  ];
  return (
    <section
      className="relative border-y border-white/[0.08] px-4 py-6 antialiased md:px-8 md:py-7"
      style={{
        background: `linear-gradient(180deg, #141210 0%, #0c0b09 45%, #070605 100%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-x-0 md:gap-y-0">
        {rows.map((x, i) => (
          <div
            key={x.k}
            className={[
              "flex min-h-full flex-col items-center justify-start gap-1 text-center md:px-3 lg:px-5",
              i > 0 ? "md:border-l md:border-white/[0.12]" : "",
            ].join(" ")}
          >
            <span
              className="order-1 font-sans text-[9px] font-medium uppercase leading-none tracking-[0.16em] text-balance md:text-[10px] md:tracking-[0.18em]"
              style={{ color: TRUST_STRIP_GOLD }}
            >
              {x.k}
            </span>
            <span
              className={[
                x.monoValue
                  ? "order-2 max-w-[min(100%,16rem)] font-mono text-[10px] font-medium leading-snug tracking-[0.02em] text-white/95 sm:max-w-[17rem] md:max-w-none md:text-[11px]"
                  : "order-2 max-w-[min(100%,15rem)] font-sans text-[11px] font-semibold leading-snug tracking-[-0.02em] text-white text-pretty sm:max-w-[16rem] md:max-w-none md:text-xs md:leading-snug",
              ].join(" ")}
            >
              {x.v}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const PREVIEW_MENU = [
  ABOUT_US_PAGE,
  ...COMPETITION_MENU.filter((x) => x.id !== "about"),
];

export function CompetitionQuickLinks() {
  const t = useTranslations("Nav");
  return (
    <section className="border-b border-slate-200 bg-slate-50/90 py-8 md:py-10">
      <div className={`${ui.marketingContent} flex flex-wrap justify-center gap-2 sm:gap-3`}>
        {COMPETITION_MENU.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-md border border-slate-200/90 bg-white px-3 py-2 text-center text-xs font-semibold text-[#001F3F] shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:px-4 md:text-[13px]"
          >
            {t(`menu.${l.id}`)}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function HomeCompetitionPreview() {
  const tn = useTranslations("Nav");
  const tp = useTranslations("HomePreview");
  return (
    <section className={`${ui.borderSection} relative bg-white ${sectionY}`}>
      <ViewIn className={`${ui.marketingContent} relative`}>
        <div className="mb-10 text-center md:mb-12">
          <p className={ui.eyebrow}>{tp("kicker")}</p>
          <h2 className={`mt-3 ${ui.displayMd} text-[#001F3F]`}>
            {tp("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            {tp("subtitle")}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PREVIEW_MENU.map((l) => (
            <div
              key={l.id}
              className={`${ui.card} flex min-w-0 flex-col`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
                  <PreviewTopicIcon menuId={l.id} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className={ui.eyebrow}>{tp("cardEyebrow")}</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-slate-900">
                    {tn(`menu.${l.id}`)}
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-slate-100 pt-4 text-sm leading-relaxed text-slate-600 md:text-[15px]">
                {tn(`menuSub.${l.id}`)}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-slate-600 md:mt-12 md:text-base">
          {tp("hubHint")}{" "}
          <Link href="/#competition-hub" className={ui.linkInline}>
            {tp("hubLink")}
          </Link>
        </p>
      </ViewIn>
    </section>
  );
}

export function HomeApaItuTeaser() {
  const t = useTranslations("HomeApaItu");
  const pills = [t("pill1"), t("pill2"), t("pill3")];
  return (
    <section
      className="relative overflow-hidden px-6 py-20 text-white md:px-10 md:py-28"
      style={{
        background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <ViewIn className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 flex justify-center px-2">
          <Image
            src={LOGO_SRC}
            alt={t("logoAlt")}
            width={637}
            height={350}
            className="h-28 w-auto max-w-[min(92vw,24rem)] object-contain sm:h-32 md:h-36"
            sizes="(max-width: 640px) 92vw, 384px"
            unoptimized
          />
        </div>
        <h2 className="text-3xl font-black leading-tight md:text-[38px] md:leading-[1.2]">
          {t("title")}
        </h2>
        <p className="mt-6 text-base font-medium leading-[1.65] text-white/90 md:text-lg">
          {t("beforeBrand")}
          <strong className="font-bold text-white">MyCEO Education</strong>
          {t("between")}
          <strong className="font-bold text-white">PAK21</strong>
          {t("afterPak")}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {pills.map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-white/18 bg-white/8 px-4 py-4 text-sm font-bold leading-snug tracking-normal text-white/95 sm:py-5"
            >
              {label}
            </div>
          ))}
        </div>
        <Link
          href="/#competition-hub"
          className="mt-10 inline-block text-base font-semibold text-[#FFD700] underline decoration-[#FFD700]/45 underline-offset-[7px] transition hover:text-white hover:decoration-white/55"
        >
          {t("readMore")}
        </Link>
      </ViewIn>
    </section>
  );
}

export function HomeOutcomesSection() {
  const t = useTranslations("HomeOutcomes");
  const items = [
    { title: t("o1t"), desc: t("o1d") },
    { title: t("o2t"), desc: t("o2d") },
    { title: t("o3t"), desc: t("o3d") },
    { title: t("o4t"), desc: t("o4d") },
  ];
  return (
    <section className="relative overflow-hidden border-t border-slate-200/80 bg-white px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-8">
      <ViewIn className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 md:text-[13px] lg:hidden">
              {t("kicker")}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:gap-4 lg:mt-0">
              {HOME_OUTCOMES_SIDE_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200/90 shadow-sm sm:aspect-[5/3]"
                >
                  <Image
                    src={src}
                    alt={t("sideImageAlt", { n: i + 1 })}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 45vw, 560px"
                    quality={95}
                    unoptimized={src.startsWith("/home/")}
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <header className="mb-10 text-center lg:mb-12 lg:text-left">
              <p className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 md:text-[13px] lg:block">
                {t("kicker")}
              </p>
              <h2 className="mt-0 text-balance text-2xl font-semibold leading-snug tracking-tight text-slate-900 lg:mt-3 md:text-4xl md:leading-tight">
                {t("title")}
              </h2>
              <span aria-hidden className="mx-auto mt-4 block h-px w-12 bg-slate-300 lg:mx-0" />
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                {t("subtitle")}
              </p>
            </header>
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              {items.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-slate-200/90 bg-slate-50/50 p-6 shadow-sm md:p-7"
                >
                  <div className="h-px w-10 bg-[#001F3F]/80" />
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-slate-900 md:text-xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-600">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ViewIn>
    </section>
  );
}

export function HomeFaqSection() {
  const t = useTranslations("HomeFaq");
  const ids = [1, 2, 3, 4, 5] as const;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#d2dae8] via-[#e4eaf4] to-[#dce3ef] px-6 py-20 md:px-10 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,31,63,0.12) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />
      <ViewIn className="relative mx-auto max-w-2xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-[#001F3F]/55 md:text-[13px]">
          {t("kicker")}
        </p>
        <h2 className="mt-3 text-center text-3xl font-black leading-tight tracking-tight text-[#001F3F] md:text-[36px]">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal leading-[1.6] text-[#001F3F]/72">
          {t("subtitle")}
        </p>
        <div className="mt-12 space-y-4">
          {ids.map((i) => (
            <details
              key={i}
              className="group rounded-2xl border border-[#001F3F]/[0.1] bg-white px-6 shadow-sm open:shadow-sm"
            >
              <summary className="flex min-h-[3.5rem] cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-bold leading-snug text-[#001F3F] outline-none ring-[#B8860B] ring-offset-2 ring-offset-white focus-visible:ring-2 [&::-webkit-details-marker]:hidden">
                <span className="pr-2">{t(`q${i}`)}</span>
                <span
                  className="shrink-0 text-xs font-bold leading-none text-[#B8860B] transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                >
                  ▼
                </span>
              </summary>
              <p className="border-t border-[#001F3F]/[0.08] pb-5 pt-4 text-base font-normal leading-[1.65] text-[#001F3F]/80">
                {t(`a${i}`)}
              </p>
            </details>
          ))}
        </div>
      </ViewIn>
    </section>
  );
}

export function HomeFinalCta() {
  const th = useTranslations("HomeFinalCta");
  const tr = useTranslations("Registration");
  const titleNode = <span className="text-[#001F3F]">{th("title")}</span>;

  return (
    <GepOutreachHero
      variant="home"
      pill={th("kicker")}
      title={titleNode}
      lead={th("body")}
      footnote={tr("footnote")}
      heroCta={{
        label: th("cta"),
        href: "/competition/registration",
        external: false,
      }}
      termsLinkLabel={th("termsLink")}
      heading="h2"
    />
  );
}
