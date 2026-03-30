"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Countdown } from "@/components/Countdown";
import { item, sectionY, ViewIn, viewIn } from "@/components/motion-ui";
import { Link } from "@/i18n/navigation";
import {
  DRIVE_CHALLENGE_URL,
  GOLD,
  GOLD_DEEP,
  GRAND_PRIZE_LABEL,
  HOME_TEASER_INFOGRAPHIC_IMAGE_SRC,
  HOME_TEASER_POSTER_IMAGE_SRC,
  HOME_TEASER_POSTER_SRC,
  HOME_TEASER_VIDEO_SRC,
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

export function ImportantDatesCard() {
  const t = useTranslations("ImportantDates");
  const tt = useTranslations("Timeline");
  const timelineStages = [
    { when: tt("s1when"), title: tt("s1title"), desc: tt("s1desc") },
    { when: tt("s2when"), title: tt("s2title"), desc: tt("s2desc") },
    { when: tt("s3when"), title: tt("s3title"), desc: tt("s3desc") },
  ];
  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-[#001F3F]/10 bg-gradient-to-br from-white to-[#f6f7fb] p-6 shadow-[0_30px_80px_rgba(0,31,63,0.12)] md:p-10">
      <div className="mb-8 text-center">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#001F3F]/60">
          {t("label")}
        </p>
        <h2 className="mt-2 text-2xl font-black tracking-tight text-[#001F3F] md:text-3xl">
          {t("title")}
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {timelineStages.map((x) => (
          <div
            key={x.when}
            className="rounded-2xl border border-[#001F3F]/10 bg-white/80 p-6 text-left"
          >
            <div className="text-xs font-black uppercase tracking-[0.18em] text-[#B8860B]">
              {x.when}
            </div>
            <div className="mt-2 text-lg font-black text-[#001F3F]">{x.title}</div>
            <p className="mt-2 text-sm font-medium leading-relaxed text-[#001F3F]/75">
              {x.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RegistrationSection() {
  const t = useTranslations("Registration");
  return (
    <section
      className={`relative overflow-hidden ${sectionY} px-6 text-center md:px-10`}
      style={{
        background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,215,0,0.25), transparent 50%)",
        }}
      />
      <ViewIn className="relative mx-auto max-w-3xl text-white">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FFD700]">
          {t("kicker")}
        </p>
        <h2 className="mt-4 text-3xl font-black leading-tight md:text-[40px]">
          {t("title")}
        </h2>
        <p className="mt-5 font-semibold leading-8 text-white/75">
          {t("bodyBefore")}{" "}
          <strong className="text-white">{t("bodyStrong")}</strong>{" "}
          {t("bodyAfter")}
        </p>
        <p className="mt-4 text-sm italic text-white/55">{t("footnote")}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={DRIVE_CHALLENGE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-2xl px-10 py-4 font-black uppercase tracking-wider text-[#0B0B32] transition hover:-translate-y-0.5 sm:w-auto"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,215,0,1) 0%, rgba(230,230,0,1) 50%, rgba(255,255,255,0.95) 100%)",
              boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
            }}
          >
            {t("join")}
          </a>
          <a
            href="https://www.instagram.com/myceo_"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-black uppercase tracking-wider text-white/90 transition hover:bg-white/10 sm:w-auto"
          >
            {t("ig")}
          </a>
        </div>
      </ViewIn>
    </section>
  );
}

export function SponsorStrip() {
  const t = useTranslations("Sponsor");
  return (
    <section className={`bg-white ${sectionY} px-6 text-center md:px-10`}>
      <ViewIn className="mx-auto max-w-6xl text-[#001F3F]">
        <h2 className="mb-10 text-3xl font-black md:text-[44px]">{t("title")}</h2>
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

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl",
        "shadow-[0_30px_80px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.22), transparent 45%), radial-gradient(circle at 90% 65%, rgba(87,227,255,0.16), transparent 52%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white/90 md:text-xs">
      <span
        aria-hidden
        className="h-2 w-2 rounded-full"
        style={{ background: GOLD_DEEP }}
      />
      {children}
    </span>
  );
}

export function HomeHeroBlock() {
  const t = useTranslations("HomeHero");
  const tc = useTranslations("Countdown");
  const stats = [
    { k: t("statNat"), v: t("statNatVal"), grand: false },
    { k: t("statGrand"), v: GRAND_PRIZE_LABEL, grand: true },
    { k: t("statTime"), v: t("statTimeVal"), grand: false },
  ];
  const mini = [
    { k: t("miniMac"), v: t("miniReg") },
    { k: t("miniMei"), v: t("miniBoot") },
    { k: t("miniJun"), v: t("miniPitch") },
  ];
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 20% 15%, rgba(255,215,0,0.22), transparent 45%), radial-gradient(circle at 78% 70%, rgba(87,227,255,0.18), transparent 45%), linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 55%, #0B0B32 100%)`,
        }}
      />
      <motion.div
        aria-hidden
        className="absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,215,0,0.9), rgba(255,215,0,0.0) 60%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-28 -right-28 h-[380px] w-[380px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(87,227,255,0.75), rgba(87,227,255,0.0) 62%)",
        }}
        animate={{ x: [0, -36, 0], y: [0, -26, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 35%, transparent 0%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-[6.5rem] md:px-10 md:pb-32 md:pt-[7.5rem]">
        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
          }}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="text-white">
            <motion.div variants={item}>
              <Badge>{t("badge")}</Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-[40px] font-black uppercase leading-[1.02] tracking-[0.12em] md:text-[78px]"
            >
              NextGen CEO{" "}
              <span
                className="relative inline-block"
                style={{
                  color: GOLD,
                  textShadow:
                    "0 26px 70px rgba(0,0,0,0.55), 0 0 38px rgba(255,215,0,0.20)",
                }}
              >
                Challenge 2026
                <span
                  aria-hidden
                  className="absolute -bottom-4 left-0 h-[5px] w-full rounded"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,215,0,0) 0%, rgba(255,215,0,1) 22%, rgba(230,230,0,1) 58%, rgba(255,215,0,0) 100%)",
                    boxShadow: "0 0 24px rgba(255,215,0,0.25)",
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 text-[16px] font-extrabold tracking-[0.16em] md:text-[22px]"
              style={{ color: GOLD_DEEP }}
            >
              {t("pitchLine")}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-7 max-w-2xl font-semibold leading-8 text-white/75"
            >
              {t("body")}
            </motion.p>

            <motion.div variants={item} className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
              {stats.map((x) => (
                <div
                  key={x.k}
                  className={[
                    "rounded-3xl p-4",
                    x.grand
                      ? "relative overflow-hidden ring-2 ring-[#FFD700]/80 ring-offset-2 ring-offset-transparent"
                      : "",
                  ].join(" ")}
                  style={
                    x.grand
                      ? {
                          background:
                            "linear-gradient(155deg, rgba(255,237,150,0.95) 0%, rgba(255,215,0,0.92) 42%, rgba(212,175,55,0.88) 100%)",
                          border: "1px solid rgba(255,248,220,0.95)",
                          boxShadow:
                            "0 0 32px rgba(255,215,0,0.45), 0 16px 40px rgba(0,31,63,0.25), inset 0 1px 0 rgba(255,255,255,0.65)",
                        }
                      : {
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.14)",
                        }
                  }
                >
                  {x.grand ? (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-40"
                      style={{
                        background:
                          "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)",
                      }}
                    />
                  ) : null}
                  <div
                    className={[
                      "text-[11px] font-black uppercase tracking-[0.20em]",
                      x.grand ? "relative text-[#001F3F]/55" : "text-white/60",
                    ].join(" ")}
                  >
                    {x.k}
                  </div>
                  <div
                    className={[
                      "relative mt-2 font-black",
                      x.grand ? "text-[#001F3F]" : "text-white",
                    ].join(" ")}
                    style={
                      x.grand
                        ? {
                            textShadow:
                              "0 1px 0 rgba(255,255,255,0.5), 0 12px 28px rgba(0,31,63,0.12)",
                          }
                        : undefined
                    }
                  >
                    {x.v}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/competition/registration"
                className="inline-flex items-center justify-center rounded-2xl px-7 py-3 font-black uppercase tracking-wider text-[#0B0B32] transition hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,215,0,1) 0%, rgba(230,230,0,1) 50%, rgba(255,255,255,0.95) 100%)",
                  boxShadow: "0 24px 70px rgba(0,0,0,0.38)",
                }}
              >
                {t("ctaRegister")}
              </Link>
              <Link
                href="/competition"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3 font-black uppercase tracking-wider text-white/90 transition hover:bg-white/10"
              >
                {t("ctaCompetition")}
              </Link>
            </motion.div>
          </div>

          <motion.div variants={item} className="lg:justify-self-end">
            <GlassCard className="p-7 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div
                    className="text-xs font-black uppercase tracking-[0.22em]"
                    style={{
                      color: GOLD_DEEP,
                      textShadow: "0 0 18px rgba(255,215,0,0.35)",
                    }}
                  >
                    {t("highlight")}
                  </div>
                  <div
                    className="mt-2 bg-gradient-to-r from-[#FFF8DC] via-[#FFD700] to-[#D4AF37] bg-clip-text text-2xl font-black text-transparent md:text-3xl"
                    style={{
                      filter: "drop-shadow(0 2px 12px rgba(255,215,0,0.35))",
                    }}
                  >
                    {t("grandPrize")}
                  </div>
                </div>
                <div
                  className="rounded-2xl px-4 py-2 font-black tracking-wide"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255,248,220,0.95), rgba(255,215,0,0.55))",
                    color: "#001F3F",
                    border: "1px solid rgba(255,237,150,0.9)",
                    boxShadow:
                      "0 0 20px rgba(255,215,0,0.35), inset 0 1px 0 rgba(255,255,255,0.6)",
                  }}
                >
                  {t("yearBadge")}
                </div>
              </div>

              <motion.div
                className="relative mt-6 overflow-hidden rounded-3xl p-6 md:p-7"
                style={{
                  background:
                    "linear-gradient(145deg, #FFEF9F 0%, #FFD700 28%, #E6C200 55%, #FFD700 78%, #FFF4B8 100%)",
                  border: "2px solid rgba(255,248,220,0.95)",
                  boxShadow:
                    "0 0 0 1px rgba(0,31,63,0.12), 0 8px 0 rgba(184,134,11,0.35), 0 28px 60px rgba(255,215,0,0.45), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -14px 28px rgba(184,134,11,0.15)",
                }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 -top-12 h-40 w-40 rounded-full opacity-50 blur-2xl"
                  style={{ background: "rgba(255,255,255,0.85)" }}
                />
                <div
                  className="relative text-[52px] font-black leading-none text-[#001F3F] md:text-[64px]"
                  style={{
                    textShadow:
                      "0 2px 0 rgba(255,255,255,0.5), 0 14px 36px rgba(0,31,63,0.2)",
                  }}
                >
                  {GRAND_PRIZE_LABEL}
                </div>
                <div className="relative mt-3 font-bold text-[#001F3F]/90">
                  {t("certLine")}
                </div>
                <div className="relative mt-3 text-sm font-semibold text-[#001F3F]/65">
                  {t("hashtag")}
                </div>
              </motion.div>

              <div className="mt-6">
                <Countdown
                  targetIso="2026-06-30T00:00:00+08:00"
                  label={tc("finaleLabel")}
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {mini.map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl p-4 text-center"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <div className="font-black text-white">{x.k}</div>
                    <div className="mt-1 text-[11px] font-bold text-white/70">{x.v}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HomeVideoSubLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3 md:mb-4">
      <span className="h-px w-6 shrink-0 bg-[#B8860B] md:w-8" aria-hidden />
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#001F3F]/75 md:text-[11px]">
        {children}
      </span>
    </div>
  );
}

export function HomeVideoTeaser() {
  const t = useTranslations("HomeVideo");
  const hasPoster = Boolean(HOME_TEASER_POSTER_IMAGE_SRC);
  const hasInfographic = Boolean(HOME_TEASER_INFOGRAPHIC_IMAGE_SRC);

  const sectionEyebrow =
    "text-xs font-black uppercase tracking-[0.22em] text-[#B8860B]";
  const mediaShell =
    "overflow-hidden rounded-2xl border border-[#001F3F]/10 bg-white shadow-[0_16px_48px_rgba(0,31,63,0.09)] ring-1 ring-[#001F3F]/[0.04]";
  const videoShell =
    "overflow-hidden rounded-2xl border border-[#001F3F]/15 bg-[#0a0a18] shadow-[0_24px_64px_rgba(0,31,63,0.18)] ring-1 ring-black/20";

  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] px-6 py-14 md:px-10 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(circle at 88% 12%, rgba(255,215,0,0.2), transparent 42%), radial-gradient(circle at 6% 88%, rgba(0,31,63,0.07), transparent 48%)",
        }}
      />
      <ViewIn className="relative mx-auto max-w-7xl">
        <motion.div
          variants={viewIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08 }}
          className="rounded-3xl border border-[#001F3F]/10 bg-white/95 p-6 shadow-[0_28px_90px_rgba(0,31,63,0.08)] backdrop-blur-sm md:p-8 md:backdrop-blur-none lg:p-10"
        >
          <div className="max-w-3xl border-b border-[#001F3F]/[0.08] pb-8 md:pb-10">
            <p className={sectionEyebrow}>{t("eyebrow")}</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-[#001F3F] md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-[#001F3F]/70 md:text-base">
              {t("subtitle")}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-stretch gap-10 md:mt-10 lg:flex-row lg:items-center lg:gap-10 xl:gap-12">
            <motion.div
              variants={viewIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
              className="min-w-0 flex-1"
            >
              <div className={videoShell}>
                <div className="relative aspect-video w-full">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    {...(HOME_TEASER_POSTER_SRC ? { poster: HOME_TEASER_POSTER_SRC } : {})}
                  >
                    <source src={HOME_TEASER_VIDEO_SRC} type="video/mp4" />
                  </video>
                </div>
              </div>
              <p className="mt-3 text-center text-[11px] font-medium leading-snug text-[#001F3F]/55 md:mt-3.5 md:text-left md:text-xs">
                {t("videoHint")}
              </p>
            </motion.div>

            {hasPoster ? (
              <motion.div
                variants={viewIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.12 }}
                className="mx-auto w-full max-w-[260px] shrink-0 sm:max-w-[280px] lg:mx-0 lg:w-[min(22vw,240px)] lg:max-w-[240px]"
              >
                <HomeVideoSubLabel>{t("posterLabel")}</HomeVideoSubLabel>
                <div
                  className={`${mediaShell} shadow-[0_12px_40px_rgba(0,31,63,0.1)]`}
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={HOME_TEASER_POSTER_IMAGE_SRC}
                      alt={t("posterAlt")}
                      fill
                      sizes="(max-width: 1024px) 280px, 240px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ) : null}
          </div>

          {hasInfographic ? (
            <>
              <div
                className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#001F3F]/12 to-transparent md:my-12"
                aria-hidden
              />
              <motion.div
                variants={viewIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.08 }}
              >
                <HomeVideoSubLabel>{t("infographicLabel")}</HomeVideoSubLabel>
                <div
                  className={`${mediaShell} mx-auto max-w-5xl bg-[#f8fafc] px-3 py-4 sm:px-5 sm:py-5 md:px-8 md:py-6`}
                >
                  <Image
                    src={HOME_TEASER_INFOGRAPHIC_IMAGE_SRC}
                    alt={t("infographicAlt")}
                    width={1600}
                    height={2200}
                    className="mx-auto h-auto w-full max-h-[min(85vh,880px)] object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1024px"
                  />
                </div>
              </motion.div>
            </>
          ) : null}
        </motion.div>
      </ViewIn>
    </section>
  );
}

export function HomeTrustStrip() {
  const t = useTranslations("HomeTrust");
  const rows = [
    { k: t("organiser"), v: t("organiserVal") },
    { k: t("edition"), v: t("editionVal") },
    { k: t("recognition"), v: t("recognitionVal") },
    { k: t("hashtag"), v: t("hashtagVal") },
  ];
  return (
    <section
      className="relative border-y border-white/10 px-6 py-5 md:px-10 md:py-6"
      style={{
        background: `linear-gradient(90deg, ${NAVY_DEEP} 0%, ${NAVY} 50%, ${NAVY_DEEP} 100%)`,
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-center gap-4 text-center md:flex-row md:gap-10">
        {rows.map((x) => (
          <div key={x.k} className="flex min-w-[140px] flex-col gap-0.5">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FFD700]/80">
              {x.k}
            </span>
            <span className="text-sm font-black text-white md:text-base">{x.v}</span>
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
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <ViewIn className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#001F3F]/45">
            {tp("kicker")}
          </p>
          <h2 className="mt-2 text-3xl font-black text-[#001F3F] md:text-[44px]">
            {tp("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-[#001F3F]/65 md:text-base">
            {tp("subtitle")}
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PREVIEW_MENU.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group rounded-3xl border border-[#001F3F]/10 bg-gradient-to-br from-white to-slate-50/80 p-8 text-left shadow-[0_20px_50px_rgba(0,31,63,0.08)] transition hover:-translate-y-1 hover:border-[#B8860B]/30 hover:shadow-[0_28px_70px_rgba(0,31,63,0.12)]"
            >
              <div className="text-lg font-black text-[#001F3F] group-hover:text-[#B8860B]">
                {tn(`menu.${l.id}`)}
              </div>
              <div className="mt-1 text-sm font-semibold text-[#001F3F]/55">
                {tn(`menuSub.${l.id}`)}
              </div>
              <div className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[#B8860B]">
                {tp("view")}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/competition"
            className="inline-flex rounded-full border-2 border-[#001F3F] px-8 py-3.5 text-sm font-black uppercase tracking-wider text-[#001F3F] transition hover:bg-[#001F3F] hover:text-white"
          >
            {tp("fullCta")}
          </Link>
        </div>
      </ViewIn>
    </section>
  );
}

export function HomeApaItuTeaser() {
  const t = useTranslations("HomeApaItu");
  const pills = [t("pill1"), t("pill2"), t("pill3")];
  return (
    <section
      className="px-6 py-20 text-white md:px-10 md:py-28"
      style={{
        background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
      }}
    >
      <ViewIn className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-black md:text-[40px]">{t("title")}</h2>
        <p className="mt-6 text-base font-semibold leading-8 text-white/80 md:text-lg">
          {t("beforeBrand")}
          <strong>MyCEO Education</strong>
          {t("between")}
          <strong>PAK21</strong>
          {t("afterPak")}
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {pills.map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-5 text-sm font-black uppercase tracking-wider"
            >
              {label}
            </div>
          ))}
        </div>
        <Link
          href="/competition"
          className="mt-10 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-black uppercase tracking-wider text-[#001F3F] transition hover:bg-[#FFD700]"
        >
          {t("readMore")}
        </Link>
      </ViewIn>
    </section>
  );
}
