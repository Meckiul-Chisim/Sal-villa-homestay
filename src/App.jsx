import { useState } from 'react'
import { ArrowRight, BedDouble, CalendarDays, Check, MapPin, Menu, Star, Users, X } from 'lucide-react'
import './App.css'

const rooms = [
  { name: 'Garden Suite', price: '₹2,500', detail: 'per night · 2 guests', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Family Villa', price: '₹3,500', detail: 'per night · 4 guests', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Private Cottage', price: '₹2,800', detail: 'per night · 3 guests', image: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=85' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Sal Villa Homestay home">
          <span className="brand-mark">SV</span>
          <span><strong>Sal Villa</strong><small>HOMESTAY</small></span>
        </a>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#stay" onClick={() => setMenuOpen(false)}>Stay</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-cta" href="#booking" onClick={() => setMenuOpen(false)}>Book your stay <ArrowRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow light"><MapPin size={14} /> A quiet escape in nature</div>
            <h1>Come for the stay.<br /><em>Stay for the feeling.</em></h1>
            <p>Slow mornings, warm hospitality and a peaceful place to call home for a while.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#booking">Check availability <ArrowRight size={18} /></a>
              <a className="btn ghost" href="#stay">Explore the villa</a>
            </div>
          </div>
          <div className="hero-rating"><Star size={15} fill="currentColor" /> <strong>4.9</strong> guest rating</div>
        </section>

        <section className="intro section" id="about">
          <div className="section-kicker">Welcome to Sal Villa</div>
          <div className="intro-grid">
            <h2>A little more<br /><em>room to breathe.</em></h2>
            <div><p>Sal Villa Homestay is made for people who want a comfortable, personal stay away from the rush. Come with family, friends or simply yourself.</p><p>Settle in, explore the surroundings and let the day move at its own pace.</p></div>
          </div>
        </section>

        <section className="stay section" id="stay">
          <div className="section-head"><div><div className="section-kicker">Choose your space</div><h2>Stay your way.</h2></div><a href="#booking" className="text-link">View availability <ArrowRight size={17} /></a></div>
          <div className="room-grid">
            {rooms.map((room) => <article className="room-card" key={room.name}><img src={room.image} alt={room.name} /><div className="room-body"><div><h3>{room.name}</h3><p>{room.detail}</p></div><strong>{room.price}</strong></div></article>)}
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="experience-image" />
          <div className="experience-copy"><div className="section-kicker">The Sal Villa experience</div><h2>Simple comforts.<br /><em>Thoughtful details.</em></h2><p>Everything you need for an easy stay, without the hotel feeling. Enjoy restful rooms, shared spaces and the kind of hospitality that feels personal.</p><div className="amenities"><span><BedDouble size={19} /> Comfortable beds</span><span><Users size={19} /> Family friendly</span><span><CalendarDays size={19} /> Flexible stays</span><span><MapPin size={19} /> Peaceful location</span></div></div>
        </section>

        <section className="booking section" id="booking">
          <div className="booking-copy"><div className="section-kicker">Plan your stay</div><h2>Make yourself<br /><em>at home.</em></h2><p>Send us your preferred dates and we’ll get back to you with availability and the best option for your group.</p><div className="trust"><Check size={18} /> No payment required to send an enquiry</div></div>
          <form className="booking-form" onSubmit={handleSubmit}>
            {submitted ? <div className="success"><span><Check size={22} /></span><h3>Enquiry received.</h3><p>Thanks! Your stay request is ready for the Sal Villa team to confirm.</p><button type="button" className="btn primary" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <>
              <div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Guests<select name="guests" defaultValue="2"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4+ guests</option></select></label></div>
              <div className="form-row"><label>Check-in<input required type="date" name="checkin" /></label><label>Check-out<input required type="date" name="checkout" /></label></div>
              <label>Phone / WhatsApp<input required name="contact" placeholder="How can we reach you?" /></label>
              <label>Message <textarea name="message" rows="4" placeholder="Anything we should know about your stay?"></textarea></label>
              <button className="btn primary full" type="submit">Request availability <ArrowRight size={18} /></button>
            </>}
          </form>
        </section>
      </main>

      <footer><div className="brand footer-brand"><span className="brand-mark">SV</span><span><strong>Sal Villa</strong><small>HOMESTAY</small></span></div><p>Good stays. Quiet moments. Warm memories.</p><span>© 2026 Sal Villa Homestay</span></footer>
    </div>
  )
}

export default App
