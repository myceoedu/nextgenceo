import { getTranslations, setRequestLocale } from "next-intl/server";
import { RegistrationSection } from "@/components/competition/CompetitionSections";
import { CompetitionPageHero } from "@/components/competition/CompetitionPageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("registration.title"),
    description: t("registration.description"),
  };
}

export default async function RegistrationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("CompetitionPages");

  return (
    <>
      <CompetitionPageHero
        title={t("registrationTitle")}
        subtitle={t("registrationSubtitle")}
      />
      <RegistrationSection />
    </>
  );
}
