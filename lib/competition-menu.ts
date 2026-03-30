/** Top-level About us (not inside the competition submenu). Labels: Nav.menu.aboutUs / Nav.menuSub.aboutUs */
export const ABOUT_US_PAGE = {
  id: "aboutUs",
  href: "/about",
} as const;

/** Route ids shared by nav dropdown, quick links on overview, etc. */
export const COMPETITION_MENU = [
  { id: "about", href: "/competition" },
  { id: "howTo", href: "/competition/how-to-participate" },
  { id: "awards", href: "/competition/awards" },
  { id: "terms", href: "/competition/terms" },
  { id: "judging", href: "/competition/judging" },
  { id: "timeline", href: "/competition/timeline" },
  { id: "registration", href: "/competition/registration" },
] as const;

export type CompetitionMenuId = (typeof COMPETITION_MENU)[number]["id"];
