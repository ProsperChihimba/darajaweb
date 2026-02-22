import Link from "next/link";

const modules = [
  {
    title: "Billing engine",
    description: "Subscriptions, usage tiers, credits, and proration in one model.",
  },
  {
    title: "Revenue hub",
    description: "Unified ledger with rev-rec schedules and approval workflows.",
  },
  {
    title: "Renewal orchestration",
    description: "Account health, expansion signals, and renewal playbooks.",
  },
  {
    title: "Analytics studio",
    description: "Real-time dashboards for finance, product, and sales leaders.",
  },
  {
    title: "Data sync",
    description: "Bidirectional sync with CRM, ERP, and data warehouse tooling.",
  },
  {
    title: "Compliance layer",
    description: "Audit trails, approvals, and access controls built in.",
  },
];

const outcomes = [
  "Launch pricing updates without engineering bottlenecks.",
  "Automate revenue recognition and close in days, not weeks.",
  "Detect expansion signals before renewals hit your CRM.",
];

export default function ProductsPage() {
  return (
    <>
      <section className="section">
        <div className="site-container">
          <p className="eyebrow">Products</p>
          <h1 className="headline">A modular revenue platform.</h1>
          <p className="subhead">
            Build the revenue stack you need today, then expand as your pricing
            and usage mature.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="site-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div key={module.title} className="card">
              <h3 className="text-xl font-semibold">{module.title}</h3>
              <p className="mt-2 text-muted">{module.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="card card-muted grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
            <div>
              <p className="eyebrow">Outcomes</p>
              <h2 className="headline">Designed for revenue velocity.</h2>
              <p className="subhead">
                Cercil replaces fragmented tools with a single workflow engine
                that keeps every team aligned.
              </p>
            </div>
            <ul className="list-check">
              {outcomes.map((item) => (
                <li key={item}>
                  <span>?</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="cta-panel">
            <h2 className="headline text-white">Ready to see the platform?</h2>
            <p className="subhead text-white/80">
              Book a demo to map your revenue workflows into a single system.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link className="btn btn-light" href="/company">
                Book a demo
              </Link>
              <Link className="btn btn-outline" href="/pricing">
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
