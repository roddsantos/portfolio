import Image from "next/image";
import Profile from "../../../public/images/rodrigo_santos.jpeg";
import { INTRO_TEXT } from "@/utils/texts";

export default function IntroSection() {
  const intro = "w-full h-auto";
  const container =
    "flex flex-row justify-center items-center p-12 bg-container rounded-xl";
  return (
    <div className={intro}>
      <div className="flex items-center ml-12 my-4">
        <h3>Introdução</h3>
      </div>
      <div className={container}>
        <div className="w-1/2 h-80 overflow-hidden ">
          <Image
            className="object-cover pos top-10 w-80 h-80 rounded-xl"
            src={Profile}
            alt="profile-photo"
          />
        </div>
        <h4 className="w-1/2">{INTRO_TEXT}</h4>
      </div>
    </div>
  );
}
