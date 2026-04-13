/**
 * Shared marketing UI class strings — keep layouts, buttons, and type aligned.
 * Brand navy: #001F3F (matches SiteHeader / auth shell).
 */
export const ui = {
  /** Max width + horizontal padding (matches header / footer). */
  container: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
  /** Text-heavy sections (competition copy blocks). */
  marketingContent: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
  /** Auth and similar focused layouts. */
  containerNarrow: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
  /** Standard top rule between sections. */
  borderSection: "border-t border-slate-200/80",
  /** Default vertical rhythm for stacked marketing sections. */
  section: "py-14 md:py-20",
  sectionTight: "py-12 md:py-16",
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 md:text-[13px]",
  pageTitle:
    "text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl",
  /** Large in-page section headings (not H1). */
  displaySm: "text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl",
  displayMd: "text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl",
  sectionTitle:
    "text-lg font-semibold tracking-tight text-slate-900 md:text-xl",
  lead: "text-base leading-relaxed text-slate-600 md:text-lg",
  body: "text-sm leading-relaxed text-slate-600 md:text-base",
  card: "rounded-xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-7",
  cardMuted: "rounded-xl border border-slate-200/80 bg-slate-50/80 p-6 sm:p-7",
  divider: "block h-px w-12 bg-slate-300",
  /** ≥44px tap target; primary marketing CTA. */
  btnPrimary:
    "inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#001F3F] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#002a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50 focus-visible:ring-offset-2",
  btnSecondary:
    "inline-flex min-h-[44px] items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-2.5 text-center text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50 focus-visible:ring-offset-2",
  btnOutlineNavy:
    "inline-flex min-h-[44px] w-full items-center justify-center rounded-md border-2 border-[#001F3F] bg-transparent px-5 py-2.5 text-center text-sm font-semibold text-[#001F3F] transition hover:bg-[#001F3F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50 focus-visible:ring-offset-2 sm:w-auto",
  linkInline:
    "font-semibold text-[#001F3F] underline decoration-slate-300 underline-offset-4 transition hover:decoration-[#001F3F]/60",
  /** Compact CTAs in fixed header (shorter than page CTAs). */
  headerCtaSecondary:
    "inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  headerCtaPrimary:
    "inline-flex items-center justify-center rounded-md bg-[#001F3F] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#002a52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
} as const;
