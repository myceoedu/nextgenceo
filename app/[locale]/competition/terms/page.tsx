import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ManfaatSekolahSection,
  TermaSection,
} from "@/components/competition/CompetitionSections";
import { CompetitionPageHero } from "@/components/competition/CompetitionPageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("terms.title"),
    description: t("terms.description"),
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CompetitionPages");

  return (
    <>
      <CompetitionPageHero
        title={t("termsTitle")}
        subtitle={t("termsSubtitle")}
      />
      <TermaSection />
      <ManfaatSekolahSection />
    </>
  );
}
