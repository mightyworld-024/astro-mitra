import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronRight,
  Compass,
  FileText,
  Heart,
  Moon,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Sun,
  X,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Personal Birth Chart",
    category: "Birth Charts",
    price: 799,
    oldPrice: 1199,
    description:
      "Explore your astrological birth chart, planetary placements, and traditional interpretations.",
    icon: Sun,
    badge: "Bestseller",
    delivery: "Digital report",
    color: "from-[#D6B46A]/20 to-[#40212B]/30",
    features: [
      "Birth chart overview",
      "Planetary placements",
      "12 house interpretations",
      "Personalized digital report",
    ],
  },
  {
    id: 2,
    name: "Love Compatibility",
    category: "Relationships",
    price: 999,
    oldPrice: 1499,
    description:
      "Explore traditional astrological compatibility between you and your partner.",
    icon: Heart,
    badge: "Popular",
    delivery: "Digital report",
    color: "from-[#9F5269]/25 to-[#40212B]/40",
    features: [
      "Relationship compatibility",
      "Planetary relationship factors",
      "Traditional chart matching",
      "Personalized report",
    ],
  },
  {
    id: 3,
    name: "Career & Finance Reading",
    category: "Career",
    price: 699,
    oldPrice: 999,
    description:
      "Understand traditional astrological perspectives on career direction and financial themes.",
    icon: Compass,
    badge: null,
    delivery: "Digital report",
    color: "from-[#9C8CC4]/20 to-[#252143]/40",
    features: [
      "Career-related house analysis",
      "Planetary placement overview",
      "Traditional financial themes",
      "Digital interpretation",
    ],
  },
  {
    id: 4,
    name: "Kundli Analysis",
    category: "Birth Charts",
    price: 1299,
    oldPrice: 1799,
    description:
      "A detailed interpretation of your kundli using traditional Vedic astrology concepts.",
    icon: BookOpen,
    badge: "Premium",
    delivery: "Detailed PDF",
    color: "from-[#D6B46A]/20 to-[#6A4828]/30",
    features: [
      "Detailed kundli overview",
      "Nine graha interpretations",
      "Bhava and house analysis",
      "Personalized PDF report",
    ],
  },
  {
    id: 5,
    name: "Nakshatra Report",
    category: "Birth Charts",
    price: 499,
    oldPrice: 799,
    description:
      "Discover the traditional interpretation of your birth nakshatra and its symbolism.",
    icon: Moon,
    badge: null,
    delivery: "Digital report",
    color: "from-[#6C83C6]/20 to-[#202B50]/40",
    features: [
      "Birth nakshatra overview",
      "Traditional symbolism",
      "Personality interpretations",
      "Digital report",
    ],
  },
  {
    id: 6,
    name: "Personal Astrology Reading",
    category: "Consultations",
    price: 1499,
    oldPrice: 1999,
    description:
      "A personalized online session to discuss your questions and explore your birth chart.",
    icon: Sparkles,
    badge: "One-to-one",
    delivery: "Live consultation",
    color: "from-[#D6B46A]/20 to-[#682F3C]/35",
    features: [
      "Personalized online session",
      "Birth chart discussion",
      "Your selected questions",
      "Guidance based on traditional astrology",
    ],
  },
];

const categories = [
  "All Products",
  "Birth Charts",
  "Relationships",
  "Career",
  "Consultations",
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All Products" ||
        product.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existing = currentCart.find((item) => item.id === product.id);

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setSelectedProduct(null);
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const checkout = () => {
    if (!cart.length) return;

    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} x ${item.quantity} - Rs. ${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = [
      "Hi Astro Mitra!",
      "",
      "I would like to enquire about the following products:",
      orderDetails,
      "",
      `Total: Rs. ${cartTotal}`,
      "",
      "Please share the next steps.",
    ].join("\n");

    window.open(
      `https://wa.me/?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080B18] px-5 py-20 text-[#F5F0E6] sm:px-8 sm:py-28 lg:px-12"
    >
      {/* Cosmic background */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#682F3C]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-[#D6B46A]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D6B46A]/30 bg-[#D6B46A]/10 px-4 py-2">
              <Sparkles size={15} className="text-[#D6B46A]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B46A]">
                The Astro Mitra Collection
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Discover Your
              <span className="mt-2 block font-serif italic text-[#D6B46A]">
                Cosmic Story.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#B8B8C7] sm:text-base sm:leading-8">
              Explore personalized astrology reports and consultations
              inspired by traditional Vedic astrology.
            </p>
          </div>

          {/* Cart button */}
          <button
            type="button"
            onClick={() => setShowCart(true)}
            className="group relative flex w-fit items-center gap-3 rounded-xl border border-[#D6B46A]/30 bg-white/[0.03] px-5 py-4 transition hover:border-[#D6B46A] hover:bg-[#D6B46A]/10"
          >
            <ShoppingBag size={19} className="text-[#D6B46A]" />

            <span className="text-sm font-medium">Your Collection</span>

            <ChevronRight
              size={16}
              className="text-[#D6B46A] transition-transform group-hover:translate-x-1"
            />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-[#D6B46A] px-1 text-xs font-bold text-[#080B18]">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Search */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8F90A3]"
            />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search your cosmic journey..."
              aria-label="Search astrology products"
              className="w-full rounded-xl border border-white/10 bg-white/[0.035] py-3.5 pl-12 pr-4 text-sm text-[#F5F0E6] outline-none transition placeholder:text-[#777889] focus:border-[#D6B46A]/60"
            />
          </div>

          <p className="text-sm text-[#9293A5]">
            <span className="text-[#D6B46A]">
              {filteredProducts.length}
            </span>{" "}
            experiences to explore
          </p>
        </div>

        {/* Categories */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-3 text-xs font-medium transition-all duration-300 sm:text-sm ${
                  isActive
                    ? "border-[#D6B46A] bg-[#D6B46A] text-[#080B18]"
                    : "border-white/10 bg-white/[0.025] text-[#B8B8C7] hover:border-[#D6B46A]/50 hover:text-[#D6B46A]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => {
              const Icon = product.icon;

              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-[#D6B46A]/40 hover:bg-white/[0.04]"
                >
                  {/* Product visual */}
                  <div
                    className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${product.color}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,180,106,0.10),transparent_65%)]" />

                    <div className="absolute left-5 top-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F5F0E6]/60">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D6B46A]" />
                      Astro Mitra
                    </div>

                    {product.badge && (
                      <span className="absolute right-4 top-4 rounded-full border border-[#D6B46A]/30 bg-[#080B18]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#D6B46A]">
                        {product.badge}
                      </span>
                    )}

                    {/* Decorative rings */}
                    <div className="absolute h-40 w-40 rounded-full border border-[#D6B46A]/15 transition-transform duration-700 group-hover:scale-110" />

                    <div className="absolute h-32 w-32 rounded-full border border-[#D6B46A]/25 transition-transform duration-700 group-hover:rotate-45" />

                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#D6B46A]/40 bg-[#080B18]/50 shadow-[0_0_50px_rgba(214,180,106,0.12)] transition-transform duration-500 group-hover:scale-110">
                      <Icon
                        size={34}
                        strokeWidth={1.2}
                        className="text-[#D6B46A]"
                      />
                    </div>

                    <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs text-[#F5F0E6]/65">
                      <FileText size={14} />
                      {product.delivery}
                    </div>
                  </div>

                  {/* Product information */}
                  <div className="p-6 sm:p-7">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6B46A]">
                      {product.category}
                    </p>

                    <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-[#D6B46A]">
                      {product.name}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#A6A6B7]">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="mt-5 flex items-center gap-3">
                      <span className="text-2xl font-semibold text-[#F5F0E6]">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>

                      <span className="text-sm text-[#777889] line-through">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>

                      <span className="ml-auto rounded-md bg-[#D6B46A]/10 px-2 py-1 text-[10px] font-semibold text-[#D6B46A]">
                        {Math.round(
                          ((product.oldPrice - product.price) /
                            product.oldPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 grid grid-cols-[1fr_auto] gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        className="rounded-xl border border-[#D6B46A]/35 px-4 py-3.5 text-sm font-medium text-[#D6B46A] transition hover:bg-[#D6B46A]/10"
                      >
                        Explore Details
                      </button>

                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        aria-label={`Add ${product.name} to collection`}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6B46A] text-[#080B18] transition hover:bg-[#E7BC73] hover:shadow-[0_0_25px_rgba(214,180,106,0.18)]"
                      >
                        <ShoppingBag size={19} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-20 text-center">
            <Moon size={34} className="mx-auto text-[#D6B46A]" />

            <h3 className="mt-5 text-xl font-semibold">
              No cosmic matches found
            </h3>

            <p className="mt-3 text-sm text-[#A6A6B7]">
              Try another search or explore a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveCategory("All Products");
                setSearchQuery("");
              }}
              className="mt-6 rounded-xl bg-[#D6B46A] px-5 py-3 text-sm font-semibold text-[#080B18] transition hover:bg-[#E7BC73]"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-[#D6B46A]/20 bg-gradient-to-r from-[#171523] via-[#111524] to-[#20151F] p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full bg-[#D6B46A]/10 blur-[80px]" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-[#D6B46A]">
                <Star size={16} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Your Journey, Your Questions
                </span>
              </div>

              <h3 className="text-2xl font-semibold sm:text-3xl">
                Looking for something more personal?
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#B8B8C7]">
                Connect with Astro Mitra to enquire about a consultation
                tailored to your interests.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#D6B46A] px-6 py-4 text-sm font-semibold text-[#080B18] transition hover:bg-[#E7BC73]"
            >
              Talk to Astro Mitra

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-[#777889]">
          Product descriptions and prices are illustrative. Update them before
          publishing. Astrology is a traditional belief system; interpretations
          should not be treated as guaranteed predictions or professional
          medical, legal, or financial advice.
        </p>
      </div>

      {/* Product details modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            className="relative my-auto w-full max-w-lg rounded-3xl border border-[#D6B46A]/25 bg-[#0D1222] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
              className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-[#B8B8C7] transition hover:text-[#D6B46A]"
            >
              <X size={18} />
            </button>

            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D6B46A]/30 bg-[#D6B46A]/10">
              {(() => {
                const Icon = selectedProduct.icon;

                return (
                  <Icon size={27} className="text-[#D6B46A]" />
                );
              })()}
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B46A]">
              {selectedProduct.category}
            </p>

            <h3
              id="product-modal-title"
              className="mt-3 pr-6 text-2xl font-semibold"
            >
              {selectedProduct.name}
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#B8B8C7]">
              {selectedProduct.description}
            </p>

            <div className="my-6 flex items-center gap-3 border-y border-white/10 py-5">
              <span className="text-3xl font-semibold">
                ₹{selectedProduct.price.toLocaleString("en-IN")}
              </span>

              <span className="text-sm text-[#777889] line-through">
                ₹{selectedProduct.oldPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <h4 className="mb-4 text-sm font-semibold">What's included</h4>

            <ul className="space-y-3">
              {selectedProduct.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-[#D3D1DA]"
                >
                  <Check
                    size={17}
                    className="mt-0.5 shrink-0 text-[#D6B46A]"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => addToCart(selectedProduct)}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#D6B46A] px-5 py-4 text-sm font-semibold text-[#080B18] transition hover:bg-[#E7BC73]"
            >
              <ShoppingBag size={18} />
              Add to Collection
            </button>
          </div>
        </div>
      )}

      {/* Cart drawer */}
      {showCart && (
        <div
          className="fixed inset-0 z-[110] flex justify-end bg-black/70 backdrop-blur-sm"
          onClick={() => setShowCart(false)}
        >
          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            className="flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0D1222] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div>
                <h3 id="cart-title" className="text-xl font-semibold">
                  Your Collection
                </h3>

                <p className="mt-1 text-xs text-[#9293A5]">
                  {cartCount} item{cartCount !== 1 ? "s" : ""}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowCart(false)}
                aria-label="Close collection"
                className="rounded-full border border-white/10 p-2 text-[#B8B8C7] transition hover:text-[#D6B46A]"
              >
                <X size={19} />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag
                    size={42}
                    strokeWidth={1.2}
                    className="text-[#D6B46A]"
                  />

                  <h4 className="mt-5 text-lg font-semibold">
                    Your collection is empty
                  </h4>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#9293A5]">
                    Explore our astrology experiences and add the ones
                    you're interested in.
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowCart(false)}
                    className="mt-6 rounded-xl border border-[#D6B46A]/40 px-5 py-3 text-sm text-[#D6B46A] transition hover:bg-[#D6B46A]/10"
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-sm font-semibold">
                          {item.name}
                        </h4>

                        <p className="mt-2 text-xs text-[#9293A5]">
                          Quantity: {item.quantity}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-[#D6B46A]">
                          ₹
                          {(item.price * item.quantity).toLocaleString(
                            "en-IN"
                          )}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-[#9293A5] transition hover:text-red-400"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-white/10 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm text-[#B8B8C7]">
                    Estimated total
                  </span>

                  <span className="text-2xl font-semibold text-[#D6B46A]">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={checkout}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#D6B46A] px-5 py-4 text-sm font-semibold text-[#080B18] transition hover:bg-[#E7BC73]"
                >
                  Enquire on WhatsApp
                  <ArrowUpRight size={18} />
                </button>

                <p className="mt-3 text-center text-xs leading-5 text-[#777889]">
                  This sends an enquiry; it does not process payment or
                  confirm an order.
                </p>
              </div>
            )}
          </aside>
        </div>
      )}
    </section>
  );
};

export default Products;