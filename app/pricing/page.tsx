import Link from "next/link";

const plans = [
  {
    name: "Launch",
    price: "$1,200",
    description: "Perfect for teams validating a new pricing model.",
    features: [
      "Up to 3 products",
      "Usage event ingestion",
      "Basic invoicing",
      "Email support",
    ],
  },
  {
    name: "Scale",
    price: "$3,800",
    description: "For growing revenue teams that need automation.",
    features: [
      "Unlimited products",
      "Hybrid billing engine",
      "Renewal workflows",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced governance, compliance, and global entities.",
    features: [
      "Multi-entity billing",
      "Rev-rec automation",
      "Dedicated success team",
      "Custom SLAs",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="section">
        <div className="site-container">
          <p className="eyebrow">Pricing</p>
          <h1 className="headline">Pricing that scales with usage.</h1>
          <p className="subhead">
            Transparent plans for every stage, with usage-based flexibility built
            in.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="site-container grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card ${plan.featured ? "card-featured" : ""}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.featured ? <span className="tag">Most popular</span> : null}
              </div>
              <p className="price mt-4">{plan.price}</p>
              <p className="text-muted">{plan.description}</p>
              <ul className="list-dash">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Link className="btn btn-primary" href="/company">
                  Talk to sales
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="cta-panel">
            <h2 className="headline text-white">Need a custom plan?</h2>
            <p className="subhead text-white/80">
              We will tailor pricing based on usage volume and billing
              complexity.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link className="btn btn-light" href="/company">
                Request pricing
              </Link>
              <Link className="btn btn-outline" href="/resources">
                Download benchmarks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
