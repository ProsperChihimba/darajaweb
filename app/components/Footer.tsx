"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
// ─── Data ─────────────────────────────────────────────────────────────────────
const FOOTER_COLS = [
  {
    heading: "Expense Management",
    links: [
      "Expense Requests",
      "Real-time Approvals",
      "Receipt Capture",
      "Audit Trail",
      "Role-based Access",
      "Spend Reports",
    ],
  },
  {
    heading: "Payouts",
    links: [
      "Mobile Money",
      "Bank Transfers",
      "Lipa Namba (Merchant)",
      "Auto Reconciliation",
    ],
  },
  {
    heading: "Compliance",
    links: ["TRA-ready Documentation"],
  },
  {
    heading: "Use Cases",
    links: [
      "Startups in Tanzania",
      "Growing SMEs",
      "Foreign companies in Tanzania",
    ],
  },
  {
    heading: "Company",
    links: [
      "About Daraja",
      "Our Partners",
      "Careers",
      "Contact",
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
export default function DarajaFooter() {
  return (
    <>
      <footer className="relative w-full min-h-[520px] overflow-hidden bg-[#0a0a0a]">
        {/* ── Subtle radial highlight to keep the dark footer from feeling flat ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 400px at 80% 0%, rgba(255,255,255,0.06), transparent 60%)",
          }}
        />

        {/* ── All content sits above the overlay ── */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10">
          {/* ── Logo ── */}
          <div className="pt-10 pb-8 sm:pt-12 sm:pb-10">
            <a
              href="/"
              aria-label="Daraja"
              className="inline-flex items-center gap-2"
            >
              <Image
                src="/assets/images/logo_white.svg"
                alt="Daraja logo"
                width={44}
                height={44}
                className="h-11 w-11"
                priority={false}
              />
            </a>
          </div>

          {/* ── 5-column link grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 lg:pb-16">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-0">
                {/* Column heading */}
                <p className="text-white font-semibold text-[14px] tracking-tight mb-5">
                  {col.heading}
                </p>
                {/* Links */}
                <div className="flex flex-col gap-[14px]">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-white/60 hover:text-white text-[14px]
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-10 mt-10 lg:mt-20">
            {/* Left: social icons + copyright */}
            <div className="flex flex-col gap-5 items-center lg:items-start">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  { icon: <FaLinkedin size={34} />, label: "LinkedIn" },
                  { icon: <FaSquareXTwitter size={34} />, label: "X" },
                  { icon: <FaSquareInstagram size={34} />, label: "Instagram" },
                ].map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-[48px] h-[48px] rounded-lg bg-transparent flex items-center justify-center text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <p className="text-white/50 text-[13px] tracking-tight">
                &copy; 2026 Daraja Technologies Limited. All rights reserved.
              </p>
            </div>

            {/* Center: legal links stacked */}
            <div className="flex flex-col gap-3 items-center lg:items-start">
              {LEGAL_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/60 hover:text-white text-[14px]
                             no-underline transition-colors duration-150 tracking-tight"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Right: badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* {BADGES.map((badge) => (
                <Image
                  key={badge.src}
                  src={badge.src}
                  alt={badge.alt}
                  width={54}
                  height={54}
                  className="h-[48px] w-[48px] sm:h-[54px] sm:w-[54px] object-contain"
                />
              ))} */}
            </div>
          </div>
        </div>

        {/* ── Regulatory disclosure with oversized background watermark ── */}
        <div className="relative border-t border-white/10">
          {/* Giant background watermark — overflows the right edge intentionally */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end overflow-hidden"
          >
            <span
              className="block select-none whitespace-nowrap font-bold leading-[0.85] text-white/[0.05] -mb-[1.5vw] pl-6 sm:pl-10"
              style={{ fontSize: "clamp(7rem, 19vw, 20rem)" }}
            >
              Spend with control
            </span>
          </div>

          {/* Foreground content */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-16">
            <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
              <Image
                src="/assets/images/logo_white.svg"
                alt="Daraja"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <p className="max-w-[68rem] text-[14px] leading-[1.7] text-white/70">
                Daraja is a financial technology company, not a bank. Banking
                services are provided through our licensed PSP partners.
                Customer funds are held with Ecobank via our partnership with
                Temboplus Company Limited. Mobile money merchant payouts (Lipa
                Namba) are processed through Selcom. Daraja Technologies
                Limited is registered in Tanzania. Every business payment
                generates digital records to support TRA-compliant
                documentation. Copyright &copy; Daraja Technologies Limited.
                2026.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
