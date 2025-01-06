import Image from "next/image";
import Profile from "../../../public/images/rodrigo_santos.jpeg";
import { INTRO_TEXT } from "@/utils/texts";
import { container, section } from "@/styles/containers";

export default function IntroSection() {
  const shadow =
    "shadow-[10px_10px_0px_-3px_var(--container),10px_10px_var(--accent)]";
  return (
    <div className={section} id="intro">
      <div
        className={`${container} ${shadow} bg-container border-accent flex-wrap`}
      >
        <div className="flex items-center mb-8 w-full">
          <h3>Introdução</h3>
        </div>
        <div className="w-1/4 h-60 overflow-hidden">
          <Image
            className="object-cover pos top-10 w-60 h-60 rounded-xl"
            src={Profile}
            alt="profile-photo"
          />
        </div>
        <h5 className="w-2/3">{INTRO_TEXT}</h5>
      </div>
    </div>
  );
}
