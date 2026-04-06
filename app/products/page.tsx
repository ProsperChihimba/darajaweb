import Link from "next/link";

const modules = [
  {
    title: "Expense Requests",
    description:
      "Employees submit expense requests with the who, why, and how much — captured properly from the start.",
  },
  {
    title: "Real-time Approvals",
    description:
      "Admins review and approve in real time, with role-based permissions and configurable spending limits.",
  },
  {
    title: "Mobile Money & Bank Payouts",
    description:
      "Disburse funds directly to mobile money wallets or business bank accounts after approval.",
  },
  {
    title: "Lipa Namba Payouts",
    description:
      "Pay verified mobile money merchant accounts (Lipa Namba) directly — only Daraja makes this possible for businesses.",
  },
  {
    title: "Receipt & Reconciliation",
    description:
      "Receipts are automatically reconciled as proof of fund flow, replacing paper and WhatsApp screenshots.",
  },
  {
    title: "Audit Trail & Reporting",
    description:
      "Every step is logged with full audit trail for compliance, accountability, and TRA-ready records.",
  },
];

const outcomes = [
  "Stop expense leakage from receipt-free, informal transactions.",
  "Save reconciliation time for finance teams every week.",
  "Build TRA-ready records and the financial history needed to access credit.",
];

export default function ProductsPage() {
  return (
    <>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]">
            Product
          </p>
          <h1 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
            One platform for every business payment.
          </h1>
          <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
            From request to payout to reconciliation — Daraja brings every
            piece of business spending into one digital workflow.
          </p>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-[1.25rem] border border-[#e5e5e5] bg-white p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)]"
            >
              <h3 className="text-xl font-semibold">{module.title}</h3>
              <p className="mt-2 text-[#5c5851]">{module.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="rounded-[1.25rem] border border-[#e5e5e5] bg-[#f5f5f4] p-6 shado-[0_16px_40px_-32px_rgba(24,18,10,0.5)] grid gap-8 lg:grid-cols-[1fr_1fr] items-center">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#0a0a0a]">
                Outcomes
              </p>
              <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
                Designed for financial discipline.
              </h2>
              <p className="text-[#5c5851] text-[1.05rem] leading-[1.7] max-w-[42rem]">
                Daraja gives small teams the same control, accountability, and
                compliance that bigger finance functions enjoy.
              </p>
            </div>
            <ul className="grid gap-4">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-[#5c5851]">
                  <span className="mt-1 inline-flex h-[1.1rem] w-[1.1rem] flex-shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-[0.7rem] text-white">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-[4.5rem] lg:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0a0a0a_0%,#171717_55%,#404040_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] after:content-['']">
            <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
              Ready to see Daraja in action?
            </h2>
            <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
              Book a quick demo and we will walk you through how the platform
              fits your business.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-white/85"
                href="/company"
              >
                Book a demo
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
