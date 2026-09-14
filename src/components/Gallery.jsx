import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { galleryImages } from '../data/siteData'

function Gallery() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected === null) return undefined
    const closeOnEscape = (event) => event.key === 'Escape' && setSelected(null)
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [selected])

  return (
    <section className="bg-[#f6f4ed] px-[7vw] py-20 md:px-[8vw] md:py-28" id="gallery" aria-labelledby="gallery-title">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-[11px] font-semibold uppercase tracking-[.2em] text-[#71846f]">A glimpse of the stay</p><h2 id="gallery-title" className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-.03em]">Make room for slow.</h2></div><p className="max-w-xs text-sm leading-6 text-[#69736c]">Placeholder imagery for the demo. Replace these with real Sal Villa photography when available.</p></div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">{galleryImages.map((image, index) => <button className={`${index === 0 ? 'col-span-2 row-span-2' : ''} group overflow-hidden rounded-xl text-left`} key={image.src} onClick={() => setSelected(index)} aria-label={`Open image: ${image.alt}`}><img className="h-full min-h-40 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" src={image.src} alt={image.alt} /></button>)}</div>
      {selected !== null && <div className="fixed inset-0 z-50 grid place-items-center bg-[#172019]/90 p-5" role="dialog" aria-modal="true" aria-label="Image gallery" onClick={() => setSelected(null)}><button className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-white text-[#243128]" onClick={() => setSelected(null)} aria-label="Close gallery"><X size={19} /></button><button className="absolute left-4 grid size-10 place-items-center rounded-full bg-white/90 text-[#243128] sm:left-8" onClick={(event) => { event.stopPropagation(); setSelected((selected - 1 + galleryImages.length) % galleryImages.length) }} aria-label="Previous image"><ChevronLeft /></button><img className="max-h-[82vh] max-w-[90vw] object-contain" src={galleryImages[selected].src} alt={galleryImages[selected].alt} onClick={(event) => event.stopPropagation()} /><button className="absolute right-4 grid size-10 place-items-center rounded-full bg-white/90 text-[#243128] sm:right-8" onClick={(event) => { event.stopPropagation(); setSelected((selected + 1) % galleryImages.length) }} aria-label="Next image"><ChevronRight /></button></div>}
    </section>
  )
}

export default Gallery