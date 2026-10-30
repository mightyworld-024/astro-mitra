import { useState } from 'react'

function Info() {
  const [activeTab, setActiveTab] = useState('zodiac')

  const tabs = [
    { id: 'zodiac', label: 'Zodiac Signs', icon: '♌' },
    { id: 'planets', label: 'The Planets', icon: '☼' },
    { id: 'houses', label: 'Birth Chart Houses', icon: '⌂' },
    { id: 'nakshatras', label: 'Nakshatras', icon: '✧' },
  ]

  const information = {
    zodiac: {
      eyebrow: 'The Twelve Signs',
      title: 'Discover Your Zodiac',
      description:
        'In Vedic astrology, the zodiac is divided into twelve signs, each associated with distinct traditional characteristics and elemental qualities.',
      items: [
        { symbol: '♈', name: 'Mesha', english: 'Aries', element: 'Fire', dates: 'Apr 14 – May 14' },
        { symbol: '♉', name: 'Vrishabha', english: 'Taurus', element: 'Earth', dates: 'May 15 – Jun 14' },
        { symbol: '♊', name: 'Mithuna', english: 'Gemini', element: 'Air', dates: 'Jun 15 – Jul 14' },
        { symbol: '♋', name: 'Karka', english: 'Cancer', element: 'Water', dates: 'Jul 15 – Aug 14' },
        { symbol: '♌', name: 'Simha', english: 'Leo', element: 'Fire', dates: 'Aug 15 – Sep 15' },
        { symbol: '♍', name: 'Kanya', english: 'Virgo', element: 'Earth', dates: 'Sep 16 – Oct 15' },
        { symbol: '♎', name: 'Tula', english: 'Libra', element: 'Air', dates: 'Oct 16 – Nov 14' },
        { symbol: '♏', name: 'Vrishchika', english: 'Scorpio', element: 'Water', dates: 'Nov 15 – Dec 14' },
        { symbol: '♐', name: 'Dhanu', english: 'Sagittarius', element: 'Fire', dates: 'Dec 15 – Jan 13' },
        { symbol: '♑', name: 'Makara', english: 'Capricorn', element: 'Earth', dates: 'Jan 14 – Feb 12' },
        { symbol: '♒', name: 'Kumbha', english: 'Aquarius', element: 'Air', dates: 'Feb 13 – Mar 14' },
        { symbol: '♓', name: 'Meena', english: 'Pisces', element: 'Water', dates: 'Mar 15 – Apr 13' },
      ],
    },

    planets: {
      eyebrow: 'The Nine Grahas',
      title: 'Understand Planetary Influences',
      description:
        'Traditional Vedic astrology interprets nine grahas, including the lunar nodes Rahu and Ketu, as symbolic influences within a birth chart.',
      items: [
        { symbol: '☉', name: 'Surya', english: 'Sun', element: 'Fire', dates: 'Identity & vitality' },
        { symbol: '☽', name: 'Chandra', english: 'Moon', element: 'Water', dates: 'Emotions & mind' },
        { symbol: '♂', name: 'Mangal', english: 'Mars', element: 'Fire', dates: 'Energy & action' },
        { symbol: '☿', name: 'Budha', english: 'Mercury', element: 'Earth', dates: 'Communication' },
        { symbol: '♃', name: 'Guru', english: 'Jupiter', element: 'Sky', dates: 'Wisdom & growth' },
        { symbol: '♀', name: 'Shukra', english: 'Venus', element: 'Water', dates: 'Love & harmony' },
        { symbol: '♄', name: 'Shani', english: 'Saturn', element: 'Air', dates: 'Discipline & duty' },
        { symbol: '☊', name: 'Rahu', english: 'North Node', element: 'Shadow', dates: 'Desires & ambition' },
        { symbol: '☋', name: 'Ketu', english: 'South Node', element: 'Shadow', dates: 'Detachment & insight' },
      ],
    },

    houses: {
      eyebrow: 'The Twelve Bhavas',
      title: 'Explore Your Birth Chart',
      description:
        'The twelve houses, or bhavas, represent different areas of life in traditional astrological interpretation. Their readings depend on the complete birth chart.',
      items: [
        { symbol: 'Ⅰ', name: 'First House', english: 'Identity', element: 'Self', dates: 'Personality & appearance' },
        { symbol: 'Ⅱ', name: 'Second House', english: 'Resources', element: 'Wealth', dates: 'Speech & possessions' },
        { symbol: 'Ⅲ', name: 'Third House', english: 'Courage', element: 'Effort', dates: 'Communication & siblings' },
        { symbol: 'Ⅳ', name: 'Fourth House', english: 'Home', element: 'Roots', dates: 'Family & inner peace' },
        { symbol: 'Ⅴ', name: 'Fifth House', english: 'Creativity', element: 'Expression', dates: 'Learning & creativity' },
        { symbol: 'Ⅵ', name: 'Sixth House', english: 'Service', element: 'Routine', dates: 'Work & daily habits' },
        { symbol: 'Ⅶ', name: 'Seventh House', english: 'Partnerships', element: 'Union', dates: 'Marriage & relationships' },
        { symbol: 'Ⅷ', name: 'Eighth House', english: 'Transformation', element: 'Change', dates: 'Transitions & shared resources' },
        { symbol: 'Ⅸ', name: 'Ninth House', english: 'Wisdom', element: 'Learning', dates: 'Beliefs & higher learning' },
        { symbol: 'Ⅹ', name: 'Tenth House', english: 'Career', element: 'Purpose', dates: 'Work & public life' },
        { symbol: 'Ⅺ', name: 'Eleventh House', english: 'Community', element: 'Growth', dates: 'Networks & aspirations' },
        { symbol: 'Ⅻ', name: 'Twelfth House', english: 'Reflection', element: 'Release', dates: 'Solitude & introspection' },
      ],
    },

    nakshatras: {
      eyebrow: 'The Lunar Mansions',
      title: 'Journey Through Nakshatras',
      description:
        'Vedic astrology divides the lunar zodiac into 27 nakshatras. Each has its own traditional symbolism and place within the zodiac.',
      items: [
        { symbol: '✦', name: 'Ashwini', english: 'The Horsemen', element: 'Beginning', dates: '0° – 13°20′ Aries' },
        { symbol: '✧', name: 'Bharani', english: 'The Bearer', element: 'Transformation', dates: '13°20′ – 26°40′ Aries' },
        { symbol: '☼', name: 'Krittika', english: 'The Flame', element: 'Purification', dates: '26°40′ Aries – 10° Taurus' },
        { symbol: '✺', name: 'Rohini', english: 'The Growing One', element: 'Creation', dates: '10° – 23°20′ Taurus' },
        { symbol: '☾', name: 'Mrigashira', english: 'The Seeker', element: 'Discovery', dates: '23°20′ Taurus – 6°40′ Gemini' },
        { symbol: '✧', name: 'Ardra', english: 'The Storm', element: 'Renewal', dates: '6°40′ – 20° Gemini' },
        { symbol: '♊', name: 'Punarvasu', english: 'Return of Light', element: 'Renewal', dates: '20° Gemini – 3°20′ Cancer' },
        { symbol: '☽', name: 'Pushya', english: 'The Nourisher', element: 'Nurture', dates: '3°20′ – 16°40′ Cancer' },
        { symbol: '✦', name: 'Ashlesha', english: 'The Embrace', element: 'Mystery', dates: '16°40′ – 30° Cancer' },
      ],
    },
  }

  const current = information[activeTab]

  return (
    <section
      id="horoscope"
      className="relative isolate overflow-hidden bg-[#080B18] py-24 text-[#F5F0E6] sm:py-28 lg:py-36"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.08] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-amber-500/[0.06] blur-[130px]" />

      {/* Decorative Stars */}
      <span className="pointer-events-none absolute right-[12%] top-24 text-3xl text-amber-300/40">
        ✧
      </span>

      <span className="pointer-events-none absolute left-[7%] top-1/2 text-xl text-amber-200/30">
        ✦
      </span>

      <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-300/60" />

            <span className="text-[10px] uppercase tracking-[4px] text-amber-200 sm:text-xs">
              The Language of the Cosmos
            </span>

            <span className="h-px w-10 bg-amber-300/60" />
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight sm:text-5xl lg:text-7xl">
            Discover the Wisdom
            <br />

            <span className="bg-gradient-to-r from-amber-200 via-[#E7BC73] to-amber-400 bg-clip-text italic text-transparent">
              Written in the Stars.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Explore the traditional concepts of Vedic astrology, from the
            twelve zodiac signs to the planets and houses that shape a
            birth chart interpretation.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`inline-flex min-h-12 items-center justify-center gap-3 border px-4 py-3 text-xs transition-all duration-300 sm:px-6 sm:text-sm ${
                activeTab === tab.id
                  ? 'border-amber-300/50 bg-amber-200/[0.08] text-amber-200'
                  : 'border-white/10 text-slate-400 hover:border-amber-200/30 hover:text-amber-100'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Information Heading */}
        <div className="mb-9 flex flex-col gap-4 border-b border-amber-200/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[3px] text-amber-300">
              {current.eyebrow}
            </p>

            <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
              {current.title}
            </h3>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-right">
            {current.description}
          </p>
        </div>

        {/* Cards */}
        <div
          key={activeTab}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {current.items.map((item, index) => (
            <article
              key={item.name}
              className="group relative overflow-hidden border border-white/[0.08] bg-[#0D1222]/80 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-[#11182A]"
              style={{
                animation: 'infoCardEnter 450ms ease both',
                animationDelay: `${index * 45}ms`,
              }}
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-300/[0.04] blur-3xl transition-all duration-500 group-hover:bg-amber-300/[0.10]" />

              <div className="relative flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center border border-amber-200/20 bg-amber-200/[0.04] font-serif text-3xl text-amber-300 transition-all duration-500 group-hover:rotate-6 group-hover:border-amber-300/50">
                  {item.symbol}
                </span>

                <span className="text-[10px] tracking-[2px] text-slate-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="relative mt-7">
                <h4 className="font-serif text-xl text-[#F5F0E6] transition-colors group-hover:text-amber-200">
                  {item.name}
                </h4>

                <p className="mt-1 text-xs uppercase tracking-[1.5px] text-amber-300/70">
                  {item.english}
                </p>
              </div>

              <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <span className="text-xs text-slate-500">
                  {item.element}
                </span>

                <span className="text-right text-[10px] leading-5 text-slate-400">
                  {item.dates}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-amber-300 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border border-amber-200/15 bg-gradient-to-r from-[#11172A] via-[#15182A] to-[#101526] px-6 py-10 text-center sm:mt-20 sm:px-10 sm:py-14">
          <span className="text-3xl text-amber-300">✧</span>

          <h3 className="mt-5 font-serif text-3xl sm:text-4xl">
            Curious About Your Birth Chart?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Explore how traditional Vedic astrology interprets your birth
            details and discover a new perspective on your personal journey.
          </p>

          <a
            href="#consultation"
            className="group mt-7 inline-flex min-h-14 items-center justify-center gap-4 bg-gradient-to-r from-[#D6B46A] to-[#F1D49A] px-7 text-sm font-semibold text-[#111321] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(214,180,106,0.15)]"
          >
            Explore a Consultation

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
          Astrology is a traditional belief system. The descriptions on this
          page reflect traditional interpretations and are not scientifically
          established predictions of personality or future events.
        </p>

      </div>

      {/* Local animation */}
      <style>{`
        @keyframes infoCardEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Info
