import { ArrowRight, MapPin, Star } from 'lucide-react'

function Hero() {
  return (
    <section className="relative isolate flex h-[calc(100svh-70px)] min-h-[calc(100svh-70px)] items-center overflow-hidden text-white md:h-[calc(100svh-82px)] md:min-h-[min(760px,calc(100svh-82px))] md:items-center" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90')" }} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,28,22,.72),rgba(19,28,22,.22)_62%,rgba(19,28,22,.08)),linear-gradient(0deg,rgba(10,16,12,.58),transparent_45%)]" />
      <div className="w-full max-w-[1100px] px-[7vw] py-3 md:px-[6vw] md:py-12">
        <div className="mb-4 flex items-center gap-[7px] text-[10px] font-semibold uppercase tracking-[2px] sm:mb-[22px] sm:text-[11px] sm:tracking-[2.4px]"><MapPin size={14} /> A quiet escape in nature</div>
        <h1 id="hero-title" className="mb-4 max-w-[900px] break-words font-serif text-[clamp(2.45rem,11vw,4.25rem)] font-medium leading-[.95] tracking-[-1.5px] sm:mb-[26px] sm:tracking-[-2px] md:text-[clamp(3.1rem,7vw,5.75rem)] md:tracking-[-3px]">Come for the stay.<br /><em className="text-[#cad7c2]">Stay for the feeling.</em></h1>
        <p className="mb-5 max-w-[470px] text-[clamp(14px,1.5vw,18px)] leading-[1.45] text-white/80 sm:mb-[31px] sm:leading-[1.6]">Slow mornings, warm hospitality and a peaceful place to call home for a while.</p>
        <div className="flex flex-wrap gap-3">
          <a className="inline-flex min-h-[46px] items-center justify-center gap-[9px] rounded-full bg-white px-[19px] text-[13px] text-[#243128]" href="#booking">Check availability <ArrowRight size={18} /></a>
          <a className="inline-flex min-h-[46px] items-center justify-center gap-[9px] rounded-full border border-white/50 px-[19px] text-[13px]" href="#stay">Explore the villa</a>
        </div>
      </div>
      <div className="absolute right-[5vw] bottom-[34px] hidden items-center gap-1.5 text-xs text-white/80 md:flex"><Star size={15} fill="currentColor" className="text-[#e5bc68]" /> <strong className="text-white">4.9</strong> guest rating</div>
    </section>
  )
}

export default Hero