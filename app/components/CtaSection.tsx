import Link from "next/link";

export default function CtaSection() {
  return (
    <section id="cta" className="py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0a0a0a_0%,#171717_55%,#404040_140%)] p-10 text-white after:absolute after:-bottom-[40%] after:-right-[10%] after:h-[300px] after:w-[300px] after:rounded-full after:bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] after:content-['']">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/80">
            Pilot
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em] text-white">
            Run a Daraja pilot with your team.
          </h2>
          <p className="text-[1.05rem] leading-[1.7] text-white/80 max-w-[42rem]">
            Start with one team or expense category, see the audit trail and
            payouts in action, then roll Daraja out across your business.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-white/85"
              href="/pricing"
            >
              Start a pilot
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white"
              href="/company"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
