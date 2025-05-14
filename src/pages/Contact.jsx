import { useState } from 'react'
import {
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'

// Google Maps API anahtarını .env dosyasından al
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const contactInfo = [
  {
    name: 'Ofis',
    description: 'Merkez Ofis',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Telefon',
    description: '+90 543 686 22 77',
    icon: PhoneIcon,
  },
  {
    name: 'E-posta',
    description: 'info@alfaonarim.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Adres',
    description: 'Maltepe Mah. Cebe Alibey Sok. No:18 34900 Zeytinburnu İstanbul Türkiye',
    icon: MapPinIcon,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Google Maps için adres koordinatları (Kadıköy örnek koordinatları)
  const mapLocation = {
    lat: 41.022041,
    lng: 28.905348,
    zoom: 18,
  }

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">İletişim</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sorularınız veya projeleriniz için bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </div>

      {/* Contact info section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => (
            <div key={item.name} className="flex flex-col items-start">
              <div className="rounded-md bg-primary/10 p-2 ring-1 ring-primary/20">
                <item.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-semibold leading-7 text-gray-900">{item.name}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact form and map section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* Contact form */}
          <div className="lg:pr-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Bize Ulaşın</h2>
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                    Ad Soyad
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                    E-posta
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                    Telefon
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">
                    Konu
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                      required
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Mesajınız
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 bg-white"
                    required
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="btn w-full">
                  Gönder
                </button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="lg:pl-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Konum</h2>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
              {GOOGLE_MAPS_API_KEY ? (
                <iframe
                  title="Ofis Konumu"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${mapLocation.lat},${mapLocation.lng}&zoom=${mapLocation.zoom}`}
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-gray-100">
                  <p className="text-gray-500">Harita yüklenemedi. Lütfen API anahtarınızı kontrol edin.</p>
                </div>
              )}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Maltepe Mah. Cebe Alibey Sok. No:18 34900 Zeytinburnu İstanbul Türkiye
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 