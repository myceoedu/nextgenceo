import { getTranslations, setRequestLocale } from "next-intl/server";
import { redirect } from "@/i18n/navigation";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import { DashboardQuickLinks } from "@/components/dashboard/DashboardQuickLinks";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { SchoolProfileEditor } from "@/components/dashboard/SchoolProfileEditor";
import { TeamRosterEditor } from "@/components/dashboard/TeamRosterEditor";
import { createSupabaseServerClient } from "@/lib/supabase/server";
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
    <section className="rounded-3xl border border-white/[0.12] bg-[#001F3F]/40 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md md:p-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD700]/85">{kicker}</p>
      <h2 className="mt-2 text-xl font-black tracking-tight text-white md:text-2xl">{title}</h2>
      <div className="mt-6">{children}</div>
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

      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-10 lg:col-span-8">
            {panelShell({
              kicker: t("cardDecor"),
              title: t("schoolTitle"),
              children: profileError ? (
                <p className="text-sm font-medium text-red-300">{t("loadError")}</p>
              ) : profile ? (
                <SchoolProfileEditor
                  schoolName={profile.school_name}
                  coordinatorName={profile.coordinator_name ?? ""}
                  coordinatorPhone={profile.coordinator_phone ?? ""}
                />
              ) : (
                <div className="rounded-2xl border border-amber-400/30 bg-amber-950/25 px-5 py-5">
                  <p className="text-sm font-medium leading-relaxed text-amber-100/95">{t("noSchoolRow")}</p>
                  <p className="mt-3 text-xs font-medium text-amber-200/70">{t("runMigrationsHint")}</p>
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
                        <p className="text-sm font-medium text-slate-400">{t("teamEmpty")}</p>
                      ) : null}
                      <TeamRosterEditor initialBySlot={initialBySlot} />
                    </div>
                  ),
                })
              : null}
          </div>

          <div className="flex flex-col gap-10 lg:col-span-4">
            <DashboardQuickLinks />

            <section className="rounded-3xl border border-white/[0.1] bg-white/[0.04] p-6 backdrop-blur-md md:p-7">
              <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#FFD700]">{t("sessionTitle")}</h2>
              <p className="mt-3 text-sm font-medium text-slate-400">{t("sessionOk")}</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{t("emailLabel")}</dt>
                  <dd className="mt-1 break-all font-mono text-[13px] text-slate-200">{user.email ?? "—"}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{t("userIdLabel")}</dt>
                  <dd className="mt-1 break-all font-mono text-[11px] leading-relaxed text-slate-500">{user.id}</dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
