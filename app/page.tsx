import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    // Not: root layout'un title.template'i kök segmentin kendi page.tsx'ine
    // uygulanmıyor (Next.js App Router davranışı) — bu yüzden tam başlık
    // burada elle yazılıyor, diğer tüm sayfalarda template otomatik ekliyor.
    title: "Ana Sayfa | Alfa Onarım ve İnşaat",
    description:
      "Alfa Onarım ve İnşaat: İstanbul merkezli onarım ve inşaat firması. 2015'ten bu yana kamu ve özel sektörde renovasyon, tadilat ve dekorasyon projeleri.",
    openGraph: {
      title: "Ana Sayfa | Alfa Onarım ve İnşaat",
      description:
        "İstanbul merkezli onarım ve inşaat firması. 2015'ten bu yana kamu ve özel sektörde renovasyon, tadilat ve dekorasyon projeleri.",
      locale: "tr_TR",
      type: "website",
    },
  };
}

// Hakkımızda sayfasındaki "Neden Biz?" değerleriyle tutarlı (kısaltılmış özet)
const FEATURES = [
  {
    name: "Tecrübe",
    description:
      "2015'ten bu yana binlerce metrekarelik uygulama tecrübesi.",
  },
  {
    name: "Geniş Hizmet Yelpazesi",
    description: "Altyapıdan dekorasyona, anahtar teslim çözüm ortağınız.",
  },
  {
    name: "Müşteri Odaklılık",
    description:
      "İhtiyaçlarınıza göre şekillenen esnek ve sonuç odaklı yaklaşım.",
  },
  {
    name: "Güvenilirlik",
    description:
      "Verdiğimiz sözü zamanında ve eksiksiz yerine getirme prensibi.",
  },
] as const;

export default function Home() {
  return (
    <>
      {/* Hero — asimetrik bölünme: değer önerisi + mimari fotoğraf */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <FadeUp className="lg:col-span-6">
            <span aria-hidden className="block h-0.5 w-16 bg-primary-light" />
            <h1 className="mt-8 font-display text-5xl font-light tracking-tight text-content lg:text-6xl">
              Mekânlarınıza değer katıyoruz.
            </h1>
            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-content-muted">
              İstanbul merkezli onarım ve inşaat firması. 2015’ten bu yana kamu
              ve özel sektörde, yaşam ve çalışma alanlarını kaliteli işçilik ve
              şeffaf bir anlayışla yeniliyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-[background-color,transform] duration-300 ease-out-strong hover:bg-primary-dark active:scale-[0.98] active:duration-150"
              >
                İletişime Geçin
              </Link>
              <Link
                href="/hizmetlerimiz"
                className="text-sm font-medium text-content transition-colors duration-300 ease-out-strong hover:text-primary-light"
              >
                Hizmetlerimiz <span aria-hidden>→</span>
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={70} className="lg:col-span-6">
            <Image
              src="/images/hero.jpg"
              alt="Modern bakır kaplama bina cephesi"
              width={1200}
              height={1500}
              priority
              className="aspect-[4/5] w-full object-cover lg:aspect-[3/4]"
            />
          </FadeUp>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <p className="text-xs uppercase tracking-widest text-primary-light">
            Neden Biz?
          </p>
          <h2 className="mt-4 font-display text-3xl font-light text-content">
            Kalite ve Güvenin Adresi
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-content-muted">
            Müşteri memnuniyetini ön planda tutarak, her projemizde en yüksek
            kalite standartlarını hedefliyoruz.
          </p>
        </FadeUp>
        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <FadeUp key={feature.name} delay={i * 70}>
              <div className="border-t border-surface-high pt-6">
                <dt className="text-base font-medium text-content">
                  {feature.name}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-content-muted">
                  {feature.description}
                </dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </section>

      {/* CTA band */}
      <section className="mt-28 border-y border-surface-high bg-surface-mid sm:mt-36">
        <FadeUp>
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:py-24 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-light text-content">
                Projenizi Hayata Geçirmeye Hazır mısınız?
              </h2>
              <p className="mt-5 text-base font-normal leading-relaxed text-content-muted">
                Ücretsiz keşif ve şeffaf fiyatlandırmayla projenizi birlikte
                değerlendirelim.
              </p>
            </div>
            <Link
              href="/iletisim"
              className="inline-flex shrink-0 items-center self-start bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-[background-color,transform] duration-300 ease-out-strong hover:bg-primary-dark active:scale-[0.98] active:duration-150 md:self-auto"
            >
              İletişime Geçin
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
