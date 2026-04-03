import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { DRIVE_CHALLENGE_URL } from "@/lib/constants";

export async function SiteFooter() {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-[#001F3F] px-6 py-16 text-center text-[#FFD700] md:px-10">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-[22px] font-bold tracking-wide md:text-[28px]">
          {t("ctaLine1")}{" "}
          <span className="font-black">{t("ctaLine2")}</span>
          {t("ctaQ")}
        </h2>

        <a
          href={DRIVE_CHALLENGE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 font-black text-[#001F3F] shadow-[0_10px_26px_rgba(0,0,0,0.28)] transition hover:scale-105 hover:bg-[#f0f0f0] hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
        >
          {t("joinCta")}
        </a>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="https://www.facebook.com/myceo2015/?locale=ms_MY"
            target="_blank"
            rel="noreferrer"
            className="opacity-90 transition hover:opacity-100"
            aria-label="Facebook"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              width={28}
              height={28}
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/myceo_"
            target="_blank"
            rel="noreferrer"
            className="opacity-90 transition hover:opacity-100"
            aria-label="Instagram"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              width={28}
              height={28}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.tiktok.com/@myceoeducation?lang=en"
            target="_blank"
            rel="noreferrer"
            className="opacity-90 transition hover:opacity-100"
            aria-label="TikTok"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
              width={28}
              height={28}
              alt="TikTok"
            />
          </a>
        </div>

        <div className="mt-8 text-sm font-semibold">{t("company")}</div>

        <div className="mx-auto mt-8 h-[3px] w-20 rounded bg-[#FFD700]" />
        <p className="mt-4 text-[14px] italic md:text-[16px]">
          &ldquo;{t("quote")}&rdquo;
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-2 text-xs font-semibold text-[#FFD700]/70">
          <Link href="/" className="hover:text-[#FFD700]">
            {t("linkHome")}
          </Link>
          <span aria-hidden>·</span>
          <Link href="/#competition-hub" className="hover:text-[#FFD700]">
            {t("linkCompetition")}
          </Link>
          <span aria-hidden>·</span>
          <Link href="/contact" className="hover:text-[#FFD700]">
            {t("linkContact")}
          </Link>
          <span aria-hidden>·</span>
          <Link href="/login" className="hover:text-[#FFD700]">
            {t("linkSchoolLogin")}
          </Link>
          <span aria-hidden>·</span>
          <Link href="/register" className="hover:text-[#FFD700]">
            {t("linkSchoolRegister")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
