"use client";
import { primaryButton } from "@/styles/buttons";
import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import GitHub from "../../../public/images/github.png";
import Linkedin from "../../../public/images/linkedin_black.svg";
import GitHubWhite from "../../../public/images/github_white.png";
import LinkedinWhite from "../../../public/images/linkedin_white.png";

export default function StartSection() {
  const startContainer =
    "flex flex-col justify-center items-left w-screen h-[55vh] p-12 bg-transparent ml-auto";

  type CustomTooltipType = {
    title: string;
  };

  const CustomTooltip = ({ title }: CustomTooltipType) => (
    <div className="bg-primary mb-4 p-2">
      <h6 className="text-background">{title}</h6>
    </div>
  );

  return (
    <div className={startContainer} id="start">
      <h1 className="text-primary">Rodrigo</h1>
      <h1 className="text-foreground font-light">Santos</h1>
      <h4 className="text-foreground mt-2">Full Stack Web Developer</h4>
      <div className="space-x-2">
        <Tooltip content={<CustomTooltip title="Linkedin" />}>
          <a href="http://linkedin.com/in/roddsantos" target="_blank">
            <button className={primaryButton + " bg-accent mt-2"}>
              <span>
                <Image
                  className="w-6 h-6"
                  src={LinkedinWhite}
                  alt="profile-photo"
                />
              </span>
            </button>
          </a>
        </Tooltip>
        <Tooltip content={<CustomTooltip title="Github" />}>
          <a href="http://github.com/roddsantos" target="_blank">
            <button className={primaryButton + " mt-2"}>
              <Image
                className="object-cover pos top-10 w-6 h-6"
                src={GitHubWhite}
                alt="profile-photo"
              />
            </button>
          </a>
        </Tooltip>
        <Tooltip content={<CustomTooltip title="Email" />}>
          <a href="mailto:rodri.soares95@gmail.com">
            <button className={primaryButton + " mt-2 pb-0"}>
              <span className="material-symbols-outlined text-white">mail</span>
            </button>
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
