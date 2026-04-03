"use client";

import { useActionState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  registerSchoolAccount,
  type RegisterSchoolState,
} from "@/app/actions/register-school-account";

const initial: RegisterSchoolState = { status: "idle" };

export function RegisterSchoolForm() {
  const t = useTranslations("SchoolRegister");
  const [state, formAction, isPending] = useActionState(registerSchoolAccount, initial);

  return (
    <div className="mx-auto w-full max-w-md text-left">
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
        <form action={formAction} className="relative flex flex-col gap-4">
          <div className="sr-only" aria-hidden>
            <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
          </div>

          {state.status === "error" ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
              {t(`errors.${state.code}`)}
            </p>
          ) : null}

          <div>
            <label
              htmlFor="schoolName"
              className="block text-xs font-bold uppercase tracking-wider text-[#001F3F]/55"
            >
              {t("schoolNameLabel")}
            </label>
            <input
              id="schoolName"
              name="schoolName"
              type="text"
              required
              autoComplete="organization"
              className="mt-1.5 w-full rounded-xl border border-[#001F3F]/15 bg-white px-4 py-3 text-sm font-medium text-[#001F3F] shadow-sm outline-none transition focus:border-[#001F3F]/35 focus:ring-2 focus:ring-[#001F3F]/15"
            />
          </div>

          <div>
            <label
              htmlFor="coordinator"
              className="block text-xs font-bold uppercase tracking-wider text-[#001F3F]/55"
            >
              {t("coordinatorLabel")}
            </label>
            <input
              id="coordinator"
              name="coordinator"
              type="text"
              autoComplete="name"
              className="mt-1.5 w-full rounded-xl border border-[#001F3F]/15 bg-white px-4 py-3 text-sm font-medium text-[#001F3F] shadow-sm outline-none transition focus:border-[#001F3F]/35 focus:ring-2 focus:ring-[#001F3F]/15"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-[#001F3F]/55"
            >
              {t("emailLabel")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-xl border border-[#001F3F]/15 bg-white px-4 py-3 text-sm font-medium text-[#001F3F] shadow-sm outline-none transition focus:border-[#001F3F]/35 focus:ring-2 focus:ring-[#001F3F]/15"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-bold uppercase tracking-wider text-[#001F3F]/55"
            >
              {t("passwordLabel")}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="new-password"
              minLength={8}
              className="mt-1.5 w-full rounded-xl border border-[#001F3F]/15 bg-white px-4 py-3 text-sm font-medium text-[#001F3F] shadow-sm outline-none transition focus:border-[#001F3F]/35 focus:ring-2 focus:ring-[#001F3F]/15"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-xs font-bold uppercase tracking-wider text-[#001F3F]/55"
            >
              {t("confirmLabel")}
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              autoComplete="new-password"
              className="mt-1.5 w-full rounded-xl border border-[#001F3F]/15 bg-white px-4 py-3 text-sm font-medium text-[#001F3F] shadow-sm outline-none transition focus:border-[#001F3F]/35 focus:ring-2 focus:ring-[#001F3F]/15"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#001F3F] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-white shadow-[0_12px_32px_rgba(0,31,63,0.22)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
          >
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
