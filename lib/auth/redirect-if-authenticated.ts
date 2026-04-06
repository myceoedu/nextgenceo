import { redirect } from "@/i18n/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/** Sends school coordinators who already have a session straight to the dashboard. */
export async function redirectIfSchoolAuthenticated(locale: string) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      redirect({ href: "/dashboard", locale });
    }
  } catch {
    /* Missing env: stay on auth page */
  }
}
