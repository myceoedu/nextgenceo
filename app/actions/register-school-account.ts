"use server";

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
        | "mismatch";
    }
  | { status: "success" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function registerSchoolAccount(
  _prev: RegisterSchoolState,
  formData: FormData,
): Promise<RegisterSchoolState> {
  if (String(formData.get("_hp") ?? "").trim()) {
    return { status: "success" };
  }

  const schoolName = String(formData.get("schoolName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirmPassword") ?? "");

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

  // No persistence yet — connect Supabase / DB here later.
  return { status: "success" };
}
