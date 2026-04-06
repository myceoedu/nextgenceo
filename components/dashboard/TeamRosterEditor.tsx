"use client";

import { useActionState, useId } from "react";
import { useLocale, useTranslations } from "next-intl";
import { saveTeamRoster, type SaveTeamRosterState } from "@/app/actions/save-team-roster";

const initial: SaveTeamRosterState = { status: "idle" };

function slotName(slots: Record<number, string>, i: number) {
  return slots[i] ?? "";
}

type Props = {
  /** slot 1–4 → full name */
  initialBySlot: Record<number, string>;
};

export function TeamRosterEditor({ initialBySlot }: Props) {
  const locale = useLocale();
  const t = useTranslations("SchoolDashboard");
  const [state, formAction, isPending] = useActionState(saveTeamRoster, initial);
  const baseId = useId();

  return (
    <form action={formAction} className="space-y-7">
      <input type="hidden" name="locale" value={locale} />

      {state.status === "error" ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          {t("errors.saveFailed")}
        </p>
      ) : null}
      {state.status === "success" ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900">
          {t("teamSaved")}
        </p>
      ) : null}

      <p className="text-[15px] font-medium leading-relaxed text-sky-200/88">{t("teamHint")}</p>

      <div className="grid gap-5 sm:grid-cols-2">
        {[1, 2, 3, 4].map((slot) => (
          <div
            key={slot}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)]"
          >
            <label
              htmlFor={`${baseId}-s-${slot}`}
              className="mb-3 block text-[13px] font-bold uppercase tracking-[0.12em] text-amber-700"
            >
              {t("slotShort", { slot })}
            </label>
            <input
              id={`${baseId}-s-${slot}`}
              name={`student_${slot}`}
              type="text"
              defaultValue={slotName(initialBySlot, slot)}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-[16px] font-medium text-slate-900 shadow-sm placeholder:text-slate-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
              placeholder="—"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl border-2 border-[#FFD700]/60 bg-gradient-to-b from-[#ffe566] to-[#e6b800] py-4 text-sm font-black uppercase tracking-[0.12em] text-[#041a3d] shadow-[0_10px_36px_rgba(255,215,0,0.4)] transition hover:brightness-110 disabled:opacity-55 md:w-auto md:px-12"
      >
        {isPending ? t("saving") : t("saveTeam")}
      </button>
    </form>
  );
}
