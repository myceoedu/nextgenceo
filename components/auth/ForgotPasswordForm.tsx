"use client";

import { useActionState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  requestPasswordReset,
  type ForgotPasswordState,
} from "@/app/actions/forgot-password-request";

const initial: ForgotPasswordState = { status: "idle" };

export function ForgotPasswordForm() {
  const locale = useLocale();
  const t = useTranslations("SchoolForgotPassword");
  const [state, formAction, isPending] = useActionState(requestPasswordReset, initial);

  if (state.status === "success") {
    return (
      <div
        className="rounded-2xl border border-emerald-200/90 bg-emerald-50/95 px-5 py-5 md:px-6 md:py-6"
        role="status"
      >
        <p className="text-sm font-black uppercase tracking-[0.14em] text-emerald-900">
          {t("successTitle")}
        </p>
        <p className="mt-3 text-sm font-medium leading-relaxed text-emerald-950/88 md:text-[15px]">
          {t("successBody")}
        </p>
        <Link
          href="/login"
          className="mt-5 inline-flex text-sm font-bold text-[#001F3F] underline decoration-[#001F3F]/25 underline-offset-[5px] hover:decoration-[#B8860B]/45"
        >
          {t("backLogin")}
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input type="hidden" name="locale" value={locale} />
      <div className="sr-only" aria-hidden>
        <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {t(`errors.${state.code}`)}
        </p>
      ) : null}

      <div>
        <label htmlFor="forgot-email" className="auth-label">
          {t("emailLabel")}
        </label>
        <input
          id="forgot-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="auth-input"
        />
      </div>

      <button type="submit" disabled={isPending} className="auth-submit">
        {isPending ? t("submitting") : t("submit")}
      </button>

      <p className="text-center text-sm font-medium text-[#001F3F]/65">
        <Link href="/login" className="font-bold text-[#001F3F] underline decoration-[#001F3F]/25 underline-offset-[5px] hover:decoration-[#B8860B]/45">
          {t("backLogin")}
        </Link>
      </p>
    </form>
  );
}
