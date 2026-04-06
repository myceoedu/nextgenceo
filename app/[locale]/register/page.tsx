import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { AuthPageShell } from "@/components/auth/AuthPageShell";
import { RegisterSchoolForm } from "@/components/auth/RegisterSchoolForm";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("register.title"),
    description: t("register.description"),
  };
}

export default async function SchoolRegisterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SchoolRegister");
  const tMeta = await getTranslations("Metadata");
  const tLogin = await getTranslations("SchoolLogin");

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
        <RegisterSchoolForm />
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-slate-100 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="text-sm text-[#001F3F]/65">
          {tLogin("helpBefore")}{" "}
          <Link
            href="/contact"
            className="font-bold text-[#001F3F] underline decoration-[#001F3F]/25 underline-offset-[5px] hover:decoration-[#B8860B]/45"
          >
            {tLogin("helpContact")}
          </Link>
        </p>
        <Link
          href="/"
          className="inline-flex w-fit rounded-full border-2 border-[#001F3F]/18 px-5 py-2.5 text-sm font-bold text-[#001F3F] transition hover:border-[#001F3F]/35 hover:bg-slate-50"
        >
          {tLogin("backHome")}
        </Link>
      </div>
    </AuthPageShell>
  );
}
