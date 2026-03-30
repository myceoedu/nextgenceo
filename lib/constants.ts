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

export const GRAND_PRIZE_LABEL = "RM 10,000";

/** Home video teaser — add `public/teaser.mp4`. */
export const HOME_TEASER_VIDEO_SRC = "/teaser.mp4";
/**
 * Optional `<video poster>` (frame before playback). Usually unnecessary with `autoPlay` + `muted`
 * once the file exists — leave "" to skip.
 */
export const HOME_TEASER_POSTER_SRC = "";

/** Key art beside the video (`public/Poster.jpg`). Set "" to hide. */
export const HOME_TEASER_POSTER_IMAGE_SRC = "/Poster.jpg";

/** Infographic beside the video (`public/InfoGraphic.jpg`). Set "" to hide. */
export const HOME_TEASER_INFOGRAPHIC_IMAGE_SRC = "/InfoGraphic.jpg";

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

