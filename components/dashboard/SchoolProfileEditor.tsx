"use client";

import { useActionState, useId } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  updateSchoolProfile,
  type UpdateSchoolProfileState,
} from "@/app/actions/update-school-profile";

const initial: UpdateSchoolProfileState = { status: "idle" };

const fieldWrap =
  "rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)]";

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-[16px] font-medium text-slate-900 shadow-sm placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200";

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
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {t(`errors.${state.code}`)}
        </p>
      ) : null}
      {state.status === "success" ? (
        <p className="rounded-xl border border-emerald-400/35 bg-emerald-950/35 px-4 py-3 text-sm font-medium text-emerald-100">
          {t("schoolSaved")}
        </p>
      ) : null}

      <div className={fieldWrap}>
        <label
          htmlFor={`${baseId}-school`}
          className="mb-3 block text-[13px] font-bold uppercase tracking-[0.12em] text-amber-700"
        >
          {t("schoolName")}
        </label>
        <input
          id={`${baseId}-school`}
          name="schoolName"
          type="text"
          required
          defaultValue={schoolName}
          className={inputCls}
        />
      </div>
      <div className={fieldWrap}>
        <label
          htmlFor={`${baseId}-coord`}
          className="mb-3 block text-[13px] font-bold uppercase tracking-[0.12em] text-slate-600"
        >
          {t("coordinatorName")}
        </label>
        <input
          id={`${baseId}-coord`}
          name="coordinatorName"
          type="text"
          defaultValue={coordinatorName}
          className={inputCls}
        />
      </div>
      <div className={fieldWrap}>
        <label
          htmlFor={`${baseId}-phone`}
          className="mb-3 block text-[13px] font-bold uppercase tracking-[0.12em] text-slate-600"
        >
          {t("coordinatorPhone")}
        </label>
        <input
          id={`${baseId}-phone`}
          name="coordinatorPhone"
          type="tel"
          defaultValue={coordinatorPhone}
          className={inputCls}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl border-2 border-[#FFD700]/60 bg-gradient-to-b from-[#ffe566] to-[#e6b800] py-4 text-sm font-black uppercase tracking-[0.12em] text-[#041a3d] shadow-[0_10px_36px_rgba(255,215,0,0.4)] transition hover:brightness-110 disabled:opacity-55 md:w-auto md:px-12"
      >
        {isPending ? t("saving") : t("saveSchool")}
      </button>
    </form>
  );
}
