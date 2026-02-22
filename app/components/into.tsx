import Image from "next/image";
import Link from "next/link";

const partners = [
  { src: "/assets/images/partiner1.svg", alt: "Zest" },
  { src: "/assets/images/partiner2.svg", alt: "Enhance" },
  { src: "/assets/images/partiner3.svg", alt: "BackLite" },
  { src: "/assets/images/partiner4.svg", alt: "Supy" },
  { src: "/assets/images/partiner5.svg", alt: "Innovate" },
  { src: "/assets/images/partiner6.svg", alt: "Huspy" },
  { src: "/assets/images/partiner7.svg", alt: "Air DXB" },
  { src: "/assets/images/partiner8.svg", alt: "Alaan" },
];

const hrisTags = [
  "People Management",
  "Compensation Management",
  "Leave Management",
  "Onboarding",
  "Documents",
];

const payrollTags = [
  "Local Payroll",
  "Remote Contractors",
  "Employer of Record",
  "Expense Reimbursements",
];

const platformTags = ["Reports", "Role-Based Permissions", "Complete Visibility"];

export default function IntoSection() {
  return (
    <section className="bg-white py-16">
      <div className="site-container">
        <p className="text-center text-sm text-[#5a5a5a]">
          Trusted by leading MENA businesses
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 text-center sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((partner) => (
            <div key={partner.src} className="flex items-center justify-center">
              <Image src={partner.src} alt={partner.alt} width={120} height={40} className="h-8"/>
            </div>
          ))}
        </div>

        <h2 className="mt-10 text-center text-[clamp(1.9rem,3.4vw,2.6rem)] font-bold text-[#2c2c2c]">
          The Global HR System and Workforce
          <br />
          Platform That Works for You
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="grid gap-4 rounded-2xl border border-[#f0e6d8] bg-[#fbf6ef] transition-colors duration-200 hover:bg-[#A8C5A0] p-7">
            <div>
              <h3 className="text-xl font-bold">HRIS</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#565656]">
                A single source of truth for workforce data, localised for teams
                in any location.
              </p>
            </div>
            <div className="overflow-hidden rounded-xl ">
              <Image
                src="/assets/images/image2.webp"
                alt="HRIS overview"
                width={860}
                height={480}
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {hrisTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-[#d8cfc2] bg-white px-3 py-1 text-xs text-[#6a5a4a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="grid gap-4 rounded-2xl border border-[#f0e6d8] bg-[#fbf6ef] transition-colors duration-200 hover:bg-[#A8C5A0] p-7">
            <div>
              <h3 className="text-xl font-bold">Payroll management</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#565656]">
                Pay direct employees and remote contractors while managing
                multi-currency payments and reimbursements with flexibility and
                accuracy across regions.
              </p>
            </div>
            <div className="overflow-hidden">
              <Image
                src="/assets/images/image3.webp"
                alt="Payroll management overview"
                width={860}
                height={480}
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {payrollTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-[#d8cfc2] bg-white px-3 py-1 text-xs text-[#6a5a4a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>

        <article className="mt-6 grid gap-6 rounded-2xl border border-[#f0e6d8] bg-[#fbf6ef] transition-colors duration-200 hover:bg-[#A8C5A0] p-7 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h3 className="text-lg font-bold">Platform</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#565656]">
              A fully connected platform that integrates seamlessly with all your
              tools—bringing payroll, compliance, and workforce management together
              in one place.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {platformTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-[#d8cfc2] bg-white px-3 py-1 text-xs text-[#6a5a4a]"
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

        <div className="mt-8 rounded-[28px] bg-[#0f1115] px-6 py-12 text-center  md:px-12">
          <p className="text-sm text-white/70">Announcement</p>
          <h3 className="mt-4 text-white text-[clamp(2rem,4.2vw,3.2rem)] font-bold leading-tight">
            Cercli has raised a $12M
            <br />
            Series A!
          </h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/company"
              className="inline-flex items-center !text-[#589c8e] justify-center rounded-full bg-[#3f5b4b] px-6 py-2 text-sm font-semibold text-white"
            >
              Book a demo
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#2c2c2c]"
            >
              What $12M will unlock -&gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

