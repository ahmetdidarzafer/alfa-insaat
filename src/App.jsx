import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Certificates from './pages/Certificates'
import Contact from './pages/Contact'
import KnowledgeBase from './pages/KnowledgeBase'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hakkimizda" element={<About />} />
          <Route path="hizmetlerimiz" element={<Services />} />
          <Route path="sertifikalarimiz" element={<Certificates />} />
          <Route path="iletisim" element={<Contact />} />
          <Route path="bilgi-bankasi" element={<KnowledgeBase />} />
        </Route>
      </Routes>
    </Router>
  )
}
