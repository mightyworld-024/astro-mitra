import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Compass,
  BookOpen,
  MessageCircle,
  Clock,
  Star,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    id: "01",
    icon: BookOpen,
    title: "Personalized Readings",
    description:
      "Every birth chart is unique. Our consultations are designed around your individual questions, interests, and astrological details.",
    tag: "Made for You",
  },
  {
    id: "02",
    icon: HeartHandshake,
    title: "A Human Approach",
    description:
      "Explore your questions in a welcoming, judgment-free conversation where your concerns are heard and respected.",
    tag: "People First",
  },
  {
    id: "03",
    icon: Compass,
    title: "Traditional Wisdom",
    description:
      "Discover the concepts of Vedic astrology, planetary placements, zodiac signs, and nakshatras through thoughtful explanations.",
    tag: "Rooted in Tradition",
  },
  {
    id: "04",
    icon: ShieldCheck,
    title: "Privacy Matters",
    description:
      "Your personal details deserve care. We aim to handle consultation information respectfully and transparently.",
    tag: "Respect & Care",
  },
  {
    id: "05",
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Astrological concepts can feel complicated. We focus on making explanations approachable, understandable, and relevant to your questions.",
    tag: "Easy to Understand",
  },
  {
    id: "06",
    icon: Clock,
    title: "Convenient Consultations",
    description:
      "Explore online consultation options that fit your schedule, without needing to travel to a physical location.",
    tag: "Your Time, Your Way",
  },
];

const principles = [
  "Guidance tailored to your questions",
  "Clear explanations of traditional concepts",
  "Respectful and confidential conversations",
  "Space to reflect and make your own decisions",
];

const WhyUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080B18] px-5 py-20 text-[#F5F0E6] sm:px-8 sm:py-28 lg:px-12"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#682F3C]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#D6B46A]/10 blur-[140px]" />

      {/* Decorative stars */}
      <div className="pointer-events-none absolute left-[12%] top-28 text-[#D6B46A]/40">
        <Sparkles size={20} />
      </div>

      <div className="pointer-events-none absolute right-[15%] top-44 text-[#D6B46A]/30">
        <Star size={15} />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div
          className={`mx-auto mb-16 max-w-3xl text-center transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D6B46A]/30 bg-[#D6B46A]/10 px-4 py-2">
            <Sparkles size={15} className="text-[#D6B46A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D6B46A]">
              The Astro Mitra Difference
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            More Than
            <span className="mt-2 block font-serif italic text-[#D6B46A]">
              Just Astrology.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#B8B8C7] sm:text-base sm:leading-8">
            Your questions deserve thoughtful attention. We bring traditional
            astrological concepts and a personal approach together to create a
            more meaningful consultation experience.
          </p>
        </div>

        {/* Main feature layout */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.id}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] p-7 transition-all duration-700 hover:-translate-y-2 hover:border-[#D6B46A]/40 hover:bg-white/[0.045] sm:p-8 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D6B46A]/0 blur-[60px] transition-all duration-500 group-hover:bg-[#D6B46A]/10" />

                {/* Number */}
                <div className="relative mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D6B46A]/25 bg-[#D6B46A]/[0.08] transition-all duration-300 group-hover:border-[#D6B46A]/60 group-hover:bg-[#D6B46A]/15">
                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      className="text-[#D6B46A] transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <span className="font-serif text-3xl text-white/[0.09] transition-colors duration-300 group-hover:text-[#D6B46A]/40">
                    {reason.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#D6B46A]">
                  {reason.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-[#A6A6B7]">
                  {reason.description}
                </p>

                {/* Bottom tag */}
                <div className="relative mt-7 flex items-center gap-2 border-t border-white/[0.08] pt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D6B46A]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#D6B46A]/80">
                    {reason.tag}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Brand philosophy */}
        <div className="mt-16 grid overflow-hidden rounded-3xl border border-[#D6B46A]/20 bg-gradient-to-br from-[#171827] via-[#101424] to-[#20151F] lg:grid-cols-2">
          {/* Left panel */}
          <div className="relative flex min-h-[360px] flex-col justify-center overflow-hidden p-8 sm:p-12 lg:p-14">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#D6B46A]/10" />

            <div className="pointer-events-none absolute -right-6 -top-6 h-44 w-44 rounded-full border border-[#D6B46A]/10" />

            <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#D6B46A]/35 bg-[#D6B46A]/10">
              <Sparkles size={27} className="text-[#D6B46A]" />
            </div>

            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-[#D6B46A]">
              Our Philosophy
            </p>

            <h3 className="relative mt-4 max-w-lg text-3xl font-semibold leading-tight sm:text-4xl">
              The stars may inspire.
              <span className="mt-2 block font-serif italic text-[#D6B46A]">
                Your choices shape your journey.
              </span>
            </h3>

            <p className="relative mt-5 max-w-lg text-sm leading-7 text-[#B8B8C7]">
              We believe astrology is best approached as a traditional tool for
              reflection. Our goal is to help you explore perspectives while
              keeping your own judgment, values, and choices at the center.
            </p>
          </div>

          {/* Right panel */}
          <div className="flex flex-col justify-center border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
            <h4 className="text-xl font-semibold">
              What you can expect
            </h4>

            <p className="mt-3 text-sm leading-7 text-[#9293A5]">
              A thoughtful experience focused on clarity, understanding,
              and your individual interests.
            </p>

            <div className="mt-8 space-y-5">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#D6B46A]"
                  />

                  <p className="text-sm leading-6 text-[#D3D1DA]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#consultation"
              className="group mt-9 inline-flex w-fit items-center gap-3 rounded-xl bg-[#D6B46A] px-6 py-4 text-sm font-semibold text-[#080B18] transition-all duration-300 hover:bg-[#E7BC73] hover:shadow-[0_0_30px_rgba(214,180,106,0.15)]"
            >
              Begin Your Journey

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Closing note */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <ShieldCheck
            size={17}
            className="shrink-0 text-[#D6B46A]"
          />

          <p className="max-w-2xl text-xs leading-6 text-[#777889]">
            Astrology is a traditional belief system, not a scientifically
            established method of predicting outcomes. Our consultations are
            intended for personal reflection and should not replace
            professional advice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
// const WhyUs = () => {
//   return (
//     <section className="min-h-screen bg-[#080B18] p-10 text-white">
//       <h1 className="text-4xl">Why Choose Astro Mitra?</h1>
//       <p className="mt-4 text-gray-300">
//         Testing Astro Mitra section...
//       </p>
//     </section>
//   );
// };

// export default WhyUs;