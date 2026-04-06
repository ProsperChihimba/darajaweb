import Link from "next/link";

const values = [
  {
    title: "Built for businesses",
    description:
      "We treat business spending as business spending — separate from personal, and properly documented from day one.",
  },
  {
    title: "Control without friction",
    description:
      "Strong financial discipline should not slow small teams down. Our workflows fit how SMEs actually operate.",
  },
  {
    title: "Compliance by default",
    description:
      "Every transaction generates the records businesses need to stay TRA-compliant and audit-ready.",
  },
];

const leaders = [
  { name: "Founder & CEO", role: "Daraja (Pesa Tech)" },
  { name: "CTO", role: "Daraja (Pesa Tech)" },
  { name: "Operations Lead", role: "Daraja (Pesa Tech)" },
];

export default function CompanyPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]">
            Company
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            Helping SMEs spend with control and confidence.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            Daraja is built by Pesa Tech to give small and growing businesses
            in Tanzania the kind of expense management tools that bigger
            companies have always enjoyed — simpler, more relevant, and easier
            to use.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-[1.25rem] border border-[#e5e5e5] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <h3 className="text-xl font-semibold">{value.title}</h3>
              <p className="mt-2 text-[#5c5851]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="rounded-[1.25rem] border border-[#e5e5e5] bg-[#f5f5f4] p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]">
              Team
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {leaders.map((leader) => (
                <div
                  key={leader.name}
                  className="rounded-[1.25rem] border border-[#e5e5e5] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
                >
                  <p className="text-lg font-semibold">{leader.name}</p>
                  <p className="text-[#5c5851]">{leader.role}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[#5c5851]">
              We are a small but committed team — currently bootstrapped and
              fully covered by the revenue we generate from real customers.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0a0a0a_0%,#171717_55%,#404040_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Partner with Daraja.
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              Whether you are a startup hub, an SME association, or a foreign
              company expanding into Tanzania — we would love to talk.
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
