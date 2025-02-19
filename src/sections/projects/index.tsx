"use client";
import Resume from "@/components/Resume";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import CustomTooltip from "@/components/Tooltip";
import { primaryButton } from "@/styles/buttons";
import { container, item, shadows, transition } from "@/styles/containers";
import { PROJECTS } from "@/utils/texts";
import { useState } from "react";

export default function ProjectsSection() {
  const [expander, setExpander] = useState(PROJECTS.map(() => false));

  const handleExpander = (index: number) => {
    const collapser = document.getElementById(`project-${index}`);
    collapser?.classList.remove(expander[index] ? "max-h-screen" : "max-h-0");
    collapser?.classList.add(expander[index] ? "max-h-0" : "max-h-screen");

    const auxExpander = [...expander];
    auxExpander[index] = !auxExpander[index];
    setExpander(auxExpander);
  };
  return (
    <Section id="projects">
      <article className={`${container} bg-transparent flex-wrap md:space-y-8`}>
        <SectionTitle icon="business_center" title="Projetos" />
        {PROJECTS.map((project, index) => (
          <div
            className={`${item} bg-accent w-full`}
            key={project.id}
            onClick={() => handleExpander(index)}
          >
            <div className="flex justify-between md:flex-row flex-col">
              <div>
                <h4 className="mb-4">
                  <i className={`${project.icon} text-accent mr-4`}></i>
                  {project.name}
                </h4>
                <h5 className="mb-4">{project.period}</h5>
              </div>
              <div>
                {project.links.length > 0 && (
                  <h5 className="mb-2 md:text-end text-start">Links:</h5>
                )}
                <div className="flex flex-wrap pb-4 space-x-4">
                  {project.links.map((link) => (
                    <CustomTooltip
                      placement="bottom"
                      key={link.icon}
                      title={link.title}
                    >
                      <a href={link.url} target="_blank">
                        <button className={primaryButton + " h-[50px]"}>
                          <i
                            className={`${link.icon} text-foreground text-3xl`}
                          ></i>
                        </button>
                      </a>
                    </CustomTooltip>
                  ))}
                </div>
              </div>
            </div>

            <div id={`project-${index}`} className={transition}>
              <p className="mb-4">{project.description}</p>
              <h5 className="mb-2">Principais tecnologias utilizadas:</h5>
              <div className="flex flex-wrap pb-4">
                {project.mainSkills.map((ms) => (
                  <div
                    key={ms.className}
                    className={`flex flex-col mr-4 mb-4 align-center justify-center bg-accent ${shadows} p-2`}
                  >
                    <i
                      className={`${ms.className} text-background text-5xl m-auto`}
                    ></i>
                    <p className="text-background text-center">{ms.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <p className="font-bold text-left w-full">
          Para mais informações dos projetos, acesse o{" "}
          <Resume className="underline decoration-4">currículo</Resume>
        </p>
      </article>
    </Section>
  );
}
