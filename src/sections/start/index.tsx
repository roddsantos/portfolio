"use client";
import { secondaryButton } from "@/styles/buttons";
import Image from "next/image";
import GitHub from "../../../public/images/github.png";
import Linkedin from "../../../public/images/linkedin_black.svg";
import GitHubWhite from "../../../public/images/github_white.png";
import LinkedinWhite from "../../../public/images/linkedin_white.png";

export default function StartSection() {
  const startContainer =
    "flex flex-col justify-center items-left w-screen h-1/3 p-12 bg-transparent rounded-xl ml-auto mb-48";

  return (
    <div className={startContainer} id="start">
      <h1 className="text-primary">Rodrigo</h1>
      <h1 className="text-foreground font-light">Santos</h1>
      <h4 className="text-foreground mt-2">Full Stack Web Developer</h4>
      <div className="space-x-2">
        <a href="http://linkedin.com/in/roddsantos" target="_blank">
          <button className={secondaryButton + " mt-2"}>
            <span>
              <Image className="w-6 h-6" src={Linkedin} alt="profile-photo" />
            </span>
          </button>
        </a>
        <a href="http://github.com/roddsantos" target="_blank">
          <button className={secondaryButton + " mt-2"}>
            <Image
              className="object-cover pos top-10 w-6 h-6"
              src={GitHub}
              alt="profile-photo"
            />
          </button>
        </a>
        <a href="mailto:rodri.soares95@gmail.com">
          <button className={secondaryButton + " mt-2 pb-0"}>
            <span className="material-symbols-outlined">mail</span>
          </button>
        </a>
      </div>
    </div>
  );
}
