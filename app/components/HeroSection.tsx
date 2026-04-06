import Link from "next/link";
import {
  FaFileInvoice,
  FaCheck,
  FaBolt,
  FaBuilding,
  FaArrowUp,
  FaReceipt,
  FaCircleCheck,
  FaBuildingColumns,
} from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-[#fafafa] min-h-screen pt-[9.5rem]  max-[900px]:pt-[13rem]">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="grid gap-10 lg:gap-12">
          <div className="grid gap-6 text-center justify-items-center">
            <h1 className="text-[clamp(2.6rem,5vw,4.2rem)] tracking-tighter max-[900px]:text-[2rem] font-bold leading-[1.05] text-[#2b2b2b]">
              Expense management built for
              <br />
              SMEs and startups.
            </h1>
            <p className="text-[1.05rem] text-[#3f3f3f] max-w-[640px]">
              Daraja replaces spreadsheets, manual approvals, and paper receipts
              with one digital workflow, so every shilling spent is tracked,
              approved, and compliance-ready.
            </p>
            <Link
              className="mt-2 inline-flex text-sm items-center justify-center rounded-full bg-[#0a0a0a] hover:bg-[#262626] px-6 py-3 text-white font-semibold shadow-[0_12px_24px_-18px_rgba(0,0,0,0.45)] transition-colors"
              href="/pricing"
            >
              Get Started
            </Link>
          </div>
          <div className="relative w-full">
            {/* ── Constellation grid ── */}
            <div className="relative mx-auto w-full h-[600px] md:h-[700px]">
              {/* Connection lines (md+ only) */}
              <svg
                className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
                aria-hidden="true"
              >
                <path
                  d="M 250 150 Q 400 150 550 250"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 550 250 Q 650 350 800 250"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 800 250 Q 950 150 1050 350"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M 550 250 Q 400 450 300 450"
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              </svg>

              {/* ── Card 1: Expense Request ── */}
              <div className="relative z-10 w-full md:absolute md:top-[50px] md:left-[50px] md:w-[320px]">
                <div className="relative rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-500 shadow-sm">
                    1
                  </div>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                        <FaFileInvoice className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                          Expense Request
                        </h3>
                        <p className="text-xs text-slate-500">
                          Asha M. · Just now
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 rounded-[16px] bg-slate-50 p-4">
                    <p className="mb-1 text-sm font-medium text-slate-700">
                      Office rent · Q3
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      TZS 450,000
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      Operations
                    </span>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                      Pending
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Card 2: Approval (glass) ── */}
              <div className="relative z-20 mt-8 w-full md:absolute md:top-[180px] md:left-[450px] md:mt-0 md:w-[280px]">
                <div className="relative rounded-[24px] border border-white/50 bg-white/90 p-6 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                  <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-500 shadow-sm">
                    2
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-500">
                      <FaCheck className="h-6 w-6" />
                      <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-2 border-dashed border-emerald-500 opacity-30" />
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-slate-900">
                      Approved
                    </h3>
                    <p className="mb-4 text-sm text-slate-500">
                      by Founder · in 2 min
                    </p>
                    <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-50 py-2 text-xs font-semibold text-emerald-600">
                      <FaBolt className="h-3 w-3" />
                      Real-time SLA
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Card 3: Payout ── */}
              <div className="relative z-10 mt-8 w-full md:absolute md:top-[120px] md:right-[50px] md:mt-0 md:w-[320px]">
                <div className="relative rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
                  <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100 text-xs font-bold text-slate-500 shadow-sm">
                    3
                  </div>
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Paid Out
                    </h3>
                    <span className="rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-600">
                      Success
                    </span>
                  </div>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <FaBuilding className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">To</p>
                      <p className="text-sm font-bold text-slate-900">
                        Lipa Namba Halisi Prop.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="mb-1 text-xs text-slate-500">Amount</p>
                      <p className="text-xl font-bold text-emerald-600">
                        TZS 450,000
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">
                        via Bank Transfer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Card 4: Analytics ── */}
              <div className="relative z-10 mt-8 w-full md:absolute md:bottom-[50px] md:left-[100px] md:mt-0 md:w-[380px]">
                <div className="relative rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500">
                        This Month
                      </h3>
                      <p className="text-2xl font-bold text-slate-900">
                        TZS 4.2M
                      </p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                      <FaArrowUp className="h-2.5 w-2.5" />
                      12%
                    </div>
                  </div>
                  {/* CSS bar chart */}
                  <div className="relative h-[180px] w-full">
                    {/* horizontal grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pb-6">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-full border-t border-slate-100"
                        />
                      ))}
                    </div>
                    {/* bars */}
                    <div className="relative flex h-full w-full items-end gap-4 pb-6">
                      {[
                        { label: "Rent", pct: 100, dark: true },
                        { label: "Software", pct: 44, dark: false },
                        { label: "Travel", pct: 78, dark: false },
                        { label: "Office", pct: 33, dark: false },
                      ].map((bar) => (
                        <div
                          key={bar.label}
                          className="relative flex flex-1 flex-col items-center"
                        >
                          <div
                            className={`w-full rounded-t-lg ${
                              bar.dark ? "bg-slate-900" : "bg-slate-300"
                            }`}
                            style={{ height: `${bar.pct}%` }}
                          />
                          <span className="absolute -bottom-5 text-[10px] text-slate-500">
                            {bar.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Card 5: Reconciliation (dark) ── */}
              <div className="relative z-20 mt-8 w-full md:absolute md:bottom-[100px] md:right-[150px] md:mt-0 md:w-[300px]">
                <div className="relative rounded-[24px] bg-slate-900 p-6 text-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)]">
                  <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-800 text-xs font-bold text-slate-300 shadow-sm">
                    ✓
                  </div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
                      <FaReceipt className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-semibold">
                      Receipt Reconciled
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <FaCircleCheck className="h-4 w-4 text-emerald-400" />
                      Auto-matched
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <FaCircleCheck className="h-4 w-4 text-emerald-400" />
                      TRA-ready format
                    </div>
                  </div>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <button
                      type="button"
                      className="w-full rounded-xl bg-white py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                    >
                      View Ledger
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Supported Rails pill (full-width row, like source) ── */}
            <div className="mt-16 flex items-center justify-center gap-6 overflow-x-auto rounded-full border border-slate-200 bg-white/90 px-6 py-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-wider text-slate-400">
                Supported Rails
              </span>
              <div className="h-6 w-px bg-slate-200" />
              <div className="flex items-center gap-4 whitespace-nowrap">
                <span className="rounded-full bg-green-50 px-4 py-1.5 text-sm font-bold text-green-700">
                  M-Pesa
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-700">
                  Tigo
                </span>
                <span className="rounded-full bg-red-50 px-4 py-1.5 text-sm font-bold text-red-700">
                  Airtel
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold text-slate-700">
                  <FaBuildingColumns className="h-3 w-3" />
                  Bank
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
