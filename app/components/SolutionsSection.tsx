"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "Multi-Country, Multi-Entity Compliance",
    description:
      "Stay compliant across borders with HRIS and payroll workflows tailored to local labor laws, leave policies, and regulations, ensuring seamless operations across offices and entities.",
    image: "/assets/images/image5.webp",
  },
  {
    title: "Localized Payroll, Simplified",
    description:
      "Automate payroll cycles, approvals, and statutory reporting with built-in local requirements, reducing manual tasks while improving accuracy and visibility.",
    image: "/assets/images/image6.webp",
  },
  {
    title: "Fast, Compliant Onboarding",
    description:
      "Launch new hires quickly with guided onboarding, document collection, and compliance checks, all in one streamlined flow.",
    image: "/assets/images/image7.webp",
  },
  {
    title: "Actionable People Insights",
    description:
      "Centralize people data and reporting to help teams make better workforce decisions with confidence and clarity.",
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
  headerShift: -48,        // px the panels lift up as header disappears

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
      className="bg-white py-16 lg:pb-24 lg:pt-0"
    >
      <div className="mx-auto bg-amber-400 w-full lg:max-w-295 px-6">
        <h2
          ref={headerRef}
          className="mx-auto max-w-3xl lg:mb-9 text-center text-[2.4rem] max-[900px]:text-[1.7rem] max-[900px]:mb-0 font-bold leading-[1.05] text-[#2c2c2c]"
        >
          Solving People Management Challenges for MENA
        </h2>

        <div
          className="relative bg-neutral-600 px-2"
          style={{ minHeight: "clamp(520px, 65vh, 720px)" }}
        >
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="solution-panel bg-violet-500 px-2 absolute inset-0 grid items-center gap-8  max-[900px]:flex max-[900px]:flex-col-reverse lg:grid-cols-[1.05fr_1fr]"
            >
              <div className="lg:px-8">
                <h3 className="text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold text-[#2c2c2c]">
                  {solution.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-[1.7] text-[#4a4a4a]">
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