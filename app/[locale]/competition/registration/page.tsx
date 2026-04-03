import { getTranslations, setRequestLocale } from "next-intl/server";
import { RegistrationSection } from "@/components/competition/CompetitionSections";

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

  return <RegistrationSection />;
}
