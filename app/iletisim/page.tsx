import type { Metadata } from "next";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "@/components/ui/ContactForm";
import FadeUp from "@/components/ui/FadeUp";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  GOOGLE_MAPS_EMBED_URL,
} from "@/lib/constants";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "İletişim",
    description:
      "Alfa Onarım ve İnşaat iletişim: Zeytinburnu İstanbul ofisimiz, telefon ve e-posta bilgilerimiz. Projeniz için bizimle iletişime geçin.",
    openGraph: {
      title: "İletişim | Alfa Onarım ve İnşaat",
      description:
        "Zeytinburnu İstanbul ofisimiz, telefon ve e-posta bilgilerimiz. Projeniz için bizimle iletişime geçin.",
      locale: "tr_TR",
      type: "website",
    },
  };
}

const CONTACT_INFO = [
  {
    name: "Adres",
    icon: MapPinIcon,
    value: CONTACT_ADDRESS,
    href: null,
  },
  {
    name: "Telefon",
    icon: PhoneIcon,
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
  },
  {
    name: "E-posta",
    icon: EnvelopeIcon,
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
] as const;

export default function Iletisim() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:px-8">
        <FadeUp className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary-light">
            İletişim
          </p>
          <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-content">
            Sorularınız veya projeleriniz için bizimle iletişime geçin.
          </h1>
        </FadeUp>
      </section>

      {/* Form + iletişim bilgileri — asimetrik bölünme */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          <FadeUp className="lg:col-span-7">
            <h2 className="font-display text-3xl font-light text-content">
              Projenizi Anlatın
            </h2>
            <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-content-muted">
              Formu doldurun, en kısa sürede size dönüş yapalım.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </FadeUp>

          <FadeUp delay={70} className="lg:col-span-5">
            <h2 className="font-display text-3xl font-light text-content">
              İletişim Bilgileri
            </h2>
            <dl className="mt-10 border-t border-surface-high">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-5 border-b border-surface-high py-8"
                >
                  <item.icon
                    className="h-6 w-6 shrink-0 text-content-muted"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-content-muted">
                      {item.name}
                    </dt>
                    <dd className="mt-2 text-base leading-relaxed text-content">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="transition-colors duration-300 ease-out-strong hover:text-primary-light"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </section>

      {/* Harita — tam genişlik bant */}
      <section className="mt-24 border-y border-surface-high sm:mt-32">
        <FadeUp>
          {GOOGLE_MAPS_EMBED_URL ? (
            <iframe
              title="Alfa Onarım ve İnşaat ofis konumu"
              src={GOOGLE_MAPS_EMBED_URL}
              className="block h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex h-[400px] w-full items-center justify-center bg-surface-mid">
              <p className="text-sm text-content-muted">Harita eklenecek</p>
            </div>
          )}
        </FadeUp>
      </section>
    </>
  );
}
