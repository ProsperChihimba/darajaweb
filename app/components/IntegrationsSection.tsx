import Image from "next/image";
import Link from "next/link";

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-[#fafafa] py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center font-semibold  text-[2.4rem] max-[900px]:text-[2rem] leading-[1.05] tracking-[-0.02em]">
          Connected to the rails businesses already use
        </h2>
        <div className="mt-10 flex justify-center">
          <Image
            src="/assets/images/image14.webp"
            alt="Daraja integrations: banks, mobile money, and Lipa Namba"
            width={1280}
            height={680}
            className="h-auto w-full max-w-[1100px] rounded-[1.8rem] shado-[0_30px_60px_-50px_rgba(20,20,20,0.35)]"
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-[#0a0a0a] hover:bg-[#262626] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_20px_-14px_rgba(0,0,0,0.4)] transition-colors"
            href="/resources"
          >
            How Daraja works
          </Link>
        </div>
      </div>
    </section>
  );
}
