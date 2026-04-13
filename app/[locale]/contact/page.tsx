import { getTranslations, setRequestLocale } from "next-intl/server";
import { ViewIn } from "@/components/motion-ui";
import { DRIVE_CHALLENGE_URL } from "@/lib/constants";
import { ui } from "@/lib/ui";
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
    <div className="min-w-0 overflow-x-clip bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div
          className={`${ui.container} max-w-4xl pb-12 pt-[calc(var(--ngc-header-h)+1.75rem)] text-center md:pb-16 md:pt-[calc(var(--ngc-header-h)+2.5rem)]`}
        >
          <p className={ui.eyebrow}>{t("eyebrow")}</p>
          <h1 className={`mt-3 ${ui.pageTitle}`}>{t("title")}</h1>
          <span className={`mx-auto mt-5 ${ui.divider}`} aria-hidden />
          <p className={`mx-auto mt-5 max-w-2xl text-pretty ${ui.lead}`}>{t("intro")}</p>
        </div>
      </header>

      <section className={`${ui.section} border-t border-slate-200/80`} aria-labelledby="contact-channels-heading">
        <div className={ui.container}>
          <ViewIn className="mx-auto max-w-5xl">
            <h2 id="contact-channels-heading" className="sr-only">
              {t("title")}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <article className={`${ui.card} flex min-w-0 flex-col`}>
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#001F3F]">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className={ui.sectionTitle}>{t("igTitle")}</h3>
                    <p className={`mt-2 ${ui.body}`}>{t("igDesc")}</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/myceo_"
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 ${ui.btnSecondary} gap-2`}
                >
                  <span className="truncate">@myceo_</span>
                </a>
              </article>

              <article className={`${ui.card} flex min-w-0 flex-col`}>
                <h3 className={ui.sectionTitle}>{t("challengeTitle")}</h3>
                <p className={`mt-2 flex-1 ${ui.body}`}>{t("challengeDesc")}</p>
                <a
                  href={DRIVE_CHALLENGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-auto pt-6 ${ui.btnPrimary} w-full sm:w-auto sm:self-start`}
                >
                  {t("challengeCta")}
                </a>
              </article>
            </div>

            <article className="mt-8 flex min-w-0 flex-col gap-4 rounded-xl border border-dashed border-slate-300/80 bg-slate-50/80 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-7">
              <div className="min-w-0 flex-1">
                <h3 className={ui.sectionTitle}>{t("regTitle")}</h3>
                <p className={`mt-2 ${ui.body}`}>{t("regDesc")}</p>
              </div>
              <Link href="/competition/registration" className={`shrink-0 ${ui.btnOutlineNavy}`}>
                {t("regCta")}
              </Link>
            </article>
          </ViewIn>
        </div>
      </section>
    </div>
  );
}
