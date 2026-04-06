"use server";

import { routing } from "@/i18n/routing";
import { getSiteOrigin } from "@/lib/site-origin";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type ForgotPasswordState =
  | { status: "idle" }
  | {
      status: "error";
      code: "email" | "emailFormat" | "sendFailed" | "config";
    }
  | { status: "success" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function requestPasswordReset(
  _prev: ForgotPasswordState,
  formData: FormData,
): Promise<ForgotPasswordState> {
  if (String(formData.get("website") ?? "").trim()) {
    return { status: "idle" };
  }

  const email = String(formData.get("email") ?? "").trim();

  if (!email) {
    return { status: "error", code: "email" };
  }
  if (!EMAIL_RE.test(email)) {
    return { status: "error", code: "emailFormat" };
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

  const localeRaw = String(formData.get("locale") ?? "").trim();
  const locale = (routing.locales as readonly string[]).includes(localeRaw)
    ? localeRaw
    : routing.defaultLocale;

  const origin = await getSiteOrigin();
  const nextPath = `/${locale}/login`;
  const redirectTo = `${origin}/api/auth/callback?next=${encodeURIComponent(nextPath)}`;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo,
  });

  if (error) {
    return { status: "error", code: "sendFailed" };
  }

  return { status: "success" };
}
