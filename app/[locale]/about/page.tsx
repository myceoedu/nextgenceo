import { getTranslations, setRequestLocale } from "next-intl/server";
import { AboutGallerySection } from "@/components/about/AboutGallerySection";
import { AboutIntroSection } from "@/components/about/AboutIntroSection";
import { AboutProgramsSection } from "@/components/about/AboutProgramsSection";
import { AboutHistorySection } from "@/components/about/AboutHistorySection";
import { AboutPartnersSection } from "@/components/about/AboutPartnersSection";
import { CompetitionPageHero } from "@/components/competition/CompetitionPageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("about.title"),
    description: t("about.description"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutPage");

  return (
    <>
      <CompetitionPageHero title={t("title")} subtitle={t("subtitle")} />
      <AboutIntroSection />
      <AboutHistorySection />
      <AboutProgramsSection />
      <AboutGallerySection />
      <AboutPartnersSection />
    </>
  );
}
