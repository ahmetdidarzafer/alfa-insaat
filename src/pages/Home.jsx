import { Link } from 'react-router-dom'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Profesyonel Ekip',
    description: 'Deneyimli ve uzman kadromuzla kaliteli hizmet sunuyoruz.',
  },
  {
    name: 'Modern Ekipman',
    description: 'En son teknoloji ve ekipmanlarla çalışıyoruz.',
  },
  {
    name: 'Kaliteli Malzeme',
    description: 'Yüksek kaliteli malzemeler kullanarak uzun ömürlü projeler üretiyoruz.',
  },
  {
    name: 'Zamanında Teslim',
    description: 'Projelerimizi söz verdiğimiz sürede tamamlıyoruz.',
  },
]

const projects = [
  {
    id: 1,
    title: 'Modern Villa Projesi',
    description: 'İstanbul\'da 500m² alan üzerine kurulu modern villa projesi.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 2,
    title: 'Ofis Binası',
    description: 'İstanbul\'da 2000m² alan üzerine kurulu modern ofis binası.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
  },
  {
    id: 3,
    title: 'Rezidans Projesi',
    description: 'İstanbul\'de 5000m² alan üzerine kurulu lüks rezidans projesi.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
]

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Alfa İnşaat ile Hayalinizdeki Projeleri Gerçeğe Dönüştürün
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              20 yılı aşkın tecrübemizle, modern mimari ve kaliteli işçilik anlayışımızla projelerinizi hayata geçiriyoruz.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/iletisim"
                className="btn"
              >
                Bizimle İletişime Geçin
              </Link>
              <Link to="/hizmetlerimiz" className="text-sm font-semibold leading-6 text-gray-900">
                Hizmetlerimiz <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Neden Biz?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kalite ve Güvenin Adresi
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Müşteri memnuniyetini ön planda tutarak, her projemizde en yüksek kalite standartlarını hedefliyoruz.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircleIcon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Projects section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tamamladığımız Bazı Projeler
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Modern mimari anlayışımız ve kaliteli işçiliğimizle hayata geçirdiğimiz projelerimizden örnekler.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projenizi Hayata Geçirmeye Hazır mısınız?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Bizimle iletişime geçin, projenizi birlikte değerlendirelim.
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