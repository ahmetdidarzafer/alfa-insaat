"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FadeUp from "@/components/ui/FadeUp";

type Certificate = {
  title: string;
  description: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  document: string;
};

// Veri eski siteden birebir (CLAUDE.md §8) — sıra ve metinler değiştirilmedi
const CERTIFICATES: Certificate[] = [
  {
    title: "ISO 45001 İş Sağlığı ve Güvenliği",
    description: "İş sağlığı ve güvenliği yönetim sistemi sertifikası",
    icon: "/images/certificates/icons/is_sagligi.png",
    iconWidth: 434,
    iconHeight: 434,
    document: "/images/certificates/ISO45001.png",
  },
  {
    title: "ISO 31000 Kurumsal Risk Yönetimi",
    description: "Kurumsal risk yönetim sistemi sertifikası",
    icon: "/images/certificates/icons/risk.png",
    iconWidth: 593,
    iconHeight: 395,
    document: "/images/certificates/ISO31000.png",
  },
  {
    title: "ISO 26000 Sosyal Sorumluluk",
    description: "Sosyal sorumluluk yönetim sistemi sertifikası",
    icon: "/images/certificates/icons/sosyal.png",
    iconWidth: 1019,
    iconHeight: 1020,
    document: "/images/certificates/ISO26000.png",
  },
  {
    title: "ISO 14001 Çevre Yönetimi",
    description: "Çevre yönetim sistemi sertifikası",
    icon: "/images/certificates/icons/cevre.png",
    iconWidth: 387,
    iconHeight: 433,
    document: "/images/certificates/ISO14001.png",
  },
  {
    title: "ISO 10002 Müşteri Memnuniyeti",
    description: "Müşteri memnuniyeti yönetim sistemi sertifikası",
    icon: "/images/certificates/icons/memnuniyet.png",
    iconWidth: 512,
    iconHeight: 512,
    document: "/images/certificates/ISO10002.png",
  },
  {
    title: "ISO 9001 Kalite Yönetimi",
    description: "Kalite yönetim sistemi sertifikası",
    icon: "/images/certificates/icons/kalite.png",
    iconWidth: 261,
    iconHeight: 261,
    document: "/images/certificates/ISO9001.png",
  },
];

const AWARD = {
  title: "Armut.com",
  year: "2025",
  description:
    "Müşteri değerlendirmelerinde 5.0 puanla “Tavsiye Edilen Hizmet Veren” ödülü",
  image: "/images/certificates/armut.png",
} as const;

export default function Sertifikalarimiz() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  const openModal = (certificate: Certificate) => {
    setSelected(certificate);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  // Sayfadan ayrılırken overflow kilidi mutlaka sıfırlanır (eski koddaki leak düzeltmesi)
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 sm:pb-32 sm:pt-32 lg:px-8">
        <FadeUp className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-primary-light">
            Sertifikalar
          </p>
          <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-content">
            Kalitemizi ve güvenilirliğimizi belgeleyen uluslararası standartlara
            uygun sertifikalarımız.
          </h1>
        </FadeUp>
      </section>

      {/* Credentials wall — tek tip hücreler, kurumsal sicil duvarı */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((certificate, i) => (
            <li key={certificate.title}>
              <FadeUp delay={i * 70} className="h-full">
                <button
                  type="button"
                  onClick={() => openModal(certificate)}
                  className="group flex h-full w-full flex-col items-center border border-surface-high px-8 py-12 text-center transition-colors duration-300 ease-out-strong hover:border-content-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-light active:scale-[0.99]"
                >
                  <span className="flex h-20 items-center">
                    <Image
                      src={certificate.icon}
                      alt={`${certificate.title} rozeti`}
                      width={certificate.iconWidth}
                      height={certificate.iconHeight}
                      className="max-h-20 w-auto object-contain"
                    />
                  </span>
                  <span className="mt-6 block text-base font-medium text-content">
                    {certificate.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-content-muted">
                    {certificate.description}
                  </span>
                  <span className="mt-6 block text-xs uppercase tracking-widest text-content-muted transition-colors duration-300 ease-out-strong group-hover:text-primary-light">
                    Belgeyi Görüntüle
                  </span>
                </button>
              </FadeUp>
            </li>
          ))}
        </ul>
      </section>

      {/* Lightbox — kanıt görünümü: tam belge, siyah fon, tek kapatma düğmesi */}
      <Dialog
        open={selected !== null}
        onClose={closeModal}
        className="relative z-50"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/80 transition-opacity duration-200 ease-out-strong data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-8">
          <DialogPanel
            transition
            className="relative transition duration-200 ease-out-strong data-[closed]:scale-95 data-[closed]:opacity-0 data-[closed]:duration-150"
          >
            {selected && (
              <>
                <DialogTitle className="sr-only">{selected.title}</DialogTitle>
                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Belgeyi kapat"
                  className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center text-content transition-transform duration-150 ease-out-strong active:scale-[0.97]"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden />
                </button>
                <Image
                  src={selected.document}
                  alt={`${selected.title} sertifika belgesi`}
                  width={1653}
                  height={2338}
                  className="max-h-[85vh] w-auto max-w-[90vw] object-contain"
                />
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>

      {/* Award — ISO belgelerinden ayrı karakterde, kendi bölümünde */}
      <section className="mx-auto mt-28 max-w-7xl px-6 sm:mt-36 lg:px-8">
        <FadeUp>
          <span aria-hidden className="block h-0.5 w-16 bg-primary-light" />
          <h2 className="mt-8 font-display text-3xl font-light text-content">
            Başarılarımız
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-content-muted">
            Yıllar içinde elde ettiğimiz başarılar ve ödüller.
          </p>
        </FadeUp>
        <FadeUp>
          <div className="mt-16 grid gap-10 border-t border-surface-high pt-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-4">
              <Image
                src={AWARD.image}
                alt={`${AWARD.title} ${AWARD.year} ödül rozeti`}
                width={2098}
                height={2098}
                className="w-full max-w-xs object-contain"
              />
            </div>
            <div className="md:col-span-8">
              <h3 className="font-display text-2xl font-light text-content">
                {AWARD.title}
              </h3>
              <p className="mt-2 text-xs uppercase tracking-widest text-content-muted">
                {AWARD.year}
              </p>
              <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-content-muted">
                {AWARD.description}
              </p>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* CTA band */}
      <section className="mt-28 border-y border-surface-high bg-surface-mid sm:mt-36">
        <FadeUp>
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 sm:py-24 md:flex-row md:items-center md:justify-between lg:px-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-light text-content">
                Daha Fazla Bilgi İçin
              </h2>
              <p className="mt-5 text-base font-normal leading-relaxed text-content-muted">
                Sertifikalarımız ve başarılarımız hakkında daha detaylı bilgi
                almak için bizimle iletişime geçin.
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
