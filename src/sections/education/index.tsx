"use client";
import { container, section } from "@/styles/containers";
import { EDUCATION } from "@/utils/texts";
import { useState } from "react";

export default function EducationSection() {
  const [expander, setExpander] = useState(EDUCATION.map(() => false));

  const formation =
    "flex inline-block flex-col p-6 w-full overflow-y-hidden bg-secondary mb-4 rounded-xl cursor-pointer";
  const transition =
    "transition-all overflow-hidden ease-in-out duration-500 max-h-0";
  const shadow =
    "shadow-[10px_10px_0px_-3px_var(--transparent),10px_10px_var(--accent)]";

  const handleExpander = (index: number) => {
    const collapser = document.getElementById(`collapser-${index}`);
    collapser?.classList.remove(expander[index] ? "max-h-screen" : "max-h-0");
    collapser?.classList.add(expander[index] ? "max-h-0" : "max-h-screen");

    const auxExpander = [...expander];
    auxExpander[index] = !auxExpander[index];
    setExpander(auxExpander);
  };

  return (
    <div className={section} id="education">
      <div
        className={`${container} ${shadow} bg-transparent border-accent flex-wrap xl:space-y-8`}
      >
        <h3 className="mr-auto">Educação</h3>
        {EDUCATION.map((ed, index) => (
          <div
            onClick={() => handleExpander(index)}
            className={`${formation} mb-16`}
            key={ed.key}
          >
            <h4 className="text-primary">{ed.name}</h4>
            <h5 className="text-foreground">{ed.formation}</h5>
            <div id={`collapser-${index}`} className={transition}>
              <h6>{ed.period}</h6>
              <p>{ed.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
