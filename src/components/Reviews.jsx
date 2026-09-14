import { Quote, Star } from 'lucide-react'

const reviews = [
  'Placeholder guest review — replace with real guest feedback.',
  'Placeholder guest review — replace with real guest feedback.',
  'Placeholder guest review — replace with real guest feedback.',
]

function Reviews() {
  return (
    <section className="bg-[#243128] px-[7vw] py-20 text-white md:px-[8vw] md:py-28" aria-labelledby="reviews-title">
      <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-[11px] font-semibold uppercase tracking-[.2em] text-[#afc2a8]">Guest notes</p><h2 id="reviews-title" className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-none tracking-[-.03em]">Kind words, coming soon.</h2></div><div className="flex items-center gap-2 text-sm text-[#c0c9c0]"><Star size={16} className="fill-[#e5bc68] text-[#e5bc68]" /> Demo rating indicator</div></div>
      <div className="grid gap-4 md:grid-cols-3">{reviews.map((review, index) => <article className="rounded-xl border border-white/15 bg-white/5 p-6" key={index}><Quote size={22} className="mb-10 text-[#afc2a8]" /><p className="text-sm leading-7 text-[#e1e6e0]">{review}</p><p className="mt-6 text-[10px] uppercase tracking-[.15em] text-[#afc2a8]">Demo content</p></article>)}</div>
    </section>
  )
}

export default Reviews