import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    image: "/assets/images/image18.avif",
    date: "Mar 04, 2026",
    title:
      "Why SMEs Lose Money Silently — and How Better Expense Controls Stop It",
    description:
      "Informal, receipt-free transactions make it easy for small businesses to lose track of spending. Here is how proper expense workflows fix it.",
  },
  {
    image: "/assets/images/image19.avif",
    date: "Feb 12, 2026",
    title: "Lipa Namba Payouts: A Better Way to Pay Business Suppliers",
    description:
      "Daraja is the only platform letting businesses pay directly to mobile money merchant accounts (Lipa Namba) — with proper documentation by default.",
  },
  {
    image: "/assets/images/image20.avif",
    date: "Jan 18, 2026",
    title: "Building TRA-ready Records From Day One",
    description:
      "Compliance does not have to slow you down. Learn how Daraja generates digital records that support TRA-compliant documentation automatically.",
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center font-semibold text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
          Resources
        </h2>
        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {resources.map((resource) => (
            <article key={resource.title} className="flex flex-col gap-5">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.4rem] border border-[#efe7dc] bg-[#f6f2ec]">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-3">
                <div className="inline-flex items-center gap-2 text-[0.95rem] text-[#4a4a4a]">
                  <span className="h-2 w-2 rounded-full bg-[#3d3d3d]" aria-hidden="true" />
                  <span>{resource.date}</span>
                </div>
                <h3 className="text-[1.2rem] font-bold leading-[1.35]">
                  {resource.title}
                </h3>
                <p className="text-[#575757] leading-[1.65]">
                  {resource.description}
                </p>
                <Link className="font-semibold text-[#2d2d2d]" href="/resources">
                  Read More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
