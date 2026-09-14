import { useState } from 'react'
import { ArrowRight, Check, MessageCircle } from 'lucide-react'
import { rooms, whatsappNumber } from '../data/siteData'

function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [whatsappNotice, setWhatsappNotice] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const openWhatsApp = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget.form)
    const message = `Sal Villa enquiry\nName: ${formData.get('name')}\nGuests: ${formData.get('guests')}\nCheck-in: ${formData.get('checkin')}\nCheck-out: ${formData.get('checkout')}\nRoom: ${formData.get('room')}\nMessage: ${formData.get('message') || 'None'}`
    if (!whatsappNumber) {
      setWhatsappNotice(true)
      return
    }
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="grid grid-cols-1 gap-[42px] bg-[#f6f4ed] px-[7vw] py-[78px] md:grid-cols-2 md:gap-[9vw] md:px-[8vw] md:py-[10vw]" id="booking">
      <div><div className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#71846f]">Plan your stay</div><h2 className="my-5 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-.03em]">Make yourself<br /><em className="text-[#71846f]">at home.</em></h2><p className="max-w-[510px] text-base leading-[1.75] text-[#69736c]">Send us your preferred dates and we’ll get back to you with availability and the best option for your group.</p><div className="mt-[30px] flex items-center gap-2.5 text-[13px] text-[#69736c]"><Check size={18} className="text-[#71846f]" /> No payment required to send an enquiry</div><p className="mt-5 text-xs leading-5 text-[#8a928b]">WhatsApp is prepared as a connection point. The client phone number still needs to be added in the shared configuration.</p></div>
      <form className="self-start bg-white p-[22px] md:p-[clamp(24px,4vw,48px)]" onSubmit={handleSubmit}>
        {submitted ? <div className="grid min-h-[350px] place-content-center justify-items-start"><span className="mb-[25px] grid size-11 place-items-center rounded-full bg-[#dfe8d9] text-[#243128]"><Check size={22} /></span><h3 className="m-0 mb-2.5 font-serif text-[30px] font-medium">Enquiry received.</h3><p className="mb-[25px] max-w-[320px] leading-[1.6] text-[#69736c]">Thanks! Your stay request is ready for the Sal Villa team to confirm.</p><button type="button" className="inline-flex min-h-[46px] items-center justify-center gap-[9px] rounded-full bg-[#243128] px-[19px] text-[13px] text-white" onClick={() => setSubmitted(false)}>Send another enquiry</button></div> : <>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-4"><label className="mb-[18px] block text-xs text-[#69736c]">Full name<input className="mt-2 block w-full border border-[#dfe2d9] bg-[#fffdf8] p-[13px_14px] text-[#243128] outline-0 focus:border-[#71846f]" required minLength="2" name="name" placeholder="Your name" /></label><label className="mb-[18px] block text-xs text-[#69736c]">Guests<select className="mt-2 block w-full border border-[#dfe2d9] bg-[#fffdf8] p-[13px_14px] text-[#243128] outline-0 focus:border-[#71846f]" name="guests" defaultValue="2"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4+ guests</option></select></label></div>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-4"><label className="mb-[18px] block text-xs text-[#69736c]">Check-in<input className="mt-2 block w-full border border-[#dfe2d9] bg-[#fffdf8] p-[13px_14px] text-[#243128] outline-0 focus:border-[#71846f]" required type="date" name="checkin" /></label><label className="mb-[18px] block text-xs text-[#69736c]">Check-out<input className="mt-2 block w-full border border-[#dfe2d9] bg-[#fffdf8] p-[13px_14px] text-[#243128] outline-0 focus:border-[#71846f]" required type="date" name="checkout" /></label></div>
          <label className="mb-[18px] block text-xs text-[#69736c]">Room preference<select className="mt-2 block w-full border border-[#dfe2d9] bg-[#fffdf8] p-[13px_14px] text-[#243128] outline-0 focus:border-[#71846f]" name="room" defaultValue="Any available room"><option>Any available room</option>{rooms.map((room) => <option key={room.name}>{room.name}</option>)}</select></label>
          <label className="mb-[18px] block text-xs text-[#69736c]">Phone / WhatsApp<input className="mt-2 block w-full border border-[#dfe2d9] bg-[#fffdf8] p-[13px_14px] text-[#243128] outline-0 focus:border-[#71846f]" required name="contact" placeholder="How can we reach you?" /></label>
          <label className="mb-[18px] block text-xs text-[#69736c]">Message <textarea className="mt-2 block w-full resize-y border border-[#dfe2d9] bg-[#fffdf8] p-[13px_14px] text-[#243128] outline-0 focus:border-[#71846f]" name="message" rows="4" placeholder="Anything we should know about your stay?"></textarea></label>
          <div className="grid gap-3 sm:grid-cols-2"><button className="inline-flex min-h-[46px] items-center justify-center gap-[9px] rounded-full bg-[#243128] px-[19px] text-[13px] text-white transition hover:bg-[#526653]" type="submit">Request availability <ArrowRight size={18} /></button><button className="inline-flex min-h-[46px] items-center justify-center gap-[9px] rounded-full border border-[#243128] px-[19px] text-[13px] text-[#243128] transition hover:bg-[#dfe8d9]" type="button" onClick={openWhatsApp}><MessageCircle size={17} /> Enquire on WhatsApp</button></div>
          {whatsappNotice && <p className="mt-3 text-xs leading-5 text-[#8a6d32]" role="status">WhatsApp is ready to connect once the client&apos;s number is added to <code>src/data/siteData.js</code>.</p>}
        </>}
      </form>
    </section>
  )
}

export default Booking