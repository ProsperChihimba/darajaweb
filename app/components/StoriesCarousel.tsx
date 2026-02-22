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
    <section id="stories" className="section stories-section">
      <div className="site-container">
        <h2 className="headline text-center">Real Stories, Real Impact</h2>
        <div className="stories-carousel">
          <div
            className="stories-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((story) => (
              <article key={story.quote} className="story-card">
                <p className="story-quote">"{story.quote}"</p>
                <p className="story-name">{story.name}</p>
                <p className="story-role">{story.role}</p>
                <p className="story-logo">{story.company}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="story-controls">
          <button
            type="button"
            className="story-arrow"
            onClick={goPrev}
            aria-label="Previous story"
          >
            ←
          </button>
          <div className="story-dots">
            {items.map((story, dotIndex) => (
              <button
                key={story.company}
                type="button"
                className={`story-dot ${dotIndex === index ? "is-active" : ""}`}
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to story ${dotIndex + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="story-arrow"
            onClick={goNext}
            aria-label="Next story"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
