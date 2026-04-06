"use client";

import { useActionState, useId } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  updateSchoolProfile,
  type UpdateSchoolProfileState,
} from "@/app/actions/update-school-profile";

const initial: UpdateSchoolProfileState = { status: "idle" };

type Props = {
  schoolName: string;
  coordinatorName: string;
  coordinatorPhone: string;
};

export function SchoolProfileEditor({ schoolName, coordinatorName, coordinatorPhone }: Props) {
  const locale = useLocale();
  const t = useTranslations("SchoolDashboard");
  const [state, formAction, isPending] = useActionState(updateSchoolProfile, initial);
  const baseId = useId();

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="locale" value={locale} />

      {state.status === "error" ? (
        <p className="rounded-xl border border-red-400/40 bg-red-950/40 px-4 py-3 text-sm font-medium text-red-200">
          {t(`errors.${state.code}`)}
        </p>
      ) : null}
      {state.status === "success" ? (
        <p className="rounded-xl border border-emerald-400/35 bg-emerald-950/35 px-4 py-3 text-sm font-medium text-emerald-100">
          {t("schoolSaved")}
        </p>
      ) : null}

      <div>
        <label htmlFor={`${baseId}-school`} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#FFD700]/90">
          {t("schoolName")}
        </label>
        <input
          id={`${baseId}-school`}
          name="schoolName"
          type="text"
          required
          defaultValue={schoolName}
          className="w-full rounded-xl border border-white/15 bg-[#0a1628]/90 px-4 py-3 text-[15px] font-medium text-white placeholder:text-slate-500 outline-none ring-[#FFD700]/0 transition focus:border-[#FFD700]/40 focus:ring-2 focus:ring-[#FFD700]/25"
        />
      </div>
      <div>
        <label htmlFor={`${baseId}-coord`} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">
          {t("coordinatorName")}
        </label>
        <input
          id={`${baseId}-coord`}
          name="coordinatorName"
          type="text"
          defaultValue={coordinatorName}
          className="w-full rounded-xl border border-white/15 bg-[#0a1628]/90 px-4 py-3 text-[15px] font-medium text-white placeholder:text-slate-500 outline-none transition focus:border-[#FFD700]/40 focus:ring-2 focus:ring-[#FFD700]/25"
        />
      </div>
      <div>
        <label htmlFor={`${baseId}-phone`} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">
          {t("coordinatorPhone")}
        </label>
        <input
          id={`${baseId}-phone`}
          name="coordinatorPhone"
          type="tel"
          defaultValue={coordinatorPhone}
          className="w-full rounded-xl border border-white/15 bg-[#0a1628]/90 px-4 py-3 text-[15px] font-medium text-white placeholder:text-slate-500 outline-none transition focus:border-[#FFD700]/40 focus:ring-2 focus:ring-[#FFD700]/25"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl border-2 border-[#FFD700]/50 bg-gradient-to-b from-[#FFD700] to-[#d4af0a] py-3.5 text-sm font-black uppercase tracking-wider text-[#001F3F] shadow-[0_6px_24px_rgba(255,215,0,0.25)] transition hover:border-[#FFD700] disabled:opacity-55 md:w-auto md:px-10"
      >
        {isPending ? t("saving") : t("saveSchool")}
      </button>
    </form>
  );
}
