import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, BedDouble, Check, Users, X } from 'lucide-react'

const inputClass = 'mt-2 block w-full rounded-lg border border-[#dfe2d9] bg-[#fffdf8] p-3 text-sm text-[#243128] outline-0 transition focus:border-[#71846f] focus:ring-2 focus:ring-[#71846f]/20'

function RoomModal({ room, onClose }) {
    const [bookingMode, setBookingMode] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
      if (!room) return undefined
      const closeOnEscape = (event) => event.key === 'Escape' && onClose()
      document.addEventListener('keydown', closeOnEscape)
      return () => document.removeEventListener('keydown', closeOnEscape)
    }, [onClose, room])

    if (!room) return null

    const today = new Date().toISOString().split('T')[0]

    const handleSubmit = (event) => {
      event.preventDefault()
      setSubmitted(true)
    }

    return (
      <div className="fixed inset-0 z-50 grid place-items-center bg-[#172019]/75 p-4" role="dialog" aria-modal="true" aria-labelledby="room-modal-title" onClick={onClose}>
        <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-[#fffdf8] shadow-2xl" onClick={(event) => event.stopPropagation()}>
          <div className="relative">
            <img className="h-48 w-full object-cover sm:h-64" src={room.image} alt={`${room.name} placeholder room image`} />
            <button className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-[#fffdf8]/90 text-[#243128] shadow-sm transition hover:bg-white" onClick={onClose} aria-label="Close room booking"><X size={19} /></button>
          </div>

          {!bookingMode && !submitted && <div className="p-6 sm:p-10">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#71846f]">Room details</p><h2 id="room-modal-title" className="font-serif text-4xl font-medium">{room.name}</h2></div>
              <strong className="text-lg">{room.price}<span className="ml-1 text-xs font-normal text-[#69736c]">/ night</span></strong>
            </div>
            <p className="mt-6 max-w-2xl leading-7 text-[#69736c]">{room.description}</p>
            <div className="my-7 grid gap-3 border-y border-[#dfe2d9] py-5 text-sm sm:grid-cols-2"><span className="flex items-center gap-2"><Users size={17} className="text-[#71846f]" /> {room.guests}</span><span className="flex items-center gap-2"><BedDouble size={17} className="text-[#71846f]" /> {room.beds}</span></div>
            <div className="mb-8 grid gap-3 sm:grid-cols-3">{room.amenities.map((item) => <span className="flex gap-2 text-sm text-[#69736c]" key={item}><Check size={16} className="mt-0.5 shrink-0 text-[#71846f]" /> {item}</span>)}</div>
            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#243128] px-6 text-sm text-white transition hover:bg-[#526653]" onClick={() => setBookingMode(true)}>Book this room <ArrowRight size={17} /></button>
          </div>}

          {bookingMode && !submitted && <form className="p-6 sm:p-10" onSubmit={handleSubmit}>
            <button type="button" className="mb-6 inline-flex items-center gap-2 text-sm text-[#69736c] transition hover:text-[#243128]" onClick={() => setBookingMode(false)}><ArrowLeft size={16} /> Back to room details</button>
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3"><div><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#71846f]">Book this room</p><h2 id="room-modal-title" className="font-serif text-3xl font-medium">{room.name}</h2></div><span className="text-sm text-[#69736c]">{room.price} / night</span></div>
            <div className="mb-6 rounded-lg bg-[#f6f4ed] px-4 py-3 text-sm text-[#243128]">Your enquiry is for <strong>{room.name}</strong>. No payment is taken in this demo.</div>
            <div className="grid gap-4 sm:grid-cols-2"><label className="text-xs text-[#69736c]">Full name<input className={inputClass} required minLength="2" name="name" placeholder="Your name" /></label><label className="text-xs text-[#69736c]">Phone / WhatsApp<input className={inputClass} required name="contact" placeholder="How can we reach you?" /></label><label className="text-xs text-[#69736c]">Check-in<input className={inputClass} required type="date" min={today} name="checkin" /></label><label className="text-xs text-[#69736c]">Check-out<input className={inputClass} required type="date" min={today} name="checkout" /></label><label className="text-xs text-[#69736c] sm:col-span-2">Number of guests<select className={inputClass} name="guests" defaultValue="2"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4+ guests</option></select></label><label className="text-xs text-[#69736c] sm:col-span-2">Message <textarea className={`${inputClass} resize-y`} name="message" rows="3" placeholder="Anything we should know about your stay?" /></label></div>
            <button className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#243128] px-6 text-sm text-white transition hover:bg-[#526653]" type="submit">Send room enquiry <ArrowRight size={17} /></button>
          </form>}

          {submitted && <div className="grid min-h-[360px] place-content-center p-6 sm:p-10"><span className="mb-5 grid size-12 place-items-center rounded-full bg-[#dfe8d9] text-[#243128]"><Check size={24} /></span><p className="mb-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#71846f]">Enquiry received</p><h2 id="room-modal-title" className="font-serif text-3xl font-medium">{room.name} is requested.</h2><p className="mt-4 max-w-md leading-7 text-[#69736c]">Your room-specific stay request is ready for the Sal Villa team to confirm. No payment has been taken.</p><button className="mt-7 inline-flex min-h-12 w-fit items-center justify-center rounded-full bg-[#243128] px-6 text-sm text-white transition hover:bg-[#526653]" onClick={onClose}>Close</button></div>}
        </div>
      </div>
    )
  }

export default RoomModal