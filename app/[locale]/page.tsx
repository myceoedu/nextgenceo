import { getTranslations, setRequestLocale } from "next-intl/server";
import { ViewIn } from "@/components/motion-ui";
import {
  HomeApaItuTeaser,
  HomeCompetitionPreview,
  HomeHeroBlock,
  HomeTrustStrip,
  HomeVideoTeaser,
  ImportantDatesCard,
  SponsorStrip,
} from "@/components/competition/CompetitionSections";

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
    <div className="overflow-x-hidden bg-white">
      <HomeHeroBlock />
      <HomeVideoTeaser />
      <HomeTrustStrip />
      <section className="bg-[#f6f7fb] px-6 py-10 md:py-14">
        <ViewIn>
          <ImportantDatesCard />
        </ViewIn>
      </section>
      <HomeCompetitionPreview />
      <HomeApaItuTeaser />
      <SponsorStrip />
    </div>
  );
}
