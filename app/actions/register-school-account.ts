"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export type RegisterSchoolState =
  | { status: "idle" }
  | {
      status: "error";
      code:
        | "schoolName"
        | "email"
        | "emailFormat"
        | "password"
        | "passwordShort"
        | "confirm"
        | "mismatch"
        | "terms"
        | "emailTaken"
        | "signupFailed"
        | "weakPassword"
        | "config";
    }
  | { status: "success" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function registerSchoolAccount(
  _prev: RegisterSchoolState,
  formData: FormData,
): Promise<RegisterSchoolState> {
  if (String(formData.get("website") ?? "").trim()) {
    return { status: "idle" };
  }

  const schoolName = String(formData.get("schoolName") ?? "").trim();
  const coordinator = String(formData.get("coordinator") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirmPassword") ?? "");
  const terms = String(formData.get("termsAccepted") ?? "");

  if (terms !== "on") {
    return { status: "error", code: "terms" };
  }

  if (!schoolName) {
    return { status: "error", code: "schoolName" };
  }
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
  if (!confirm) {
    return { status: "error", code: "confirm" };
  }
  if (password !== confirm) {
    return { status: "error", code: "mismatch" };
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

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        school_name: schoolName,
        ...(coordinator ? { coordinator_name: coordinator } : {}),
        ...(phone ? { coordinator_phone: phone } : {}),
      },
    },
  });

  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes("already registered") || msg.includes("already been registered")) {
      return { status: "error", code: "emailTaken" };
    }
    if (msg.includes("password") && (msg.includes("weak") || msg.includes("strength"))) {
      return { status: "error", code: "weakPassword" };
    }
    return { status: "error", code: "signupFailed" };
  }

  return { status: "success" };
}
