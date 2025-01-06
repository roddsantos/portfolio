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
        <div className="w-1/3 h-60 overflow-hidden ">
          <Image
            className="object-cover pos top-10 w-60 h-60 rounded-xl"
            src={Profile}
            alt="profile-photo"
          />
        </div>
        <h5 className="w-full">{INTRO_TEXT}</h5>
      </div>
    </div>
  );
}
