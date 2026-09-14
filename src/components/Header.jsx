import { ArrowRight, Menu, X } from 'lucide-react'

function Header({ menuOpen, setMenuOpen }) {
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-20 flex h-[70px] items-center justify-between border-b border-[#243128]/10 bg-[#fffdf8]/95 px-[7vw] backdrop-blur-md md:h-[82px] md:px-[5vw]">
      <a className="flex min-w-max items-center gap-[11px]" href="#top" aria-label="Sal Villa Homestay home">
        <span className="grid size-[39px] place-items-center rounded-full border border-[#243128] font-serif text-xs font-semibold">SV</span>
        <span><strong className="block font-serif text-lg font-semibold">Sal Villa</strong><small className="mt-px block text-[8px] tracking-[2.4px] text-[#69736c]">HOMESTAY</small></span>
      </a>
      <button className="border-0 bg-transparent text-[#243128] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute top-[70px] right-0 left-0 flex-col items-stretch gap-[18px] border-b border-[#dfe2d9] bg-[#fffdf8] px-[7vw] py-5 text-[13px] md:static md:flex md:flex-row md:items-center md:gap-[34px] md:border-0 md:bg-transparent md:p-0`}>
        <a href="#stay" onClick={closeMenu}>Stay</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#location" onClick={closeMenu}>Contact</a>
        <a className="flex items-center justify-center gap-2 rounded-full bg-[#243128] px-[17px] py-3 text-white" href="#booking" onClick={closeMenu}>Book your stay <ArrowRight size={16} /></a>
      </nav>
    </header>
  )
}

export default Header