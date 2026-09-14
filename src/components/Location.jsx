import { ArrowUpRight, MapPin } from 'lucide-react'
import { gettingHere } from '../data/siteData'

function Location() {
  return (
    <section className="grid grid-cols-1 gap-10 bg-[#fffdf8] px-[7vw] py-20 md:grid-cols-2 md:gap-[9vw] md:px-[8vw] md:py-28" id="location" aria-labelledby="location-title">
      <div><p className="mb-3 text-[11px] font-semibold uppercase tracking-[.2em] text-[#71846f]">Find your way here</p><h2 id="location-title" className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-.03em]">Getting here.</h2><p className="mt-6 max-w-lg leading-7 text-[#69736c]">The exact location and travel guidance will be added once the Sal Villa team confirms the details. This map panel is ready to be replaced with the final Google Maps embed.</p><a className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#243128] px-5 py-3 text-sm transition hover:bg-[#243128] hover:text-white" href="#booking">Ask about directions <ArrowUpRight size={16} /></a></div>
      <div className="overflow-hidden rounded-2xl bg-[#e6e9df]"><div className="flex min-h-72 flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_30%,#f6f4ed,transparent_30%),linear-gradient(135deg,#dbe4d6,#eef0e7)] p-8 text-center"><MapPin size={31} className="mb-4 text-[#71846f]" /><p className="font-serif text-2xl">Sal Villa location</p><p className="mt-2 max-w-xs text-sm leading-6 text-[#69736c]">Map placeholder · precise address to be confirmed</p></div><div className="grid gap-4 bg-[#f6f4ed] p-6 sm:grid-cols-2">{gettingHere.map(([title, text]) => <div key={title}><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-[#69736c]">{text}</p></div>)}</div></div>
    </section>
  )
}

export default Location