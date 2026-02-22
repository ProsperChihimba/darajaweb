import Link from "next/link";

const values = [
  {
    title: "Revenue clarity",
    description:
      "Every team should see the same numbers, updated in real time.",
  },
  {
    title: "Customer trust",
    description:
      "Billing experiences must be transparent, accurate, and stress-free.",
  },
  {
    title: "Operational focus",
    description:
      "Automations replace manual work so teams can focus on growth.",
  },
];

const leaders = [
  { name: "Maya Chen", role: "CEO & Co-founder" },
  { name: "Diego Patel", role: "CTO & Co-founder" },
  { name: "Samira Holt", role: "VP Revenue Operations" },
];

export default function CompanyPage() {
  return (
    <>
      <section className="section">
        <div className="site-container">
          <p className="eyebrow">Company</p>
          <h1 className="headline">We build revenue systems teams can trust.</h1>
          <p className="subhead">
            Cercil helps modern revenue teams operate with clarity, confidence,
            and speed.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="site-container grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="card">
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="card card-muted">
            <p className="eyebrow">Leadership</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {leaders.map((leader) => (
                <div key={leader.name} className="card">
                  <p className="text-lg font-semibold">{leader.name}</p>
                  <p className="text-muted">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="cta-panel">
            <h2 className="headline text-white">Join the Cercil community.</h2>
            <p className="subhead text-white/80">
              Talk with our team about careers, partnerships, or product updates.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link className="btn btn-light" href="/company">
                Contact us
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
