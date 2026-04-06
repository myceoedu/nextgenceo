import { getTranslations, setRequestLocale } from "next-intl/server";
import { AuthPageShell } from "@/components/auth/AuthPageShell";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("forgotPassword.title"),
    description: t("forgotPassword.description"),
  };
}

export default async function ForgotPasswordPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SchoolForgotPassword");
  const tMeta = await getTranslations("Metadata");

  return (
    <AuthPageShell>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#B8860B]">
        {tMeta("siteTitle")}
      </p>
      <h1 className="mt-3 text-balance text-2xl font-black tracking-tight text-[#001F3F] md:text-3xl">
        {t("title")}
      </h1>
      <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-[#001F3F]/72 md:text-[15px]">
        {t("intro")}
      </p>
      <div className="mt-8">
        <ForgotPasswordForm />
      </div>
    </AuthPageShell>
  );
}
