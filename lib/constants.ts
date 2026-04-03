export const NAVY = "#141452";
export const NAVY_DEEP = "#001F3F";
export const GOLD = "#e6e600";
export const GOLD_DEEP = "#FFD700";

export const LOGO_SRC =
  "/logo.png";
export const SPONSOR_SRC =
  "https://lh3.googleusercontent.com/d/11iJgklH9bwv2O2fwhR5uZWpbHfOigii1";
export const DRIVE_CHALLENGE_URL =
  "https://drive.google.com/file/d/1Ce1UIhh7BD-fK-WcX0I5qFH5dToxzt1o/view?usp=sharing";

/** Base ringgit amount; home hero adds +1 per visit via localStorage. */
export const GRAND_PRIZE_BASE_RM = 10_000;

export const GRAND_PRIZE_LABEL = `RM ${GRAND_PRIZE_BASE_RM.toLocaleString("en-MY")}`;

/**
 * Home hero full-bleed background (`public/home/background.*`).
 * Use a **wide** asset (≥1920px on the long edge; 2560px+ for large / retina). The hero uses `unoptimized` so this file is shown at full resolution — small sources still look soft when scaled up.
 * Change extension here if your file is `.webp` or `.png`.
 */
export const HOME_HERO_BACKGROUND_SRC = "/home/background1.jpg";

/**
 * Registration page full-bleed photo (`public/...`). Swap anytime; use a wide image for best results.
 */
export const REGISTRATION_HERO_IMAGE_SRC = "/home/background.jpg";

/** Home video teaser — used when {@link HOME_TEASER_YOUTUBE_VIDEO_ID} is empty. Add `public/teaser.mp4`. */
export const HOME_TEASER_VIDEO_SRC = "/teaser.mp4";

/**
 * YouTube video ID only (from `youtube.com/watch?v=THIS` or `youtu.be/THIS`).
 * When non-empty, the home video block embeds YouTube instead of {@link HOME_TEASER_VIDEO_SRC}.
 * Paste below and/or set `NEXT_PUBLIC_HOME_TEASER_YOUTUBE_ID` in `.env.local` (inline wins).
 */
const HOME_TEASER_YOUTUBE_VIDEO_ID_INLINE = "AUmwVsStuHM";
export const HOME_TEASER_YOUTUBE_VIDEO_ID =
  HOME_TEASER_YOUTUBE_VIDEO_ID_INLINE ||
  (typeof process !== "undefined" ? (process.env.NEXT_PUBLIC_HOME_TEASER_YOUTUBE_ID ?? "").trim() : "");

/**
 * Optional `<video poster>` for the MP4 fallback only. Leave "" to skip.
 */
export const HOME_TEASER_POSTER_SRC = "";

/**
 * Key art beside the video + important-dates left panel. Use a **high-resolution** file: the layout
 * is ~half the viewport wide on desktop (often 500–800 CSS px, ×2 for retina).
 *
 * `public/home/ceo4.jpg` is only **236×420px** (~23KB) — far too small; scaling it up will always look
 * blurry. This path uses `public/Poster.jpg` (2480×3508) for a sharp competition poster. To use your
 * own asset from `public/home/`, export it at least **1200px wide** and set this constant to that path.
 */
export const HOME_TEASER_POSTER_IMAGE_SRC = "/ceo3.jpg";

/** Infographic under the video section — set a path to show; "" hides it. */
export const HOME_TEASER_INFOGRAPHIC_IMAGE_SRC = "";

/** About page column image (`public/MyCEO about image.png`). Empty string uses {@link LOGO_SRC}. */
export const ABOUT_PAGE_IMAGE_SRC = "/MyCEO%20about%20image.png";

/** MyCEO gallery (`public/galeri MyCeo/`). Use %20 for the space in the path. */
export const ABOUT_GALLERY_IMAGES = [
  "/galeri%20MyCeo/galeri1.png",
  "/galeri%20MyCeo/galeri2.png",
  "/galeri%20MyCeo/galeri3.png",
  "/galeri%20MyCeo/galeri4.png",
  "/galeri%20MyCeo/galeri5.png",
  "/galeri%20MyCeo/galeri6.png",
] as const;

/** Home gallery strip (4 tiles) from `public/home/PIC 1.jpg` ... `PIC 4.jpg`. */
export const HOME_PAGE_GALLERY_IMAGES = [
  "/home/PIC%201.jpg",
  "/home/PIC%202.jpg",
  "/home/PIC%203.jpg",
  "/home/PIC%204.jpeg",
] as const;

/** Two images beside the outcomes column — `public/home/ceo1.jpg`, `ceo2.jpeg`. */
export const HOME_OUTCOMES_SIDE_IMAGES = ["/home/ceo1.jpg", "/home/ceo2.jpeg"] as const;

/**
 * GEP-style hero tiles in the left/right gutters (`public/home/ceo4`–`ceo8`).
 * Shown from the `xl` breakpoint so they stay in the margin, not over the headline.
 * Match each file’s real extension (`.jpg` / `.jpeg` / `.png`) if yours differ.
 */
export const GEP_HERO_FLOAT_IMAGES = [
  "/home/ceo4.jpg",
  "/home/ceo5.jpg",
  "/home/ceo6.jpg",
  "/home/ceo7.jpg",
  "/home/ceo8.jpg",
] as const;

/**
 * Header photography for each competition hub carousel slide (intro through registration).
 * Align with {@link HOME_TEASER_POSTER_IMAGE_SRC} and {@link REGISTRATION_HERO_IMAGE_SRC} as needed.
 */
export const COMPETITION_HUB_DECK_IMAGES = [
  HOME_TEASER_POSTER_IMAGE_SRC,
  "/home/ceo5.jpg",
  "/home/ceo6.jpg",
  "/home/ceo1.jpg",
  "/home/ceo7.jpg",
  "/home/ceo8.jpg",
  "/home/ceo2.jpeg",
  REGISTRATION_HERO_IMAGE_SRC,
] as const;

/** MyCEO programme tiles (`public/Program MyCEO/`). */
export const MYCEO_PROGRAMS = [
  {
    id: "buc",
    i18nKey: "programBuc",
    image: "/Program%20MyCeo/BUC.png",
    accent: "#6B2D8A",
  },
  {
    id: "msk",
    i18nKey: "programMsk",
    image: "/Program%20MyCeo/MSK.png",
    accent: "#001F3F",
  },
  {
    id: "kkuc",
    i18nKey: "programKkuc",
    image: "/Program%20MyCeo/KKUC.png",
    accent: "#A21CAF",
  },
] as const;

