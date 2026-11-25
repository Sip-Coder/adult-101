"use client";

import { useState } from "react";
import type { SelfCheck as SelfCheckItem } from "@/lib/content/types";

export function SelfCheck({ items }: { items: SelfCheckItem[] }) {
  const [picked, setPicked] = useState<Record<number, number>>({});

  return (
    <section className="check" aria-labelledby="check-heading">
      <div>
        <h2 id="check-heading">Check yourself</h2>
        <p className="meta">
          This stays on the page. It is not graded, and it is not saved with your progress.
        </p>
      </div>
      {items.map((item, index) => {
        const choice = picked[index];
        const answered = choice !== undefined;
        return (
          <article key={item.prompt}>
            <h3>{item.prompt}</h3>
            {item.choices.map((label, choiceIndex) => (
              <button
                key={label}
                type="button"
                className="choice"
                aria-pressed={choice === choiceIndex}
                onClick={() => setPicked((current) => ({ ...current, [index]: choiceIndex }))}
              >
                {label}
              </button>
            ))}
            {answered ? (
              <p className="why">
                {choice === item.answer ? "That's the idea. " : "Not quite. "}
                {item.why}
              </p>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
