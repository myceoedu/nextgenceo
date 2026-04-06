"use server";

import { revalidatePath } from "next/cache";
import { routing } from "@/i18n/routing";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type SaveTeamRosterState = { status: "idle" } | { status: "success" } | { status: "error" };

function localeFromForm(formData: FormData) {
  const raw = String(formData.get("locale") ?? "").trim();
  return (routing.locales as readonly string[]).includes(raw)
    ? raw
    : routing.defaultLocale;
}

export async function saveTeamRoster(
  _prev: SaveTeamRosterState,
  formData: FormData,
): Promise<SaveTeamRosterState> {
  const locale = localeFromForm(formData);

  let supabase;
  try {
    supabase = await createSupabaseServerClient();
  } catch {
    return { status: "error" };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { status: "error" };
  }

  const { data: profile } = await supabase
    .from("school_profiles")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile) {
    return { status: "error" };
  }

  const names = [1, 2, 3, 4].map((i) => String(formData.get(`student_${i}`) ?? "").trim());

  const { error: delError } = await supabase
    .from("team_students")
    .delete()
    .eq("school_profile_id", profile.id);

  if (delError) {
    return { status: "error" };
  }

  const rows = names
    .map((full_name, idx) =>
      full_name
        ? { school_profile_id: profile.id, slot: idx + 1, full_name }
        : null,
    )
    .filter((r): r is { school_profile_id: string; slot: number; full_name: string } => r !== null);

  if (rows.length > 0) {
    const { error: insError } = await supabase.from("team_students").insert(rows);
    if (insError) {
      return { status: "error" };
    }
  }

  revalidatePath(`/${locale}/dashboard`, "page");
  return { status: "success" };
}
