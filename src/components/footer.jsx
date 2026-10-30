function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Daily Horoscope', href: '#horoscope' },
    { name: 'Contact Us', href: '#contact' },
  ]

  const services = [
    { name: 'Kundli Analysis', href: '#services' },
    { name: 'Love & Relationships', href: '#services' },
    { name: 'Career & Finance', href: '#services' },
    { name: 'Birth Chart Reading', href: '#services' },
    { name: 'Personal Consultation', href: '#consultation' },
  ]

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/' },
    { name: 'YouTube', href: 'https://www.youtube.com/' },
    { name: 'Facebook', href: 'https://www.facebook.com/' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-amber-300/20 bg-[#080B18] text-[#F5F0E6]">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-400/5 blur-[120px]" />

      {/* Top Decorative Divider */}
      <div className="flex items-center justify-center gap-3 pt-12">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-300/60" />
        <span className="text-xl text-amber-300">✧</span>
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-300/60" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 pb-8 pt-12 sm:px-10 lg:px-16">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-4">

            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center text-amber-300 transition-transform duration-700 group-hover:rotate-45">
                <svg viewBox="0 0 48 48" fill="none" className="h-full w-full">
                  <circle
                    cx="24"
                    cy="24"
                    r="18"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="12"
                    stroke="currentColor"
                    strokeWidth="0.7"
                    strokeDasharray="2 3"
                  />
                  <path
                    d="M24 7L28 20L41 24L28 28L24 41L20 28L7 24L20 20Z"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                  <circle cx="24" cy="24" r="3" fill="currentColor" />
                </svg>
              </span>

              <span className="flex flex-col gap-1">
                <span className="font-serif text-2xl font-semibold tracking-[2px] text-amber-300">
                  ASTRO MITRA
                </span>
                <span className="text-[9px] tracking-[3px] text-slate-400">
                  YOUR COSMIC COMPASS
                </span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Explore the wisdom of astrology and discover new perspectives
              on your life's journey. Find clarity, understand your birth chart,
              and navigate life's questions with greater confidence.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="border border-white/10 px-4 py-2.5 text-xs text-slate-400 transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-300/5 hover:text-amber-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 font-serif text-lg text-amber-300">
              Explore
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-amber-300"
                  >
                    <span className="text-amber-300/0 transition-colors group-hover:text-amber-300">
                      →
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-6 font-serif text-lg text-amber-300">
              Astrology Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-amber-300"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 font-serif text-lg text-amber-300">
              A Little Cosmic Wisdom
            </h3>

            <p className="mb-6 text-sm leading-7 text-slate-400">
              Stay connected with astrology insights, celestial events,
              and updates from Astro Mitra.
            </p>

            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-between border border-amber-300/40 px-4 py-4 text-sm text-amber-300 transition-all duration-300 hover:bg-amber-300 hover:text-[#080B18]"
            >
              Connect With Us
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <p className="mt-4 text-xs leading-6 text-slate-500">
              Thoughtful guidance for your cosmic journey.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-amber-300/20 to-transparent" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-500">
            © {currentYear} Astro Mitra. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <a
              href="#privacy"
              className="transition-colors hover:text-amber-300"
            >
              Privacy Policy
            </a>

            <a
              href="#terms"
              className="transition-colors hover:text-amber-300"
            >
              Terms of Service
            </a>
          </div>

          <p className="text-xs text-slate-500">
            Made with <span className="text-amber-300">✦</span> for the curious.
          </p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
