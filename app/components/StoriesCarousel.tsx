"use client";

import { useState } from "react";

type Story = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type StoriesCarouselProps = {
  items: Story[];
};

export default function StoriesCarousel({ items }: StoriesCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const goPrev = () => {
    setIndex((current) => (current - 1 + total) % total);
  };

  const goNext = () => {
    setIndex((current) => (current + 1) % total);
  };

  return (
    <section id="stories" className="bg-white py-[4.5rem] lg:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        <h2 className="text-center font-semibold max-[900px]:text-[1.8rem] tracking-tighter text-[clamp(2.4rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.02em]">
          Real Stories from Real Businesses
        </h2>
        <div className="mt-10 overflow-hidden rounded-[1.6rem]">
          <div
            className="flex transition-transform duration-[400ms] ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((story) => (
              <article
                key={story.quote}
                className="min-w-full rounded-[1.6rem] bg-[#0a0a0a] px-10 py-12 text-center shadow-[0_30px_60px_-50px_rgba(23,23,23,0.45)]"
              >
                <p className="mx-auto mb-7 max-w-[720px] text-[clamp(1rem,2.4vw,1.9rem)] font-bold leading-[1.45] text-white">
                  &quot;{story.quote}&quot;
                </p>
                <p className="font-semibold text-white/90">{story.name}</p>
                <p className="mt-1 text-white/60">{story.role}</p>
                <p className="mt-10 text-[2.2rem] font-bold tracking-[0.08em] text-white/20 lowercase">
                  {story.company}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-5">
          <button
            type="button"
            className="h-11 w-11 rounded-full border border-[#e5e5e5] bg-[#f5f5f4] text-[1.2rem] text-[#0a0a0a] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_18px_-12px_rgba(0,0,0,0.3)]"
            onClick={goPrev}
            aria-label="Previous story"
          >
            &#8592;
          </button>
          <div className="inline-flex items-center gap-2">
            {items.map((story, dotIndex) => (
              <button
                key={story.company}
                type="button"
                className={`rounded-full transition-all duration-200 ${
                  dotIndex === index
                    ? "h-[10px] w-[10px] bg-[#0a0a0a]"
                    : "h-2 w-2 bg-[#d4d4d4]"
                }`}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to story ${dotIndex + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="h-11 w-11 rounded-full border border-[#e5e5e5] bg-[#f5f5f4] text-[1.2rem] text-[#0a0a0a] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_18px_-12px_rgba(0,0,0,0.3)]"
            onClick={goNext}
            aria-label="Next story"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
