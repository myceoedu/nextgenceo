import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ApaItuSection,
  CompetitionQuickLinks,
  EducatorSection,
  SectionDivider,
} from "@/components/competition/CompetitionSections";
import { CompetitionPageHero } from "@/components/competition/CompetitionPageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("competition.title"),
    description: t("competition.description"),
  };
}

export default async function CompetitionOverviewPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CompetitionPages");

  return (
    <>
      <CompetitionPageHero
        title={t("overviewTitle")}
        subtitle={t("overviewSubtitle")}
      />
      <CompetitionQuickLinks />
      <EducatorSection />
      <SectionDivider invert />
      <ApaItuSection />
    </>
  );
}
