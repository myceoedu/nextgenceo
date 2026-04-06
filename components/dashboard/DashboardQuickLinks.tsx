import { getTranslations } from "next-intl/server";
import { ArrowUpRight, BookOpen, ClipboardList, Compass, Mail, ScrollText } from "lucide-react";
import { Link } from "@/i18n/navigation";

const card =
  "group relative flex min-h-[4.5rem] items-center gap-4 overflow-hidden rounded-2xl border border-slate-200/90 bg-white px-4 py-4 shadow-[0_12px_36px_rgba(15,23,42,0.06)] transition duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-amber-100/40 before:via-transparent before:to-sky-50/50 before:opacity-0 before:transition-opacity hover:border-amber-400/45 hover:shadow-[0_16px_44px_rgba(15,23,42,0.1)] hover:before:opacity-100 md:min-h-[4.75rem] md:px-5 md:py-4";

export async function DashboardQuickLinks() {
  const t = await getTranslations("SchoolDashboard");

  const links = [
    { href: "/competition" as const, label: t("linkCompetition"), Icon: BookOpen },
    { href: "/competition/how-to-participate" as const, label: t("linkHowTo"), Icon: Compass },
    { href: "/competition/registration" as const, label: t("linkRegistration"), Icon: ClipboardList },
    { href: "/competition/terms" as const, label: t("linkTerms"), Icon: ScrollText },
    { href: "/contact" as const, label: t("linkContact"), Icon: Mail },
  ];

  return (
    <aside className="space-y-5 lg:col-span-4">
      <div>
        <h2 className="text-sm font-black uppercase tracking-[0.16em] text-amber-700">{t("quickLinks")}</h2>
        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600">{t("quickLinksIntro")}</p>
      </div>
      <nav className="flex flex-col gap-3" aria-label={t("quickLinks")}>
        {links.map(({ href, label, Icon }) => (
          <Link key={href} href={href} className={card}>
            <span className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-amber-300 to-amber-500 text-white shadow-md ring-2 ring-amber-200/80 transition group-hover:brightness-105">
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </span>
            <span className="relative z-[1] flex min-h-[2.75rem] min-w-0 flex-1 items-center py-0.5">
              <span className="block text-[15px] font-bold leading-snug tracking-tight text-slate-800">{label}</span>
            </span>
            <span className="relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition group-hover:border-amber-300 group-hover:bg-amber-50 group-hover:text-amber-700">
              <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
