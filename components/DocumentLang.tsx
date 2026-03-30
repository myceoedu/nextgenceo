"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

/** Syncs <html lang> with active next-intl locale (root layout defaults to ms). */
export function DocumentLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
