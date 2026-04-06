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
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="locale" value={locale} />

      {state.status === "error" ? (
        <p className="rounded-xl border border-red-400/40 bg-red-950/40 px-4 py-3 text-sm font-medium text-red-200">
          {t("errors.saveFailed")}
        </p>
      ) : null}
      {state.status === "success" ? (
        <p className="rounded-xl border border-emerald-400/35 bg-emerald-950/35 px-4 py-3 text-sm font-medium text-emerald-100">
          {t("teamSaved")}
        </p>
      ) : null}

      <p className="text-sm font-medium leading-relaxed text-slate-400">{t("teamHint")}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4].map((slot) => (
          <div key={slot}>
            <label
              htmlFor={`${baseId}-s-${slot}`}
              className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400"
            >
              {t("slotShort", { slot })}
            </label>
            <input
              id={`${baseId}-s-${slot}`}
              name={`student_${slot}`}
              type="text"
              defaultValue={slotName(initialBySlot, slot)}
              className="w-full rounded-xl border border-white/15 bg-[#0a1628]/90 px-4 py-3 text-[15px] font-medium text-white placeholder:text-slate-600 outline-none transition focus:border-[#FFD700]/40 focus:ring-2 focus:ring-[#FFD700]/25"
              placeholder="—"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-xl border-2 border-[#FFD700]/50 bg-gradient-to-b from-[#FFD700] to-[#d4af0a] py-3.5 text-sm font-black uppercase tracking-wider text-[#001F3F] shadow-[0_6px_24px_rgba(255,215,0,0.25)] transition hover:border-[#FFD700] disabled:opacity-55 md:w-auto md:px-10"
      >
        {isPending ? t("saving") : t("saveTeam")}
      </button>
    </form>
  );
}
