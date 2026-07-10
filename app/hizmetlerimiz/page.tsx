import type { Metadata } from "next";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  HomeModernIcon,
  SwatchIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import FadeUp from "@/components/ui/FadeUp";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hizmetlerimiz",
    description:
      "İç mimari tasarım, dış cephe tasarımı, konut ve ticari mekân renovasyonu, mimari restorasyon ve proje yönetimi. Her projeye özel çözümler.",
    openGraph: {
      title: "Hizmetlerimiz | Alfa Onarım ve İnşaat",
      description:
        "İç mimari, dış cephe tasarımı, renovasyon, mimari restorasyon ve proje yönetimi. Her projeye özel çözümler.",
      locale: "tr_TR",
      type: "website",
    },
  };
}

const SERVICES = [
  {
    name: "İç Mimari Tasarım",
    description:
      "Yaşam ve çalışma alanlarınızı modern ve fonksiyonel tasarımlarla yeniden yapılandırıyoruz.",
    icon: SwatchIcon,
  },
  {
    name: "Dış Cephe Tasarımı",
    description:
      "Binanızın cephesini estetik ve dayanıklı malzemelerle yeniden tasarlıyor, yapıya değer katıyoruz.",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Konut Renovasyonu",
    description:
      "Villa, apartman ve dairelerde iç ve dış mekânların kapsamlı yenilenmesinde uzmanız.",
    icon: HomeModernIcon,
  },
  {
    name: "Ticari Mekân Renovasyonu",
    description:
      "Ofis, mağaza ve diğer ticari mekânları markanıza uygun, işlevsel alanlara dönüştürüyoruz.",
    icon: BuildingStorefrontIcon,
  },
  {
    name: "Mimari Restorasyon",
    description:
      "Mevcut yapıların onarımı ve mimari restorasyonu için kapsamlı çözümler sunuyoruz.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Proje Yönetimi",
    description:
      "Projelerinizin tüm aşamalarında profesyonel yönetim ve danışmanlık hizmeti veriyoruz.",
    icon: ClipboardDocumentCheckIcon,
  },
] as const;

const PROCESS_STEPS = [
  {
    number: "01",
    name: "İlk Görüşme",
    description:
      "Projenizin ihtiyaçlarını ve beklentilerinizi detaylı olarak dinliyoruz.",
  },
  {
    number: "02",
    name: "Planlama",
    description:
      "Projeniz için en uygun çözümü ve zaman planını oluşturuyoruz.",
  },
  {
    number: "03",
    name: "Uygulama",
    description:
      "Uzman ekibimizle projenizi en yüksek kalitede hayata geçiriyoruz.",
  },
  {
    number: "04",
    name: "Teslim",
    description: "Projenizi zamanında ve eksiksiz olarak teslim ediyoruz.",
  },
] as const;

export default function Hizmetlerimiz() {
  return (
    <>
      {/* Hero — sayfa adı overline, manifesto cümle display başlık */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-32 sm:pt-32 lg:px-8">
        <FadeUp className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary-light">
            Hizmetlerimiz
          </p>
          <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-content">
            Her projenin kendine özgü ihtiyaçları vardır.
          </h1>
          <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-content-muted">
            Size en uygun çözümü sunmak için buradayız.
          </p>
        </FadeUp>
      </section>

      {/* Services — hizmet indeksi: display isim | açıklama satırları */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <h2 className="font-display text-3xl font-light text-content">
            Sunduğumuz Hizmetler
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-content-muted">
            Sunduğumuz kapsamlı hizmetler ve uzmanlık alanlarımız.
          </p>
        </FadeUp>
        <dl className="mt-16 border-t border-surface-high">
          {SERVICES.map((service, i) => (
            <FadeUp key={service.name} delay={i * 70}>
              <div className="grid gap-4 border-b border-surface-high py-10 md:grid-cols-12 md:items-center md:gap-8">
                <dt className="flex items-center gap-5 md:col-span-5">
                  <service.icon
                    className="h-6 w-6 shrink-0 text-content-muted"
                    aria-hidden="true"
                  />
                  <span className="font-display text-2xl font-light text-content">
                    {service.name}
                  </span>
                </dt>
                <dd className="max-w-3xl text-base font-normal leading-relaxed text-content-muted md:col-span-7">
                  {service.description}
                </dd>
              </div>
            </FadeUp>
          ))}
        </dl>
      </section>

      {/* Process — kronolojik süreç, sıralama bilgisi taşıyan numaralar */}
      <section className="mx-auto mt-28 max-w-7xl px-6 sm:mt-36 lg:px-8">
        <FadeUp>
          <span aria-hidden className="block h-0.5 w-16 bg-primary-light" />
          <h2 className="mt-8 font-display text-3xl font-light text-content">
            Çalışma Sürecimiz
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-content-muted">
            Her projemizde izlediğimiz profesyonel süreç.
          </p>
        </FadeUp>
        <ol className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.name}>
              <FadeUp delay={i * 70}>
                <span
                  aria-hidden
                  className="font-display text-4xl font-light text-content-muted"
                >
                  {step.number}
                </span>
                <h3 className="mt-4 text-base font-medium text-content">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-content-muted">
                  {step.description}
                </p>
              </FadeUp>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA band */}
      <section className="mt-28 border-y border-surface-high bg-surface-mid sm:mt-36">
        <FadeUp>
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:py-24 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-light text-content">
                Projeniz İçin Bizimle İletişime Geçin
              </h2>
              <p className="mt-5 text-base font-normal leading-relaxed text-content-muted">
                Size en uygun çözümü sunmak için hazırız.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/iletisim"
                className="inline-flex items-center bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-[background-color,transform] duration-300 ease-out-strong hover:bg-primary-dark active:scale-[0.98] active:duration-150"
              >
                İletişime Geçin
              </Link>
              <Link
                href="/hakkimizda"
                className="text-sm font-medium text-content transition-colors duration-300 ease-out-strong hover:text-primary-light"
              >
                Hakkımızda <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
