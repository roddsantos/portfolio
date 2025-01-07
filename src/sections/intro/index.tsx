import Image from "next/image";
import Profile from "../../../public/images/rodrigo-santos-edited.jpeg";
import { INTRO_TEXT } from "@/utils/texts";
import { container, section, shadows } from "@/styles/containers";

export default function IntroSection() {
  return (
    <div className={section} id="intro">
      <div className={`${container} bg-container flex-wrap`}>
        <div className="flex items-center mb-8 w-full">
          <h3>Introdução</h3>
        </div>
        <div className="w-1/4 h-60">
          <Image
            className={`object-cover pos w-60 h-60 ${shadows}`}
            src={Profile}
            alt="profile-photo"
          />
        </div>
        <h5 className="w-2/3">{INTRO_TEXT}</h5>
      </div>
    </div>
  );
}
