import { getTranslations, setRequestLocale } from "next-intl/server";
import { HowToParticipateSection } from "@/components/competition/CompetitionSections";
import { CompetitionPageHero } from "@/components/competition/CompetitionPageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("howTo.title"),
    description: t("howTo.description"),
  };
}

export default async function HowToParticipatePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CompetitionPages");

  return (
    <>
      <CompetitionPageHero
        title={t("howToTitle")}
        subtitle={t("howToSubtitle")}
      />
      <HowToParticipateSection />
    </>
  );
}
