import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Award,
  CheckCircle,
  CreditCard,
  Leaf,
  PackageCheck,
  Phone,
  RefreshCw,
  Shield,
  Star,
  Timer,
  Truck,
} from "lucide-react";
import { useCountdown } from "../hooks/useCountdown";
import { useOrderForm } from "../hooks/useOrderForm";
import { ORIGINAL_PRICE, PRICE_PER_UNIT } from "../types";

const PRICES: Record<number, number> = { 1: 2490, 2: 3500 };

function scrollToOrder() {
  document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

// ─── Section: Hero ───────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-10 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div className="animate-slide-up">
          <span className="badge-urgency mb-3 inline-block animate-fade-in">
            🔥 50% OFF — TODAY ONLY
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground leading-tight mb-2">
            Cordycep <span className="text-primary">Pulse</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-display font-bold text-secondary mb-3 leading-snug">
            जोड़ों के दर्द से मिले
            <br className="sm:hidden" /> स्थायी राहत
          </p>
          <p className="text-muted-foreground text-sm sm:text-base mb-4 font-body">
            100% Ayurvedic &nbsp;|&nbsp; No Side Effects &nbsp;|&nbsp; Trusted
            by&nbsp;
            <strong className="text-foreground">50,000+ Customers</strong>
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex text-star">
              {["s1", "s2", "s3", "s4", "s5"].map((k) => (
                <Star key={k} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-foreground text-sm">4.8/5</span>
            <span className="text-muted-foreground text-xs">
              (12,400+ reviews)
            </span>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-muted-foreground line-through text-xl">
              ₹{ORIGINAL_PRICE}
            </span>
            <span className="font-display font-bold text-4xl text-primary">
              ₹{PRICE_PER_UNIT}
            </span>
            <Badge className="bg-destructive text-destructive-foreground text-xs font-bold px-2">
              50% OFF
            </Badge>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="gradient-urgent text-primary-foreground font-bold text-base border-0 h-14 px-8 pulse-highlight hover:opacity-90 transition-smooth shadow-glow-primary"
              onClick={scrollToOrder}
              data-ocid="hero-order-cta"
            >
              अभी ऑर्डर करें — Order Now
            </Button>
          </div>
        </div>

        {/* Product Visual */}
        <div
          className="flex justify-center animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl gradient-trust flex items-center justify-center shadow-glow-secondary p-3">
              <img
                src="/assets/images/product.png"
                alt="Cordycep Pulse – 100% Ayurvedic Joint Pain Relief"
                className="w-full h-full object-contain drop-shadow-2xl rounded-xl"
              />
            </div>
            {/* floating badges */}
            <div className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-14 h-14 flex items-center justify-center text-xs font-bold text-center leading-tight shadow-lg">
              50%
              <br />
              OFF
            </div>
            <div className="absolute -bottom-2 -left-2 bg-card border border-border rounded-lg px-3 py-1 text-xs font-bold text-secondary shadow-subtle">
              ₹{PRICE_PER_UNIT} only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Countdown Timer ────────────────────────────────────────────────
function CountdownSection() {
  const { hours, minutes, seconds } = useCountdown();
  return (
    <section className="bg-destructive/10 border-y border-destructive/20 py-5 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Timer className="w-5 h-5 text-destructive" />
          <span className="font-display font-bold text-destructive text-lg uppercase tracking-wide">
            Offer Ends In:
          </span>
        </div>
        <div
          className="flex items-center justify-center gap-2 sm:gap-4 mb-3"
          data-ocid="countdown-timer"
        >
          {[
            { label: "Hours", val: pad(hours) },
            { label: "Mins", val: pad(minutes) },
            { label: "Secs", val: pad(seconds) },
          ].map(({ label, val }, i) => (
            <div key={label}>
              <div className="flex items-center gap-2 sm:gap-4">
                {i > 0 && (
                  <span className="text-destructive font-bold text-3xl">:</span>
                )}
                <div className="bg-destructive text-destructive-foreground rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center shadow-lg">
                  <span className="font-display font-bold text-2xl sm:text-3xl leading-none">
                    {val}
                  </span>
                  <span className="text-xs opacity-80">{label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-destructive font-bold text-sm animate-pulse">
          ⚠️ Limited Stock Available — Only a few bottles left!
        </p>
      </div>
    </section>
  );
}

// ─── Section: Ingredients ────────────────────────────────────────────────────
const INGREDIENTS = [
  {
    name: "Shallaki (Boswellia)",
    benefit: "Powerful anti-inflammatory action",
    emoji: "🌿",
  },
  {
    name: "Ashwagandha",
    benefit: "Strengthens joints and muscles",
    emoji: "🌱",
  },
  { name: "Nirgundi", benefit: "Fast-acting pain relief", emoji: "🍃" },
  {
    name: "Methi (Fenugreek)",
    benefit: "Builds bone health and density",
    emoji: "🌾",
  },
  { name: "Suranjaan", benefit: "Targeted arthritis relief", emoji: "🌺" },
  { name: "Giloy", benefit: "Boosts immunity and joint health", emoji: "🍀" },
];

function IngredientsSection() {
  return (
    <section className="bg-secondary/10 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-3xl text-center text-foreground mb-2">
          100% <span className="text-secondary">Natural Ingredients</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-8">
          Carefully selected Ayurvedic herbs — pure, potent, and proven
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {INGREDIENTS.map(({ name, benefit, emoji }) => (
            <div
              key={name}
              className="bg-card rounded-xl p-4 border border-secondary/20 hover:border-secondary/50 hover:shadow-subtle transition-smooth"
            >
              <div className="text-3xl mb-2">{emoji}</div>
              <div className="font-display font-bold text-secondary text-sm mb-1">
                {name}
              </div>
              <div className="text-muted-foreground text-xs">{benefit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConditionsSection() {
  return <section className="bg-background py-12 px-4" />;
}

// ─── Section: Testimonials ───────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Ramesh Kumar",
    age: 58,
    city: "Delhi",
    text: "3 hafte mein ghutne ka dard bilkul khatam ho gaya. Bahut acha product hai!",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Sunita Devi",
    age: 62,
    city: "Mumbai",
    text: "Main 10 saal se joint pain se pareshaan thi. Cordycep Pulse ne mujhe naya jeevan diya.",
    rating: 5,
    initials: "SD",
  },
  {
    name: "Mahesh Sharma",
    age: 45,
    city: "Jaipur",
    text: "Back pain aur cervical dono theek ho gaye. 100% genuine ayurvedic product.",
    rating: 5,
    initials: "MS",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-secondary/10 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-bold text-3xl text-center text-foreground mb-2">
          Real Results, <span className="text-secondary">Real People</span>
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-8">
          Join 50,000+ happy customers across India
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ name, age, city, text, initials }) => (
            <div
              key={name}
              className="bg-card rounded-xl p-5 border border-border shadow-subtle hover:shadow-glow-secondary transition-smooth"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full gradient-trust flex items-center justify-center font-bold text-secondary-foreground text-sm shrink-0">
                  {initials}
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm">
                    {name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    Age {age}, {city}
                  </div>
                </div>
              </div>
              <div className="flex text-star mb-2">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-foreground/80 text-sm italic">"{text}"</p>
              <div className="mt-3 flex items-center gap-1 text-xs text-secondary font-bold">
                <CheckCircle className="w-3 h-3" />
                Verified Purchase
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Order Success ───────────────────────────────────────────────────
interface OrderSuccessProps {
  name: string;
  phone: string;
  quantity: number;
  totalPrice: number;
  orderId: string;
  onReset: () => void;
}

function OrderSuccess({
  name,
  phone,
  quantity,
  totalPrice,
  orderId,
  onReset,
}: OrderSuccessProps) {
  return (
    <div
      className="bg-background rounded-2xl border-2 border-secondary p-6 sm:p-8 text-center shadow-glow-secondary animate-fade-in"
      data-ocid="order-success-panel"
    >
      {/* Checkmark icon */}
      <div className="flex justify-center mb-5">
        <div className="w-20 h-20 rounded-full bg-secondary/15 border-4 border-secondary flex items-center justify-center shadow-glow-secondary">
          <PackageCheck className="w-10 h-10 text-secondary" />
        </div>
      </div>

      {/* Hindi headline */}
      <h3 className="font-display font-black text-2xl sm:text-3xl text-secondary leading-tight mb-1">
        🎉 आपका ऑर्डर सफलतापूर्वक दर्ज हो गया है!
      </h3>
      {/* English headline */}
      <p className="font-display font-bold text-lg text-foreground mb-4">
        Your order has been placed successfully!
      </p>

      {/* Order details card */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4 mb-5 text-left space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-bold">Name / नाम</span>
          <span className="text-foreground font-bold">{name}</span>
        </div>
        <div className="border-t border-secondary/20" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-bold">Phone / फोन</span>
          <span className="text-foreground font-bold">{phone}</span>
        </div>
        <div className="border-t border-secondary/20" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-bold">
            Quantity / मात्रा
          </span>
          <span className="text-foreground font-bold">
            {quantity} {quantity === 1 ? "Bottle" : "Bottles"}
          </span>
        </div>
        <div className="border-t border-secondary/20" />
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground font-bold text-sm">
            Total / कुल राशि
          </span>
          <span className="font-display font-black text-2xl text-primary">
            ₹{totalPrice.toLocaleString("en-IN")}
          </span>
        </div>
        <div className="border-t border-secondary/20" />
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground font-bold">Order ID</span>
          <span className="text-primary font-bold">{orderId}</span>
        </div>
      </div>

      {/* Sub-messages */}
      <div className="space-y-2 mb-6">
        <p className="text-foreground font-bold text-sm">
          हमारी टीम जल्द ही आपसे संपर्क करेगी।
        </p>
        <p className="text-muted-foreground text-sm">
          Our team will contact you within 24 hours to confirm your order.
        </p>
        <div className="flex items-center justify-center gap-2 text-secondary text-xs font-bold mt-1">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span>
            आपका विवरण सुरक्षित रूप से सहेजा गया है — Details saved &amp; delivery
            confirmed in 3–5 days
          </span>
        </div>
      </div>

      {/* COD reminder */}
      <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-3 mb-6 text-sm text-foreground font-bold">
        💵 Cash on Delivery — भुगतान डिलीवरी पर करें
        <p className="text-muted-foreground font-normal text-xs mt-0.5">
          Get 10% Extra discount on online payment
        </p>
      </div>

      {/* Reset button */}
      <Button
        variant="outline"
        className="w-full h-12 font-bold border-2 border-secondary text-secondary hover:bg-secondary/10 transition-smooth"
        onClick={onReset}
        data-ocid="place-another-order-btn"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Place Another Order / दूसरा ऑर्डर करें
      </Button>
    </div>
  );
}

// ─── Section: Order Form ─────────────────────────────────────────────────────
function OrderFormSection() {
  const { form, onSubmit, isSubmitting, isSuccess, snapshot, resetToForm } =
    useOrderForm();
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = form;

  const quantity = watch("quantity") as number;
  const totalPrice = PRICES[quantity] ?? PRICE_PER_UNIT;
  const inputClass =
    "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-smooth";
  const errorClass = "text-destructive text-xs mt-1";
  const labelClass = "block text-foreground font-bold text-sm mb-1";

  return (
    <section
      id="order-form"
      className="order-form-highlight py-14 px-4 relative overflow-hidden"
    >
      {/* Decorative background circles */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 w-64 h-64 rounded-full opacity-20"
        style={{ background: "oklch(0.72 0.2 35)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-20"
        style={{ background: "oklch(0.63 0.22 35)" }}
      />

      <div className="max-w-lg mx-auto relative z-10">
        {/* Eye-catching top label */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg order-form-label">
            🔥 सबसे बड़ा ऑफर — आज ही समाप्त!
          </span>
        </div>

        <div className="text-center mb-6">
          <Badge className="badge-urgency mb-3 text-sm px-4 py-1.5">
            🎯 Limited Time — 50% OFF
          </Badge>
          <h2 className="font-display font-bold text-4xl text-foreground leading-tight">
            अभी ऑर्डर करें और{" "}
            <span className="text-primary underline decoration-wavy decoration-primary/60">
              50% छूट पाएं
            </span>
          </h2>
          <p className="text-muted-foreground text-sm mt-2 font-bold">
            💳 Cash on Delivery — No advance payment required
          </p>
          {/* Price highlight row */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-muted-foreground line-through text-lg">
              ₹4,980
            </span>
            <span className="font-display font-black text-5xl text-primary">
              ₹2,490
            </span>
            <span className="bg-destructive text-destructive-foreground rounded-full text-xs font-black px-2.5 py-1 shadow">
              50% OFF
            </span>
          </div>
        </div>

        {/* ── Success panel replaces form ── */}
        {isSuccess && snapshot ? (
          <OrderSuccess
            name={snapshot.name}
            phone={snapshot.phone}
            quantity={snapshot.quantity}
            totalPrice={snapshot.totalPrice}
            orderId={snapshot.orderId}
            onReset={resetToForm}
          />
        ) : (
          <form
            onSubmit={onSubmit}
            className="space-y-4 bg-background rounded-2xl p-5 border border-border shadow-subtle"
            data-ocid="order-form-container"
            noValidate
          >
            {/* Name */}
            <div>
              <label htmlFor="field-name" className={labelClass}>
                Full Name *
              </label>
              <input
                id="field-name"
                {...register("name", { required: "Full name is required" })}
                className={inputClass}
                placeholder="Ramesh Kumar"
                data-ocid="input-name"
              />
              {errors.name && (
                <p className={errorClass}>{errors.name.message}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="field-phone" className={labelClass}>
                Mobile Number *
              </label>
              <input
                id="field-phone"
                {...register("phone", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[6-9]\d{9}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
                className={inputClass}
                placeholder="9876543210"
                type="tel"
                maxLength={10}
                data-ocid="input-phone"
              />
              {errors.phone && (
                <p className={errorClass}>{errors.phone.message}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="field-address" className={labelClass}>
                Full Address *
              </label>
              <textarea
                id="field-address"
                {...register("address", { required: "Address is required" })}
                className={`${inputClass} resize-none`}
                placeholder="House No, Street, Area..."
                rows={2}
                data-ocid="input-address"
              />
              {errors.address && (
                <p className={errorClass}>{errors.address.message}</p>
              )}
            </div>

            {/* Pincode */}
            <div>
              <label htmlFor="field-pincode" className={labelClass}>
                Pincode *
              </label>
              <input
                id="field-pincode"
                {...register("pincode", {
                  required: "Pincode is required",
                  pattern: {
                    value: /^\d{6}$/,
                    message: "Enter a valid 6-digit pincode",
                  },
                })}
                className={inputClass}
                placeholder="110001"
                maxLength={6}
                data-ocid="input-pincode"
              />
              {errors.pincode && (
                <p className={errorClass}>{errors.pincode.message}</p>
              )}
            </div>

            {/* Quantity selector */}
            <div>
              <span className={labelClass}>Select Quantity</span>
              <div
                className="grid grid-cols-2 gap-2"
                data-ocid="quantity-selector"
              >
                {([1, 2] as const).map((q) => (
                  <button
                    type="button"
                    key={q}
                    onClick={() => setValue("quantity", q)}
                    className={`rounded-xl border-2 p-3 text-center transition-smooth cursor-pointer ${
                      quantity === q
                        ? "border-primary bg-primary/10 shadow-glow-primary"
                        : "border-border bg-background hover:border-primary/40"
                    }`}
                    data-ocid={`qty-btn-${q}`}
                  >
                    <div className="font-display font-bold text-foreground text-sm">
                      {q} {q === 1 ? "Bottle" : "Bottles"}
                    </div>
                    <div className="text-primary font-bold text-base">
                      ₹{PRICES[q]}
                    </div>
                    {q === 2 && (
                      <div className="text-xs text-secondary font-bold mt-0.5">
                        Best Value!
                      </div>
                    )}
                  </button>
                ))}
              </div>
              <p className="text-muted-foreground text-xs mt-2 text-right">
                Total:{" "}
                <strong className="text-primary text-sm">₹{totalPrice}</strong>
              </p>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-urgent text-primary-foreground font-bold text-lg border-0 h-14 rounded-xl pulse-highlight hover:opacity-90 transition-smooth shadow-glow-primary"
              data-ocid="submit-order-btn"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin w-4 h-4 border-2 border-primary-foreground/50 border-t-primary-foreground rounded-full" />
                  Processing...
                </span>
              ) : (
                "Place Order — Cash on Delivery"
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Section: Trust Badges ────────────────────────────────────────────────────
const TRUST_BADGES = [
  { icon: Leaf, label: "100% Ayurvedic" },
  { icon: Award, label: "GMP Certified" },
  { icon: Shield, label: "AYUSH Approved" },
  { icon: Truck, label: "Free Shipping" },
  { icon: CreditCard, label: "COD Available" },
  { icon: RefreshCw, label: "30-Day Money Back" },
];

function TrustBadgesSection() {
  return (
    <section className="bg-muted/30 border-y border-border py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {TRUST_BADGES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-1.5"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground font-bold text-xs leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Footer CTA ──────────────────────────────────────────────────────
function FooterCTASection() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="bg-card border-t pt-10 pb-6 px-4"
      data-ocid="page-footer"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full gradient-trust flex items-center justify-center">
            <Leaf className="w-4 h-4 text-secondary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Cordycep Pulse
          </span>
        </div>
        <p className="text-muted-foreground text-xs max-w-xl mx-auto mb-4 leading-relaxed">
          These statements have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure,
          or prevent any disease. Results may vary individual to individual.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap text-sm mb-4">
          <a
            href="mailto:care@cordyceppulse.com"
            className="flex items-center gap-1 text-primary hover:underline transition-colors"
          >
            <Phone className="w-3 h-3" />
            care@cordyceppulse.com
          </a>
          <span className="text-border">|</span>
          <a
            href="tel:18001234567"
            className="flex items-center gap-1 text-primary hover:underline transition-colors"
          >
            <Phone className="w-3 h-3" />
            1800-123-4567
          </a>
        </div>
        <Button
          className="gradient-urgent text-primary-foreground font-bold border-0 mb-6 hover:opacity-90 transition-smooth"
          onClick={scrollToOrder}
          data-ocid="footer-order-cta"
        >
          Order Now — ₹2490 Only
        </Button>
        <div className="border-t border-border pt-4 text-muted-foreground/60 text-xs">
          © {currentYear} Cordycep Pulse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <CountdownSection />
      <OrderFormSection />
      <IngredientsSection />
      <ConditionsSection />
      <TestimonialsSection />
      <TrustBadgesSection />
      <FooterCTASection />
    </div>
  );
}
