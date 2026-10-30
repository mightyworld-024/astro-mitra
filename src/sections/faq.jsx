import { useState } from 'react'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      category: 'Getting Started',
      question: 'What is Vedic astrology?',
      answer:
        'Vedic astrology, also known as Jyotish, is a traditional Indian system that interprets the positions of celestial bodies at the time of birth. It uses birth charts, planetary placements, zodiac signs, and nakshatras to offer a framework for personal reflection and understanding.',
    },
    {
      category: 'Consultation',
      question: 'What information do I need for a Kundli analysis?',
      answer:
        'For a traditional birth chart analysis, you generally need your date of birth, birth time, and birthplace. Accurate birth details help determine the planetary positions and ascendant used in the chart. If your birth time is unknown, let your astrologer know.',
    },
    {
      category: 'Consultation',
      question: 'How can an astrology consultation help me?',
      answer:
        'An astrology consultation can help you explore traditional interpretations relating to your personality, relationships, career, and life experiences. It can offer a different perspective, but it should not replace your own judgment or professional advice.',
    },
    {
      category: 'Birth Chart',
      question: 'What is a birth chart or Kundli?',
      answer:
        'A birth chart, commonly called a Kundli in India, is a map of the sky calculated using your date, time, and place of birth. In Vedic astrology, it is interpreted through planetary positions, houses, zodiac signs, and nakshatras.',
    },
    {
      category: 'Relationships',
      question: 'Can astrology help me understand relationships?',
      answer:
        'Astrology traditionally examines relationship compatibility through birth charts and planetary placements. These interpretations can be a starting point for reflection, but healthy relationships depend on communication, mutual respect, trust, and individual choices.',
    },
    {
      category: 'Career',
      question: 'Can astrology predict my career and financial future?',
      answer:
        'Some astrological traditions interpret birth charts in relation to career and finances. However, astrology cannot reliably guarantee future outcomes. Use these interpretations as personal reflection rather than a substitute for practical planning or qualified financial advice.',
    },
    {
      category: 'Booking',
      question: 'How do I book a personal consultation?',
      answer:
        'You can reach out through our contact form and tell us which consultation you are interested in. Our team can then guide you through the next steps. Booking availability and consultation details should be confirmed directly with Astro Mitra.',
    },
    {
      category: 'Privacy',
      question: 'Is my personal birth information private?',
      answer:
        'Your birth details should be handled respectfully and securely. Before submitting personal information, review the website’s privacy policy to understand how your data is collected, used, stored, and protected. Avoid sharing sensitive information that is not necessary for your consultation.',
    },
  ]

  const categories = [
    'All Questions',
    'Getting Started',
    'Consultation',
    'Birth Chart',
    'Relationships',
    'Career',
    'Booking',
    'Privacy',
  ]

  const [selectedCategory, setSelectedCategory] = useState('All Questions')

  const filteredFaqs =
    selectedCategory === 'All Questions'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory)

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index))
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    setActiveIndex(0)
  }

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-[#0B1020] py-24 text-[#F5F0E6] sm:py-28 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-indigo-500/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-amber-500/[0.06] blur-[130px]" />

      {/* Decorative Stars */}
      <span className="pointer-events-none absolute right-[12%] top-24 text-3xl text-amber-300/40">
        ✧
      </span>

      <span className="pointer-events-none absolute left-[8%] top-[45%] text-xl text-amber-200/30">
        ✦
      </span>

      <div className="mx-auto max-w-[1450px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-amber-300/60" />

            <span className="text-[10px] font-medium uppercase tracking-[4px] text-amber-200 sm:text-xs">
              Frequently Asked Questions
            </span>

            <span className="h-px w-10 bg-amber-300/60" />
          </div>

          <h2 className="font-serif text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Curious About
            <br />

            <span className="bg-gradient-to-r from-amber-200 via-[#E7BC73] to-amber-400 bg-clip-text italic text-transparent">
              Your Cosmic Journey?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Find answers to common questions about Vedic astrology,
            birth charts, consultations, and how Astro Mitra can help
            you explore a new perspective.
          </p>
        </div>

        {/* FAQ Layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          {/* Left Panel */}
          <div className="lg:sticky lg:top-28">

            <div className="relative overflow-hidden border border-amber-200/20 bg-[#0D1222] p-7 sm:p-9">

              {/* Decorative Orbit */}
              <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full border border-amber-200/10" />

              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-amber-200/10" />

              <span className="relative text-4xl text-amber-300">
                ✧
              </span>

              <p className="relative mt-6 text-[10px] uppercase tracking-[3px] text-amber-200">
                A Little Guidance
              </p>

              <h3 className="relative mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Every question
                <br />
                deserves clarity.
              </h3>

              <p className="relative mt-5 text-sm leading-7 text-slate-400">
                Exploring astrology for the first time? Start here.
                We have gathered helpful answers to make your journey
                easier to understand.
              </p>

              <a
                href="#contact"
                className="group relative mt-7 inline-flex min-h-12 items-center gap-4 border border-amber-200/30 px-5 text-sm text-amber-200 transition-all duration-300 hover:border-amber-300 hover:bg-amber-200/[0.05]"
              >
                Still Have Questions?

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <div className="relative mt-8 border-t border-white/10 pt-6">
                <p className="text-xs leading-6 text-slate-500">
                  Looking for something specific? Choose a category
                  below to find the answers most relevant to you.
                </p>
              </div>

            </div>

            {/* Category Filters */}
            <div className="mt-7">
              <p className="mb-4 text-[10px] uppercase tracking-[3px] text-slate-500">
                Browse By Topic
              </p>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    aria-pressed={selectedCategory === category}
                    className={`border px-3 py-2 text-xs transition-all duration-300 ${
                      selectedCategory === category
                        ? 'border-amber-300/60 bg-amber-200/10 text-amber-200'
                        : 'border-white/10 text-slate-400 hover:border-amber-200/30 hover:text-amber-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Accordion */}
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-amber-200/20 pb-5">
              <p className="font-serif text-xl sm:text-2xl">
                Your Questions, Answered
              </p>

              <span className="text-xs text-amber-300">
                {filteredFaqs.length.toString().padStart(2, '0')} QUESTIONS
              </span>
            </div>

            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = activeIndex === index

                return (
                  <div
                    key={faq.question}
                    className={`border transition-all duration-300 ${
                      isOpen
                        ? 'border-amber-200/30 bg-[#10172A]'
                        : 'border-white/[0.08] bg-[#0D1222]/60 hover:border-amber-200/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                    >
                      <span
                        className={`hidden shrink-0 font-serif text-sm sm:block ${
                          isOpen ? 'text-amber-300' : 'text-slate-600'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`flex-1 font-serif text-base leading-7 sm:text-lg ${
                          isOpen ? 'text-amber-100' : 'text-[#F5F0E6]'
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border text-lg transition-all duration-300 ${
                          isOpen
                            ? 'rotate-45 border-amber-300/50 text-amber-300'
                            : 'border-white/10 text-slate-400'
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen
                          ? 'grid-rows-[1fr]'
                          : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-6 sm:px-6 sm:pb-7">
                          <div className="mb-4 h-px w-12 bg-amber-300/40" />

                          <p className="text-sm leading-7 text-slate-400 sm:pl-9 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                )
              })}
            </div>

            {filteredFaqs.length === 0 && (
              <p className="py-10 text-center text-sm text-slate-400">
                No questions found in this category.
              </p>
            )}

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border border-amber-200/15 bg-gradient-to-r from-[#11172A] via-[#15182A] to-[#101526] px-6 py-10 text-center sm:mt-24 sm:px-10 sm:py-14">

          <span className="text-3xl text-amber-300">✧</span>

          <h3 className="mt-5 font-serif text-3xl sm:text-4xl">
            Your Question Not Here?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
            We would be happy to hear from you. Get in touch and tell
            us what you would like to know.
          </p>

          <a
            href="#contact"
            className="group mt-7 inline-flex min-h-14 items-center justify-center gap-4 bg-gradient-to-r from-[#D6B46A] to-[#F1D49A] px-7 text-sm font-semibold text-[#111321] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(214,180,106,0.15)]"
          >
            Contact Astro Mitra

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

        {/* Disclaimer */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
          Astrological interpretations reflect traditional beliefs and
          should be used for personal reflection, not as guaranteed
          predictions or a substitute for professional advice.
        </p>

      </div>
    </section>
  )
}

export default FAQ
