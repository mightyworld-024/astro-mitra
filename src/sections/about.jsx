import { useEffect, useRef, useState } from "react";

const values = [
  {
    number: "01",
    icon: "✧",
    title: "Ancient Wisdom",
    description:
      "Explore the timeless principles of Vedic astrology through a thoughtful, modern perspective.",
  },
  {
    number: "02",
    icon: "☼",
    title: "Personal Guidance",
    description:
      "Every individual has a unique journey. Our approach focuses on your questions and circumstances.",
  },
  {
    number: "03",
    icon: "✦",
    title: "Meaningful Clarity",
    description:
      "Discover new perspectives on relationships, career, and personal growth through astrological insights.",
  },
];

const stats = [
  { value: 12, label: "Zodiac Signs" },
  { value: 27, label: "Nakshatras" },
  { value: 1, label: "Unique Journey", display: "Your" },
];

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const element = document.getElementById("about-stats");

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;

    const duration = 1400;
    let frame;

    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCounts(stats.map((stat) => Math.round(stat.value * eased)));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [statsVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-cosmic relative isolate overflow-hidden bg-[#0B1020] py-24 text-[#F5F0E6] sm:py-28 lg:py-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.10] blur-[130px] animate-about-glow" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-amber-500/[0.08] blur-[130px] animate-about-glow-reverse" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full border border-amber-200/[0.035]" />

      {/* Floating stars */}
      <span className="about-star pointer-events-none absolute right-[12%] top-24 text-3xl text-amber-300/50">
        ✧
      </span>

      <span className="about-star about-star-delay pointer-events-none absolute left-[8%] top-1/2 text-xl text-amber-200/40">
        ✦
      </span>

      <span className="about-star about-star-slow pointer-events-none absolute bottom-24 right-[8%] text-2xl text-amber-200/30">
        ✧
      </span>

      <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">
        {/* Section heading */}
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-1000 sm:mb-20 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-300/60" />

            <span className="text-[10px] font-medium uppercase tracking-[4px] text-amber-200 sm:text-xs">
              The Story Behind Astro Mitra
            </span>

            <span className="h-px w-10 bg-amber-300/60" />
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            More Than Astrology.
            <br />

            <span className="about-gradient mt-2 inline-block bg-gradient-to-r from-amber-200 via-[#E7BC73] to-amber-400 bg-clip-text italic text-transparent">
              A Path to Clarity.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            We bring the timeless wisdom of the cosmos closer to your everyday
            life, helping you explore your questions with a fresh perspective
            and a deeper sense of self-awareness.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left visual */}
          <div
            className={`relative mx-auto w-full max-w-xl transition-all delay-150 duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            {/* Outer orbit */}
            <div className="about-orbit absolute left-1/2 top-1/2 aspect-square w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/[0.10]" />

            {/* Inner orbit */}
            <div className="about-orbit-reverse absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/[0.14]" />

            {/* Main cosmic card */}
            <div className="about-visual-card relative mx-auto aspect-[4/4.5] w-full max-w-[490px] overflow-hidden rounded-t-[48%] rounded-b-2xl border border-amber-200/20 bg-gradient-to-b from-[#202039] via-[#131A30] to-[#080B18]">
              {/* Cosmic glow */}
              <div className="absolute left-1/2 top-[20%] h-64 w-64 -translate-x-1/2 rounded-full bg-amber-300/[0.13] blur-[80px] animate-about-glow" />

              {/* Moon */}
              <div className="about-moon absolute left-1/2 top-[13%] h-24 w-24 -translate-x-1/2 rounded-full border border-amber-100/40 bg-gradient-to-br from-amber-100 via-[#D6B46A] to-[#76552A] sm:h-32 sm:w-32" />

              {/* Zodiac circle */}
              <div className="about-zodiac absolute left-1/2 top-[9%] aspect-square w-[74%] -translate-x-1/2 rounded-full border border-amber-200/20">
                <div className="absolute inset-3 rounded-full border border-amber-200/20" />

                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-lg text-amber-200">
                  ♈
                </span>

                <span className="absolute right-0 top-1/4 translate-x-1/2 text-lg text-amber-200">
                  ♋
                </span>

                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-lg text-amber-200">
                  ♎
                </span>

                <span className="absolute left-0 top-1/4 -translate-x-1/2 text-lg text-amber-200">
                  ♑
                </span>

                <span className="absolute right-[15%] bottom-[12%] text-sm text-amber-200/70">
                  ✦
                </span>

                <span className="absolute left-[15%] bottom-[12%] text-sm text-amber-200/70">
                  ✧
                </span>
              </div>

              {/* Constellations */}
              <span className="about-star absolute left-[16%] top-[30%] text-xl text-amber-200/80">
                ✦
              </span>

              <span className="about-star about-star-delay absolute right-[18%] top-[34%] text-2xl text-amber-200/70">
                ✧
              </span>

              <span className="about-star about-star-slow absolute left-[25%] top-[48%] text-sm text-amber-200/60">
                ✦
              </span>

              <span className="about-star absolute right-[27%] top-[52%] text-sm text-amber-200/60">
                ✦
              </span>

              {/* Mountains and temple */}
              <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#050711] via-[#101528]/95 to-transparent">
                <svg
                  viewBox="0 0 500 300"
                  preserveAspectRatio="xMidYMax slice"
                  className="absolute inset-x-0 bottom-0 h-full w-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 190L75 100L120 155L185 60L265 165L325 95L405 175L460 120L500 160V300H0Z"
                    fill="#11182B"
                  />

                  <path
                    d="M0 225L90 160L155 205L250 130L330 210L420 155L500 205V300H0Z"
                    fill="#090D1B"
                  />

                  <path d="M180 300V225H320V300" fill="#050711" />

                  <path
                    d="M165 225L250 175L335 225H165Z"
                    fill="#080B18"
                    stroke="#D6B46A"
                    strokeOpacity=".65"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M205 225V200H295V225M225 200V185H275V200M240 185V175H260V185"
                    stroke="#D6B46A"
                    strokeOpacity=".55"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M0 265Q125 245 250 265T500 260V300H0Z"
                    fill="#050711"
                  />
                </svg>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B18]/60 via-transparent to-transparent" />

              {/* Floating label */}
              <div className="absolute bottom-6 left-5 right-5 border border-amber-200/25 bg-[#080B18]/80 p-5 backdrop-blur-xl transition-all duration-500 hover:border-amber-200/50 sm:bottom-8 sm:left-8 sm:right-8 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-amber-300">✧</span>

                  <div>
                    <p className="font-serif text-xl text-[#F5F0E6] sm:text-2xl">
                      Ancient Wisdom
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[2px] text-amber-200/70 sm:text-[10px]">
                      A modern perspective
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="about-float absolute -right-2 top-[18%] flex h-16 w-16 items-center justify-center rounded-full border border-amber-200/30 bg-[#0B1020] font-serif text-3xl text-amber-300 shadow-[0_0_35px_rgba(214,180,106,0.08)] sm:-right-4 sm:h-20 sm:w-20 sm:text-4xl">
              ☯
            </div>

            <div className="about-float-reverse absolute -left-2 bottom-[17%] flex h-12 w-12 items-center justify-center rounded-full border border-amber-200/25 bg-[#0B1020] text-xl text-amber-300 shadow-xl sm:-left-4 sm:h-14 sm:w-14">
              ✦
            </div>
          </div>

          {/* Right content */}
          <div
            className={`transition-all delay-300 duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xl text-amber-300">✧</span>

              <p className="text-[10px] uppercase tracking-[3px] text-amber-200 sm:text-xs">
                Welcome to Astro Mitra
              </p>
            </div>

            <h3 className="font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Your questions matter.
              <br />

              <span className="text-amber-300">
                Your journey is unique.
              </span>
            </h3>

            <p className="mt-7 text-sm leading-8 text-slate-400 sm:text-base">
              Life brings moments of uncertainty, important decisions, and
              questions about what lies ahead. Astrology offers a traditional
              framework for reflecting on these experiences and exploring
              different perspectives.
            </p>

            <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">
              At Astro Mitra, our aim is to make astrological concepts easier
              to understand and more meaningful in everyday life. Whether you
              are exploring your birth chart, relationships, or career, we want
              your experience to feel personal, thoughtful, and clear.
            </p>

            {/* Value cards */}
            <div className="mt-10 space-y-2">
              {values.map((value, index) => (
                <div
                  key={value.number}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  className="about-value group flex gap-5 border-b border-white/10 px-3 py-5 last:border-b-0"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-amber-200/25 bg-amber-200/[0.04] font-serif text-xl text-amber-300 transition-all duration-300 group-hover:border-amber-300/60 group-hover:bg-amber-200/[0.10] group-hover:shadow-[0_0_25px_rgba(214,180,106,0.10)]">
                    {value.icon}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] tracking-[2px] text-amber-300/60">
                        {value.number}
                      </span>

                      <h4 className="font-serif text-xl text-[#F5F0E6] transition-colors duration-300 group-hover:text-amber-200">
                        {value.title}
                      </h4>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#consultation"
              className="about-cta group relative mt-8 inline-flex min-h-14 items-center gap-5 overflow-hidden bg-gradient-to-r from-[#D6B46A] to-[#F1D49A] px-7 text-sm font-semibold text-[#111321] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(214,180,106,0.20)]"
            >
              <span className="relative z-10">Discover Your Path</span>

              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>

              <span className="about-cta-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md" />
            </a>
          </div>
        </div>

        {/* Animated statistics */}
        <div
          id="about-stats"
          className={`mt-24 grid grid-cols-1 border border-amber-200/15 bg-[#0D1222]/70 transition-all duration-1000 sm:grid-cols-3 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`about-stat px-6 py-8 text-center sm:py-10 ${
                index !== 0
                  ? "border-t border-amber-200/15 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <p className="font-serif text-4xl text-amber-300 sm:text-5xl">
                {stat.display || counts[index]}
              </p>

              <p className="mt-3 text-[10px] uppercase tracking-[3px] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
          Astrology is a traditional belief system intended for personal
          reflection and cultural exploration. It should not replace
          professional medical, legal, or financial advice.
        </p>
      </div>

      {/* Component-scoped animations */}
      <style>{`
        @keyframes aboutFloat {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -12px, 0); }
        }

        @keyframes aboutGlow {
          0%, 100% { opacity: .45; }
          50% { opacity: .9; }
        }

        @keyframes aboutOrbit {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }

        @keyframes aboutMoonPulse {
          0%, 100% {
            box-shadow: 0 0 30px rgba(214,180,106,.12);
          }
          50% {
            box-shadow: 0 0 65px rgba(214,180,106,.32);
          }
        }

        @keyframes aboutShine {
          0% { transform: translateX(-180%) skewX(-20deg); }
          100% { transform: translateX(450%) skewX(-20deg); }
        }

        .about-cosmic .about-star {
          animation: aboutFloat 5s ease-in-out infinite;
        }

        .about-cosmic .about-star-delay {
          animation-delay: -2s;
          animation-duration: 6s;
        }

        .about-cosmic .about-star-slow {
          animation-duration: 7s;
        }

        .about-cosmic .about-orbit {
          animation: aboutOrbit 100s linear infinite;
        }

        .about-cosmic .about-orbit-reverse {
          animation: aboutOrbit 75s linear infinite reverse;
        }

        .about-cosmic .about-zodiac {
          animation: aboutOrbit 55s linear infinite;
        }

        .about-cosmic .about-moon {
          animation: aboutMoonPulse 4s ease-in-out infinite;
        }

        .about-cosmic .about-float {
          animation: aboutFloat 5s ease-in-out infinite;
        }

        .about-cosmic .about-float-reverse {
          animation: aboutFloat 6s ease-in-out infinite reverse;
        }

        .about-cosmic .about-value {
          transition:
            transform .35s ease,
            border-color .35s ease,
            background-color .35s ease;
        }

        .about-cosmic .about-value:hover {
          transform: translateX(7px);
          border-color: rgba(214,180,106,.35);
          background: rgba(214,180,106,.025);
        }

        .about-cosmic .about-stat {
          transition: background-color .35s ease;
        }

        .about-cosmic .about-stat:hover {
          background: rgba(214,180,106,.045);
        }

        .about-cosmic .about-cta-shine {
          animation: aboutShine 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .about-cosmic .about-gradient {
          background-size: 200% auto;
          animation: aboutGradient 6s ease-in-out infinite alternate;
        }

        @keyframes aboutGradient {
          from { background-position: 0% center; }
          to { background-position: 100% center; }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-cosmic *,
          .about-cosmic *::before,
          .about-cosmic *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;