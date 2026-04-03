import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
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
    <div className="bg-[#f6f7fb]">
      <section className="border-b border-slate-200 bg-white px-6 pb-12 pt-28 md:px-10 md:pb-16 md:pt-32">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#B8860B]">
            {tMeta("siteTitle")}
          </p>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-[#001F3F] md:text-4xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm font-medium leading-relaxed text-[#001F3F]/70 md:text-base">
            {t("intro")}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl px-1">
          <RegisterSchoolForm />
        </div>

        <div className="mx-auto mt-10 max-w-xl text-center">
          <Link
            href="/"
            className="inline-flex rounded-full border-2 border-[#001F3F]/20 px-6 py-2.5 text-sm font-bold text-[#001F3F] transition hover:border-[#001F3F]/40 hover:bg-slate-50"
          >
            {tLogin("backHome")}
          </Link>
        </div>
      </section>
    </div>
  );
}
