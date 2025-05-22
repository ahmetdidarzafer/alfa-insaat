import { useState } from 'react'
import { Link } from 'react-router-dom'
import { DocumentCheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

// Resimleri doğrudan import ediyoruz
import is_sagligi from '../assets/is_sagligi.png'
import risk from '../assets/risk.png'
import bilgi_guvenligi from '../assets/bilgi_guvenligi.png'
import cevre from '../assets/cevre.png'
import memnuniyet from '../assets/memnuniyet.png'
import kalite from '../assets/kalite.png'
import armut from '../assets/armut.jpg'
import sosyal_sorumluluk from '../assets/sosyal.png'

// Orijinal sertifika resimleri
import ISO45001 from '../assets/ISO45001.png'
import ISO31000 from '../assets/ISO31000.png'
import ISO26000 from '../assets/ISO26000.png'
import ISO14001 from '../assets/ISO14001.png'
import ISO10002 from '../assets/ISO10002.png'
import ISO9001 from '../assets/ISO9001.png'

const certificates = [
  {
    id: 1,
    title: 'ISO 45001 İş Sağlığı ve Güvenliği',
    image: is_sagligi,
    originalImage: ISO45001,
    description: 'İş sağlığı ve güvenliği yönetim sistemi sertifikası',
  },
  {
    id: 2,
    title: 'ISO 31000 Kurumsal Risk Yönetimi',
    image: risk,
    originalImage: ISO31000,
    description: 'Kurumsal risk yönetim sistemi sertifikası',
  },
  {
    id: 3,
    title: 'ISO 26000 Sosyal Sorumluluk',
    image: sosyal_sorumluluk,
    originalImage: ISO26000,
    description: 'Sosyal sorumluluk yönetim sistemi sertifikası',
  },
  {
    id: 4,
    title: 'ISO 14001 Çevre Yönetimi',
    image: cevre,
    originalImage: ISO14001,
    description: 'Çevre yönetim sistemi sertifikası',
  },
  {
    id: 5,
    title: 'ISO 10002 Müşteri Memnuniyeti',
    image: memnuniyet,
    originalImage: ISO10002,
    description: 'Müşteri memnuniyeti yönetim sistemi sertifikası',
  },
  {
    id: 6,
    title: 'ISO 9001 Kalite Yönetimi',
    image: kalite,
    originalImage: ISO9001,
    description: 'Kalite yönetim sistemi sertifikası',
  },
]

const achievements = [
  {
    id: 1,
    title: 'Armut.com',
    year: '2023',
    description: 'İnşaat sektöründe mükemmellik ödülü',
    image: armut,
  },
]

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const openModal = (certificate) => {
    setSelectedCertificate(certificate)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedCertificate(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sertifikalarımız</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kalitemizi ve güvenilirliğimizi belgeleyen uluslararası standartlara uygun sertifikalarımız.
            </p>
          </div>
        </div>
      </div>

      {/* Certificates grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white h-full cursor-pointer"
              onClick={() => openModal(certificate)}
            >
              <div className="relative h-64 w-full">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="absolute inset-0 h-full w-full object-contain p-4"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-lg font-semibold text-gray-900">{certificate.title}</h3>
                <p className="text-sm text-gray-500">{certificate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - tıklandığında orijinal resmi gösteriyoruz */}
      {selectedCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-auto rounded-lg bg-white p-4">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="mt-4">
              <img
                src={selectedCertificate.originalImage}
                alt={selectedCertificate.title}
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Achievements section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-32 sm:mt-40">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Başarılarımız</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Yıllar içinde elde ettiğimiz başarılar ve ödüller.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-1">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex flex-col">
                {achievement.image && (
                  <div className="relative h-72 w-full mb-4">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="absolute inset-0 h-full w-full object-contain rounded-lg"
                    />
                  </div>
                )}
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