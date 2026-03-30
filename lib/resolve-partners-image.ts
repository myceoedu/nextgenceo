import fs from "node:fs";
import path from "node:path";

const PUBLIC = path.join(process.cwd(), "public");

/**
 * Paths under `public/` (first match wins).
 * Prefer `rakan rasmi.png` at repo root of public — user-supplied HD strip.
 */
const CANDIDATES = [
  "rakan rasmi.png",
  "rakan-rasmi.png",
  "partners/rakan-rasmi.png",
  "partners/rakan-rasmi.jpg",
  "partners/rakan-rasmi.webp",
  "partners/sponsors-banner.png",
] as const;

function toPublicUrl(relativePath: string): string {
  return (
    "/" +
    relativePath
      .split("/")
      .map((segment) => encodeURIComponent(segment))
      .join("/")
  );
}

export function getPartnersImagePublicPath(): string | null {
  if (!fs.existsSync(PUBLIC)) return null;
  for (const rel of CANDIDATES) {
    const full = path.join(PUBLIC, ...rel.split("/"));
    if (fs.existsSync(full)) {
      return toPublicUrl(rel);
    }
  }
  return null;
}
