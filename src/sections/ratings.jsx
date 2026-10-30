import { useEffect, useRef, useState } from "react";
import {
  Star,
  Quote,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Heart,
  ShieldCheck,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "New Delhi, India",
    initials: "PS",
    rating: 5,
    service: "Personal Birth Chart",
    date: "Recent Client",
    review:
      "The consultation gave me a fresh perspective on my strengths and the questions I had about my career. Everything was explained in a calm and easy-to-understand way.",
    color: "from-[#D6B46A]/30 to-[#682F3C]/30",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai, India",
    initials: "RM",
    rating: 5,
    service: "Career Reading",
    date: "Recent Client",
    review:
      "I appreciated how the session focused on my questions. The explanations were detailed, and I came away with things to reflect on while considering my career options.",
    color: "from-[#7D83C8]/30 to-[#252143]/40",
  },
  {
    id: 3,
    name: "Ananya Verma",
    location: "Chandigarh, India",
    initials: "AV",
    rating: 5,
    service: "Love Compatibility",
    date: "Recent Client",
    review:
      "The compatibility report was thoughtfully presented and easy to follow. I liked learning about traditional astrological interpretations and discussing different perspectives.",
    color: "from-[#B76E86]/30 to-[#40212B]/40",
  },
  {
    id: 4,
    name: "Arjun Kapoor",
    location: "Jaipur, India",
    initials: "AK",
    rating: 5,
    service: "Kundli Analysis",
    date: "Recent Client",
    review:
      "The kundli explanation was structured and informative. I could ask questions comfortably, and the session helped me understand the concepts behind my chart.",
    color: "from-[#C99A98]/25 to-[#6A4828]/35",
  },
];

const ratingBreakdown = [
  { stars: 5, percentage: 88 },
  { stars: 4, percentage: 9 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0 },
];

const StarRating = ({ rating = 5, size = 16 }) => (
  <div
    className="flex items-center gap-1"
    aria-label={`${rating} out of 5 stars`}
  >
    {Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={size}
        fill={index < rating ? "currentColor" : "none"}
        className={
          index < rating ? "text-[#D6B46A]" : "text-white/20"
        }
      />
    ))}
  </div>
);

const Ratings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const previousReview = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const nextReview = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const activeReview = testimonials[activeIndex];

  return (
    <section
      id="ratings"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080B18] px-5 py-20 text-[#F5F0E6] sm:px-8 sm:py-28 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#682F3C]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D6B46A]/10 blur-[140px]" />

      {/* Decorative stars */}
      <div className="pointer-events-none absolute left-[12%] top-32 text-[#D6B46A]/40">
        <Sparkles size={22} />
      </div>

      <div className="pointer-events-none absolute right-[15%] top-52 text-[#D6B46A]/30">
        <Star size={16} />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D6B46A]/30 bg-[#D6B46A]/10 px-4 py-2">
            <Heart size={15} className="text-[#D6B46A]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D6B46A]">
              Words From Our Community
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Stories Written
            <span className="mt-2 block font-serif italic text-[#D6B46A]">
              Under the Stars.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#B8B8C7] sm:text-base sm:leading-8">
            Every person's journey is unique. Explore the experiences people
            share about their astrology consultations and birth chart readings.
          </p>
        </div>

        {/* Rating summary */}
        <div
          className={`mb-14 grid gap-8 rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-700 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Overall rating */}
          <div className="flex flex-col items-center justify-center text-center lg:border-r lg:border-white/10 lg:py-3 lg:pr-10">
            <div className="flex items-center gap-2">
              <Sparkles size={19} className="text-[#D6B46A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B46A]">
                Client Feedback
              </span>
            </div>

            <div className="mt-5 text-6xl font-semibold tracking-tight sm:text-7xl">
              5.0
            </div>

            <div className="mt-4">
              <StarRating rating={5} size={21} />
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#A6A6B7]">
              A sample rating display for your future verified customer reviews.
            </p>
          </div>

          {/* Rating distribution */}
          <div className="mx-auto w-full max-w-xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                Rating Overview
              </h3>

              <span className="text-xs text-[#777889]">
                Illustrative data
              </span>
            </div>

            <div className="space-y-4">
              {ratingBreakdown.map((item) => (
                <div
                  key={item.stars}
                  className="flex items-center gap-3"
                >
                  <span className="w-12 shrink-0 text-sm text-[#B8B8C7]">
                    {item.stars} star
                  </span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.07]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#B8954D] to-[#E7BC73] transition-all duration-1000"
                      style={{
                        width: isVisible ? `${item.percentage}%` : "0%",
                        transitionDelay: `${(5 - item.stars) * 100}ms`,
                      }}
                    />
                  </div>

                  <span className="w-10 text-right text-xs text-[#9293A5]">
                    {item.percentage}%
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-[#D6B46A]/15 bg-[#D6B46A]/[0.05] p-4">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-[#D6B46A]"
              />

              <p className="text-xs leading-6 text-[#A6A6B7]">
                Replace these sample figures with ratings collected from
                genuine customers before publishing your website.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left text */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#D6B46A]">
              A Personal Perspective
            </p>

            <h3 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Every question
              <span className="mt-1 block font-serif italic text-[#D6B46A]">
                deserves a moment.
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#A6A6B7]">
              Astrology can offer a traditional framework for reflection.
              Our aim is to make each conversation welcoming, understandable,
              and centered around your questions.
            </p>

            {/* Navigation */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={previousReview}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-[#D6B46A] transition hover:border-[#D6B46A] hover:bg-[#D6B46A]/10"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={nextReview}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D6B46A]/40 bg-[#D6B46A] text-[#080B18] transition hover:bg-[#E7BC73]"
              >
                <ArrowRight size={19} />
              </button>

              <span className="ml-2 text-sm text-[#9293A5]">
                <span className="text-[#F5F0E6]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                {" / "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            {/* Pagination dots */}
            <div className="mt-6 flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-10 bg-[#D6B46A]"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Featured review card */}
          <div
            key={activeReview.id}
            className="relative overflow-hidden rounded-3xl border border-[#D6B46A]/20 bg-gradient-to-br from-[#171827] via-[#101424] to-[#17111E] p-7 transition-all duration-500 sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#D6B46A]/10" />

            <div className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full border border-[#D6B46A]/10" />

            <Quote
              size={48}
              strokeWidth={1}
              className="mb-7 text-[#D6B46A]/60"
            />

            <div className="flex flex-wrap items-center justify-between gap-4">
              <StarRating rating={activeReview.rating} size={17} />

              <span className="rounded-full border border-[#D6B46A]/20 bg-[#D6B46A]/[0.07] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#D6B46A]">
                {activeReview.service}
              </span>
            </div>

            <blockquote className="mt-7 text-lg leading-8 text-[#E6E2DD] sm:text-xl sm:leading-9">
              “{activeReview.review}”
            </blockquote>

            <div className="mt-9 border-t border-white/10 pt-7">
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D6B46A]/25 bg-gradient-to-br ${activeReview.color} text-sm font-semibold text-[#F5F0E6]`}
                >
                  {activeReview.initials}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {activeReview.name}
                  </h4>

                  <p className="mt-1 text-xs text-[#9293A5]">
                    {activeReview.location}
                  </p>
                </div>

                <div className="ml-auto hidden items-center gap-2 text-xs text-[#9293A5] sm:flex">
                  <MessageCircle size={15} className="text-[#D6B46A]" />
                  {activeReview.date}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-[#A6A6B7]">
            Ready to begin your own journey?
          </p>

          <a
            href="#consultation"
            className="group mt-5 inline-flex items-center gap-3 rounded-xl bg-[#D6B46A] px-7 py-4 text-sm font-semibold text-[#080B18] transition hover:bg-[#E7BC73]"
          >
            Explore Your Consultation

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ratings;