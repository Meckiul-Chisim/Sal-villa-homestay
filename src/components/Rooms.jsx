import { useState } from 'react'
import { ArrowRight, BedDouble, Users } from 'lucide-react'
import { rooms } from '../data/siteData'
import RoomModal from './RoomModal'

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null)

  return (
    <section className="px-[7vw] py-20 md:px-[8vw] md:py-28" id="stay" aria-labelledby="rooms-title">
      <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end"><div><p className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#71846f]">Choose your space</p><h2 id="rooms-title" className="mt-3.5 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-.03em]">Stay your way.</h2></div><a href="#booking" className="flex items-center gap-2 border-b border-[#243128] pb-1 text-[13px]">View availability <ArrowRight size={17} /></a></div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {rooms.map((room) => <article className="group min-w-0 overflow-hidden rounded-xl bg-[#f6f4ed] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg" key={room.name}><div className="overflow-hidden"><img className="block h-[250px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[300px]" loading="lazy" src={room.image} alt={`${room.name} placeholder room image`} /></div><div className="p-5"><div className="flex items-start justify-between gap-4"><div><h3 className="m-0 mb-1 font-serif text-[23px] font-medium">{room.name}</h3><p className="m-0 text-xs text-[#69736c]">{room.detail}</p></div><strong className="whitespace-nowrap text-sm">{room.price}</strong></div><div className="mt-5 flex flex-wrap gap-3 border-t border-[#dfe2d9] pt-4 text-xs text-[#69736c]"><span className="flex items-center gap-1.5"><Users size={15} className="text-[#71846f]" /> {room.guests}</span><span className="flex items-center gap-1.5"><BedDouble size={15} className="text-[#71846f]" /> {room.beds}</span></div><button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#243128] transition hover:text-[#71846f]" onClick={() => setSelectedRoom(room)}>View room <ArrowRight size={16} /></button></div></article>)}
      </div>
      <RoomModal key={selectedRoom?.name ?? 'closed'} room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  )
}

export default Rooms