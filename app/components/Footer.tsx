"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
// ─── Data ─────────────────────────────────────────────────────────────────────
const FOOTER_COLS = [
  {
    heading: "HRIS",
    links: [
      "People Management",
      "Compensation Management",
      "Leave Management",
      "Onboarding",
      "Documents",
      "Assets Management",
    ],
  },
  {
    heading: "Payroll management",
    links: [
      "Local Payroll",
      "Remote contractors",
      "Employer of record",
      "Expense reimbursements",
    ],
  },
  {
    heading: "Recruitment",
    links: ["Applicant Tracking System"],
  },
  {
    heading: "Use Cases",
    links: [
      "Hire anyone anywhere in the world",
      "Enter the MENA market",
      "Expand Worldwide from MENA",
    ],
  },
  {
    heading: "Company",
    links: [
      "Cercli Platform",
      "About Us",
      "Careers",
      "Partner with us",
      "Resources",
      "Pricing",
    ],
  },
];

const LEGAL_LINKS = [
  "Status",
  "Privacy Policy",
  "Terms & Conditions",
  "Cookie Settings",
];

const BADGES = [
  { src: "/assets/images/circle1.webp", alt: "Compliance badge" },
  { src: "/assets/images/circle2.webp", alt: "Security badge" },
  { src: "/assets/images/circle3.webp", alt: "Trust badge" },
];

// ─── Social Icons ─────────────────────────────────────────────────────────────
export default function CercliFooter() {
  return (
    <>
      <footer className="cercli-footer relative w-full min-h-[520px] overflow-hidden">
        <Image
          src="/assets/images/image21.webp"
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
          priority={false}
        />
        {/* ── Top fade: light sky blends into transparent so image shows below ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(235,242,248,0.97) 0%, rgba(235,242,248,0.93) 30%, rgba(235,242,248,0.55) 52%, transparent 68%)",
          }}
        />

        {/* ── All content sits above the overlay ── */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-10">
          {/* ── Logo ── */}
          <div className="pt-12 pb-10">
            <a href="/" aria-label="Cercli">
              <Image
                src="/assets/images/logo.png"
                alt="Cercli logo"
                width={140}
                height={40}
                className="h-[40px] w-auto"
                priority={false}
              />
            </a>
          </div>

          {/* ── 5-column link grid ── */}
          <div className="grid grid-cols-5 gap-6 pb-16">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-0">
                {/* Column heading */}
                <p className="text-[#1a1a1a] font-semibold text-[14px] tracking-tight mb-5">
                  {col.heading}
                </p>
                {/* Links */}
                <div className="flex flex-col gap-[14px]">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[#5a5a5a] hover:text-[#1a1a1a] text-[14px]
                                 no-underline transition-colors duration-150 tracking-tight leading-snug"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom bar (sits on the desert image area) ── */}
          <div className="flex items-end justify-between pb-10 mt-20">
            {/* Left: social icons + copyright */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                {[
                  { icon: <FaLinkedin size={34} />, label: "LinkedIn" },
                  { icon: <FaSquareXTwitter size={34} />, label: "X" },
                  { icon: <FaSquareInstagram size={34} />, label: "Instagram" },
                ].map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-[48px] h-[48px] rounded-lg bg-transparent flex items-center justify-center text-black/60 hover:text-black transition-colors duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <p className="text-[#3a3a3a] text-[13px] tracking-tight">
                © 2025 Cercli. All rights reserved.
              </p>
            </div>

            {/* Center: legal links stacked */}
            <div className="flex flex-col gap-3 items-start">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[#3a3a3a] hover:text-[#1a1a1a] text-[14px]
                             no-underline transition-colors duration-150 tracking-tight"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right: badges */}
            <div className="flex items-center gap-3">
              {BADGES.map((badge) => (
                <Image
                  key={badge.src}
                  src={badge.src}
                  alt={badge.alt}
                  width={54}
                  height={54}
                  className="h-[54px] w-[54px] object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
