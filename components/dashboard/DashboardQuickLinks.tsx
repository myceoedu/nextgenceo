import { getTranslations } from "next-intl/server";
import { ArrowUpRight, BookOpen, ClipboardList, Mail, ScrollText } from "lucide-react";
import { Link } from "@/i18n/navigation";

const card =
  "group flex items-center gap-4 rounded-2xl border border-white/[0.1] bg-[#001F3F]/55 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:border-[#FFD700]/35 hover:bg-[#001F3F]/75 md:px-5 md:py-5";

export async function DashboardQuickLinks() {
  const t = await getTranslations("SchoolDashboard");

  const links = [
    { href: "/competition" as const, label: t("linkCompetition"), Icon: BookOpen },
    { href: "/competition/registration" as const, label: t("linkRegistration"), Icon: ClipboardList },
    { href: "/competition/terms" as const, label: t("linkTerms"), Icon: ScrollText },
    { href: "/contact" as const, label: t("linkContact"), Icon: Mail },
  ];

  return (
    <aside className="space-y-5 lg:col-span-4">
      <div>
        <h2 className="text-sm font-black uppercase tracking-[0.16em] text-[#FFD700]">{t("quickLinks")}</h2>
        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-400">{t("quickLinksIntro")}</p>
      </div>
      <nav className="flex flex-col gap-3" aria-label={t("quickLinks")}>
        {links.map(({ href, label, Icon }) => (
          <Link key={href} href={href} className={card}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFD700]/12 text-[#FFD700] ring-1 ring-[#FFD700]/20 transition group-hover:bg-[#FFD700]/20">
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-white">{label}</span>
            </span>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-[#FFD700]"
              aria-hidden
            />
          </Link>
        ))}
      </nav>
    </aside>
  );
}
