import { BedDouble, CalendarDays, MapPin, Users } from 'lucide-react'

function Experience() {
  return (
    <section className="grid grid-cols-1 bg-[#243128] text-white md:grid-cols-2" id="experience">
      <div className="min-h-[420px] bg-cover bg-center md:min-h-[650px]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85')" }} />
      <div className="flex flex-col justify-center px-[7vw] py-[75px] md:px-[8vw] md:py-[8vw]"><div className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#afc2a8]">The Sal Villa experience</div><h2 className="my-5 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-.03em]">Simple comforts.<br /><em className="text-[#cad7c2]">Thoughtful details.</em></h2><p className="max-w-[470px] leading-[1.75] text-[#c0c9c0]">Everything you need for an easy stay, without the hotel feeling. Enjoy restful rooms, shared spaces and the kind of hospitality that feels personal.</p><div className="mt-[30px] grid grid-cols-1 gap-3 sm:grid-cols-2"><span className="flex items-center gap-2.5 rounded-lg border border-white/10 p-3 text-[13px]"><BedDouble size={19} className="text-[#afc2a8]" /> Comfortable beds</span><span className="flex items-center gap-2.5 rounded-lg border border-white/10 p-3 text-[13px]"><Users size={19} className="text-[#afc2a8]" /> Family-friendly stay</span><span className="flex items-center gap-2.5 rounded-lg border border-white/10 p-3 text-[13px]"><CalendarDays size={19} className="text-[#afc2a8]" /> Flexible stays</span><span className="flex items-center gap-2.5 rounded-lg border border-white/10 p-3 text-[13px]"><MapPin size={19} className="text-[#afc2a8]" /> Peaceful surroundings</span></div></div>
    </section>
  )
}

export default Experience