import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Horoscope', href: '#horoscope' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/15 bg-[#080B18]/95 text-[#F5F0E6] backdrop-blur-xl">

      <nav className="mx-auto flex min-h-[88px] max-w-[1600px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-16">

        {/* BRAND */}
        <a
          href="#home"
          className="group flex shrink-0 items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-12 w-12 items-center justify-center text-amber-300 transition-transform duration-700 group-hover:rotate-45">
            <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
              <circle cx="24" cy="24" r="19" stroke="currentColor" />
              <circle
                cx="24"
                cy="24"
                r="13"
                stroke="currentColor"
                strokeDasharray="2 3"
              />
              <path
                d="M24 6L28 20L42 24L28 28L24 42L20 28L6 24L20 20Z"
                stroke="currentColor"
              />
              <circle cx="24" cy="24" r="3" fill="currentColor" />
            </svg>
          </span>

          <span className="flex flex-col gap-1">
            <span className="font-serif text-xl font-semibold tracking-[2px] text-amber-300 sm:text-2xl">
              ASTRO MITRA
            </span>

            <span className="text-[8px] tracking-[3px] text-slate-400 sm:text-[9px]">
              YOUR COSMIC COMPASS
            </span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-3 text-xs tracking-wide text-slate-300 transition-colors duration-300 hover:text-amber-300"
            >
              {link.name}

              <span className="absolute bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-amber-300 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <a
          href="#consultation"
          className="hidden items-center gap-3 border border-amber-300/60 px-5 py-3 text-xs font-medium text-amber-300 transition-all duration-300 hover:bg-amber-300 hover:text-[#080B18] lg:flex"
        >
          Book Consultation
          <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 border border-amber-300/30 text-amber-300 transition-colors hover:bg-amber-300/10 lg:hidden"
        >
          <span
            className={`h-px w-5 bg-current transition-transform duration-300 ${
              menuOpen ? 'translate-y-[4px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition-transform duration-300 ${
              menuOpen ? '-translate-y-[3px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <div
        className={`grid overflow-hidden border-t border-amber-200/10 bg-[#080B18] transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
          menuOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col px-6 pb-6 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-4 text-sm text-slate-300 transition-colors hover:text-amber-300"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#consultation"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-between border border-amber-300/60 px-4 py-4 text-sm text-amber-300 transition-colors hover:bg-amber-300 hover:text-[#080B18]"
            >
              Book a Consultation
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Navbar
