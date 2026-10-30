import { useState } from "react";
import {
  Check,
  Sparkles,
  Star,
  Crown,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Cosmic Clarity",
    subtitle: "A little guidance for your journey",
    price: "499",
    duration: "20 minutes",
    icon: Sparkles,
    popular: false,
    description:
      "Get clarity on the questions that have been on your mind.",
    features: [
      "Personal astrology consultation",
      "Answers to 2 key questions",
      "Basic planetary insights",
      "Career or relationship guidance",
      "Online consultation",
    ],
    button: "Choose Cosmic Clarity",
  },
  {
    id: 2,
    name: "Life Blueprint",
    subtitle: "Understand your cosmic roadmap",
    price: "999",
    duration: "45 minutes",
    icon: Star,
    popular: true,
    description:
      "Explore your birth chart and discover traditional astrological perspectives on your life.",
    features: [
      "Detailed birth chart discussion",
      "Career and financial insights",
      "Love and relationship guidance",
      "Planetary placements overview",
      "Personalized question session",
      "Practical next-step suggestions",
    ],
    button: "Choose Life Blueprint",
  },
  {
    id: 3,
    name: "Cosmic Premium",
    subtitle: "A deeper, more personal session",
    price: "1,999",
    duration: "75 minutes",
    icon: Crown,
    popular: false,
    description:
      "A comprehensive consultation covering multiple areas of your life.",
    features: [
      "In-depth birth chart analysis",
      "Career and life direction",
      "Relationship compatibility discussion",
      "Dasha and transit interpretation",
      "Multiple personalized questions",
      "Follow-up guidance for 7 days",
    ],
    button: "Choose Cosmic Premium",
  },
];

const Package = () => {
  const [selectedPackage, setSelectedPackage] = useState("Life Blueprint");

  const handleBooking = (plan) => {
    setSelectedPackage(plan.name);

    const message = `Hi Astro Mitra! I'm interested in the ${plan.name} package priced at ₹${plan.price}. Please share the booking details.`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="packages"
      className="relative overflow-hidden bg-[#080B18] px-5 py-20 text-[#F5F0E6] sm:px-8 sm:py-28 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#D6B46A]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#682F3C]/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D6B46A]/30 bg-[#D6B46A]/10 px-4 py-2">
            <Sparkles size={15} className="text-[#D6B46A]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D6B46A]">
              Personalized Guidance
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Choose Your Path
            <span className="mt-2 block font-serif italic text-[#D6B46A]">
              to Cosmic Clarity
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#B8B8C7] sm:text-base sm:leading-8">
            Every journey is different. Choose a consultation designed around
            your questions, your birth chart, and the guidance you're looking
            for.
          </p>
        </div>

        {/* Packages */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
          {packages.map((plan) => {
            const Icon = plan.icon;
            const isSelected = selectedPackage === plan.name;

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 sm:p-8 ${
                  plan.popular
                    ? "border-[#D6B46A]/80 bg-gradient-to-b from-[#1B1A24] via-[#111524] to-[#0D1222] shadow-[0_0_50px_rgba(214,180,106,0.09)] lg:scale-[1.03]"
                    : "border-white/10 bg-white/[0.025] hover:border-[#D6B46A]/40 hover:bg-white/[0.045]"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#D6B46A] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#080B18] shadow-lg sm:text-xs">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      plan.popular
                        ? "bg-[#D6B46A] text-[#080B18]"
                        : "border border-[#D6B46A]/25 bg-[#D6B46A]/10 text-[#D6B46A]"
                    }`}
                  >
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  {plan.popular && (
                    <span className="flex items-center gap-1 text-xs text-[#D6B46A]">
                      <Star size={13} fill="currentColor" />
                      Recommended
                    </span>
                  )}
                </div>

                {/* Plan details */}
                <h3 className="text-2xl font-semibold tracking-tight">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-[#A6A6B7]">
                  {plan.subtitle}
                </p>

                <p className="mt-5 min-h-12 text-sm leading-6 text-[#B8B8C7]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="my-7 border-y border-white/10 py-6">
                  <div className="flex items-end gap-1">
                    <span className="mb-1 text-lg text-[#D6B46A]">₹</span>
                    <span className="text-5xl font-semibold tracking-tight">
                      {plan.price}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm text-[#A6A6B7]">
                    <Clock size={15} className="text-[#D6B46A]" />
                    {plan.duration} session
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 flex-1">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D6B46A]">
                    What's Included
                  </p>

                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-5 text-[#D3D1DA]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D6B46A]/10 text-[#D6B46A]">
                          <Check size={12} strokeWidth={2.5} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => handleBooking(plan)}
                  className={`group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#D6B46A] text-[#080B18] hover:bg-[#E7BC73] hover:shadow-[0_0_25px_rgba(214,180,106,0.2)]"
                      : "border border-[#D6B46A]/40 text-[#D6B46A] hover:bg-[#D6B46A] hover:text-[#080B18]"
                  }`}
                >
                  {plan.button}
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                {isSelected && (
                  <p className="mt-3 text-center text-[10px] text-[#8E8E9F]">
                    Selected package
                  </p>
                )}
              </article>
            );
          })}
        </div>

        {/* Trust note */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
          <div className="flex items-center gap-2 text-sm text-[#B8B8C7]">
            <ShieldCheck size={17} className="text-[#D6B46A]" />
            Personalized consultation
          </div>

          <span className="hidden text-white/20 sm:block">•</span>

          <div className="flex items-center gap-2 text-sm text-[#B8B8C7]">
            <Zap size={16} className="text-[#D6B46A]" />
            Online booking enquiry
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-6 text-[#777889]">
          These prices and package details are sample website content. Update
          them to match your actual services. Astrology is a traditional belief
          system and should not replace professional medical, legal, or
          financial advice.
        </p>
      </div>
    </section>
  );
};

export default Package;