import { Link } from 'react-router-dom'
import { BuildingOfficeIcon, UserGroupIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'Yıllık Tecrübe', value: '20+' },
  { id: 2, name: 'Tamamlanan Proje', value: '500+' },
  { id: 3, name: 'Mutlu Müşteri', value: '1000+' },
  { id: 4, name: 'Çalışan Sayısı', value: '50+' },
]

const values = [
  {
    name: 'Kalite',
    description: 'Her projemizde en yüksek kalite standartlarını hedefliyoruz. Kullandığımız malzemeler ve işçilik kalitemiz, projelerimizin uzun ömürlü olmasını sağlıyor.',
    icon: TrophyIcon,
  },
  {
    name: 'Güven',
    description: 'Müşterilerimizle kurduğumuz güven ilişkisi, başarımızın temelini oluşturuyor. Söz verdiğimiz her şeyi zamanında ve eksiksiz teslim ediyoruz.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Uzmanlık',
    description: 'Deneyimli ve uzman kadromuz, en son teknoloji ve yöntemleri kullanarak projelerinizi hayata geçiriyor. Her projede en iyi çözümleri sunuyoruz.',
    icon: UserGroupIcon,
  },
  {
    name: 'Zamanında Teslim',
    description: 'Projelerimizi söz verdiğimiz sürede tamamlıyoruz. Zaman yönetimi konusundaki hassasiyetimiz, müşterilerimizin güvenini kazanmamızı sağlıyor.',
    icon: ClockIcon,
  },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hakkımızda</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              20 yılı aşkın tecrübemizle, inşaat sektöründe kalite ve güvenin adresi olmaya devam ediyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Rakamlarla Biz
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Yıllar içinde elde ettiğimiz başarılar ve deneyimlerimiz.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Değerlerimiz</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Her projemizde bizi yönlendiren temel değerlerimiz.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {value.name}
              </dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projenizi Birlikte Değerlendirelim
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Deneyimli ekibimizle projenizi hayata geçirmek için hazırız.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/iletisim"
              className="btn"
            >
              İletişime Geçin
            </Link>
            <Link to="/hizmetlerimiz" className="text-sm font-semibold leading-6 text-gray-900">
              Hizmetlerimiz <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 