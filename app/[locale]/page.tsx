import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  HomeFinalCta,
  HomeHeroBlock,
  HomeOutcomesSection,
  HomeTrustStrip,
  HomeVideoTeaser,
  ImportantDatesSectionWithVisual,
} from "@/components/competition/CompetitionSections";
import { HomeFlipbookBrochure } from "@/components/home/HomeFlipbookBrochure";
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
    <div className="overflow-x-clip overflow-y-visible bg-gradient-to-b from-[#e4e9f2] via-[#f0f3fa] to-[#e8ecf4]">
      <HomeHeroBlock />
      <HomeTrustStrip />
      <HomeVideoTeaser />
      <HomeGalleryStrip />
      <HomeOutcomesSection />
      <HomeFlipbookBrochure sectionId="competition-hub" />
      <ImportantDatesSectionWithVisual />
      <HomeFinalCta />
    </div>
  );
}
