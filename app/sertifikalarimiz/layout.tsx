// Sertifikalar sayfası Client Component olduğundan metadata ve segment
// yapılandırması bu Server Component katmanından dışa aktarılıyor.
export { metadata } from "./metadata";

export const dynamic = "force-static";

export default function SertifikalarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
