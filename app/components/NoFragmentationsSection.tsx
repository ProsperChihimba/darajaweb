import Image from "next/image";

export default function NoFragmentationsSection() {
  return (
    <section id="no-fragmentations" className="bg-[#fafafa] py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center lg:tracking-tighter md:tracking-tighter text-[clamp(2rem,3.8vw,3rem)] leading-8 font-bold text-[#2c2c2c]">
          One Workflow, No More Spreadsheets
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[24px] border border-[#e5e5e5] bg-[#fafafa] p-5 text-center">
            <div className="overflow-hidden rounded-[20px] bg-[#ededeb]">
              <Image
                src="/assets/images/image12.webp"
                alt="Fragmented workflow before Daraja"
                width={900}
                height={720}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 font-semibold text-[#3b3b3b]">Before</p>
          </article>
          <article className="rounded-[24px] border border-[#e5e5e5] bg-[#fafafa]  text-center">
            <div className="overflow-hidden relative rounded-[20px] bg-[#ededeb]">
              <Image
                src="/assets/images/image13.webp"
                alt="Unified workflow after Daraja"
                width={900}
                height={720}
                className="h-auto w-full"
              />
            <p className="mt-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 font-semibold text-[#3b3b3b]">After</p>

            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
