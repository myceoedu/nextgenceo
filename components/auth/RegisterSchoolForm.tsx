"use client";

import { useActionState, useId, useState } from "react";
import { useTranslations } from "next-intl";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "@/i18n/navigation";
import {
  registerSchoolAccount,
  type RegisterSchoolState,
} from "@/app/actions/register-school-account";

const initial: RegisterSchoolState = { status: "idle" };

export function RegisterSchoolForm() {
  const t = useTranslations("SchoolRegister");
  const [state, formAction, isPending] = useActionState(registerSchoolAccount, initial);
  const [showPw, setShowPw] = useState(false);
  const pwId = useId();
  const pw2Id = useId();

  return (
    <div className="text-left">
      {state.status === "success" ? (
        <div
          className="rounded-2xl border border-emerald-200 bg-emerald-50/90 px-5 py-5 shadow-sm md:px-6 md:py-6"
          role="status"
        >
          <p className="text-sm font-black uppercase tracking-[0.14em] text-emerald-800">
            {t("successTitle")}
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-emerald-900/90 md:text-[15px]">
            {t("successBody")}
          </p>
          <Link
            href="/login"
            className="mt-5 inline-flex text-sm font-bold text-[#001F3F] underline decoration-[#001F3F]/30 underline-offset-[5px] hover:decoration-[#B8860B]/45"
          >
            {t("loginCta")}
          </Link>
        </div>
      ) : (
        <form action={formAction} className="relative flex flex-col gap-6">
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </div>

          {state.status === "error" ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
              {t(`errors.${state.code}`)}
            </p>
          ) : null}

          <div className="space-y-5">
            <h2 className="auth-section-title">{t("sectionSchool")}</h2>
            <div>
              <label htmlFor="schoolName" className="auth-label">
                {t("schoolNameLabel")}
              </label>
              <input
                id="schoolName"
                name="schoolName"
                type="text"
                required
                autoComplete="organization"
                className="auth-input"
              />
            </div>
            <div>
              <label htmlFor="coordinator" className="auth-label">
                {t("coordinatorLabel")}
              </label>
              <input
                id="coordinator"
                name="coordinator"
                type="text"
                autoComplete="name"
                className="auth-input"
              />
            </div>
            <div>
              <label htmlFor="phone" className="auth-label">
                {t("phoneLabel")}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="auth-input"
              />
              <p className="mt-1.5 text-xs font-medium text-[#001F3F]/45">{t("phoneHint")}</p>
            </div>
          </div>

          <div className="space-y-5 border-t border-slate-100 pt-6">
            <h2 className="auth-section-title">{t("sectionAccount")}</h2>
            <div>
              <label htmlFor="email" className="auth-label">
                {t("emailLabel")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="auth-input"
              />
            </div>
            <div>
              <div className="flex items-center justify-between gap-2">
                <label htmlFor={pwId} className="auth-label">
                  {t("passwordLabel")}
                </label>
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="text-xs font-semibold text-[#001F3F]/65 hover:text-[#001F3F]"
                >
                  {showPw ? t("hidePassword") : t("showPassword")}
                </button>
              </div>
              <input
                id={pwId}
                name="password"
                type={showPw ? "text" : "password"}
                required
                autoComplete="new-password"
                minLength={8}
                className="auth-input"
              />
              <p className="mt-1.5 text-xs font-medium text-[#001F3F]/45">{t("passwordHint")}</p>
            </div>
            <div>
              <label htmlFor={pw2Id} className="auth-label">
                {t("confirmLabel")}
              </label>
              <div className="relative">
                <input
                  id={pw2Id}
                  name="confirmPassword"
                  type={showPw ? "text" : "password"}
                  required
                  autoComplete="new-password"
                  className="auth-input pr-12"
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#001F3F]/35">
                  {showPw ? (
                    <EyeOff className="h-4 w-4" aria-hidden />
                  ) : (
                    <Eye className="h-4 w-4" aria-hidden />
                  )}
                </span>
              </div>
            </div>
          </div>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/90 px-4 py-4">
            <input
              type="checkbox"
              name="termsAccepted"
              required
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-[#001F3F] focus:ring-[#001F3F]/30"
            />
            <span className="text-sm font-medium leading-relaxed text-[#001F3F]/82">
              {t("termsPrefix")}{" "}
              <Link
                href="/competition/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#001F3F] underline decoration-[#001F3F]/30 underline-offset-2 hover:decoration-[#B8860B]/55"
              >
                {t("termsLink")}
              </Link>
              {t("termsSuffix")}
            </span>
          </label>

          <p className="text-xs font-medium leading-relaxed text-[#001F3F]/50">{t("privacyNote")}</p>

          <button type="submit" disabled={isPending} className="auth-submit">
            {isPending ? t("submitting") : t("submit")}
          </button>

          <p className="text-center text-sm font-medium text-[#001F3F]/65">
            {t("loginPrompt")}{" "}
            <Link
              href="/login"
              className="font-bold text-[#001F3F] underline decoration-[#001F3F]/25 underline-offset-[5px] hover:decoration-[#B8860B]/45"
            >
              {t("loginCta")}
            </Link>
          </p>
        </form>
      )}
    </div>
  );
}
