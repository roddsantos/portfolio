"use client";

import { container, item, section, transition } from "@/styles/containers";
import { EXPERIENCE } from "@/utils/texts";
import { useState } from "react";

export default function ExperienceSection() {
  const [expander, setExpander] = useState(EXPERIENCE.map(() => false));

  const handleExpander = (index: number) => {
    const collapser = document.getElementById(`exp-${index}`);
    collapser?.classList.remove(expander[index] ? "max-h-screen" : "max-h-0");
    collapser?.classList.add(expander[index] ? "max-h-0" : "max-h-screen");

    const auxExpander = [...expander];
    auxExpander[index] = !auxExpander[index];
    setExpander(auxExpander);
  };

  const skills = "flex flex-wrap mt-4";
  const skill =
    "rounded-xl w-fit h-max py-1 px-4 bg-accent mr-2 mb-2 text-white";

  return (
    <div className={section} id="experience" tabIndex={0}>
      <div className={`${container} bg-container-2 flex-wrap xl:space-y-8`}>
        <h3 className="mr-auto">Experiência</h3>
        {EXPERIENCE.map((experience, index) => (
          <div
            key={experience.id}
            className={`${item} bg-accent`}
            onClick={() => handleExpander(index)}
          >
            <h4 className="mb-2">{experience.role}</h4>
            <h5>{experience.name}</h5>
            <h5 className="mb-2">{experience.period}</h5>
            <div id={`exp-${index}`} className={transition}>
              <p className="mb-2">{experience.description}</p>
              {experience.activities.map((activity, index) => (
                <li key={`exp-act-${index}`}>{activity}</li>
              ))}
              <h6 className="mt-4">Tecnologias utilizadas:</h6>
              <div className={skills}>
                {experience.skills.map((sk, index) => (
                  <div className={skill} key={`exp-skill-${index}`}>
                    {sk}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
