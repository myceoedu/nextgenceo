import type { ReactNode } from "react";

/** Small topic icons for Competition hub preview cards (decorative). */
export function PreviewTopicIcon({ menuId }: { menuId: string }) {
  const svg = (children: ReactNode) => (
    <span className="inline-flex text-[#001F3F]">
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        {children}
      </svg>
    </span>
  );

  switch (menuId) {
    case "aboutUs":
      return svg(
        <>
          <path d="M4 21V10.5M4 10.5l8-6 8 6M4 21h16M10 21v-5h4v5" />
        </>,
      );
    case "howTo":
      return svg(
        <>
          <path d="M12 5v14M8 9l4-4 4 4M8 15l4 4 4-4" />
        </>,
      );
    case "awards":
      return svg(
        <>
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 1 1-10 0V4z" />
          <path d="M12 9v4" />
        </>,
      );
    case "terms":
      return svg(
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M8 13h8M8 17h6" />
        </>,
      );
    case "judging":
      return svg(
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        </>,
      );
    case "timeline":
      return svg(
        <>
          <path d="M4 7h16M4 12h10M4 17h14" />
          <circle cx="9" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </>,
      );
    case "registration":
      return svg(
        <>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M9 12h6M9 16h4" />
        </>,
      );
    default:
      return svg(<circle cx="12" cy="12" r="9" />);
  }
}
