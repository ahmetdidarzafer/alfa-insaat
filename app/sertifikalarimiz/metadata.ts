import type { Metadata } from "next";

// page.tsx 'use client' olduğu için metadata buradan layout.tsx aracılığıyla
// dışa aktarılıyor (Next.js, Client Component'ten metadata export'una izin vermez).
export const metadata: Metadata = {
  title: "Sertifikalar",
  description:
    "ISO 9001, ISO 10002, ISO 14001, ISO 26000, ISO 31000 ve ISO 45001 sertifikalarımız. Kalitemizi ve güvenilirliğimizi belgeleyen uluslararası standartlar.",
  openGraph: {
    title: "Sertifikalar | Alfa Onarım ve İnşaat",
    description:
      "ISO 9001, ISO 10002, ISO 14001, ISO 26000, ISO 31000 ve ISO 45001 sertifikalarımız.",
    locale: "tr_TR",
    type: "website",
  },
};
