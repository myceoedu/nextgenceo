import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  GrandPrizeSection,
  ManfaatPelajarSection,
} from "@/components/competition/CompetitionSections";
import { CompetitionPageHero } from "@/components/competition/CompetitionPageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("awards.title"),
    description: t("awards.description"),
  };
}

export default async function AwardsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CompetitionPages");

  return (
    <>
      <CompetitionPageHero
        title={t("awardsTitle")}
        subtitle={t("awardsSubtitle")}
      />
      <GrandPrizeSection />
      <ManfaatPelajarSection />
    </>
  );
}
