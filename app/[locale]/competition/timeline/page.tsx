import { getTranslations, setRequestLocale } from "next-intl/server";
import { ViewIn } from "@/components/motion-ui";
import {
  ImportantDatesCard,
  TimelineSection,
} from "@/components/competition/CompetitionSections";
import { CompetitionPageHero } from "@/components/competition/CompetitionPageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("timeline.title"),
    description: t("timeline.description"),
  };
}

export default async function TimelinePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CompetitionPages");

  return (
    <>
      <CompetitionPageHero
        title={t("timelineTitle")}
        subtitle={t("timelineSubtitle")}
      />
      <section className="bg-[#f6f7fb] px-6 py-12 md:px-10 md:py-16">
        <ViewIn>
          <ImportantDatesCard />
        </ViewIn>
      </section>
      <TimelineSection />
    </>
  );
}
