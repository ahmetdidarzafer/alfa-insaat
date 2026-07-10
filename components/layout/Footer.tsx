import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-surface-high bg-surface-mid">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-2xl font-light text-content">
              Alfa Onarım ve İnşaat
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-content-muted">
              İstanbul merkezli onarım ve inşaat firması.
            </p>
          </div>

          <nav aria-label="Alt bilgi navigasyonu" className="md:col-span-3">
            <h2 className="text-xs uppercase tracking-widest text-content-muted">
              Sayfalar
            </h2>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-content-muted transition-colors duration-300 ease-out-strong hover:text-content"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="text-xs uppercase tracking-widest text-content-muted">
              Sosyal Medya
            </h2>
            <ul className="mt-5 space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.href}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-content-muted transition-colors duration-300 ease-out-strong hover:text-content"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-16 border-t border-surface-high pt-8 text-sm text-content-muted">
          © {new Date().getFullYear()} Alfa Onarım ve İnşaat. Tüm hakları
          saklıdır.
        </p>
      </div>
    </footer>
  );
}
