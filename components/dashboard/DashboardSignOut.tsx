"use client";

import { useLocale, useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";
import { signOutAction } from "@/app/actions/sign-out";

const headerBtn =
  "inline-flex items-center justify-center rounded-full border-2 border-[#FFD700]/75 bg-gradient-to-b from-[#FFD700] to-[#e6c200] px-5 py-2 text-sm font-black uppercase tracking-wider text-[#001F3F] shadow-[0_4px_20px_rgba(255,215,0,0.35)] transition hover:border-[#FFD700] hover:shadow-[0_6px_28px_rgba(255,215,0,0.45)] disabled:opacity-55";

const defaultBtn =
  "inline-flex rounded-full border-2 border-[#001F3F]/22 bg-white px-5 py-2.5 text-sm font-bold text-[#001F3F] transition hover:border-[#001F3F]/40 hover:bg-slate-50 disabled:opacity-60";

function SignOutButton({ variant }: { variant: "header" | "default" }) {
  const { pending } = useFormStatus();
  const t = useTranslations("SchoolDashboard");
  return (
    <button type="submit" disabled={pending} className={variant === "header" ? headerBtn : defaultBtn}>
      {pending ? t("signingOut") : t("signOut")}
    </button>
  );
}

export function DashboardSignOut({ variant = "default" }: { variant?: "header" | "default" }) {
  const locale = useLocale();
  return (
    <form action={signOutAction} className="inline">
      <input type="hidden" name="locale" value={locale} />
      <SignOutButton variant={variant} />
    </form>
  );
}
