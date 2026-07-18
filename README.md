# Alfa Onarım ve İnşaat

İstanbul merkezli onarım ve inşaat firması için kurumsal web sitesi. Next.js 14
(App Router) ile geliştirilmiş, statik olarak dışa aktarılan (SSG) bir sitedir.
Renovasyon, tadilat ve iç/dış mekân projelerini tanıtır; EmailJS tabanlı iletişim
formu ve Google Maps gömülü haritası içerir.

## Teknoloji

- **Framework:** Next.js 14 (App Router, `output: 'export'` ile statik export)
- **Dil:** TypeScript
- **Stil:** Tailwind CSS v3
- **UI:** @headlessui/react, @heroicons/react
- **İletişim:** EmailJS (@emailjs/browser)
- **Dağıtım:** Render (static site)

## Komutlar

```bash
npm install       # bağımlılıkları yükle
npm run dev       # geliştirme sunucusu (http://localhost:3000)
npm run build     # üretim derlemesi + statik export (./out klasörüne)
npm run lint      # ESLint
npx tsc --noEmit  # tip kontrolü
```

`npm run build` çıktısı `./out` klasörüne statik HTML olarak yazılır. Ayrı bir
`start` adımı gerekmez; `./out` doğrudan sunulur.

## Ortam Değişkenleri

`.env.local` dosyasında (asla commit edilmez) aşağıdaki anahtarlar tanımlanır:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Bu değerler boş bırakılırsa iletişim formu çökmez; yerine "İletişim formu şu an
aktif değil." mesajı gösterilir. `NEXT_PUBLIC_*` değişkenleri derleme anında
gömüldüğü için, değer eklendikten sonra yeniden derleme (`npm run build`)
gereklidir.

## Dağıtım (Render)

Depo, kök dizindeki [`render.yaml`](render.yaml) ile yapılandırılmış bir Render
static site olarak dağıtılır:

- **Build command:** `npm install && npm run build`
- **Publish path:** `./out`
- **Node sürümü:** [`.nvmrc`](.nvmrc) → 20

### Render panosunda yapılması gerekenler

1. **EmailJS bilgileri:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`,
   `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` ve `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   değişkenleri Render → Environment bölümünden girilmelidir (bu değerler
   `render.yaml` içinde `sync: false` olarak işaretlidir, yani panodan elle
   ayarlanır). İletişim formunun çalışması için zorunludur.
2. **Google Maps embed URL:** Harita gömülü iframe adresi
   `lib/constants.ts` içindeki `GOOGLE_MAPS_EMBED_URL` sabitindedir. Gerçek ofis
   adresine ait embed URL'i (Google Maps → Paylaş → Harita yerleştir) buraya
   yazılıp yeniden derlenmelidir.

> Not: Ortam değişkenleri derleme anında gömüldüğünden, panoda bir değeri
> değiştirdikten sonra Render'da yeni bir deploy tetiklenmelidir.
