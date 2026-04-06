"use server";

import { redirect } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type LoginSchoolState =
  | { status: "idle" }
  | {
      status: "error";
      code:
        | "email"
        | "emailFormat"
        | "password"
        | "passwordShort"
        | "invalidCredentials"
        | "emailNotConfirmed"
        | "config";
    }
  | { status: "success" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function resolveLocale(formData: FormData) {
  const localeRaw = String(formData.get("locale") ?? "").trim();
  return (routing.locales as readonly string[]).includes(localeRaw)
    ? (localeRaw as (typeof routing.locales)[number])
    : routing.defaultLocale;
}

export async function loginSchoolAccount(
  _prev: LoginSchoolState,
  formData: FormData,
): Promise<LoginSchoolState> {
  if (String(formData.get("_hp") ?? "").trim()) {
    return { status: "success" };
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email) {
    return { status: "error", code: "email" };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", code: "emailFormat" };
  }
  if (!password) {
    return { status: "error", code: "password" };
  }
  if (password.length < 8) {
    return { status: "error", code: "passwordShort" };
  }

  let supabase;
  try {
    supabase = await createSupabaseServerClient();
  } catch (e) {
    if (e instanceof Error && e.message === "MISSING_SUPABASE_ENV") {
      return { status: "error", code: "config" };
    }
    throw e;
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes("email not confirmed")) {
      return { status: "error", code: "emailNotConfirmed" };
    }
    return { status: "error", code: "invalidCredentials" };
  }

  const locale = resolveLocale(formData);
  redirect({ href: "/dashboard", locale });
  return { status: "success" };
}
