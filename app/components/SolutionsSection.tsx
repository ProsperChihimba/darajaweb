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

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(
        ".solution-panel",
        sectionRef.current || undefined,
      );

      gsap.set(panels, {
        autoAlpha: 0,
        y: 40,
        pointerEvents: "none",
      });

      if (panels[0]) {
        gsap.set(panels[0], { autoAlpha: 1, y: 0, pointerEvents: "auto" });
      }

      const isSmallScreen = window.innerWidth < 1024;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isSmallScreen ? "top 4%" : "top -25%",
          end: `+=${panels.length * 100}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinReparent: isSmallScreen, // ← ADD THIS
          invalidateOnRefresh: true, // ← ADD THIS
        },
      });

      panels.forEach((panel, index) => {
        tl.to(
          panel,
          { autoAlpha: 1, y: 0, pointerEvents: "auto", duration: 0.4 },
          index,
        );
        if (index > 0) {
          tl.to(
            panels[index - 1],
            { autoAlpha: 0, y: -20, pointerEvents: "none", duration: 0.4 },
            index,
          );
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="bg-white py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="mx-auto max-w-3xl text-center text-[2.4rem] max-[900px]:text-[1.7rem] max-[900px]:mb-24 font-bold leading-[1.05] text-[#2c2c2c]">
          Solving People Management Challenges for MENA
        </h2>

        <div className="relative mt-14 min-h-[520px] sm:min-h-[560px] lg:min-h-[600px]">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="solution-panel absolute inset-0 grid items-center gap-8 rounded-[32px] bg-white max-[900px]:flex max-[900px]:flex-col-reverse lg:grid-cols-[1.05fr_1fr]"
            >
              <div className="px-2 sm:px-6 lg:px-8">
                <h3 className="text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold text-[#2c2c2c]">
                  {solution.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-[1.7] text-[#4a4a4a]">
                  {solution.description}
                </p>
              </div>
              <div className="rounded-[28px]  sm:p-8">
                <div className="overflow-hidden rounded-[22px] bg-white/70">
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
