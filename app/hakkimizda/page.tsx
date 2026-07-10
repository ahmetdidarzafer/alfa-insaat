import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import FadeUp from "@/components/ui/FadeUp";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hakkımızda",
    description:
      "Alfa Onarım ve İnşaat: 2015'ten bu yana iç ve dış mekan boya, alçıpan, elektrik-mekanik altyapı, ıslak hacim ve PVC-alüminyum doğrama alanlarında hizmet veriyoruz.",
    openGraph: {
      title: "Hakkımızda | Alfa Onarım ve İnşaat",
      description:
        "2015'ten bu yana iç ve dış mekan boya, alçıpan, elektrik-mekanik altyapı, ıslak hacim ve PVC-alüminyum doğrama alanlarında hizmet veriyoruz.",
      locale: "tr_TR",
      type: "website",
    },
  };
}

const STATS = [
  { name: "Yıllık Tecrübe", value: "10+" },
  { name: "Tamamlanan Proje", value: "500+" },
  { name: "Mutlu Müşteri", value: "1000+" },
  { name: "Çalışan Sayısı", value: "50+" },
] as const;

const NEDEN_BIZ = [
  {
    name: "Tecrübe",
    description:
      "2015 yılından bu yana süregelen, binlerce metrekarelik uygulama tecrübesi.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Geniş Hizmet Yelpazesi",
    description: "Altyapıdan dekorasyona, anahtar teslim çözüm ortağınız.",
    icon: Squares2X2Icon,
  },
  {
    name: "Müşteri Odaklılık",
    description:
      "Projenin her aşamasında ihtiyaçlarınıza göre şekillenen esnek ve sonuç odaklı yaklaşım.",
    icon: UserGroupIcon,
  },
  {
    name: "Güvenilirlik",
    description:
      "Kamu ve özel sektördeki geniş referans ağımızla, verdiğimiz sözü zamanında ve eksiksiz yerine getirme prensibi.",
    icon: ShieldCheckIcon,
  },
] as const;

export default function Hakkimizda() {
  return (
    <>
      {/* Hero + Hikayemiz — solda başlık ve gövde metni birlikte, sağda kurumsal görsel */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-32 sm:pt-32 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <FadeUp className="space-y-6 lg:col-span-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-light">
                Hakkımızda
              </p>
              <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-content">
                2015&apos;ten bu yana, yaşam ve çalışma alanlarınıza değer
                katıyoruz.
              </h1>
            </div>
            <p className="text-base font-normal leading-relaxed text-content-muted">
              2015 yılından bu yana, tadilat ve dekorasyon sektöründe
              edindiğimiz köklü tecrübeyle, yaşam ve çalışma alanlarınıza
              değer katmaya devam ediyoruz. Kurulduğumuz günden bugüne, hem
              kamu kurumlarının hem de özel sektörün ihtiyaç duyduğu geniş bir
              yelpazede, yüksek standartlı çözümler sunuyoruz.
            </p>
            <p className="text-base font-normal leading-relaxed text-content-muted">
              Uzmanlık alanlarımız; iç ve dış mekan boya uygulamaları, alçı ve
              alçıpan işleri, elektrik ve mekanik altyapı sistemleri, ıslak
              hacim çözümleri ile PVC ve alüminyum doğrama işlemlerini
              kapsamaktadır. Modern teknolojiyi ve kaliteli malzeme
              anlayışını, yılların kazandırdığı işçilik tecrübesiyle
              birleştiriyoruz.
            </p>
          </FadeUp>
          <FadeUp delay={70} className="lg:col-span-4">
            <Image
              src="/images/hakkimizda.jpeg"
              alt="Alfa Onarım ve İnşaat — kamu ve özel sektörde güvenilir ortak"
              width={727}
              height={908}
              priority
              className="aspect-[4/5] w-full border border-surface-high object-cover"
            />
          </FadeUp>
        </div>
      </section>

      {/* Stats — tam genişlik bant, Cormorant rakamlar */}
      <section>
        <FadeUp>
          <div className="border-y border-surface-high bg-surface-mid">
            <dl className="mx-auto grid max-w-7xl grid-cols-1 gap-y-12 px-6 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-4 lg:divide-x lg:divide-surface-high lg:px-8">
              {STATS.map((stat) => (
                <div key={stat.name} className="lg:px-8 lg:first:pl-0">
                  <dd className="font-display text-5xl font-light text-content">
                    {stat.value}
                  </dd>
                  <dt className="mt-3 text-xs uppercase tracking-widest text-content-muted">
                    {stat.name}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </FadeUp>
      </section>

      {/* Çalışma Anlayışımız */}
      <section className="mx-auto mt-28 max-w-7xl px-6 sm:mt-36 lg:px-8">
        <FadeUp>
          <span aria-hidden className="block h-0.5 w-16 bg-primary-light" />
          <h2 className="mt-8 font-display text-3xl font-light text-content">
            Çalışma Anlayışımız
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-content-muted">
            Bizim için her proje, yeni bir iş birliği ve değer yaratma
            sürecidir. Çalışmalarımızda temel önceliğimiz, müşterilerimizin
            beklentilerini tam anlamıyla anlamak ve bu beklentileri projenin
            amacına en uygun, estetik ve fonksiyonel çözümlerle hayata
            geçirmektir.
          </p>
        </FadeUp>
      </section>

      {/* Neden Biz — hairline ledger: ikon + isim | açıklama */}
      <section className="mx-auto mt-28 max-w-7xl px-6 sm:mt-36 lg:px-8">
        <FadeUp>
          <span aria-hidden className="block h-0.5 w-16 bg-primary-light" />
          <h2 className="mt-8 font-display text-3xl font-light text-content">
            Neden Biz?
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-content-muted">
            Bizimle çalışmayı tercih etmeniz için dört temel neden.
          </p>
        </FadeUp>
        <dl className="mt-16 border-t border-surface-high">
          {NEDEN_BIZ.map((value, i) => (
            <FadeUp key={value.name} delay={i * 70}>
              <div className="grid gap-4 border-b border-surface-high py-10 md:grid-cols-12 md:gap-8">
                <dt className="flex items-center gap-4 md:col-span-4">
                  <value.icon
                    className="h-6 w-6 shrink-0 text-content-muted"
                    aria-hidden="true"
                  />
                  <span className="text-lg font-medium text-content">
                    {value.name}
                  </span>
                </dt>
                <dd className="max-w-3xl text-base font-normal leading-relaxed text-content-muted md:col-span-8">
                  {value.description}
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
                Projenizi Birlikte Değerlendirelim
              </h2>
              <p className="mt-5 text-base font-normal leading-relaxed text-content-muted">
                Deneyimli ekibimizle projenizi hayata geçirmek için hazırız.
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
                href="/hizmetlerimiz"
                className="text-sm font-medium text-content transition-colors duration-300 ease-out-strong hover:text-primary-light"
              >
                Hizmetlerimiz <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
