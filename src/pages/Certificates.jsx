import { Link } from 'react-router-dom'
import { DocumentCheckIcon } from '@heroicons/react/24/outline'

const certificates = [
  {
    id: 1,
    title: 'ISO 9001:2015 Kalite Yönetim Sistemi',
    description: 'Uluslararası kalite standartlarına uygunluk belgesi',
    imageUrl: '/images/certificates/iso-9001.jpg',
  },
  {
    id: 2,
    title: 'ISO 14001:2015 Çevre Yönetim Sistemi',
    description: 'Çevre dostu uygulamalar ve sürdürülebilirlik belgesi',
    imageUrl: '/images/certificates/iso-14001.jpg',
  },
  {
    id: 3,
    title: 'OHSAS 18001 İş Sağlığı ve Güvenliği',
    description: 'İş güvenliği ve sağlığı yönetim sistemi belgesi',
    imageUrl: '/images/certificates/ohsas-18001.jpg',
  },
  {
    id: 4,
    title: 'TSE Belgesi',
    description: 'Türk Standartları Enstitüsü kalite belgesi',
    imageUrl: '/images/certificates/tse.jpg',
  },
]

const achievements = [
  {
    id: 1,
    title: 'Yılın En İyi İnşaat Firması',
    year: '2023',
    description: 'İnşaat sektöründe mükemmellik ödülü',
  },
  {
    id: 2,
    title: 'Sürdürülebilir Yapı Ödülü',
    year: '2022',
    description: 'Çevre dostu projeler kategorisinde başarı ödülü',
  },
  {
    id: 3,
    title: 'Müşteri Memnuniyeti Ödülü',
    year: '2021',
    description: 'En yüksek müşteri memnuniyeti puanı',
  },
]

export default function Certificates() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sertifikalarımız</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kalitemizi ve güvenilirliğimizi belgeleyen sertifikalarımız ve başarılarımız.
            </p>
          </div>
        </div>
      </div>

      {/* Certificates section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <DocumentCheckIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    Sertifika
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    <span className="absolute inset-0" />
                    {certificate.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{certificate.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32 sm:mt-40">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Başarılarımız</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Yıllar içinde elde ettiğimiz başarılar ve ödüller.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {achievement.title}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{achievement.description}</p>
                  <p className="mt-6 text-sm font-semibold leading-6 text-primary">{achievement.year}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32 sm:mt-40 py-32 sm:py-40">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Daha Fazla Bilgi İçin
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sertifikalarımız ve başarılarımız hakkında daha detaylı bilgi almak için bizimle iletişime geçin.
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