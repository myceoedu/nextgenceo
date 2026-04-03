"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { item, sectionY, ViewIn, viewIn } from "@/components/motion-ui";
import { Link } from "@/i18n/navigation";
import { HomeGrandPrizeSpotlight } from "@/components/home/HomeGrandPrizeSpotlight";
import { PreviewTopicIcon } from "@/components/home/PreviewTopicIcons";
import {
  DRIVE_CHALLENGE_URL,
  GEP_HERO_FLOAT_IMAGES,
  GOLD_DEEP,
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
    <section className={`bg-white text-[#001F3F] ${sectionY} px-6 md:px-10`}>
      <ViewIn className="mx-auto max-w-6xl">
        <div className="mb-12 border-l-[8px] border-[#001F3F] pl-6 text-left md:mb-16 md:pl-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#B8860B] md:text-sm">
            {t("kicker")}
          </p>
          <h2 className="text-[34px] font-black leading-[1.05] tracking-tight md:text-[45px]">
            {t("h1a")} <br />
            <span className="text-[#B8860B]">{t("h1b")}</span>
          </h2>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-[1.35fr_0.85fr] md:gap-14">
          <div>
            <p className="mb-6 text-lg font-medium text-[#333] md:text-xl">
              {t("p1")}
            </p>
            <p className="mb-6 text-base leading-8 text-[#555] md:text-lg">
              {t("p2Lead")}{" "}
              <strong>{t("p2Hot")}</strong> {t("p2Tail")}
            </p>

            <div className="mb-8 rounded-2xl bg-[#F4F4F4] p-7 md:p-8">
              <p className="text-[15px] italic leading-8 text-[#001F3F] md:text-[17px]">
                &quot;{t("quote")}&quot;
              </p>
            </div>

            <a
              href="https://www.instagram.com/myceo_"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[16px] font-bold text-[#E4405F] hover:underline md:text-[17px]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4405F]/10">
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

          <div className="rounded-xl bg-[#001F3F] p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:p-10">
            <h3 className="mb-6 border-b border-[#FFD700]/30 pb-4 text-xl font-extrabold text-[#FFD700] md:text-[22px]">
              {t("sideTitle")}
            </h3>
            <ul className="mb-8 space-y-4 text-[15px] md:text-[16px]">
              <li className="flex items-center gap-3">
                <span className="text-lg text-[#FFD700]">✔</span> {t("li1")}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg text-[#FFD700]">✔</span> {t("li2")}
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg text-[#FFD700]">✔</span> {t("li3")}
              </li>
            </ul>

            <Link
              href="/competition/registration"
              className="block rounded-lg bg-[#FFD700] px-6 py-4 text-center font-black uppercase tracking-wider text-[#001F3F] transition hover:brightness-95"
            >
              {t("register")}
            </Link>
            <p className="mt-5 text-center text-xs italic text-white/60">
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
      className={`${sectionY} px-6 text-center text-white md:px-10`}
      style={{
        background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
      }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-3xl font-black md:text-[44px]">{t("title")}</h2>
          <p className="mx-auto max-w-3xl text-base font-semibold leading-8 text-white/80 md:text-lg">
            {t("lead")}
          </p>
        </motion.div>

        <div className="mt-12 grid justify-items-center gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="w-full max-w-[360px] rounded-3xl border border-white/15 bg-white/5 p-8 text-left transition hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_28px_70px_rgba(0,0,0,0.35)]"
            >
              <div
                className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl font-black"
                style={{
                  background: "rgba(255,215,0,0.14)",
                  border: "1px solid rgba(255,215,0,0.22)",
                  color: GOLD_DEEP,
                }}
              >
                {i + 1}
              </div>
              <h3 className="mb-3 text-[18px] font-black tracking-wide text-white md:text-xl">
                {c.title}
              </h3>
              <p className="text-[15px] font-semibold leading-7 text-white/75">
                {c.desc}
              </p>
              <div
                aria-hidden
                className="mt-6 h-px w-full"
                style={{ background: "rgba(255,255,255,0.14)" }}
              />
              <div className="mt-4 text-sm font-black uppercase tracking-[0.20em] text-white/70">
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
  const t = useTranslations("GrandPrize");
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: `linear-gradient(180deg, #ffffff 0%, #f3f5fb 45%, #ffffff 100%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,215,0,0.35), transparent 55%)",
        }}
      />
      <ViewIn className="relative mx-auto max-w-6xl px-6 text-center text-[#141452] md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#001F3F]/10 px-6 py-16 shadow-[0_40px_100px_rgba(0,31,63,0.18)] md:px-16 md:py-24">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #FFD700 0%, #FFA500 45%, #FFD700 100%)",
            }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-y-0 left-[-120%] w-[60%] skew-x-[-25deg] bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.85)_50%,rgba(255,255,255,0)_100%)]"
            animate={{ x: ["0%", "420%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10">
            <div className="text-3xl font-black tracking-[0.22em] text-[#001F3F] md:text-[52px]">
              {t("title")}
            </div>

            <motion.div
              animate={{ y: [0, -10] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="mt-4"
            >
              <div
                className="font-black leading-none tracking-[0.06em] text-[72px] sm:text-[100px] md:text-[140px]"
                style={{
                  color: GOLD_DEEP,
                  WebkitTextStroke: "5px #001530",
                  textShadow:
                    "2px 2px 0 #001530, 4px 4px 0 #001530, 6px 6px 0 #001530, 8px 8px 0 #001530, 10px 10px 20px rgba(0,0,0,0.5)",
                  transform: "scaleX(1.15)",
                }}
              >
                {GRAND_PRIZE_LABEL}
              </div>
            </motion.div>

            <h3 className="mt-6 text-lg font-extrabold uppercase tracking-[0.12em] text-[#001F3F] md:text-[30px]">
              {t("cert")}
            </h3>

            <p className="mt-6 text-base font-semibold leading-8 text-[#001F3F] md:text-[20px]">
              {t("tagline")} <br />
              <span className="text-[18px] font-black md:text-[22px]">{t("hashtag")}</span>
            </p>
          </div>
        </div>
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
      className={`${sectionY} px-6 md:px-10`}
      style={{
        background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
      }}
    >
      <ViewIn className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-2xl font-black text-white md:text-[40px]">
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
              className="rounded-3xl px-7 py-6 transition hover:-translate-y-1.5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.06) 100%)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "0 26px 70px rgba(0,0,0,0.28)",
              }}
            >
              <div className="font-black text-white">{x.title}</div>
              <div className="mt-1 text-[15px] leading-7 text-white/75 md:text-[16px]">
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
    <section className={`bg-white ${sectionY} px-6 text-center md:px-10`}>
      <ViewIn className="mx-auto max-w-6xl text-[#001F3F]">
        <h2 className="mb-12 text-2xl font-black md:text-[36px]">{t("title")}</h2>

        <div className="grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className={[
                "w-full max-w-[340px] rounded-3xl border border-[#001F3F]/8 p-7 text-left shadow transition",
                c.gold
                  ? "bg-gradient-to-br from-[#FFD700] to-[#FFEC8B] shadow-[0_14px_34px_rgba(0,0,0,0.18)] hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.22)]"
                  : "bg-white shadow-[0_10px_28px_rgba(0,31,63,0.10)] hover:-translate-y-2 hover:shadow-[0_22px_44px_rgba(0,31,63,0.14)]",
              ].join(" ")}
            >
              <div className="text-[18px] font-black md:text-[20px]">{c.title}</div>
              <div className="mt-2 text-[15px] leading-7 text-[#001F3F]/90 md:text-[16px]">
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
    <section className={`bg-[#001F3F] ${sectionY} px-6 text-center text-[#FFD700] md:px-10`}>
      <ViewIn className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-2xl font-black md:text-[36px]">{t("title")}</h2>

        <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {termaItems.map((x, idx) => (
            <motion.div
              key={`${x.h}-${idx}`}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              className="flex h-[240px] w-[240px] flex-col items-center justify-center rounded-full bg-white p-6 text-center text-[#001F3F] shadow-[0_10px_26px_rgba(0,0,0,0.18)] transition hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
            >
              <div className={`mb-2 font-black ${idx < 4 ? "text-[18px]" : "text-[16px]"}`}>
                {x.h}
              </div>
              <div className="text-[13px] font-semibold leading-5 text-[#001F3F]/90">
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
    <section className={`bg-white ${sectionY} px-6 text-center md:px-10`}>
      <ViewIn className="mx-auto max-w-5xl text-[#001F3F]">
        <h2 className="mb-12 text-2xl font-black md:text-[36px]">{t("title")}</h2>

        <div className="space-y-5 text-left">
          {rows.map((x) => (
            <motion.div
              key={x.h}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.08 }}
              className="flex items-center justify-between gap-6 rounded-3xl border border-[#001F3F]/8 bg-white px-7 py-6 shadow-[0_12px_32px_rgba(0,31,63,0.10)] transition hover:-translate-y-1.5 hover:shadow-[0_22px_50px_rgba(0,31,63,0.14)]"
            >
              <div>
                <div className="text-[18px] font-black md:text-[20px]">{x.h}</div>
                <div className="mt-1 text-[15px] leading-7 text-[#001F3F]/90 md:text-[16px]">
                  {x.p}
                </div>
              </div>
              <div className="shrink-0 text-[20px] font-black md:text-[24px]">{x.pct}</div>
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
    <section className={`bg-[#001F3F] ${sectionY} px-6 md:px-10`}>
      <ViewIn className="mx-auto max-w-6xl text-center">
        <h2 className="mb-10 text-3xl font-black tracking-wide text-[#FFD700] md:text-[44px]">
          {t("title")}
        </h2>

        <div className="relative grid items-start gap-10 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden
            className="absolute left-[6%] right-[6%] top-[58px] hidden h-1 rounded bg-[linear-gradient(to_right,rgba(255,215,0,0.35),#FFD700,rgba(255,215,0,0.35))] shadow-[0_0_18px_rgba(255,215,0,0.35)] md:block"
          />

          {timelineStages.map((x) => (
            <motion.div
              key={x.when}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="group text-[#FFD700] transition hover:-translate-y-2"
            >
              <div className="mx-auto mb-6 flex h-[100px] w-[170px] items-center justify-center bg-white text-[22px] font-black text-[#001F3F] shadow-[0_10px_26px_rgba(0,0,0,0.25)] [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] transition group-hover:scale-110 group-hover:shadow-[0_16px_44px_rgba(255,215,0,0.28)] md:text-[26px]">
                {x.when}
              </div>
              <div className="text-[18px] font-extrabold md:text-[20px]">{x.title}</div>
              <div className="mx-auto mt-2 max-w-[320px] text-[14px] leading-7 md:text-[15px]">
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
    <section className="relative overflow-hidden bg-[#f4f4f3] px-5 py-14 md:px-8 md:py-20">
      <ViewIn className="relative mx-auto max-w-6xl">
        <HomeGrandPrizeSpotlight />
        <ImportantDatesCard />
      </ViewIn>
    </section>
  );
}

const DATE_CARD_THEMES = {
  coral: {
    border: "border-rose-600",
    badge: "bg-rose-600 shadow-[0_4px_16px_rgba(225,29,72,0.4)]",
    month: "text-rose-600",
  },
  navy: {
    border: "border-[#001F3F]",
    badge: "bg-[#001F3F] shadow-[0_4px_16px_rgba(0,31,63,0.35)]",
    month: "text-[#c9a227]",
  },
  gold: {
    border: "border-amber-500",
    badge: "bg-gradient-to-r from-amber-500 to-amber-600 shadow-[0_4px_16px_rgba(217,119,6,0.35)]",
    month: "text-amber-800",
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
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-rose-600 md:text-xs">
          {t("label")}
        </p>
        <h2 className="mt-3 text-balance text-2xl font-black uppercase tracking-tight text-stone-900 md:text-[1.85rem] md:leading-[1.12]">
          {t("title")}
        </h2>
        <span
          aria-hidden
          className="mx-auto mt-4 block h-1 w-14 rounded-full bg-rose-600"
        />
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-stone-600 md:text-base">
          {t("sectionLead")}
        </p>
      </header>

      <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {stages.map((x) => {
          const th = DATE_CARD_THEMES[x.tier];
          const featured = x.tier === "gold";
          return (
            <li
              key={x.when}
              className={[
                "relative flex min-h-[100%] flex-col rounded-2xl border-2 bg-white px-5 pb-7 pt-10 text-center shadow-[0_14px_40px_rgba(0,0,0,0.06)]",
                th.border,
                featured ? "ring-1 ring-amber-400/25 lg:scale-[1.02]" : "",
              ].join(" ")}
            >
              <div
                className={[
                  "absolute -top-3 left-1/2 max-w-[92%] -translate-x-1/2 rounded-md px-3 py-1.5 text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-white sm:text-[10px]",
                  th.badge,
                ].join(" ")}
              >
                {x.badge}
              </div>
              <h3 className="text-[13px] font-bold uppercase tracking-wide text-stone-900 md:text-sm">
                {x.title}
              </h3>
              <p
                className={[
                  "mt-5 text-[1.75rem] font-black uppercase leading-none tracking-tight sm:text-4xl md:text-[2.25rem]",
                  th.month,
                ].join(" ")}
              >
                {x.when}
              </p>
              <p className="mt-4 flex-1 pb-1 text-left text-sm leading-[1.65] text-stone-600 md:text-center md:text-[15px]">
                {x.desc}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-stone-500 md:text-sm">
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
        className="block h-auto w-full rounded-xl shadow-[0_14px_32px_rgba(0,31,63,0.12)] ring-1 ring-[#001F3F]/[0.08]"
      />
    </div>
  );
}

function GepHeroCtaButton({ cta, className }: { cta: GepCtaTarget; className: string }) {
  const inner = (
    <>
      {cta.label}
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <ArrowUpRight className="h-4 w-4 text-[#FF7F32]" aria-hidden />
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

  const sectionPad =
    variant === "registration"
      ? "relative isolate overflow-x-clip bg-white px-6 pb-10 pt-[calc(var(--ngc-header-h)+var(--ngc-hero-top-gap)+1.25rem)] md:px-10 md:pb-14 md:pt-[calc(var(--ngc-header-h)+var(--ngc-hero-top-gap)+1.75rem)]"
      : "relative isolate overflow-x-clip bg-white px-6 py-12 md:px-10 md:py-14";

  const titleCls = [
    "mt-5 font-black leading-[1.1] tracking-tight sm:text-3xl md:mt-6 md:text-4xl md:leading-[1.08] lg:text-[2.65rem]",
    titleUppercase ? "text-[1.55rem] uppercase" : "text-[1.65rem] md:text-[2.25rem] lg:text-[2.5rem]",
  ].join(" ");

  return (
    <section className={sectionPad}>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 hidden h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full border-[3px] border-[#FF7F32]/25 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 hidden h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full border-[3px] border-[#FF7F32]/22 md:block"
      />
      <ViewIn className="relative z-10 mx-auto w-full max-w-7xl md:px-2">
        {/* Side photos: absolute so tall stacks don’t stretch the section (removes huge gap under copy). */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-2 z-[1] hidden flex-col gap-5 xl:flex 2xl:gap-6"
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
          className="pointer-events-none absolute right-0 top-6 z-[1] hidden flex-col gap-5 xl:flex 2xl:gap-6"
        >
          {gepRight.map((src, i) => (
            <GepFloatTile
              key={src}
              src={src}
              rotateClass={i % 2 === 0 ? "rotate-6" : "-rotate-3"}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-xl px-1 text-center md:max-w-2xl xl:max-w-2xl">
          <span className="inline-flex rounded-full border border-[#001F3F]/10 bg-[#f8fafc] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#001F3F]/80 md:text-xs">
            {pill}
          </span>
          {heading === "h1" ? (
            <h1 className={titleCls}>{title}</h1>
          ) : (
            <h2 className={titleCls}>{title}</h2>
          )}
          <p className="mx-auto mt-5 max-w-lg text-[15px] font-medium leading-relaxed text-[#001F3F]/58 md:mt-6 md:max-w-xl md:text-lg">
            {lead}
          </p>
          {footnote ? (
            <p className="mt-3 text-xs italic text-[#001F3F]/40 md:text-sm">{footnote}</p>
          ) : null}
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-7">
            <GepHeroCtaButton
              cta={heroCta}
              className="inline-flex items-center gap-3 rounded-full bg-[#FF7F32] px-8 py-3.5 text-[12px] font-black uppercase tracking-[0.14em] text-white shadow-[0_14px_36px_rgba(255,127,50,0.35)] transition hover:brightness-105 md:px-10 md:py-4 md:text-[13px]"
            />
          </div>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:mt-7 md:gap-6">
            <Link
              href="/competition/terms"
              className="text-sm font-medium text-[#001F3F]/75 underline decoration-[#001F3F]/25 underline-offset-[6px] transition hover:text-[#001F3F] hover:decoration-[#001F3F]/45 md:text-[15px]"
            >
              {termsLinkLabel}
            </Link>
            <a
              href="https://www.instagram.com/myceo_"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#001F3F]/45 transition hover:text-[#001F3F]/70 md:text-sm"
            >
              {t("ig")}
            </a>
          </div>
        </div>
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
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-white via-[#f3f6fb] to-[#e8edf5] ${sectionY} px-6 text-center md:px-10`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,215,0,0.14), transparent 50%)",
        }}
      />
      <ViewIn className="relative mx-auto max-w-6xl text-[#001F3F]">
        <h2 className="mb-10 text-3xl font-black leading-tight md:text-[40px] md:leading-[1.15]">
          {t("title")}
        </h2>
        <div className="flex justify-center">
          <Image
            src={SPONSOR_SRC}
            alt={t("alt")}
            width={1000}
            height={560}
            className="h-auto w-full max-w-[1000px] rounded-2xl shadow-[0_14px_34px_rgba(0,0,0,0.12)] transition hover:scale-[1.02]"
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
    <section className={`bg-[#f6f7fb] ${sectionY} px-6 md:px-10`}>
      <ViewIn className="mx-auto max-w-6xl text-[#001F3F]">
        <h2 className="mb-4 text-center text-2xl font-black md:text-[36px]">{t("title")}</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm font-medium text-[#001F3F]/70 md:text-base">
          {t("intro")}
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="rounded-3xl border border-[#001F3F]/10 bg-white p-7 shadow-[0_16px_40px_rgba(0,31,63,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,31,63,0.12)]"
            >
              <div className="text-xs font-black uppercase tracking-[0.22em] text-[#B8860B]">
                {t("stepLabel")} {s.n}
              </div>
              <div className="mt-2 text-xl font-black">{s.title}</div>
              <p className="mt-2 text-sm font-medium leading-7 text-[#001F3F]/75">{s.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            href="/competition/terms"
            className="rounded-full border-2 border-[#001F3F]/20 px-6 py-3 text-sm font-black uppercase tracking-wider text-[#001F3F] hover:bg-white"
          >
            {t("termsCta")}
          </Link>
          <Link
            href="/competition/registration"
            className="rounded-full bg-gradient-to-br from-[#FFD700] to-amber-100 px-6 py-3 text-sm font-black uppercase tracking-wider text-[#0B0B32]"
          >
            {t("regCta")}
          </Link>
        </div>
      </ViewIn>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center gap-1.5 border border-white/20 bg-white/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-white/85 backdrop-blur-[2px] md:px-3 md:py-1.5 md:text-[11px] md:tracking-[0.18em]">
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
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
      <div className="pointer-events-none absolute inset-0 z-0">        <Image
          src={HOME_HERO_BACKGROUND_SRC}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="ngc-hero-bg object-cover object-[center_32%] md:object-center"
        />
      </div>
      {/* Wider neutral scrim: busy HUD backgrounds need a deeper read zone on the left. */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(102deg, rgba(3,5,14,0.94) 0%, rgba(3,5,14,0.78) 28%, rgba(3,5,14,0.48) 42%, rgba(3,5,14,0.14) 56%, transparent 72%)`,
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-black/22 md:hidden" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-r from-black/25 via-transparent to-transparent md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/55 via-black/10 to-transparent"
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

                <motion.div variants={item} className="mt-5 flex gap-3 sm:mt-6 sm:gap-5 md:gap-6">
                  <div
                    aria-hidden
                    className="mt-1 hidden w-[3px] shrink-0 rounded-full bg-gradient-to-b from-[#FFD700] via-[#ffe566] to-[#FFD700]/40 shadow-[0_0_20px_rgba(255,215,0,0.45)] sm:block sm:min-h-[7.5rem] md:mt-1.5 md:min-h-[9rem] lg:min-h-[10.5rem]"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold uppercase tracking-[0.34em] text-white/90 md:text-base md:tracking-[0.38em] [text-shadow:0_2px_20px_rgba(0,0,0,0.92)]">
                      NextGen
                    </p>
                    <h1 className="mt-1 text-[clamp(3.25rem,11vw,8.5rem)] font-black leading-[0.82] tracking-[-0.045em] [text-shadow:0_4px_36px_rgba(0,0,0,0.95),0_2px_12px_rgba(0,0,0,0.88)] md:mt-0.5">
                      CEO
                    </h1>
                    <p
                      className="mt-2 text-[clamp(1.2rem,3.8vw,2.35rem)] font-black uppercase tracking-[0.14em] [text-shadow:0_2px_24px_rgba(0,0,0,0.88)] md:mt-3 md:tracking-[0.18em]"
                      style={{ color: GOLD_DEEP }}
                    >
                      Challenge 2026
                    </p>
                  </div>
                </motion.div>

                <motion.p
                  variants={item}
                  className="mt-6 max-w-2xl border-l-[3px] border-[#FFD700] pl-4 text-base font-bold tracking-wide text-balance [text-shadow:0_2px_16px_rgba(0,0,0,0.88)] md:mt-7 md:pl-5 md:text-lg lg:max-w-3xl xl:max-w-[40rem]"
                  style={{ color: GOLD_DEEP }}
                >
                  {t("pitchLine")}
                </motion.p>

                <motion.p
                  variants={item}
                  className="mt-5 max-w-2xl text-sm leading-relaxed text-white/95 md:mt-6 md:text-[15px] md:leading-[1.65] [text-shadow:0_2px_16px_rgba(0,0,0,0.92)] lg:max-w-3xl xl:max-w-[44rem]"
                >
                  {t("body")}
                </motion.p>

                <motion.div
                  variants={item}
                  className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-5 md:mt-9"
                >
                  <Link
                    href="/competition/registration"
                    className="inline-flex min-h-[44px] min-w-[180px] items-center justify-center rounded-lg px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.1em] text-[#0B0B32] transition hover:brightness-105 md:min-h-[46px] md:px-7 md:text-sm"
                    style={{
                      background: "linear-gradient(135deg, #FFD700 0%, #e6e600 100%)",
                      boxShadow:
                        "0 14px 36px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.12) inset",
                    }}
                  >
                    {t("ctaRegister")}
                  </Link>
                  <Link
                    href="/competition/terms"
                    className="text-sm font-medium text-white/90 underline decoration-[#FFD700]/40 underline-offset-[5px] transition hover:text-white hover:decoration-[#FFD700]/70 md:text-[15px] [text-shadow:0_1px_10px_rgba(0,0,0,0.85)]"
                  >
                    {t("ctaSecondary")}
                  </Link>
                </motion.div>
              </div>
          </div>

          <motion.div
            variants={item}
            className="h-full w-full min-w-0 -translate-y-1 rounded-2xl border border-white/[0.14] bg-black/50 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:-translate-y-2 sm:p-5 md:p-6 lg:h-auto lg:-translate-y-6 lg:rounded-3xl lg:border-l lg:border-white/[0.18] lg:bg-black/45 lg:pl-8 lg:shadow-[0_16px_50px_rgba(0,0,0,0.4)] xl:-translate-y-8 xl:pl-10 xl:pr-8"
          >
            <div>
              <Countdown
                targetIso="2026-09-30T00:00:00+08:00"
                label={tc("finaleLabel")}
                embedded
              />
            </div>
            <div className="mt-6 border-t border-white/[0.14] pt-5 md:mt-7 md:pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 md:text-[11px] md:tracking-[0.2em] [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
                {t("timelineEyebrow")}
              </p>
              <div className="mt-3 flex flex-col gap-2.5 text-[13px] leading-snug text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 md:text-sm [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]">
                {mini.map((x) => (
                  <span key={x.k}>
                    <span className="font-semibold text-white">{x.k}</span>
                    <span className="text-white/45"> — </span>
                    {x.v}
                  </span>
                ))}
              </div>
              <p className="mt-5 font-mono text-[10px] tracking-wide text-[#FFD700]/75 md:mt-6 md:text-xs [text-shadow:0_1px_6px_rgba(0,0,0,0.75)]">
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
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-sm"
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
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#0a1628]">
        <button
          type="button"
          onClick={() => setStarted(true)}
          className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-10 text-center transition hover:bg-[#0d1d35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD700]"
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
      className="bg-white px-6 py-14 font-sans md:px-10 md:py-20"
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
            <div className="relative aspect-video w-full overflow-hidden bg-black">
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
              <p className="mt-3 text-xs text-[#64748b]">{t("videoHintYoutube")}</p>
            ) : (
              <p className="mt-3 text-xs text-[#64748b]">{t("videoHintMp4")}</p>
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
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#B8860B] md:text-xs">
                {t("eyebrow")}
              </p>
              <h2
                id="home-video-heading"
                className="mt-3 text-balance text-3xl font-black uppercase leading-[1.05] tracking-tight text-[#001B3D] md:text-[38px] md:leading-[1.08]"
              >
                {t("asideHead")}
              </h2>
              <span
                aria-hidden
                className="mx-auto mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] lg:mx-0"
              />
            </div>
            <p className="mt-5 text-pretty text-[15px] font-normal leading-relaxed text-[#4B5563] md:text-base">
              {t("asideIntro")}
            </p>
            <ul className="mt-8 space-y-5">
              {asidePoints.map((row) => (
                <li key={row.title} className="flex gap-3.5 text-left">
                  <HomeVideoAsideCheck />
                  <div className="min-w-0">
                    <p className="text-[15px] font-bold leading-snug text-[#334155] md:text-base">
                      {row.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">{row.desc}</p>
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

/** Muted champagne gold on navy — readable, formal (not neon yellow). */
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
      className="relative border-y border-white/[0.08] px-4 py-5 antialiased md:px-8 md:py-6"
      style={{
        background: `radial-gradient(ellipse 100% 140% at 50% 0%, ${NAVY} 0%, ${NAVY_DEEP} 52%, #000818 100%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
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
    <section className="border-b border-slate-200 bg-slate-50/80 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
        {COMPETITION_MENU.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-full border border-[#001F3F]/12 bg-white px-4 py-2.5 text-xs font-black uppercase tracking-wider text-[#001F3F] shadow-sm transition hover:border-[#B8860B]/40 hover:bg-amber-50/50 md:text-[11px]"
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fc] via-white to-[#eef2f9] px-6 py-20 md:px-10 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[#FFD700]/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#001F3F]/[0.06] blur-3xl"
      />
      <ViewIn className="relative mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#001F3F]/55 md:text-[13px]">
            {tp("kicker")}
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#001F3F] md:text-[40px] md:leading-[1.15]">
            {tp("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-[1.65] text-[#001F3F]/75 md:text-lg">
            {tp("subtitle")}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_MENU.map((l) => (
            <div
              key={l.id}
              className="rounded-3xl border border-[#001F3F]/[0.1] bg-gradient-to-br from-white via-white to-[#f1f4fa] p-7 text-left shadow-[0_18px_50px_rgba(0,31,63,0.07)] ring-1 ring-[#001F3F]/[0.04] md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FFF8DC] to-[#FFD700]/40 shadow-inner ring-1 ring-[#001F3F]/10">
                  <PreviewTopicIcon menuId={l.id} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#B8860B]">
                    {tp("cardEyebrow")}
                  </div>
                  <div className="mt-2 text-xl font-black leading-snug tracking-tight text-[#001F3F]">
                    {tn(`menu.${l.id}`)}
                  </div>
                </div>
              </div>
              <div className="mt-4 border-t border-[#001F3F]/[0.06] pt-4 text-base font-normal leading-[1.6] text-[#001F3F]/72">
                {tn(`menuSub.${l.id}`)}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-center text-base font-normal leading-[1.65] text-[#001F3F]/68">
          {tp("hubHint")}{" "}
          <Link
            href="/#competition-hub"
            className="font-semibold text-[#001F3F] underline decoration-[#001F3F]/30 underline-offset-[6px] transition hover:text-[#B8860B] hover:decoration-[#B8860B]/45"
          >
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
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(255,215,0,0.35), transparent 45%), radial-gradient(circle at 10% 80%, rgba(87,227,255,0.2), transparent 40%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      <ViewIn className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 flex justify-center">
          <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] ring-2 ring-[#FFD700]/30 sm:h-24 sm:w-24">
            <Image
              src={LOGO_SRC}
              alt={t("logoAlt")}
              fill
              className="object-contain p-1"
              sizes="96px"
            />
          </div>
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f7fc] via-white to-[#eef1f8] px-6 py-20 md:px-10 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(circle at 12% 20%, rgba(255,215,0,0.14), transparent 45%), radial-gradient(circle at 92% 80%, rgba(0,31,63,0.05), transparent 42%)",
        }}
      />
      <ViewIn className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B8860B] md:text-[13px] lg:hidden">
              {t("kicker")}
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:gap-4 lg:mt-0">
              {HOME_OUTCOMES_SIDE_IMAGES.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#001F3F]/10 shadow-[0_20px_50px_rgba(0,31,63,0.1)] sm:aspect-[5/3]"
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
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001F3F]/25 to-transparent"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7">
            <header className="mb-10 text-center lg:mb-12 lg:text-left">
              <p className="hidden text-xs font-bold uppercase tracking-[0.16em] text-[#B8860B] md:text-[13px] lg:block">
                {t("kicker")}
              </p>
              <h2 className="mt-0 text-balance text-3xl font-black uppercase leading-[1.05] tracking-tight text-[#001F3F] lg:mt-3 md:text-[42px] md:leading-[1.08]">
                {t("title")}
              </h2>
              <span
                aria-hidden
                className="mx-auto mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] lg:mx-0"
              />
              <p className="mt-4 text-base font-normal leading-[1.65] text-[#001F3F]/75 md:text-lg">
                {t("subtitle")}
              </p>
            </header>
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-6">
              {items.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-[#001F3F]/[0.08] bg-white/90 p-7 shadow-[0_14px_40px_rgba(0,31,63,0.06)] backdrop-blur-sm md:p-8"
                >
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#FFD700] to-[#B8860B]" />
                  <h3 className="mt-5 text-lg font-black leading-snug text-[#001F3F] md:text-xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-base font-normal leading-[1.65] text-[#001F3F]/78">
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
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,215,0,0.12), transparent 55%), radial-gradient(circle at 0% 100%, rgba(0,31,63,0.06), transparent 45%)",
        }}
      />
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
              className="group rounded-2xl border border-[#001F3F]/[0.1] bg-white px-6 shadow-[0_8px_28px_rgba(0,31,63,0.04)] open:shadow-[0_14px_40px_rgba(0,31,63,0.08)]"
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
