import { getTranslations, setRequestLocale } from "next-intl/server";
import { PenilaianSection } from "@/components/competition/CompetitionSections";
import { CompetitionPageHero } from "@/components/competition/CompetitionPageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("judging.title"),
    description: t("judging.description"),
  };
}

export default async function JudgingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CompetitionPages");

  return (
    <>
      <CompetitionPageHero
        title={t("judgingTitle")}
        subtitle={t("judgingSubtitle")}
      />
      <PenilaianSection />
    </>
  );
}
