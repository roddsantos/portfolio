"use client";
import Resume from "@/components/Resume";
import CustomTooltip from "@/components/Tooltip";
import { primaryButton, secondaryButton } from "@/styles/buttons";

export default function StartSection() {
  const startContainer =
    "flex flex-col justify-center items-left w-full h-[75vh] pl-6 pb-12 pt-44 bg-transparent ml-auto";

  return (
    <div className={startContainer} id="start">
      <h1 className="text-primary">Rodrigo</h1>
      <h1 className="text-foreground font-light">Santos</h1>
      <h4 className="text-foreground mt-2">Full Stack Web Developer</h4>
      <div className="space-x-2 mt-16 flex">
        <Resume>
          <CustomTooltip title="Currículo">
            <button className={secondaryButton + " h-[50px]"}>
              <i className="bx bxs-file-pdf text-foreground text-3xl"></i>
            </button>
          </CustomTooltip>
        </Resume>
        <CustomTooltip title="Linkedin">
          <a
            className="h-max"
            href="http://linkedin.com/in/roddsantos"
            target="_blank"
          >
            <button className={primaryButton + " h-[50px]"}>
              <i className="devicon-linkedin-plain text-foreground text-3xl"></i>
            </button>
          </a>
        </CustomTooltip>
        <CustomTooltip title="Github">
          <a href="http://github.com/roddsantos" target="_blank">
            <button className={primaryButton + " h-[50px]"}>
              <i className="devicon-github-original text-foreground text-3xl"></i>
            </button>
          </a>
        </CustomTooltip>
        <CustomTooltip title="Email">
          <a href="mailto:contato.roddsantos@gmail.com" target="_blank">
            <button className={primaryButton + " h-[50px]"}>
              <i className="bx bxs-envelope text-foreground text-3xl"></i>
            </button>
          </a>
        </CustomTooltip>
      </div>
    </div>
  );
}
