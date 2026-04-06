import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRightArrowLeft,
  FaRegFileLines,
  FaCheck,
  FaShieldHalved,
} from "react-icons/fa6";

const partners = [
  { src: "/assets/images/medikea.png", alt: "Medikea" },
  { src: "/assets/images/swahilies.png", alt: "Swahilies" },
  { src: "/assets/images/tembo.png", alt: "Tembo" },
  { src: "/assets/images/malipopay.svg", alt: "MalipoPay" },
  { src: "/assets/images/selcom.png", alt: "Selcom" },
];

const expenseTags = [
  "Expense Requests",
  "Real-time Approvals",
  "Receipt Capture",
  "Audit Trail",
  "Role-based Access",
];

const payoutTags = [
  "Mobile Money Payouts",
  "Bank Transfers",
  "Lipa Namba (Merchant)",
  "Auto Reconciliation",
];

const platformTags = [
  "Spend Reports",
  "Role-Based Permissions",
  "Full Visibility",
];

export default function IntoSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <p className="text-center text-sm text-[#5a5a5a]">
          Trusted by SMEs and startups across Tanzania
        </p>
        <div className="mt-6 sm:hidden">
          <div className="overflow-hidden">
            <div className="flex w-max items-center gap-6 animate-[partner-marquee_18s_linear_infinite] motion-reduce:animate-none">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.src}-${index}`}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={120}
                    height={40}
                    className="h-10 w-auto max-w-[140px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 hidden grid-cols-2 items-center gap-6 text-center sm:grid sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <div key={partner.src} className="flex items-center justify-center">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={140}
                height={40}
                className="h-10 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-center max-w-2xl tracking-tighter max-[900px]:leading-6 leading-9 lg:my-24 mx-auto text-[clamp(1.9rem,3.4vw,2.6rem)] max-[900px]:text-[1.4rem] font-bold text-[#2c2c2c]">
          The Expense Management Platform Built for Growing Businesses
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="grid gap-4 rounded-2xl bg-[#f5f5f4] transition-colors duration-200 hover:bg-[#ededeb] p-7 max-[900px]:p-5">
            <div>
              <h3 className="text-xl font-bold">Expense Management</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#565656]">
                Employees submit expense requests, admins review and approve in
                real time — every transaction logged with a full audit trail.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl ">
              <Image
                src="/assets/images/image3.webp"
                alt="Expense management overview"
                width={860}
                height={480}
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {expenseTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-[#e5e5e5] bg-white px-3 py-1 text-xs text-[#404040]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="grid gap-4 rounded-2xl bg-[#f5f5f4] transition-colors duration-200 hover:bg-[#ededeb] p-7 max-[900px]:p-5">
            <div>
              <h3 className="text-xl font-bold">Payouts &amp; Reconciliation</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#565656]">
                Disburse approved funds directly to mobile money, bank
                accounts, or merchant accounts (Lipa Namba). Receipts are
                automatically reconciled as proof of fund flow.
              </p>
            </div>

            {/* ── Payout Processing component ── */}
            <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]">
              {/* Top status bar */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/60 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[12px] font-medium text-slate-600">
                    Processing Transfer
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  ID: TXN-99281A
                </span>
              </div>

              {/* Main flow area */}
              <div className="px-5 py-6">
                <div className="relative flex items-center justify-between gap-3">
                  {/* FROM */}
                  <div className="z-10 flex w-[30%] flex-col items-start">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
                      <Image
                        src="/assets/images/swahilies-mark.png"
                        alt="Swahilies"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      From
                    </p>
                    <h4 className="text-[13px] font-bold text-slate-900">
                      Swahilies Inc
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Operations Wallet
                    </p>
                  </div>

                  {/* Flow line + amount */}
                  <div className="relative flex flex-1 items-center justify-center">
                    <div
                      className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full opacity-40"
                      style={{
                        background:
                          "linear-gradient(90deg, #E2E8F0 0%, #10B981 50%, #E2E8F0 100%)",
                        backgroundSize: "200% auto",
                        animation: "flow-shift 2s linear infinite",
                      }}
                    />
                    <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-1.5 shadow-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <FaArrowRightArrowLeft className="h-2.5 w-2.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] font-bold uppercase leading-none tracking-widest text-emerald-600">
                          Amount
                        </span>
                        <span className="text-[13px] font-bold leading-tight text-slate-900">
                          TZS 450,000
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* TO */}
                  <div className="z-10 flex w-[30%] flex-col items-end">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                      <Image
                        src="/assets/images/tanzanite.png"
                        alt="Tanzanite Properties"
                        width={48}
                        height={48}
                        className="h-full w-full object-contain p-1"
                      />
                    </div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      To Merchant
                    </p>
                    <h4 className="text-[13px] font-bold text-slate-900">
                      Tanzanite Properties
                    </h4>
                    <p className="font-mono text-[11px] text-slate-500">
                      Lipa Namba 1234567
                    </p>
                  </div>
                </div>
              </div>

              {/* Transaction details grid */}
              <div className="grid grid-cols-2 gap-4 border-t border-slate-100 bg-slate-50 px-5 py-4 sm:grid-cols-4">
                {[
                  { label: "Date", value: "Apr 06, 2026" },
                  { label: "Time", value: "14:30 EAT" },
                  { label: "Fee", value: "TZS 0.00" },
                  { label: "Network", value: "Selcom Pay" },
                ].map((row) => (
                  <div key={row.label}>
                    <p className="mb-0.5 text-[10px] text-slate-400">
                      {row.label}
                    </p>
                    <p className="text-[12px] font-medium text-slate-700">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer utilities */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-5 py-4">
                <div className="flex items-center gap-2 text-[12px] font-medium text-slate-600">
                  <FaRegFileLines className="h-3.5 w-3.5 text-slate-400" />
                  Receipt #R-2845
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-2.5 py-1">
                    <FaCheck className="h-2 w-2 text-emerald-600" />
                    <span className="text-[10px] font-semibold text-emerald-700">
                      Auto-matched
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1">
                    <FaShieldHalved className="h-2 w-2 text-slate-500" />
                    <span className="text-[10px] font-semibold text-slate-600">
                      TRA-ready
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {payoutTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-[#e5e5e5] bg-white px-3 py-1 text-xs text-[#404040]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        <article className="mt-6 grid gap-6 rounded-2xl bg-[#f5f5f4] transition-colors duration-200 hover:bg-[#ededeb] p-7 max-[900px]:p-5 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h3 className="text-lg font-bold">Platform</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#565656]">
              A single platform that brings expense requests, approvals,
              payouts, and compliance documentation together — with full
              visibility for finance teams and founders.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {platformTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-[#e5e5e5] bg-white px-3 py-1 text-xs text-[#404040]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden ">
            <Image
              src="/assets/images/image4.webp"
              alt="Platform overview"
              width={720}
              height={520}
              className="h-auto w-full"
            />
          </div>
        </article>

        <div className="mt-8 rounded-[28px] bg-[#0a0a0a] px-6 py-12 text-center  md:px-12">
          <p className="text-sm text-white/60">Why Daraja</p>
          <h3 className="mt-4 text-white max-w-2xl mx-auto text-[clamp(2rem,4.2vw,3.2rem)] font-bold leading-tight">
            Built for businesses,
            not individuals.
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/company"
              className="inline-flex items-center justify-center rounded-full bg-white hover:bg-[#e5e5e5] px-6 pt-2 pb-[10px] text-sm font-semibold text-[#0a0a0a] transition-colors"
            >
              Book a demo
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white px-6 py-2 text-sm font-semibold text-white transition-colors"
            >
              See how it works -&gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
