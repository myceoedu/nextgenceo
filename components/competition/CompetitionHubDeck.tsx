"use client";

/**
 * Competition hub carousel — editorial / international style:
 * one accent (teal on slate neutrals), restrained imagery, readable type scale.
 */
import useEmblaCarousel from "embla-carousel-react";
import { useReducedMotion } from "framer-motion";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { COMPETITION_HUB_DECK_IMAGES, GRAND_PRIZE_LABEL } from "@/lib/constants";

type Variant = "full" | "teaser";

type Props = {
  variant?: Variant;
  homeHeadlines?: boolean;
  sectionId?: string;
};

function useEmblaWithA11y(reducedMotion: boolean) {
  return useEmblaCarousel({
    loop: false,
    align: "start",
    duration: reducedMotion ? 0 : 22,
    dragFree: false,
  });
}

/** Slide shell: compact hero image, white body, no forced min-height gap */
function DeckSlideCard({
  imageSrc,
  ariaLabel,
  children,
}: {
  imageSrc: string;
  ariaLabel: string;
  children: ReactNode;
}) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/95 bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.03]"
      role="group"
      aria-roledescription="slide"
      aria-label={ariaLabel}
    >
      <div className="relative aspect-[2.4/1] max-h-[9.5rem] w-full shrink-0 sm:max-h-[10.5rem] md:aspect-[2.5/1] md:max-h-[11rem]">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 896px"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent"
          aria-hidden
        />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600" aria-hidden />
      </div>
      <div className="flex flex-col gap-0 px-5 pb-6 pt-5 md:px-7 md:pb-7 md:pt-6">{children}</div>
    </div>
  );
}

function AccentTitle({ children }: { children: ReactNode }) {
  return (
    <header className="mb-0.5">
      <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-900 md:text-xl">
        {children}
      </h3>
      <span className="mt-2.5 inline-block h-0.5 w-11 rounded-full bg-teal-600" aria-hidden />
    </header>
  );
}

function StepRow({ n, title, desc }: { n: number; title: string; desc: string }) {
  const zebra = n % 2 === 0;
  return (
    <li
      className={[
        "flex gap-3 rounded-xl px-3 py-2.5 md:gap-3.5 md:px-3.5 md:py-3",
        zebra ? "bg-slate-50" : "bg-white",
      ].join(" ")}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-semibold tabular-nums text-white md:h-10 md:w-10 md:text-sm">
        {n}
      </span>
      <div className="min-w-0 pt-0.5 text-[15px] leading-snug text-slate-600 md:text-base">
        <span className="font-semibold text-slate-900">{title}</span>
        <span className="text-slate-600"> — {desc}</span>
      </div>
    </li>
  );
}

function CheckRow({ children, highlight }: { children: ReactNode; highlight?: boolean }) {
  return (
    <li className="flex gap-3">
      <span
        className={[
          "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
          highlight ? "bg-teal-100 text-teal-800" : "bg-slate-100 text-slate-500",
        ].join(" ")}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
      </span>
      <span className="text-[15px] font-medium leading-snug text-slate-800 md:text-base">
        {children}
      </span>
    </li>
  );
}

function CardKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-700 md:text-[11px]">
      {children}
    </p>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="mt-4 inline-flex w-fit items-center gap-1 text-[15px] font-medium text-slate-800 underline decoration-slate-300 underline-offset-[5px] transition hover:text-teal-800 hover:decoration-teal-500/60"
    >
      {children}
    </Link>
  );
}

export function CompetitionHubDeck({
  variant = "full",
  homeHeadlines = false,
  sectionId,
}: Props) {
  const reducedMotion = useReducedMotion() ?? false;
  const [emblaRef, emblaApi] = useEmblaWithA11y(reducedMotion);
  const [selected, setSelected] = useState(0);
  const announcerId = useId();

  const th = useTranslations("HomeHero");
  const tHub = useTranslations("CompetitionHub");
  const tApa = useTranslations("ApaItu");
  const tHow = useTranslations("HowToParticipate");
  const tGrand = useTranslations("GrandPrize");
  const tManfaat = useTranslations("ManfaatPelajar");
  const tPen = useTranslations("Penilaian");
  const tTime = useTranslations("Timeline");
  const tTerma = useTranslations("Terma");
  const tReg = useTranslations("Registration");
  const tPages = useTranslations("CompetitionPages");

  const deckImg = COMPETITION_HUB_DECK_IMAGES;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const slideLabelsFull = [
    tHub("slideIntroLabel"),
    tHub("slideWhatLabel"),
    tHub("slideHowLabel"),
    tHub("slideAwardsLabel"),
    tHub("slideJudgingLabel"),
    tHub("slideTimelineLabel"),
    tHub("slideTermsLabel"),
    tHub("slideRegisterLabel"),
  ];
  const slideLabelsTeaser = [
    tHub("slideIntroLabel"),
    tHub("slideTimelineLabel"),
    tHub("slideRegisterLabel"),
  ];

  const slideLabels = variant === "teaser" ? slideLabelsTeaser : slideLabelsFull;
  const total = slideLabels.length;
  const currentTitle = slideLabels[selected] ?? "";

  const keyNav = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  const divider = "mt-5 border-t border-slate-100 pt-5";

  const introSlide = (
    <DeckSlideCard imageSrc={deckImg[0]} ariaLabel={slideLabelsFull[0]}>
      <CardKicker>{th("badge")}</CardKicker>
      <h3 className="mt-2.5 text-xl font-semibold leading-tight tracking-tight text-slate-900 md:text-2xl md:leading-[1.2]">
        {th("pitchLine")}
      </h3>
      <span className="mt-3 inline-block h-0.5 w-11 rounded-full bg-teal-600" aria-hidden />
      <p className="mt-4 text-base leading-relaxed text-slate-600 md:leading-[1.65]">{th("body")}</p>
      <ul className={`${divider} space-y-3`}>
        <CheckRow highlight>{th("miniReg")}</CheckRow>
        <CheckRow>{th("miniBoot")}</CheckRow>
        <CheckRow highlight>{th("miniPitch")}</CheckRow>
      </ul>
      <p className="mt-4 text-sm font-medium text-slate-500">{th("hashtag")}</p>
    </DeckSlideCard>
  );

  const whatSlide = (
    <DeckSlideCard imageSrc={deckImg[1]} ariaLabel={slideLabelsFull[1]}>
      <AccentTitle>{tApa("title")}</AccentTitle>
      <p className="mt-4 text-base leading-relaxed text-slate-600 md:leading-[1.65]">{tApa("lead")}</p>
      <ul className={`${divider} space-y-3`}>
        <CheckRow highlight>{tApa("c1t")}</CheckRow>
        <CheckRow>{tApa("c2t")}</CheckRow>
        <CheckRow highlight>{tApa("c3t")}</CheckRow>
      </ul>
    </DeckSlideCard>
  );

  const howSlide = (
    <DeckSlideCard imageSrc={deckImg[2]} ariaLabel={slideLabelsFull[2]}>
      <AccentTitle>{tHow("title")}</AccentTitle>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{tHow("intro")}</p>
      <ol className="mt-4 flex list-none flex-col gap-1.5 p-0">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <StepRow
            key={n}
            n={n}
            title={tHow(`s${n}t` as "s1t")}
            desc={tHow(`s${n}d` as "s1d")}
          />
        ))}
      </ol>
      <div className={`${divider} flex flex-wrap gap-2.5`}>
        <Link
          href="/competition/terms"
          className="inline-flex min-h-[44px] items-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          {tHow("termsCta")}
        </Link>
        <Link
          href="/competition/registration"
          className="inline-flex min-h-[44px] items-center rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
        >
          {tHow("regCta")}
        </Link>
      </div>
    </DeckSlideCard>
  );

  const awardsSlide = (
    <DeckSlideCard imageSrc={deckImg[3]} ariaLabel={slideLabelsFull[3]}>
      <CardKicker>{tGrand("title")}</CardKicker>
      <p className="mt-2 text-xl font-semibold leading-snug text-slate-900 md:text-2xl">
        {tManfaat("grandTitle", { amount: GRAND_PRIZE_LABEL })}
      </p>
      <span className="mt-2.5 inline-block h-0.5 w-11 rounded-full bg-teal-600" aria-hidden />
      <p className="mt-3 text-base leading-relaxed text-slate-600 md:leading-[1.65]">{tManfaat("grandDesc")}</p>
      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] leading-relaxed text-slate-700 md:text-base">
        {tGrand("cert")}
      </div>
      <TextLink href="/competition/awards">
        {tPages("awardsTitle")} →
      </TextLink>
    </DeckSlideCard>
  );

  const judgingSlide = (
    <DeckSlideCard imageSrc={deckImg[4]} ariaLabel={slideLabelsFull[4]}>
      <AccentTitle>{tPen("title")}</AccentTitle>
      <ul className="mt-4 flex flex-col overflow-hidden rounded-xl border border-slate-200">
        {([1, 2, 3, 4] as const).map((n, i) => (
          <li
            key={n}
            className={[
              "flex gap-3 border-b border-slate-100 px-4 py-3.5 last:border-b-0 md:px-4 md:py-4",
              i % 2 === 0 ? "bg-white" : "bg-slate-50/90",
            ].join(" ")}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
              <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
            </span>
            <div className="min-w-0 text-[15px] md:text-base">
              <span className="font-semibold text-slate-900">{tPen(`s${n}h` as "s1h")}</span>
              <p className="mt-1 leading-snug text-slate-600">{tPen(`s${n}p` as "s1p")}</p>
            </div>
          </li>
        ))}
      </ul>
      <TextLink href="/competition/judging">{tPages("judgingTitle")} →</TextLink>
    </DeckSlideCard>
  );

  const timelineSlide = (ariaLabel: string) => (
    <DeckSlideCard imageSrc={deckImg[5]} ariaLabel={ariaLabel}>
      <AccentTitle>{tTime("title")}</AccentTitle>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-slate-800 px-4 py-2.5 text-center md:px-5 md:py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/95 md:text-xs">
            {tHub("timelineTablePhase")}
          </p>
        </div>
        <ul className="divide-y divide-slate-100">
          {([1, 2, 3] as const).map((n, i) => (
            <li
              key={n}
              className={[
                "flex flex-col gap-2 px-4 py-3.5 sm:flex-row sm:items-start sm:gap-4 md:px-5 md:py-4",
                i % 2 === 0 ? "bg-white" : "bg-slate-50/80",
              ].join(" ")}
            >
              <span className="inline-flex w-fit shrink-0 items-center justify-center rounded-lg bg-teal-700 px-3 py-1 text-center text-[11px] font-semibold tabular-nums uppercase tracking-wide text-white md:min-w-[5.5rem] md:text-xs">
                {tTime(`s${n}when` as "s1when")}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900">{tTime(`s${n}title` as "s1title")}</p>
                <p className="mt-1 text-[15px] leading-snug text-slate-600 md:text-base">
                  {tTime(`s${n}desc` as "s1desc")}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <TextLink href="/competition/timeline">{tPages("timelineTitle")} →</TextLink>
    </DeckSlideCard>
  );

  const termsSlide = (
    <DeckSlideCard imageSrc={deckImg[6]} ariaLabel={slideLabelsFull[6]}>
      <AccentTitle>{tTerma("title")}</AccentTitle>
      <p className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-[15px] leading-relaxed text-slate-700 md:text-base">
        {tHub("termsSnapshotNote")}
      </p>
      <ul className="mt-4 flex flex-col gap-2">
        {([1, 2, 3] as const).map((n, i) => (
          <li
            key={n}
            className={[
              "rounded-xl px-4 py-3",
              i % 2 === 0 ? "bg-slate-50" : "border border-slate-100 bg-white",
            ].join(" ")}
          >
            <span className="font-semibold text-slate-900">{tTerma(`i${n}h` as "i1h")}</span>
            <p className="mt-1.5 text-[15px] leading-snug text-slate-600 md:text-base">{tTerma(`i${n}p` as "i1p")}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/competition/terms"
        className="mt-4 inline-flex min-h-[44px] w-fit items-center rounded-lg border border-slate-800 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
      >
        {tPages("termsTitle")} →
      </Link>
    </DeckSlideCard>
  );

  const registerSlide = (ariaLabel: string) => (
    <DeckSlideCard imageSrc={deckImg[7]} ariaLabel={ariaLabel}>
      <CardKicker>{tReg("kicker")}</CardKicker>
      <AccentTitle>{tReg("title")}</AccentTitle>
      <p className="mt-3 text-base leading-relaxed text-slate-600 md:leading-[1.65]">
        {tReg("bodyBefore")}
        <strong className="font-semibold text-slate-900"> {tReg("bodyStrong")} </strong>
        {tReg("bodyAfter")}
      </p>
      <Link
        href="/competition/registration"
        className="mt-5 inline-flex min-h-[48px] w-fit items-center justify-center rounded-lg bg-teal-700 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-teal-800"
      >
        {tReg("join")}
      </Link>
    </DeckSlideCard>
  );

  const fullSlides = [
    introSlide,
    whatSlide,
    howSlide,
    awardsSlide,
    judgingSlide,
    timelineSlide(tHub("slideTimelineLabel")),
    termsSlide,
    registerSlide(tHub("slideRegisterLabel")),
  ];
  const teaserSlides = [
    introSlide,
    timelineSlide(tHub("slideTimelineLabel")),
    registerSlide(tHub("slideRegisterLabel")),
  ];

  const slides = variant === "teaser" ? teaserSlides : fullSlides;

  const useHomeCopy = variant === "teaser" || homeHeadlines;
  const kicker = useHomeCopy ? tHub("homeKicker") : tHub("kicker");
  const title = useHomeCopy ? tHub("homeTitle") : tHub("title");
  const subtitle = useHomeCopy ? tHub("homeSubtitle") : tHub("subtitle");

  const darkBand = useHomeCopy;

  const sectionShell = darkBand
    ? [
        "relative overflow-hidden border-y border-slate-900/40 px-4 py-14 md:px-10 md:py-20",
        sectionId ? "scroll-mt-28 md:scroll-mt-32" : "",
      ]
        .filter(Boolean)
        .join(" ")
    : [
        "relative border-y border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 px-4 py-12 md:px-10 md:py-18",
        sectionId ? "scroll-mt-28 md:scroll-mt-32" : "",
      ]
        .filter(Boolean)
        .join(" ");

  return (
    <section
      id={sectionId}
      className={sectionShell}
      style={
        darkBand
          ? {
              background: "linear-gradient(160deg, #0f172a 0%, #134e4a 48%, #0f172a 100%)",
            }
          : undefined
      }
      aria-labelledby={`${announcerId}-heading`}
    >
      {darkBand ? (
        <>
          <div
            className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-slate-500/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v32H0V0zm32 32h32v32H32V32zM0 32h32v32H0V32z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            }}
            aria-hidden
          />
        </>
      ) : null}

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-9 text-center md:mb-11">
          <p
            className={[
              "text-[11px] font-semibold uppercase tracking-[0.16em] md:text-xs",
              darkBand ? "text-teal-300/90" : "text-teal-700",
            ].join(" ")}
          >
            {kicker}
          </p>
          <h2
            id={`${announcerId}-heading`}
            className={[
              "mx-auto mt-3 max-w-3xl text-balance text-[1.625rem] font-semibold leading-[1.12] tracking-tight md:text-[2.25rem] md:leading-[1.08]",
              darkBand ? "text-white" : "text-slate-900",
            ].join(" ")}
          >
            {title}
          </h2>
          <span
            className="mx-auto mt-4 block h-0.5 w-16 rounded-full bg-teal-500"
            aria-hidden
          />
          <p
            className={[
              "mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed md:text-[1.0625rem]",
              darkBand ? "text-slate-300" : "text-slate-600",
            ].join(" ")}
          >
            {subtitle}
          </p>
          <p
            className={[
              "mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed",
              darkBand ? "text-slate-400" : "text-slate-500",
            ].join(" ")}
          >
            {tHub("dragHint")}
          </p>
        </div>

        <div
          className="relative"
          onKeyDown={keyNav}
          role="region"
          aria-roledescription="carousel"
          aria-label={title}
          tabIndex={0}
        >
          <div className="overflow-hidden pb-2" ref={emblaRef}>
            <div className="flex touch-pan-x [-webkit-tap-highlight-color:transparent]">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-0 pr-3 md:pr-7 [&:last-child]:pr-0"
                >
                  {slide}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:mt-8">
            <button
              type="button"
              className={[
                "inline-flex h-11 w-11 items-center justify-center rounded-full border text-slate-800 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-35",
                darkBand
                  ? "border-white/20 bg-white/95 hover:bg-white"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
              ].join(" ")}
              onClick={scrollPrev}
              disabled={!emblaApi?.canScrollPrev()}
              aria-label={tHub("prevAria")}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <div className="flex min-w-[8rem] justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={[
                    "h-2 rounded-full transition-[width,background-color] duration-200",
                    i === selected
                      ? darkBand
                        ? "w-8 bg-teal-400"
                        : "w-8 bg-teal-600"
                      : darkBand
                        ? "w-2 bg-white/25 hover:bg-white/40"
                        : "w-2 bg-slate-300 hover:bg-slate-400",
                  ].join(" ")}
                  aria-label={`${slideLabels[i]}`}
                  aria-current={i === selected ? "true" : undefined}
                  onClick={() => emblaApi?.scrollTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className={[
                "inline-flex h-11 w-11 items-center justify-center rounded-full border text-slate-800 shadow-sm transition disabled:cursor-not-allowed disabled:opacity-35",
                darkBand
                  ? "border-white/20 bg-white/95 hover:bg-white"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
              ].join(" ")}
              onClick={scrollNext}
              disabled={!emblaApi?.canScrollNext()}
              aria-label={tHub("nextAria")}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <p id={announcerId} className="sr-only" aria-live="polite" aria-atomic="true">
            {tHub("announcer", { current: selected + 1, total })}
            {currentTitle ? `: ${currentTitle}` : ""}
          </p>

          {variant === "teaser" ? (
            <p className="mt-9 text-center">
              <Link
                href="/#competition-hub"
                className={[
                  "text-sm font-medium underline decoration-2 underline-offset-[6px] transition md:text-base",
                  darkBand
                    ? "text-teal-300 decoration-teal-500/40 hover:text-white hover:decoration-white/40"
                    : "text-teal-800 decoration-teal-300 hover:text-slate-900",
                ].join(" ")}
              >
                {tHub("exploreFullHub")}
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
