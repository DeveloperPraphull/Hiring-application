import { Check, Send, Download, Wallet, ArrowLeftRight, Zap, Shield, HeadphonesIcon } from "lucide-react";
import { useInView } from "../hooks/use-in-view";

interface PlanProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  delay: number;
  isInView: boolean;
}

function PlanCard({ name, price, period, description, features, highlighted, delay, isInView }: PlanProps) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 transition-all duration-700 ${
        highlighted
          ? "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-2xl shadow-red-500/30 scale-105 z-10"
          : "bg-white text-gray-900 shadow-lg border border-gray-100 hover:shadow-xl"
      }`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.95)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-gray-900 uppercase tracking-wider shadow-md">
          Most Popular
        </span>
      )}
      <h3 className={`text-xl font-bold ${highlighted ? "text-white" : "text-gray-900"}`}>{name}</h3>
      <p className={`mt-2 text-sm ${highlighted ? "text-red-100" : "text-gray-500"}`}>{description}</p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className={`text-sm font-medium ${highlighted ? "text-red-200" : "text-gray-400"}`}>/{period}</span>
      </div>

      <ul className="mt-8 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check className={`h-5 w-5 shrink-0 mt-0.5 ${highlighted ? "text-yellow-300" : "text-red-500"}`} />
            <span className={`text-sm leading-snug ${highlighted ? "text-white/90" : "text-gray-600"}`}>{f}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300 ${
          highlighted
            ? "bg-white text-red-600 hover:bg-gray-100 shadow-lg"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for personal use and small transactions.",
    features: [
      "Send up to $1,000/month",
      "Receive unlimited payments",
      "3 currency wallets",
      "Basic exchange rates",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "month",
    description: "For professionals who need more power and flexibility.",
    highlighted: true,
    features: [
      "Send up to $25,000/month",
      "Receive unlimited payments",
      "Unlimited currency wallets",
      "Premium exchange rates",
      "Priority 24/7 support",
      "Instant transfers",
      "Advanced analytics",
    ],
  },
  {
    name: "Business",
    price: "$29.99",
    period: "month",
    description: "Built for teams and growing businesses.",
    features: [
      "Unlimited transfers",
      "Team accounts (up to 10)",
      "API access & integrations",
      "Dedicated account manager",
      "Custom exchange rates",
      "Compliance & audit reports",
    ],
  },
];

const highlights = [
  { icon: <Zap className="h-6 w-6" />, title: "Instant Transfers", desc: "Money arrives in seconds, not days." },
  { icon: <Shield className="h-6 w-6" />, title: "Bank-Grade Security", desc: "256-bit encryption on every transaction." },
  { icon: <HeadphonesIcon className="h-6 w-6" />, title: "24/7 Support", desc: "Real humans, always available." },
];

const productFees = [
  { icon: <Send className="h-5 w-5" />, name: "Send Money", starter: "2.5%", pro: "1.0%", business: "0.5%" },
  { icon: <Download className="h-5 w-5" />, name: "Receive Payments", starter: "Free", pro: "Free", business: "Free" },
  { icon: <Wallet className="h-5 w-5" />, name: "Wallet Top-Up", starter: "1.5%", pro: "0.5%", business: "Free" },
  { icon: <ArrowLeftRight className="h-5 w-5" />, name: "Currency Exchange", starter: "+1.2%", pro: "+0.4%", business: "+0.1%" },
];

export default function ProductsPricing() {
  const { ref: plansRef, isInView: plansInView } = useInView({ threshold: 0.15 });
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5 });
  const { ref: tableRef, isInView: tableInView } = useInView({ threshold: 0.2 });
  const { ref: highlightsRef, isInView: highlightsInView } = useInView({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-red-500 blur-[120px]" />
          <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-blue-500 blur-[100px]" />
        </div>

        <div ref={headerRef} className="relative mx-auto max-w-4xl px-6 text-center">
          <span
            className="inline-block rounded-full bg-red-500/20 px-4 py-1.5 text-xs font-semibold text-red-400 uppercase tracking-widest mb-6 transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(20px)" }}
          >
            Pricing
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "100ms" }}
          >
            Simple, transparent <br className="hidden sm:block" />
            <span className="text-red-500">pricing</span> for everyone
          </h1>
          <p
            className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-700"
            style={{ opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "200ms" }}
          >
            Whether you're sending money to family or managing global business payments, we have a plan that fits.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section ref={plansRef} className="-mt-16 relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} {...plan} delay={i * 150} isInView={plansInView} />
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section ref={highlightsRef} className="py-20 mx-auto max-w-5xl px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="flex items-start gap-4 transition-all duration-700"
              style={{
                opacity: highlightsInView ? 1 : 0,
                transform: highlightsInView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
                {h.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{h.title}</h4>
                <p className="mt-1 text-sm text-gray-500">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fee Comparison Table */}
      <section ref={tableRef} className="pb-24 mx-auto max-w-4xl px-6">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10 transition-all duration-700"
          style={{ opacity: tableInView ? 1 : 0, transform: tableInView ? "translateY(0)" : "translateY(20px)" }}
        >
          Product Fee Comparison
        </h2>

        <div
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-700"
          style={{ opacity: tableInView ? 1 : 0, transform: tableInView ? "translateY(0)" : "translateY(30px)", transitionDelay: "150ms" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-500 uppercase text-xs tracking-wider">
                <th className="py-4 px-6">Product</th>
                <th className="py-4 px-4 text-center">Starter</th>
                <th className="py-4 px-4 text-center bg-red-50 text-red-600">Pro</th>
                <th className="py-4 px-4 text-center">Business</th>
              </tr>
            </thead>
            <tbody>
              {productFees.map((row, i) => (
                <tr key={row.name} className={`border-t border-gray-100 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                  <td className="py-4 px-6 font-medium text-gray-900 flex items-center gap-3">
                    <span className="text-gray-400">{row.icon}</span>
                    {row.name}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.starter}</td>
                  <td className="py-4 px-4 text-center bg-red-50/50 font-semibold text-red-600">{row.pro}</td>
                  <td className="py-4 px-4 text-center text-gray-600">{row.business}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-500 to-red-600 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to get started?</h2>
          <p className="mt-4 text-red-100 text-lg">Join millions of users who trust Jeton for their payments.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-xl bg-white px-8 py-3 text-sm font-semibold text-red-600 shadow-lg hover:bg-gray-100 transition">
              Start Free
            </button>
            <button className="rounded-xl border-2 border-white/40 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
