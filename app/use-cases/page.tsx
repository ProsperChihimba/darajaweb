import Link from "next/link";

const cases = [
  {
    title: "Tanzanian startups",
    description:
      "Move beyond founder-only spending. Set up approval flows, give your team a way to submit expenses, and keep proper records as you grow.",
    outcome: "Stronger control without slowing the team down.",
  },
  {
    title: "Growing SMEs",
    description:
      "Replace spreadsheets, paper receipts, and consumer mobile money with a single workflow built for businesses with 2 to 50 employees.",
    outcome: "Less leakage, faster reconciliation.",
  },
  {
    title: "Foreign companies in Tanzania",
    description:
      "Run local operations and manage business spending in-country without the friction of mixing personal and corporate finances.",
    outcome: "Local compliance with global-standard controls.",
  },
  {
    title: "Finance teams that need TRA-ready records",
    description:
      "Generate digital records that support TRA-compliant documentation by default — every payment captured, categorised, and reconciled.",
    outcome: "Audit-ready from day one.",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]">
            Use cases
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            Built for the businesses that bigger tools forgot.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            From early-stage startups to growing SMEs and foreign companies
            operating in Tanzania, Daraja keeps everyday business spending
            controlled, traceable, and compliance-ready.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 md:grid-cols-2">
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.25rem] border border-[#e5e5e5] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-[#5c5851]">{item.description}</p>
              <p className="mt-4 font-semibold text-[#0a0a0a]">
                {item.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0a0a0a_0%,#171717_55%,#404040_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Want a walkthrough for your business?
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              We will map your current expense workflow and show you exactly
              where Daraja can help.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-white/85"
                href="/company"
              >
                Schedule a call
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                href="/resources"
              >
                Explore resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
