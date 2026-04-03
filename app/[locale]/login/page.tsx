import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("login.title"),
    description: t("login.description"),
  };
}

export default async function SchoolLoginPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("SchoolLogin");
  const tMeta = await getTranslations("Metadata");

  return (
    <div className="bg-[#f6f7fb]">
      <section className="border-b border-slate-200 bg-white px-6 pb-14 pt-28 text-center md:px-10 md:pb-16 md:pt-32">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#B8860B]">
          {tMeta("siteTitle")}
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-[#001F3F] md:text-4xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm font-medium leading-relaxed text-[#001F3F]/70 md:text-base">
          {t("intro")}
        </p>
        <p className="mx-auto mt-8 max-w-md text-sm font-medium text-[#001F3F]/65">
          {t("createAccountPrompt")}{" "}
          <Link
            href="/register"
            className="font-bold text-[#001F3F] underline decoration-[#001F3F]/25 underline-offset-[5px] hover:decoration-[#B8860B]/45"
          >
            {t("createAccountCta")}
          </Link>
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border-2 border-[#001F3F]/20 px-6 py-2.5 text-sm font-bold text-[#001F3F] transition hover:border-[#001F3F]/40 hover:bg-slate-50"
        >
          {t("backHome")}
        </Link>
      </section>
    </div>
  );
}
