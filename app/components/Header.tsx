"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// ─── Unique hover bg per nav item (custom hex, applied via inline style) ──────
const NAV_HOVER_COLORS = {
  Products: "#A8C5A0", // sage green
  "Use Cases": "#C4917A", // blush rose
  Resources: "#C9B99A", // sandy tan
  Pricing: "#A8C5A0", // sage green
  Company: "#7EB5C4", // dusty blue
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
export default function CercliHeader() {
  const [scrolled, setScrolled] = useState(false); // bg switches after 10 px
  const [hidden, setHidden] = useState(false); // slides away on scroll-down
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

  return (
    <>
    
      <header
        style={{
          backgroundColor: scrolled ? "#C9B99A" : "#ffffff",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.09)" : "none",
          transform: hidden ? "translateY(-110%)" : "translateY(0)",
        }}
        className="fixed top-0 left-0 right-0 z-50 flex flex-col
                   transition-[background-color,box-shadow,transform]
                   duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      >
        {/* ── Announcement bar ─────────────────────────────────────────── */}
        <div
          className="bg-[#1E1E1E] flex items-center justify-center gap-2.5
                        px-6 py-2.5 text-[#d8d8d8] text-[13px] font-medium tracking-tight"
        >
          <span>
            Cercli raises{" "}
            <strong className="text-white font-semibold">$12M Series A</strong>{" "}
            led by{" "}
            <strong className="text-white font-semibold text-[12px] tracking-[0.07em]">
              P↑CUS CAPITAL
            </strong>
          </span>

          <button
            className="inline-flex items-center gap-1.5
                             bg-[#A8C5A0] hover:bg-[#91b88a]
                             text-[#1a1a1a] font-semibold text-[12.5px]
                             rounded-full pl-3 pr-2.5 py-[3px]
                             border-none cursor-pointer transition-colors duration-200"
          >
            Read more
            <ArrowIcon />
          </button>
        </div>

        {/* ── Nav row ──────────────────────────────────────────────────── */}
        <div className="flex items-center justify-between px-8 py-2.5 gap-4">
          {/* Logo */}
          <a href="/" aria-label="Cercli" className="flex-shrink-0">
            <Image
              src="/assets/images/logo.png"
              alt="Cercli logo"
              width={140}
              height={40}
              className="h-[36px] w-auto"
              priority={true}
            />
          </a>

          {/* Nav pill */}
          <nav
            className="flex items-center gap-0.5 flex-1 justify-center max-w-[640px]
                          bg-[#f0ede6] rounded-full px-2 py-1.5 border border-black/[0.07]"
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
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              className="bg-[#C9B99A] hover:bg-[#b8a585] hover:-translate-y-px
                               text-[#1a1a1a] font-semibold text-sm tracking-tight
                               rounded-full px-5 py-2.5 border-none cursor-pointer
                               transition-all duration-200"
            >
              Log in
            </button>

            <button
              className="bg-[#1a1a1a] hover:bg-[#2e2e2e] hover:-translate-y-px
                               text-white font-semibold text-sm tracking-tight
                               rounded-full px-5 py-2.5 border-none cursor-pointer
                               transition-all duration-200"
            >
              Book a demo
            </button>
          </div>
        </div>
      </header>

     
    </>
  );
}
