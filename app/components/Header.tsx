"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ─── Unified neutral hover bg for every nav item ──────────────────────────────
const NAV_HOVER_COLORS = {
  Products: "#f0f0ee",
  "Use Cases": "#f0f0ee",
  Resources: "#f0f0ee",
  Pricing: "#f0f0ee",
  Company: "#f0f0ee",
} as const;

type NavLabel = keyof typeof NAV_HOVER_COLORS;

type NavItem = {
  label: NavLabel;
  hasDropdown: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Products", hasDropdown: true },
  { label: "Use Cases", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Company", hasDropdown: true },
];

// ─── Chevron icon ─────────────────────────────────────────────────────────────
type ChevronIconProps = {
  flipped: boolean;
};

function ChevronIcon({ flipped }: ChevronIconProps) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      className={`ml-0.5 flex-shrink-0 transition-transform duration-300 ease-in-out ${
        flipped ? "rotate-180" : "rotate-0"
      }`}
    >
      <path
        d="M3 5L7 9L11 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Arrow icon for announcement bar ─────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0"
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Single nav tab ───────────────────────────────────────────────────────────
type NavTabProps = {
  label: NavLabel;
  hasDropdown: boolean;
};

function NavTab({ label, hasDropdown }: NavTabProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // Custom hex hover colours can't be static Tailwind classes,
      // so bg is an inline style; everything else is Tailwind.
      style={{
        backgroundColor: hovered ? NAV_HOVER_COLORS[label] : "transparent",
      }}
      className="flex items-center gap-0.5 px-3.5 py-[7px] rounded-full text-[14px]
                 font-medium tracking-tight text-[#2c2c2c] whitespace-nowrap
                 cursor-pointer border-none transition-all duration-200 ease-in-out select-none"
    >
      {label}
      {hasDropdown && <ChevronIcon flipped={hovered} />}
    </button>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export default function DarajaHeader() {
  const [scrolled, setScrolled] = useState(false); // bg switches after 10 px
  const [hidden, setHidden] = useState(false); // slides away on scroll-down
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      // colour trigger
      setScrolled(currentY > 10);

      // hide / show with ±4 px deadzone to prevent micro-jitter
      if (currentY > 90) {
        if (diff > 4)
          setHidden(true); // scrolling DOWN → hide
        else if (diff < -4) setHidden(false); // scrolling UP   → show
      } else {
        setHidden(false); // always visible at the very top
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerBg = mobileOpen ? "#ffffff" : scrolled ? "#ffffff" : "#fafafa";

  return (
    <>
      <header
        style={{
          backgroundColor: headerBg,
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.09)" : "none",
          transform: hidden ? "translateY(-110%)" : "translateY(0)",
        }}
        className="fixed top-0 left-0 right-0 z-50 flex flex-col
                   transition-[background-color,box-shadow,transform]
                   duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        {/* ── Announcement bar ─────────────────────────────────────────── */}
        <div className="bg-black px-6 py-4 text-[#d8d8d8] text-[13px] font-medium tracking-tight">
          <div className="hidden sm:flex items-center justify-center gap-2.5">
            <span>
              New: Daraja now supports direct{" "}
              <strong className="text-white font-semibold">
                Lipa Namba payouts
              </strong>{" "}
              for businesses across Tanzania
            </span>

            <button
              className="inline-flex items-center gap-1.5
                             bg-white hover:bg-[#e5e5e5]
                             text-[#0a0a0a] font-semibold text-[12.5px]
                             rounded-full pl-3 pr-2.5 py-[3px]
                             border-none cursor-pointer transition-colors duration-200"
            >
              Learn more
              <ArrowIcon />
            </button>
          </div>
          <div className="sm:hidden flex flex-col items-center gap-1 text-center">
            <span>
              Daraja now supports{" "}
              <strong className="text-white font-semibold">
                Lipa Namba payouts
              </strong>
            </span>
            <div className="inline-flex items-center gap-2 text-white font-semibold text-[12px] tracking-[0.14em]">
              <span>LEARN MORE</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#0a0a0a]">
                <ArrowIcon />
              </span>
            </div>
          </div>
        </div>

        {/* ── Nav row ──────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-5 py-3 sm:px-8 sm:py-2.5 gap-4">
          {/* Logo */}
          <a
            href="/"
            aria-label="Daraja"
            className="flex-shrink-0 inline-flex items-center gap-2"
          >
            <Image
              src="/assets/images/logo.svg"
              alt="Daraja logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            {/* <span className="text-[1.45rem] font-bold tracking-tight text-[#0a0a0a]">
              Daraja
            </span> */}
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-[0_8px_20px_-14px_rgba(0,0,0,0.35)]"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 3L13 13M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 5H15M3 9H15M3 13H15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          {/* Nav pill */}
          <nav
            className="hidden lg:flex items-center gap-0.5 flex-1  justify-center max-w-fit
                          bg-[#ffffff] rounded-full px-2 py-1.5  shadow-sm"
          >
            {NAV_ITEMS.map((item) => (
              <NavTab
                key={item.label}
                label={item.label}
                hasDropdown={item.hasDropdown}
              />
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
            <button
              className="bg-white hover:bg-[#f0f0ee] hover:-translate-y-px
                               text-[#0a0a0a] border border-[#e5e5e5]
                               font-semibold text-sm tracking-tight
                               rounded-full px-5 py-2.5 cursor-pointer
                               transition-all duration-200"
            >
              Log in
            </button>

            <button
              className="bg-[#0a0a0a] hover:bg-[#262626] hover:-translate-y-px
                               text-white font-semibold text-sm tracking-tight
                               rounded-full px-5 py-2.5 border-none cursor-pointer
                               transition-all duration-200"
            >
              Book a demo
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="relative pt-[120px]">
            <div className="mx-5 rounded-[28px] bg-white mt-4 px-6 py-6 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.35)]">
              <nav className="grid gap-4 text-center">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center justify-center gap-2 py-1 text-[15px] font-medium text-[#2c2c2c]"
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown ? (
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 5L7 9L11 5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="fixed bottom-6 left-0 right-0 px-6">
            <div className="grid gap-3">
              <button
                type="button"
                className="w-full rounded-full bg-white border border-[#e5e5e5] py-3 text-sm font-semibold text-[#0a0a0a] shadow-[0_10px_20px_-14px_rgba(0,0,0,0.3)]"
              >
                Log in
              </button>
              <button
                type="button"
                className="w-full rounded-full bg-[#1a1a1a] py-3 text-sm font-semibold text-white shadow-[0_14px_24px_-16px_rgba(0,0,0,0.35)]"
              >
                Book a demo
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
