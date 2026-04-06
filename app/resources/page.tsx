import Link from "next/link";

const collections = [
  {
    title: "Expense management guides",
    description:
      "Practical playbooks on expense control, accountability, and reducing leakage.",
  },
  {
    title: "Templates & checklists",
    description:
      "Ready-to-use frameworks for setting up approval flows and monthly reconciliation.",
  },
  {
    title: "Compliance resources",
    description:
      "Understand TRA-ready documentation and what proper records look like for SMEs.",
  },
];

const highlights = [
  {
    title: "The SME expense control playbook",
    type: "Guide",
    time: "12 min read",
  },
  {
    title: "Setting up approval flows for a 10-person team",
    type: "Checklist",
    time: "Download",
  },
  {
    title: "Lipa Namba payouts: what businesses need to know",
    type: "Article",
    time: "6 min read",
  },
  {
    title: "Building TRA-ready records from day one",
    type: "Guide",
    time: "10 min read",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]">
            Resources
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            Practical guides for growing businesses.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            Articles, templates, and resources to help SMEs and startups
            tighten financial control without slowing the team down.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.25rem] border border-[#e5e5e5] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-[#5c5851]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="rounded-[1.25rem] border border-[#e5e5e5] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]">
              Highlights
            </p>
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 border-b border-[#e5e5e5] py-5 last:border-b-0"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="flex gap-4 text-[0.85rem] text-[#5c5851]">
                  <span>{item.type}</span>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0a0a0a_0%,#171717_55%,#404040_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Need help getting started?
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              Our team can show you how Daraja fits your specific business in
              just a short call.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-white/85"
                href="/company"
              >
                Contact us
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
                href="/pricing"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
