"use client";
import CustomTooltip from "@/components/Tooltip";
import { primaryButton, secondaryButton } from "@/styles/buttons";

export default function StartSection() {
  const startContainer =
    "flex flex-col justify-center items-left w-screen h-[55vh] p-12 bg-transparent ml-auto";

  return (
    <div className={startContainer} id="start">
      <h1 className="text-primary">Rodrigo</h1>
      <h1 className="text-foreground font-light">Santos</h1>
      <h4 className="text-foreground mt-2">Full Stack Web Developer</h4>
      <div className="space-x-2 mt-16 flex">
        <CustomTooltip title="Ver currículo">
          <a className="h-max" href="" target="_blank">
            <button className={secondaryButton + " h-[50px]"}>
              <i className="bx bxs-file-pdf text-foreground text-3xl"></i>
            </button>
          </a>
        </CustomTooltip>
        <CustomTooltip title="Linkedin">
          <a
            className="h-max"
            href="http://linkedin.com/in/roddsantos"
            target="_blank"
          >
            <button className={primaryButton + " h-[50px]"}>
              <i className="devicon-linkedin-plain text-background text-3xl"></i>
            </button>
          </a>
        </CustomTooltip>
        <CustomTooltip title="Github">
          <a href="http://github.com/roddsantos" target="_blank">
            <button className={primaryButton + " h-[50px]"}>
              <i className="devicon-github-original text-background text-3xl"></i>
            </button>
          </a>
        </CustomTooltip>
        <CustomTooltip title="Email">
          <a href="mailto:rodri.soares95@gmail.com">
            <button className={primaryButton + " h-[50px]"}>
              <i className="bx bxs-envelope text-background text-3xl"></i>
            </button>
          </a>
        </CustomTooltip>
      </div>
    </div>
  );
}
