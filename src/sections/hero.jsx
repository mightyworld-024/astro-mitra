
import { useState } from 'react'

function Hero() {
  const [stars] = useState(() =>
    Array.from({ length: 65 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 5}s`,
      size: `${1 + Math.random() * 2}px`,
    }))
  )

  const zodiacSymbols = [
    { symbol: '♈', top: '18%', left: '12%', delay: '0s' },
    { symbol: '♉', top: '35%', left: '6%', delay: '1s' },
    { symbol: '♊', top: '65%', left: '12%', delay: '2s' },
    { symbol: '♋', top: '22%', left: '83%', delay: '1.5s' },
    { symbol: '♌', top: '48%', left: '91%', delay: '0.5s' },
    { symbol: '♍', top: '72%', left: '84%', delay: '2.5s' },
    { symbol: '♎', top: '82%', left: '30%', delay: '1.2s' },
    { symbol: '♏', top: '14%', left: '65%', delay: '2s' },
  ]

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#080B18] px-5 py-28 text-[#F5F0E6] sm:px-8 lg:px-16"
    >
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[42%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#682F3C]/20 blur-[110px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#D6B46A]/10 blur-[100px]" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-900/15 blur-[120px]" />

        {/* COSMIC GRID */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(214,180,106,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(214,180,106,0.15) 1px, transparent 1px)',
            backgroundSize: '75px 75px',
            maskImage:
              'radial-gradient(ellipse at center, black 10%, transparent 75%)',
          }}
        />

        {/* STARS */}
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute animate-pulse rounded-full bg-[#F5F0E6]"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
              boxShadow: '0 0 8px rgba(231,188,115,0.8)',
            }}
          />
        ))}
      </div>

      {/* FLOATING ZODIAC SYMBOLS */}
      {zodiacSymbols.map((item) => (
        <div
          key={item.symbol}
          className="pointer-events-none absolute hidden animate-bounce text-3xl text-[#D6B46A]/35 md:block lg:text-5xl"
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
            animationDuration: '4s',
          }}
        >
          {item.symbol}
        </div>
      ))}

      {/* ROTATING CELESTIAL ORBITS */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 sm:h-[600px] sm:w-[600px] lg:h-[760px] lg:w-[760px]">
        <div className="absolute inset-0 animate-[spin_50s_linear_infinite] rounded-full border border-[#D6B46A]/10" />

        <div className="absolute inset-[9%] animate-[spin_35s_linear_infinite_reverse] rounded-full border border-dashed border-[#D6B46A]/15" />

        <div className="absolute inset-[19%] rounded-full border border-[#D6B46A]/10" />

        <div className="absolute left-1/2 top-0 h-2 w-2 rounded-full bg-[#E7BC73] shadow-[0_0_20px_5px_rgba(231,188,115,0.5)]" />

        <div className="absolute bottom-[15%] right-[12%] h-1.5 w-1.5 rounded-full bg-[#E7BC73] shadow-[0_0_15px_4px_rgba(231,188,115,0.5)]" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">

        {/* EYEBROW */}
        <div className="hero-reveal mb-8 inline-flex items-center gap-3 rounded-full border border-[#D6B46A]/30 bg-[#D6B46A]/5 px-5 py-3 backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E7BC73] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E7BC73]" />
          </span>

          <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#E7BC73] sm:text-xs sm:tracking-[0.35em]">
            Ancient Wisdom · Modern Guidance
          </span>

          <span className="text-[#E7BC73]">✦</span>
        </div>

        {/* MAIN HEADING */}
        <h1 className="hero-reveal hero-delay-1 font-serif text-5xl font-light leading-[1.08] tracking-tight sm:text-7xl md:text-8xl lg:text-[108px]">
          Find Clarity
          <span className="mt-2 block italic text-[#E7BC73]">
            in Your Stars.
          </span>
        </h1>

        {/* DIVIDER */}
        <div className="hero-reveal hero-delay-2 mx-auto mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D6B46A]/70 sm:w-20" />
          <span className="animate-pulse text-xl text-[#D6B46A]">✧</span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D6B46A]/70 sm:w-20" />
        </div>

        {/* DESCRIPTION */}
        <p className="hero-reveal hero-delay-2 mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#F5F0E6]/65 sm:text-base sm:leading-8">
          Discover the wisdom of Vedic astrology. Explore your birth chart
          and gain a fresh perspective on relationships, career, and life’s
          important decisions.
        </p>

        {/* BUTTONS */}
        <div className="hero-reveal hero-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <a
            href="#consultation"
            className="group inline-flex min-w-[220px] items-center justify-center gap-3 bg-[#D6B46A] px-7 py-4 text-sm font-semibold text-[#080B18] shadow-[0_0_30px_rgba(214,180,106,0.12)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#F5D99A] hover:shadow-[0_10px_45px_rgba(214,180,106,0.25)]"
          >
            Book a Consultation

            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>

          <a
            href="#services"
            className="group inline-flex min-w-[220px] items-center justify-center gap-3 border border-[#D6B46A]/30 bg-white/[0.02] px-7 py-4 text-sm text-[#F5F0E6] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#D6B46A]/70 hover:bg-[#D6B46A]/5 hover:text-[#E7BC73]"
          >
            Explore Services

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* TRUST INDICATORS */}
        <div className="hero-reveal hero-delay-3 mt-14 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-[10px] uppercase tracking-[0.16em] text-[#F5F0E6]/50 sm:gap-x-10 sm:text-xs">

          <span className="flex items-center gap-2">
            <span className="text-[#E7BC73]">✦</span>
            Personalized Guidance
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#D6B46A]/50 sm:block" />

          <span className="flex items-center gap-2">
            <span className="text-[#E7BC73]">☼</span>
            Vedic Wisdom
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-[#D6B46A]/50 sm:block" />

          <span className="flex items-center gap-2">
            <span className="text-[#E7BC73]">✧</span>
            Your Journey
          </span>
        </div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#F5F0E6]/40 transition-colors hover:text-[#E7BC73]"
      >
        <span>Scroll to explore</span>

        <span className="flex h-9 w-5 justify-center rounded-full border border-[#D6B46A]/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-[#E7BC73]" />
        </span>
      </a>

      {/* LOCAL ANIMATIONS */}
      <style>{`
        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translate3d(0, 28px, 0);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
        }

        .hero-reveal {
          animation: heroReveal 1s cubic-bezier(0.2, 0.7, 0.2, 1) both;
        }

        .hero-delay-1 {
          animation-delay: 0.15s;
        }

        .hero-delay-2 {
          animation-delay: 0.3s;
        }

        .hero-delay-3 {
          animation-delay: 0.45s;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero