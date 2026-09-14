import { Bath, CarFront, Coffee, Sparkles, Trees, Wifi } from 'lucide-react'
import { amenities } from '../data/siteData'

const icons = { wifi: Wifi, parking: CarFront, coffee: Coffee, trees: Trees, bath: Bath, sparkles: Sparkles }

function Amenities() {
  return (
    <section className="bg-[#fffdf8] px-[7vw] py-20 md:px-[8vw] md:py-28" aria-labelledby="amenities-title">
      <div className="mb-10 max-w-xl"><p className="mb-3 text-[11px] font-semibold uppercase tracking-[.2em] text-[#71846f]">The practical comforts</p><h2 id="amenities-title" className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-.03em]">Everything in its place.</h2><p className="mt-5 leading-7 text-[#69736c]">A clear list of the comforts guests may need. Availability is marked as a placeholder until the Sal Villa team confirms the final details.</p></div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{amenities.map((item) => { const Icon = icons[item.icon]; return <div className="rounded-xl border border-[#dfe2d9] p-4 transition hover:-translate-y-1 hover:border-[#71846f] hover:shadow-md" key={item.label}><Icon size={21} className="mb-7 text-[#71846f]" /><h3 className="text-sm font-semibold">{item.label}</h3><p className="mt-2 text-[10px] leading-4 text-[#8a928b]">{item.status}</p></div> })}</div>
    </section>
  )
}

export default Amenities