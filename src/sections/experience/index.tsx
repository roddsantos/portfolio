"use client";

import {
  container,
  item,
  section,
  skill,
  transition,
} from "@/styles/containers";
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

  const skills = "flex flex-wrap mt-6";
  const addClasses =
    "bg-background border-none shadow-none flex-wrap xl:space-y-8 justify-between";

  return (
    <section className={section} id="experience" tabIndex={0}>
      <article className={`${container} ${addClasses} items-start`}>
        <h3 className="mr-auto w-full">Experiência</h3>
        {EXPERIENCE.map((experience, index) => (
          <div
            key={experience.id}
            className={`${item} bg-accent xl:w-[48%] w-full`}
            onClick={() => handleExpander(index)}
          >
            <h4 className="mb-2">{experience.role}</h4>
            <h5>{experience.name}</h5>
            <h5 className="mb-2">{experience.period}</h5>
            <div id={`exp-${index}`} className={transition}>
              <p className="mb-2">{experience.description}</p>
              {/* {experience.activities.map((activity, index) => (
                <li key={`exp-act-${index}`}>{activity}</li>
              ))} */}
              <h5 className="mt-4">Tecnologias utilizadas:</h5>
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
        <p className="font-bold text-left w-full">
          Para mais informações de atividades, acesse o{" "}
          <a className="text-accent" href="">
            currículo
          </a>
        </p>
      </article>
    </section>
  );
}
