// Google Maps embed — ofis koordinatları eski siteden (41.022041, 28.905348).
// İstenirse Google Maps → Paylaş → Harita yerleştir adresiyle değiştirilebilir.
export const GOOGLE_MAPS_EMBED_URL: string =
  "https://maps.google.com/maps?q=41.022041,28.905348&z=18&hl=tr&output=embed";

// İletişim bilgileri — eski siteden birebir
export const CONTACT_ADDRESS =
  "Maltepe Mah. Cebe Alibey Sok. No:18 34900 Zeytinburnu İstanbul Türkiye";
export const CONTACT_PHONE = "+90 543 686 22 77";
export const CONTACT_EMAIL = "info@alfaonarim.com";

export const NAV_LINKS = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Sertifikalar", href: "/sertifikalarimiz" },
  { label: "İletişim", href: "/iletisim" },
] as const;
