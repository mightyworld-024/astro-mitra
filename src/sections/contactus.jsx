import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Star,
} from "lucide-react";

const services = [
  "Kundli Analysis",
  "Love & Relationships",
  "Career & Finance",
  "Birth Chart Reading",
  "Personal Consultation",
  "Other",
];

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL US",
    value: "hello@astromitra.com",
    href: "mailto:hello@astromitra.com",
  },
  {
    icon: Phone,
    label: "CALL US",
    value: "+91 XXXXX XXXXX",
    href: null,
  },
  {
    icon: Clock3,
    label: "AVAILABILITY",
    value: "Monday – Saturday",
    href: null,
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function ContactUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      { threshold: 0.08 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({ type: "", message: "" });

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please complete all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Connect your backend/API here.
      // This placeholder deliberately does not claim to send an email.
      await new Promise((resolve) => setTimeout(resolve, 500));

      setStatus({
        type: "info",
        message:
          "Your details are ready, but message delivery is not configured yet. Please connect a backend or form service before accepting real enquiries.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "contact-input w-full rounded-none border border-white/[0.10] bg-[#090D1A]/80 px-4 py-4 text-sm text-[#F5F0E6] outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-amber-300/60 focus:bg-[#101629] focus:ring-1 focus:ring-amber-300/10";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-section relative isolate overflow-hidden bg-[#080B18] py-24 text-[#F5F0E6] sm:py-28 lg:py-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.10] blur-[130px] contact-glow" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-amber-500/[0.08] blur-[130px] contact-glow contact-glow-delay" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-200/[0.035]" />

      {/* Floating decorations */}
      <span className="contact-star pointer-events-none absolute right-[12%] top-24 text-3xl text-amber-300/40">
        ✧
      </span>

      <span className="contact-star contact-star-delay pointer-events-none absolute bottom-28 left-[7%] text-xl text-amber-200/30">
        ✦
      </span>

      <span className="contact-star contact-star-slow pointer-events-none absolute right-[5%] top-[55%] text-lg text-amber-200/30">
        ✧
      </span>

      <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">
        {/* Heading */}
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
              We Are Here For You
            </span>

            <span className="h-px w-10 bg-amber-300/60" />
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Let&apos;s Begin Your
            <br />

            <span className="contact-gradient mt-2 inline-block bg-gradient-to-r from-amber-200 via-[#E7BC73] to-amber-400 bg-clip-text italic text-transparent">
              Cosmic Conversation.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Have questions about your journey? Share what is on your mind.
            We are here to help you explore your questions with clarity
            and a fresh perspective.
          </p>

          <a
            href="#contact-form"
            className="group mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[2px] text-amber-200/80 transition-colors hover:text-amber-100"
          >
            Start a conversation

            <ArrowDownRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Main layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Left information panel */}
          <div
            className={`contact-panel group/panel relative flex flex-col justify-between overflow-hidden border border-amber-200/15 bg-[#0D1222]/80 p-7 backdrop-blur-xl transition-all duration-1000 sm:p-10 lg:p-12 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-amber-200/[0.10] transition-transform duration-1000 group-hover/panel:rotate-12" />

            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-amber-200/[0.10]" />

            <div className="pointer-events-none absolute bottom-20 right-0 h-48 w-48 rounded-full bg-amber-400/[0.04] blur-[70px]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center border border-amber-200/25 bg-amber-200/[0.05] text-amber-300 transition-all duration-500 group-hover/panel:border-amber-200/50 group-hover/panel:bg-amber-200/[0.10]">
                <MessageCircle size={25} strokeWidth={1.3} />
              </div>

              <p className="mt-8 text-[10px] uppercase tracking-[3px] text-amber-200/70">
                A space for your questions
              </p>

              <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Every question
                <br />
                deserves attention.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                Whether you want to understand your birth chart or explore
                a particular aspect of life, reach out and tell us how we
                can help.
              </p>
            </div>

            {/* Contact details */}
            <div className="relative mt-12 space-y-3">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-amber-200/20 bg-amber-200/[0.04] text-amber-300 transition-all duration-300 group-hover:border-amber-300/60 group-hover:bg-amber-200/[0.08]">
                      <Icon size={19} strokeWidth={1.4} />
                    </span>

                    <span className="min-w-0 flex-1 pt-1">
                      <span className="block text-[10px] uppercase tracking-[2px] text-slate-500">
                        {item.label}
                      </span>

                      <span className="mt-2 block break-words text-sm text-[#F5F0E6] transition-colors group-hover:text-amber-200">
                        {item.value}
                      </span>
                    </span>

                    {item.href && (
                      <ArrowRight
                        size={16}
                        className="mt-3 text-amber-300/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-200"
                      />
                    )}
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{ transitionDelay: `${index * 80}ms` }}
                    className="group flex items-start gap-4 border border-transparent p-3 transition-all duration-300 hover:border-amber-200/10 hover:bg-white/[0.02]"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 border border-transparent p-3"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Bottom note */}
            <div className="relative mt-10 border-t border-white/10 pt-7 sm:mt-12">
              <div className="flex items-center gap-2 text-amber-200/70">
                <Sparkles size={14} />

                <p className="text-[10px] uppercase tracking-[3px]">
                  Your Journey. Your Questions.
                </p>
              </div>

              <p className="mt-3 font-serif text-xl italic text-slate-300">
                Let the conversation begin.
              </p>
            </div>
          </div>

          {/* Right contact form */}
          <div
            id="contact-form"
            className={`contact-panel relative border border-amber-200/15 bg-[#0D1222]/60 p-6 backdrop-blur-xl transition-all delay-150 duration-1000 sm:p-10 lg:p-12 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
          >
            {/* Top accent */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

            <div className="mb-9">
              <div className="flex items-center gap-2 text-amber-300">
                <Star size={13} />

                <p className="text-[10px] uppercase tracking-[3px]">
                  Send Us A Message
                </p>
              </div>

              <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
                Get in Touch
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Fill in the details below and tell us what you would like
                guidance about.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="contact-field">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs text-slate-300"
                  >
                    Full Name <span className="text-amber-300">*</span>
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    maxLength={100}
                    className={inputClasses}
                  />
                </div>

                <div className="contact-field">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs text-slate-300"
                  >
                    Email Address <span className="text-amber-300">*</span>
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    maxLength={254}
                    className={inputClasses}
                  />
                </div>
              </div>

              {/* Phone and service */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="contact-field">
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-xs text-slate-300"
                  >
                    Phone Number
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    maxLength={20}
                    className={inputClasses}
                  />
                </div>

                <div className="contact-field">
                  <label
                    htmlFor="contact-service"
                    className="mb-2 block text-xs text-slate-300"
                  >
                    Interested In
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none`}
                  >
                    <option value="" className="bg-[#0B1020]">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-[#0B1020]"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="contact-field">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs text-slate-300"
                  >
                    Your Message <span className="text-amber-300">*</span>
                  </label>

                  <span className="text-[10px] text-slate-500">
                    {formData.message.length}/2000
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you would like to explore..."
                  required
                  maxLength={2000}
                  className={`${inputClasses} min-h-36 resize-y`}
                />
              </div>

              {/* Form status */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 border p-4 text-sm leading-6 ${
                    status.type === "error"
                      ? "border-red-400/30 bg-red-400/[0.05] text-red-200"
                      : "border-amber-300/25 bg-amber-300/[0.05] text-amber-100"
                  }`}
                >
                  {status.type === "error" ? (
                    <MessageCircle size={18} className="mt-1 shrink-0" />
                  ) : (
                    <CheckCircle2 size={18} className="mt-1 shrink-0" />
                  )}

                  <p>{status.message}</p>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit group relative flex min-h-14 w-full items-center justify-center gap-4 overflow-hidden bg-gradient-to-r from-[#D6B46A] to-[#F1D49A] px-6 text-sm font-semibold text-[#111321] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_35px_rgba(214,180,106,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10">
                  {isSubmitting
                    ? "Preparing Your Message..."
                    : "Send Your Message"}
                </span>

                {!isSubmitting && (
                  <Send
                    size={17}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                )}

                <span className="contact-button-shine pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md" />
              </button>

              <p className="text-center text-[10px] leading-5 text-slate-500">
                Fields marked with * are required. Please avoid including
                sensitive personal information.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom statement */}
        <div
          className={`mt-16 flex flex-col items-center justify-center gap-4 text-center transition-all delay-300 duration-1000 sm:mt-20 sm:flex-row ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <Sparkles size={21} className="text-amber-300" />

          <p className="font-serif text-xl italic text-slate-300 sm:text-2xl">
            Sometimes, a new perspective changes everything.
          </p>

          <Sparkles size={21} className="text-amber-300" />
        </div>
      </div>

      {/* Scoped CSS animations */}
      <style>{`
        @keyframes contactFloat {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -12px, 0);
          }
        }

        @keyframes contactGlow {
          0%, 100% {
            opacity: .4;
          }
          50% {
            opacity: .85;
          }
        }

        @keyframes contactGradient {
          from {
            background-position: 0% center;
          }
          to {
            background-position: 100% center;
          }
        }

        @keyframes contactShine {
          0% {
            transform: translateX(-180%) skewX(-20deg);
          }
          100% {
            transform: translateX(450%) skewX(-20deg);
          }
        }

        .contact-section .contact-star {
          animation: contactFloat 5s ease-in-out infinite;
        }

        .contact-section .contact-star-delay {
          animation-delay: -2s;
          animation-duration: 6s;
        }

        .contact-section .contact-star-slow {
          animation-duration: 7s;
        }

        .contact-section .contact-glow {
          animation: contactGlow 7s ease-in-out infinite;
        }

        .contact-section .contact-glow-delay {
          animation-delay: -3s;
          animation-duration: 9s;
        }

        .contact-section .contact-gradient {
          background-size: 200% auto;
          animation: contactGradient 6s ease-in-out infinite alternate;
        }

        .contact-section .contact-button-shine {
          animation: contactShine 4.5s ease-in-out infinite;
          animation-delay: 1.2s;
        }

        .contact-section .contact-panel {
          box-shadow: 0 20px 80px rgba(0, 0, 0, .12);
        }

        .contact-section .contact-input:focus {
          box-shadow: 0 0 25px rgba(214, 180, 106, .035);
        }

        .contact-section .contact-submit:focus-visible {
          outline: 2px solid #F1D49A;
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-section *,
          .contact-section *::before,
          .contact-section *::after {
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

export default ContactUs;