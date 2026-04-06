"use client";

import { useActionState, useId, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "@/i18n/navigation";
import {
  loginSchoolAccount,
  type LoginSchoolState,
} from "@/app/actions/login-school-account";

const initial: LoginSchoolState = { status: "idle" };

export function LoginSchoolForm() {
  const locale = useLocale();
  const t = useTranslations("SchoolLogin");
  const [state, formAction, isPending] = useActionState(loginSchoolAccount, initial);
  const [showPw, setShowPw] = useState(false);
  const pwId = useId();

  return (
    <div className="text-left">
      {state.status === "success" ? (
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
            href="/dashboard"
            className="mt-5 inline-flex text-sm font-bold text-[#001F3F] underline decoration-[#001F3F]/25 underline-offset-[5px] hover:decoration-[#B8860B]/45"
          >
            {t("goToDashboard")}
          </Link>
        </div>
      ) : (
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
            <label htmlFor="login-email" className="auth-label">
              {t("emailLabel")}
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="auth-input"
            />
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between gap-2">
              <label
                htmlFor={pwId}
                className="text-xs font-bold uppercase tracking-wider text-[#001F3F]/55"
              >
                {t("passwordLabel")}
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-semibold text-[#001F3F]/75 underline decoration-[#001F3F]/20 underline-offset-2 hover:text-[#001F3F] hover:decoration-[#B8860B]/50"
              >
                {t("forgotPassword")}
              </Link>
            </div>
            <div className="relative">
              <input
                id={pwId}
                name="password"
                type={showPw ? "text" : "password"}
                required
                autoComplete="current-password"
                minLength={8}
                className="auth-input pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg text-[#001F3F]/55 transition hover:bg-slate-100 hover:text-[#001F3F]"
                aria-label={showPw ? t("hidePassword") : t("showPassword")}
              >
                {showPw ? <EyeOff className="h-5 w-5" aria-hidden /> : <Eye className="h-5 w-5" aria-hidden />}
              </button>
            </div>
          </div>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
            <input
              type="checkbox"
              name="rememberMe"
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-[#001F3F] focus:ring-[#001F3F]/30"
            />
            <span className="text-sm font-medium text-[#001F3F]/75">{t("rememberMe")}</span>
          </label>

          <button
            type="submit"
            disabled={isPending}
            className="auth-submit"
          >
            {isPending ? t("submitting") : t("submit")}
          </button>

          <p className="text-center text-sm font-medium text-[#001F3F]/65">
            {t("createAccountPrompt")}{" "}
            <Link
              href="/register"
              className="font-bold text-[#001F3F] underline decoration-[#001F3F]/25 underline-offset-[5px] hover:decoration-[#B8860B]/45"
            >
              {t("createAccountCta")}
            </Link>
          </p>
        </form>
      )}
    </div>
  );
}
