import Image from "next/image";
import Link from "next/link";

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
            <div className="overflow-hidden">
              <Image
                src="/assets/images/image2.webp"
                alt="Payouts and reconciliation overview"
                width={860}
                height={480}
                className="h-auto w-full"
              />
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
