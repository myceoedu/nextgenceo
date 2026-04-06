"use server";

import { revalidatePath } from "next/cache";
import { routing } from "@/i18n/routing";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type UpdateSchoolProfileState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; code: "schoolName" | "saveFailed" | "noProfile" };

function localeFromForm(formData: FormData) {
  const raw = String(formData.get("locale") ?? "").trim();
  return (routing.locales as readonly string[]).includes(raw)
    ? raw
    : routing.defaultLocale;
}

export async function updateSchoolProfile(
  _prev: UpdateSchoolProfileState,
  formData: FormData,
): Promise<UpdateSchoolProfileState> {
  const locale = localeFromForm(formData);

  let supabase;
  try {
    supabase = await createSupabaseServerClient();
  } catch {
    return { status: "error", code: "saveFailed" };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { status: "error", code: "noProfile" };
  }

  const schoolName = String(formData.get("schoolName") ?? "").trim();
  if (!schoolName) {
    return { status: "error", code: "schoolName" };
  }
  const coordinatorName = String(formData.get("coordinatorName") ?? "").trim();
  const coordinatorPhone = String(formData.get("coordinatorPhone") ?? "").trim();

  const { data: existing } = await supabase
    .from("school_profiles")
    .select("id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!existing) {
    return { status: "error", code: "noProfile" };
  }

  const { error } = await supabase
    .from("school_profiles")
    .update({
      school_name: schoolName,
      coordinator_name: coordinatorName.length ? coordinatorName : null,
      coordinator_phone: coordinatorPhone.length ? coordinatorPhone : null,
    })
    .eq("user_id", user.id);

  if (error) {
    return { status: "error", code: "saveFailed" };
  }

  revalidatePath(`/${locale}/dashboard`, "page");
  return { status: "success" };
}
