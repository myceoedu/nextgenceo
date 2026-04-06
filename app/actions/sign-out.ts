"use server";

import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function signOutAction(formData: FormData) {
  const localeRaw = String(formData.get("locale") ?? "").trim();
  const locale = (routing.locales as readonly string[]).includes(localeRaw)
    ? (localeRaw as (typeof routing.locales)[number])
    : routing.defaultLocale;

  try {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  } catch {
    /* still send user to login */
  }

  redirect({ href: "/login", locale });
}
