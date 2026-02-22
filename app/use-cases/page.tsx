import Link from "next/link";

const cases = [
  {
    title: "Hybrid subscription + usage",
    description:
      "Blend base subscriptions with metered usage without manual calculations.",
    outcome: "Automated invoicing for every tier.",
  },
  {
    title: "Enterprise renewals",
    description:
      "Keep renewals on track with real-time health scores and stakeholder alerts.",
    outcome: "18-day average renewal cycle.",
  },
  {
    title: "Product-led expansion",
    description:
      "Surface expansion signals from product telemetry and feed CRM workflows.",
    outcome: "+12% net retention lift.",
  },
  {
    title: "Multi-entity finance",
    description:
      "Consolidate billing across regions, currencies, and entities.",
    outcome: "Single ledger across global teams.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section className="section">
        <div className="site-container">
          <p className="eyebrow">Use cases</p>
          <h1 className="headline">Every revenue motion covered.</h1>
          <p className="subhead">
            From usage-based pricing to enterprise renewals, Cercil keeps every
            workflow connected.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="site-container grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.description}</p>
              <p className="mt-4 font-semibold text-accent">
                {item.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="cta-panel">
            <h2 className="headline text-white">Want a tailored walkthrough?</h2>
            <p className="subhead text-white/80">
              We will map your revenue workflows and identify quick wins.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link className="btn btn-light" href="/company">
                Schedule a call
              </Link>
              <Link className="btn btn-outline" href="/resources">
                Explore resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

