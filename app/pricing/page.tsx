import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "1%",
    description:
      "For small teams just moving off spreadsheets and consumer mobile money.",
    features: [
      "Up to 5 users",
      "Expense requests & approvals",
      "Mobile money & bank payouts",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "2%",
    description:
      "For growing SMEs that need stronger controls and faster reconciliation.",
    features: [
      "Unlimited users",
      "Lipa Namba payouts",
      "Role-based approval flows",
      "Audit trail & spend reports",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "3%",
    description:
      "For established businesses with higher transaction volumes and stricter compliance needs.",
    features: [
      "Custom approval workflows",
      "Multi-team spend visibility",
      "Dedicated account manager",
      "TRA-ready reporting",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]">
            Pricing
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            Simple, transaction-based pricing.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            No large upfront subscriptions. Daraja charges a small percentage
            on each transaction processed — from 1% to 3% depending on size.
            You only pay as your business uses the platform.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[1.25rem] border bg-white p-6 ${
                plan.featured
                  ? "border-[#0a0a0a] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)]"
                  : "border-[#e5e5e5] shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.featured ? (
                  <span className="inline-flex items-center rounded-full bg-[#0a0a0a] px-2.5 py-1 text-[0.75rem] font-semibold text-white">
                    Most popular
                  </span>
                ) : null}
              </div>
              <p className="mt-4 font-[var(--font-display)] text-[2.4rem] font-semibold">
                {plan.price}
                <span className="text-base text-[#5c5851] font-normal">
                  {" "}
                  per transaction
                </span>
              </p>
              <p className="text-[#5c5851]">{plan.description}</p>
              <ul className="mt-4 grid gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="relative pl-5 text-[#5c5851] before:absolute before:left-0 before:top-[0.55rem] before:h-[2px] before:w-2.5 before:bg-[#0a0a0a]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-[#0a0a0a] px-6 py-3 text-sm font-semibold text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.5)] transition-all duration-200 hover:-translate-y-px hover:bg-[#262626]"
                  href="/company"
                >
                  Talk to us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0a0a0a_0%,#171717_55%,#404040_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Higher transaction volumes?
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              We will work with you on a custom rate that matches the size and
              frequency of your business payments.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-white/85"
                href="/company"
              >
                Request custom pricing
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                href="/resources"
              >
                Read the guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
