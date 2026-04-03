import { getTranslations, setRequestLocale } from "next-intl/server";
import { CompetitionHubDeck } from "@/components/competition/CompetitionHubDeck";
import {
  HomeFinalCta,
  HomeHeroBlock,
  HomeOutcomesSection,
  HomeTrustStrip,
  HomeVideoTeaser,
  ImportantDatesSectionWithVisual,
} from "@/components/competition/CompetitionSections";
import { HomeGalleryStrip } from "@/components/home/HomeGalleryStrip";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("home.title"),
    description: t("home.description"),
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="overflow-x-clip bg-gradient-to-b from-[#e4e9f2] via-[#f0f3fa] to-[#e8ecf4]">
      <HomeHeroBlock />
      <HomeTrustStrip />
      <HomeVideoTeaser />
      <HomeGalleryStrip />
      <HomeOutcomesSection />
      <CompetitionHubDeck variant="full" homeHeadlines sectionId="competition-hub" />
      <ImportantDatesSectionWithVisual />
      <HomeFinalCta />
    </div>
  );
}
