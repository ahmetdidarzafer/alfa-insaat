import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const articles = [
  {
    id: 1,
    title: 'İnşaat Projelerinde Kalite Kontrol Süreçleri',
    description: 'İnşaat projelerinde kalite kontrolünün önemi ve uygulanması gereken süreçler hakkında detaylı bilgi.',
    category: 'Kalite Kontrol',
    date: '15 Mart 2024',
    readTime: '5 dk',
  },
  {
    id: 2,
    title: 'Sürdürülebilir Yapılar ve Çevre Dostu Malzemeler',
    description: 'Sürdürülebilir yapıların özellikleri ve çevre dostu malzeme seçiminde dikkat edilmesi gerekenler.',
    category: 'Sürdürülebilirlik',
    date: '10 Mart 2024',
    readTime: '7 dk',
  },
  {
    id: 3,
    title: 'İnşaat Projelerinde Risk Yönetimi',
    description: 'İnşaat projelerinde karşılaşılabilecek riskler ve bunların yönetimi hakkında bilgiler.',
    category: 'Proje Yönetimi',
    date: '5 Mart 2024',
    readTime: '6 dk',
  },
  {
    id: 4,
    title: 'Modern Mimari Trendleri',
    description: '2024 yılında öne çıkan modern mimari trendleri ve tasarım yaklaşımları.',
    category: 'Mimari',
    date: '1 Mart 2024',
    readTime: '4 dk',
  },
  {
    id: 5,
    title: 'İnşaat Maliyetlerini Etkileyen Faktörler',
    description: 'İnşaat projelerinde maliyetleri etkileyen faktörler ve maliyet optimizasyonu stratejileri.',
    category: 'Maliyet Yönetimi',
    date: '25 Şubat 2024',
    readTime: '8 dk',
  },
  {
    id: 6,
    title: 'Depreme Dayanıklı Yapı Tasarımı',
    description: 'Depreme dayanıklı yapı tasarımında dikkat edilmesi gereken önemli noktalar.',
    category: 'Güvenlik',
    date: '20 Şubat 2024',
    readTime: '6 dk',
  },
]

const categories = [
  'Tümü',
  'Kalite Kontrol',
  'Sürdürülebilirlik',
  'Proje Yönetimi',
  'Mimari',
  'Maliyet Yönetimi',
  'Güvenlik',
]

export default function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Tümü')

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'Tümü' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Bilgi Bankası</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              İnşaat sektörü hakkında güncel bilgiler, makaleler ve uzman görüşleri.
            </p>
          </div>
        </div>
      </div>

      {/* Search and filter section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-md border-0 py-3 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              placeholder="Makalelerde ara..."
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles section */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <article key={article.id} className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={article.date} className="text-gray-500">
                  {article.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                  {article.category}
                </span>
                <span className="text-gray-500">{article.readTime} okuma</span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link to={`/bilgi-bankasi/${article.id}`}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600">{article.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Daha Fazla Bilgi İçin
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            İnşaat projeleriniz hakkında daha detaylı bilgi almak için bizimle iletişime geçin.
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