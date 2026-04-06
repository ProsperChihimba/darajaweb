export default function CountingsSection() {
  return (
    <section id="countings" className="bg-white py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center text-[clamp(2rem,3.8vw,3rem)] font-bold text-[#2c2c2c]">
          Daraja by the Numbers
        </h2>

        <div className="mt-10 grid gap-10 lg:max-w-4xl mx-auto text-center md:grid-cols-3">
          <div>
            <p className="text-[clamp(2.6rem,5vw,4rem)] font-bold text-[#0a0a0a]">
              0%
            </p>
            <p className="mt-2 text-sm text-[#3f3f3f]">
              Customer churn since launch — every business that joined is still
              with us
            </p>
          </div>
          <div>
            <p className="text-[clamp(2.6rem,5vw,4rem)] font-bold text-[#0a0a0a]">
              15+
            </p>
            <p className="mt-2 text-sm text-[#3f3f3f]">
              Months our longest-running customer has trusted Daraja with their
              expenses
            </p>
          </div>
          <div>
            <p className="text-[clamp(2.6rem,5vw,4rem)] font-bold text-[#0a0a0a]">
              100%
            </p>
            <p className="mt-2 text-sm text-[#3f3f3f]">
              Of payouts traceable, documented, and compliance-ready by default
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-[28px] bg-[#0a0a0a] px-6 py-12 max-[900px]:py-20 max-[900px]:px-3 text-center md:px-12">
          <p className="text-sm text-white/60">Our purpose</p>
          <h3 className="mt-3 text-[1.8rem] max-[900px]:leading-9 tracking-tighter font-bold text-white">
            To give small businesses the same financial
            <br />
            control that larger companies enjoy
          </h3>
          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white hover:bg-[#e5e5e5] px-6 py-2 text-sm font-semibold text-[#0a0a0a] transition-colors">
            Talk to us
          </button>
        </div>
      </div>
    </section>
  );
}
