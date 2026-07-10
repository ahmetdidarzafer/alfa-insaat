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
      "Alfa Onarım ve İnşaat: İstanbul'da iç mimari, dış cephe tasarımı ve renovasyon. 20 yılı aşkın tecrübeyle konut ve ticari mekânları yeniliyoruz.",
    openGraph: {
      title: "Ana Sayfa | Alfa Onarım ve İnşaat",
      description:
        "İstanbul'da iç mimari, dış cephe tasarımı ve renovasyon. 20 yılı aşkın tecrübeyle konut ve ticari mekânları yeniliyoruz.",
      locale: "tr_TR",
      type: "website",
    },
  };
}

const FEATURES = [
  {
    name: "Profesyonel Ekip",
    description: "Deneyimli ve uzman kadromuzla kaliteli hizmet sunuyoruz.",
  },
  {
    name: "Modern Ekipman",
    description: "En son teknoloji ve ekipmanlarla çalışıyoruz.",
  },
  {
    name: "Kaliteli Malzeme",
    description:
      "Yüksek kaliteli malzemeler kullanarak uzun ömürlü projeler üretiyoruz.",
  },
  {
    name: "Zamanında Teslim",
    description: "Projelerimizi söz verdiğimiz sürede tamamlıyoruz.",
  },
] as const;

const PROJECTS = [
  {
    title: "Villa Renovasyonu",
    description:
      "İstanbul'da 500m² villanın iç mekânlarının ve dış cephesinin kapsamlı yenilenmesi.",
    image: "/images/projects/project-1.jpg",
    alt: "Villa Renovasyonu dış cephe görünümü",
  },
  {
    title: "Ofis Yenileme",
    description:
      "İstanbul'da 2000m² ofis alanının modern çalışma ortamına dönüştürülmesi.",
    image: "/images/projects/project-2.jpg",
    alt: "Ofis Yenileme cephe görünümü",
  },
  {
    title: "Rezidans İç Mimari",
    description:
      "İstanbul'da 5000m² rezidansın iç mimari tasarımı ve uygulaması.",
    image: "/images/projects/project-3.jpg",
    alt: "Rezidans İç Mimari cephe görünümü",
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
              Mekânlarınızı yeniden tasarlıyoruz.
            </h1>
            <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-content-muted">
              İstanbul’da iç mimari, dış cephe tasarımı ve renovasyon. 20 yılı
              aşkın tecrübemizle konut ve ticari mekânları yeniliyoruz.
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

      {/* Projects */}
      <section className="mx-auto mt-28 max-w-7xl px-6 sm:mt-36 lg:px-8">
        <FadeUp>
          <span aria-hidden className="block h-0.5 w-16 bg-primary-light" />
          <h2 className="mt-8 font-display text-3xl font-light text-content">
            Tamamladığımız Bazı Projeler
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-content-muted">
            Modern mimari anlayışımız ve kaliteli işçiliğimizle hayata
            geçirdiğimiz projelerimizden örnekler.
          </p>
        </FadeUp>
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <FadeUp key={project.title} delay={i * 70}>
              <article>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={1200}
                  height={900}
                  className="aspect-[4/3] w-full object-cover"
                />
                <h3 className="mt-6 font-display text-xl font-light text-content">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-content-muted">
                  {project.description}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
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
                Bizimle iletişime geçin, projenizi birlikte değerlendirelim.
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
