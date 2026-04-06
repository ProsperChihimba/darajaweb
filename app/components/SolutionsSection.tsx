"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Stop Expense Leakage",
    description:
      "Capture every business payment with the who, why, and where. Receipt-free transactions and inflated costs become a thing of the past once spending lives in one transparent system.",
    image: "/assets/images/image5.webp",
  },
  {
    title: "Pay Out to Lipa Namba, Mobile Money & Banks",
    description:
      "Disburse approved funds directly to verified merchant accounts (Lipa Namba), mobile money wallets, or business bank accounts — all from one workflow.",
    image: "/assets/images/image6.webp",
  },
  {
    title: "Approvals That Match How You Work",
    description:
      "Employees submit expense requests, admins review and approve in real time, and every step is logged. No more chasing receipts on WhatsApp or paper.",
    image: "/assets/images/image7.webp",
  },
  {
    title: "TRA-ready Documentation by Default",
    description:
      "Every payment generates a digital record that supports TRA-compliant documentation — so you reduce penalties, build credit history, and stay audit-ready.",
    image: "/assets/images/image8.webp",
  },
];

// How the timeline works:
// Each "slot" = transitionDuration + holdDuration (time units)
// e.g. 1 + 3 = 4 units per panel
// GSAP stretches this timeline across the total scroll distance:
//   panels.length * scrollPerPanelVh  →  4 * 150vh = 600vh total pinned scroll
// So each panel occupies ~150vh of scroll: ~25vh to animate in, ~100vh held, ~25vh to animate out.
// To make transitions slower → increase scrollPerPanelVh
// To make panels stay longer → increase holdDuration

const SETTINGS = {
  // --- Scroll pacing ---
  scrollPerPanelVh: 500,   // vh of scroll distance dedicated to each panel
  scrub: 1,                // smoothing lag on scrub (seconds); 0 = instant

  // --- Header ---
  headerFade: 0.5,         // how quickly the heading fades out (timeline units)
  headerShift: 0,        // px the panels lift up as header disappears

  // --- Panel transitions ---
  transitionDuration: 1,   // time units for fade-in / fade-out animation
  holdDuration: 3,         // time units each panel stays fully visible

  // --- Panel motion ---
  panelOffsetIn: 40,       // px panels slide up from on entry
  panelOffsetOut: -20,     // px panels slide to on exit

};

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(
        ".solution-panel",
        sectionRef.current || undefined,
      );

      if (!panels.length) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 768px)",
          isDesktop: "(min-width: 769px)",
        },
        () => {
          const {
            scrollPerPanelVh,
            scrub,
            headerFade,
            headerShift,
            transitionDuration,
            holdDuration,
            panelOffsetIn,
            panelOffsetOut,
          } = SETTINGS;

          // Each panel occupies this many timeline-units
          const slotSize = transitionDuration + holdDuration;

          // Initial state: all panels hidden, first panel visible
          gsap.set(panels, {
            opacity: 0,
            y: panelOffsetIn,
            zIndex: 0,
            transformOrigin: "center center",
            willChange: "transform, opacity",
          });
          gsap.set(panels[0], { opacity: 1, y: 0, zIndex: 1 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              // Total scroll = number of panels × vh per panel
              end: `+=${panels.length * scrollPerPanelVh}vh`,
              scrub,
              pin: true,
              invalidateOnRefresh: true,
            },
          });

          // Fade out the heading at the very start
          if (headerRef.current) {
            tl.to(
              headerRef.current,
              { opacity: 0, duration: headerFade },
              0,
            );
          }

          // Lift all panels up as the heading disappears
          tl.to(
            panels,
            { y: headerShift, duration: headerFade, ease: "none" },
            0,
          );

          // Sequence each panel with a hold gap between transitions
          panels.forEach((panel, index) => {
            // Start time for this panel's entrance on the timeline
            // index 0 → position 0, index 1 → position slotSize, etc.
            const startAt = index * slotSize;

            // Animate panel in
            tl.to(
              panel,
              {
                opacity: 1,
                y: headerShift, // keep the lifted offset consistent
                zIndex: 2,
                duration: transitionDuration,
                ease: "power2.out",
              },
              startAt,
            );

            // Animate the previous panel out at the same time
            if (index > 0) {
              tl.to(
                panels[index - 1],
                {
                  opacity: 0,
                  y: panelOffsetOut + headerShift,
                  zIndex: 0,
                  duration: transitionDuration,
                  ease: "power2.in",
                },
                startAt,
              );
            }

            // After transitionDuration the panel is fully visible.
            // holdDuration of "nothing" passes before the next panel starts.
            // GSAP naturally holds because the next startAt is slotSize away.
          });
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className=" h-screen bg-white lg:pb-0 pt-0"
    >
      <div className="mx-auto w-full lg:max-w-295 px-6">
        <h2
          ref={headerRef}
          className="mx-auto max-w-3xl lg:mb-9 text-center text-[2.4rem] max-[900px]:text-[1.7rem] max-[900px]:mb-16 font-bold leading-[1.05] text-[#2c2c2c]"
        >
          Solving Real Expense Challenges for SMEs and Startups
        </h2>

        <div
          className="relative  -mt-14 lg:mt-0"
          style={{ minHeight: "clamp(520px, 65vh, 720px)" }}
        >
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="solution-panel absolute inset-0 grid items-center gap-4 lg:gap-8  max-[900px]:flex max-[900px]:flex-col-reverse lg:grid-cols-[1.05fr_1fr]"
            >
              <div className="lg:px-8">
                <h3 className="text-[2.2rem] max-[900px]:text-[1.5rem] font-bold text-[#2c2c2c]">
                  {solution.title}
                </h3>
                <p className="lg:mt-4 lg:text-[1rem] text-sm leading-[1.7] text-[#4a4a4a]">
                  {solution.description}
                </p>
              </div>
              <div className="lg:p-8">
                <div className="overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={900}
                    height={560}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}