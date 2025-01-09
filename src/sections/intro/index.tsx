import Image from "next/image";
import Profile from "../../../public/images/rodrigo-santos-edited.jpeg";
import { INTRO_TEXT } from "@/utils/texts";
import { container, section, shadows } from "@/styles/containers";

export default function IntroSection() {
  return (
    <section className={section} id="intro" tabIndex={0}>
      <article
        className={`${container} justify-around bg-container-2 flex-wrap sm:flex-wrap`}
      >
        <h3 className="flex items-center mb-8 w-full">Introdução</h3>
        <div className="w-max md:w-60 h-40 md:h-60">
          <Image
            className={`object-cover pos w-40 h-40 md:w-60 md:h-60 ${shadows}`}
            src={Profile}
            alt="profile photo"
          />
        </div>
        <p className="w-full md:w-[calc(100%-20rem)] text-base lg:text-xl text-bold">
          {INTRO_TEXT}
        </p>
      </article>
    </section>
  );
}
