"use client";
import { primaryButton, secondaryButton } from "@/styles/buttons";
import { Tooltip } from "@nextui-org/tooltip";

export default function StartSection() {
  const startContainer =
    "flex flex-col justify-center items-left w-screen h-[55vh] p-12 bg-transparent ml-auto";

  type CustomTooltipType = {
    title: string;
  };

  const CustomTooltip = ({ title }: CustomTooltipType) => (
    <div
      className={`bg-primary p-2 border-black border-solid border-2 shadow-[5px_5px_black]`}
    >
      <h6 className="text-background">{title}</h6>
    </div>
  );

  return (
    <div className={startContainer} id="start">
      <h1 className="text-primary">Rodrigo</h1>
      <h1 className="text-foreground font-light">Santos</h1>
      <h4 className="text-foreground mt-2">Full Stack Web Developer</h4>
      <div className="space-x-2 mt-16 flex">
        <Tooltip content={<CustomTooltip title="Ver currículo" />}>
          <a className="h-max" href="" target="_blank">
            <button className={secondaryButton + " h-[50px]"}>
              <i className="material-symbols-outlined text-foreground text-2xl">
                file_open
              </i>
            </button>
          </a>
        </Tooltip>
        <Tooltip content={<CustomTooltip title="Linkedin" />}>
          <a
            className="h-max"
            href="http://linkedin.com/in/roddsantos"
            target="_blank"
          >
            <button className={primaryButton + " h-[50px]"}>
              <i className="devicon-linkedin-plain text-background text-2xl"></i>
            </button>
          </a>
        </Tooltip>
        <Tooltip content={<CustomTooltip title="Github" />}>
          <a href="http://github.com/roddsantos" target="_blank">
            <button className={primaryButton + " h-[50px]"}>
              <i className="devicon-github-original text-background text-2xl"></i>
            </button>
          </a>
        </Tooltip>
        <Tooltip content={<CustomTooltip title="Email" />}>
          <a href="mailto:rodri.soares95@gmail.com">
            <button className={primaryButton + " h-[50px]"}>
              <i className="material-symbols-outlined text-background text-2xl">
                mail
              </i>
            </button>
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
