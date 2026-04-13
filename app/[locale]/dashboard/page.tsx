import { getTranslations, setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import { CoordinatorShareWithTeamPanel } from "@/components/dashboard/CoordinatorShareWithTeamPanel";
import { DashboardQuickLinks } from "@/components/dashboard/DashboardQuickLinks";
import { DashboardSessionCard } from "@/components/dashboard/DashboardSessionCard";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { SchoolProfileEditor } from "@/components/dashboard/SchoolProfileEditor";
import { TeamRosterEditor } from "@/components/dashboard/TeamRosterEditor";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ui } from "@/lib/ui";
import type { ReactNode } from "react";

type Props = { params: Promise<{ locale: string }> };

type SupabaseServer = Awaited<ReturnType<typeof createSupabaseServerClient>>;

type TeamRow = { slot: number; full_name: string };

function panelShell({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-[var(--ngc-dash-surface-elevated)] to-sky-50/40 p-6 shadow-[0_24px_64px_rgba(15,23,42,0.08)] before:pointer-events-none before:absolute before:-right-10 before:-top-8 before:h-44 before:w-44 before:rounded-full before:bg-amber-200/25 before:blur-3xl after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-32 after:w-40 after:rounded-full after:bg-sky-200/30 after:blur-3xl md:p-8">
      <div className="relative z-[1]">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700">{kicker}</p>
        <h2 className="mt-2 font-[family-name:var(--font-grand-display)] text-xl font-bold tracking-tight text-slate-900 md:text-2xl md:leading-snug">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("dashboard.title"),
    description: t("dashboard.description"),
  };
}

export default async function SchoolDashboardPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SchoolDashboard");

  let supabase: SupabaseServer;
  try {
    supabase = await createSupabaseServerClient();
  } catch {
    return redirect({ href: "/login", locale });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect({ href: "/login", locale });
  }

  const { data: profile, error: profileError } = await supabase
    .from("school_profiles")
    .select("id, school_name, coordinator_name, coordinator_phone, updated_at")
    .eq("user_id", user.id)
    .maybeSingle();

  let teamRows: TeamRow[] = [];
  if (profile?.id) {
    const { data: team } = await supabase
      .from("team_students")
      .select("slot, full_name")
      .eq("school_profile_id", profile.id)
      .order("slot", { ascending: true });
    teamRows = (team ?? []) as TeamRow[];
  }

  const rosterCount = teamRows.length;
  const initialBySlot: Record<number, string> = {};
  teamRows.forEach((r) => {
    initialBySlot[r.slot] = r.full_name;
  });

  return (
    <DashboardShell>
      <DashboardHero email={user.email ?? null} schoolName={profile?.school_name ?? null} rosterCount={rosterCount} />

      <div className={`${ui.container} py-10 md:py-14`}>
        <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 space-y-10 lg:col-span-8">
            {panelShell({
              kicker: t("cardDecor"),
              title: t("schoolTitle"),
              children: profileError ? (
                <p className="text-sm font-medium text-red-700">{t("loadError")}</p>
              ) : profile ? (
                <SchoolProfileEditor
                  schoolName={profile.school_name}
                  coordinatorName={profile.coordinator_name ?? ""}
                  coordinatorPhone={profile.coordinator_phone ?? ""}
                />
              ) : (
                <div className="rounded-2xl border border-amber-300/60 bg-amber-50 px-5 py-5">
                  <p className="text-sm font-medium leading-relaxed text-amber-950">{t("noSchoolRow")}</p>
                  <p className="mt-3 text-xs font-medium text-amber-800/90">{t("runMigrationsHint")}</p>
                </div>
              ),
            })}

            {profile && !profileError
              ? panelShell({
                  kicker: t("teamTitle"),
                  title: t("rosterStats"),
                  children: (
                    <div className="space-y-6">
                      {rosterCount === 0 ? (
                        <p className="text-sm font-medium text-slate-600">{t("teamEmpty")}</p>
                      ) : null}
                      <TeamRosterEditor initialBySlot={initialBySlot} />
                    </div>
                  ),
                })
              : null}
          </div>

          <div className="flex min-w-0 flex-col gap-10 lg:col-span-4">
            <CoordinatorShareWithTeamPanel />
            <DashboardQuickLinks />

            <DashboardSessionCard email={user.email ?? null} userId={user.id} />
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
