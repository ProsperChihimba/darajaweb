import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-[#fafafa] py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center text-[clamp(2rem,3.8vw,3rem)] font-bold text-[#2c2c2c]">
          Why Daraja?
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-6">
            <article className="rounded-[22px] bg-[#ededeb] border border-[#e5e5e5] pb-5 pt-1 px-1">
              <div className="overflow-hidden rounded-[18px] bg-white">
                <Image
                  src="/assets/images/image9.webp"
                  alt="Simple and intuitive"
                  width={900}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 mx-3">
                <h3 className="text-xl font-bold text-[#2c2c2c]">
                  Simple Enough for Any Team
                </h3>
                <p className="mt-2 text-sm text-[#3d3d3d]">
                  We give small teams the kind of financial tools bigger
                  companies have — but in a way that&apos;s simpler, more
                  relevant, and easier to use day to day.
                </p>
              </div>
            </article>

            <article className="rounded-[22px] bg-[#0a0a0a] p-6">
              <h3 className="text-xl font-bold text-white">
                Built for Businesses, Not Individuals
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Most mobile money platforms are built for individuals first,
                which leaves SMEs mixing personal and business spending. Daraja
                separates the two from day one, with proper accountability and
                documentation.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src="/assets/images/slack.svg"
                  alt="Built for businesses"
                  width={52}
                  height={52}
                  className=" w-auto h-12  rounded-2xl invert"
                />
              </div>
            </article>
          </div>

          <div className="grid gap-6">
            <article className="rounded-[22px] bg-[#ededeb] border border-[#e5e5e5] p-6">
              <h3 className="text-xl font-bold text-[#2c2c2c]">
                Backed by Trusted Banking Rails
              </h3>
              <p className="mt-2 text-sm text-[#3d3d3d]">
                Daraja runs on top of regulated banking infrastructure through
                our PSP partners, so customer funds stay safe and every
                transaction is properly recorded.
              </p>
              <div className="mt-6 flex items-center gap-3">
                {[
                  { src: "/assets/images/circle1.webp", alt: "Ecobank" },
                  { src: "/assets/images/circle2.webp", alt: "Temboplus" },
                  { src: "/assets/images/circle3.webp", alt: "Selcom" },
                ].map((badge) => (
                  <span
                    key={badge.alt}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/70"
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={44}
                      height={44}
                    />
                  </span>
                ))}
              </div>
            </article>

            <article className="rounded-[22px] bg-[#ededeb] border border-[#e5e5e5] pb-5 pt-1 px-1">
              <div className="overflow-hidden rounded-[18px] bg-white">
                <Image
                  src="/assets/images/image10.webp"
                  alt="TRA-compliant documentation"
                  width={900}
                  height={520}
                  className="h-auto w-full"
                />
              </div>
              <div className="mt-5 mx-3">
                <h3 className="text-xl font-bold text-[#2c2c2c]">
                  TRA-compliant by Default
                </h3>
                <p className="mt-2 text-sm text-[#3d3d3d]">
                  Every payout is routed only to verified mobile money merchant
                  accounts (Lipa Namba) or business bank accounts — generating
                  digital records that support TRA-compliant documentation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
