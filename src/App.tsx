import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PaperBags from './pages/PaperBags'
import RigidBoxes from './pages/RigidBoxes'
import MonoCartons from './pages/MonoCartons'
import Industries from './pages/Industries'
import Sustainability from './pages/Sustainability'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import ScrollProgress from './components/ScrollProgress'
import Finishes from './pages/Finishes'

export default function App() {
  return (
    <div className="relative min-h-screen bg-navy text-ivory">
      <ScrollProgress />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/paper-bags" element={<PaperBags />} />
          <Route path="/products/rigid-boxes" element={<RigidBoxes />} />
          <Route path="/products/mono-cartons" element={<MonoCartons />} />
          <Route path="/finishes" element={<Finishes />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
