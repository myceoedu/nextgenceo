"use client";

import { useTranslations } from "next-intl";
import { GrandPrizeShowcaseCard } from "@/components/competition/GrandPrizeShowcaseCard";
import { GRAND_PRIZE_LABEL } from "@/lib/constants";
import { ViewIn } from "@/components/motion-ui";

/** Home: grand prize spotlight — wide metallic + navy band (matches marketing reference). */
export function HomeGrandPrizeSpotlight() {
  const t = useTranslations("HomeHero");

  return (
    <ViewIn className="relative mx-auto mb-14 w-full px-4 sm:px-6 md:mb-16 lg:mb-20 lg:px-8">
      <GrandPrizeShowcaseCard
        eyebrow={t("prizeEyebrow")}
        amount={<span className="tabular-nums">{GRAND_PRIZE_LABEL}</span>}
        subline={t("prizeSub")}
        benefitCert={t("prizeDetailCerts")}
        benefitPajsk={t("prizeDetailPajsk")}
      />
    </ViewIn>
  );
}
