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
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(
        ".solution-panel",
        sectionRef.current || undefined,
      );

      if (!panels.length) return;

      gsap.set(panels, {
        opacity: 0,
        y: 40,
        zIndex: 0,
        transformOrigin: "center center",
        willChange: "transform, opacity",
      });
      gsap.set(panels[0], { opacity: 1, y: 0, zIndex: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${panels.length * 80}vh`,
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      if (headerRef.current) {
        tl.to(headerRef.current, { opacity: 0, duration: 0.4 }, 0);
      }

      // Lift panels into the header space as it fades out
      tl.to(
        panels,
        {
          y: -48,
          duration: 0.4,
          ease: "none",
        },
        0,
      );

      panels.forEach((panel, index) => {
        const position = index;
        tl.to(
          panel,
          { opacity: 1, y: 0, zIndex: 2, duration: 0.6 },
          position,
        );

        if (index > 0) {
          tl.to(
            panels[index - 1],
            { opacity: 0, y: -20, zIndex: 0, duration: 0.6 },
            position,
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
      className="bg-white py-16 lg:pb-24 lg:pt-0"
    >
      <div className="mx-auto w-full max-w-295 px-6">
        <h2
          ref={headerRef}
          className="mx-auto max-w-3xl text-center text-[2.4rem] max-[900px]:text-[1.7rem] max-[900px]:mb-10 font-bold leading-[1.05] text-[#2c2c2c]"
        >
          Solving People Management Challenges for MENA
        </h2>

        <div
          className="relative  overflow-hidden rounded-4xl"
          style={{ minHeight: "clamp(520px, 65vh, 720px)" }}
        >
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="solution-panel absolute inset-0 grid items-center gap-8 rounded-4xl bg-white max-[900px]:flex max-[900px]:flex-col-reverse lg:grid-cols-[1.05fr_1fr]"
            >
              <div className=" lg:px-8">
                <h3 className="text-[clamp(1.6rem,2.8vw,2.2rem)] font-bold text-[#2c2c2c]">
                  {solution.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-[1.7] text-[#4a4a4a]">
                  {solution.description}
                </p>
              </div>
              <div className="rounded-[28px] lg:p-8">
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
