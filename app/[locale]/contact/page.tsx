import { getTranslations, setRequestLocale } from "next-intl/server";
import { ViewIn } from "@/components/motion-ui";
import { DRIVE_CHALLENGE_URL } from "@/lib/constants";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <div className="bg-[#f6f7fb]">
      <section className="border-b border-slate-200 bg-white px-6 pb-16 pt-28 text-center md:px-10 md:pb-20 md:pt-32">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#B8860B]">
          {t("eyebrow")}
        </p>
        <h1 className="mt-4 text-4xl font-black text-[#001F3F] md:text-5xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm font-medium text-[#001F3F]/65 md:text-base">
          {t("intro")}
        </p>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-24">
        <ViewIn className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-[#001F3F]/10 bg-white p-8 shadow-[0_24px_60px_rgba(0,31,63,0.08)]">
            <h2 className="text-lg font-black text-[#001F3F]">{t("igTitle")}</h2>
            <p className="mt-2 text-sm font-medium text-[#001F3F]/65">
              {t("igDesc")}
            </p>
            <a
              href="https://www.instagram.com/myceo_"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-gradient-to-br from-[#E4405F] to-pink-500 px-6 py-3 text-sm font-black text-white"
            >
              @myceo_
            </a>
          </div>

          <div className="rounded-3xl border border-[#001F3F]/10 bg-white p-8 shadow-[0_24px_60px_rgba(0,31,63,0.08)]">
            <h2 className="text-lg font-black text-[#001F3F]">
              {t("challengeTitle")}
            </h2>
            <p className="mt-2 text-sm font-medium text-[#001F3F]/65">
              {t("challengeDesc")}
            </p>
            <a
              href={DRIVE_CHALLENGE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-[#001F3F] px-6 py-3 text-sm font-black text-[#FFD700]"
            >
              {t("challengeCta")}
            </a>
          </div>

          <div className="rounded-3xl border border-[#001F3F]/10 bg-white p-8 shadow-[0_24px_60px_rgba(0,31,63,0.08)] md:col-span-2">
            <h2 className="text-lg font-black text-[#001F3F]">{t("regTitle")}</h2>
            <p className="mt-2 text-sm font-medium text-[#001F3F]/65">
              {t("regDesc")}
            </p>
            <Link
              href="/competition/registration"
              className="mt-6 inline-flex rounded-xl border-2 border-[#001F3F] px-6 py-3 text-sm font-black text-[#001F3F] transition hover:bg-[#001F3F] hover:text-white"
            >
              {t("regCta")}
            </Link>
          </div>
        </ViewIn>
      </section>
    </div>
  );
}
