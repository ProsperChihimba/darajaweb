import Image from "next/image";
import Link from "next/link";

export default function SwitchSection() {
  return (
    <section id="switch" className="bg-[#fafafa] py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[clamp(2rem,3.6vw,3rem)] max-[900px]:text-[1.8rem] leading-[1.8rem] font-bold text-[#2c2c2c]">
            Get Started With Daraja in Days
          </h2>
          <p className="mt-3 text-[16px] max-w-lg mx-auto text-[#3f3f3f]">
            Move off spreadsheets and consumer mobile money. Our team helps you
            set up Daraja for your business quickly and properly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[22px] border border-[#e5e5e5] bg-white overflow-hidden pb-4  shado-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="rounded-[16px] bg-[#f5f5f4]">
              <Image
                src="/assets/images/image15.webp"
                alt="Tailored setup"
                width={520}
                height={360}
                className="h-auto w-full"
              />
            </div>
            <h3 className="mt-0 text-xl font-bold text-[#2c2c2c] mx-7">
              Tailored Setup
            </h3>
            <p className="mt-2 text-sm text-[#3f3f3f] mx-7">
              We configure approval flows, roles, and spending limits around how
              your business actually operates.
            </p>
          </article>

          <article className="rounded-[22px] border border-[#e5e5e5] bg-white overflow-hidden pb-4   shado-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="rounded-[16px] bg-[#f5f5f4]">
              <Image
                src="/assets/images/image16.webp"
                alt="Smooth migration"
                width={520}
                height={360}
                className="h-auto w-full"
              />
            </div>
            <h3 className="mt-0 text-xl font-bold text-[#2c2c2c] mx-7">
              Smooth Migration from Spreadsheets
            </h3>
            <p className="mt-2 text-sm text-[#3f3f3f] mx-7">
              Bring your existing expense records and vendors into Daraja with
              hands-on support from our team.
            </p>
          </article>

          <article className="rounded-[22px] border border-[#e5e5e5] bg-white overflow-hidden pb-4   shado-[0_1px_0_rgba(0,0,0,0.04)]">
            <div className="rounded-[16px] bg-[#f5f5f4]">
              <Image
                src="/assets/images/image17.webp"
                alt="Hands-on onboarding"
                width={520}
                height={360}
                className="h-auto w-full"
              />
            </div>
            <h3 className="mt-0 text-xl font-bold text-[#2c2c2c] mx-7">
              Hands-on Onboarding
            </h3>
            <p className="mt-2 text-sm text-[#3f3f3f] mx-7">
              Train your team on submitting requests, approving expenses, and
              keeping records compliant — with a dedicated point of contact.
            </p>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-[#0a0a0a] hover:bg-[#262626] px-6 py-2 text-sm font-semibold text-white transition-colors"
          >
            Get started
          </Link>
        </div>
      </div>
    </section>
  );
}
