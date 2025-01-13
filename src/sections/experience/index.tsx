"use client";

import Resume from "@/components/Resume";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { container, item, skill, transition } from "@/styles/containers";
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
    <Section id="experience">
      <article className={`${container} ${addClasses} items-start`}>
        <SectionTitle icon="badge" title="Experiência" />
        {EXPERIENCE.map((experience, index) => (
          <div
            key={experience.id}
            className={`${item} bg-accent xl:w-[47%] w-full`}
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
          Para mais informações sobre atividades e projetos realizados, acesse o{" "}
          <Resume className="underline decoration-4">currículo</Resume>
        </p>
      </article>
    </Section>
  );
}
