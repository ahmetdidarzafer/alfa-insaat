import { Link } from 'react-router-dom'
import {
  BuildingOffice2Icon,
  HomeIcon,
  BuildingStorefrontIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Konut Projeleri',
    description: 'Modern ve konforlu yaşam alanları tasarlıyor, inşa ediyoruz. Villa, apartman ve site projelerinde uzmanız.',
    icon: HomeIcon,
  },
  {
    name: 'Ticari Yapılar',
    description: 'Ofis binaları, alışveriş merkezleri ve diğer ticari yapılar için özel çözümler sunuyoruz.',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Endüstriyel Yapılar',
    description: 'Fabrika, depo ve diğer endüstriyel yapılar için güvenli ve verimli çözümler üretiyoruz.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Renovasyon',
    description: 'Mevcut yapıların yenilenmesi ve modernizasyonu için kapsamlı çözümler sunuyoruz.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'İç Mimari',
    description: 'Yaşam ve çalışma alanlarınızı modern ve fonksiyonel tasarımlarla yeniden yapılandırıyoruz.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Proje Yönetimi',
    description: 'Projelerinizin tüm aşamalarında profesyonel yönetim ve danışmanlık hizmeti veriyoruz.',
    icon: BuildingOffice2Icon,
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hizmetlerimiz</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              İnşaat sektöründe sunduğumuz kapsamlı hizmetler ve uzmanlık alanlarımız.
            </p>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sunduğumuz Hizmetler
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Her projenin kendine özgü ihtiyaçları vardır. Size en uygun çözümü sunmak için buradayız.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="h-10 w-10 flex-none rounded-lg bg-primary flex items-center justify-center">
                  <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {service.name}
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">{service.description}</p>
                <p className="mt-6">
                  <Link to="/iletisim" className="text-sm font-semibold leading-6 text-primary">
                    Detaylı Bilgi <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>
          ))}
        </div>
      </div>

      {/* Process section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Çalışma Sürecimiz
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Her projemizde izlediğimiz profesyonel süreç.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                1. İlk Görüşme
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Projenizin ihtiyaçlarını ve beklentilerinizi detaylı olarak dinliyoruz.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                2. Planlama
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Projeniz için en uygun çözümü ve zaman planını oluşturuyoruz.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                3. Uygulama
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Uzman ekibimizle projenizi en yüksek kalitede hayata geçiriyoruz.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                4. Teslim
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Projenizi zamanında ve eksiksiz olarak teslim ediyoruz.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projeniz İçin Bizimle İletişime Geçin
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Size en uygun çözümü sunmak için hazırız.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/iletisim"
              className="btn"
            >
              İletişime Geçin
            </Link>
            <Link to="/hakkimizda" className="text-sm font-semibold leading-6 text-gray-900">
              Hakkımızda <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 