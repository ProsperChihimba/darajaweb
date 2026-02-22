import Link from "next/link";

const collections = [
  {
    title: "Revenue operations guides",
    description: "Deep dives on renewal playbooks and usage pricing strategy.",
  },
  {
    title: "Templates & checklists",
    description: "Ready-to-use frameworks for monthly close and expansion.",
  },
  {
    title: "Benchmarks",
    description: "Compare your metrics to peer revenue teams and growth stages.",
  },
];

const highlights = [
  {
    title: "The modern revops blueprint",
    type: "Guide",
    time: "15 min read",
  },
  {
    title: "Usage pricing rollout checklist",
    type: "Checklist",
    time: "Download",
  },
  {
    title: "Renewal health scoring model",
    type: "Template",
    time: "8 min read",
  },
  {
    title: "Q4 revenue forecasting workshop",
    type: "Webinar",
    time: "40 min watch",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="section">
        <div className="site-container">
          <p className="eyebrow">Resources</p>
          <h1 className="headline">Build your revenue playbook.</h1>
          <p className="subhead">
            Practical guides, templates, and benchmarks for modern revenue
            teams.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="site-container grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="card">
            <p className="eyebrow">Highlights</p>
            {highlights.map((item) => (
              <div key={item.title} className="resource-item">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="resource-meta">
                  <span>{item.type}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="cta-panel">
            <h2 className="headline text-white">Need something specific?</h2>
            <p className="subhead text-white/80">
              Our team can point you to the right framework in minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link className="btn btn-light" href="/company">
                Contact us
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
