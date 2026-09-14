import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Rooms from './components/Rooms'
import Experience from './components/Experience'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="mx-auto min-h-screen w-full max-w-[1440px] overflow-clip bg-[#fffdf8] text-[#243128]">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main id="top">
        <Hero />
        <Intro />
        <Rooms />
        <Experience />
        <Amenities />
        <Gallery />
        <Reviews />
        <Location />
        <Booking />
      </main>

      <Footer />
    </div>
  )
}

export default App
