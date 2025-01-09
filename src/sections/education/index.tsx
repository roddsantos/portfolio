"use client";
import { container, item, section } from "@/styles/containers";
import { EDUCATION } from "@/utils/texts";
import { useState } from "react";

export default function EducationSection() {
  const [expander, setExpander] = useState(EDUCATION.map(() => false));

  const transition =
    "transition-all overflow-hidden ease-in-out duration-500 max-h-0";

  const handleExpander = (index: number) => {
    const collapser = document.getElementById(`collapser-${index}`);
    collapser?.classList.remove(expander[index] ? "max-h-screen" : "max-h-0");
    collapser?.classList.add(expander[index] ? "max-h-0" : "max-h-screen");

    const auxExpander = [...expander];
    auxExpander[index] = !auxExpander[index];
    setExpander(auxExpander);
  };

  return (
    <section className={section} id="education" tabIndex={0}>
      <article className={`${container} bg-container flex-wrap md:space-y-8`}>
        <h3 className="mr-auto">Educação</h3>
        {EDUCATION.map((ed, index) => (
          <div
            onClick={() => handleExpander(index)}
            className={`${item} mb-16 w-full`}
            key={ed.key}
          >
            <h4 className="text-foreground mb-2">{ed.name}</h4>
            <h5 className="text-foreground">{ed.formation}</h5>
            <div id={`collapser-${index}`} className={transition}>
              <h6 className="mb-2">{ed.period}</h6>
              <p>{ed.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
